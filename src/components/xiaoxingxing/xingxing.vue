<template>
  <div class="zhengti" :class="xingyangshi">
    <span v-for="(xingitem,index) in xingzhonglei" class="xing" :class="xingitem" :key="index"></span>
  </div>
</template>
<script>
const zongxingshu = 5; //星星的数量
const quan = "quanxing"; //全星
const ban = "banxing"; //半星
const mei = "meixing"; //没星
export default {
  props: {
    daxiao: {
      //星星的尺寸
      type: Number,
      required: true
    },
    fenshu: {
      //星星的发分数
      type: Number,
      required: true
    }
  },
  computed: {
    xingyangshi() {
      //用来计算不同的星星样式的class名并返回给绑定的claa
      return "xing-" + this.daxiao;
    },
    xingzhonglei() {
      //用来计算要显示哪一种星星
      let zhongleis = [];
      let zongfenshu = Math.floor(this.fenshu * 2) / 2; //分数
      let zhengshu = parseInt(zongfenshu); //整分
      let xiaoshu = zongfenshu % 1 !== 0; //小数
      for (let i = 0; i < zhengshu; i++) {
        //循环每个是整数的元素
        zhongleis.push(quan); //给数组追加整数指定的星星
      }
      if (xiaoshu) {
        //判断是否存在小数
        zhongleis.push(ban); //给数组追加小数指定的星星
      }
      while (zongxingshu > zhongleis.length) {
        //对比星星的最大数量和数组长度的实际元素数量相等
        zhongleis.push(mei); //如果不等给数组追加mei指定的星星
      }
      return zhongleis;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../gongyong/sass/mixin";
.zhengti {
  margin-top: 0.16rem;
  font-size: 0;
  .xing {
    display: inline-block;
    &:last-child {
      margin-right: 0 !important;
    }
  }
}
.xing-48 {
  .xing {
    width: 0.2rem;
    height: 0.19rem;
    margin-right: 0.2rem;
    &.quanxing {
      @include bg-image("./img/star48_on");
    }
    &.banxing {
      @include bg-image("./img/star48_half");
    }
    &.meixing {
      @include bg-image("./img/star48_off");
    }
  }
}
.xing-36 {
  .xing {
    width: 0.15rem;
    height: 0.15rem;
    margin-right: 0.06rem;
    &.quanxing {
      @include bg-image("./img/star36_on");
    }
    &.banxing {
      @include bg-image("./img/star36_half");
    }
    &.meixing {
      @include bg-image("./img/star36_off");
    }
  }
}
.xing-24 {
  .xing {
    width: 0.1rem;
    height: 0.1rem;
    &.quanxing {
      @include bg-image("./img/star24_on");
    }
    &.banxing {
      @include bg-image("./img/star24_half");
    }
    &.meixing {
      @include bg-image("./img/star24_off");
    }
  }
}
</style>