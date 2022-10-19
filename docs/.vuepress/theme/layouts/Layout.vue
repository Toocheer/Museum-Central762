<template>
  <div class="theme-container">
    <Navbar />

    <Home v-if="$page.frontmatter.type == 'Home'" />

    <Landingpage v-else-if="$page.frontmatter.type == 'Landingpage'" />

    <Tour v-else-if="$page.frontmatter.type == 'Tour'" />

    <Underconstruction v-else-if="$page.frontmatter.type == 'Underconstruction'" />

    <Page v-else />

    <Footer />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Landingpage from '@theme/components/Landingpage.vue'
import Tour from '@theme/components/Tour.vue'
import Underconstruction from '@theme/components/Underconstruction.vue'
import Page from '@theme/components/Page.vue'

import Navbar from '@theme/components/Navbar.vue'
import Footer from "@theme/components/Footer.vue";

export default {
  name: 'Layout',

  components: {
    Home,
    Landingpage,
    Tour,
    Underconstruction,
    Page,
    Navbar,
    Footer
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      console.log(this.$page)
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    }
  }
}
</script>

<style lang="stylus">
a
  color inherit

h1, h2, h3, h4, h5
  font-weight bolder

p, ul, ol
  line-height 1.7em

.mt-6
  margin-top 56px

.mt-7
  margin-top 80px
</style>
