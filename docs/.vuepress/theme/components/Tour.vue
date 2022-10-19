<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :description="data.description"
    />

    <div class="container-xl mt-3 mb-5">
      <div >
        <div
          v-for="station in data.stations"
          class="row padding"
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
            class="col-12 col-md-4 d-flex pic"
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
            <p
              class="mt-1 subtext center"
              style="text-align: center;"
            >
              {{pic.alt}}
            </p>
          </div>
        </div>
      </div>

      <Content />
    </div>
  </main>
</template>

<script>
import Header from '@theme/components/Header.vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)
export default {
  name: 'Tour',

  components: { Header },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">
.mainPic,
.pic
  flex-wrap wrap
  justify-content center

.card-img
  object-fit cover

@media (min-width: 768px)
  .padding
    padding-top 65px

</style>


