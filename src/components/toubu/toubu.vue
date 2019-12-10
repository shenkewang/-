<template>
  <div class="toubu">
    <div class="toubushang">
      <div class="toubushang-tu">
        <img :src="seller.avatar" alt />
        <div class="toubushang-miaoshu">
          <div class="shang">
            <span class="tupian"></span>
            <span class="mingzi">{{seller.name}}</span>
          </div>
          <div class="zhong">{{seller.description}}/{{seller.deliveryTime}}分钟</div>
          <div class="xia" v-if="seller.supports">
            <span class="tubiao"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="toubuxia">adrghgshysrthjdftyjhudtyiuyriuytdtyujitdyutyed</div>
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
.toubu{
    color: #fff;
    background-color: #000;
    .toubushang{
        padding: .24rem 012rem .18rem .24rem;
        .toubushang-tu{
           
            width:.64rem;
            height:.64rem;
            img{
                width:100%;
                height:100%;
                vertical-align: top;
                border-radius: 2px;
            }
            .toubushang-miaoshu{
               
                .shang{
                    .tupian{}
                    .mingzi{
                        font-size: .16rem;
                        font-weight: bold;
                        line-height:.18rem;
                    }
                }
                .zhong{
                    font-size:.12rem;
                    font-weight: 200;
                    line-height:.12rem; 
                }
                .xia{
                    font-size:.1rem;
                        font-weight: 200;
                       line-height:.12rem; 
                    }

            }
        }
    }
}
</style>