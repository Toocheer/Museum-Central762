<template>
  <div class="mt-3">
    <div v-if="isTitleOn">
      <br>
      <h2 class="d-inline-block bold">{{ title }}</h2>
      <h5 class="ms-2 subtext d-inline-block">{{ subtitle }}</h5>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-3"
        v-for="(item, index) in list"
        :key="index"
      >
        <nuxt-link
          :to="item.link"
          v-if="item.type === 'router'"
        >
          <div
            class="card text-white mt-3 ratio"
            style="--bs-aspect-ratio: calc(3 / 2 * 100%);"
          >
            <img
              class="card-img cardlist-img"
              :src="item.bgImg"
            >
            <div class="card-img-overlay">
              <p
                class="badge"
                :class="color"
              >{{item.badge}}</p>
              <h3
                class="home"
                v-html="item.title"
              ></h3>
            </div>
          </div>
        </nuxt-link>
        <a
          :href="item.link"
          v-if="item.type === 'link'"
        >
          <div
            class="card text-white mt-3 ratio"
            style="--bs-aspect-ratio: calc(3 / 2 * 100%);"
          >
            <img
              class="card-img cardlist-img"
              :src="item.bgImg"
            >
            <div class="card-img-overlay">
              <p
                class="badge"
                :class="color"
              >{{item.badge}}</p>
              <h3
                class="home"
                v-html="item.title"
              ></h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-cardlist',
  props: {
    isTitleOn: Boolean,
    title: String,
    subtitle: String,
    list: Array,
    color: String
  }
}
</script>
