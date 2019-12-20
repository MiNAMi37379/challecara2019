<template>
  <div class="doing">
    <h1>実行画面</h1>
    <h1>{{ workname }} </h1>
    <div id="timer">
      <div class="timer">
        <div class="time">
          {{ formatTime }}
        </div>
        <button v-on:click="start" v-if="!timerOn">Start</button>
        <button v-on:click="stop" v-if="timerOn">Stop</button>
        <h1>{{ password }}</h1>
      </div>
    </div>
    <button v-on:click="back">もどる</button>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
export default{
  name: 'doing',
  computed: {
    workname(){
      return this.$store.getters.getWorkName
    },
    worktime(){
      return this.$store.getters.getWorkTime
    },
    password(){
      return this.$store.getters.getPassword
    },
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  },
  data(){
    return {
      min: this.$store.getters.getWorkTime,
      sec: 0,
      timerOn: false,
      timerObj: null,
    }
  },
  methods: {
    back: function(){
      this.$router.go(-1)
    },
    home : function(){
      this.$router.push("/")
    },
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },

    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true; //timerがOFFであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがOFFであることを状態として保持
    },

    complete: function() {
      clearInterval(this.timerObj)
      window.alert("お疲れさまでした。ホーム画面に戻ります。");
      this.home();
    }
  }
}
</script>