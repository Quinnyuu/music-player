<template>
  <div class="detail">
    <detail-top-bar />
    <div class="content" v-if="currentMusicDetail !== null">
      <div class="detail-img">
        <img :src="currentMusicDetail.songPic" alt />
      </div>
      <div class="glorious">
        <div class="glorious1"></div>
        <div class="glorious2"></div>
      </div>
      <div class="time">
        <span class="play-time">0:00</span>
        <span></span>
        <span class="all-time">{{currentMusicDetail.time | formatTime}}</span>
      </div>
      <audio :src="currentMusicDetail.songLink"></audio>
      <canvas id="canvas"></canvas>
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
    };
  },
  components: {
    DetailTopBar,
    DetailPlayer,
  },
  created() {
    this.getMusicDetail(this.id);
    this.$bus.$on("getCurrentMusicId", () => {
      this.getCurrentMusicId();
      this.getMusicDetail(this.id);
    });
  },
  methods: {
    getCurrentMusicId() {
      this.id = this.$store.state.currentMusic.song_id;
    },
    getMusicDetail(id) {
      getMusicDetail(id).then((res) => {
        this.currentMusicDetail = res.data;
        console.log(this.currentMusicDetail);
      });
    },
    //音频的处理
    getAudioInfo() {
      //创建音频上下文
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      const audioElement = document.querySelector("audio");
      //定义音频上下文的音频源节点
      const source = audioContext.createMediaElementSource(audioElement);
      //定义一个音频上下文的 数据分析与可视化节点
      var analyser = audioContext.createAnalyser();
      analyser.minDecibels = -90; //分析结果的最小阈值
      analyser.maxDecibels = -10; //分析结果的最大阈值
      analyser.smoothingTimeConstant = 0.85; //最后一个分析帧的平均常数
      //连接各节点
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    },
  },
  filters: {
    formatTime(time) {
      let minute = parseInt(time / 60);
      let second = parseInt(time % 60);
      let ftime = minute + ":" + second;
      return ftime;
    },
  },
};
</script>

<style scoped>
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
  background: rgb(0, 139, 139);
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
  background: rgba(176, 232, 236, 0.678);
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
.time {
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 50%;
  top: 75%;
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
  border-color: transparent transparent rgb(147, 213, 220) transparent;
}
</style>