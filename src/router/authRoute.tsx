import React, { FunctionComponent, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouterProps } from './index.interface'

const UnAuth = () => {
  return <div>无权限</div>
}
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
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<UnAuth />} />
    </Routes>
  )
}

export default AuthRoute
