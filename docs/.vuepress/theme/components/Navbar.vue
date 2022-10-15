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
        <span
          v-if="$siteTitle"
          ref="siteName"
          class="logo d-none d-md-inline-block space"
          style="white-space:nowrap;"
          v-html="$site.themeConfig.displayTitle"
        ></span>
      </div>
    </RouterLink>

    <SearchBox />

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
import SearchBox from '@theme/plugin/search/SearchBox.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    NavLinks,
    SearchBox
  },

}
</script>

