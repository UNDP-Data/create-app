'use client';

import { H6, P } from '@undp/design-system-react/Typography';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='flex gap-4 items-center justify-center my-8 mx-auto'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={100}
          height={20}
          priority
        />
        <P marginBottom='none'>&</P>
        <Image
          className='dark:invert'
          src='/undp-logo-blue.svg'
          alt='UNDP logo'
          width={40}
          height={20}
          priority
        />
      </div>
      <H6 marginBottom='xl' className='text-center'>
        This is the about page.
      </H6>
    </>
  );
}
