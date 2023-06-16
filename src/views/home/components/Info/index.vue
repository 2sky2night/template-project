<template>
  <div class="info-container">
    <div class="passage-container">
      <div class="title">Crypto Online Casino</div>
      <p class="text mb-10">
        Casinos online have not always been around, but we can safely say that online casinos have been used a lot since
        they came on the market. And it's not in short demand nor options, and now in 2023, we have 1000s and 1000s to
        pick from - it's just a matter of what you like and what payment options you would like to see at the casino.
      </p>
      <p class="text" style="margin-bottom: 30px;">
        Players are always looking for something new, which will help make the gaming experience so much better and more
        accessible. Allowing the player to focus on the absolute fun of a casino, that's right, the games themselves.
      </p>
      <div class="green">Show more >></div>
    </div>
    <div class="message-container">
      <div class="title">Help us improve your experience</div>
      <a-textarea placeholder="Please enter something" allow-clear />
      <div class="btn">
        <a-button status="success">Leave a Message</a-button>
        <span class="text ml-10">Now get rewarded for your valuable feedback.</span>
      </div>
      <div>
        Or Email us:<span class="green">feedback@bcgame.com</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped lang='scss'>
.info-container {
  display: flex;

  >div {
    width: 50%;

    .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 30px;
    }

    .text {
      color: var(--color-text-3);
      word-break: break-all;
    }

    .green {
      color: greenyellow;
    }
  }

  .passage-container {
    box-sizing: border-box;
    padding-right: 30px;
  }

  .message-container {
    .btn {
      margin: 20px 0;
    }
  }
}</style>