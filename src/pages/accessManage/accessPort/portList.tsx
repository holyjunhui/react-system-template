import React, { useCallback, useState } from 'react'
import { Button, Input, Space, Switch, Table, Badge, Dropdown, Typography } from 'antd'
import { css } from '@emotion/react'
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DownOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons'
import type { TableColumnsType } from 'antd'
import PortModal from './portModal.tsx'
import ActionButton from '@/components/ActionButton/actionButton'
import SourceModal from '../components/sourceModal.tsx'

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

const PortList = () => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [sourceVisible, setSourceVisible] = useState<boolean>(false)

  const [type, setType] = useState<'add' | 'update' | 'reset'>('add')
  const [data, setData] = useState({})
  const getTable = useCallback(() => {}, [])

  const actionButton = (record: any) => [
    {
      key: '1',
      label: '编辑',
      disabled: record?.key === '1',
      method: () => {
        console.log('111', record)
      },
    },
    {
      key: '2',
      label: '删除',
      method: () => {
        console.log('222')
      },
    },
    {
      key: '3',
      label: '回源设置',
      method: () => {
        console.log('222')
        setSourceVisible(true)
        setData(record)
        setType('update')
      },
    },
  ]
  const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
  ]
  const dataSource: DataType[] = []
  for (let i = 0; i < 3; ++i) {
    dataSource.push({
      key: i.toString(),
      name: 'Screen',
      upgradeNum: 500,
    })
  }

  const columns: TableColumnsType<DataType> = [
    { title: '实例码', dataIndex: 'code', key: 'code' },
    {
      title: '实例情况',
      dataIndex: 'instance',
      key: 'instance',
      render: () => {
        return (
          <div>
            <p>实例名称：shduwd</p>
            <p>实例ID：12334</p>
            <p>实例类型：（新BGP）DDos高防</p>
          </div>
        )
      },
    },
    {
      title: '转发协议',
      dataIndex: 'protocol',
      key: 'protocol',
    },
    {
      title: '转发端口',
      dataIndex: 'transPort',
      key: 'transPort',
    },
    {
      title: '源站端口',
      dataIndex: 'sourcePort',
      key: 'sourcePort',
    },
    {
      title: '回源转发模式',
      dataIndex: 'sourcePort',
      key: 'sourcePort',
    },
    {
      title: '源站IP',
      dataIndex: 'sourceIP',
      key: 'sourceIP',
    },
    {
      title: '会话保持',
      dataIndex: 'keep',
      key: 'keep',
    },
    {
      title: '健康检查',
      dataIndex: 'health',
      key: 'health',
    },
    {
      title: 'DDos防护策略',
      dataIndex: 'ddos',
      key: 'ddos',
    },
    {
      title: '操作',
      key: 'operation',
      render: (_, record) => (
        <Space size="middle">
          <ActionButton actions={actionButton(record)} />
        </Space>
      ),
    },
  ]

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
        <div
          css={css(`
        margin-bottom: 12px;`)}
        >
          <Button
            type="primary"
            onClick={() => {
              setVisible(true)
              setType('add')
              setData({})
            }}
          >
            添加端口
          </Button>
        </div>
        <Table loading={loading} columns={columns} dataSource={dataSource} size="middle" />
      </div>
      <PortModal
        visible={visible}
        data={data}
        type={type}
        ok={() => {
          getTable()
          setVisible(false)
        }}
        cancel={() => {
          setVisible(false)
        }}
      />
      <SourceModal
        visible={sourceVisible}
        data={data}
        type={type}
        ok={() => {
          getTable()
          setVisible(false)
        }}
        cancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default PortList
