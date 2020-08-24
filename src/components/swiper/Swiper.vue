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
  top: 23%;
  left: 50%;
  transform: translateX(-50%);
}
</style>