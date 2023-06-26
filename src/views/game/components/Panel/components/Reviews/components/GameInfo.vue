<template>
  <div class="game-info-container">

    <!--简要信息-->
    <div class="info-container">
      <img
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp">
      <div class="info">
        <div class="title">Sweet Bonanza</div>
        <div class="company">
          <span class="mr-5">By</span>
          <span>Pragmatic Play</span>
        </div>
        <div class="time">
          Release
          <span>2019/6/28</span>
        </div>
      </div>
    </div>

    <!--更多信息-->
    <Transition name="box">
      <div class="more-info-container" v-if="isShowMore">
  
        <!--游戏预览图片和游戏信息-->
        <div class="game-data">
  
          <div class="game-preview-container">
            <PanelTitle :font-size="16" title="Game Preview">
              <template #right>
                <div class="btns">
                  <a-button-group class="ml-10">
                    <a-button @click="currentIndex--"><icon-left /></a-button>
                    <a-button @click="currentIndex++"><icon-right /></a-button>
                  </a-button-group>
                </div>
              </template>
            </PanelTitle>
            <a-carousel v-model:current="currentIndex" show-arrow="never" style="flex-grow: 1;">
              <a-carousel-item v-for="  image   in previewImgList">
                <img :src="image" style="height: 100%;width: 100%;" />
              </a-carousel-item>
            </a-carousel>
          </div>
  
          <div class="game-info">
            <PanelTitle :font-size="16" title="Game Info" />
            <div class="list">
              <div class="info-item" v-for="  item   in infoList">
                <div class="label">{{ item.label }}</div>
                <div class="val">{{ item.val }}</div>
              </div>
            </div>
          </div>
  
        </div>
  
        <!--分享和关于游戏-->
        <div class="game-more">
          <div class="about-game">
            <PanelTitle :font-size="15" title="About this game" />
            <p class="text">
              Sweet Bonanza by Pragmatic Play is arguably a swing on Candy Crush and it’s made Pragmatic Play’s name in the
              industry. It does a great job of making you feel like a four-year-old begging for another lollipop while
              trying to get into the feature. But it still has its fans, with good reason too. As is the case with most
              high-volatility slots, your patience will eventually pay off!
            </p>
          </div>
          <div class="share-game">
            <PanelTitle :font-size="15" title="Share this game" />
            <div class="list">
              <template v-for="  item   in shareList">
                <component class="mr-10" :is="item" :size="35" />
              </template>
            </div>
          </div>
        </div>
  
        <!--游戏标签-->
        <div class="game-tags">
          <PanelTitle title="Features Tags" />
          <div class="list">
            <a-button class="mr-10 mb-10" v-for="item  in tagList">{{ item }}</a-button>
          </div>
        </div>
  
      </div>
    </Transition>



    <a-button type="text" @click="toToggleShowMore">
      <span class="mr-10">{{ isShowMore ? 'Show less' : 'Show more' }}</span>
      <component :is="isShowMore ? 'icon-up' : 'icon-down'"></component>
    </a-button>

  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import PanelTitle from '@/components/title/PanelTitle.vue';

const currentIndex = ref(1)
const isShowMore = ref(false)

// 预览图片的列表
const previewImgList = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
];
// 游戏信息列表
const infoList = [
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  },
  {
    label: 'Provider',
    val: 'Pragmatic Play'
  }
]
// 分析游戏的icon列表
const shareList = [
  'icon-qq-circle-fill',
  'icon-twitter-circle-fill',
  'icon-qq-circle-fill',
  'icon-twitter-circle-fill',
  'icon-qq-circle-fill',
  'icon-twitter-circle-fill',
  'icon-qq-circle-fill',
  'icon-twitter-circle-fill'
]
// 游戏标签列表
const tagList = [
  'Slots',
  'MyStery',
  'Cascading Reels',
  'Slots',
  'Cascading Reels',
  'MyStery',
  'Slots',
  'MyStery',
  'Cascading Reels',
  'Slots',
  'MyStery',
  'Cascading Reels',
  'Slots',
  'MyStery',
  'Cascading Reels',
  'MyStery',
  'Slots',
  'Cascading Reels',
  'Slots',
  'MyStery',
  'Cascading Reels',
  'Slots',
  'MyStery',
  'Cascading Reels'
]

const toToggleShowMore = () => {
  isShowMore.value = !isShowMore.value
}

</script>

<style scoped lang='scss'>
.game-info-container {
  padding: 20px;
  background-color: var(--color-bg-1);

  .info-container {
    margin-bottom: 20px;
    display: flex;

    img {
      width: 110px;
      height: 110px;
    }

    .info {
      margin-left: 20px;
      padding: 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .company {
        span {
          &:first-child {
            color: var(--color-text-3)
          }
        }
      }

      .time {
        color: var(--color-text-3)
      }

      .title {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  .more-info-container {
    transform-origin: top center;
    transition: var(--time-normal);
    .game-data {
      height: 270px;
      display: flex;

      >div {
        width: 50%;
        display: flex;
        flex-direction: column;
      }

      .game-preview-container {
        margin-right: 20px;
      }

      .game-info {
        .list {
          overflow-y: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;

          .info-item {
            display: flex;
            justify-content: space-between;
            padding: 20px 10px;
            background-color: var(--color-bg-2);
            font-size: 13px;

            .label {
              color: var(--color-text-3)
            }
          }
        }
      }
    }

    .game-more {
      margin-top: 36px;
      border-top: 1px solid var(--border-color);
      display: flex;
      padding: 20px 0;

      >div {
        width: 50%;

        &:first-child {
          padding-right: 20px;
          border-right: 1px solid var(--border-color);
        }

        &:last-child {
          padding-left: 20px;
        }
      }

      .about-game {
        .text {
          color: var(--color-text-2)
        }
      }
    }

    .game-tags {
      display: flex;
      flex-wrap: wrap;
    }

    &.show {
      height: auto
    }
  }
}

@keyframes move {
  from{
    transform: scaleY(0);
  }
  to{
    transform: none
  }
}

.box-enter-active{
  animation: move .3s 1 ease-in-out;
}
.box-leave-active{
  animation: move .3s 1 ease-in-out reverse;
}
</style>