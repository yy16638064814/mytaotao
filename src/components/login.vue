<template>
   <div>
       <div class="top">
                账号 ： <input type="text"><br>
                密码 ： <input type="text"><br>
       </div>
       <div class="bottom">
            <button>登录</button>
            <button>没有账号？点击注册</button>
       </div>
   </div>
</template>

<script>
export default {
    name:"login"
}
</script>

<style scoped>
    div{
        font-size:0.25rem
    }
    .top{
        width:100%;
        height:1.3rem;
        /* background:red; */
        text-align:center;
        font-size:0.15rem;
        color:#ccc;
    }
    .top input{
        width:77%;
       height:0.28rem;
       margin-top:0.2rem;
       margin-bottom:0.2rem;
       border:1px solid #B7F3F9;
    }
    .bottom{
        width:100%;
        height:1.5rem;
        /* background:red; */
        display:flex;
        flex-direction: column;
        }
    .bottom button{
        width:95%;
        height:0.4rem;
        margin:0 auto;
        margin-top:0.2rem;
        background:#0080c0;
        border:0;
        color:white;
        font-size:0.18rem;
        font-weight: 700;
    }
    
</style>