<template>
    <div class="tanceng-biaoti">
        <div class="zuo"></div>
        <div class="zhong">{{title}}</div>
        <div class="you"></div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            requred:true,
            type:String
        }
    }
}
</script>
<style lang="scss" scoped>
    .tanceng-biaoti{
        display:flex;
        width:80%;
        margin:.28rem auto .24rem;
        .zuo{
            flex: 1;
            border-bottom:1px solid rgba(255, 255, 255,0.2);
            position:relative;
            top:-.06rem;
        }
        .zhong{
            margin:0 .12rem;
            line-height: .14rem;
            font-size: .14rem;
            font-weight: 700;
        }
        .you{
            flex: 1;
            border-bottom:1px solid rgba(255, 255, 255,0.2);
            position:relative;
            top:-.06rem;
        }


        
    }
</style>