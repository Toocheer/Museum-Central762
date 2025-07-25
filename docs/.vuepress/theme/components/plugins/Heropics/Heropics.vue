<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item "
        v-for="item in jumboItems"
        :class="{active:item.isActive}"
        :key="item.index"
      >
        <Heropic :item="item" />
      </div>
    </div>
    <button
      class="carousel-control-prev d-flex"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
      aria-label="上一个 previous"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">上一个</span>
    </button>
    <button
      class="carousel-control-next d-flex"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
      aria-label="下一个 next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">下一个</span>
    </button>
  </div>
</template>

<script>
import Heropic from '@theme/components/plugins/Heropics/Heropic.vue'
import { isExternal, ensureExt } from '@theme/util'
export default {
  name: 'Heropics',

  props: {
    jumboItems: {
      required: true
    }
  },

  components: {
    Heropic
  }
}
</script>

<style lang="stylus">
.jumbotron
  background-position center!important
  background-size cover!important
  background-repeat no-repeat!important

.jumboheight
  height 100vh
  max-height 600px

@media(max-width: 991px)
  .jumboheight
    height 60vh

@media(max-width: 576px)
  .jumboheight
    height 35vh

.carousel-inner
  border-radius 5px

.carousel-caption
  left 8%
  right 8%
  bottom 0
</style>
