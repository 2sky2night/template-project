<template>
  <div class="navigations-container">
    <a-menu :selected-keys="[ $route.path ]">
      <NavigateItems :routes="initRoutes" />
    </a-menu>
  </div>
</template>

<script lang='ts' setup>
// 路由表
import { initRoutes } from '@/router/routes';
// 组件
import NavigateItems from './NavigateItems.vue';
// hooks
import { useRoute } from 'vue-router';


const $route = useRoute()

</script>

<style scoped lang='scss'>
.navigations-container {
  flex-grow: 1;
}
</style>