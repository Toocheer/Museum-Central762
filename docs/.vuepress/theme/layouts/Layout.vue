<template>
  <div class="theme-container">
    <Navbar />

    <Home v-if="$page.frontmatter.type == 'Home'" />

    <LandingPage v-else-if="$page.frontmatter.type == 'LandingPage'" />

    <Detail v-else-if="$page.frontmatter.type == 'Detail'" />

    <Depot v-else-if="$page.frontmatter.type == 'Depot'" />

    <Page v-else />

    <Footer />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import LandingPage from '@theme/components/LandingPage.vue'
import Detail from '@theme/components/Detail.vue'
import Depot from '@theme/components/Depot.vue'
import Page from '@theme/components/Page.vue'

import Navbar from '@theme/components/plugins/Navbar/Navbar.vue'
import Footer from "@theme/components/plugins/Footer.vue";

export default {
  name: 'Layout',

  components: {
    Home,
    LandingPage,
    Detail,
    Depot,
    Page,
    Navbar,
    Footer
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

table
  width 100%

th, td {
  padding: 1em 3em 1em 0;
  text-align: left;
}

.mt-6
  margin-top 60px

.mt-7
  margin-top 80px
</style>
