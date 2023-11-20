import { MenuProps } from './index.interface'

import { basicRouterList, authRouterList, whiteRouterList } from './index'
import useUserStore from '@/store/user'

const { permissions } = useUserStore.getState()
const level1Path = new Set()
console.log(333)
const LEVEL = 2 // 侧边栏第几级开始path为children中第一个的path

// 平铺路由 用于路由守卫
const flatRouterList: MenuProps[] = [...basicRouterList, ...whiteRouterList]

const flatRouterFun = (routerList: MenuProps[], parentPath = '') => {
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
    // item.hidden = item.authHidden || item.hidden
    // 把所有的有权限且有组件的子路由放到flatRouterList中
    if (!item.authHidden && item.element) {
      flatRouterList.push(item)
    }
    return item
  })
}

const allRouter = [...basicRouterList, ...authRouterList]
const routerLists = flatRouterFun(allRouter)

// 针对侧边栏所做的处理, 过滤hidden为true的路由且最后一级的path为children中第一个的path
const hiddenRouterList = (routerList: any, level = 1) => {
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
}

const menusRouterList = hiddenRouterList(routerLists)

export { flatRouterList, menusRouterList, level1Path }
