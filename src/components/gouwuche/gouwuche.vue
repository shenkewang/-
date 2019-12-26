<template>
  <div class="shangpindibu">
    <div class="zuo">
      <div class="tupians">
        <div class="tupian">
          <i class="icon-shopping_cart"></i>
        </div>
      </div>
      <div class="jiage">￥0</div>
      <div class="peisongfei">另需配送费￥{{deliveryPrice}}元</div>
    </div>
    <div class="you">
      <div class="text">
        ￥20元起送
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    deliveryPrice:{
      type:Number,
      required:true
    },
    minPrice:{
      type:Number,
      required:true
    }
  }
};
</script>
<style lang="scss" scoped>
.shangpindibu {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 0.48rem;
  background-color: #141d27;
  .zuo {
    position:relative;
    flex: 1;
    display:flex;
    .tupians {
      position:absolute;
      width: 0.6rem;
      height: 0.6rem;
      background-color:#131D26;
      bottom: 0rem;
      left: 0.12rem;
      right: 0.18rem;
      line-height: .6rem;
      border-radius:50%;
      .tupian {
        vertical-align: top;
          border-radius: 50%;
          margin:.08rem;
          width:.44rem;
          height:.44rem; 
          background-color:#2B343C;
          text-align:center;
        .icon-shopping_cart{
          line-height:.44rem;
          vertical-align:top;
          width:100%;
          height:100%;
          display:inline-block;
          font-size:.24rem;
          color:#80858A;
          
        }
      }
    }
    .jiage{
      margin:.22rem .12rem .12rem .78rem;
      font-size:.16rem;
      color:rgba(255,255,255,0.4);
      font-weight:700;
      line-height:.08rem;
     
    }
    .peisongfei{
      font-size:.16rem;
      color:rgba(255,255,255,0.4);

      line-height:.24rem;
      border-left:1px solid rgba(255,255,255,0.1);
      padding-left: .12rem;
      margin:.12rem 0;
    }
  }
  .you {
    width: 1.05rem;
    background-color: #2b333b;
    text-align:center;
    .text{
      font-size:.12rem;
      color:rgba(255,255,255,0.4);
      font-weight:700;
      line-height:.48rem;
    }
  }
}
</style>