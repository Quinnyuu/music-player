<template>
  <div class="detail">
    <detail-top-bar @stop="stop"/>
    <div class="content" v-if="currentMusicDetail !== null">
      <div class="detail-img">
        <img :src="currentMusicDetail.songPic" alt />
      </div>
      <div class="glorious">
        <div class="glorious1"></div>
        <div class="glorious2"></div>
      </div>
      <div class="detail-song-info">
        <span>{{currentMusicDetail.songName}}</span>--
        <span>{{currentMusicDetail.artistName}}</span>
      </div>
      <div class="time">
        <span class="play-time">{{playTime | formatTime}}</span>
        <span></span>
        <span class="all-time">{{currentMusicDetail.time | formatTime}}</span>
      </div>
      <!-- <audio
        src
        ref="audio"
        crossorigin="anonymous"
        @canplay="getDuration"
        @timeupdate="getCurrentTime"
        loop
      ></audio>-->
      <canvas id="canvas" class="canvas">Your browser does not support Canvas tag.</canvas>
    </div>
    <detail-player />
  </div>
</template>

<script>
import DetailTopBar from "./childComp/DetailTopBar";
import DetailPlayer from "./childComp/DetailPlayer";
import { getMusicDetail } from "network/song";
export default {
  data() {
    return {
      id: this.$store.state.currentMusic.song_id,
      currentMusicDetail: {},
      isPlay: true,
      currentTime: 0,
      audioContext: null,
      analyser: null,
      source: null,
      offset: 0, //当前音频的偏移量
      startTime: null, // 音频开始的时间
      playTime: 0
    };
  },
  components: {
    DetailTopBar,
    DetailPlayer,
  },
  created() {
    this.getMusicDetail(this.id);
    //点击上一首和下一首时加载数据
    this.$bus.$on("getCurrentMusicId", () => {
      this.getCurrentMusicId();
      this.getMusicDetail(this.id);
    });
    this.$bus.$on("playControl", (isPlay) => {
      if (!isPlay) {
        this.pause();
      } else {
        this.play();
      }
    });
  },
  mounted() {
    this.createAudioContext();
    //播放进度获取
    const getPlayTime = () => {
      window.requestAnimationFrame(getPlayTime);
      this.playTime = this.getPosition();
    }
    getPlayTime();
  },
  methods: {
    getCurrentMusicId() {
      this.id = this.$store.state.currentMusic.song_id;
    },
    getMusicDetail(id) {
      getMusicDetail(id).then((res) => {
        if(res.code !== 1) {
          console.log(res.msg);
        }
        this.currentMusicDetail = res.data;
        this.getAudio();
      });
    },
    //创建web audio api上下文
    createAudioContext() {
      //获取音频文件
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext(); //创建上下文环境
      //创建analyserNode获取音频频率数据
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256; //设置傅里叶系数
    },
    //音频的处理
    getAudio() {
      this.stop(); //开始前检查有没有音频占用
      this.play(); //播放当前音乐的音频
      this.getCanvas(); //绘制波形图
    },
    //音频的播放
    play() {
      if (!this.currentMusicDetail || this.source) {
        return; //当有资源时不播放
      }
      const xhr = new XMLHttpRequest();
      xhr.open("GET", this.currentMusicDetail.songLink, true);
      // 设置响应类型为 arraybuffer
      xhr.responseType = "arraybuffer";
      const that = this;
      xhr.onload = function () {
        that.source = that.audioContext.createBufferSource();
        // 对响应内容进行解码
        that.audioContext.decodeAudioData(xhr.response, function (buffer) {
          // 将解码后得到的值赋给buffer
          that.source.buffer = buffer;
          // 音频==》分析器==》扬声器
          that.source.connect(that.analyser);
          that.analyser.connect(that.audioContext.destination);
          //播放音频
          that.startTime = that.audioContext.currentTime;
          that.source.start(0, that.offset);
        });
      };
      xhr.send();
    },
    //音频的暂停
    pause() {
      if (!this.currentMusicDetail || !this.source) return;
      this.source.stop(0);
      this.source.disconnect(0);
      this.source = null;
      this.offset = this.getPosition();
      this.startTime = null;
    },
    //音频的停止
    stop() {
      this.pause();
      this.offset = 0;
    },
    //获得暂停的位置
    getPosition() {
      return (
        this.offset +
        (this.startTime !== null
          ? this.audioContext.currentTime - this.startTime
          : 0)
      );
    },
    //音频图的绘制
    getCanvas() {
      //创建canvas对象
      const canvas = document.getElementById("canvas");
      const cxt = canvas.getContext("2d");
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      const lineWidth = 4;
      const gap = 6;
      const maxNum = Math.round(WIDTH / (lineWidth + gap));
      cxt.strokeStyle = "red";
      cxt.lineCap = "round";
      cxt.lineWidth = lineWidth;
      const that = this;
      function render() {
        cxt.clearRect(0, 0, WIDTH, HEIGHT); //清空画布
        //that.analyser.frequencyBinCount是fftSize的一半
        const dataArray = new Uint8Array(that.analyser.frequencyBinCount);
        that.analyser.getByteFrequencyData(dataArray); //获取音频字节流
        for (let i = 0; i < maxNum; i++) {
          cxt.strokeStyle = "#008b8b";
          const value = Math.round((dataArray[i] / 128) * 20);
          cxt.beginPath();
          cxt.moveTo(i * (lineWidth + gap) + gap / 2, HEIGHT / 2);
          cxt.lineTo(i * (lineWidth + gap) + gap / 2, HEIGHT / 2 - value - 2);
          cxt.stroke();
          cxt.beginPath();
          cxt.moveTo(i * (lineWidth + gap) + gap / 2, HEIGHT / 2);
          cxt.lineTo(i * (lineWidth + gap) + gap / 2, HEIGHT / 2 + value + 2);
          cxt.stroke();
        }
        window.requestAnimationFrame(render); //递归调用渲染
      }
      // requestAnimationFrame()用来渲染动画帧，此时渲染第一帧
      window.requestAnimationFrame(render);
    },
  },
  computed: {
    
  },
  filters: {
    formatTime(time) {
      let minute = parseInt(time / 60);
      let second = parseInt(time % 60);
      if (second < 10) {
        second = "0" + second;
      }
      let ftime = minute + ":" + second;
      return ftime;
    },
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 200px);
}
.detail {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.detail-img {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background: #008b8b;
  z-index: 1;
}

.detail-img img {
  width: 100%;
  height: 100%;
}
.glorious {
  position: absolute;
  left: 50%;
  top: 17%;
  transform: translateX(-50%);
  width: 300px;
  height: 250px;
}
.glorious1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100px;
  border-radius: 80%;
  background: hsla(184, 61%, 81%, 0.678);
  animation: narrow 2s infinite;
  box-shadow: 0 0 12px rgba(211, 219, 219, 0.6);
  z-index: 1;
}
.glorious2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 250px;
  border-radius: 80%;
  background: rgba(188, 200, 201, 0.678);
  box-shadow: 0 0 12px rgba(175, 184, 184, 0.6);
  animation: widthen 2s infinite;
}
@keyframes narrow {
  0% {
  }
  50% {
    width: 250px;
    height: 140px;
  }
  100% {
    width: 300px;
    height: 100px;
  }
}
@keyframes widthen {
  0% {
  }
  50% {
    width: 250px;
    height: 160px;
  }
  100% {
    width: 180px;
    height: 250px;
  }
}
.detail-song-info {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.time {
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 50%;
  top: 80%;
  transform: translateX(-50%);
  width: 100px;
  font-weight: 600;
  color: #333;
}
.time span:nth-child(2) {
  position: relative;
  top: -10px;
  border-width: 20px 3px;
  border-style: solid;
  border-color: transparent transparent #93d5dc transparent;
}
.canvas {
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
}
</style>