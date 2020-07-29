<template>
  <div>
      <div class="box">
          <input type="text" placeholder="输入书名后搜索，宁可少字不要错字">
          <img src="img/fangda.png">
      </div>
  </div>
</template>

<script>
export default {
    name:"Search"
}
</script>

<style scoped>
    .box{
        display:flex;
        width:100%;
        height:.5rem;
        /* background:green; */
    }
    .box input{
        width:85%;
        height:.33rem;
        margin-left:.1rem;
        outline: none;
    }
    .box img{
        width:10%;
        height:.37rem;
    }


</style>