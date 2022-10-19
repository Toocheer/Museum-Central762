<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :description="data.description"
    />

    <div class="main-contents container-xl mt-3 mb-5">
      <Content />
    </div>

  </main>
</template>

<script>
import Header from '@theme/components/Header.vue'
export default {
  name: 'Page',

  components: { Header },

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
    padding-top 65px
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
