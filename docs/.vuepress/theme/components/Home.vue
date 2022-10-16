<template>
  <main
    class="home"
    :aria-labelledby="null"
  >
    <div class="container-xl">
      <Notifications
        :special="data.special"
        :updates="data.updates"
      />

      <div class="row">
        <div class="col-lg-8 col-12 mt-3">
          <Heropic :jumboItems="data.jumboItems" />
        </div>

        <div class="col-lg-4 col-12 mt-3">
          <h5>序言 <span class="ms-2 subtext">Preface</span></h5>
          <Content slot-key="preface" class="colored bold"/>
          <br>
          <Content />
        </div>

        <div class="col-12 mb-5">
          <Grids :categories="data.categories" />
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Notifications from '@theme/components/Notifications.vue'
import Heropic from '@theme/components/Heropic.vue'
import Grids from '@theme/components/Grids.vue'
export default {
  name: 'Home',

  components: { NavLink, Notifications, Heropic, Grids },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

