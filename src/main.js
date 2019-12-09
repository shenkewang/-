import Vue from 'vue'

import VueAxios from 'vue-axios'
import axios from 'axios' 

import App from './App.vue'
//引入路由命名是固定的
import router from '@/luyou/luyou.js'

import "./gongyong/index.scss";
Vue.config.productionTip = false
Vue.use(VueAxios,axios);

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
