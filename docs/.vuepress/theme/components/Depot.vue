<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :bgImg="data.mainpic"
    />

    <div class="theme-default-content container-xl mt-3 mb-5">
      <div class="row">
        <div class="col-md-6 col-12">
          <div id="intro" class="main-contents mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">{{ overviewTxt }}</h3>
            <Content slot-key="Overview" />
          </div>
          <div id="illustration" class="mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">{{ illusTxt }}</h3>
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
          <div class="col-md-6 col-12">
            <div id="drawing" class="mt-5 mb-3">
              <h3 class="d-inline-block bold me-2">{{ drawingTxt }}</h3>
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

        <div class="col-md-6 col-12">
          <div id="production" class="main-contents mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">{{ pnsTxt }}</h3>
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
            <h3 class="d-inline-block bold me-2">{{ paramTxt }}</h3>
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
            <h3 class="d-inline-block bold me-2">{{ appearanceTxt }}</h3>
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

        <div class="col-12 row">
          <div id="images" class="col-md-6 col-12 mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">{{ hisImgTxt }}</h3>
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
          <div id="conservation" class="col-md-6 col-12 mt-5 mb-3">
            <h3 class="d-inline-block bold me-2">{{ conservationTxt }}</h3>
            <h5 class="subtext d-inline-block"></h5>
            <Content slot-key="Conservation" />
            <div id="status" class="mt-5 mb-3">
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
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@theme/components/plugins/Header.vue'
export default {
  name: 'Depot',

  components: { Header },

  computed: {
    data () {
      return this.$page.frontmatter
    },
    overviewTxt () {
      return this.$lang == 'zh-CN'? '简介' : 'Overview'
    },
    illusTxt () {
      return this.$lang == 'zh-CN'? '图示' : 'illustration'
    },
    drawingTxt () {
      return this.$lang == 'zh-CN'? '图纸' : 'Drawing'
    },
    pnsTxt () {
      return this.$lang == 'zh-CN'? '生产运用' : 'Production & Service'
    },
    paramTxt () {
      return this.$lang == 'zh-CN'? '性能指标' : 'Parameters'
    },
    appearanceTxt () {
      return this.$lang == 'zh-CN'? '外观参数' : 'Appearance'
    },
    hisImgTxt () {
      return this.$lang == 'zh-CN'? '历史影像' : 'Historical Images'
    },    
    conservationTxt () {
      return this.$lang == 'zh-CN'? '保存与现状' : 'Conservation & Status'
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


