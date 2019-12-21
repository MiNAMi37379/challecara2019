<template>
  <div class="home">
    <h1 id="homeBunner">ラーメンまであと３分</h1>
    <button id="homeBtn" v-on:click="once">ひとりで使う</button><br>
    <button id="homeBtn" v-on:click="group">みんなで使う</button>
  </div>
</template>

<script>
export default{
  methods: {
    once: function(){
      this.$router.push("/schedule")
    },
    group: function(){
      this.$router.push("/multi")
    }
  }
}
</script>

<style scoped>

body {
  margin: 0px;
}
#homeBunner {
  height: 70px;
  margin-top: 0%;
  margin-bottom: 20%;
  font-size: 180%;
  font-weight: 300;
  vertical-align: middle;
  line-height: 70px;
  background-color: rgb(238, 65, 34);
}
#homeBtn {
  width: 70%;
  height: 100px;
  font-size: 220%;
  font-weight: 300;
  margin: 20% 0% 0% 0%;
  border: solid;
  border-radius: 1em 1em;
  background-color: white;
  border-color: tomato;
}
</style>