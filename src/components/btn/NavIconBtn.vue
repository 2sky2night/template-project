<template>
  <div class="nav-icon-btn" :class="{ active: isActive }">
    <div @click="navigateTo" class="main-container">
      <component :is="icon" size="28"></component>
    </div>
    <div v-if="title" class="title-container">{{ title }}</div>
  </div>
</template>

<script lang='ts' setup>
// types
import type NavIconBtnProps from '@/types/components/btn/NavIconBtn';
// hooks
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue'

const props = defineProps<NavIconBtnProps>()
const router = useRouter()
const route = useRoute()

// 是否激活了路由
const isActive = computed(() => {
  return route.matched.some(ele => {
    if (ele.path === props.path) {
      return true
    }
  })
})

/**
 * 导航到对应路由中去
 */
function navigateTo () {
  router.push(props.path)
}

</script>

<style scoped lang='scss'>
.nav-icon-btn {
  position: relative;
  padding: 10px 0;
  color: var(--color-text-2);

  .main-container {
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  // 悬浮出来的标题
  .title-container {
    position: absolute;
    top: 50%;
    left: 125%;
    transform: translateY(-50%);
    padding: 8px 10px;
    box-shadow: 0 0 10px var(--shadow-color);
    background-color: var(--color-bg-4);
    pointer-events: none;
    opacity: 0;
    transition: var(--time-normal);

    &::after {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      left: -5px;
      background-color: var(--color-bg-4);

    }
  }

  // 悬浮和激活时的样式
  &.active,
  &:hover {
    color: var(--color-text-1);
    background-color: var(--color-bg-3);
  }

  &:hover .title-container {
    opacity: 1;
  }
}
</style>