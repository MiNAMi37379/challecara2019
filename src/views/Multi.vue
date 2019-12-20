<template>
  <div class="multi">
    <img src="../../image/back.png" id="img1" v-on:click="back">
    <h1 class="header-item">みんなで使う</h1>
    <img src="../../image/home.png" class="header-item" id="img2" v-on:click="home"><br>
    <button v-on:click="schedule">スケジュールを作成</button><br>
    <button v-on:click="join">スケジュールに参加</button><br>
    <button v-on:click="back">もどる</button>
  </div>
</template>

<script>
export default{
  methods: {
    schedule: function(){
      this.$router.push("/schedule")
    },
    join: function(){
      this.$router.push("/join")
    },
    back: function(){
      this.$router.go(-1)
    },
    home: function(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
img {
  width: 48px;
  z-index: 2;
}
h1 {
  z-index: 1;
}
.header-item {
  display: inline-block;
}
img#img1 {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
img#img2 {
  float: right;
  margin-top: 10px;
  margin-right: 10px; 
}
</style>