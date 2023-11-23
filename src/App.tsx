import React, { useEffect, useState } from 'react'
import { ConfigProvider, message, App } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'
import { Global } from '@emotion/react'
import { Routes, Route } from 'react-router-dom'
import global from '@/assets/styles/global'

import { whiteRouterList } from './router/index'
import Login from '@/pages/login/login'
import Layout from './layout/Index'
import useUserStore from './store/user'
import './assets/styles/tailwind.css'

dayjs.locale('zh-cn')

const MainApp = () => {
  const fetchUserInfo = useUserStore((state) => state.fetchUserInfo)
  const token = localStorage.getItem('token') as string
  console.log('token', token)
  useEffect(() => {
    if (token) {
      fetchUserInfo()
    }
  }, [fetchUserInfo, token])

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#3b7aff',
        },
      }}
    >
      <App>
        {/* 全局样式 */}
        <Global styles={global} />
        <Routes>
          <Route path="/" element={<Login />} />
          {whiteRouterList.map(({ path, element }) => {
            return <Route key={path} path={path} element={React.createElement(element as any)} />
          })}

          <Route path="*" element={<Layout />} />
        </Routes>
      </App>
    </ConfigProvider>
  )
}

export default MainApp
