<template>
  <div class="top-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left,
.right {
  width: 80px;
}
.center {
  flex: 1;
  font-size: 24px;
  color: #fff;
}
.left {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  background: darkcyan;
}
.top-bar {
  position: relative;
  display: flex;
  height: 100px;
  line-height: 80px;
  text-align: center;
  background: rgb(147, 213, 220);
}
.top-bar::after {
  position: absolute;
  display: block;
  bottom: -10px;
  left: 0;
  right: 0;
  content: "";
  height: 50px;
  border-radius: 150px 150px 0 0;
  background: #fff;
}
</style>