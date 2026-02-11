export default {
  title: '大模型排行榜',
  description: '2026 主流大模型深度对比',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'LLM Rankings',
    nav: [
      { text: '首页', link: '/' },
      { text: 'OpenAI', link: '/openai' }
    ],
    sidebar: [
      {
        text: '厂商对比',
        items: [
          { text: 'OpenAI', link: '/openai' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname/llm-rankings' }
    ],
    footer: {
      message: 'Released under MIT License.',
      copyright: 'Copyright © 2026 lever'
    }
  }
}