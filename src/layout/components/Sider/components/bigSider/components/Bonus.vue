<template>
  <div class="bonus-container mb-15">
    <NavCard icon="icon-archive" title="Bonus" />
    <div class="nav-btns mt-5">
      <div class="nav-btn mr-10">
        <div class="img-container mr-5">
          <img src="https://bc.game/assets/quests.7ae7831a.png">
        </div>
        <span class="bonus-title">QUEST</span>
      </div>
      <div class="nav-btn">
        <div class="img-container mr-5">
          <img class="spin" src="https://bc.game/assets/turntable.b21b0d0a.png">
          <img class="pointer" src="https://bc.game/assets/pointer.fe72597d.png
  ">
        </div>
        <span class="bonus-title">SPIN</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import NavCard from '@/components/card/NavCard.vue';
</script>

<style scoped lang='scss'>
.bonus-container {
  height: 110px;
  background-color: var(--color-bg-2);
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;

  // 导航按钮组
  .nav-btns {
    display: flex;
    flex-grow: 1;

    // 导航按钮
    .nav-btn {
      height: 100%;
      width: calc((100% - 5px) / 2);
      display: flex;
      cursor: pointer;
      align-items: center;
      padding: 3px 10px;

      .bonus-title {
        font-size: 12px;
        font-weight: 600;
      }

      // 图片容器
      .img-container {
        img:first-child {
          width: 35px;
          height: 35px;
        }
      }

      // quest
      &:first-child {
        background-image: linear-gradient(50deg, #b596fc, #f0eef9);
      }

      // spin
      &:last-child {
        position: relative;
        background-image: linear-gradient(50deg, #d389c1, #f0eef9);

        .spin {
          animation: toRotate 2s infinite linear;
        }

        .pointer {
          position: absolute;
          width: 15px;
          top:0px;
          left: 20px;
        }
      }
    }
  }
}

@keyframes toRotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}</style>