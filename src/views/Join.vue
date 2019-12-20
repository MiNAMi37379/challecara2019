<template>
  <div class="join">
    <h1>スケジュールに参加</h1><br>
    <h2>パスワードを入力してください</h2><br>
    <input type="password" name="password" placeholder="1234" v-model="password"><br>
    <button v-on:click="access">参加</button>
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