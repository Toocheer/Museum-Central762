<template>
  <div
    class="theme-container"
  >
    <Navbar />

    <Home v-if="$page.frontmatter.type == 'Home'" />

    <Page
      v-else
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>

    <Footer />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Footer from "@theme/components/Footer.vue";

export default {
  name: 'Layout',

  components: {
    Home,
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
