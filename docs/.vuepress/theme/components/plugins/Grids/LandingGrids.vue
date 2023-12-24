<template>
  <div class="row">
    <div
      class="col-12 col-md-3"
      v-for="item in pages"
    >
      <LandingGrid :item="item"/>
    </div>
  </div>
</template>

<script>
import LandingGrid from '@theme/components/plugins/Grids/LandingGrid.vue'
  
export default{
  name: 'LandingGrids',

  props: {
    pages: {
      required: true
    }
  },

  components: {
    LandingGrid
  }
}
</script>
