<template>
  <div class="container-xl">
  <div
    class="jumbotron round pt-5 pb-4 mt-6"
    :class="bgImg ? 'hero' : ''"
    :style="bgImg ? {'background-image':`linear-gradient(#00000077,#00000077),url('${bgImg}')`} : ''">
    <div>
      <h2
        class="d-inline-block bold me-2"
        :class="bgImg ? 'text-light ms-3 ms-lg-5 herotext' : ''"
        v-html="title"
      >
      </h2>
      <br v-if="bgImg">
      <h5
        class="subtext d-inline-block"
        :class="bgImg ? 'ms-3 ms-lg-5' : ''"
      >
      {{ subtitle }}
      </h5>
      <p
        class="mt-3"
        v-if="description"
        v-html="description"
      ></p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      required: true
    },
    subtitle: {
      required: true
    },
    description: {
      required: false
    },
    bgImg: {
      required: false
    }
  }
}
</script>

<style lang="stylus">
.hero
  height 45vh

.round
  border-radius 10px

.herotext
  font-size 3em

@media(max-width:768px)
  .herotext
    font-size 2em
</style>
