import { defineConfig } from 'vitepress'
import { site } from '../meta.js'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links = []

// https://vitepress.dev/reference/site-config
export default defineConfig({
//  srcDir: './docs',
	//srcDir: './',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
      // options: {
      //   appId: 'LBLWR2QCI3',
      //   apiKey: '4338f265da64e33025f821af827dd22e',
      //   indexName: 'pileax'
      // }
    },
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: site('en').repo },
    ],
    footer: {
		message: 'Released under the CC-BY-SA-4.0 License',
		copyright: 'Copyright © 2023 Harmony Within Us'
	  },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'keywords', content: site('en').keywords }],
  ],

  transformHtml: (_, id, { pageData }) => {
	if (!/[\\/]404\.html$/.test(id)) {
		const links: { url: string; lastmod: number | undefined }[] = [];
		links.push({ url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'), lastmod: pageData.lastUpdated });
	}
},
})