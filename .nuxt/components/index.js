export { default as VCardlist } from '../..\\components\\v-cardlist.vue'
export { default as VFooter } from '../..\\components\\v-footer.vue'
export { default as VHeadjumbo } from '../..\\components\\v-headjumbo.vue'
export { default as VNavbar } from '../..\\components\\v-navbar.vue'
export { default as VTourlist } from '../..\\components\\v-tourlist.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
