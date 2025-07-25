<template>
  <AutoLink :url="item.link">
    <div
      class="card text-white mt-3 ratio lpratio"
    >
      <img
        class="card-img cardlist-img"
        :src="item.bgImg"
      >
      <div class="card-img-overlay">
        <p class="text-light" >{{ item.subtitle }}</p>
        <h3
          class="home"
          v-html="item.title"
        ></h3>
      </div>
    </div>
  </AutoLink>
</template>

<script>
import AutoLink from '@theme/components/plugins/AutoLink.vue'

export default {
  name: 'LandingGrid',

  components: {
    AutoLink
  },

  props: {
    item: {
      required: true
    }
  },
}
</script>

<style lang="stylus">
.lpratio
  --bs-aspect-ratio: calc(3 / 2 * 100%)

@media (max-width: 768px)
  .lpratio
    --bs-aspect-ratio: calc(2 / 3 * 100%)
</style>
