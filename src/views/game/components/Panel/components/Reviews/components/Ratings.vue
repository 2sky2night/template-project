<template>
  <div class="ratings-container">
    <PanelTitle title="Ratings" />
    <div class="content">
      <!--当前评分-->
      <div class="now-rate">
        <div class="now-text">{{ avg }}</div>
        <div class="rate-content ml-10">
          <div class="mb-5">
            <icon-star-fill size="20" style="color:#f7ba1e" v-for="count in Math.round(avg)" />
            <icon-star-fill size="20"  v-for="count in 5-Math.round(avg)" />
          </div>
          <span>out of 5</span>
        </div>
      </div>
      <!--评分统计-->
      <div class="rate-result">
        <div class="rate-item" v-for="item in rateList">
          <div>
            <icon-star-fill size="12" v-for="count in item.rank" />
          </div>
          <a-progress :show-text="false" :percent="(item.count / total)" style="width: 80%;" />
        </div>
      </div>
    </div>
    <!--用户评分-->
    <div class="user-rate">

      <div class="to-rate">
        <div>Rate this Game</div>
        <a-rate />
      </div>

      <div class="rate-member">
        <div class="user-list mr-10">
          <a-avatar :size="20" v-for="item in userList">
            <img :src="item">
          </a-avatar>
        </div>
        <span>{{ total }} Ratings</span>
      </div>

    </div>
  </div>
</template>

<script lang='ts' setup>
import PanelTitle from '@/components/title/PanelTitle.vue';

// 评分统计
const rateList = [
  {
    rank: 5,
    count: 32
  },
  {
    rank: 4,
    count: 22
  },
  {
    rank: 3,
    count: 66
  },
  {
    rank: 2,
    count: 52
  },
  {
    rank: 1,
    count: 30
  }
]

// 评分总人数
const total = rateList.reduce((num, ele) => {
  return num + ele.count
}, 0)

// 当前评分
const avg = +((rateList.reduce((rateCount, ele) => {
  return rateCount + (ele.rank * ele.count)
}, 0)) / total).toFixed(1)

// 评分的用户列表
const userList = [
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
]

</script>

<style scoped lang='scss'>
.ratings-container {
  .content {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: var(--color-bg-1);

    .now-rate {
      display: flex;

      .now-text {
        font-size: 45px;
      }

      .rate-content {
        display: flex;
        flex-direction: column;
        color: var(--color-text-3);
      }
    }

    .rate-result {
      margin-left: 10vw;
      flex-grow: 1;

      .rate-item {
        font-size: var(--color-text-3);
        display: flex;
        justify-content: space-between;
      }
    }

  }

  .user-rate {
    display: flex;
    border-top: 1px solid var(--border-color);
    background-color: var(--color-bg-1);

    >div {
      width: 50%;
      display: flex;
      align-items: center;
      padding: 10px 20px;
    }

    .to-rate {
      border-right: 1px solid var(--border-color);
      justify-content: space-between;
    }
  }
}
</style>