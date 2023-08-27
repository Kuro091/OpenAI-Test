interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  // TODO: Use tailwind merge and get rid of the mt-5
  return (
    <button
      className='mt-5 px-9 py-4 border border-blue-950 bg-blue-500 font-bold text-white rounded-lg shadow-md hover:bg-blue-600'
      {...props}
    >
      {children}
    </button>
  );
};
