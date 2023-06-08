<template>
  <div class="header-container">
    <Navigations />
    1321
  </div>
</template>

<script lang='ts' setup>
import Navigations from './components/Navigations.vue';

defineOptions({
  name: 'header-bar'
})
</script>

<style scoped lang='scss'>
.header-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  box-sizing: border-box;
}

// 1500px以上 header居中显示
@media screen and (min-width:1500px) {
  .header-container {
    width: var(--main-width);
    margin: 0 auto;
  }
}
</style>