<template>
  <div class="mulch">
    <h1>これはみんなで使う時の画面</h1>
    <button v-on:click="move_1">スケジュールを作る</button> <br>
    <button v-on:click="move_2">スケジュールに参加する</button> <br>
    <button v-on:click="back">もどる</button>
  </div>
</template>

<script>
export default{
    methods: {
    move_1: function(){
      this.$router.push("/schedule")
    },
    move_2: function(){
      this.$router.push("/join")
    },
    back: function(){
        this.$router.go(-1)
    }
  }
}
</script>