const path = require("path");
module.exports = {
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/img/favicon.ico` }],
    ['link', { rel: 'stylesheet', href: '/css/bootstrap.min.css' }],
    ['link', { rel: 'stylesheet', href: '/css/base.css' }],
    ['link', { rel: 'stylesheet', href: '/css/day.css', media: '(prefers-color-scheme: no-preference), (prefers-color-scheme: light)' }],
    ['link', { rel: 'stylesheet', href: '/css/night.css', media: '(prefers-color-scheme: dark)' }],
    ['script', { src: '/js/bootstrap.bundle.min.js' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '中原铁道（数字）博物馆',
      description: '上世纪五十年代末期，河南省开始兴办地方铁路。半个多世纪间，先后有16条地方铁路线路横贯中原大地，长度逾1,600千米。欢迎来到中原铁道 (数字) 博物馆，开启一场轨距762毫米的旅程。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Central 762, a Museum for Narrow Gauge Railways in China',
      description: "In the late 1950s, Henan Province began to build local railways. Over the past half century, 16 local railway lines have traversed the Central Plains of China, with a total length of more than 1,600 kilometers. Welcome to Central 762, a Museum for Narrow Gauge Railways in China, and start an exploration journey about China's narrow gauge railway."
    },
  },
  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
  ],
	themeConfig: {
		logo: '/img/logo.png',
    locales: {
      '/': {
        searchLabel: '中原铁道（数字）博物馆',
        langLabel: '简体中文',
        nav: [
          { text: '漫游', link: '/tour/' },
          { text: '车辆', link: '/depot/' },
          { text: '展览', link: '/expo/' },
          { text: '史话', link: '/history/' },
          { text: '专栏', link: '/column/' },
          { text: '资料', link: 'https://leeward-channel-287.notion.site/762-004e72e669f24c16bf2f6497b5fe1866' },
        ],
        footerNav: [
          { text: '帮助', link: '/about/help/'},
          { text: '服务状态', link: 'https://stats.uptimerobot.com/0n1DlcJrMY'},
          { text: '更新日志', link: '/about/updates/'},
        ]
      },
      '/en/': {
        searchLabel: 'Central 762',
        langLabel: 'English',
        nav: [
          { text: 'Tour', link: '/en/tour/' },
          { text: 'Depot', link: '/en/depot/' },
          { text: 'Exhibition', link: '/en/expo/' },
          { text: 'History', link: '/en/history/' },
          { text: 'Column', link: '/en/column/' },
          { text: 'Collections', link: 'https://leeward-channel-287.notion.site/762-004e72e669f24c16bf2f6497b5fe1866' },
        ],
        footerNav: [
          { text: 'Help', link: '/en/about/help/'},
          { text: 'Service Status', link: 'https://stats.uptimerobot.com/0n1DlcJrMY'},
          { text: 'Update Log', link: '/en/about/updates/'},
        ]
      }
    },

    globalVariables: {
    }
	},
  enhanceAppFiles: [path.resolve(__dirname, "enhanceApp.js")],
  markdown: {
    anchor: {
      permalink: false
    }
  },
}
