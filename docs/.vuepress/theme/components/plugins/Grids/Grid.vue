<template>
  <RouterLink
    v-if="isInternal"
    :to="link"
  >
    <div class="card text-dark ratio homegrid">
      <img
        class="card-img index-img"
        :src="item.bgImg"
        :alt="item.title"
      >
      <div class="card-img-overlay">
        <h2 class="text-light">{{item.title}}</h2>
        <h5 class="text-light">{{item.subtitle}}</h5>
        <p class="text-light">{{item.description}}</p>
      </div>
    </div>
  </RouterLink>

  <a
    v-else
    :href="link"
    :target="target"
  >
    <div class="card text-dark ratio homegrid">
      <img
        class="card-img index-img"
        :src="item.bgImg"
        :alt="item.title"
      >
      <div class="card-img-overlay">
        <h2 class="text-light">{{item.title}}</h2>
        <h5 class="text-light">{{item.subtitle}}</h5>
        <p class="text-light">{{item.description}}</p>
      </div>
    </div>
  </a>
</template>

<script>
import { isExternal, ensureExt } from '@theme/util'

export default {
  name: 'Grid',

  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },

    isBlankTarget () {
      return this.target === '_blank'
    },

    isInternal () {
      return !isExternal(this.link) && !this.isBlankTarget
    },

    target () {
      if (this.item.target) {
        return this.item.target
      }
      return isExternal(this.link) ? '_blank' : ''
    }
  }
}
</script>

<style lang="stylus">
.homegrid
  --bs-aspect-ratio: calc(2 / 3 * 100%)

@media (max-width: 768px)
  .homegrid
    --bs-aspect-ratio: calc(1 / 2 * 100%)
</style>
