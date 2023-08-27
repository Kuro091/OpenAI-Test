import React from 'react';
import { Chat } from './type';
import { ChatInput } from './ChatInput';

interface ChatInputsProps {
  chats: Chat[];
}

export const ChatInputs = ({ chats }: ChatInputsProps) => {
  return (
    <>
      {chats.map((chat, index) => {
        return (
          <div key={index} className='flex flex-col'>
            <ChatInput className='self-start'>{chat.question}</ChatInput>
            <ChatInput className='self-end'>{chat.answer}</ChatInput>
          </div>
        );
      })}
    </>
  );
};
