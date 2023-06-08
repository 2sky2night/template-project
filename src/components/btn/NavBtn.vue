<template>
  <div class="nav-btn" @click="navigateTo" :class="{ active: isActive }">
    <span class="icon-contianer" v-if="icon">
      <component size="20" :is="icon"></component>
    </span>
    <span class="ml-10">{{ title }}</span>
  </div>
</template>

<script lang='ts' setup>
// types
import type NavBtnProps from '@/types/components/btn/NavBtn';
// hooks
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const $route = useRoute()
const $router = useRouter()
const props = defineProps<NavBtnProps>()

const isActive = computed(() => {
  // 若当前按钮的路径包含在路由记录中则激活按钮
  return $route.matched.some(ele => {
    if (ele.path === props.path) {
      return true
    }
  })
})

/**
 * 修改路由路径切换路由组件
 */
function navigateTo () {
  $router.push(props.path)
}

</script>

<style scoped lang='scss'>
.nav-btn {
  display: flex;
  padding: 10px 15px;
  background-color: var(--box-bg-color-1);
  cursor: pointer;
  color: var(--color-text-4);
  border-radius: 5px;
  align-items: center;

  &:hover {
    color: var(--color-text-1);
    background-color: var(--box-bg-color-hover-1);
  }

  &.active {
    color: var(--color-text-1);
    background-color: var(--box-bg-color-hover-1);
  }
}
</style>