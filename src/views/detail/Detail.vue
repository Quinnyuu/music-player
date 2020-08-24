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
      <audio :src="currentMusicDetail.songLink" controls></audio>
    </div>
    <detail-player/>
  </div>
</template>

<script>
import DetailTopBar from "./childComp/DetailTopBar";
import DetailPlayer from './childComp/DetailPlayer'
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
    DetailPlayer
  },
  created() {
    this.getMusicDetail(this.id);
  },
  methods: {
    getMusicDetail(id) {
      getMusicDetail(id).then((res) => {
        this.currentMusicDetail = res.data;
        console.log(this.currentMusicDetail);
      });
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
</style>