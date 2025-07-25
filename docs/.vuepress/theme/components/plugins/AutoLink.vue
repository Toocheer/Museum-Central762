<template>
  <RouterLink
    v-if="isInternal"
    :class="linkClass"
    :to="link"
    :exact="exact"
  >
    <slot></slot>
  </RouterLink>

  <a
    v-else
    :href="link"
    :class="linkClass"
    :target="target"
  >
    <slot></slot>
  </a>
</template>

<script>
import { isExternal, ensureExt } from '@theme/util'

export default {
  name: 'AutoLink',

  props: {
    url: {
      required: true
    },
    linkClass: {
      required: false
    }
  },

  computed: {
    link () {
      return ensureExt(this.url)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        )
      }
      return this.link === '/'
    },

    isInternal () {
      return !isExternal(this.link)
    },

    target () {
      return isExternal(this.link) ? '_blank' : ''
    }
  }
}
</script>
