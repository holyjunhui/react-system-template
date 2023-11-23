/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { getUserInfo } from '@/api/common'
import { MenuProps } from '@/router/index.interface'

type UserState = {
  nickname: string
  avatar: string
  token: string
  userInfo: {
    [key: string]: string
  }
  permissions: string[]
  authRouters: MenuProps[]
  collapsed: boolean
  setToken: (token: string) => void
  setPermissions: (permissions: string[]) => void
  setCollapsed: (collapsed: boolean) => void
  setAuthRouters: (authRouters: MenuProps[]) => void
  fetchUserInfo: () => void
}

const useUserStore = create<UserState>()(
  persist(
    devtools((set) => ({
      nickname: '',
      avatar: '',
      token: '',
      userInfo: {},
      permissions: [],
      authRouters: [],
      collapsed: false,
      setToken: (token) => set({ token }),
      setPermissions: (permissions) => set({ permissions }),
      setAuthRouters: (authRouters) => set({ authRouters }),
      setCollapsed: (collapsed) => set({ collapsed }),
      fetchUserInfo: () => {
        return getUserInfo().then((res: any) => {
          const { nickname, accessToken, permissions } = res
          const popPermissions = permissions.map((item: string) => {
            const arr = item.split('.')
            if (arr[arr.length - 1] === 'write' || arr[arr.length - 1] === 'read') {
              arr.pop()
            }
            return arr.join('.')
          })
          const allPermissions = [...new Set([...popPermissions, ...permissions])]

          set({
            nickname,
            token: accessToken,
            permissions: allPermissions,
            userInfo: res,
          })
          return res
        })
      },
    })),
    {
      name: 'userStorage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useUserStore
