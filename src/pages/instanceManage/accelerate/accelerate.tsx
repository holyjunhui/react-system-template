import React, { useCallback, useState } from 'react'
import { Button, Input, Table, Typography } from 'antd'
import { css } from '@emotion/react'
import { PlusSquareOutlined } from '@ant-design/icons'
import type { TableColumnsType } from 'antd'
import InstanceModal from '../components/modal.tsx'
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

const Accelerate = () => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [type, setType] = useState<'add' | 'update' | 'reset'>('add')
  const [data, setData] = useState({})
  const getTable = useCallback(() => {}, [])

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
      title: '实例信息',
      dataIndex: 'instance',
      key: 'instance',
      render: () => {
        return (
          <div>
            <p>实例名称：shduwd</p>
            <p>实例ID:12334</p>
          </div>
        )
      },
    },
    {
      title: '实例规格',
      dataIndex: 'instance',
      key: 'instance',
      render: () => {
        return (
          <div>
            <p>防护套餐：加速线路</p>
            <p>正常业务带宽：10M</p>
          </div>
        )
      },
    },
    {
      title: '独享IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      render: () => {
        return (
          <div>
            <p>购买时间：2021-01-01 12:00:00</p>
            <p>到期时间：2021-01-01 12:00:00</p>
          </div>
        )
      },
    },
    {
      title: '实例配置',
      dataIndex: 'config',
      key: 'config',
      render: () => {
        return (
          <div>
            <p>防护端口数：0个</p>
            <p>
              防护域名数：0个
              <Button icon={<PlusSquareOutlined />} type="link" />
            </p>
            <p>
              防护站点数：0个
              <Button icon={<PlusSquareOutlined />} type="link" />
            </p>
          </div>
        )
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
      render: () => {
        return <Button type="link">配置加速</Button>
      },
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
            新增实例
          </Button>
        </div>
        <Table loading={loading} columns={columns} dataSource={dataSource} size="middle" />
      </div>
      <InstanceModal
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
    </div>
  )
}

export default Accelerate
