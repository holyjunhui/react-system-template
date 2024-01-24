import { lazy } from 'react'

const Home = lazy(() => import('@/pages/home/home'))
const AccountList = lazy(() => import('@/pages/accountManage/accountList/accountList'))
const AccountCenter = lazy(() => import('@/pages/accountManage/accountCenter'))
const Password = lazy(() => import('@/pages/accountManage/password/password'))
const InstanceManage = lazy(() => import('@/pages/instanceManage/instanceManage'))

const AuditCenter = lazy(() => import('@/pages/auditCenter/auditCenter'))
const OrderManage = lazy(() => import('@/pages/orderManage/orderManage'))

export { Home, AccountList, AccountCenter, Password, AuditCenter, OrderManage, InstanceManage }
