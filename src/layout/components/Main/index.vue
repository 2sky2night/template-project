<template>
  <div class="main-container">
    <RouterView></RouterView>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped lang='scss'>
.main-container{
  height: calc(100% - $header-height);
  overflow:auto;
  background-color: yellow;
  // 隐藏滚动条
  &::-webkit-scrollbar{
    width: 0;
  }
}
</style>