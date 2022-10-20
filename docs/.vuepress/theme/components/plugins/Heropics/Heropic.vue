<template>
  <RouterLink
    v-if="isInternal"
    :to="link"
  >
    <div
      :style="{'background':'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.8)),url(' + item.jumboImg + ')', 'margin-bottom':0}"
      class="jumbotron jumbotron-fluid jumboheight"
    >
    </div>
    <div class="carousel-caption">
      <h5>{{item.title}}</h5>
      <p>{{item.subTitle}}</p>
    </div>
  </RouterLink>

  <a
    v-else
    :href="link"
    :target="target"
  >
    <div
      :style="{'background':'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.8)),url(' + item.jumboImg + ')', 'margin-bottom':0}"
      class="jumbotron jumbotron-fluid jumboheight"
    >
    </div>
    <div class="carousel-caption">
      <h5>{{item.title}}</h5>
      <p>{{item.subTitle}}</p>
    </div>
  </a> 
</template>

<script>
import { isExternal, ensureExt } from '@theme/util'
export default {
  name: 'Heropic',

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
