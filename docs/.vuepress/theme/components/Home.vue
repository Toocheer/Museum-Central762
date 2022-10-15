<template>
  <main
    class="home"
    :aria-labelledby="null"
  >
    <div class="container-xl">
      <div
        class="row"
        id="maincont"
      >
        <div class="col-12">
          <div class="row">
            <div class="col-12 mt-6">
              <Notifications
                :specials="data.specials"
                :updates="data.updates"
              />
            </div>
            <div class="col-lg-8 col-12 mt-3">
              <Heropic
                :jumboItems="data.jumboItems"
              />
            </div>

            <div class="col-lg-4 col-12 mt-3">
              <h5>序言 <span class="ms-2 subtext">Preface</span></h5>
              <h3 class="colored bold">驰骋中州，纵横交通</h3>
              <br>
              <Content />
            </div>

          </div>
        </div>
        <div
          class="col-12 mt-3 mb-5"
        >
          <div class="row">
            <div
              class="col-12 col-sm-6 col-lg-4"
              v-for="(item,index) in data.categories"
              :key="index"
            >
              <RouterLink :to="item.link">
                <div class="card text-dark mt-3 ratio ratio-1x1">
                  <img
                    class="card-img index-img"
                    :src="item.bgImg"
                    :alt="item.title"
                  >
                  <div class="card-img-overlay">
                    <h2 class="text-light">{{item.title}}</h2>
                    <h5 class="text-light">{{item.subtitle}}</h5>
                    <p class="text-light">{{item.details}}</p>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Notifications from '@theme/components/Notifications.vue'
import Heropic from '@theme/components/Heropic.vue'
export default {
  name: 'Home',

  components: { NavLink, Notifications, Heropic },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

