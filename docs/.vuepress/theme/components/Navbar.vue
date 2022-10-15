<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <div
      class="container-xl"
      id="navcontain"
    >
    <RouterLink
      :to="$localePath"
      class="home-link"
    >
      <div
        class="d-flex"
        style="align-items:center;"
      >
        <img
          v-if="$site.themeConfig.logo"
          class="logo d-inline-block"
          style="height: 40px"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
        <span class="d-md-inline me-1">·</span>
        <span
          v-if="$siteTitle"
          ref="siteName"
          class="logo d-inline-block space"
          style="white-space:nowrap;"
          v-html="$site.themeConfig.displayTitle"
        ></span>
      </div>
    </RouterLink>

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

      <!-- <SearchBox /> -->
      <NavLinks />
  </div>

  </nav>
</template>

<script>
import SearchBox from '@SearchBox'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    NavLinks,
    SearchBox
  },

}
</script>

