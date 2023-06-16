<template>
  <div class="sign-box">
    <p class="sign-up-box">
      SIGN UP
    </p>
    <p class="moneny-box">
      UP TO <span>￥280000</span>
    </p>
    <div class="btns-container mt-10">
      <div class="sign-up-btn">
        Sign Up Now
      </div>
      <p class="ml-10 mr-10">or</p>
      <Btn class="mr-10" icon="icon-qq-circle-fill" :icon-size="25" />
      <Btn class="mr-10" icon="icon-qq-circle-fill" :icon-size="25" />
      <Btn class="mr-10" icon="icon-qq-circle-fill" :icon-size="25" />
    </div>
  </div>
</template>

<script lang='ts' setup>
import Btn from '@/components/btn/Btn.vue';
defineOptions({
  name:"SignBox"
})
</script>

<style scoped lang='scss'>
.sign-box {
  height: 315px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  .sign-up-box {
    font-size: 20px;
  }

  .moneny-box {
    span {
      background: linear-gradient(90deg, #B5E916 22.99%, #43C111 73.57%);
      color: transparent;
      background-clip: text;
    }

    font-size: 60px;
    font-weight: 600;
  }

  .btns-container {
    height: 50px;
    align-items: center;
    display: flex;

    .sign-up-btn {
      position: relative;
      cursor: pointer;
      color: #fff;
      padding: 15px 20px;
      display: inline-block;
      background-color: #5617cb;
      background-image: conic-gradient(from 1turn, rgba(136, 83, 252, 1), rgba(110, 52, 226, 1));
      border-radius: 3px;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        background-color: #00000015;
      }

      &:hover::after {
        display: block;
      }
    }
  }
}
</style>