<template>
  <div class="shangpins">
    <!-- {{currentIndex}} -->
    <div class="zuos" ref="zuogundong">
      <ul class="daohangs">
        <li
          class="daohang"
          :class="{active:currentIndex===index}"
          v-for="(item,index) in shuju"
          :key="index"
          @click="xuanshangpin(index)"
        >
          <span class="text border-1px">
            <span class="daohang-tubiao" v-if="item.type>0" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="yous" ref="yougundong">
      <ul class="you">
        <li class="you-item" v-for="(items,index) in shuju" :key="index" ref="youItem">
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
    <gouwuche v-if="selle.deliveryPrice" :deliveryPrice="selle.deliveryPrice" :minPrice="seller.minPrice"></gouwuche>
  </div>
</template>
<script>
import shangpin from "@/qingqiushuju/toubushuju.js";
import Bscroll from "@better-scroll/core";
import gouwuche from "@/components/gouwuche/gouwuche.vue"
export default {
  props:{
      seller:{
        type:Object
      }
    },
  data() {
    return {
      shuju: [],
      listHeight: [], //用于存储每一段（you-item）的高度
      gaodu: 0
    };
  },
  computed: {
    currentIndex() {
      //计算index
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.gaodu >= height1 && this.gaodu < height2)) {
          return i; //i就是要找的index
        }
      }
    }
  },
  async created() {
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
    this.shuju = await shangpin("/api/goods");
    await this.$nextTick();
    this.initScroll();
    this.computedHeight();
  },
  methods: {
    initScroll() {
      this.zuoScroll = new Bscroll(this.$refs.zuogundong, {
        click:true//让click事件生效
      });
      this.youScroll = new Bscroll(this.$refs.yougundong, {
        probeType: 3 ,//实时监听scroll,包括触底反弹的动画
        click:true
      });
      //监听滚动事件
      this.youScroll.on("scroll", pos => {
        this.gaodu = Math.abs(pos.y);
        if(this.gaodu>=this.listHeight[this.listHeight.length-2]){
            this.zuoScroll.scrollTo(0,-54);
            console.log(this.listHeight[this.listHeight.length-2])
        }
        if(this.gaodu<=300){
          this.zuoScroll.scrollTo(0,0);
        }
      });
    },
    computedHeight() {
      //统计每一段的高度
      let youItem = this.$refs.youItem;
       //console.log(youItem);
      let height = 0;
      this.listHeight.push(height);
      youItem.forEach(ietm => {
        height += ietm.clientHeight;
        this.listHeight.push(height);
      });
       console.log(this.listHeight);
    },
    xuanshangpin(index){
      let youItems=this.$refs.youItem;
      let youItem=youItems[index];
      this.youScroll.scrollToElement(youItem,500);
    }
  },
  components:{
    gouwuche
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
        &.active {
            background: #fff;
            .text{
              font-weight: 700;
            }
        }
        &:last-child {
          .text {
            @include border-none();
          }
        }
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
        .you-item-item {
          @include border-none();
        }
      }
    }
    .you-item-item {
      display: flex;
      margin: 0.18rem;
      padding-bottom: 0.1rem;
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
          color: rgb(113, 129, 145);
          line-height: 0.14rem;
        }
        .miaoshu {
          font-size: 0.1rem;
          color: rgb(143, 157, 159);
          line-height: 0.16rem;
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
          .xianjia {
            font-size:.14rem;
            
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
</style>