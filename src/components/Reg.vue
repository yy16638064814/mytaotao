<template>
        <div>
            <div class="box">
             <div class="top">
                账号 ： <input type="text" :name="username"><br>
                密码 ： <input type="text" :name="userpwd"><br>
                邮箱 ： <input type="text"><br>
                验证码：<input type="text"><br>
             </div>
             <div class="bottom">
                 <button @click="btn">确认注册</button>
                 <button>已有账号,点击登录</button>
             </div>
            </div>
        </div>
</template>

<script>
import axios from "axios"
export default {
        methods:{
            btn(){
                let params=new URLSearchParams();
                params.append("name","username");
                params.append("name","userpwd");
                axios({
                url:"../servers/Reg.php",
                method:'post',
                data:params
            }).then(res =>{
                if(res.data == 1){
                    window.alert("注册成功");
                    window.location.href="../layout/index.vue";
                }else{
                    window.alert("用户名已被使用");
                }
            })
            }
        }
}
</script>

<style scoped>
        .box{
            font-size:0.16rem;
            width:100%;
            height:4.1rem;
            /* background:red; */
        }
        .top{
            width:100%;
            height:3rem;
            /* background:blue; */
            font-size:0.16rem;
            text-align:center;
            color:#ccc;
        }
        .top input{
            width:75%;
            height:0.28rem;
            margin-top:0.3rem;
            border:1px solid #B7F3F9;
        }
        .bottom{
            display:flex;
            flex-direction: column;
            width:100%;
            height:1.2rem;
            /* background:blue; */
        }
        .bottom button{
            width:90%;
            height:0.4rem;
            margin:0 auto;
            margin-top:0.2rem;
            background:#0080c0;
            border:0
        }
</style>