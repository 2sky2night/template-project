<template>
  <div class="logo-container">
    <a-button class="menu-btns">
      <template #icon>
        <icon-menu />
      </template>
    </a-button>
    <div class="logo-box">
      <icon-face-smile-fill />
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { title } from '@/config';
</script>

<style scoped lang='scss'>
.logo-container{
  height: $sider-logo-height;
  display: flex;
  align-items: center;
  // 菜单按钮
  .menu-btns{
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
  // 标题
  .logo-box{
    font-size: 20px;
    margin-left: 20px;
    .title{
      margin-left: 10px;
    }
  }
}

</style>