'use client';

import {
  Header,
  HeaderLogoUnit,
  HeaderMainNavUnit,
  HeaderMenuUnit,
} from '@undp/design-system-react/Header';
import Link from 'next/link';

export default function HeaderEl() {
  return (
    <Header>
      <HeaderLogoUnit
        hyperlink='./'
        siteName='Site name'
        siteSubName='Sub-site name'
      />
      <HeaderMainNavUnit>
        <HeaderMenuUnit>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </HeaderMenuUnit>
      </HeaderMainNavUnit>
    </Header>
  );
}
