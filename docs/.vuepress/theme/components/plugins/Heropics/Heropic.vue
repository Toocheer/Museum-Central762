<template>
  <AutoLink :url="item.link">
    <div
      :style="{'background':'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.8)),url(' + item.jumboImg + ')', 'margin-bottom':0}"
      class="jumbotron jumbotron-fluid jumboheight"
    >
    </div>
    <div class="carousel-caption">
      <h5>{{item.title}}</h5>
      <p>{{item.subTitle}}</p>
    </div>
  </AutoLink>
</template>

<script>
import AutoLink from '@theme/components/plugins/AutoLink.vue'
export default {
  name: 'Heropic',

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
