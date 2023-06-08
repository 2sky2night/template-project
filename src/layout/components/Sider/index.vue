<template>
  <div class="sider-container" :class="{ 'sider-big': isBigSider === 1, 'sider-small': isBigSider === 2 }">
    <TransitionGroup name="sider">
      <BigSider v-if="isBigSider === 1" key="big" />
      <SmallSider v-if="isBigSider === 2" key="small" />
    </TransitionGroup>
  </div>
</template>

<script lang='ts' setup>
// 组件
import BigSider from './components/bigSider/index.vue'
import SmallSider from './components/smallSider/index.vue'
// hooks
import useSettingStore from '@/store/setting';
import { storeToRefs } from 'pinia';

const settingStore = useSettingStore()
const { isBigSider } = storeToRefs(settingStore)


defineOptions({
  name: 'sider-bar'
})
</script>

<style scoped lang='scss'>
// 侧边栏容器
.sider-container {
  position: relative;
  height: 100%;
  box-shadow: 0 0 10px var(--shadow-color);

  // 大侧边栏生效时的样式
  &.sider-big {
    min-width: var(--sider-width);
    box-shadow: none;
  }

  // 小侧边栏生效时的样式
  &.sider-small {
    min-width: var(--sider-small-width);
  }
}

// 1200px以下侧边栏宽度为小菜单的宽度
@media screen and (max-width:1200px) {
  .sider-container{
    width: var(--sider-small-width) !important;
  }
}
// 650px以下隐藏整个侧边菜单栏
@media screen and (max-width:650px) {
  .sider-container{
    display: none;
  }
}

.sider-enter-active {
  animation: siderBar var(--time-normal) 1 ease-in-out;
}

.sider-leave-active {
  animation: siderBar var(--time-normal) 1 ease-in-out reverse;
}

@keyframes siderBar {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: none;
  }
}
</style>