<template>
  <div class="home">
    <home-top-bar class="home-top-bar" />
    <home-load class="load" v-if="isLoading" />
    <div
      class="swiper-content"
    >
      <home-swiper :songList="songList" ref="swiper" />
    </div>
    <div class="list-content">
      <home-music-item :songList="songList" />
    </div>
  </div>
</template>

<script>
import HomeSwiper from "./childComp/HomeSwiper";
import HomeMusicItem from "./childComp/HomeMusicList";
import HomeTopBar from "./childComp/HomeTopBar";
import HomeLoad from "./childComp/HomeLoad";
import { getMusicList } from "network/song";
export default {
  data() {
    return {
      songList: [],
      isLoading: true,
    };
  },
  components: {
    HomeSwiper,
    HomeMusicItem,
    HomeTopBar,
    HomeLoad,
  },
  created() {
    this.getMusicList();
  },
  methods: {
    getMusicList() {
      getMusicList().then((res) => {
        this.songList = res.data.list;
        this.isLoading = false;
        this.$store.state.songList = this.songList;
      });
    },
  },
};
</script>

<style scoped>
.home-top-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.home {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.swiper-content {
  position: absolute;
  perspective: 1000px;
  top: 110px;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 1;
}
.list-content {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: calc(100vh - 300px);
  overflow-x: hidden;
  overflow-y: auto;
}
.load {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  height: calc(100% - 100px);
  background: #fff;
  z-index: 999;
}
</style>