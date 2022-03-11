export default [
  { path: '/index', component: '@/pages/index' },
  {
    path: '/menu1',
    name: '菜单分类一',
    // redirect: '/menu1/sub1', // 加了这个所有子页面都不渲染了
    routes: [
      {
        path: '/menu1/sub1',
        name: '菜单分类一功能一列表',
        // redirect: '/menu1/sub1/list',
        routes: [
          {
            path: '/menu1/sub1/list',
            name: '菜单分类一功能一列表页',
            component: './menu1/menu1sub1/menu1sub1list.tsx',
            hideInMenu: false, //实际要隐藏这里仅调试
          },
          {
            path: '/menu1/sub1/detail',
            name: '菜单分类一功能一详情页',
            component: './menu1/menu1sub1/menu1sub1listdetail.tsx',
            hideInMenu: false, //实际要隐藏这里仅调试
          },
        ],
      },
      {
        path: '/menu1/sub2',
        name: '菜单分类一功能二列表',
        redirect: '/menu1/sub2/list',
        routes: [
          {
            path: '/menu1/sub2/list',
            name: '菜单分类一功能二列表页',
            component: './menu1/menu1sub2/menu1sub2list.tsx',
            hideInMenu: false, //实际要隐藏这里仅调试
          },
          {
            path: '/menu1/sub2/detail',
            name: '菜单分类一功能二详情页',
            component: './menu1/menu1sub2/menu1sub2listdetail.tsx',
            hideInMenu: false, //实际要隐藏这里仅调试
          },
        ],
      },
    ],
  },
];
