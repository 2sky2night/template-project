<template>
  <div class="deposit-container">
    <ul class="pay-list">
      <li v-for="i in 5">
        <img src="https://bc.game/assets/applepay.0e9ab5f5.png">
      </li>
    </ul>
    <div class="deposit">
      <p>
        Play with Play with Play with Play with Play with Play with Play with Play with Play with Play with
      </p>
      <button>Deposit</button>
    </div>
  </div>
</template>

<script lang='ts' setup>
defineOptions({
  name:'PayList'
})
</script>

<style scoped lang='scss'>
.deposit-container{
  display: flex;
  margin: 30px 0;
  background-color: var(--color-bg-2);
  padding: 20px 10px;
  .pay-list{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    padding:20px 85px;
    justify-content: center;
    box-sizing: border-box;
    img{
      width: 100px;
      margin-right: 25px;
    }
  }
  .deposit{
    width: 50%;
  }
}
</style>
