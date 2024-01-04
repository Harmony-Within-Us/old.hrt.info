import { defineConfig } from 'vitepress'
import { nav } from '../theme/nav.js'
import { sidebarItems } from '../theme/sidebar.js'
import { labels } from '../theme/labels.js'
import { site } from '../../meta.js'

const locale = 'LOCALE HERE'; //why cant we just use an array or something, what the fuck
//seriously, if we could put multiple here we'd only need a single file for everything
//i am just plain stupid
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
}) // i have no idea how to make this more efficient or whatever
// i give up.