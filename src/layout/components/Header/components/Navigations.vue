<template>
  <div class="navigations-container">
    <NavBtn v-for=" item  in list" :key="item.path" :icon="item.icon" :title="item.title" :path="item.path" class="mr-10" />
  </div>
</template>

<script lang='ts' setup>
import NavBtn from '@/components/btn/NavBtn.vue';
const list = [
  { icon: 'icon-live-broadcast', title: 'Blog', path: '/blog' },
  { icon: 'icon-live-broadcast', title: 'Home', path: '/' },
]
</script>

<style scoped lang='scss'>
.navigations-container {
  display: flex;
}
</style>