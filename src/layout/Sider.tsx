import React, { useCallback, useEffect, useState } from 'react'

import { Layout, Menu, MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import lodash from 'lodash'
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
        const { path } = item

        if (item.children) {
          item.level = level
          // 只有二级菜单有isTab属性时，说明有tabs组件，path为children中第一个的path
          if (item.children && level === LEVEL && item.isTab) {
            // eslint-disable-next-line no-unsafe-optional-chaining
            const path = `${item?.children?.find((child: any) => !child.authHidden)?.path}`
            item.direct = path
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
          direct: item.direct,
          key: path,
        }
      })
  }, [])

  const onMenuClick = ({ key, item }: any) => {
    if (item?.props?.direct && item?.props?.level === LEVEL) {
      navigate(item?.props?.direct)
      return
    }
    navigate(key)
  }

  useEffect(() => {
    const newRouterLists = lodash.cloneDeep(routerLists)
    const menusRouterList = hiddenRouterList(newRouterLists)

    setMenusList(menusRouterList)
    const currentPath = location.pathname
    // 对currentPath进行处理，如果是二级菜单，只取前两段
    const currentPathArr = currentPath.split('/').slice(0, 3).join('/')

    // 当前路径的一级菜单是否包含在level1Path中
    const currentOpenKeys = [...level1Path].filter((path) => currentPath.includes(path as string))

    setSelectedKeys([currentPathArr])
    setOpenKeys(currentOpenKeys as string[])
  }, [hiddenRouterList, location.pathname, routerLists, collapsed])

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
