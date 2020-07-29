<template>
<div>
      <div class="box">
      <div class="top">
          <h3>封面推荐</h3>
      </div>
      <div class="bottom">
          <div class="bottoms" v-for="(item,index) in lists" v-if="index<3" :key="index">
          <div class="left">
              <img :src="item.imgs" alt="">
          </div>
          <div class="right">
              <h3>{{item.name}}</h3>
              <h4>作者:{{item.au}}</h4> 
              <p>{{item.det}}</p>
          </div>
      </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
        name:"list",
         created() {
      axios({
        url:"http://localhost:3000/lists?",
        params:{

        }
      }).then(res => {
        //   console.log(res.data);
       this.lists= res.data
      });
  },   data(){
            return {
          lists: [
        {
          imgs: "./img/ia_100000000.jpg",
          id: "001",
          name: "三寸人间",
          au: "耳根",
          det:
            "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
        },
        {
          imgs: "./img/ia_100000002.jpg",
          id: "002",
          name: "三寸人间",
          au: "耳根",
          det:
            "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
        },
        {
          imgs: "./img/ia_100000003.jpg",
          id: "003",
          name: "三寸人间",
          au: "耳根",
          det:
            "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
        },
      ],
            }
        },
}
</script>

<style scoped>
    .box{
        width:100%;
        height:4.5rem;
        /* background:red; */
        box-sizing: border-box;
        padding-left:0.1rem;
    }
    .top{
        width:100%;
        height:0.3rem;
        border-bottom:1px solid blue;
        margin-bottom:0.1rem;
    }
    .top h3{font-size:16px}
    .bottom{
        width:100%;
        height:4.2rem;
        /* background:yellow; */
    }
    .bottoms img{
        width:0.8rem;
        height:1rem;
    }
    .bottoms{
        width:100%;
        height:1.rem;
        /* background:green; */
        display:flex;
    }
    .left{
      margin-right:0.1rem;
        font-size:0.2rem;
        /* background:red; */
        margin:0.1rem 0 0;
    }
    .right{
        margin-left:0.1rem;
    }
    .right h3{
        margin-top:0.05rem;
        font-size:0.16rem;
    }
    .right h4{
        font-size:0.14rem;
        font-weight: 100;
        color:#ccc;
    }
    .right p{
        font-size:0.13rem;
overflow : hidden;
text-overflow:ellipsis;
display: -webkit-box;
-webkit-line-clamp:3;
-webkit-box-orient: vertical;
    }


</style>