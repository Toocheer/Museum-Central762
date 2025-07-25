<template>
  <AutoLink :url="item.link">
    <div class="card text-dark ratio homeratio">
      <img
        class="card-img index-img"
        :src="item.bgImg"
        :alt="item.title"
      >
      <div class="card-img-overlay">
        <h2 class="text-light">{{ item.title }}</h2>
        <p class="text-light">{{ item.description }}</p>
      </div>
    </div>
  </AutoLink>
</template>

<script>
import AutoLink from '@theme/components/plugins/AutoLink.vue'

export default {
  name: 'Grid',

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
.homeratio
  --bs-aspect-ratio: calc(2 / 3 * 100%)

@media (max-width: 768px)
  .homeratio
    --bs-aspect-ratio: calc(1 / 2 * 100%)
</style>
