<template>
  <div class="carousel-container" :style="{ height: height + 'px' }">
    <div class="carousel-box" :style="{ left: `-${ currentIndex * 100 }%`, transition: `${ tsTime }s` }">

      <component :is="carouselList[ carouselList.length - 1 ]"></component>
      <component v-for="(     item, index     ) in carouselList" :key="index" :is="item" />
      <component :is="carouselList[ 0 ]"></component>

    </div>
    <div v-if="showDots" class="dots-container">
      <CarouselDot v-model="currentIndex" :index="item" v-for="         item          in carouselList.length" :key="item" />
    </div>
    <div class="carousel-btns" v-if="showBtns">
      <div class="carousel-btn" @click="throttlePre">&lt;</div>
      <div class="carousel-btn" @click="throttleNext">></div>
    </div>
  </div>
  <slot v-if="false"></slot>
</template>

<script lang='ts' setup>
// 组件
import CarouselDot from './components/CarouselDot.vue'
// hooks
import { ref, onMounted, nextTick, watch } from 'vue'
import throttle from '@/utils/tools/throttle'

//当前显示的轮播图索引
// 1--- carousel.length为轮播项的范围，0是追加到最前面的最后一项  carousel.length+1为追加到最后面的第一项
const currentIndex = ref(1)
// 轮播图的自定义属性
const props = defineProps<{
  /**
   * 高
   */
  height: number;
  /**
   * 是否显示指示器
   */
  showDots: boolean;
  /**
   * 是否显示上下轮播项按钮
   */
  showBtns: boolean;
  /**
   * 是否自动播放
   */
  autoplay: boolean;
  /**
   * 自动播放的延迟时间
   */
  delay: number;
}>()
// 定义插槽
const slots = defineSlots<{ default: () => any }>()
// 获取默认插槽的内容
const defaultsList = slots.default()
// 轮播图的过渡时间
const tsTime = ref<.3 | 0>(.3)
// 要渲染的轮播项
const carouselList: any[] = defaultsList.reduce((list: any, ele: any) => {
  if (ele.type.name === 'CarouselItem') {
    // 若是模板渲染的子项且组件名称为CarouselItem就保留
    list.push(ele)
    return list
  } else if (typeof ele.type === "symbol" && ele.type.toString() === 'Symbol(v-fgt)') {
    // 若是通过v-for指令渲染的ele.type则是一个symbol类型 则需要获取所有渲染的子内容并使用组件名是否为Carouselitme的筛选
    ele.children.filter((son: any) => son.type.name === 'CarouselItem').forEach((item: any) => list.push(item))
    return list
  }
}, [])


// console.log('轮播项列表：', carouselList)

/**
 * 上一张
 */
function onHandlePre () {
  // 恢复过渡时间
  tsTime.value = .3;
  if (currentIndex.value == 1) {
    // 1为临界值 需要特殊处理
    // 先让其正常滑动到 0 也就是展示最后一项
    currentIndex.value--
    // 当页面更新后
    nextTick(() => {
      // 调整过渡时间 立即跳转到正常范围中的最后一项
      setTimeout(() => {
        tsTime.value = 0;
        currentIndex.value = carouselList.length
        // 延迟300秒是因为轮播图动画是三秒 需要先移动到0项然后调整过渡时间并立即调整到正常范围的最后一项
      }, 300)

    })
  } else {
    currentIndex.value--
  }
}

/**
 * 下一张
 */
function onHandleNext () {
  // 恢复过渡时间
  tsTime.value = .3;
  if (currentIndex.value === carouselList.length) {
    // 若当前是正常范围的最后一项 需要另做处理
    currentIndex.value++
    nextTick(() => {
      // 调整过渡时间 立即跳转到正常范围中的第一项
      setTimeout(() => {
        tsTime.value = 0;
        currentIndex.value = 1;
      }, 300)
    })
  } else {
    currentIndex.value++
  }
}

const throttleNext = throttle(onHandleNext, 500)
const throttlePre = throttle(onHandlePre, 500)

// 是否自动播放？
if (props.autoplay) {
  onMounted(() => {
    setInterval(() => {
      throttleNext()
    }, props.delay)
  })
}


defineOptions({
  name: 'Carousel'
})

</script>

<style scoped lang='scss'>
.carousel-container {
  overflow: hidden;
  position: relative;

  .carousel-box {
    display: flex;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .dots-container {
    background-image: linear-gradient(to top,#0000002d,#00000000);
    position: absolute;
    width: 100%;
    display: flex;
    z-index: 102;
    bottom: 0px;
    height: 35px;
    align-items: center;
    justify-content: center;
  }

  .carousel-btns {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    display: flex;
    align-items: center;

    .carousel-btn {
      pointer-events: all;
      position: absolute;
      font-size: 18px;
      cursor: pointer;
      height: 25px;
      width: 25px;
      text-align: center;
      background-color: var(--dot-not-acitve-color);
      line-height: 25px;
      border-radius: 50%;
      color: #fff;
      transition: .3s;

      &:hover {
        background-color: var(--dot-acitve-color);

      }

      &:first-child {
        left: 10px;
      }

      &:last-child {
        right: 10px
      }
    }
  }

}
</style>