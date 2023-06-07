<template>
  <ul class="navigations-container">
    <li class="navigation-item" v-for=" route  in initRoutes" :key="route.path">
      <RouterLink active-class="active" :to="route.path">
        <component size="30" :is="route.meta?.icon"></component>
      </RouterLink>
    </li>
  </ul>
</template>

<script lang='ts' setup>
import { initRoutes } from '@/router/routes';

</script>

<style scoped lang='scss'>
.navigations-container {
  margin: 10px 0;
  .navigation-item{
    padding: 15px 0;
    display: flex;
    justify-content: center;
    a {
      color: var(--color-text-4);
      &.active{
        color:var(--color-text-1)
      }
    }
  }
}
</style>