import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Supotsu no Ochaya",
  titleTemplate: "Supotsu no Ochaya",
  description: "Order System",
  srcDir: 'src/',
  srcExclude: ['**/README.md', '**/TODO.md'],
  lastUpdated: true,
  cleanUrls: true,
  head: [
    // favicon
    ['link', {rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' }
    ],
    sidebar: [

    ],
    footer: {
      copyright: "Copyright © 2024-present Supotsu no Ochaya",
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/supotsu-no-ochaya/' }
    ]
  },
  ignoreDeadLinks: "localhostLinks",
})
