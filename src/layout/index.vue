<template>
    <div>
        <Iheader type="书趣阁"></Iheader>
        <Nav></Nav>
        <Search></Search>
        <list></list>
        <listmore v-for="(item,index) in listt" :key="index" :types="item"></listmore>
    </div>
</template>

<script>
import Iheader from "../components/Iheader";
import Nav from "../components/Nav";
import Search from "../components/Search";
import listmore from "../components/listmore";
import list from "../components/list";
export default {
        name:"index",
         data() {
    return {
      listt: [
        "玄幻魔法",
        "武侠修真",
        "都市言情",
        "历史军事",
        "侦探推理",
        "网游动漫",
        "科幻灵异",
        "其他类型"
      ]
    };
  },
        components:{
            Iheader,Nav,Search,listmore,list
        }
}
</script>

<style scoped>

</style>