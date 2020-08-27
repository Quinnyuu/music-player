<template>
  <div class="detail-player">
    <player-item class="detail-player-item">
        <div class="detail-like iconfont" slot="like" @click="likeClick">
          <span v-if="!isLike">&#xe6b1;</span>
          <span v-else style="color: #ed556a">&#xe6ae;</span>
        </div>
        <span class="detail-find iconfont" slot="find">&#xe61d;</span>
    </player-item>
  </div>
</template>

<script>
import PlayerItem from "components/player/PlayerItem";
export default {
  data() {
    return {
      isLike: false
    }
  },
  components: {
    PlayerItem,
  },
  methods: {
    likeClick() {
      this.isLike = !this.isLike;
    }
  }
};
</script>

<style scoped>
.detail-player {
  position: absolute;
  top: 88%;
  text-align: center;
  width: 100%;
  height: 100px;
}
.detail-player-item {
  position: absolute;
  left: 50%;
  width: 250px;
  height: 30px;
  transform: translateX(-50%);
  font-size: 30px;
  color: rgb(0, 139, 139);
}
</style>