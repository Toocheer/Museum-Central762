<template>
  <RouterLink
    v-if="isInternal"
    :to="link"
  >
    <div
      class="card text-white mt-3 ratio lpratio"
    >
      <img
        class="card-img cardlist-img"
        :src="item.bgImg"
      >
      <div class="card-img-overlay">
        <p
          class="badge"
          :class="'text-' + item.color + ' bg-' + item.bgColor"
        >{{item.badge}}</p>
        <h3
          class="home"
          v-html="item.title"
        ></h3>
      </div>
    </div>
  </RouterLink>

  <a
    v-else
    :href="link"
    :target="target"
  >
    <div
      class="card text-white mt-3 ratio lpratio"
    >
      <img
        class="card-img cardlist-img"
        :src="item.bgImg"
      >
      <div class="card-img-overlay">
        <p
          class="badge"
          :class="'text-' + item.color + ' bg-' + item.bgColor"
        >{{item.badge}}</p>
        <h3
          class="home"
          v-html="item.title"
        ></h3>
      </div>
    </div>
  </a>
</template>

<script>
import { isExternal, ensureExt } from '@theme/util'

export default {
  name: 'LandingGrid',

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
.lpratio
  --bs-aspect-ratio: calc(3 / 2 * 100%)

@media (max-width: 768px)
  .lpratio
    --bs-aspect-ratio: calc(2 / 3 * 100%)
</style>
