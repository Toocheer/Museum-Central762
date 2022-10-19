<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :description="data.description"
    />

    <div class="container-xl mt-3 mb-5">
      <div class="row">
        <div
          class="col-12 col-md-3"
          v-for="page in data.pages"
        >
          <RouterLink :to="page.link">
            <div
              class="card text-white mt-3 ratio"
              style="--bs-aspect-ratio: calc(3 / 2 * 100%);"
            >
              <img
                class="card-img cardlist-img"
                :src="page.bgImg"
              >
              <div class="card-img-overlay">
                <p
                  class="badge"
                  :class="'text-' + page.color + ' bg-' + page.bgColor"
                >{{page.badge}}</p>
                <h3
                  class="home"
                  v-html="page.title"
                ></h3>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@theme/components/plugins/Header.vue'
export default {
  name: 'Landingpage',

  components: { Header },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">

</style>


