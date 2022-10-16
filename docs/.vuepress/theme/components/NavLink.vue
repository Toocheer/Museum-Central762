<template>
  <li class="nav-item">
    <RouterLink
      v-if="isInternal"
      class="nav-link"
      :to="link"
      :exact="exact"
      @focusout.native="focusoutAction"
    >
      <span>{{ item.text }}</span>
      <span class="subtext ms-2">{{ item.subtext }}</span>
    </RouterLink>

    <a
      v-else
      :href="link"
      class="nav-link external"
      :target="target"
      :rel="rel"
      @focusout="focusoutAction"
    >
      <span>{{ item.text }}</span>
      <span class="subtext ms-2">{{ item.subtext }}</span>
    </a>
  </li>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

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

    isNonHttpURI () {
      return isMailto(this.link) || isTel(this.link)
    },

    isBlankTarget () {
      return this.target === '_blank'
    },

    isInternal () {
      return !isExternal(this.link) && !this.isBlankTarget
    },

    target () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.target) {
        return this.item.target
      }
      return isExternal(this.link) ? '_blank' : ''
    },

    rel () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.rel === false) {
        return null
      }
      if (this.item.rel) {
        return this.item.rel
      }
      return this.isBlankTarget ? 'noopener noreferrer' : null
    }
  },

  methods: {
    focusoutAction () {
      this.$emit('focusout')
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

@media(max-width: 991px)
  .nav-item
    margin 0.6em 0.6em

  .center
    text-align center

@media(min-width: 768px)
  .right
    text-align right

 @media (min-width: 991px) and (max-width: 1200px)
  .nav-link
    .subtext
      display none
</style>
