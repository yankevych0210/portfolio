import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['en', 'ru', 'ua'] as const;

export default getRequestConfig(async ({locale}) => {
  const actual = SUPPORTED.includes(locale as any) ? (locale as typeof SUPPORTED[number]) : 'en';
  return {
    locale: actual,
    timeZone: 'Europe/Kyiv',
    messages: (await import(`../messages/${actual}.json`)).default
  };
});
