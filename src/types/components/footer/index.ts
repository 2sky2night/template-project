/**
 * Navigations组件
 * footer导航组件的自定义属性
 */
export default interface FooterNavProps {
  list: FooterNavItem[]
}

/**
 * 每一板块的导航项
 */
export interface FooterNavItem {
  title: string;
  navList: FooterNavListItem[]
}


/**
 * 每一个链接
 */
export interface FooterNavListItem {
  title: string;
  path: string;
}

/**
 * networks-item组件
*/
export interface FooterNetorkProps {
  list:FooterNetworkItem[]
}

/**
 * networks-item项
*/
export interface FooterNetworkItem {
  icon: string;
  path: string;
}


/**
 * 友链组件的自定义属性
 */
export interface FooterSponsourshipProps {
  list:FooterSponsourshipItem[]
}

/**
 * 每一个友链项
 */
export interface FooterSponsourshipItem {
  img: string;
  path: string;
}