<template>
  <div class="toubu">
    <div class="beijing">
      <img width="100%" height="100%" :src="seller.avatar" alt />
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
      <div class="dingweitu" v-if="seller.supports" @click="shifouxianshi=true">
        <span class="ziti">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="toubuxia">
      <div class="toubuxia-tu"></div>
      <div class="toubuxia-text">{{seller.bulletin}}</div>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <transition name="donghua">
        <div class="tancen" v-if="shifouxianshi">
      <div class="tancen-s qingchufudong">
        <div class="biaoti">{{seller.name}}</div>
        <xingxing v-if="seller.score" :daxiao="48" :fenshu="seller.score"></xingxing>
        <biaoti title="优惠信息"></biaoti>
        <ul class="huodongs">
          <li class="huodong" v-for="(item,index) in seller.supports" :key="index">
            <span class="huodong-tubiao" :class="tubiaos[item.type]"></span>
            <span class="huodong-wenzi">{{item.description}}</span>
          </li>
        </ul>
        <biaoti title="商家公告"></biaoti>
        <div class="jieshaos">
          <p class="jieshao">{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="tancen-x" @click="shifouxianshi=false">
        <i class="icon-close"></i>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
import xingxing from "@/components/xiaoxingxing/xingxing.vue";
import biaoti from "@/components/tanceng-biaoti/tanceng-biaoti.vue";
export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      shifouxianshi:false
    }
  },
  created() {
    this.tubiaos = ["decrease", "discount", "guarantee", "invoice", "special"];
  },
  components: {
    xingxing,
    biaoti
  }
};
</script>

<style lang="scss" scoped>
@import "@/gongyong/sass/mixin";
.toubu {
  background: rgba(7, 17, 27, 0.5);
  font-size: 0;
  color: #fff;
  position: relative;
  .beijing {
    position: absolute;
    top: 0;
    width: 100%;
    height: 1.34rem;
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
      height: 0.24rem;
      padding: 0.06rem 0.08rem;
      text-align: center;
      border-radius: 0.4rem;
      background-color: rgba(0, 0, 0, 0.2);
      .ziti {
        font-size: 0.1rem;
        line-height: 0.12rem;
        font-weight: 200;
      }
      .icon-keyboard_arrow_right {
        font-size: 0.1rem;
        line-height: 0.12rem;
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
      @include bg-image("./img/bulletin");
    }
    .toubuxia-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 90%;
      flex: 1;
      margin: 0 0.04rem;
    }
    .toubuxia-tubiao {
      width: 0.1rem;
      height: 0.1rem;
      font-size: 0.1rem;
    }
    .icon-keyboard_arrow_right {
      font-size: 0.1rem;
    }
  }
  .tancen {
        &.donghua-enter, &.donghua-leave-to {
            opacity: 0;
        }
        &.donghua-enter-active, &.donghua-leave-active {
            transition: .5s;
        }
        &.donghua-leave, &.donghua-enter-to {
            opacity: 1;
        }
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    z-index: 100;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);
    .tancen-s {
      min-height: 100%;
      text-align: center;
      .biaoti {
        font-size: 0.16rem;
        margin-top: 0.64rem;
        font-weight: 700;
        line-height: 0.16rem;
      }
      .huodongs {
        list-style: none;
        width: 80%;
        margin: 0 auto 0.28rem;
        padding: 0 0.12rem;
        text-align: left;
        .huodong {
          margin-top: 0.12rem;
          .huodong-tubiao {
            display: inline-block;
            width: 0.16rem;
            height: 0.16rem;
            vertical-align: top;

            &.decrease {
              @include bg-image("./img/decrease_2");
            }
            &.discount {
              @include bg-image("./img/discount_2");
            }
            &.guarantee {
              @include bg-image("./img/guarantee_2");
            }
            &.invoice {
              @include bg-image("./img/invoice_2");
            }
            &.special {
              @include bg-image("./img/special_2");
            }
          }
          .huodong-wenzi {
            vertical-align: top;
            font-size: 0.12rem;
            font-weight: 200;
            color: rgb(255, 255, 255);
            margin-left: 0.06rem;
          }
        }
      }
      .jieshaos {
        width:80%;
        margin:.24rem auto 0;
        padding:0 .12rem;
        .jieshao {
          text-align: left;
          font-size: .12rem;
          font-weight:200;
          color:rgb(255, 255, 255);
          line-height:.24rem;
          text-align: justify;//左右两端对齐
        }
      }
    }
    .tancen-x {
      position: relative;
      margin: -0.64rem auto 0 auto;
      font-size: 0.32rem;
      width: 0.32rem;
      color: rgb(255, 255, 255);
    }
  }
}
</style>