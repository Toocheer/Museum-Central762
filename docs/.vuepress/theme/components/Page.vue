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

    <div class="main-contents container-xl mt-3 mb-5">
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

<style lang="stylus">
.main-contents
  h1, h2, h3, h4, h5
    margin-bottom 1em
    padding-top 2.2em
  blockquote
    h1, h2, h3, h4, h5
      &:first-child
        padding-top 0
    p
      &:last-child
        margin-bottom 0
  a
    &:hover
      text-decoration underline

.important
  -webkit-text-emphasis circle
  text-emphasis circle
  -webkit-text-emphasis-position under
  text-emphasis-position under right

blockquote
  padding: 1.5em 1.5em 1.5em 1.5em
  border-radius 10px
</style>
