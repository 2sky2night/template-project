<template>
  <div class="big-sider-container">
    <Logo/>
    <div class="menu-container">
      <Bonus/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Logo from './components/Logo.vue';
import Bonus from './components/Bonus.vue';
defineOptions({
  name:'BigSider'
})
</script>

<style scoped lang='scss'>
.big-sider-container{
  height: 100%;
  width: var(--sider-width);
  display: flex;
  flex-direction: column;
  box-shadow:5px 3px 10px var(--shadow-color);
  .menu-container{
    padding:20px 10px;
    box-sizing: border-box;
  }
}
</style>