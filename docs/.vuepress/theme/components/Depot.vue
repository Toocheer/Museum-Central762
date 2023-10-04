<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :bgImg="data.mainpic"
    />

    <div class="container-xl mt-3 mb-5">
      <div
        class="row"
        v-viewer="{
          toolbar: {
            prev:true,
            next:true
          },
          navbar:false,
          transition: false,
          fullscreen: false,
          rotatable: false
        }"
      >
        <div class="col-md-6 col-12">
          <div id="illustration" class="mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">图示</h3>
            <h5 class="subtext d-inline-block">Illustration</h5>
            <div class="row">
              <div
                class="col-md-6 col-12 d-flex pic"
                v-for="(pic, index) in data.illus"
              >
                <div
                  class="card ratio"
                  style="--bs-aspect-ratio:calc(2 / 3 * 100%)"
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
          <div id="intro" class="main-contents mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">概述</h3>
            <h5 class="subtext d-inline-block">Introduction</h5>
            <Content slot-key="概述" />
          </div>
          <div id="conservation" class="main-contents mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">保存</h3>
            <h5 class="subtext d-inline-block">Conservation</h5>
            <Content slot-key="保存" />
          </div>
        </div>

        <div class="col-md-6 col-12">
          <div id="production" class="main-contents mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">生产运用</h3>
            <h5 class="subtext d-inline-block">Production and Service</h5>
            <br>
            <div
              v-for="item in data.PNS"
              class="d-inline-flex"
            >
              <div class="alert alert-info tags">
                {{item.name}}
                <br>
                <h5>{{item.text}}</h5>
              </div>
            </div>
          </div>
          <div id="parameters" class="mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">性能指标</h3>
            <h5 class="subtext d-inline-block">Parameters</h5>
            <br>
            <div
              v-for="item in data.parameters"
              class="d-inline-flex"
            >
              <div class="alert alert-danger tags">
                {{item.name}}
                <br>
                <h5>{{item.text}}</h5>
              </div>
            </div>
          </div>
          <div id="appearance" class="mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">外观参数</h3>
            <h5 class="subtext d-inline-block">Appearance</h5>
            <br>
            <div
              v-for="item in data.appearance"
              class="d-inline-flex"
            >
              <div class="alert alert-success tags">
                {{item.name}}
                <br>
                <h5>{{item.text}}</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12">
          <div id="status" class="mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">现状</h3>
            <h5 class="subtext d-inline-block">Status</h5>
            <div class="row">
              <div
                class="col-md-6 col-12 d-flex pic"
                v-for="(pic, index) in data.statimgs"
              >
                <div
                  class="card ratio"
                  style="--bs-aspect-ratio:calc(2 / 3 * 100%)"
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

          <div id="images" class="mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">历史影像</h3>
            <h5 class="subtext d-inline-block">Images</h5>
            <div class="row">
              <div
                class="col-md-6 col-12 d-flex pic"
                v-for="(pic, index) in data.hisimgs"
              >
                <div
                  class="card ratio"
                  style="--bs-aspect-ratio:calc(2 / 3 * 100%)"
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
        </div>

        <div class="col-md-6 col-12">
          <div id="drawing" class="mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">图纸</h3>
            <h5 class="subtext d-inline-block">Drawing</h5>
            <div class="row">
              <div
                class="col-12 d-flex pic"
                v-for="(pic, index) in data.drawing"
              >
                <div
                  class="card ratio"
                  style="--bs-aspect-ratio:calc(2 / 3 * 100%)"
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
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@theme/components/plugins/Header.vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)
export default {
  name: 'Depot',

  components: { Header },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">
.tags
  display inline-block
  margin 0.5em 1em 0.5em 0
  h5
    margin-bottom 0

</style>


