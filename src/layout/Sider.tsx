import React, { useCallback, useEffect, useState } from 'react'

import { Layout, Menu, MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '@/assets/images/logo_white.png'

// import { menusRouterList, level1Path } from '@/router/config'
import useUserStore from '@/store/user'
// import { RouterProps } from '@/router/index.interface'

const LEVEL = 2 // 侧边栏第几级开始path为children中第一个的path
const level1Path = new Set()

const Sider = ({ routerLists }: any) => {
  const collapsed = useUserStore((state) => state.collapsed)
  const location = useLocation()
  const navigate = useNavigate()
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [menusList, setMenusList] = useState<MenuProps['items']>([])

  // 针对侧边栏所做的处理, 过滤hidden为true的路由且最后一级的path为children中第一个的path
  const hiddenRouterList = useCallback((routerList: any, level = 1) => {
    return routerList
      .filter((item: any) => !item.hidden)
      .map((item: any) => {
        if (item.children) {
          item.level = level
          if (item.children && level === LEVEL) {
            item.path = item?.children?.find((child: any) => !child.authHidden)?.path
          }
          item.children = hiddenRouterList(item.children, level + 1)
        }
        if (level === 1) {
          level1Path.add(item.path)
        }

        return {
          level,
          children: item.children?.length ? item.children : null,
          icon: item.icon,
          label: item.title,
          key: item.path,
        }
      })
  }, [])

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  useEffect(() => {
    const menusRouterList = hiddenRouterList(routerLists)
    // console.log(menusRouterList, 'menusRouterList')
    setMenusList(menusRouterList)
  }, [hiddenRouterList, routerLists])

  useEffect(() => {
    const currentPath = location.pathname
    const currentOpenKeys = [...level1Path].filter((path) => currentPath.includes(path as string))
    // currentPath的一段数据是否包含在level1Path中
    setSelectedKeys([currentPath])
    setOpenKeys(currentOpenKeys as string[])
  }, [location.pathname, collapsed])

  return (
    <Layout.Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical border-b-2 border-b-red-400 h-16">
        <img src={Logo} alt="logo" />
      </div>
      <Menu
        onClick={onMenuClick}
        theme="dark"
        mode="inline"
        openKeys={openKeys} // 二级菜单展开
        onOpenChange={(keys) => {
          // 根据title判断是否为二级菜单
          const subMenuKeys = [...level1Path]
          const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)

          if (subMenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys)
          } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
          }
        }}
        selectedKeys={selectedKeys}
        items={menusList}
      />
    </Layout.Sider>
  )
}

export default Sider
