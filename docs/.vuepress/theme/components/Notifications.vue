<template>
  <div class="row mt-5">
    <div
      class="col-12 col-md-6 mt-2"
      v-if="special"
    >
      <RouterLink
        v-if="special.isInternalLink"
        :to="special.link"
      >
        <div
          class="alert"
          :style="{
            'background': `url(${special.bgImg}),#${special.colorBg}`,
            'color': `#${special.color}`,
            'background-size':'auto 160px',
            'background-repeat':'no-repeat',
            'background-position':'center right'
          }"
        >
          <span>{{special.subtitle}}</span>
          <h3>{{special.title}}</h3><br>
          <small>{{special.description}}</small>
        </div>
      </RouterLink>

      <a
        v-else
        :href="special.link"
      >
        <div
          class="alert"
          :style="{
            'background': `url(${special.bgImg}),#${special.colorBg}`,
            'color': `#${special.color}`,
            'background-size':'auto 160px',
            'background-repeat':'no-repeat',
            'background-position':'center right'
          }"
        >
          <span>{{special.subtitle}}</span>
          <h3>{{special.title}}</h3><br>
          <small>{{special.description}}</small>
        </div>
      </a>
    </div>

    <RouterLink to="/about/updates" class="col-12 col-md-6 mt-2" v-if="special">
      <div
        class="alert alert-danger d-flex d-md-block justify update"
      >
        <span>{{updates.date}}更新<span class="d-inline d-md-none"> · {{updates.info}}</span></span>
        <span class="d-none d-md-block"><h3>{{updates.info}}</h3><br></span>
        <small class="d-none d-md-inline-block">查看更新日志 ›</small>
      </div>
    </RouterLink>

    <RouterLink to="/about/updates" class="update col-12 mt-2" v-else>
      <div
        class="alert alert-danger d-flex justify update"
      >
        <span>{{updates.date}}更新 · {{updates.info}}</span>
        <small class="d-none d-md-inline-block">查看更新日志 ›</small>
      </div>
    </RouterLink>

  </div>
</template>

<script>
export default {
  name: 'Notifications',
  props: {
    special: {
      required: true
    },
    updates: {
      required: true
    }
  },
}
</script>

<style lang="stylus">
.alert
  margin 5px auto
  border none
  border-radius 10px

.update
  background-image url("../../public/img/update.svg")
  background-size auto
  background-repeat no-repeat
  background-position center right

@media(max-width: 768px)
  .justify
    justify-content space-between
    align-items center

@media(min-width: 768px)
  .right
    text-align right
</style>
