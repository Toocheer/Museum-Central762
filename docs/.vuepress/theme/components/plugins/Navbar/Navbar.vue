<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <div
      class="container-xl"
      id="navcontain"
    >
    <RouterLink :to="$localePath">
      <div
        class="d-flex"
        style="align-items:center;"
      >
        <img
          v-if="$site.themeConfig.logo"
          class="logo d-inline-block me-1"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
          :title="$siteTitle"
        >
      </div>
    </RouterLink>

    <SearchBox :placeholder="searchLabel" />

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <NavLinks />
  </div>

  </nav>
</template>

<script>
import SearchBox from '@theme/plugin/fulltext-search/components/SearchBox.vue'
import NavLinks from '@theme/components/plugins/Navbar/NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    NavLinks,
    SearchBox
  },

  computed: {
    searchLabel () {
      const { locales } = this.$site
      var searchLabelTxt
      if (locales && Object.keys(locales).length > 1) {
        const themeLocales = this.$site.themeConfig.locales || {}

        Object.keys(locales).filter(path => {
          const lang = locales[path].lang

          if (lang === this.$lang) {
            searchLabelTxt = themeLocales[path] && themeLocales[path].searchLabel || 'Search'
          }
        })
      }
      return searchLabelTxt
    }
  }

}
</script>

<style lang="stylus">
img.logo
  height 40px

.navbar-collapse
  flex-grow 0!important
</style>

