<template>
   <div id="app">
        <div class="top">
        <button @click="$router.back(-1)">返回</button>
        <p>{{type}}</p>
        <button @click="fn">首页</button>
        </div>
   </div>
</template>

<script>
export default {
    name:"Header",
    props:["type","txt"],
    methods:{
        fn(){
            this.$router.push({path:"/index"});
        }
    }

}
</script>

<style scoped>
    .top{
        width:100%;
        height: .5rem;
        background:#007bb1;
        display:flex;
        justify-content: space-between;
        line-height:.5rem;
    }
    .top button{
        width:.4rem;
        height:.26rem;
        margin-top:.15rem;
        margin:.15rem .1rem 0 .1rem;
        background:#65bbec;
        border:0;
        outline: none;
        color:white;
        border-radius: 3px;
    }
    .top p{
        font-size:.15rem;
        color:white;
    }
</style>