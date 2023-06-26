<template>
  <div class="comment-item-container">
    <div class="comment-title">
      <div class="user-info">
        <a-avatar>
          <img :src="avatar">
        </a-avatar>
        <div class="username ml-10">{{ username }}</div>
        <div class="time ml-10">{{ time }}</div>
      </div>
      <div class="actions">
        <a-button class="ml-10" type="text">
          <span style="color:var(--color-text-2)">
            <icon-thumb-up-fill size="20" />
          </span>
        </a-button>
        <a-button class="ml-10" type="text"> 
          <span style="color:var(--color-text-2)">
            <icon-message size="20" />
          </span>
        </a-button>
        <a-button class="ml-10" type="text">
          <span style="color:var(--color-text-2)">
            <icon-more-vertical size="20" />
          </span>
        </a-button>
      </div>
    </div>
    <div class="comment-content">
      {{ content }}
    </div>
  </div>
</template>

<script lang='ts' setup>
import CommentItemProps from '@/types/components/item/CommentItem'
const props = defineProps<CommentItemProps>()
</script>

<style scoped lang='scss'>
.comment-item-container {
  padding: 20px;
  background-color: var(--color-bg-1);

  .comment-title {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;

    .user-info {
      display: flex;
      align-items: center;

      .username {
        color: var(--color-text-2)
      }

      .time {
        color: var(--color-text-3)
      }
    }

    .actions {
      display: flex;
      align-items: center;
    }
  }
}</style>