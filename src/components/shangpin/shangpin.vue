<template>
  <div class="shangpins">
    <div class="zuos">
      <ul class="daohangs">
        <li class="daohang" v-for="(item,index) in shuju" :key="index">
          <span class="text border-1px">
            <span class="daohang-tubiao" v-if="item.type>0" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="yous">
        <ul class="you">
          <li class="you-item" v-for="(items,index) in shuju" :key="index">
            <h1 class="you-item-text">{{items.name}}</h1>
            <ul class="you-item-items">
              <li class="you-item-item" v-for="(ite,idx) in items" :key="idx">
                <div class="tupian">
                  <img width="57" height="57" :src="ite.icon" alt="" >
                </div>
                <div class="text">
                  <h2 class="biaoti">{{items.name}}</h2>
                  <div class="miaoshu">{{ite.description}}</div>
                  <div class="yueshous">
                    <span class="yueshou">月售{{ite.sellCount}}分</span>
                    <span>好评率{{ite.rating}}</span>
                  </div>
                  <div class="jiage">
                    <span class="xianjia">￥{{ite.price}}</span>
                    <span v-if="ite.oldPrice" class="yuanjia">￥{{ite.oldPrice}}</span>
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
export default {
  data() {
    return {
      shuju: []
    };
  },
  async created() {
    this.classMap=["decrease", "discount", "guarantee", "invoice", "special"];
    this.shuju = await shangpin("/api/goods");
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
    li{
      list-style:none;
    }
    flex: 1;
    .you-item-text{
      height:.26rem;
      padding-left:.14rem;
      line-height:.26rem;
      border-left:2px solid #d9dde1;
      font-size:.12rem;
      color:rgb(143,157,159);
      background-color:#f3f5f7;
    }
    .you-item-items{
      .you-item-item{
        margin:.18rem;
        display:flex;
        @include border-1px(rgba(7,17,27,0.1));
        .tupian{
          width:.6rem;
          height:.6rem;
          margin-right:.1rem;
          img{   
          vertical-align: top;   
          }
        }
        .text{

          margin-top:.02rem;
          .biaoti{
            font-size:.14rem;
            color:rgb(7,17,27);
            line-height:.14rem;

          }
          .miaoshu{
            font-size:.1rem;
            color: rgb(143,157,159);
            line-height:.1rem;
            margin:.08rem 0;
          }
          .yueshous{
            font-size:.1rem;
            color: rgb(143,157,159);
            line-height:.1rem;
            .yueshou{
              margin-right: .14rem;
            }
          }
          .jiage{
            line-height:.24rem;
            font-weight:700;
            font-size: .2rem;
            .xianjia{
              font-size:.14em;
              color:rgb(240,20,20);
            }
            .yuanjia{
              margin-left:.08rem;
              font-size:.1rem;
              color:rgb(143,157,159);
              text-decoration:line-through;
            }
          }
        }
      }
    }
  }
}
</style>