<template>
  <div class="home">
    <home-top-bar />
    <div class="content">
      <home-swiper :songList="songList" />
      <home-music-item :songList="songList" />
    </div>
    <home-player class="home-player" />
  </div>
</template>

<script>
import HomeSwiper from "./childComp/HomeSwiper";
import HomeMusicItem from "./childComp/HomeMusicList";
import HomePlayer from "./childComp/HomePlayer";
import HomeTopBar from "./childComp/HomeTopBar";
import { getMusicList } from "network/song";
export default {
  data() {
    return {
      songList: [],
    };
  },
  components: {
    HomeSwiper,
    HomeMusicItem,
    HomePlayer,
    HomeTopBar,
  },
  created() {
    this.getMusicList();
    setTimeout(() =>{
      this.$store.state.songList = this.songList;
      console.log(this.$store.state.songList);
    },500)
  },
  methods: {
    getMusicList() {
      getMusicList().then((res) => {
        this.songList = res.data.list;
      });
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  perspective: 1000px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
.home-player {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>