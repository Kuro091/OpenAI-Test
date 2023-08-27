import { HTMLAttributes } from 'react';

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ChatInput = ({ children, className, ...props }: ChatInputProps) => {
  return (
    <div className={['whitespace-pre-wrap my-6', className].join(' ')} {...props}>
      {children}
    </div>
  );
};
