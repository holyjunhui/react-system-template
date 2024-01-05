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
}
