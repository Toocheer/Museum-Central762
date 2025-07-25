<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :description="data.description"
    />

    <div class="container-xl mt-3 mb-5">
      <LandingGrids :pages="data.pages" />
    </div>
  </main>
</template>

<script>
import Header from '@theme/components/plugins/Header.vue'
import LandingGrids from '@theme/components/plugins/Grids/LandingGrids.vue'
export default {
  name: 'LandingPage',

  components: { Header, LandingGrids },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>


