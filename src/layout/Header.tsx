import React from 'react'
import { css } from '@emotion/react'

import { Avatar, Button, Dropdown, Layout } from 'antd'
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

import { Link } from 'react-router-dom'
import { User } from '@/newApi/User'
import useUserStore from '@/store/user'

const { Header } = Layout
const marginRight = css`
  margin-right: 15px;
`
function MyHeader() {
  const UserApi = React.useMemo(() => new User(), [])

  const collapsed = useUserStore((state) => state.collapsed)
  const setCollapsed = useUserStore((state) => state.setCollapsed)
  const name = useUserStore((state) => state.name)

  const colorBgContainer = '#fff'
  const handleOnUserMenuClock: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      UserApi.logoutCreate().then(() => {
        localStorage.removeItem('token')
        window.location.href = '/login'
      })
    }
  }

  const items: MenuProps['items'] = [
    {
      key: 'accountCenter',
      label: (
        <Link to="/account/center">
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
        z-index: 1;
        height: 56px;
        line-height: 56px;
        width: 100%;
      `}
    >
      <div
        css={css`
          height: 56px;
          line-height: 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        `}
      >
        <Button
          type="text"
          size="small"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '20px',
            width: 56,
            height: 56,
            background: colorBgContainer,
          }}
          css={css`
            &.ant-btn .ant-btn-icon {
              .anticon {
                font-size: 20px;
              }
            }
          `}
        />

        <div
          css={css`
            display: flex;
            align-items: center;
            margin-right: 20px;
            justify-content: flex-end;
          `}
        >
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
            <span title={name}>
              <Avatar
                css={marginRight}
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
              {name}
            </span>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default MyHeader
