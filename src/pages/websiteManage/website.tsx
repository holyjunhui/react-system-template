import React, { useState } from 'react'
import { Button, Input, Space, Switch, Table, Badge, Dropdown, Typography } from 'antd'
import { css } from '@emotion/react'
import { CaretDownOutlined, CaretRightOutlined, DownOutlined } from '@ant-design/icons'
import type { TableColumnsType } from 'antd'
import ActionButton from '@/components/ActionButton/actionButton'

const { Paragraph } = Typography

interface DataType {
  key: React.Key
  name: string
  upgradeNum: number
}

interface ExpandedDataType {
  key: React.Key
  name: string
  keyText: string
}

const Website = () => {
  const [loading, setLoading] = useState(false)
  const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
  ]
  const data: DataType[] = []
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screen',
      upgradeNum: 500,
    })
  }

  const columns: TableColumnsType<DataType> = [
    { title: '域名', dataIndex: 'name', key: 'name' },
    {
      title: '网站数',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum',
    },
    {
      title: '操作',
      key: 'operation',
      render: () => {
        return <Button type="link">展开</Button>
      },
    },
  ]
  const expandedRowRender = () => {
    const actionButton = (record: any) => [
      {
        key: '1',
        label: 'Action 1',
        disabled: record?.key === '1',
        method: () => {
          console.log('111', record)
        },
      },
      {
        key: '2',
        label: 'Action 2',
        method: () => {
          console.log('222')
        },
      },
    ]

    const columns: TableColumnsType<ExpandedDataType> = [
      { title: '网站', dataIndex: 'name', key: 'name' },
      {
        title: '部署码（KEY）',
        key: 'keyText',
        render: (record: { keyText: string }, text) => {
          return <Paragraph copyable>{record?.keyText}</Paragraph>
        },
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (_, record) => (
          <Space size="middle">
            <ActionButton actions={actionButton(record)} />
          </Space>
        ),
      },
    ]

    const renderData = []
    for (let i = 0; i < 3; ++i) {
      renderData.push({
        key: i.toString(),
        name: 'This is production name',
        keyText: 'Upgraded: 56',
      })
    }
    return <Table columns={columns} dataSource={renderData} pagination={false} />
  }

  return (
    <div>
      <div
        className="whiteBg"
        css={css(`
          display: flex;
        `)}
      >
        <Input
          css={css(`
          width: 264px;
        `)}
          placeholder="请输入搜索关键字"
        />
        <Button
          type="primary"
          css={css(`
        margin: 0 8px 0 24px;
        `)}
        >
          搜索
        </Button>
        <Button>重置</Button>
      </div>
      <div
        className="whiteBg"
        css={css(`
      margin-top: 24px;
      `)}
      >
        <Table
          loading={loading}
          columns={columns}
          expandable={{
            expandedRowRender,
            expandRowByClick: true,
            expandIcon: ({ expanded, onExpand, record }) => {
              return expanded ? (
                <CaretDownOutlined onClick={(e) => onExpand(record, e)} />
              ) : (
                <CaretRightOutlined onClick={(e) => onExpand(record, e)} />
              )
            },
          }}
          dataSource={data}
          size="middle"
        />
      </div>
    </div>
  )
}

export default Website
