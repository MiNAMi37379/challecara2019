<template>
  <div class="schedule">
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

<style>
body {
  margin: 0px;
}
#homeBunner {
  height: 70px;
  margin-top: 0%;
  margin-bottom: 30%;
  font-size: 180%;
  border: solid;
  vertical-align: middle;
}
#homeBtn {
  width: 70%;
  height: 70px;
  font-size: 180%;
  margin: 20% 0% 0% 0%;
  border: solid;
  border-radius: 1em 1em;
}
</style>