import React, { useCallback, useEffect, useMemo } from 'react'
import { Breadcrumb, Layout } from 'antd'
import { css } from '@emotion/react'
import lodash from 'lodash'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Sider from './Sider'
import AuthRoute from '../router/authRoute'
// import { flatRouterList } from '../router/config'
import { basicRouterList, authRouterList, whiteRouterList } from '@/router/index'
import { MenuProps } from '@/router/index.interface'
import useUserStore from '@/store/user'

const Index = () => {
  const location = useLocation()
  const flatRouterList: MenuProps[] = useMemo(() => [...basicRouterList, ...whiteRouterList], [])

  const collapsed = useUserStore((state) => state.collapsed)
  const permissions = useUserStore((state) => state.permissions)
  const setAuthRouters = useUserStore((state) => state.setAuthRouters)
  const [routerLists, setRouterLists] = React.useState<MenuProps[]>([])

  /**
   * 递归处理路由
   * @param routerList 路由列表

   * 2. 计算authHidden，父路由的authHidden为子路由authHidden的与运算
   * 3. 计算hidden，如果authHidden为true, 则该菜单不显示（为了容错处理）
   * 4. 把所有的有权限且有组件的子路由放到flatRouterList中，用于渲染路由，根据permissions动态渲染路由
   */
  const flatRouterFun = useCallback(
    (routerList: MenuProps[], parentTitle = '') => {
      // authHidden为计算所得，外层的authHdden为子路由的authHidden的与运算
      return routerList.map((item) => {
        const { path, auth, children, title } = item
        const breadcrumb = parentTitle ? `${parentTitle} | ${title}` : title
        item.breadcrumb = breadcrumb

        if (children) {
          item.children = flatRouterFun(children, breadcrumb)
          // 父节点的authHidden为子节点的authHidden的与运算
          item.authHidden = children.every((child) => child.authHidden)
        }
        if (item.auth === 'allAuth') {
          item.authHidden = false
        }

        item.key = path
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

  const makeBread = useCallback(() => {
    const pathname = location?.pathname
    const breadcrumbItem = flatRouterList.find((item: any) => item?.path === pathname)
    const breadMap = breadcrumbItem?.breadcrumb?.split('|') || []
    return breadMap.map((item: string) => ({ title: item }))
  }, [flatRouterList, location?.pathname])

  useEffect(() => {
    // 重置flatRouterList，否则会重复push
    flatRouterList.length = 0
    flatRouterList.push(...basicRouterList, ...whiteRouterList)
    const allRouter = [...authRouterList]
    const newFilterMenu = lodash.cloneDeep(allRouter)

    const routerLists = flatRouterFun(newFilterMenu)
    setAuthRouters(flatRouterList)

    setRouterLists(routerLists)
  }, [flatRouterFun, flatRouterList, setAuthRouters])

  return (
    <Layout>
      {/* 侧边栏 */}
      <Sider routerLists={routerLists} />

      <Layout.Content
        css={css`
          position: relative;
          margin-left: ${collapsed ? '80px' : '200px'};
          flex: auto;
          height: 100vh;

          transition: all 0.2s;
        `}
      >
        <Header />

        {makeBread().length > 0 && (
          <div
            css={css`
              background: #fff;
              padding: 5px 20px;
              position: relative;
              z-index: 99;
              width: 100%;
              color: #7b869e;
              font-size: 14px;
              border-top: 1px solid #ebedf0;
            `}
          >
            <Breadcrumb
              css={css`
                margin-bottom: 0;
              `}
              items={makeBread()}
            />
          </div>
        )}

        <div
          css={css`
            background: #fff;
            margin: 20px;
            padding: 14px 20px;
          `}
        >
          <AuthRoute authRouterList={flatRouterList} />
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default Index
