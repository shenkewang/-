<template>
  <div class="toubu">
    <div class="beijing">
      <img width="100%" height="100%"  :src="seller.avatar" alt="">
    </div>
    <div class="toubushang">
      <div class="toubushang-tu">
        <img :src="seller.avatar" alt />
      </div>
      <div class="toubushang-miaoshu">
        <div class="shang">
          <span class="tupian"></span>
          <span class="mingzi">{{seller.name}}</span>
        </div>
        <div class="zhong">{{seller.description}}/{{seller.deliveryTime}}分钟</div>
        <div class="xia" v-if="seller.supports">
          <span class="tubiao" :class="tubiaos[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="dingweitu" v-if="seller.supports">
        <span class="ziti">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="toubuxia">
      <div class="toubuxia-tu"> 
      </div>
      <div class="toubuxia-text">{{seller.bulletin}}</div>
        <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  created() {
    this.tubiaos = ["decrease", "discount", "guarantee", "invoice", "special"];
  }
};
</script>

<style lang="scss" scoped>
@import "../../gongyong/sass/mixin";
.toubu {
  background:rgba(7, 17, 27, 0.5);
  font-size: 0;
  color: #fff;
  position: relative;
  .beijing{
    position: absolute;
    top:0;
    width: 100%;
    height:1.34rem;
    filter: blur(10px);
     z-index: -1;
     

  }
  .toubushang {
    position: relative;
 
    padding: 0.24rem 0.12rem 0.18rem 0.24rem;

    .toubushang-tu {
      display: inline-block;
      width: 0.64rem;
      height: 0.64rem;
      border-radius: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .toubushang-miaoshu {
      
      display: inline-block;
      margin-left: 0.16rem;
      .shang {
        
        .tupian {
          display: inline-block;
          vertical-align: top;
          width: 0.3rem;
          height: 0.18rem;
          @include bg-image("./img/brand");
        }
        .mingzi {
          vertical-align: top;
          margin-left: 0.06rem;
          font-size: 0.16rem;
          font-weight: bold;
          line-height: 0.18rem;
        }
      }
      .zhong {
        font-size: 0.12rem;
        font-weight: 200;
        line-height: 0.12rem;
        margin-top: 0.08rem;
      }
      .xia {
        margin-top: 0.1rem;
        .tubiao {
          display: inline-block;
          width: 0.12rem;
          height: 0.12rem;

          &.decrease {
            @include bg-image("./img/decrease_1");
          }
          &.discount {
            @include bg-image("./img/discount_1");
          }
          &.guarantee {
            @include bg-image("./img/guarantee_1");
          }
          &.invoice {
            @include bg-image("./img/invoice_1");
          }
          &.special {
            @include bg-image("./img/special_1");
          }
        }
        .text {
          vertical-align: top;
          line-height: 0.12rem;
          margin-left: 0.04rem;
          font-size: 0.1rem;
          font-weight: 200;
        }
      }
    }
    .dingweitu {
      position: absolute;
      bottom: 0.14rem;
      right: 0.12rem;
      height:.24rem;
      padding: .06rem .08rem;
      text-align: center;
      border-radius: .4rem;
      background-color: rgba(0, 0, 0, .2);
      .ziti {
        font-size: 0.1rem;
        line-height: 0.12rem;
        font-weight: 200;
      }
      .icon-keyboard_arrow_right {
        font-size: 0.1rem;
        line-height:.12rem;
      }
    }
  }
  .toubuxia {
    background-color: rgba(7, 17, 27, 0.2);
    display: flex;
    align-items: center;
    font-size: 0.1rem;
    font-weight: 200;
    line-height: 0.28rem;
    height: 0.28rem;
    padding: 0 0.12rem 0 0.12rem;
    .toubuxia-tu {
      width: 0.22rem;
      height: 0.12rem;
      @include bg-image('./img/bulletin')
    }
    .toubuxia-text {
          white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
      width: 90%;
      flex: 1;
      margin: 0 .04rem;
      
    }
    .toubuxia-tubiao {
      width: 0.1rem;
      height: 0.1rem;
      font-size: 0.1rem;
    }
    .icon-keyboard_arrow_right{
      font-size:.1rem;
    }
  }
  

}
</style>