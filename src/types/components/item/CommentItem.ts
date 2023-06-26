export default interface CommentItemProps {
  username: string;
  avatar: string;
  /**
   * 时间
   */
  time: string;
  /**
   * 评论的内容
   */
  content: string;
}