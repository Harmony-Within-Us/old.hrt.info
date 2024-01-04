import { tr } from '../../i18n'
import { site } from '../../meta.js'
import { DefaultTheme } from "vitepress";

export function nav(locale :string) {
  const t = (key :string) => {
    return tr(locale, `nav.${key}`)
  }
  const base = (locale === 'en') ? '' : `/${locale}`;
  return [

	{ text: t('Contact'), link: base + '/contact/' },
    { text: t('Donate'), link: 'https://github.com/sponsors/harmony-within-us/' },
    { text: t('Contribute'), link: 'https://github.com/harmony-within-us/hrt.info/' },
    { text: t('Translate'), link: 'https://translate.hrt.info/' },

  ] as DefaultTheme.NavItem[];
}