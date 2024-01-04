import { defineConfig } from 'vitepress'
import commonConfig from './common.mjs'
import defaultConfig from './default.mjs'

import configZh from './locales/zh.mjs'
import configDe from './locales/de.mjs'
import configNl from './locales/nl.mjs'
import configFr from './locales/fr.mjs'
import configIt from './locales/it.mjs'
import configRu from './locales/ru.mjs'
import configPl from './locales/pl.mjs'
import configJa from './locales/ja.mjs'
import configKo from './locales/ko.mjs'

import configDebug from './locales/debug.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...commonConfig,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...defaultConfig,
    },
    zh: {
      label: '中文',
      lang: 'zh',
      ...configZh,
    },
	de: {
	  label: 'Deutsch',
	  lang: 'de',
	  ...configDe,
	},
	nl: {
	  label: 'Nederlands',
	  lang: 'nl',
	  ...configNl,
	},
	fr: {
	  label: 'Français',
	  lang: 'fr',
	  ...configFr,
	},
	it: {
	  label: 'Italiano',
	  lang: 'it',
	  ...configIt,
	},
	ru: {
	  label: 'Русский',
	  lang: 'ru',
	  ...configRu,
	},
	pl: {
	  label: 'Polski',
	  lang: 'pl',
	  ...configPl,
	},
	ja: {
	  label: '日本語',
	  lang: 'ja',
	  ...configJa,
	},
	ko: {
	  label: '한국어',
	  lang: 'ko',
	  ...configKo,
	},
	/*debug: {
	  label: 'debug',
	  lang: 'debug',
	  ...configDebug,
	}*/
  }
})