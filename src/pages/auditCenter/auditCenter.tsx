import React, { useCallback, useState } from 'react'
import { Button, Input, Space, Switch, Table, Badge, Dropdown, Typography, App, Form } from 'antd'
import { css } from '@emotion/react'
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DownOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons'
import type { TableColumnsType } from 'antd'
import ActionButton from '@/components/ActionButton/actionButton'
import InstanceModal from './auditCenterModal'
import StatusModal from './statusModal'

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

const AuditCenter = () => {
  const { modal, message } = App.useApp()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [statusVisible, setStatusVisible] = useState<boolean>(false)

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
  const handleUpdateEnabled = () => {
    modal.confirm({
      title: '提示',
      content: '确定要同意开启该实例？',
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          try {
            // await dnsGSLBManageApi.gslbManage.updateWideIpEnabled({
            //   ids,
            //   enabled,
            // })

            message.success('操作成功')
            getTable()
            resolve()
          } catch {
            reject()
          }
        })
      },
    })
  }
  const rejectForm = (
    <Form form={form}>
      <Form.Item
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label="原因"
        name="rejectReason"
        rules={[{ required: true, message: '请输入原因' }]}
      >
        <Input.TextArea placeholder="请输入原因" />
      </Form.Item>
    </Form>
  )
  const handleReject = () => {
    modal.confirm({
      title: '提示',
      width: 500,
      content: rejectForm,
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          const values = await form.validateFields()

          try {
            // await dnsGSLBManageApi.gslbManage.updateWideIpEnabled({
            //   ids,
            //   enabled,
            // })

            message.success('操作成功')
            getTable()
            resolve()
          } catch {
            reject()
          }
        })
      },
    })
  }
  const handleStatus = () => {
    setStatusVisible(true)
  }
  const handleClose = () => {
    modal.confirm({
      title: '提示',
      width: 500,
      content: rejectForm,
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          const values = await form.validateFields()

          try {
            // await dnsGSLBManageApi.gslbManage.updateWideIpEnabled({
            //   ids,
            //   enabled,
            // })

            message.success('操作成功')
            getTable()
            resolve()
          } catch {
            reject()
          }
        })
      },
    })
  }

  const columns: TableColumnsType<DataType> = [
    { title: '实例码', dataIndex: 'code', key: 'code' },
    {
      title: '用户信息',
      dataIndex: 'instance',
      key: 'instance',
      render: () => {
        return (
          <div>
            <p>申请账号：shduwd</p>
            <p>用户名称：12334</p>
          </div>
        )
      },
    },
    {
      title: '高防实例',
      dataIndex: 'instance',
      key: 'instance',
      render: () => {
        return (
          <div>
            <p>防护套餐：专业版</p>
            <p>功能套餐：增强功能</p>
            <p>正常业务QPS：3000</p>
            <p>新建连接数：1000000</p>
            <p>并发连接数：40000000</p>
          </div>
        )
      },
    },

    {
      title: '申请时间',
      dataIndex: 'applyTime',
      key: 'applyTime',
      render: () => {
        return (
          <div>
            <p>2021-01-01 12:00:00</p>
          </div>
        )
      },
    },
    {
      title: '最后操作时间',
      dataIndex: 'operateTime',
      key: 'operateTime',
      render: () => {
        return (
          <div>
            <p>购买时间：2021-01-01 12:00:00</p>
            <p>2021-01-01 12:00:00</p>
          </div>
        )
      },
    },

    {
      title: '当前状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: '操作',
      key: 'operation',
      render: () => {
        return (
          <div>
            <Button type="link" onClick={handleClose}>
              关闭实例
            </Button>
            <Button type="link" onClick={handleStatus}>
              状态追踪
            </Button>
            <Button type="link" onClick={handleUpdateEnabled}>
              同意
            </Button>
            <Button type="link" onClick={handleReject}>
              驳回
            </Button>
          </div>
        )
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
      <StatusModal
        visible={statusVisible}
        data={data}
        type={type}
        ok={() => {
          getTable()
          setStatusVisible(false)
        }}
        cancel={() => {
          setStatusVisible(false)
        }}
      />
    </div>
  )
}

export default AuditCenter
