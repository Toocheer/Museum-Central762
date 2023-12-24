<template>
  <div class="row mt-5">
    <div
      class="col-12 col-md-8 mt-2"
      v-if="special"
    >
      <RouterLink
        v-if="isInternal"
        :to="link"
      >
        <div
          class="alert"
          :style="{
            'background': `url(${special.bgImg}),#${special.colorBg}`,
            'color': `#${special.color}`,
            'background-size':'auto 160px',
            'background-repeat':'no-repeat',
            'background-position':'center right'
          }"
        >
          <span>{{special.subtitle}}</span>
          <h3 class="mb-3">{{special.title}}</h3>
          <small>{{special.description}}</small>
        </div>
      </RouterLink>

      <a
        v-else
        :href="link"
        :target="target"
      >
        <div
          class="alert"
          :style="{
            'background': `url(${special.bgImg}),#${special.colorBg}`,
            'color': `#${special.color}`,
            'background-size':'auto 160px',
            'background-repeat':'no-repeat',
            'background-position':'center right'
          }"
        >
          <span>{{special.subtitle}}</span>
          <h3 class="mb-3">{{special.title}}</h3>
          <small>{{special.description}}</small>
        </div>
      </a>
    </div>

    <div
      class="col-12 col-md-4 mt-2"
    >
      <RouterLink
        v-if="special"
        to="/about/updates"
      >
        <div class="alert alert-danger d-flex d-md-block justify update">
          <span>{{updates.date}}更新<span class="d-inline d-md-none"> · {{updates.info}}</span></span>
          <span class="d-none d-md-block"><h3 class="mb-3">{{updates.info}}</h3></span>
          <small class="d-none d-md-inline-block">查看更新日志 ›</small>
        </div>
      </RouterLink>

      <RouterLink
        v-else
        to="/about/updates"
      >
        <div class="alert alert-danger d-flex justify update">
          <span>{{updates.date}}更新 · {{updates.info}}</span>
          <small class="d-none d-md-inline-block">查看更新日志 ›</small>
        </div>
      </RouterLink>
    </div>

  </div>
</template>

<script>
import { isExternal, ensureExt } from '@theme/util'

export default {
  name: 'Notifications',
  props: {
    special: {
      required: true
    },
    updates: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.special.link)
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
      if (this.special.target) {
        return this.special.target
      }
      return isExternal(this.link) ? '_blank' : ''
    }
  }
}
</script>

<style lang="stylus">
.alert
  margin 5px auto
  border none
  border-radius 10px

.update
  // background-image url("/img/update.svg")
  background-size auto
  background-repeat no-repeat
  background-position center right

@media(max-width: 768px)
  .justify
    justify-content space-between
    align-items center

@media(min-width: 768px)
  .right
    text-align right
</style>
