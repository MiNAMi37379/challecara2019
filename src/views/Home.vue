<template>
  <div class="schedule">
    <h1>これはホーム画面</h1>
    <button v-on:click="once">ひとりで使う</button><br>
    <button v-on:click="group">みんなで使う</button>
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