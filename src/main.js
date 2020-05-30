// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import $ from 'jquery'
// import Snotify from 'vue-snotify'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import VuePageTitle from 'vue-page-title'
import 'nprogress/nprogress.css'
import ApiService from './services/api/api.service'
import App from './App'
import router from './router'
import store from './store'
import('./assets/sass/custom.scss')

// ApiService.init(process.env.API_HOST)

if (store.state.auth.accessToken) {
  ApiService.setHeader(store.state.auth.accessToken)
}
// Vue.use(Snotify)
// Vue.use($)
Vue.use(VuePageTitle, { router, suffix: '| CAVSUBa' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
