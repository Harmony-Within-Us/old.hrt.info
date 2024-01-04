import { defineConfig } from 'vitepress'
import { nav } from '../theme/nav.js'
import { sidebarItems } from '../theme/sidebar.js'
import { labels } from '../theme/labels.js'
import { site } from '../../meta.js'

const locale = 'ru';

export default defineConfig({
  title: site(locale).title,
  description: site(locale).description,
  themeConfig: {
	...labels(locale),
	nav: nav(locale),
 sidebar: {
	 '/': { base: '', items: sidebarItems(locale) },
   },

	editLink: {
		pattern: `${site(locale).repo}/edit/main/docs/:path`,
		text: site(locale).editText,
	},
  },
  head: [
  ],
})