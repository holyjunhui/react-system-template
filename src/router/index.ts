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
  Password,
  CertRevoke,
  CertDown,
} from './components'
import Tabs from '@/components/Tabs'
import { MenuProps } from './index.interface'
import About from '@/pages/about'
import Home from '@/pages/home/home'
import Form from '@/pages/form/form'
import Login from '@/pages/login/login'

// path必须以/开头，子路由必须以父路由开头
const basicRouterList: MenuProps[] = [
  {
    path: '/home',
    title: '首页',
    icon: createElement(MenuFoldOutlined),
    element: Home,
  },
]
const authRouterList: MenuProps[] = [
  {
    path: '/website',
    title: '网站管理',
    element: Website,
    icon: createElement(MenuUnfoldOutlined),
    auth: 'allAuth',
    hidden: false, // 是否在菜单中隐藏
  },
  {
    title: '证书管理',
    icon: createElement(MenuUnfoldOutlined),
    path: '/cert-manage',
    children: [
      {
        title: '证书申请',
        auth: 'allAuth',
        path: '/cert-manage/apply',
        element: CertApply,
      },
      {
        title: '证书列表',
        auth: 'allAuth',
        path: '/cert-manage/list',
        element: CertList,
        children: [
          {
            title: '证书详情',
            auth: 'dns.dns_auth.authRecord',
            path: '/cert-manage/list/detail',
            hidden: true,
            element: CertDetail,
          },
        ],
      },

      {
        title: '证书吊销',
        auth: 'allAuth',
        path: '/cert-manage/revoke',
        element: CertList,
        children: [
          {
            title: '证书详情',
            auth: 'dns.dns_auth.authRecord',
            path: '/cert-manage/revoke/detail',
            hidden: true,
            element: CertDetail,
          },
        ],
      },
      {
        title: '证书下载',
        auth: 'allAuth',
        path: '/cert-manage/down',
        element: CertList,
        children: [
          {
            title: '证书详情',
            auth: 'dns.dns_auth.authRecord',
            path: '/cert-manage/down/detail',
            hidden: true,
            element: CertDetail,
          },
        ],
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
