<template>
  <main class="page mt-6">
    <div class="jumbotron jumbotron-fluid pt-5 pb-4 mt-6">
      <div class="container-xl">
        <h2 class="d-inline-block bold me-2">{{ data.title }}</h2>
        <h5 class="subtext d-inline-block">{{ data.subtitle }}</h5>
        <p
          class="mt-3"
          v-if="data.description"
          v-html="data.description"
        ></p>
      </div>
    </div>

    <div class="main-contents container-xl mt-3 mb-5">
      <div >
        <div
          v-for="station in data.stations"
          class="row"
          v-viewer="{
            toolbar: false,
            transition: false,
            fullscreen: false,
            rotatable: false
          }"
        >
          <Content
            :slot-key="station.name"
            class="col-12 col-md-4 mt-3"
          />
          <div
            v-if="station.mainPic"
            class="col-12 col-md-8 mt-3 d-flex mainPic"
          >
            <div
              class="card ratio"
              style="--bs-aspect-ratio: calc(2 / 3 * 100%);"
            >
              <img
                class="card-img"
                :src="station.mainPic.url"
                :alt="station.mainPic.alt"
              />
            </div>
            <p class="mt-1 subtext">{{station.mainPic.alt}}</p>
          </div>
          <div
            class="col-12 col-md-4 d-flex"
            style="flex-wrap: wrap;justify-content: center;"
            v-for="pic in station.pics"
          >
            <div
              class="card ratio mt-3"
              style="--bs-aspect-ratio: calc(2 / 3 * 100%);"
            >
              <img
                class="card-img"
                :src="pic.url"
                :alt="pic.alt"
              />
            </div>
            <p class="mt-1 subtext">{{pic.alt}}</p>
          </div>
        </div>
      </div>

      <Content />
    </div>
  </main>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)
export default {
  name: 'Tour',

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">
.mainPic
  flex-wrap wrap
  justify-content center
  padding-top 65px
</style>


