import React, { FunctionComponent, useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { css } from '@emotion/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuProps } from '@/router/index.interface'
import hasAuth from '@/utils/permission'

interface MyProps {
  items: MenuProps[]
}

interface RouterItems {
  key: string
  label: string
  children: any
}

const TabsComponent = ({ items }: MyProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [routerItems, setRouterItems] = useState<RouterItems[]>([])
  useEffect(() => {
    const newItems: RouterItems[] = items
      .filter((item) => hasAuth(item.auth))
      .map((item) => {
        return {
          key: item.path,
          label: item.title,
          children: React.createElement(item.element as FunctionComponent),
        }
      })
    console.log('tabs newItems', newItems)

    setRouterItems(newItems)
  }, [items, pathname])

  return (
    <Tabs
      items={routerItems}
      css={css`
        .ant-tabs-tab {
          padding: 8px 0;
        }
      `}
      activeKey={pathname}
      onChange={(key) => navigate(key)}
    />
  )
}

export default TabsComponent
