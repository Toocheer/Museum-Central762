<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <Navbar
      v-if="shouldShowNavbar"
    />

    <div class="container-xl">
      <div
        class="row"
        id="maincont"
      >
        <div class="col-12">
          <div class="row">
            <div
              class="col-12 mt-6 d-flex flex-column justify-content-center"
              style="height:65vh;"
            >
              <h1>404 not found</h1>
              <h5 class="subtext">这里什么都没有</h5>
              <br>
              <RouterLink
                to="/"
                class="colored"
              >返回首页 ›</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Footer from "@theme/components/Footer.vue";
import { resolveSidebarItems } from '../util'

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
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
        },
        userPageClass
      ]
    }
  }
}
</script>
