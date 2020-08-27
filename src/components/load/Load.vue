<template>
  <div class="middle">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
    <div class="bar bar4"></div>
    <div class="bar bar5"></div>
    <div class="bar bar6"></div>
    <div class="bar bar7"></div>
    <div class="bar bar8"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.middle {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bar {
  width: 8px;
  margin: 2px;
  height: 2px;
  background: white;
  display: inline-block;
  transform-origin: bottom center;
  animation: loading 1.5s ease-in-out infinite;
}
.bar1 {
  animation-delay: 0.1s;
}
.bar2 {
  animation-delay: 0.2s;
}
.bar3 {
  animation-delay: 0.3s;
}
.bar4 {
  animation-delay: 0.4s;
}
.bar5 {
  animation-delay: 0.5s;
}
.bar6 {
  animation-delay: 0.6s;
}
.bar7 {
  animation-delay: 0.7s;
}
.bar8 {
  animation-delay: 0.8s;
}
@keyframes loading {
  0% {
    transform: scaleY(0.1);
    background: #fff;
  }
  50% {
    transform: scaleY(20);
    background: #008b8b;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}
</style>