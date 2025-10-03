import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['en', 'ru', 'ua'] as const;
type SupportedLocale = typeof SUPPORTED[number];

function isSupportedLocale(l: string): l is SupportedLocale {
  return (SUPPORTED as readonly string[]).includes(l);
}

export default getRequestConfig(async ({locale}: {locale?: string}) => {
  const input = typeof locale === 'string' ? locale : '';
  const actual: SupportedLocale = isSupportedLocale(input) ? input : 'en';
  return {
    locale: actual,
    timeZone: 'Europe/Kyiv',
    messages: (await import(`../messages/${actual}.json`)).default
  };
});
