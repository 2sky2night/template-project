<template>
  <div class="deposit-container">
    <!--左侧-->
    <ul class="pay-list">
      <li v-for=" i  in 5">
        <img src="https://bc.game/assets/applepay.0e9ab5f5.png">
      </li>
    </ul>
    <!--右侧-->
    <div class="deposit">
      <p>
        Play with Play with Play with Play with Play with Play
      </p>
      <button>Deposit</button>
    </div>
  </div>
</template>

<script lang='ts' setup>
defineOptions({
  name: 'PayList'
})
</script>

<style scoped lang='scss'>
.deposit-container {
  display: flex;
  margin: 30px 0;
  background-color: var(--color-bg-2);
  padding: 20px 10px;

  .pay-list {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 85px;
    justify-content: center;
    box-sizing: border-box;

    img {
      width: 100px;
      margin-right: 25px;
    }
  }

  .deposit {
    width: 50%;
    box-sizing: border-box;
    padding: 10px 20px;
    padding-right: 100px;

    p {
      margin-bottom: 30px;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
    }

    button {
      color: var(--color-text-1);
      font-weight: 600;
      padding: 20px 50px;
      background-color: #5617cb;
      background-image: conic-gradient(from 1turn, rgba(136, 83, 252, 1), rgba(110, 52, 226, 1));
      position: relative;
      &::after{
        position: absolute;
        content: '';
        background-color: #00000027;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        display: none;
      }
      &:hover::after{
        display: block;
      }
    }

  }
}</style>
