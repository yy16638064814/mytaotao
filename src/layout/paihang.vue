<template>
  <div>
    <Header type="总推荐榜"/>
    <Nav />
    <Search />
    <phcont />
  </div>
</template>

<script>
import Header from "../components/Header"
import Nav from "../components/Nav"
import Search from "../components/Search"
import phcont from "../components/phcont"
export default {
    components:{
        Header,Nav,Search,phcont
    }
}
</script>

<style scoped>

</style>