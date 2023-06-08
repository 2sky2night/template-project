<template>
  <div class="sign-container">
    <div class="mr-10 sign-in-btn btn">Sign in</div>
    <div class="sign-up-btn btn">Sign up</div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped lang='scss'>
.sign-container {
  display: flex;
  align-items: center;
  .btn {
    padding: 12px 20px;
    cursor: pointer;
  }

  .sign-up-btn {
    position: relative;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    border-radius: 2px;
    background-image: conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1));

    &:hover::after {
      display: block;
    }

    &::after {
      display: none;
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      pointer-events: none;
      background-color: #00000015;
    }
  }
}
</style>