import React, { useCallback, useEffect, useMemo } from 'react'
import { Layout } from 'antd'
import { css } from '@emotion/react'
import lodash from 'lodash'
import Header from './Header'
import Sider from './Sider'
import AuthRoute from '../router/authRoute'
// import { flatRouterList } from '../router/config'
import { basicRouterList, authRouterList, whiteRouterList } from '@/router/index'
import { MenuProps } from '@/router/index.interface'
import useUserStore from '@/store/user'

const Index = () => {
  const flatRouterList: MenuProps[] = useMemo(() => [...basicRouterList, ...whiteRouterList], [])

  const collapsed = useUserStore((state) => state.collapsed)
  const permissions = useUserStore((state) => state.permissions)
  const [routerLists, setRouterLists] = React.useState<MenuProps[]>([])

  /**
   * 递归处理路由
   * @param routerList 路由列表
   * @param parentPath 父路由path
   * 1. 重写path，子路由的path为父路由path + 子路由path
   * 2. 计算authHidden，父路由的authHidden为子路由authHidden的与运算
   * 3. 计算hidden，如果authHidden为true, 则该菜单不显示（为了容错处理）
   * 4. 把所有的有权限且有组件的子路由放到flatRouterList中，用于渲染路由，根据permissions动态渲染路由
   */
  const flatRouterFun = useCallback(
    (routerList: MenuProps[], parentPath = '') => {
      // authHidden为计算所得，外层的authHdden为子路由的authHidden的与运算
      return routerList.map((item) => {
        const { path, auth, children } = item
        const currentPath = `${parentPath}/${path}`

        if (children) {
          item.children = flatRouterFun(children, currentPath)
          // 父节点的authHidden为子节点的authHidden的与运算
          item.authHidden = children.every((child) => child.authHidden)
        }
        if (item.auth === 'allAuth') {
          item.authHidden = false
        }
        // 重写path，子路由的path为父路由path + 子路由path
        item.path = currentPath
        item.hidden = item.authHidden || item.hidden
        // 子节点处理, 如果authHidden已经是boolean类型，说明是子路由已经计算过, 不需要再计算
        item.authHidden =
          typeof item.authHidden === 'boolean'
            ? item.authHidden
            : !item.children && !permissions.includes(auth as string)
        // 如果子节点authHidden为true, 且没有子节点, 则该菜单不显示
        item.hidden = item.authHidden || item.hidden
        // 把所有的有权限且有组件的子路由放到flatRouterList中
        if (!item.authHidden && item.element) {
          flatRouterList.push(item)
        }
        return item
      })
    },
    [flatRouterList, permissions]
  )

  useEffect(() => {
    // 重置flatRouterList，否则会重复push
    flatRouterList.length = 0
    flatRouterList.push(...basicRouterList, ...whiteRouterList)
    const allRouter = [...authRouterList]
    const newFilterMenu = lodash.cloneDeep(allRouter)

    const routerLists = flatRouterFun(newFilterMenu)
    setRouterLists(routerLists)
  }, [flatRouterFun, flatRouterList])

  return (
    <Layout>
      {/* 侧边栏占位 */}
      <div
        css={css`
          width: ${collapsed ? '80px' : '200px'};
          height: 100vh;
          overflow: hidden;
          flex: 0 0 ${collapsed ? '80px' : '200px'};
          transition: all 0.2s;
        `}
      />
      {/* 侧边栏 */}
      <Sider routerLists={routerLists} />
      <Layout>
        <Header />
        <Layout.Content
          style={{
            margin: '24px 20px',
            minHeight: 280,
            // background: 'red',
          }}
        >
          <div
            css={css`
              background: #fff;
              padding: 14px 20px;
            `}
          >
            <AuthRoute authRouterList={flatRouterList} />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default Index
