import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Supotsu no Ochaya",
  description: "Order System",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' }
    ],

    sidebar: [

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/supotsu-no-ochaya/' }
    ]
  }
})
