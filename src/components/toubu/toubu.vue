<template>
  <div class="toubu">
    <div class="toubushang">
      <div class="toubushang-tu">
        <img :src="seller.avatar" alt />
      </div>
      <div class="toubushang-miaoshu">
        <div class="shang">
          <span class="tupian">
            <img src="./img/brand@2x.png" alt />
          </span>
          <span class="mingzi">{{seller.name}}</span>
        </div>
        <div class="zhong">{{seller.description}}/{{seller.deliveryTime}}分钟</div>
        <div class="xia" v-if="seller.supports">
          <span class="tubiao">
            <img src="./img/decrease_1@2x.png" alt />
          </span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="toubuxia">
      <div class="toubuxia-tu">
        <img src="./img/bulletin@2x.png" alt />
      </div>
      <div class="toubuxia-text">{{seller.bulletin}}</div>
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
  }
};
</script>
<style lang="scss" scoped>
.toubu {
  font-size: 0;
  color: #fff;

  .toubushang {
    background-color: rgba(7, 17, 27, 0.5);
    padding: 0.24rem 0.12rem 0.18rem 0.24rem;
    display: flex;
    .toubushang-tu {
      width: 0.64rem;
      height: 0.64rem;
      border-radius: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .toubushang-miaoshu {
      margin-left: 0.16rem;
      .shang {
        display: flex;
        margin-top: 0.02rem;
        .tupian {
          width: 0.3rem;
          height: 0.18rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .mingzi {
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
        display: flex;
        margin-top: 0.1rem;
        .tubiao {
          width: 0.12rem;
          height: 0.12rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          font-size: 0.1rem;
          font-weight: 200;
        }
      }
    }
  }
  .toubuxia {
    background-color: rgba(7, 17, 27, 0.2);
    display: flex;
    font-size: 0.1rem;
    font-weight: 200;
    line-height: 0.28rem;
    width: 100%;
    height: 0.28rem;
    padding: 0 0.12rem 0 0.12rem;
    .toubuxia-tu {
      margin-top: 0.02rem;
      width: 0.22rem;
      height: 0.12rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .toubuxia-text {
      flex: 1;
      margin-left: 0.04rem;
    }
  }
}
</style>