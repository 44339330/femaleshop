<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 0 rgba(100, 100, 100, 0.1);
}
.center {
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #F8F8FF;
  font-weight: 600;
}
.left, .right {
  width: 60px;
}
</style>
