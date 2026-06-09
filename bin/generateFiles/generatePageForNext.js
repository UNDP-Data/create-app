export function generatePageForNext(query) {
  return `'use client';

import { P } from '@undp/design-system-react/Typography';
import { Button } from '@undp/design-system-react/Button';
import Image from 'next/image';${query ? `
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@undp/design-system-react/Spinner';` :''}

import { useCounterActions, useCounter } from '@/stores/counter';${query ? `

function useTodoData() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      Promise.resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ]),
  });
}` :''}

export default function Home() {
  const count = useCounter();
  const { increment, decrement } = useCounterActions();${query ? `

  const { data, isLoading, isError } = useTodoData();

  if (isLoading) return <Spinner size='lg' className='mx-auto my-20' />;

  if (isError) return <>Error</>;` : ''}
  return (
    <>
      <div className='mx-auto my-8 flex items-center justify-center gap-4'>
        <Image
          className='dark:invert'
          src='/imgs/next.svg'
          alt='Next.js logo'
          width={100}
          height={20}
          priority
        />
        <P marginBottom='none'>&</P>
        <Image
          className='dark:invert'
          src='/imgs/Tailwind_CSS_Logo.svg'
          alt='Tailwind logo'
          width={40}
          height={20}
          priority
        />
        <P marginBottom='none'>&</P>
        <Image
          className='dark:invert'
          src='/imgs/Zustand-logo.svg'
          alt='Zustand logo'
          width={40}
          height={20}
          priority
        />
        <P marginBottom='none'>&</P>
        <Image
          className='dark:invert'
          src='/imgs/undp-logo-blue.svg'
          alt='UNDP logo'
          width={40}
          height={20}
          priority
        />
      </div>
      <P marginBottom='xl' className='text-center'>
        To get started, edit the App.tsx file.{' '}
        <span className='font-bold'>Count: {count}</span>
      </P>
      <div className='mb-8 flex justify-center gap-4'>
        <Button
          variant='tertiary'
          onClick={() => {
            increment();
          }}
        >
          Increase counter
        </Button>
        <Button
          variant='tertiary'
          onClick={() => {
            decrement();
          }}
        >
          Decrease counter
        </Button>
      </div>${query ? `
      <P marginBottom='xl' className='text-center'>
        Data loaded successfully. {data?.length} elements in the query.
      </P>` : ''}
    </>
  );
}
`
}

