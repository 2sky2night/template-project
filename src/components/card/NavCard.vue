<!--无子孩子的导航菜单-->
<template>
  <div class="nav-card-container">
    <div class="icon-container mr-10" v-if="icon">
      <component :is="icon" size="25"></component>
    </div>
    <div class="nav-title ml-5">{{ title }}</div>
  </div>
</template>

<script lang='ts' setup >
import type NavCardProps from '@/types/components/card/NavCard'
const props = defineProps<NavCardProps>()
</script>

<style scoped lang='scss'>
.nav-card-container {
  display: flex;
  align-items: center;
  background-color: var(--box-bg-color-2);
  color: var(--color-text-3);
  padding: 8px 10px;
  font-size: 15px;
  transition: var(--time-normal);
  cursor: pointer;

  &:hover {
    background-color: var(--box-bg-color-hover-2);
    color: var(--color-text-1)
  }
}
</style>