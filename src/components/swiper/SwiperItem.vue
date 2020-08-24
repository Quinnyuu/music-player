<template>
  <div class="swiper-item" @click="musicClick">
    <slot name="swiper-img"></slot>
  </div>
</template>

<script>
export default {
  props: {
    musicItem: {
      type: Object,
      default: () => {},
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    musicClick() {
      this.$router.replace("/detail");
      this.$store.state.currentIndex = this.currentIndex;
      this.$store.state.currentMusic = this.musicItem;
    },
  },
};
</script>

<style scoped>
.swiper-item:nth-child(1) {
  transform: translateZ(200px);
}
.swiper-item:nth-child(2) {
  transform: rotateY(50deg) translateZ(200px);
}
.swiper-item:nth-child(3) {
  transform: rotateY(-50deg) translateZ(200px);
}
</style>