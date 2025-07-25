<template>
  <main class="page mt-6">

    <Header
      :title="data.title"
      :subtitle="data.subtitle"
      :description="data.description"
    />

    <div class="theme-default-content container-xl mt-3 mb-5">
      <div
        v-for="item in data.items"
        class="row"
      >
        <div class="col-12 col-md-4 mt-3 intro-container always-padding ">
          <Content
            :slot-key="item.name"
            class="intro-content"
          />
        </div>
        
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

      <Content />

    </div>
  </main>
</template>

<script>
import Header from '@theme/components/plugins/Header.vue'
export default {
  name: 'Detail',

  components: { Header },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">
.pic
  flex-wrap wrap
  justify-content center

.card-img
  object-fit cover

.always-padding
  h1, h2, h3
    padding-top 65px
    margin-top -30px

@media (min-width: 768px)
  .padding
    padding-top 65px
    margin-top -20px!important

.intro-container
  height auto
  max-height auto

@media(min-width: 992px)
  .intro-container
    height 100%
    max-height 600px
    display flex
    flex-direction column

  .intro-content
    flex 1
    overflow-y auto
</style>


