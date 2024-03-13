import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gradsflow",
  description: "Unleash the Power of AI in Your Products. Build GenAI enabled product with Gradsflow.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://ik.imagekit.io/gradsflow/logo/v2/4_pP1S1LsQq.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/fastserve/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'FastServe', link: '/fastserve/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/gradsflow/' },
      { icon: 'discord', link: 'https://discord.gg/QqHX6D7d5H' },
      { icon: 'github', link: 'https://github.com/gradsflow/' },
    ]
  },
  head: [['link', { rel: 'icon', href: 'https://ik.imagekit.io/gradsflow/logo/v2/gf-logo-gflow-white_vCxfpINvg.svg' }]],
  sitemap: {
    hostname: 'https://gradsflow.com'
  },

  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  lastUpdated: true
})
