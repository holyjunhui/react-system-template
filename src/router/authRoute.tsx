import React, { FunctionComponent, Suspense, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Skeleton } from 'antd'
import { RouterProps } from './index.interface'
import NotFound from '@/pages/errorPages/404'

const AuthRoute = ({ authRouterList }: { authRouterList: RouterProps[] }) => {
  const [authRouter, setAuthRouter] = useState<RouterProps[]>([])

  const token = localStorage.getItem('token')
  useEffect(() => {
    setAuthRouter(authRouterList)
  }, [authRouterList])
  // 路由为空时先使用骨架屏占位
  if (!authRouter.length) {
    return <Skeleton active />
  }
  if (token) {
    return (
      <Suspense fallback={<Skeleton active />}>
        <Routes>
          {authRouter.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={React.createElement(route?.element as FunctionComponent)}
              />
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default AuthRoute
