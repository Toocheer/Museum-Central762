<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        v-for="(item, index) in jumboItems"
        :data-bs-slide-to="index"
        :class="{active:item.isActive}"
        :key="index"
        :aria-label="index"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        class="carousel-item "
        v-for="item in jumboItems"
        :class="{active:item.isActive}"
        :key="item.index"
      >
        <RouterLink :to="item.link">
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
      </div>
    </div>
    <button
      class="carousel-control-prev d-none d-md-flex"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
      aria-label="上一个 previous"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">上一个</span>
    </button>
    <button
      class="carousel-control-next d-none d-md-flex"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
      aria-label="下一个 next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">下一个</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Heropic',
  props: {
    jumboItems: {
      required: true
    }
  },
}
</script>

<style lang="stylus">
.jumbotron
  background-position center!important
  background-size cover!important
  background-repeat no-repeat!important

.jumboheight
  height 65vh

@media(min-height: 1100px)
  .jumboheight
    height 45vh

@media(max-width: 991px)
  .jumboheight
    height 50vh

@media(max-width: 576px)
  .jumboheight
    height 35vh

.carousel-inner
  border-radius 10px
</style>
