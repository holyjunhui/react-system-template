import React, { useCallback, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { Layout, Menu, MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import lodash from 'lodash'
import {
  siderLayoutBg,
  siderFirstBg,
  siderSelectedBg,
  siderSelectedColor,
  siderSubmenuBg,
  systemColor,
  logoBg,
} from '@/assets/styles/global.ts'
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
      css={css`
        &.ant-layout-sider {
          background-color: ${siderLayoutBg};
          overflow: auto;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
        }
      `}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div
        css={css`
          color: #fff;
          font-size: 30px;
          text-align: center;
          height: 56px;
          line-height: 56px;
          background-color: ${logoBg};
          width: ${collapsed ? '80px' : '200px'};
          cursor: pointer;
        `}
      >
        {collapsed ? 'R' : 'React-System'}
      </div>
      <Menu
        css={css`
          .ant-menu-item-selected {
            background-color: ${siderSelectedBg};
            border-radius: 0;
            width: 100%;
            &:hover {
              background-color: ${siderSelectedBg};
            }
          }

          // 一级区域文字
          .ant-menu-submenu-active > .ant-menu-submenu-title {
            color: ${siderSelectedColor};
          }
          // 二级区域
          .ant-menu-submenu .ant-menu {
            .ant-menu-item {
              border-radius: 0;
              margin: 0;
              background: ${siderFirstBg};
              width: 100%;
              &.ant-menu-item-active {
                background-color: ${siderFirstBg};
                width: 100%;
              }
            }
            .ant-menu-item-selected {
              background-color: ${siderSelectedBg};
              border-radius: 0;
              width: 100%;
              &:hover {
                width: 100%;
                background-color: ${siderSelectedBg};
              }
            }
            .ant-menu-submenu-title {
              margin: 0;
              &:hover {
                color: ${siderSelectedColor};
              }
            }
          }
        `}
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
