<template>
  <div class="main-container">
    <RouterView></RouterView>
  </div>
</template>

<script lang='ts' setup>
defineOptions({
  name: 'main-container'
})
</script>

<style scoped lang='scss'>
.main-container {
  padding: 0 40px;
  box-sizing: border-box;
}

// 1690px以上 main居中显示
@media screen and (min-width:1690px) {
  .main-container {
    width: var(--main-width);
    margin: 0 auto;
  }
}
</style>