<template>
  <div class="main-box">
    <div class="main-container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang='ts' setup>
defineOptions({
  name: 'main-container'
})
</script>

<style scoped lang='scss'>
// 容器
.main-box{
}
// 主要内容
.main-container {
  padding:0 40px;
  padding-bottom: 20px;
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