<template>
  <div class="carousel-dot" @click="onHandleClick" :class="{ 'active': modelValue === index }"></div>
</template>

<script lang='ts' setup>

// 自定义属性
const props = defineProps<{
  /**
   * 当前轮播图的索引
   */
  modelValue: number;
  /**
   * 该dot的索引值
   */
  index: number;
}>()

// 自定义事件
const emits = defineEmits<{
  'update:modelValue': [ value: number ]
}>()

/**
 * 点击dot切换当前轮播图的索引
 */
function onHandleClick () {
  emits('update:modelValue', props.index)
}

</script>

<style scoped lang='scss'>
.carousel-dot {
  height: 10px;
  margin: 0 5px;
  width: 10px;
  border-radius: 50%;
  background-color: var(--dot-not-acitve-color);
  transition: .3s;
  cursor: pointer;

  &.active {
    width: 30px;
    border-radius: 10px;
    background-color: var(--dot-acitve-color);
  }
}
</style>