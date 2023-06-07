<template>
  <div class="main-container">
    <RouterView></RouterView>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped lang='scss'>
.main-container{
  height: calc(100% - var(--header-height));
  overflow:auto;
  // 隐藏滚动条
  &::-webkit-scrollbar{
    width: 0;
  }
}
</style>