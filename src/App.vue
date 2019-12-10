<template>
  <div id="app">
    <Toubu :seller="seller"/>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/shangpin">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/pingjia">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shangjia">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Toubu from "@/components/toubu/toubu"
import getData from "@/qingqiushuju/toubushuju.js";
export default {
  data(){
    return {
      seller:{}
    }
  },
  async created () {
      this.seller=await getData('/api/seller');
  },
  components: {
    Toubu
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  color: #000;
  text-decoration: none;
}
@import "./gongyong/mixin.scss";
.tab {
  display: flex;
  @include border-1px(rgba(7, 17, 27, 0.1));
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  .tab-item {
    flex: 1;
    font-size: 0.14rem;
    text-align: center;
    color: rgb(77, 85, 93);
    & > a {
      display: block;
      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
