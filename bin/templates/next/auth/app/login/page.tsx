'use client';

import Image from 'next/image';
import { P } from '@undp/design-system-react/Typography';
import { Button } from '@undp/design-system-react/Button';

import { signIn } from '@/lib/auth-client';

export default function LoginPage() {
  const handleSignIn = async () => {
    await signIn.social({
      provider: 'microsoft',
      callbackURL: '/user',
    });
  };

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
      <div className='flex justify-center'>
        <Button onClick={handleSignIn} variant='tertiary'>
          Sign in with Microsoft
        </Button>
      </div>
    </>
  );
}
