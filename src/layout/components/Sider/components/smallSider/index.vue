<template>
  <div class="small-sider-container">
    <div class="menu-btn-container">
      <MenuBtn />
    </div>
    <Navigations/>
  </div>
</template>

<script lang='ts' setup>
// 组件
import MenuBtn from '../common/MenuBtn.vue';
import Navigations from './components/Navigations.vue';

defineOptions({
  name: 'SamllSider'
})
</script>

<style scoped lang='scss'>
.small-sider-container {
  position: absolute;
  background-color:var(--color-bg-1);
  width: var(--sider-small-width);
  height: 100%;
  padding: 10px 0;
  .menu-btn-container{
    padding: 0 10px;
    .menu-btn:hover{
      color:var(--color-text-1);
    }
  }
}
</style>