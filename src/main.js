import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import katex from 'katex'
import highlight from "./plugins/highlight"
import katex from "./plugins/katex"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from "./store";

Vue.use(ElementUI)

// Vue.use(katex)
Vue.use(mavonEditor)
Vue.use(highlight)
Vue.use(katex)

Vue.config.productionTip = false

Vue.filter('localTime', '')

// 引入mockjs
// require('./mock.js')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
