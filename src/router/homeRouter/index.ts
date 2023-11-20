import { MenuProps } from '../index.interface'
import Home from '../../pages/home/home'

const HomeRouter: MenuProps[] = [
  {
    icon: 'iconfont icon-home',
    title: '首页',
    path: 'home',
    element: Home,
  },
]

export default HomeRouter
