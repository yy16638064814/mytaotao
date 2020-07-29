<template>
  <div>
    <Header :type="this.msg"></Header>
    <Nav />
    <Search />
    <cont  @changetype="fun"/>
  </div>
</template>
<script>
import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import cont from "../components/cont";
export default {
  name:"fenlei",
  data(){
    return {
      msg:"玄幻魔法"
    }
  },
  components: {
    Header,
    Nav,
    Search,
    cont,
  },
  methods:{
       fun(i){
            this.msg = i;
            // console.log(this.msg)
        }
  }
};
</script>

<style scoped>
</style>