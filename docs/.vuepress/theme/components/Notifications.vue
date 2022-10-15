<template>
  <div>
    <div
      class="mb-3"
      v-if="specials"
    >
      <RouterLink
        v-if="specials.isInternalLink"
        :to="specials.link"
      >
        <div
          class="alert"
          v-html="specials.info"
          :style="{
            'background': `url(${specials.bgImg}),#${specials.colorBg}`,
            'color': `#${specials.color}`,
            'background-size':'auto 200px',
            'background-repeat':'no-repeat',
            'background-position':'center right'
          }"
        >
        </div>
      </RouterLink>

      <a
        v-else
        :href="specials.link"
      >
        <div
          class="alert"
          v-html="specials.info"
          :style="{
            'background': `url(${specials.bgImg}),#${specials.colorBg}`,
            'color': `#${specials.color}`,
            'background-size':'auto 200px',
            'background-repeat':'no-repeat',
            'background-position':'center right'
          }"
        >
        </div>
      </a>
    </div>

    <RouterLink :to="updates.link">
      <div
        class="alert alert-danger"
        style="text-align: center;"
        v-html="updates.info"
      >
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  props: {
    specials: {
      required: true
    },
    updates: {
      required: true
    }
  },
}
</script>
