import React from 'react'
import { css } from '@emotion/react'

import { Avatar, Badge, Button, Dropdown, Layout } from 'antd'
import {
  BellOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

import { Link } from 'react-router-dom'
import useUserStore from '@/store/user'

const { Header } = Layout
const marginRight = css`
  margin-right: 15px;
`
function MyHeader() {
  const collapsed = useUserStore((state) => state.collapsed)
  const setCollapsed = useUserStore((state) => state.setCollapsed)

  const colorBgContainer = '#fff'
  const nickname = 'admin3afdafasfasdfgdgdfadfasdfs'
  const handleOnUserMenuClock: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
  }

  const items: MenuProps['items'] = [
    {
      key: 'accountCenter',
      label: (
        <Link to="/system/account/center">
          <UserOutlined style={{ marginRight: 10 }} />
          个人中心
        </Link>
      ),
    },
    {
      type: 'divider',
      key: 'divider',
    },
    {
      key: 'logout',
      label: (
        <div>
          <LogoutOutlined style={{ marginRight: 10 }} />
          退出登录
        </div>
      ),
    },
  ]

  return (
    <Header
      css={css`
        background: ${colorBgContainer};
        padding: 0 10px;
        position: 'sticky';
        top: 0;
        z-index: 1;
        width: 100%;
        display: flex;
        align-items: center;
      `}
      style={{}}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        `}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            background: colorBgContainer,
          }}
        />
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              margin-right: 20px;
            `}
          >
            <Badge status="processing" count={2} css={marginRight}>
              <Link to="/system/activeAlarm">
                <BellOutlined
                  css={css`
                    font-size: 22px;
                  `}
                />
              </Link>
            </Badge>
            <Dropdown
              css={css`
                cursor: pointer;
                display: block;
                width: 120px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `}
              menu={{ items, onClick: handleOnUserMenuClock }}
              arrow
            >
              <span title={nickname}>
                <Avatar
                  css={marginRight}
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
                {nickname}
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default MyHeader
