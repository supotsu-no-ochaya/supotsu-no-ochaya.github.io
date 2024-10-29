import {defineConfig} from "vitepress";


export const shared = defineConfig({
    title: "Supotsu no Ochaya",
    titleTemplate: "Supotsu no Ochaya",
    description: "Order System",

    rewrites: {
        'en/:rest*': ':rest*'
    },

    srcDir: 'src/',
    srcExclude: ['**/README.md', '**/TODO.md'],
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        ['meta', { property: 'og:title', content: 'Supotsu no Ochaya | Order System' }],
        ['meta', { property: 'og:site_name', content: 'Supotsu no Ochaya' }],
        ['meta', { property: 'og:image', content: 'https://supotsu-no-ochaya.github.io/og-image.png' }],
        ['meta', { property: 'og:image:type', content: 'image/png' }],
        ['meta', { property: 'og:url', content: 'https://supotsu-no-ochaya.github.io/' }],
    ],

    themeConfig: {
        logo: {
            src: '/logo.svg',
            width: 24,
            height: 24,
        },
        footer: {
            message: `<a href="/about">About Us</a> • <a href="/disclaimer">Disclaimer</a>`,
            copyright: `Copyright © 2024-present <a href='https://github.com/supotsu-no-ochaya/'>Supotsu no Ochaya</a>`,
        },
        search: {
            provider: "local",
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/supotsu-no-ochaya/' }
        ],
    },

    ignoreDeadLinks: 'localhostLinks',
    markdown: {
        image: {
            lazyLoading: true,
        }
    }
})
