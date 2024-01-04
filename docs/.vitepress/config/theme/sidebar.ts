import { tr } from '../../i18n';

export function sidebarItems(locale :string) {
  const t = (key :string) => {
	return tr(locale, `sidebar.${key}`)
  }
  const base = (locale === 'en') ? '' : `/${locale}`;
  return [
	{
		text: t('Estradiol'),
        collapsed: true,
        items: [
          {
            text: t('Overview'),
            link: base + '/guide/estradiol/',
          },
          {
            text: t('Pills'),
            link: base + '/guide/estradiol/pills/',
          },
          {
            text: t('Injections'),
            link: base + '/guide/estradiol/injections/',
          },
          {
            text: t('Patches'),
            link: base + '/guide/estradiol/patches/',
          },
          
        ],
	},
	{
        text: t('Anti-Androgens'),
        collapsed: true,
        items: [
          {
            text: t('Overview'),
            link: base + '/guide/anti-androgens/',
          },
          {
            text: t('Spironolactone'),
            link: base + '/guide/anti-androgens/spironolactone/',
          },
          {
            text: t('Cyproterone Acetate'),
            link: base + '/guide/anti-androgens/cyproterone-acetate/',
          },
          
        ],
    },
	{
        text: t('Progesterone'),
        collapsed: true,
        items: [
          {
            text: t('Overview'),
            link: base + '/guide/progesterone/',
          },
          {
            text: t('Oral'),
            link: base + '/guide/progesterone/oral/',
          },
          {
            text: t('Topical'),
            link: base + '/guide/progesterone/topical/',
          },
          
        ],
    },
	{
        text: t('SERMS'),
        collapsed: true,
        items: [
          {
            text: t('Overview'),
            link: base + '/guide/serms/',
          },
          {
            text: t('Tamoxifen'),
            link: base + '/guide/serms/tamoxifen/',
          },
          {
            text: t('Raloxifene'),
            link: base + '/guide/serms/raloxifene/',
          },

        ],
    },
    {
        text: t('Cryptocurrency'),
        link: base + '/crypto/',
    },
  ]
}
export function sidebarCrypto(locale :string) {
	const t = (key :string) => {
		return tr(locale, `sidebar.${key}`)
	  }
	  const base = (locale === 'en') ? '' : `/${locale}`;
	return [
	{
	  text: t('Components'),
	  link: base + '/crypto/'
	},
  ]
}