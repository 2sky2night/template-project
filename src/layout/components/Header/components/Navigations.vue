<template>
  <div class="navigations-container">
    <NavBtn v-for="  item   in list" :key="item.path" :icon="item.icon" :title="item.title" :path="item.path"
      class="mr-10" />
  </div>
</template>

<script lang='ts' setup>
import NavBtn from '@/components/btn/NavBtn.vue';
const list = [
  { icon: 'icon-home', title: 'Home', path: '/' },
  { icon: 'icon-live-broadcast', title: 'Blog', path: '/blog' },
]
</script>

<style scoped lang='scss'>
.navigations-container {
  display: flex;
}

// 700px以下隐藏导航按钮组
@media screen and (max-width:700px) {
  .navigations-container {
    display: none;
  }
}
</style>