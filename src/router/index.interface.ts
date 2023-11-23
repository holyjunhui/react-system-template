import React from 'react'

type MenuProps = {
  title: string
  path: string
  key?: string // 跟path一样 不需要写，但是需要唯一
  element?: React.FC
  icon?: React.ReactNode
  auth?: string | undefined // 路由权限，对应用户权限
  hidden?: boolean // 是否在菜单中隐藏
  isTab?: boolean // 是否在tab中显示
  authHidden?: boolean // 是否在权限路由中隐藏 计算所得，并不是用户设置的
  children?: MenuProps[] // 子路由
}
type RouterProps = {
  path: string
  element?: React.FC
}
export type { MenuProps, RouterProps }
