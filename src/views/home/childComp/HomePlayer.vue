<template>
  <div>
    <player>
      <div class="disc" slot="disc"></div>
      <player-item slot="player-item" class="home-player-item"/>
    </player>
  </div>
</template>

<script>
import Player from "components/player/Player";
import PlayerItem from "components/player/PlayerItem";
export default {
  components: {
    Player,
    PlayerItem
  },
};
</script>

<style scoped>
.disc {
  position: absolute;
  display: flex;
  justify-content: center;
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
  display: block;
  align-self: center;
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px rgba(73, 73, 73, 0.5) inset;
  background: rgb(253, 249, 242);
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
</style>