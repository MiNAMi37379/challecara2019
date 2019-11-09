<template>
  <div class="join">
    <h1>これは参加画面</h1>
    <button v-on:click="back">もどる</button>
  </div>
</template>

<script>
export default{
  methods: {
    back: function(){
      this.$router.go(-1)
    }
  }
}
</script>