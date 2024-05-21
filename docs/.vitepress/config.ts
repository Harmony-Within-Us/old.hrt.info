import { createContentLoader, defineConfig } from 'vitepress';
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links = []

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'HRT.info',
  description:
    'Your go-to resource for Hormone Replacement Therapy information.',

  ignoreDeadLinks: true,
  /*head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Harmony-Within-Us/cdn/main/favicon/favicon.ico' }]],*/
  themeConfig: {
    socialLinks: [
      { icon : 'github', link: 'https://github.com/harmony-within-us/hrt.info/'},
      { icon : 'discord', link: 'https://discord.gg/mgtbUuy79m'}
    ],
   /* logo: 'https://raw.githubusercontent.com/Harmony-Within-Us/cdn/main/icon/harmony%20within%20us.svg',*/
    sidebar: [
      {
        text: 'Estradiol',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/guide/estradiol/',
          },
          {
            text: 'Pills',
            link: '/guide/estradiol/pills/',
          },
          {
            text: 'Injections',
            link: '/guide/estradiol/injections/',
          },
          {
            text: 'Patches',
            link: '/guide/estradiol/patches/',
          },
          
        ],
      },
      {
        text: 'Anti-Androgens',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/guide/anti-androgens/',
          },
          {
            text: 'Spironolactone',
            link: '/guide/anti-androgens/spironolactone/',
          },
          {
            text: 'Cyproterone Acetate',
            link: '/guide/anti-androgens/cyproterone-acetate/',
          },
          
        ],
      },
      {
        text: 'Progesterone',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/guide/progesterone/',
          },
          {
            text: 'Oral',
            link: '/guide/progesterone/oral/',
          },
          {
            text: 'Topical',
            link: '/guide/progesterone/topical/',
          },
          
        ],
      },
      /*{
        text: 'Hair Loss',
        collapsed: true,
        items: [
          {
            text: 'Topical Treatments',
            link: '/guide/hair-loss/topical-treatments/',
          },
          {
            text: 'Oral Medications',
            link: '/guide/hair-loss/oral-medications/',
          },
          
        ],
      },*/ //To be added at a later date.
      {
        text: 'SERMS',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/guide/serms/',
          },
          {
            text: 'Tamoxifen',
            link: '/guide/serms/tamoxifen/',
          },
          {
            text: 'Raloxifene',
            link: '/guide/serms/raloxifene/',
          },

        ],
      },
      {
        text: 'Cryptocurrency',
        link: '/crypto/',
      },

    ],
    nav: [
      { text: 'Contact', link: '/contact/' },
      { text: 'Donate', link: 'https://github.com/sponsors/harmony-within-us/' },
      { text: 'Contribute', link: 'https://github.com/harmony-within-us/hrt.info/' },
    ],
    footer: {
      message: 'Released under the CC-BY-SA-4.0 License',
      copyright: 'Copyright © 2023 Harmony Within Us'
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://hrt.info/' })
    const pages = await createContentLoader(["**/*.md"]).load();
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    pages.forEach((page) => sitemap.write(
      page.url
        .replace(/index$/g, '')
        .replace(/^\/docs/, '')
      ))
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', r))
  }
});
