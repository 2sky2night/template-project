<template>
  <div class="layout-container">
    <Sider />
    <div class="center-container">
      <Header />
      <Main />
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
  .center-container{
    flex-grow: 1;
    transition: var(--time-normal);
  }
}
</style>