import { createElement } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Website,
  CertApply,
  CertList,
  CertDetail,
  AccountList,
  AccountCenter,
  DDosManage,
  Accelerate,
  AccessDomain,
  AccessPort,
} from './components'
import Tabs from '@/components/Tabs'
import { MenuProps } from './index.interface'
import About from '@/pages/about'
import Home from '@/pages/home/home'
import Login from '@/pages/login/login'

// path必须以/开头，子路由必须以父路由开头
const basicRouterList: MenuProps[] = [
  // {
  //   path: '/home',
  //   title: '首页',
  //   icon: createElement(MenuFoldOutlined),
  //   // element: Home,
  // },
]
const authRouterList: MenuProps[] = [
  {
    path: '/home',
    title: '首页',
    icon: createElement(MenuFoldOutlined),
    auth: 'allAuth',
    element: Home,
  },
  {
    path: '/instance',
    title: '实例管理',

    icon: createElement(MenuUnfoldOutlined),
    auth: 'allAuth',
    hidden: false, // 是否在菜单中隐藏
    children: [
      {
        path: '/instance/ddos',
        title: 'DDos防护',
        element: DDosManage,
        auth: 'allAuth',
      },
      {
        path: '/instance/accelerate',
        title: '加速管理',
        element: Accelerate,
        auth: 'allAuth',
      },
    ],
  },
  {
    title: '接入管理',
    icon: createElement(MenuUnfoldOutlined),
    path: '/access',
    children: [
      {
        path: '/access/domain',
        title: '域名接入',
        element: AccessDomain,
        auth: 'allAuth',
      },
      {
        path: '/access/port',
        title: '端口接入',
        element: AccessPort,
        auth: 'allAuth',
      },
    ],
  },

  {
    path: '/account',
    title: '用户管理',
    icon: createElement(UserOutlined),
    children: [
      {
        path: '/account/list',
        title: '用户列表',
        element: AccountList,
        auth: 'allAuth',
      },
      {
        title: '密码更新',
        auth: 'allAuth',
        element: AccountCenter,
        path: '/account/password',
      },
      {
        title: '个人中心',
        auth: 'allAuth',
        element: AccountCenter,
        path: '/account/center',
        hidden: true,
      },
    ],
  },
]

const whiteRouterList: MenuProps[] = [
  {
    path: '/login',
    title: '登录',
    element: Login,
  },
  {
    path: '/404',
    title: '404',
    element: About,
  },
]

export { basicRouterList, authRouterList, whiteRouterList }
