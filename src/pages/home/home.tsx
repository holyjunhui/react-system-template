import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Instance from './instance'

const Home = () => {
  const items: TabsProps['items'] = [
    {
      key: 'instance',
      label: '实例',
      children: <Instance />,
    },
    {
      key: 'domain',
      label: 'domain',
      children: 'Content of Tab Pane 2',
    },
  ]
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}

export default Home
