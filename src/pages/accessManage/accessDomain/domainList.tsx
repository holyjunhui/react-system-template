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
import DomainModal from './domainModal.tsx'
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

const DomainList = () => {
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
      title: '网站信息',
      dataIndex: 'instance',
      key: 'instance',
      render: () => {
        return (
          <div>
            <p>域名：bbb.wei.com</p>
            <p>名称： 测试1</p>
            <p>CNAME：FFFFFFFFFF</p>
            <p>正常业务带宽：10M</p>
          </div>
        )
      },
    },
    {
      title: '服务器地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '关联高防IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '协议类型',
      dataIndex: 'protocol',
      key: 'protocol',
      render: () => {
        return (
          <div>
            <p>HTTP端口：80</p>
            <p>HTTPS端口：443</p>
            <p>OCSP：启用</p>
          </div>
        )
      },
    },
    {
      title: '最后更新时间',
      dataIndex: 'date',
      key: 'date',
      render: () => {
        return (
          <div>
            <p>2021-01-01 12:00:00</p>
          </div>
        )
      },
    },
    {
      title: '证书情况',
      dataIndex: 'certStatus',
      key: 'certStatus',
      render: () => {
        return <div>HTTPS证书：正常</div>
      },
    },
    {
      title: 'cc防护情况',
      dataIndex: 'ccStatus',
      key: 'ccStatus',
      render: () => {
        return <div>正常</div>
      },
    },

    {
      title: '实例状态',
      dataIndex: 'status',
      key: 'status',
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
            添加网站
          </Button>
        </div>
        <Table loading={loading} columns={columns} dataSource={dataSource} size="middle" />
      </div>
      <DomainModal
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

export default DomainList
