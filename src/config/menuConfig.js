export const menuList = [
  {
    key: '/home',
    icon: 'pie-chart',
    title: '首页'
  },
  {
    icon: 'mail',
    title: '商品',
    key: '/productManage',
    children: [
      {
        key: '/category',
        icon: 'pie-chart',
        title: '品类管理'
      },
      {
        key: '/product',
        icon: 'pie-chart',
        title: '商品管理'
      }
    ]
  },
  {
    key: '/user',
    icon: 'appstore',
    title: '用户管理'
  }
]