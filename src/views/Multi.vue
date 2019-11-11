<template>
  <div class="schedule">
    <h1>これはマルチ用画面</h1>
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
    }
  }
}
</script>