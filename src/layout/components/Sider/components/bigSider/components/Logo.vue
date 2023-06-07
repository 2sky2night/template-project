<template>
  <div class="logo-container">
    <MenuBtn />
    <div class="logo-box">
      <icon-face-smile-fill />
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
//@ts-ignore
import MenuBtn from '@/layout/components/Sider/components/common/MenuBtn.vue'
import { title } from '@/config';
</script>

<style scoped lang='scss'>
.logo-container {
  height: var(--sider-logo-height);
  display: flex;
  align-items: center;
  box-shadow: 0px -3px 10px var(--shadow-color);
  box-sizing: border-box;
  padding: 10px;
  .menu-btn:hover{
    color:var(--color-text-1);
  }
  // 标题
  .logo-box {
    font-size: 20px;
    margin-left: 20px;

    .title {
      font-weight: 600;
      margin-left: 10px;
    }
  }
}
</style>