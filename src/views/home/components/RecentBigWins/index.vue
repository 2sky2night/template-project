<template>
  <div class="recent-big-wins-container">
    <div class="title mb-10">
      <LiveIcon />
      <span class="text ml-10">Recent Big Wins</span>
    </div>
    <a-carousel style="height: 180px;width: 100%;" :auto-play="true" show-arrow="never" indicator-type="never">
      <a-carousel-item v-for=" item  in 5">
        <div class="swiper-item">
          <div class="card-item mr-10" v-for="  ele   in 5">{{ ele }}</div>
        </div>
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script lang='ts' setup>
import LiveIcon from '@/components/common/liveIcon/index.vue'
</script>

<style scoped lang='scss'>
.recent-big-wins-container {
  margin-bottom: 30px;

  .title {
    display: flex;
    align-items: center;

    .text {
      font-weight: 600;
      font-size: 20px;
    }
  }
}

.swiper-item {
  height: 100%;
  display: flex;
  margin-bottom: 30px;

  .card-item {
    flex-grow: 1;
    background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
}
</style>