import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "EmuTrain",
  description: "EmuTrain's Official Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/main.png',
      dark: '/main.png'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '介绍', link: '/aio' }
    ],

    sidebar: [
      {
        text: '主要',
        items: [
          { text: '首页', link: '/' },
          { text: '下载', link: '/download' }
        ]
      },
      {
        text: '介绍',
        items: [
          { text: '交流群', link: '/qq' },
          { text: 'EmuAIO', link: '/aio' },
          { text: 'EmuTravel', link: '/travel' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EmuTrain/emutrain.github.io' }
    ]
  }
})
