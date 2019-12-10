
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import router from '@/luyou/luyou.js';

import "./gongyong/index.scss";

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
