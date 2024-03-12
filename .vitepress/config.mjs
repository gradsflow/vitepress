import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gradsflow",
  description: "Unleash the Power of AI in Your Products. Build GenAI models with Gradsflow.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://ik.imagekit.io/gradsflow/logo/v2/4_pP1S1LsQq.png',
    head: [['link', { rel: 'icon', href: 'https://ik.imagekit.io/gradsflow/logo/v2/gf-logo-gflow-white_vCxfpINvg.svg' }]],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/fastserve/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/gradsflow/' },
      { icon: 'discord', link: 'https://discord.gg/QqHX6D7d5H' },
      { icon: 'github', link: 'https://github.com/gradsflow/' },
    ]
  },
  sitemap: {
    hostname: 'https://gradsflow.com'
  },

  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  lastUpdated: true
})
