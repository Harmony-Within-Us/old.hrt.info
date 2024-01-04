/*

export const name = 'HRT.Info';
export const keywords = 'HRT.info, HRT, info, transgender, lgbt, lgbtq';
export const description = 'Your go-to resource for Hormone Replacement Therapy information.';
export const descriptionZh = 'VitePress 国际化模板';
export const site = 'https://hrt.info';
export const repo = 'https://github.com/harmony-within-us/hrt.info';
*/

import { tr } from './i18n';

export function site(locale :string) {
  const t = (key :string) => {
	return tr(locale, `theme.${key}`)
  }
  return {
	name: 'HRT.Info',
  	title: 'HRT.info',
  	description: t('description'),
  	editText: t('editPageText'),
  	keywords: 'HRT.info, HRT, info, transgender, lgbt, lgbtq',
  	site: 'https://hrt.info',
  	repo:'https://github.com/harmony-within-us/hrt.info',
}
}