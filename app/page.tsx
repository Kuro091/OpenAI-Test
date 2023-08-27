import Link from 'next/link';

export default function MainPage() {
  return (
    <div className='w-full min-h-screen grid place-content-center bg-slate-200'>
      <div className='flex gap-x-2'>
        <Link
          href='/completion'
          className='px-9 py-4 border border-blue-950 bg-blue-500 font-bold text-white rounded-lg shadow-md hover:bg-blue-600'
        >
          Simple example
        </Link>
        <Link
          href='/completionWithContext'
          className='px-9 py-4 border border-blue-950 bg-blue-500 font-bold text-white rounded-lg shadow-md hover:bg-blue-600'
        >
          Example with context
        </Link>
      </div>
    </div>
  );
}
