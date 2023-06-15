<template>
  <div class="bets-container">
    <a-table :columns="columns" :data="[]" />
  </div>
</template>

<script lang='ts' setup>

const columns = [
  {
    title: 'Game',
    dataIndex: 'name',
  },
  {
    title: 'Player',
    dataIndex: 'salary',
  },
  {
    title: 'Bet Amount',
    dataIndex: 'address',
  },
  {
    title: 'Multipier',
    dataIndex: 'email',
  },
  {
    title: 'Profilt Amount',
    dataIndex: 'email',
  },
];

</script>

<style scoped lang='scss'>
.bets-container{
  width: 100%;
}
</style>