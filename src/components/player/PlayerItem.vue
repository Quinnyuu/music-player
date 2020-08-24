<template>
  <div class="player-item">
    <slot name="like"></slot>
    <span class="pre iconfont">&#xe6ac;</span>
    <span class="pause iconfont">&#xe76a;</span>
    <span class="next iconfont">&#xe6aa;</span>
    <slot name="find"></slot>
  </div>
</template>

<script>
export default {};
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