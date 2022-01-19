import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _709f5e0b = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _002c03f2 = () => interopDefault(import('..\\pages\\architecture\\index.vue' /* webpackChunkName: "pages/architecture/index" */))
const _4d78285b = () => interopDefault(import('..\\pages\\depot\\index.vue' /* webpackChunkName: "pages/depot/index" */))
const _e943468a = () => interopDefault(import('..\\pages\\history\\index.vue' /* webpackChunkName: "pages/history/index" */))
const _66dc35a9 = () => interopDefault(import('..\\pages\\life\\index.vue' /* webpackChunkName: "pages/life/index" */))
const _02ad842a = () => interopDefault(import('..\\pages\\research\\index.vue' /* webpackChunkName: "pages/research/index" */))
const _88aa38e8 = () => interopDefault(import('..\\pages\\virtualtour\\index.vue' /* webpackChunkName: "pages/virtualtour/index" */))
const _3ea2a04a = () => interopDefault(import('..\\pages\\about\\_id.vue' /* webpackChunkName: "pages/about/_id" */))
const _7db9b91e = () => interopDefault(import('..\\pages\\virtualtour\\_tour.vue' /* webpackChunkName: "pages/virtualtour/_tour" */))
const _2c148436 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _709f5e0b,
    name: "404"
  }, {
    path: "/architecture",
    component: _002c03f2,
    name: "architecture"
  }, {
    path: "/depot",
    component: _4d78285b,
    name: "depot"
  }, {
    path: "/history",
    component: _e943468a,
    name: "history"
  }, {
    path: "/life",
    component: _66dc35a9,
    name: "life"
  }, {
    path: "/research",
    component: _02ad842a,
    name: "research"
  }, {
    path: "/virtualtour",
    component: _88aa38e8,
    name: "virtualtour"
  }, {
    path: "/about/:id?",
    component: _3ea2a04a,
    name: "about-id"
  }, {
    path: "/virtualtour/:tour",
    component: _7db9b91e,
    name: "virtualtour-tour"
  }, {
    path: "/",
    component: _2c148436,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
