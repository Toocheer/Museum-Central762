<template>
  <div class="nav-item">
    <AutoLink :url="item.link" linkClass="nav-link">
      <span>{{ item.text }}</span>
    </AutoLink>
  </div>
</template>

<script>
import AutoLink from '@theme/components/plugins/AutoLink.vue'

export default {
  name: 'NavLink',

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
.nav-link
  justify-content center
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

</style>
