<template>
  <div class="comments-container">
    <PanelTitle title="Comments">
      <template #right>
        <a-dropdown @select="">
          <a-button> <icon-menu /></a-button>
          <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption>Option 2</a-doption>
            <a-doption>Option 3</a-doption>
          </template>
        </a-dropdown>
      </template>
    </PanelTitle>
    <div class="comment-textarea">
      <a-textarea placeholder="Please enter something" allow-clear />
    </div>
    <div class="comment-list">
      <CommentItem v-for="item in commentList" :username="item.username" :avatar="item.avatar" :time="item.time"
        :content="item.content" />
      <div class="load-more">
        <a-button :loading="isLoading" type="text" @click="onHandleLoadMore">View more comment</a-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import PanelTitle from '@/components/title/PanelTitle.vue';
import CommentItem from '@/components/item/CommentItem.vue';
import type CommentItemProps from '@/types/components/item/CommentItem';
import {ref} from 'vue'
import { reactive } from 'vue';

const isLoading = ref(false)
// 评论列表
const commentList: CommentItemProps[] = reactive([
  {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  },
  {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  },
  {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }, {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }, {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }, {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }, {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }, {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }, {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }, {
    username: 'mhamhoed',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    time: '17d',
    content: 'asdsad'
  }
])

const onHandleLoadMore = async() => {
  isLoading.value=true
  await new Promise(r => {
    setTimeout(() => {
      commentList.forEach(ele => commentList.push(ele))
      r('ok')
    },3000)
  })
  isLoading.value=false
}

</script>

<style scoped lang='scss'>
.comments-container {
  .comment-textarea {
    margin: 10px 0;
  }

  .comment-list {
    display: flex;
    flex-direction: column;

    >div {
      margin-bottom: 5px;
    }
  }
}
</style>