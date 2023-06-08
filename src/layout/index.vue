<template>
  <div class="layout-container">
    <Sider />
    <div class="center-container">
      <div class="header-content">
        <Header />
      </div>
      <div class="main-content">
        <Main />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Header from './components/Header/index.vue'
import Sider from './components/Sider/index.vue'
import Main from './components/Main/index.vue'

defineOptions({
  name: "Layout"
})
</script>

<style scoped lang='scss'>
.layout-container {
  height: 100vh;
  width: 100vw;
  display: flex;

  .center-container {
    flex-grow: 1;
    transition: var(--time-normal);

    .header-content {
      height: var(--header-height);
      box-shadow: 0 0px 10px var(--shadow-color);
    }

    .main-content {
      height: calc(100% - var(--header-height));
      overflow: auto;

      // 隐藏滚动条
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
}
</style>