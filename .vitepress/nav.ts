import {DefaultTheme} from "vitepress";

export default <DefaultTheme.NavItem[]>[
    { text: 'Home', link: '/' },
    { text: 'Getting Started', link: '/getting-started' },
    {
        text: "Repos",
        items: [
            {text: "Docker images", link: "https://github.com/supotsu-no-ochaya/supotsu-no-ochaya", target: "_blank"},
            {text: "Backend", link: "https://github.com/supotsu-no-ochaya/backend", target: "_blank"},
            {text: "Frontend", link: "https://github.com/supotsu-no-ochaya/frontend", target: "_blank"},
            {text: "Business Intelligence", link: "https://github.com/supotsu-no-ochaya/business-intelligence", target: "_blank"},
            {text: "Website", link: "https://github.com/supotsu-no-ochaya/supotsu-no-ochaya.github.io", target: "_blank"},
        ]
    }
]
