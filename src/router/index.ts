import React from 'react'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { MenuProps } from './index.interface'
import About from '@/pages/about'
import Home from '@/pages/home/home'
import Form from '@/pages/form/form'
import Login from '@/pages/login/login'

const basicRouterList: MenuProps[] = [
  {
    path: 'home',
    title: '首页',
    icon: React.createElement(MenuFoldOutlined),
    element: Home,
  },
]
const authRouterList: MenuProps[] = [
  {
    path: 'table',
    title: '表格',
    element: About,
    icon: React.createElement(MenuUnfoldOutlined),
    auth: 'allAuth',
    hidden: false, // 是否在菜单中隐藏
  },
  {
    title: '授权管理',
    icon: React.createElement(MenuUnfoldOutlined),
    path: 'dns_auth',
    children: [
      {
        title: '区管理',
        auth: 'dns.dns_auth.authorize',
        path: 'authorize',
        element: About,
      },
      {
        title: '区记录',
        auth: 'dns.dns_auth.authRecord',
        path: 'authRecord',
        hidden: true,
        element: About,
      },

      {
        title: '共享记录',
        auth: 'dns.dns_auth.share',
        path: 'share',
        element: About,
      },

      {
        title: '记录搜索',
        auth: 'dns.dns_auth.search',
        path: 'search',
        element: About,
      },
    ],
  },
  {
    path: 'white',
    title: '白名单',
    icon: React.createElement(UploadOutlined),
    children: [
      {
        path: 'add',
        title: '新增白名单',
        element: About,
        auth: 'whiteAdd',
        hidden: true, // 是否在菜单中隐藏
      },
      {
        path: 'update',
        title: '更新白名单',
        auth: 'whiteUpdate',
        element: About,
      },
      {
        path: 'delete',
        title: '删除白名单',
        auth: 'whiteDelete',
        element: About,
      },
    ],
  },
  {
    path: 'form',
    title: '表单',
    icon: React.createElement(UserOutlined),
    children: [
      {
        path: 'add',
        title: '添加表单',
        element: Form,
        auth: 'allAuth',
        hidden: false, // 是否在菜单中隐藏
      },
      {
        title: '服务',
        auth: 'dns.dns_gslb.serverSwitch',
        path: 'serverSwitch',
        children: [
          {
            title: '服务',
            auth: 'dns.dns_gslb.services',
            path: 'service',
            hidden: true,
            element: About,
          },
          {
            title: '服务器',
            auth: 'dns.dns_gslb.server',
            path: 'server',
            hidden: true,
            element: About,
          },
        ],
      },
      {
        path: 'update',
        title: '更新表单',
        children: [
          {
            path: 'detail',
            title: '添加表单详情',
            element: About,
            auth: 'allAuth',
            hidden: true, // 是否在菜单中隐藏
          },
        ],
      },
    ],
  },
]

const whiteRouterList: MenuProps[] = [
  {
    path: 'login',
    title: '登录',
    element: Login,
  },
  {
    path: '404',
    title: '404',
    element: About,
  },
]

export { basicRouterList, authRouterList, whiteRouterList }
