<template>
  <main class="page mt-6">
    <div class="jumbotron jumbotron-fluid pt-5 pb-4 mt-6">
      <div class="container-xl">
        <h2 class="d-inline-block bold me-2">{{ data.title }}</h2>
        <h5 class="subtext d-inline-block">{{ data.subtitle }}</h5>
        <p
          class="mt-3"
          v-if="data.description"
          v-html="data.description"
        ></p>
      </div>
    </div>

    <div class="main-contents container-xl mt-5 mb-5">
      <slot name="top" />

      <Content />

      <slot name="bottom" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'Page',

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>
