<template>
       <div id="app">
       <div class="left">
            <p>{{type}}</p>
       </div>
        <div class="right">
        <button @click="fn">登录</button>
        <button @click="zc">注册</button>
        </div>
   </div>
</template>

<script>
export default {
    props:["type"],
    methods:{
        fn(){
             this.$router.push({path:"/login"});
        },
        zc(){
            this.$router.push({path:"/reg"});
        }
    }
}
</script>

<style scoped>
       #app{
        width:100%;
        height: .5rem;
        background:#007bb1;
        display:flex;
        justify-content: space-between;
        line-height:.5rem;
    }
    .right{
        display: flex;
    }
    #app button{
        width:.5rem;
        height:.33rem;
        /* margin-top:.15rem; */
        margin:.1rem .1rem 0 .1rem;
        background:#65bbec;
        border:0;
        outline: none;
        color:white;
        border-radius: 3px;
    }
    #app p{
        margin-left:0.1rem;
        font-size:.2rem;
        color:white;
    }

</style>