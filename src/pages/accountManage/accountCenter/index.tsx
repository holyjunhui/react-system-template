import React, { useState } from 'react'
import { Menu } from 'antd'
import { css } from '@emotion/react'
import Basic from './Basic'
import Reset from './Reset'

const Index = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['basic'])
  const [items] = useState([
    {
      label: '基本设置',
      key: 'basic',
    },
    {
      label: '修改密码',
      key: 'reset',
    },
  ])
  return (
    <div
      css={css(`
      display: flex;
      padding: 16px 0;
      background-color: #fff;
    `)}
    >
      <div
        css={css(`
       flex:2;
       border-right: 1px solid #e8e8e8;
      `)}
      >
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          style={{ border: 'none' }}
          onSelect={({ selectedKeys }: any) => setSelectedKeys(selectedKeys)}
          items={items}
        />
      </div>
      <div
        css={css(`
          flex: 7;
          padding: 8px 40px;
      `)}
      >
        {selectedKeys[0] === 'basic' && <Basic />}
        {selectedKeys[0] === 'reset' && <Reset />}
      </div>
    </div>
  )
}

export default Index
