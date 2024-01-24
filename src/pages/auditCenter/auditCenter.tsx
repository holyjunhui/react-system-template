import React, { useCallback, useEffect, useState } from 'react'
import { Badge, Button, Col, Form, Input, Row, Select, App, Space, Table } from 'antd'
import { css } from '@emotion/react'
import type { TableColumnsType } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import StatusModal from './statusModal.tsx'
import AuditCenterModal from './auditCenterModal.tsx'
import { INIT_PAGINATION } from '@/utils/commonConst'

import { Instances } from '@/newApi/Instances'
import { Menu } from '@/newApi/Menu'

import useGetResource from '@/hooks/useGetResource'
import utils from '@/utils/utils.ts'
import useSavePageStatus from '@/hooks/useSavePageStatus'

const btnCss = css(`
                  display:flex;
                  // 左右反转
                  flex-direction: row-reverse;
                  align-items: center;
                  justify-content: space-between;
                  .ant-btn-icon {
                    margin-inline-end:0;
                    margin-inline-start: 8px;
                  }
                `)

const AuditCenter = () => {
  const InstancesApi = React.useMemo(() => new Instances(), [])
  const MenuApi = React.useMemo(() => new Menu(), [])
  const { message, modal } = App.useApp()
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState<any>({
    page: 1,
    page_size: 10,
  })
  // 使用自定义hooks管理页码信息
  const [pagination, setPagination, setTotal] = useSavePageStatus()
  const [visible, setVisible] = useState<boolean>(false)
  const [statusVisible, setStatusVisible] = useState<boolean>(false)
  const [type, setType] = useState<'add' | 'update' | 'reset'>('add')
  const [expand, setExpand] = useState(false)
  const [data, setData] = useState({})

  const [dataSource, setDataSource] = useState<{ id: number }[]>([])
  const { data: instancesList } = useGetResource(MenuApi.instancesList)
  const [total] = useState<number>(0)

  const getTable = useCallback(() => {
    setLoading(true)
    InstancesApi.instancesList({
      page_number: pagination.page,
      page_size: pagination.pageSize,
      ...params,
    })
      .then((res: any) => {
        setDataSource(res.items)
        setTotal(res.total)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [InstancesApi, pagination.page, pagination.pageSize, params, setTotal])

  const handleExpand = () => {
    setExpand(!expand)
  }

  const handleUpdateEnabled = ({ id }: { id: number }) => {
    modal.confirm({
      title: '提示',
      content: rejectForm,
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          const values = await form.validateFields()

          try {
            await InstancesApi.reviewUpdate(id, { ...values, status: 'accepted' })

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
        name="reason"
        rules={[{ required: true, message: '请输入原因' }]}
      >
        <Input.TextArea placeholder="请输入原因" />
      </Form.Item>
    </Form>
  )
  const handleReject = ({ id }: { id: number }) => {
    modal.confirm({
      title: '提示',
      width: 500,
      content: rejectForm,
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          const values = await form.validateFields()

          try {
            await InstancesApi.reviewUpdate(id, { ...values, status: 'rejected' })

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
  const handleStatus = (record: any) => {
    setStatusVisible(true)
    setData(record)
  }
  const handleClose = ({ id }: { id: number }) => {
    modal.confirm({
      title: '提示',
      width: 500,
      content: '确定要关闭该实例',
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          try {
            await InstancesApi.instancesDelete(id)

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
  const onFill = () => {
    form.setFieldsValue({
      name: '',
      instance_id: null,
      code: '',
      status: '',
      edition: '',
      function: '',
      review_status: '',
      search: '',
    })
  }

  const columns: TableColumnsType<any> = [
    { title: '用户名称', dataIndex: 'customer_name', key: 'customer_name' },

    {
      title: '实例信息',
      dataIndex: 'instance',
      key: 'instance',
      render: (_, record) => {
        return (
          <div>
            <p>实例名称：{record.name}</p>
            <p>实例ID:{record.code}</p>
          </div>
        )
      },
    },
    {
      title: '实例规格',
      dataIndex: 'instance',
      key: 'instance',
      render: (_, record) => {
        // baoxian: 保险版
        // wuyou: 无忧版(无限防护)
        // jiasu: 加速线路
        const edition = new Map([
          ['baoxian', '保险版'],
          ['wuyou', '无忧版(无限防护)'],
          ['jiasu', '加速线路'],
        ])
        //         default: 标准功能
        //         enhance: 增强功能
        const functionMap = new Map([
          ['default', '标准功能'],
          ['enhance', '增强功能'],
        ])
        return (
          <div>
            <p>防护套餐：{edition.get(record.spec?.edition)}</p>
            <p>功能套餐：{functionMap.get(record?.spec?.function)}</p>
            <p>正常业务带宽：{record?.spec?.normal_bandwidth}M</p>
            <p>正常业务QPS：{record?.spec?.normal_qps}</p>
          </div>
        )
      },
    },

    {
      title: '申请日期',
      dataIndex: 'date',
      key: 'date',
      render: (_, record) => {
        return utils.timeFormat(record?.instance_info?.detail?.create_time)
      },
    },
    {
      title: '最后更新日期',
      dataIndex: 'date',
      key: 'date',
      render: (_, record) => {
        return utils.timeFormat(record?.instance_info?.detail?.expire_time)
      },
    },

    {
      title: '实例状态',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        // review_status:
        // - pending 待审核
        // - accepted 审核通过
        // - rejected 驳回

        // 如果 review_status = accepted，进一步查看 api_status.result：
        // - success: 创建成功
        // - failed: 创建失败，待重试
        // - abort: 创建失败

        const colorMap = new Map([
          ['pending', 'blue'],
          ['accepted', 'green'],
          ['rejected', 'gold'],
          ['success', 'lime'],
          ['failed', 'magenta'],
          ['abort', 'red'],
        ])
        const textMap = new Map([
          ['pending', '待审核'],
          ['accepted', '审核通过'],
          ['rejected', '驳回'],
          ['success', '创建成功'],
          ['failed', '创建失败，待重试'],
          ['abort', '创建失败'],
        ])
        let color
        let text
        if (record.review_status !== 'accepted') {
          color = colorMap.get(record?.review_status)
          text = textMap.get(record?.review_status)
        } else {
          color = colorMap.get(record?.api_status?.result)
          text = textMap.get(record?.api_status?.result)
        }
        return <Badge color={color} text={text} />
      },
    },
    {
      title: '操作',
      key: 'operation',
      render: (_, record) => {
        return (
          <div>
            <Button type="link" onClick={() => handleUpdateEnabled(record)}>
              同意
            </Button>
            <Button type="link" onClick={() => handleReject(record)}>
              驳回
            </Button>
          </div>
        )
      },
    },
  ]

  useEffect(() => {
    getTable()
  }, [getTable])

  return (
    <div>
      <div
        className="whiteBg"
        css={css(`
        padding-bottom:4px;

        `)}
      >
        <Form
          form={form}
          layout="vertical"
          labelCol={{ span: 20 }}
          wrapperCol={{ span: 22 }}
          onFinish={(v: any) => {
            const data = {
              ...v,
            }
            setParams(data)
            setPagination(INIT_PAGINATION)
          }}
        >
          <Row gutter={[16, 0]}>
            <Col xs={12} sm={8} md={6} lg={4} xl={8}>
              <Form.Item label="名称：" name="name">
                <Input placeholder="请输入名称" />
              </Form.Item>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4} xl={8}>
              <Form.Item label="实例ID：" name="code">
                <Select placeholder="请选择">
                  {instancesList?.map((item: any) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.code}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            {expand && (
              <>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item name="status" label="状态：">
                    <Select placeholder="请选择状态">
                      <Select.Option value="enabled">启用</Select.Option>
                      <Select.Option value="disabled">禁用</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item name="edition" label="实例版本：">
                    <Select placeholder="请选择版本">
                      <Select.Option value="baoxian">保险版</Select.Option>
                      <Select.Option value="wuyou">无忧版</Select.Option>
                      <Select.Option value="jiasu">加速版</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item name="function" label="功能套餐类型：">
                    <Select placeholder="请选择功能">
                      <Select.Option value="default">标准套餐</Select.Option>
                      <Select.Option value="enhance">增强套餐</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item name="review_status" label="审核状态：">
                    <Select placeholder="请选择状态">
                      <Select.Option value="rejected">拒绝</Select.Option>
                      <Select.Option value="pending">审核中</Select.Option>
                      <Select.Option value="accepted">创建中</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item
                    label="关键字："
                    name="search"
                    rules={[
                      {
                        required: false,
                        validator: (_, v) => {
                          if (v && v.length > 64) {
                            return Promise.reject(new Error('长度不能超过64个字符'))
                          }
                          if (v && v.length < 3) {
                            return Promise.reject(new Error('长度不能小于3个字符'))
                          }
                          return Promise.resolve()
                        },
                      },
                    ]}
                  >
                    <Input placeholder="请输入关键字" />
                  </Form.Item>
                </Col>
              </>
            )}
            <Col xs={12} sm={8} md={6} lg={4} xl={8}>
              <Form.Item label=" ">
                <Space>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                  <Button htmlType="button" onClick={onFill}>
                    重置
                  </Button>
                  {expand ? (
                    <Button type="link" icon={<DownOutlined />} css={btnCss} onClick={handleExpand}>
                      收起
                    </Button>
                  ) : (
                    <Button type="link" icon={<UpOutlined />} css={btnCss} onClick={handleExpand}>
                      展开
                    </Button>
                  )}
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
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
          dataSource={dataSource}
          pagination={{
            ...pagination,
            current: pagination.page,
            total,
            showSizeChanger: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
          onChange={(page: any) => {
            setPagination({
              ...pagination,
              pageSize: page.pageSize,
              page: page.current,
            })
          }}
          size="middle"
        />
      </div>
      <StatusModal
        visible={statusVisible}
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
      <AuditCenterModal
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

export default AuditCenter
