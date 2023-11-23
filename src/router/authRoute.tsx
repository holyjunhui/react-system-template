import React, { FunctionComponent, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { RouterProps } from './index.interface'
import NotFound from '@/pages/errorPages/404'

const AuthRoute = ({ authRouterList }: { authRouterList: RouterProps[] }) => {
  const [authRouter, setAuthRouter] = useState<RouterProps[]>([])

  const token = localStorage.getItem('token')
  useEffect(() => {
    setAuthRouter(authRouterList)
  }, [authRouterList])

  if (token) {
    return (
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
    )
  }
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default AuthRoute
