<template>
  <div id="boxxx">
    <div class="tit">
      <div>{{types}}</div>
      <div>更多...</div>
    </div>
    <div class="list">
      <div class="listt">
        <img :src="lists[0].imgs" />
        <div class="right">
          <div class="name">{{lists[0].name}}</div>
          <div class="au">
            作者：
            {{lists[0].au}}
          </div>
          <div class="conf">{{lists[0].det}}</div>
        </div>
      </div>
      <div class="listts">
        <span class="a">{{lists[index].name}}</span>/
        <span class="b">{{lists[index].au}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "listmore",
  props: ["types"],
    data() {
    return {
      msgs: "",
      lists: [
        {
          imgs: "",
          id: "",
          name: "",
          au: "",
          det: ""
        }
      ]
    };
  },
  created() {
      axios({
        url:"http://localhost:3000/lists",
        params:{
          type:this.types
        }
      }).then(res => {
       this.lists= res.data
      });
  },
};
</script>


<style scoped>
#boxxx {
  width: 100%;
}

.tit {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 0.34rem;
  font-size: 0.16rem;
  background: #ecf0f0;
  font-weight: 600;
  padding-left: 0.1rem;
  line-height: 0.34rem;
  border-bottom: 1px solid #007bb1;
  justify-content: space-between;
}
.tit :nth-child(2){
  font-size:12px;
}

.list {
  box-sizing: border-box;
  width: 100%;
  height: 4.2rem;
  padding: 0.1rem 0.1rem 0.2rem 0.1rem;
}

.listt {
  box-sizing: border-box;
  width: 100%;
  height: 1rem;
  margin-bottom: 0.2rem;
  display: flex;
}

.right {
  width: 75%;
  height: 100%;
  font-size: 0.12rem;
  margin-left: 0.12rem;
}

.listts {
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #ececec;
  font-size: 0.14rem;
  line-height: 0.4rem;
}

.listts span:nth-type-child(1) {
  color: #007bb1;
  font-size: 0.16rem;
}

.listt img {
  display: flex;
  width: 0.8rem;
  height: 100%;
}

.right {
  width: 75%;
  height: 100%;
  font-size: 0.12rem;
  margin-left: 0.12rem;
}

.name {
  font-size: 0.16rem;
  font-weight: 600;
}

.au {
  color: #999999;
}

.conf {
  font-size: 0.13rem;
  overflow: hidden;
}

.a {
  color: #007bb1;
  font-size: 0.16rem;
  font-weight: 600;
}
</style>>
