<template>
  <div @click="musicClick">
    <slot name="list-img"></slot>
    <slot name="list-desc"></slot>
    <slot name="list-icon"></slot>
  </div>
</template>

<script>
export default {
  props: {
    musicItem: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    musicClick() {
      this.$router.replace("/detail");
      this.$store.state.currentMusic = this.musicItem;
    },
  },
};
</script>

<style scoped>
</style>