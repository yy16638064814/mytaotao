<template>
    <div>
        <Header type="我的书架"/>
         <Nav />
         <Search />
         <bookrack />
    </div>
</template>

<script>
import Header from "../components/Header"
import Nav from "../components/Nav"
import Search from "../components/Search"
import bookrack from "../components/bookrack"
export default {
    components:{
        Header,Nav,Search,bookrack
    }
}
</script>

<style scoped>

</style>