<template>
  <div>
    <div class="player">
      <div class="disc" slot="disc">
        <img :src="this.$store.state.currentMusic.pic_small" alt />
      </div>
      <div class="player-desc">
          <span>{{getMusicName}}</span>
      </div>
      <player-item slot="player-item" class="home-player-item" />
    </div>
  </div>
</template>

<script>
import PlayerItem from "components/player/PlayerItem";
export default {
  components: {
    PlayerItem,
  },
  computed: {
    getMusicName() {
      return this.$store.state.currentMusic.title + this.$store.state.currentMusic.author;
    }
  }
};
</script>

<style scoped>
.player {
  height: 80px;
  border-radius: 50px 50px 0 0;
  background: rgb(147, 213, 220);
}
.disc {
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;
  left: 30px;
  top: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to right, blue, red);
  animation: rotate 3s linear infinite;
}
@keyframes rotate {
  0% {
  }
  100% {
    transform: rotate(360deg);
  }
}
.disc::after {
  position: absolute;
  display: block;
  align-self: center;
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px rgba(73, 73, 73, 0.5) inset;
  background: rgb(253, 249, 242);
  z-index: 1;
}
.home-player-item {
  position: absolute;
  bottom: 10px;
  right: 60px;
  width: 200px;
  height: 30px;
  font-size: 22px;
  color: #333;
}
.player-desc {
  position: absolute;
  top: 10px;
  right: 40px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>