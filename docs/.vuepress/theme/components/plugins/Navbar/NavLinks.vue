<template>
  <nav
    class="collapse navbar-collapse"
    id="navbarNavDropdown"
    style="justify-content:flex-end;"
  >
    <ul class="navbar-nav">
      <li v-for="item in userLinks">
        <NavLink :item="item" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { resolveNavLinkItem } from '@theme/util'
import NavLink from '@theme/components/plugins/Navbar/NavLink.vue'

export default {
  name: 'NavLinks',

  components: {
    NavLink
  },

  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        let alterLangText
        let alterLangLink
        Object.keys(locales).filter(path => {
          const lang = locales[path].lang
          if (lang !== this.$lang) {
            alterLangText = themeLocales[path] && themeLocales[path].langLabel || lang
            alterLangLink = currentLink.replace(this.$localeConfig.path, path)
            // fallback to homepage
            if (!routes.some(route => route.path === alterLangLink)) {
              alterLangLink = path
            }
          }
        })
        const alterLang = {
          text: alterLangText,
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          link: alterLangLink
        }
        return [...this.userNav, alterLang]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    }
  }
}
</script>


