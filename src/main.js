import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'highlight.js/styles/androidstudio.css';
import Highlight from 'vue-markdown-highlight'
Vue.use(Highlight)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
