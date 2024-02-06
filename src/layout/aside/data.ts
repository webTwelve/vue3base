export interface IMenu {
  title: string
  url: string
  icon: string
}
export const menu: IMenu[] = [
  {
    title: '工作台',
    url: '/main/workbench',
    icon: 'icon-gongzuotai'
  },
  {
    title: '活动管理',
    url: '/main/events',
    icon: 'icon-huodongguanli-copy'
  },
  {
    title: '用户管理',
    url: '/main/user',
    icon: 'icon-yonghuguanli'
  },
  {
    title: '系统设置',
    url: '/main/settings',
    icon: 'icon-anquanshezhi'
  }
]
