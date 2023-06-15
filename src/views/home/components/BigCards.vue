<template>
  <div class="big-cards-container">
    <div class="card-container mr-10">
      <div class="img-container">
        <img src="https://bc.game/assets/casino.74471929.png">
      </div>
      <div class="text-container">
        <icon-gitlab size="30" />
        <div class="ml-10">
          <p class="title mb-10">Cards</p>
          <p class="sub-title">CardsCardsCardsCardsCardsCardsCardsCards</p>
        </div>
      </div>
      <button class="cards-button">Go to Cards</button>
    </div>
    <div class="card-container ml-10">
      <div class="img-container">
        <img src="https://bc.game/assets/sports.2f749e0a.png">
      </div>
      <div class="text-container">
        <icon-gitlab size="30" />
        <div class="ml-10 mb-10">
          <p class="title mb-10">Cards</p>
          <p class="sub-title">CardsCardsCardsCardsCardsCardsCardsCards</p>
        </div>
      </div>
      <button class="cards-button">Go to Cards</button>
    </div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped lang='scss'>
.big-cards-container {
  display: flex;
  margin-bottom: 45px;

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    &:first-child {
      .img-container {
        background-image: linear-gradient(to bottom, #6421e0 100%, rgba(255, 255, 255, 0));
      }
    }

    &:last-child {
      .img-container {
        background-image: linear-gradient(to bottom, #1d803a 100%, rgba(255, 255, 255, 0));
      }
    }

    >.text-container {
      backdrop-filter: blur(10px);
      position: absolute;
      bottom: 10%;
      right: 0;
      left: 0;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: #8f8f8f00;
      display: flex;
      >div{
        width: 100%;
        .sub-title{
          width: 100%;
          text-overflow: ellipsis;
          white-space:nowrap;
          overflow: hidden;
        }
        .title {
          font-size: 20px;
        }
      }
    }


    .cards-button {
      position: relative;
      top: 40px;
      font-weight: 600;
      font-size: 18px;
      margin: 0 20px;
      color: #fff;
      padding: 10px;
      background-color: #5617cb;
      background-image: conic-gradient(from 1turn, rgba(136, 83, 252, 1), rgba(110, 52, 226, 1));

      &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        display: none;
        background-color: #0000000a;
      }

      &:hover::after {
        display: block;
      }
    }

  }
}</style>