<template>
  <div class="theme-container">
    <Navbar />

    <Home v-if="$page.frontmatter.type == 'Home'" />

    <Landingpage v-else-if="$page.frontmatter.type == 'Landingpage'" />

    <Detail v-else-if="$page.frontmatter.type == 'Detail'" />

    <Tour v-else-if="$page.frontmatter.type == 'Tour'" />

    <Depot v-else-if="$page.frontmatter.type == 'Depot'" />

    <Underconstruction v-else-if="$page.frontmatter.type == 'Underconstruction'" />

    <Page v-else />

    <Footer />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Landingpage from '@theme/components/Landingpage.vue'
import Detail from '@theme/components/Detail.vue'
import Tour from '@theme/components/Tour.vue'
import Depot from '@theme/components/Depot.vue'
import Underconstruction from '@theme/components/Underconstruction.vue'
import Page from '@theme/components/Page.vue'

import Navbar from '@theme/components/plugins/Navbar/Navbar.vue'
import Footer from "@theme/components/plugins/Footer.vue";

export default {
  name: 'Layout',

  components: {
    Home,
    Landingpage,
    Detail,
    Tour,
    Depot,
    Underconstruction,
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
