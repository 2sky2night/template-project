<!--有子孩子的菜单栏-->
<template>
  <div class="nav-sub-card-container">
    <div class="title-container">
      <div class="main-container">
        <div class="icon-container mr-10" v-if="icon">
          <component :is="icon" size="30"></component>
        </div>
        <div class="nav-title ml-5">{{ title }}</div>
      </div>
      <div class="nav-sub-icon">
        <icon-right size="18" :stroke-width="7" />
      </div>
    </div>
    
  </div>
</template>

<script lang='ts' setup >
import type NavSubCardProps from '@/types/components/card/NavSubCard'
const props = defineProps<NavSubCardProps>()
</script>

<style scoped lang='scss'>
.nav-sub-card-container {
  background-color: var(--box-bg-light);
  color: var(--color-text-3);
  padding: 8px 20px;
  transition: var(--time-normal);
  cursor: pointer;
  // 文本和图标以及箭头容器
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  // 文本和图标
    .main-container {
      display: flex;
      align-items: center;
    }
  }

  &:hover {
    background-color: var(--box-bg-light-hover);
    color: var(--color-text-1)
  }



}
</style>