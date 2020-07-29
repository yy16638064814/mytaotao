<template>
  <div>
      <ul class="list">
        <li v-for="(gameName,index) in gameNames" :key="index" :types="gameNames" :class="{active:gameName==game}" @click="fn(gameName)">{{gameName}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"phcont",
  data(){
    return {
      game:"",
      gameNames:[
         "日点击榜",
        "周点击榜",
        "月点击榜",
        "总点击榜",
        "总收藏榜",
        "字数排行",
        "日推荐榜",
        "周推荐榜",
        "月推荐榜",
        "总推荐榜",
        "最新入库",
        "最近更新"
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
    height:0.4rem;
    text-align: center;
    line-height:0.4rem;
  border:1px solid #ccc;
    list-style:none;
     margin:0.1rem auto;
  }
  .active{
    background:#ccc;
  }
</style>