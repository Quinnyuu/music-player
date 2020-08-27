<template>
  <top-bar class="top-bar">
    <div slot="left" class="iconfont" @click="backClick">&#xe777;</div>
  </top-bar>
</template>

<script>
import TopBar from "components/topBar/TopBar";
export default {
  components: {
    TopBar,
  },
  methods: {
    backClick() {
      this.$router.replace("/home");
      this.$emit('stop')
    },
  },
};
</script>

<style scoped>

</style>