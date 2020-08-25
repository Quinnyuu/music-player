<template>
  <div class="player-item">
    <slot name="like"></slot>
    <span class="pre iconfont" @click="preClick">&#xe6ac;</span>
    <span class="pause iconfont">&#xe76a;</span>
    <span class="next iconfont" @click="nextClick">&#xe6aa;</span>
    <slot name="find"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: this.$store.state.currentIndex
    }
  },
  methods: {
    preClick() {
      if(this.currentIndex <= 0) return
      this.currentIndex --;
      this.$store.state.currentIndex = this.currentIndex;
      this.$store.commit('getCurrentMusic')
      this.$bus.$emit('getCurrentMusicId')
    },
    nextClick() {
      if(this.currentIndex >= 9) return
      this.currentIndex ++;
      this.$store.state.currentIndex = this.currentIndex;
      this.$store.commit('getCurrentMusic')
      this.$bus.$emit('getCurrentMusicId')
    }
  }
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