<template>
  <main
    class="home"
    :aria-labelledby="null"
  >
    <div class="container-xl">

      <div class="row mt-5">
        <div class="col-lg-8 col-12 mt-3">
          <Heropics :jumboItems="data.jumboItems" />
        </div>

        <div class="col-lg-4 col-12 mt-3 preface-container">
          <div class="preface-title mb-3">
            <h5>{{ prefaceTxt }}</h5>
            <Content slot-key="preface" class="colored bold"/>
          </div>

          <div class="preface-content">
            <Content />
          </div>
        </div>

        <div class="col-12 mb-5">
          <Grids :categories="data.categories" />
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import Heropics from '@theme/components/plugins/Heropics/Heropics.vue'
import Grids from '@theme/components/plugins/Grids/Grids.vue'
export default {
  name: 'Home',

  components: { Heropics, Grids },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    prefaceTxt () {
      return this.$lang == 'zh-CN'? '序言' : 'Preface'
    }
  }
}
</script>

<style lang="stylus">
.preface-container
  height auto
  max-height auto

@media(min-width: 992px)
  .preface-container
    height 90vh
    max-height 600px
    display flex
    flex-direction column

  .preface-content
    flex 1
    overflow-y auto
</style>
