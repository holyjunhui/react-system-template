import userStore from '@/store/user'

const hasAuth = (auth?: string | undefined, type = 'write') => {
  const { permissions, authRouters } = userStore.getState()

  if (auth) {
    return auth === 'allAuth' ? true : permissions.includes(auth)
  }

  const { pathname } = window.location

  console.log('pathname:', pathname)
  // 获取当前路由的权限
  const permission = authRouters.find((item) => item.path === pathname)?.auth
  const hasPermission = permissions.includes(`${permission}.${type}`)
  console.log('hasPermission:', hasPermission)
  return hasPermission
}

export default hasAuth
