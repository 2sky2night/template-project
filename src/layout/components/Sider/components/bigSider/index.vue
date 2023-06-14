<template>
  <div class="big-sider-container">
    <!--顶部logo-->
    <Logo />
    <!--菜单栏-->
    <div class="menu-container">
      <Bonus />
      <!--导航栏-->
      <Navigations />
      <!--主题切换按钮组-->
      <ThemeBtn />
      <!--1200px--650px显示该大菜单时出现的遮罩层-->
      <div class="big-sider-container-mask" @click="toCloseBigSider">
      </div>

    </div>
  </div>
</template>

<script lang='ts' setup>
// 组件
import Logo from './components/Logo.vue';
import Bonus from './components/Bonus.vue';
import Navigations from './components/Navigations.vue';
import ThemeBtn from './components/ThemeBtn.vue';
// hooks
import useSettingStore from '@/store/setting';

const settingStore = useSettingStore()

/**
 * 切换成小菜单
 */
function toCloseBigSider () {
  settingStore.toggleSider(2)
}

defineOptions({
  name: 'BigSider'
})
</script>

<style scoped lang='scss'>
// 遮罩层 在视口宽度在1200-650px时会显示 且不能遮挡大菜单
.big-sider-container-mask {
  position: fixed;
  top: 0;
  left: var(--sider-width);
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: var(--mask-color);
  display: none;
}

// @media screen and (max-width:1200px) and (min-width:650px) {
//   .big-sider-container-mask {
//     display: block;
//   }
// }


@media screen and (max-width:1200px) {
  .big-sider-container-mask {
    display: block;
  }
}

.big-sider-container {
  position: absolute;
  z-index: 999;
  height: 100%;
  overflow: auto;
  width: var(--sider-width);
  display: flex;
  box-shadow: 0 0 10px var(--shadow-color);
  flex-direction: column;
  background-color: var(--color-bg-1);

  // 隐藏滚动条
  &::-webkit-scrollbar {
    width: 0;
  }

  .menu-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: calc(100% - var(--sider-logo-height));
    padding: 20px 10px;
    box-sizing: border-box;
  }
}
</style>