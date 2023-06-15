/**
 * tab标签的自定义属性
 */
export default interface TabsProps {
  list: TabsItem[];
  modelValue: string | number;
  /**
   * 标签项的字体大小
   */
  fontSize: number;
}

/**
 * 每个标签项
 */
export interface TabsItem {
  title: string;
  key: string | number;
}