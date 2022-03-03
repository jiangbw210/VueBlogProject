// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
