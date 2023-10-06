<template>
  <div class="nav-item">
    <RouterLink
      v-if="isInternal"
      class="nav-link"
      :to="link"
      :exact="exact"
    >
      <span>{{ item.text }}</span>
      <span class="subtext ms-2">{{ item.subtext }}</span>
    </RouterLink>

    <a
      v-else
      :href="link"
      class="nav-link external"
      :target="target"
    >
      <span>{{ item.text }}</span>
      <span class="subtext ms-2">{{ item.subtext }}</span>
    </a>
  </div>
</template>

<script>
import { isExternal, ensureExt } from '@theme/util'

export default {
  name: 'NavLink',

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
.nav-link
  span
    display inline-block
  &.router-link-active,
  &.router-link-exact-active
    span
      color: #df494f !important;

.nav-item
  margin 0 0.6em

@media (max-width: 992px)
  .nav-item
    margin 0.6em 0.6em

  .center
    text-align center

@media (min-width: 768px)
  .right
    text-align right

@media (min-width: 992px) and (max-width: 1200px)
  .nav-link
    .subtext
      display none
</style>
