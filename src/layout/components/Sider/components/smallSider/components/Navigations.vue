<template>
  <ul class="navigations-container">
    <li class="navigation-item" v-for="      route       in initRoutes" :key="route.path">
      <template v-if="route.meta">
        <NavIconBtn class="mt-5" :icon="route.meta.icon" :title="route.meta.title" :path="route.path"></NavIconBtn>
      </template>
    </li>
  </ul>
</template>

<script lang='ts' setup>
// 路由表
import { initRoutes } from '@/router/routes';
// 组件
import NavIconBtn from '@/components/btn/NavIconBtn.vue';

</script>

<style scoped lang='scss'>
.navigations-container {
  margin: 10px 0;
  .navigation-item{
    margin: 0 8px;
  }
}
</style>