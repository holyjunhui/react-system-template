import { css } from '@emotion/react'
import { Form, Input, Space, Table } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchArea from '@/components/SearchArea/searchArea'
import ActionButton from '@/components/ActionButton/actionButton'

const CertList = () => {
  const location = useLocation()
  const { pathname } = location

  const actionButton = (record: any) => {
    let operation: any[] = []
    const certDetailList = [
      {
        key: 'detail',
        label: '证书详情',
        disabled: record?.key === '1',
        method: () => {
          console.log('111', record)
        },
      },
    ]
    switch (pathname) {
      case '/cert-manage/list':
        operation = [
          ...certDetailList,
          {
            key: 'apply',
            label: '证书部署',
            method: () => {
              console.log('222')
            },
          },
        ]
        break
      case '/cert-manage/down':
        operation = [
          ...certDetailList,
          {
            key: 'download',
            label: '证书下载',
            method: () => {
              console.log('111', record)
            },
          },
        ]
        break
      case '/cert-manage/revoke':
        operation = [
          ...certDetailList,
          {
            key: 'revoke',
            label: '证书吊销',
            method: () => {
              console.log('111', record)
            },
          },
        ]
        break
      default:
        operation = []
    }
    return operation
  }
  const columns = [
    {
      title: '申请账号',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '证书序列号',
      dataIndex: 'certNum',
      key: 'certNum',
    },
    {
      title: '证书生效日期',
      dataIndex: 'effectDate',
      key: 'effectDate',
    },
    {
      title: '证书失效日期',
      dataIndex: 'failureDate',
      key: 'failureDate',
    },
    {
      title: '申请时间',
      dataIndex: 'applyDate',
      key: 'applyDate',
    },
    {
      title: '剩余有效期（天）',
      dataIndex: 'validity',
      key: 'validity',
    },
    {
      title: '证书状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_: any, record: any) => (
        <Space size="middle">
          <ActionButton actions={actionButton(record)} />
        </Space>
      ),
    },
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      certNum: '1234567890',
      effectDate: '2021-01-01',
      failureDate: '2021-01-01',
      applyDate: '2021-01-01',
      validity: '30',
      status: '有效',
      operate: '下载',
    },
    {
      key: '2',
      name: 'Jim Green',
      certNum: '1234567890',
      effectDate: '2021-01-01',
      failureDate: '2021-01-01',
      applyDate: '2021-01-01',
      validity: '30',
      status: '有效',
      operate: '下载',
    },
    {
      key: '3',
      name: 'Joe Black',
      certNum: '1234567890',
      effectDate: '2021-01-01',
      failureDate: '2021-01-01',
      applyDate: '2021-01-01',
      validity: '30',
      status: '有效',
      operate: '下载',
    },
  ]
  return (
    <div>
      <div
        className="whiteBg"
        css={css(`
        padding-bottom:4px;
        `)}
      >
        <SearchArea />
      </div>
      <div
        className="whiteBg"
        css={css(`
      margin-top: 24px;
      `)}
      >
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}
export default CertList
