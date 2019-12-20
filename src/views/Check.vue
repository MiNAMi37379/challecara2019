<template>
  <div class="check">
    <h1>ワークの確認</h1>
    <ul>
      <li>ワーク名：{{ workname }}</li>
      <li>所要時間：{{ worktime }}分</li>
    </ul>
    <button v-on:click="back">もどる</button><br>
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
    worktime(){
      return this.$store.getters.getWorkTime
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