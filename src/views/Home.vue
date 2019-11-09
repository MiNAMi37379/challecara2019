<template>
  <div id="home">
    <div>
      <h1>これはホーム画面</h1>
      <h1>ラーメンまであと3分</h1>
      <button v-on:click="move_1">ひとりで使う</button> <br>
      <button v-on:click="move_2">みんなで使う</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    move_1: function(){
      this.$router.push("/schedule")
    },
    move_2: function(){
      this.$router.push("/mulch")
    }
  }
}
</script>