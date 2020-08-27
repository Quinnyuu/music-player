<template>
  <div>
    <load></load>
    <span class="loading-text">Loading...</span>
  </div>
</template>

<script>
import Load from "components/load/Load.vue";
export default {
  components: {
    Load,
  },
};
</script>

<style scoped>
.loading-text {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 1px;
}
</style>