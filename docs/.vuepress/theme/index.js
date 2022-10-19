const path = require('path')

/**
 * @type {import('@vuepress/types').Theme<import('@vuepress/types').DefaultThemeConfig>}
 */
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {

    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      require('./plugin/fulltext-search/index.js'),
      ['smooth-scroll', enableSmoothScroll]
    ]
  }
}
