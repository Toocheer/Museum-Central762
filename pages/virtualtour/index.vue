<template>
  <div>
    <v-navbar />
    <v-headjumbo
      :title="page.title"
      :subtitle="page.subtitle"
      :intro="page.intro"
    />
    <div class="container-xl">
      <div
        class="row"
        id="maincont"
      >
        <div
          class="col-12"
          id="content"
        >
          <v-cardlist
            :list="tours"
            color="bg-light text-dark"
          />
          <!-- <v-cardlist isTitleOn title="特别展出" subtitle="Specials" :list="specials" color="bg-danger text-light" /> -->
        </div>
        <v-footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualtourPage',
  head() {
    return {
      title: `${this.page.title} / 中原铁道（数字）博物馆`,
      meta: this.head.meta
    }
  },
  data() {
    return {
      head: [],
      page: [],
      tours: [],
      specials: []
    }
  },
  created() {
    let data = require('../../static/docs/tour/tour.json')
    this.head = data.head
    this.page = data.page
    this.tours = data.tours
    this.specials = data.specials
  }
}
</script>
