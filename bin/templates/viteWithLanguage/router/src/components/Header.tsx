import {
  Header,
  HeaderActions,
  HeaderLogoUnit,
  HeaderMainNavUnit,
  HeaderMenuUnit,
} from '@undp/design-system-react/Header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@undp/design-system-react/DropdownMenu';
import { Link, useParams } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcherIcon, ChevronDown } from '@/Icons';
import { DEFAULT_LANGUAGE, LANGUAGES } from '@/constants';

export default function HeaderEl() {
  const params = useParams({ strict: false });
  const locale =
    params.locale && LANGUAGES.map(d => d.id).includes(params.locale)
      ? params.locale
      : DEFAULT_LANGUAGE;
  const { t } = useTranslation();
  return (
    <Header>
      <HeaderLogoUnit
        hyperlink={locale === DEFAULT_LANGUAGE ? '/' : `/${locale}`}
        siteName='Site name'
        siteSubName='Sub-site name'
      />
      <HeaderMainNavUnit>
        <HeaderMenuUnit>
          <Link to='/{-$locale}'>{t('home')}</Link>
          <Link to='/{-$locale}/about'>{t('about')}</Link>
        </HeaderMenuUnit>
        <HeaderActions>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='cursor-pointer flex h-9 flex gap-2 rtl:[direction:rtl] items-center text-primary-blue-600 hover:text-primary-blue-400 dark:text-primary-white dark:hover:text-primary-white uppercase font-semibold text-sm justify-between whitespace-nowrap bg-transparent p-0 data-[placeholder]:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&[data-state=open]>.chevron-down]:rotate-180'>
                <LanguageSwitcherIcon />
                {LANGUAGES.find(d => d.id === locale)?.label}
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {LANGUAGES.map(d => (
                <DropdownMenuItem key={d.id} asChild>
                  <Link
                    to='.'
                    params={{
                      ...params,
                      locale: d.id,
                    }}
                    preload={false}
                    className='w-full'
                  >
                    {d.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </HeaderActions>
      </HeaderMainNavUnit>
    </Header>
  );
}
