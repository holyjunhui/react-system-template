import { lazy } from 'react'

const Website = lazy(() => import('@/pages/websiteManage/website'))
const Home = lazy(() => import('@/pages/home/home'))
const CertList = lazy(() => import('@/pages/certManage/certList/certList'))
const CertApply = lazy(() => import('@/pages/certManage/certApply/certApply'))
const CertDetail = lazy(() => import('@/pages/certManage/certDetail/certDetail'))
const CertRevoke = lazy(() => import('@/pages/certManage/certDetail/certRevoke'))
const CertDown = lazy(() => import('@/pages/certManage/certDetail/certDown'))
const AccountList = lazy(() => import('@/pages/accountManage/accountList/accountList'))
const AccountCenter = lazy(() => import('@/pages/accountManage/accountCenter'))
const Password = lazy(() => import('@/pages/accountManage/password/password'))

const DDosManage = lazy(() => import('@/pages/instanceManage/DDosManage/DDosManage'))
const Accelerate = lazy(() => import('@/pages/instanceManage/accelerate/accelerate'))
const AuditCenter = lazy(() => import('@/pages/auditCenter/auditCenter'))
const OrderManage = lazy(() => import('@/pages/orderManage/orderManage'))

const AccessDomain = lazy(() => import('@/pages/accessManage/accessDomain/domainList'))
const AccessPort = lazy(() => import('@/pages/accessManage/accessPort/portList'))
export {
  Website,
  Home,
  CertList,
  CertDetail,
  CertDown,
  CertApply,
  AccountList,
  AccountCenter,
  Password,
  CertRevoke,
  DDosManage,
  Accelerate,
  AuditCenter,
  OrderManage,
  AccessDomain,
  AccessPort,
}
