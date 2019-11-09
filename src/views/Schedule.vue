<template>
  <div class="schedule">
    <h1>これはスケジュール作成画面</h1>
    <button v-on:click="doing">完成！</button> <br>
    <button v-on:click="back">もどる</button>
  </div>
</template>

<script>
export default{
    methods: {
    doing: function(){
      this.$router.push("/doing")
    },
    back: function(){
      this.$router.go(-1)
    }
  }
}
</script>