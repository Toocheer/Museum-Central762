const path = require("path");
const getLastCommitInfo = require('./gitInfo');
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
  },
  plugins: [
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
		nav: [
		  { text: '漫游', subtext: 'Tour', link: '/tour/' },
		  { text: '车辆', subtext: 'Depot', link: '/depot/' },
		  { text: '展览', subtext: 'Expo', link: '/expo/' },
		  { text: '历史', subtext: 'History', link: '/history/' },
      { text: '专栏', subtext: 'Column', link: '/column/' },
		  { text: '资料', subtext: 'Collections', link: 'https://leeward-channel-287.notion.site/762-004e72e669f24c16bf2f6497b5fe1866' },
		],
    globalVariables: {
      GIT_INFO: getLastCommitInfo(),
    }
	},
  enhanceAppFiles: [path.resolve(__dirname, "enhanceApp.js")],
  markdown: {
    anchor: {
      permalink: false
    }
  },
}
