import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

const catppuccinThemeColors = [
  { label: 'Rosewater', value: 'ca-rosewater', color: '#f4dbd6' },
  { label: 'Flamingo', value: 'ca-flamingo', color: '#f0c6c6' },
  { label: 'Pink', value: 'ca-pink', color: '#f5bde6' },
  { label: 'Mauve', value: 'ca-mauve', color: '#c6a0f6' },
  { label: 'Red', value: 'ca-red', color: '#ed8796' },
  { label: 'Maroon', value: 'ca-maroon', color: '#ee99a0' },
  { label: 'Peach', value: 'ca-peach', color: '#f5a97f' },
  { label: 'Yellow', value: 'ca-yellow', color: '#eed49f' },
  { label: 'Green', value: 'ca-green', color: '#a6da95' },
  { label: 'Teal', value: 'ca-teal', color: '#8bd5ca' },
  { label: 'Sky', value: 'ca-sky', color: '#91d7e3' },
  { label: 'Sapphire', value: 'ca-sapphire', color: '#7dc4e4' },
  { label: 'Blue', value: 'ca-blue', color: '#8aadf4' },
  { label: 'Lavender', value: 'ca-lavender', color: '#b7bdf8' },
];

// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: false,
  vpHome: true,
  anchorScroll: true,
  themeEnhance: {
    position: 'top',
    layoutSwitch: {
      disabled: false,
      defaultMode: 'bothWidthAdjustable'
    },
    themeColor: {
      disabled: false,
      // 仅展示下方自定义的 Catppuccin 色板。
      customize: true,
      defaultColorName: 'ca-lavender',
      defaultSpread: false,
      append: [
        {
          label: 'Catppuccin',
          tip: 'Latte / Macchiato',
          options: catppuccinThemeColors,
        },
      ],
    },
    spotlight: {
      disabled: false,
      defaultStyle: 'aside',
      defaultValue: true
    }
  },
  codeBlock: {
    enabled: true,
    collapseHeight: false,
    overlay: false,
    langTextTransform: 'uppercase'
  },
  toComment: {
    enabled: true
  },
  comment: {
    provider: "giscus",
    options: {
      repo: "AstralFlare-owo/TZ-Site",
      repoId: "R_kgDOMpUFhQ",
      category: "Giscus 评论系统",
      categoryId: "DIC_kwDOMpUFhc4Ch_yZ",
      reactionsEnabled: "1",
      mapping: "pathname",
      lang: "zh-CN",
      emitMetadata: "0",
      strict: "0",
      // @ts-ignore
      theme: (isDark: boolean) => isDark ? "catppuccin_macchiato" : "catppuccin_latte",
      inputPosition: "top",
      loading: "lazy"
    }
  },
  siteAnalytics: [
    {
      provider: "umami",
      options: {
        id: "3a5d6659-cce3-42cd-9353-20ec242a6feb",
        src: "https://cloud.umami.is/script.js"
      }
    }
  ]
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "岩的小站",
  description: "一块板岩是平凡而脆弱的，但它的每一片岩层都有自己的故事。",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
      { text: 'CTMC Wiki', link: '/ctmc/', activeMatch: '/ctmc/' }
    ],

    sidebar: {
      '/ctmc/': [
        {
          text: 'CTMC Wiki',
          items: [
            { text: '关于服务器', link: '/ctmc/' },
            { text: '新玩家指南', link: '/ctmc/newbie' },
            { text: '服规与群规', link: '/ctmc/rules' },
            { text: '你服特有的梗', link: '/ctmc/memes' },
            { text: '大事表', link: '/ctmc/events' },
            { text: '名人堂', link: '/ctmc/hall' },
            { text: '贡献', link: '/ctmc/contrib' }
          ]
        },
        {
          text: '公示栏',
          items: [
            { text: '处罚公示', link: '/ctmc/announce/punishments' },
            { text: '公告', link: '/ctmc/announce/announcements' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AstralFlare-owo/dpslt-site' }
    ]
  }
})
