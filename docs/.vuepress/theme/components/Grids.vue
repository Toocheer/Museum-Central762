<template>
  <div class="row">
    <div
      class="col-12 col-sm-6 col-lg-4 mt-3 "
      v-for="item in categories"
    >
      <RouterLink :to="item.link">
        <div class="card text-dark ratio ratio-1x1">
          <img
            class="card-img index-img"
            :src="item.bgImg"
            :alt="item.title"
          >
          <div class="card-img-overlay">
            <h2 class="text-light">{{item.title}}</h2>
            <h5 class="text-light">{{item.subtitle}}</h5>
            <p class="text-light">{{item.details}}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grids',
  props: {
    categories: {
      required: true
    }
  }
}
</script>
