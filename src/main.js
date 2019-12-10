
import Vue from 'vue';


import App from './App.vue';
import router from '@/luyou/luyou.js';

import "./gongyong/index.scss";


Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
