<template>
  <main class="page" @scroll="contentScrollHandler">

    <div class="custom-layout mt-3 mb-5">
      <transition name="fade">
        <div class="panel-A" v-show="isMapVisible">
          <baidu-map
            class="map"
            :center="BMcenter"
            :zoom="BMzoom"
            :ak=$themeConfig.globalVariables.BAIDU_MAP_KEY
            v="3.0"
            type="WebGl"
            @ready="mapInit"
          >
            <div v-for="item in data.items">
              <bm-marker
                :position="{lng: item.lng, lat: item.lat}"
                @click="mapClickHandler"
              >
                <bm-label
                  :content="item.name"
                  :offset="{width: -30, height: 30}"
                />
              </bm-marker>
            </div>
          </baidu-map>
        </div>
      </transition>
      <div class="panel-B">
        <Header
          :title="data.title"
          :subtitle="data.subtitle"
          :description="data.description"
        />
        <div class="content-container container" ref="contentContainer" >
          <div
            v-for="item in data.items"
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
            <Content
              :slot-key="item.name"
              :data-lng="item.lng"
              :data-lat="item.lat"
              class="col-12 col-md-4 mt-3 always-padding"
            />
            <div
              v-if="item.mainPic"
              class="col-12 col-md-8 mt-3 d-flex pic padding"
            >
              <div
                class="card ratio"
                :style="{'--bs-aspect-ratio':`calc(${item.h} / ${item.w} * 100%)`}"
              >
                <img
                  class="card-img"
                  :src="item.mainPic.url"
                  :alt="item.mainPic.alt"
                />
              </div>
              <p class="mt-1 subtext">{{item.mainPic.alt}}</p>
            </div>
            <div
              class="col-12 col-md-4 d-flex pic"
              :class="!item.mainPic && index < 2 ? 'padding' : ''"
              v-for="(pic, index) in item.pics"
            >
              <div
                class="card ratio mt-3"
                :style="{'--bs-aspect-ratio':`calc(${item.h} / ${item.w} * 100%)`}"
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

      <Content />
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@theme/components/plugins/Header.vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue, { ref, computed, onMounted, getCurrentInstance } from 'vue'
Vue.use(Viewer)
import { BaiduMap, BmMarker, BmLabel } from 'vue2-baidu-map'

export default {
  name: 'Tour',

  components: { Header, BaiduMap, BmMarker, BmLabel },

  setup() {
    const BMcenter = ref({ lng: 116.404, lat: 39.915 });
    const BMzoom = ref(13);
    const isMapVisible = ref(true);
    const timeout = null;
    const currentElement = null;
    return {
      BMcenter,
      BMzoom,
      isMapVisible,
      timeout,
      currentElement
    }
  },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  },

  mounted() {
    this.positionMarker = document.querySelectorAll('.always-padding');
    // 监听滚动事件
    window.addEventListener('scroll', this.contentScrollHandler);
  },

  beforeDestroy() {
    // 组件销毁时移除滚动事件监听
    window.removeEventListener('scroll', this.contentScrollHandler);
    clearTimeout(this.timeout);
  },

  methods: {
    mapInit({ BMap, map }) {
      this.map = map;
      this.BMap = BMap;

      let point = new BMap.Point(this.$frontmatter.items[0]?.lng || 116.404, this.$frontmatter.items[0]?.lat || 39.915)
      this.map.centerAndZoom(point, 13)
    },

    mapClickHandler(e) {
      const clickedPosition = e.point;
      // 假设根据点击的位置找到对应的内容锚点
      const item = this.$frontmatter.items.find(item => {
        // 这里需要根据具体需求实现位置匹配逻辑
        // 例如，比较经纬度的差异阈值
        const lngDiff = Math.abs(item.lng - clickedPosition.lng);
        const latDiff = Math.abs(item.lat - clickedPosition.lat);
        return lngDiff < 0.01 && latDiff < 0.01;
      });
      if (item) {
        this.scrollToAnchor(item.name);
      }
    },

    scrollToAnchor(anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    contentScrollHandler() {
      // 防抖处理，避免频繁触发
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const clientHeight = window.innerHeight || document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        // 判断是否滚动到底部
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px 为接近底部的阈值

        // 更新元素的显示状态
        this.isMapVisible = !isNearBottom;

        this.getCurrentTopElement(scrollTop);

      }, 100);
    },

    getCurrentTopElement(scrollTop) {
      // 遍历所有标记元素，找到当前顶端可见的元素
      this.positionMarker.forEach((element, index) => {
        const elementTop = element.offsetTop;

        if (elementTop < scrollTop + 100) { // 100 是可视区域顶部的阈值
          this.currentElement = element;
        } else {
          // 停止遍历（假设元素是按顺序排列的）
          return;
        }
      });


      if (this.currentElement) {
        const lng = this.currentElement.dataset.lng || 116.404;
        const lat = this.currentElement.dataset.lat || 39.915;

        this.BMcenter.lng = lng;
        this.BMcenter.lat = lat;
      }
    },
  },
}
</script>

<style lang="stylus">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.page
  margin-top: 40vh

.custom-layout
  display flex

.panel-A
  width 100%
  height 40vh
  position fixed
  top 40px
  bottom 0
  z-index 500
  overflow hidden

.panel-B
  margin-left 0
  margin-top 0px
  overflow-y auto

.map
  width 100%
  height 40vh

.pic
  flex-wrap wrap
  justify-content center

.card-img
  object-fit cover

.always-padding
  h1, h2
    padding-top 65px
    margin-top -30px

@media (min-width: 768px)
  .page
    margin-top: 60px

  .padding
    padding-top 65px
    margin-top -20px!important

  .panel-A
    width 400px
    height 100vh
    position fixed
    top 0
    bottom 0

  .panel-B
    margin-left 400px
    margin-top -60px
    overflow-y auto

  .map
    width 100%
    height 100vh

</style>


