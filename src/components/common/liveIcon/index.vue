<template>
  <div class="live-icon-container"></div>
</template>

<script lang='ts' setup>
defineOptions({
  name: 'LiveIcon'
})
</script>

<style scoped lang='scss'>
.live-icon-container {
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
  background-color: #45d91e;
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #46d91e77;
    animation: toBig 1s infinite ease-in-out;
  }
  @keyframes toBig {
    from{
      transform: scale(1);
    }
    to{
      transform: scale(2.2);
    }
  }
}
</style>