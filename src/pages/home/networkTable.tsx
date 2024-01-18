import React from 'react'
import { Tabs, Table } from 'antd'
import type { TabsProps, TableColumnsType } from 'antd'
import { css } from '@emotion/react'

interface DataType {
  key: React.Key
  event: string
  time: string
  ip: string
  status: string
}

const NetworkTable = () => {
  // const networkColumns:TableColumnsType<DataType> = [

  //   {
  //     title: '攻击目标',
  //     dataIndex: 'target',
  //     key: 'target',
  //   },
  //   {
  //     title: '攻击时间',
  //     dataIndex: 'time',
  //     key: 'time',
  //   },
  // ]
  const columns: TableColumnsType<DataType> = [
    {
      title: '事件类型',
      dataIndex: 'event',
      key: 'event',
    },
    {
      title: '触发时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
  ]
  const data = [
    {
      key: '1',
      event: '攻击事件',
      time: '2021-04-22 11:00:00',
      ip: '192.168.21.181',
      status: '已处理',
    },
    {
      key: '2',
      event: '攻击事件',
      time: '2021-04-22 11:00:00',
      ip: '192.168.21.131',
      status: '已处理',
    },
  ]
  const AllTable = (): JSX.Element => {
    return (
      <div>
        <Table size="small" columns={columns} dataSource={data} pagination={false} />
      </div>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: 'allView',
      label: '网络层攻击事件：0',
      children: <AllTable />,
    },
    {
      key: 'enter',
      label: '规格超限告警：0',
      children: <AllTable />,
    },
    {
      key: 'out',
      label: '目的限速事件：12',
      children: <AllTable />,
    },
  ]
  return (
    <div
      className="whiteBg"
      css={css(`
    height: 386px;
    `)}
    >
      <Tabs items={items} />
    </div>
  )
}

export default NetworkTable
