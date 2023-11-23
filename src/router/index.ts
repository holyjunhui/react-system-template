import { createElement } from 'react'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons'
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
    path: '/table',
    title: '表格',
    element: About,
    icon: createElement(MenuUnfoldOutlined),
    auth: 'allAuth',
    hidden: false, // 是否在菜单中隐藏
  },
  {
    title: '授权管理',
    icon: createElement(MenuUnfoldOutlined),
    path: '/dns-auth',
    children: [
      {
        title: '区管理',
        auth: 'dns.dns_auth.authorize',
        path: '/dns-auth/authorize',
        element: About,
        children: [
          {
            title: '区记录',
            auth: 'dns.dns_auth.authRecord',
            path: '/dns-auth/authorize/authRecord',
            hidden: true,
            element: About,
          },
        ],
      },

      {
        title: '共享记录',
        auth: 'dns.dns_auth.share',
        path: '/dns-auth/share',
        element: About,
      },

      {
        title: '记录搜索',
        auth: 'dns.dns_auth.search',
        path: '/dns-auth/search',
        element: About,
      },
    ],
  },
  {
    path: '/white',
    title: '白名单',
    icon: createElement(UploadOutlined),
    children: [
      {
        path: 'add',
        title: '新增白名单',
        element: About,
        auth: '/white/whiteAdd',
        hidden: true, // 是否在菜单中隐藏
      },
      {
        path: 'update',
        title: '更新白名单',
        auth: '/white/whiteUpdate',
        element: About,
      },
      {
        path: 'delete',
        title: '删除白名单',
        auth: '/white/whiteDelete',
        element: About,
      },
    ],
  },
  {
    path: '/form',
    title: '表单',
    icon: createElement(UserOutlined),
    children: [
      {
        path: '/form/add',
        title: '添加表单',
        element: Form,
        auth: 'allAuth',
        hidden: false, // 是否在菜单中隐藏
      },
      {
        title: '服务',
        auth: 'allAuth',
        element: Form,
        path: '/form/serverSwitch',
        children: [
          {
            title: '服务详情',
            auth: 'allAuth',
            path: '/form/serverSwitch/service',
            hidden: true,
            element: About,
          },
        ],
      },
      {
        path: '/form/domain',
        title: '域名转发',
        isTab: true, // 是否在tab中显示
        children: Tabs([
          {
            path: '/form/domain/global',
            title: '全局域名',
            element: About,
            auth: 'allAuth',
            hidden: true, // 是否在菜单中隐藏
          },
          {
            path: '/form/domain/server',
            title: '服务域名',
            element: About,
            auth: 'allAuth',
            hidden: true, // 是否在菜单中隐藏
          },
        ]),
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
