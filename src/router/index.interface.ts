import React from 'react'

type MenuProps = {
  title: string
  path: string
  element?: React.FC
  icon?: React.ReactNode
  auth?: string | undefined // 路由权限，对应用户权限
  hidden?: boolean // 是否在菜单中隐藏
  authHidden?: boolean // 是否在权限路由中隐藏 计算所得，并不是用户设置的
  children?: MenuProps[] // 子路由
}
type RouterProps = {
  path: string
  element?: React.FC
}
export type { MenuProps, RouterProps }
