<template>
  <div class="big-sider-container">
    <!--顶部logo-->
    <Logo/>
    <!--菜单栏-->
    <div class="menu-container">
      <Bonus/>
      <!--导航栏-->
      <Navigations/>
      <!--主题切换按钮组-->
      <ThemeBtn/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Logo from './components/Logo.vue';
import Bonus from './components/Bonus.vue';
import Navigations from './components/Navigations.vue';
import ThemeBtn from './components/ThemeBtn.vue';
defineOptions({
  name:'BigSider'
})
</script>

<style scoped lang='scss'>
.big-sider-container{
  height: 100%;
  overflow: auto;
  width: var(--sider-width);
  display: flex;
  flex-direction: column;
  box-shadow:0 0 10px var(--shadow-color);
  // 隐藏滚动条
  &::-webkit-scrollbar{
    width: 0;
  }
  .menu-container{
    display: flex;
    flex-direction: column;
    height: calc(100% - var(--sider-logo-height));
    padding:20px 10px;
    box-sizing: border-box;
  }
}
</style>