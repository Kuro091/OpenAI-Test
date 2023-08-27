'use client';

import { useCompletion } from 'ai/react';
import Link from 'next/link';
import { ChatInput } from './_components/ChatInput';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { ChatInputs } from './_components/ChatInputs';
import { Chat } from './_components/type';

const putInTemplate = (prompt: string, completion: string) => {
  return `
  Question: ${prompt}
  Answer: ${completion}
  `;
};

export default function ChatContextPage() {
  const { input, handleInputChange, setInput, complete, completion, isLoading } = useCompletion({
    api: '/api/completionWithContext',
    onFinish: (prompt, completion) => {
      setContext((prev) => [...prev, { question: prompt, answer: completion }]);
    },
  });

  const [context, setContext] = useState<Chat[]>([]);
  const derivedContext = context.map((chat) => {
    const str = putInTemplate(chat.question, chat.answer);
    return str;
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    complete(input, {
      body: {
        context: derivedContext,
      },
    });
    setInput('');
  };

  return (
    <div className='grid grid-cols-2'>
      <div className='mx-auto w-full max-w-md py-24 flex flex-col'>
        <form onSubmit={handleSubmit}>
          <input
            className='w-full max-w-md bottom-0 border border-gray-300 rounded shadow-sm p-2'
            value={input}
            placeholder='Enter your prompt...'
            onChange={handleInputChange}
          />
          <input hidden name='context' value={derivedContext} readOnly />
          <Button type='submit'>Submit</Button>
        </form>
        {completion}
        <Link
          href='/'
          className='mt-5 px-9 py-4 border border-blue-950 bg-blue-500 font-bold text-white rounded-lg shadow-md hover:bg-blue-600 self-start'
        >
          Go back
        </Link>
      </div>
      <div className='w-full max-w-md py-24 flex flex-col'>
        Chat history:
        <ChatInputs chats={context} />
      </div>
    </div>
  );
}
