'use client';

import { Button } from '@/components/Button';
import { useCompletion } from 'ai/react';
import Link from 'next/link';

export default function ChatPage() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();

  return (
    <div className='mx-auto w-full max-w-md py-24 flex flex-col'>
      <form onSubmit={handleSubmit}>
        <input
          className='w-full max-w-md bottom-0 border border-gray-300 rounded shadow-sm p-2'
          value={input}
          placeholder='Enter your prompt...'
          onChange={handleInputChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
      <div className='whitespace-pre-wrap my-6'>{completion}</div>
      <Link
        href='/'
        className='px-9 py-4 border border-blue-950 bg-blue-500 font-bold text-white rounded-lg shadow-md hover:bg-blue-600 self-start'
      >
        Go back
      </Link>
    </div>
  );
}
