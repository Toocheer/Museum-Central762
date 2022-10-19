<template>
  <div class="row">
    <div
      class="col-12 col-sm-6 col-lg-4 mt-3 "
      v-for="item in categories"
    >
      <Grid :item="item"/>
    </div>
  </div>
</template>

<script>
import Grid from '@theme/components/Grid.vue'
  
export default{
  name: 'Grids',

  props: {
    categories: {
      required: true
    }
  },

  components: {
    Grid
  }
}
</script>
