import Vue from 'vue';
import VueRouter from 'vue-router';

import Shangpin from '@/components/shangpin/shangpin.vue';
import Pingjia from '@/components/pingjia/pingjia.vue';
import Shangjia from '@/components/shangjia/shangjia.vue';


Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/', redirect: '/shangpin'},
        {path:'/shangpin',component:Shangpin},
        {path:'/pingjia',component:Pingjia},
        {path:'/shangjia',component:Shangjia}
        
    ],
    linkExactActiveClass:"active",
    linkActiveClass:"active"
});