<template>
  <div class="sider-container">
    <Logo/>
  </div>
</template>

<script lang='ts' setup>
import Logo from './components/Logo.vue';
</script>

<style scoped lang='scss'>
.sider-container{
  box-sizing: border-box;
  padding: 10px;
  width: $sider-width;
  background-color: red;
  display: flex;
  flex-direction: column;
}
</style>