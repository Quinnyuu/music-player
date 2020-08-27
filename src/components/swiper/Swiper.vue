<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stateX: 0,
      MoveX: 0,
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.swiper {
  position: absolute;
  transform-style: preserve-3d;
  width: 130px;
  height: 130px;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  /* animation: rotate 3s infinite; */
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>