<template>
  <div class="schedule">
    <h1>これは実行画面</h1>
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