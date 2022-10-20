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
        >
      </div>
    </RouterLink>

    <!-- <SearchBox /> -->

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

}
</script>

<style lang="stylus">
img.logo
  height 40px
.navbar-collapse
  flex-grow 0!important
</style>

