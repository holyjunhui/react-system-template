import React, { FunctionComponent, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { RouterProps } from './index.interface'

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
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default AuthRoute
