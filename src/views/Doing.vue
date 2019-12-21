<template>
  <div class="doing">
    <h1 class="header">実行画面</h1>
    <h1 class="workname">{{ workname }} </h1>
    <div id="timer">
      <div class="timer">
        <div class="time">
          {{ formatTime }}
        </div>
        <button v-on:click="start" v-if="!timerOn" class="timebutton">Start</button>
        <button v-on:click="stop" v-if="timerOn" class="timebutton">Stop</button>
      </div>
      <h1>パスワード：{{ password }}</h1>
      <button v-on:click="finish" class="backbutton">このスケジュールを終了</button>
    </div>
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
      min: this.$store.getters.getWorkMin,
      sec: this.$store.getters.getWorkSec,
      timerOn: false,
      timerObj: null,
    }
  },
  methods: {
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
    },
    finish: function() {
      if(window.confirm("まだ終了時刻ではありませんがよろしいですか？")==true){
        this.complete();
      }
    }
  }
}
</script>

<style scoped>
.header{
  height: 70px;
  margin-top: 0%;
  margin-bottom: 20%;
  font-size: 180%;
  font-weight: 300;
  vertical-align: middle;
  line-height: 70px;
  background-color: rgb(238, 65, 34);
}
.workname {
  width: 70%;
  height: 70px;
  font-size: 200%;
  text-align: center;
  border: 1px solid;
  margin: 0 auto;
  background-color: white;
  line-height: 70px;
  overflow: scroll;
}
.time {
  width:69%;
  margin: 0 auto;
  font-size: 400%;
  letter-spacing: 2px;
  border: 5px solid;
  background-color: white
}
.timebutton {
  width: 40%;
  height: 60px;
  border: 1px solid;
  font-size: 150%
}
.backbutton {
  width: 80%;
  height: 70px;
  font-size: 180%;
  margin: 0;
  border: 1px solid;
}
</style>