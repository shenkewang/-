<template>
  <div class="shangpins">
    <div class="zuos" ref="zuogundong">
      <ul class="daohangs">
        <li class="daohang" v-for="(item,index) in shuju" :key="index">
          <span class="text border-1px">
            <span class="daohang-tubiao" v-if="item.type>0" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="yous" ref="yougundong">
      <ul class="you">
        <li class="you-item" v-for="(items,index) in shuju" :key="index">
          <h1 class="you-item-text">{{items.name}}</h1>
          <ul class="you-item-items" v-for="(itemx,inx) in items.foods" :key="inx">
            <li class="you-item-item border-1px">
              <div class="tupian">
                <img width="57" height="57" :src="itemx.icon" alt />
              </div>
              <div class="text">
                <h2 class="biaoti">{{itemx.name}}</h2>
                <div class="miaoshu">{{itemx.description}}</div>
                <div class="yueshous">
                  <span class="yueshou">月售{{itemx.sellCoun}}份</span>
                  <span>好评率{{itemx.rating}}%</span>
                </div>
                <div class="jiage">
                  <span class="xianjia">￥{{itemx.price}}</span>
                  <span v-if="itemx.oldPrice" class="yuanjia">￥{{itemx.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import shangpin from "@/qingqiushuju/toubushuju.js";
import Bscroll from "@better-scroll/core";
export default {
  data() {
    return {
      shuju: []
    };
  },
  async created() {
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
    this.shuju = await shangpin("/api/goods");
    this.initScroll();
  },
  methods:{
    initScroll(){
      this.zuoScroll=new Bscroll(this.$refs.zuogundong);
      this.youScroll=new Bscroll(this.$refs.yougundong);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../gongyong/sass/mixin";
.shangpins {
  display: flex;
  position: absolute;
  top: 1.74rem;
  bottom: 0.48rem;
  width: 100%;
  overflow: hidden;
  .zuos {
    flex: 0 0 0.8rem;
    width: 0.8rem;
    .daohangs {
      &:last-child {
        @include border-none;
      }
      .daohang {
        display: table;
        padding: 0 0.12rem;
        width: 100%;
        height: 0.54rem;
        background-color: #f3f5f7;
      }
      .text {
        display: table-cell;
        vertical-align: middle;
        @include border-1px(rgba(7, 17, 27, 0.1));
        line-height: 0.14rem;
        font-size: 0.12rem;
        font-weight: 200;
      }
      .daohang-tubiao {
        display: inline-block;
        margin-right: 0.02rem;
        vertical-align: top;
        width: 0.12rem;
        height: 0.12rem;
        &.decrease {
          @include bg-image("./img/decrease_3");
        }
        &.discount {
          @include bg-image("./img/discount_3");
        }
        &.guarantee {
          @include bg-image("./img/guarantee_3");
        }
        &.invoice {
          @include bg-image("./img/invoice_3");
        }
        &.special {
          @include bg-image("./img/special_3");
        }
      }
    }
  }
  .yous {
    li {
      list-style: none;
    }
    flex: 1;
    .you-item-text {
      height: 0.26rem;
      padding-left: 0.14rem;
      line-height: 0.26rem;
      border-left: 2px solid #d9dde1;
      font-size: 0.12rem;
      color: rgb(143, 157, 159);
      background-color: #f3f5f7;
    }
    .you-item-items {
      &:last-child {
        @include border-none;
      }
      .you-item-item {
        margin: 0.18rem;
        display: flex;
        @include border-1px(rgba(7, 17, 27, 0.1));

        .tupian {
          width: 0.6rem;
          height: 0.6rem;
          margin-right: 0.1rem;
          img {
            vertical-align: top;
          }
        }
        .text {
          margin-top: 0.02rem;
          .biaoti {
            font-size: 0.14rem;
            color: rgb(7, 17, 27);
            line-height: 0.14rem;
          }
          .miaoshu {
            font-size: 0.1rem;
            color: rgb(143, 157, 159);
            line-height: 0.1rem;
            margin: 0.08rem 0;
          }
          .yueshous {
            font-size: 0.1rem;
            color: rgb(143, 157, 159);
            line-height: 0.1rem;
            .yueshou {
              margin-right: 0.14rem;
            }
          }
          .jiage {
            line-height: 0.24rem;
            font-weight: 700;
            font-size: 0.2rem;
            margin-bottom: 0.16rem;
            .xianjia {
              font-size: 0.14em;
              color: rgb(240, 20, 20);
            }
            .yuanjia {
              margin-left: 0.08rem;
              font-size: 0.1rem;
              color: rgb(143, 157, 159);
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>