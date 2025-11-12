'use client';

import { P } from '@undp/design-system-react/Typography';
import { Button } from '@undp/design-system-react/Button';
import Image from 'next/image';

import { useCounterActions, useCounter } from '@/stores/counter';

export default function Home() {
  const count = useCounter();
  const { increment, decrement } = useCounterActions();
  return (
    <>
      <div className='flex gap-4 items-center justify-center my-8 mx-auto'>
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
      <div className='flex gap-4 justify-center'>
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
      </div>
    </>
  );
}
