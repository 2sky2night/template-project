<template>
  <div class="header-container">
    <Navigations />
    <div class="header-setting-container">
      <Sign class="mr-10" />
      <Setting  class="ml-10"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
// 组件
import Navigations from './components/Navigations.vue';
import Setting from './components/Setting.vue';
import Sign from './components/Sign.vue';


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
  .header-setting-container{
    display: flex;
  }
}

// 1500px以上 header居中显示
@media screen and (min-width:1690px) {
  .header-container {
    width: var(--main-width);
    margin: 0 auto;
  }
}

// 700px以下隐藏导航按钮组
@media screen and (max-width:700px) {
  .header-container {
    justify-content: flex-end;
  }
}

</style>