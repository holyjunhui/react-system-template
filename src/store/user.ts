/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { User } from '@/newApi/User'
import { MenuProps } from '@/router/index.interface'

type UserState = {
  name: string
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
  setUserInfo: (userInfo: any) => void
  setCollapsed: (collapsed: boolean) => void
  setAuthRouters: (authRouters: MenuProps[]) => void
  fetchUserInfo: () => void
}

const useUserStore = create<UserState>()(
  persist(
    devtools((set) => ({
      name: '',
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
        return new User().profileList().then((res: any) => {
          const { name } = res.account
          // const popPermissions = permissions.map((item: string) => {
          //   const arr = item.split('.')
          //   if (arr[arr.length - 1] === 'write' || arr[arr.length - 1] === 'read') {
          //     arr.pop()
          //   }
          //   return arr.join('.')
          // })
          // const allPermissions = [...new Set([...popPermissions, ...permissions])]

          set({
            name,
            token: res.token,
            userInfo: res.account,
          })
          return res
        })
      },
      setUserInfo: (userInfo) => set({ userInfo }),
    })),
    {
      name: 'userStorage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useUserStore
