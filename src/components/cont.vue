<template>
  <div>
      <ul class="list">
        <li v-for="(gameName,index) in gameNames" :key="index" :types="gameNames" :class="{active:gameName==game}" @click="fn(gameName)">{{gameName}}</li>
      </ul>
      <ul class="dlist">
        <li v-for="(gameName,index) in wganme" :key="index" :types="wganme" :class="{active:gameName==game}" @click="fn(gameName)">{{gameName}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"cont",
  data(){
    return {
      game:"玄幻魔法",
      gameNames:[
         "玄幻魔法",
        "武侠修真",
        "都市言情",
        "历史军事",
        "侦探推理",
        "网游动漫"
      ],
      wganme:[
        "科幻灵异",
        "其他类型"
      ],
  activeName:""
    }
  },
  methods:{
    fn(gameName){
      this.game=gameName;
      // console.log(this.game)
      this.activeName=gameName;
      // console.log(this.activeName)
      // 子传父绑定自定义事件
    this.$emit("changetype",gameName);
    }
  }
}
</script>

<style scoped>
  .list{
    width:100%;
    height:1.5rem;
    /* background:red; */
    font-size:0.16rem;
    display:flex;
    flex-wrap: wrap;
  }
  .list li{
    width:30%;
    height:0.45rem;
    text-align: center;
    line-height:0.45rem;
  border:1px solid #ccc;
    list-style:none;
     margin:0 auto;
  }
  .active{
    background:#ccc;
  }
   .dlist{
    width:100%;
    height:1rem;
    /* background:red; */
    font-size:0.16rem;
    display:flex;
    flex-wrap: wrap;
  }
  .dlist li{
    width:45%;
    height:0.45rem;
    text-align: center;
    line-height:0.45rem;
  border:1px solid #ccc;
    list-style:none;
     margin:0 auto;
  }
</style>