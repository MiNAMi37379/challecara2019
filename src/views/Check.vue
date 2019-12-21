<template>
  <div class="check">
    <h1>ワークの確認</h1>
    <ul>
      <li>ワーク名：{{ workname }}</li>
      <li>所要時間：{{ workmin }}分{{ worksec }}秒</li>
    </ul>
    <button v-on:click="back" class="button1">もどる</button><br>
    <button v-on:click="doing()">完了！</button>
  </div>
</template>

<script>
export default{
  name: 'check',
  computed: {
    workname(){
      return this.$store.getters.getWorkName
    },
    workmin(){
      return this.$store.getters.getWorkMin
    },
    worksec(){
      return this.$store.getters.getWorkSec
    }
  },
  methods: {
    back: function(){
      this.$router.go(-1)
    },
    doing: function(){
      this.$router.push("/doing")
      this.$store.commit('addPassword', Math.floor( Math.random()*8999 ) + 1000)
    }
  }
}
</script>

<style scoped>
h1 {
  height: 70px;
  margin-top: 0%;
  margin-bottom: 20%;
  font-size: 180%;
  font-weight: 300;
  vertical-align: middle;
  line-height: 70px;
  background-color: rgb(238, 65, 34);
}
li {
  font-size: 175%;
  text-align: center;
}
button {
  width: 100%;
  height: 70px;
  font-size: 180%;
  margin: 0;
  border: 1px solid;
}
.button1 {
  margin-top: 83%
}
</style>