<template>
  <div>
      <ul class="nav">
          <li @click="sy">首页</li>
          <li @click="fl">分类</li>
          <li @click="qs">全书</li>
          <li @click="ph">排行</li>
          <li @click="sj">书架</li>
      </ul>
  </div>
</template>

<script >
export default {
    name:"Nav",
    methods:{
        fl(){
            this.$router.push({path:"/fenlei"})
        },
        ph(){
            this.$router.push({path:"/paihang"})
        },
        qs(){
            this.$router.push({path:"/quanshu"})
        },
        sy(){
            this.$router.push({path:"/"})
        },
        sj(){
            this.$router.push({path:"/shujia"})
        }
    }
}
</script>

<style scoped>
    .nav{
        width:100%;
        height:.34rem;
        line-height:.34rem;
        font-size:.15rem;
        display:flex;
        justify-content:space-around;
        background:#ccc;
        margin-bottom:0.1rem;
    }
    .nav li{
        list-style:none;
    }
</style>