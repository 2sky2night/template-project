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
}

// 1500px以上 main居中显示
@media screen and (min-width:1500px) {
  .main-container {
    width: var(--main-width);
    margin: 0 auto;
  }
}
</style>