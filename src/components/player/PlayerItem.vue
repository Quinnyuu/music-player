<template>
  <div class="player-item">
    <slot name="like"></slot>
    <span class="pre iconfont" @click="preClick">&#xe6ac;</span>
    <span class="pause iconfont" @click="playClick">
      <span v-if="isPlay">&#xe76a;</span>
      <span v-else>&#xe60f;</span>
    </span>
    <span class="next iconfont" @click="nextClick">&#xe6aa;</span>
    <slot name="find"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: true,
      currentIndex: this.$store.state.currentIndex,
    };
  },
  methods: {
    // 播放上一首
    preClick() {
      if (this.currentIndex <= 0) return;
      this.currentIndex--;
      this.isPlay = 'true'
      this.$store.state.currentIndex = this.currentIndex;
      this.$store.commit("getCurrentMusic");
      this.$bus.$emit("getCurrentMusicId");
    },
    // 播放下一首
    nextClick() {
      if (this.currentIndex >= 9) return;
      this.currentIndex++;
      this.isPlay = 'true'
      this.$store.state.currentIndex = this.currentIndex;
      this.$store.commit("getCurrentMusic");
      this.$bus.$emit("getCurrentMusicId");
    },
    // 播放和暂停
    playClick() {
      this.isPlay = !this.isPlay;
      this.$bus.$emit("playControl", this.isPlay);
    }
  },
};
</script>

<style scoped>
.player-item {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.pre,
.next,
.pause {
  flex: 1;
}
</style>