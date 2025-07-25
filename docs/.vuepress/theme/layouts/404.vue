<template>
  <div class="theme-container">
    <Navbar />

    <div class="container-xl">
      <div
        class="row"
        id="maincont"
      >
        <div class="col-12">
          <div class="row">
            <div
              class="col-12 mt-6 d-flex flex-column justify-content-center"
              style="height:70vh;"
            >
              <h1>404 not found</h1>
              <h5 class="subtext">这里什么都没有</h5>
              <br>
              <RouterLink
                to="/"
                class="colored"
              >返回首页 ›</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
import Navbar from '@theme/components/plugins/Navbar/Navbar.vue'
import Footer from "@theme/components/plugins/Footer.vue"

export default {
  name: 'Layout',

  components: {
    Navbar,
    Footer
  }
}
</script>
