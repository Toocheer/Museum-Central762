<template>
  <main class="page mt-6">

    <Header
      :title="data.displaytitle"
      :subtitle="data.subtitle"
      :description="data.description"
      :bgImg="data.mainpic"
    />

    <div
      class="main-contents container-xl mt-3 mb-5"
      v-viewer="{
        toolbar: {
          prev:true,
          next:true
        },
        navbar:false,
        transition: false,
        fullscreen: false,
        rotatable: false
      }"
      >
      <Content />
    </div>

  </main>
</template>

<script>
import Header from '@theme/components/plugins/Header.vue'
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
  max-width: 690px
  h1, h2, h3, h4
    margin-bottom 0.5em
    padding-top 65px
    margin-top: -30px;
  .ref
    padding-top 65px
    margin-top: -65px;
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
  img
    max-width 100%
    border-radius 10px

.important
  -webkit-text-emphasis circle
  text-emphasis circle
  -webkit-text-emphasis-position under
  text-emphasis-position under right

blockquote
  padding: 1.5em 1.5em 1.5em 1.5em
  border-radius 10px
</style>
