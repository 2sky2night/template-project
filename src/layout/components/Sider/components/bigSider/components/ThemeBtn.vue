<template>
  <div class="theme-btns">

    <!--深色模式的按钮-->
    <div class="btn" @click="() => themeStore.toggleTheme(true)" :class="{ active: isDark }">
      <icon-moon-fill size="20" />
      <span class="title ml-10">Dark</span>
    </div>

    <!--浅色模式的按钮-->
    <div class="btn" @click="() => themeStore.toggleTheme(false)" :class="{ active: !isDark }">
      <icon-sun-fill size="20" />
      <span class="title ml-10">Light</span>
    </div>

    <!--移动的浮层-->
    <div class="mask" :style="{ left: isDark ? '0px' : '120px' }"></div>

  </div>
</template>

<script lang='ts' setup>
// hooks
import useThemeStore from '@/store/theme';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

</script>

<style scoped lang='scss'>
.theme-btns {
  display: flex;
  position: relative;

  .mask {
    transition: var(--time-middle);
    position: absolute;
    pointer-events: none;
    opacity: .3;
    width: 120px;
    height: 45px;
    left: 0px;
    background-color: var(--box-bg-light-hover);
  }

  .btn {
    width: 120px;
    line-height: 45px;
    text-align: center;
    cursor: pointer;
    height: 45px;
    color: var(--color-text-3);
    transition: var(--time-normal);
    background-color: var(--box-bg-light);

    &.active {
      color: var(--color-text-1);
    }

    .title {
      font-size: 16px;
    }
  }
}
</style>