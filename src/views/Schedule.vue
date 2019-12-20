<template>
  <div class="schedule">
    <header>
      <img src="../../image/back.png" id="img1" v-on:click="back">
      <h1 class="header-item">スケジュールを作成</h1>
      <img src="../../image/home.png" class="header-item" id="img2" v-on:click="home"><br>
    </header>
    <div id="text">ワーク名とその所要時間を入力してください</div>
    <input type="text" placeholder="ワーク名" v-model="works.name" /><br>
    <input type="text" placeholder="所要時間" v-model="works.time" />分<br>
    <button @click="add">追加</button><br>
    <button v-on:click="check()">確認</button>
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
  width: 70%;
  height: 70px;
  font-size: 180%;
  margin: 20% 0% 0% 0%;
  border: solid;
  border-radius: 1em 1em;
}
img {
  width: 48px;
  z-index: 2;
}
h1 {
  font-size: 170%;
  z-index: 1;
}
.header-item {
  display: inline-block;
}
div#text {
  margin-bottom: 20px;
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
<!-- styleの追加実装内容
・ヘッダーをHome.vueのように枠線で区切る
・カラーリングをxdと同じになるように調整
・input部分の配置をわかりやすくするために枠を色付けする
・追加と確認のボタンの形状及び配置をxdと同じになるように変更
-->