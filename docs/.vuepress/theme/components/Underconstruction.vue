<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :description="data.description"
    />

    <div class="container-xl mt-3 mb-5">
      <div
        class="row"
        id="maincont"
      >
        <div class="col-12">
          <div class="row">
            <div
              class="col-12 mt-6 d-flex flex-column justify-content-center"
              style="height:30vh;"
            >
              <h1>监修中...</h1>
              <h5 class="subtext">预计博物馆二期建成后开放</h5>
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
  </main>
</template>

<script>
import Header from '@theme/components/Header.vue'
export default {
  name: 'Underconstruction',

  components: { Header },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>
