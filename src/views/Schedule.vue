<template>
  <div class="schedule">
    <header>
      <img src="../../image/back.png" id="img1" v-on:click="back">
      <h1 class="header-item">スケジュールを作成</h1>
      <img src="../../image/home.png" class="header-item" id="img2" v-on:click="home"><br>
    </header>
    <div id="text">ワーク名とその所要時間を<br>入力してください</div>
    <input type="text" placeholder="ワーク名" v-model="works.name" /><br>
    <div class="input2">
      <input type="text" placeholder="分" v-model="works.min" />：
      <input type="text" placeholder="秒" v-model="works.sec" />
    </div>
    <button @click="add" class="button1">追加</button><br>
    <button v-on:click="check()" class="button2">確認</button>
  </div>
</template>

<script>
export default{
  name: 'schedule',
  mounted(){
    this.works = this.$store.state.works
  },
  data(){
    return {
      works: {},
    }
  },
  methods: {
    add(){
      alert('追加しました')
      this.$store.commit('setWork',this.works)
    },
    check: function(){
      this.$router.push("/check")
    },
    home: function(){
      this.$router.push("/")
    },
    back: function(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
  height: 70px;
  font-size: 180%;
  margin: 0;
  border: 1px solid;
}
.button1 {
  margin-top: 25%
}
img {
  width: 48px;
  z-index: 2;
}
h1 {
  font-size: 170%;
  font-weight: 300;
  z-index: 1;
  margin-top: 0;
  line-height: 70px;
}
header {
  height: 70px;
  margin-top: 0%;
  margin-bottom: 50px;
  font-weight: 300;
  vertical-align: middle;
  line-height: 70px;
  background-color: rgb(238, 65, 34);
}
.header-item {
  display: inline-block;
}
div#text {
  margin-bottom: 20px;
  font-size: 150%;
}
input {
  width: 60%;
  height: 50px;
  border: 1px solid;
  border-radius: 10px;
  margin-top: 40px;
  font-size: 150%;
  text-align: center;
}
.input2 {
  display: inline;
}
#text {
  font-size: 150%
}
img#img1 {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
img#img2 {
  width: 48px;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
</style>