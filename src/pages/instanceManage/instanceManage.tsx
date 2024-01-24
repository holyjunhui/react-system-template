import React, { useCallback, useEffect, useState } from 'react'
import { App, Badge, Button, Col, Form, Input, Row, Select, Space, Table } from 'antd'
import { css } from '@emotion/react'
import type { TableColumnsType } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import InstanceModal from './orderModal.tsx'
import { INIT_PAGINATION } from '@/utils/commonConst'
import ActionButton from '@/components/ActionButton/actionButton'

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

const InstanceManage = () => {
  const InstancesApi = React.useMemo(() => new Instances(), [])
  const MenuApi = React.useMemo(() => new Menu(), [])
  const [form] = Form.useForm()
  const { message, modal } = App.useApp()

  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState<any>({
    page: 1,
    page_size: 10,
  })
  // 使用自定义hooks管理页码信息
  const [pagination, setPagination, setTotal] = useSavePageStatus()
  const [visible, setVisible] = useState<boolean>(false)
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

  const handleDelete = (id?: any) => {
    modal.confirm({
      title: '删除',
      content: '确定删除吗？',
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          try {
            await InstancesApi.instancesDelete(id)

            message.success('删除成功')
            setPagination(pagination, [id])
            getTable()
            resolve()
          } catch {
            reject()
          }
        })
      },
    })
  }

  const actionButton = (record: any) => [
    {
      key: 'update',
      label: '编辑',
      method: () => {
        setVisible(true)
        setType('update')
        setData(record)
      },
    },
    {
      key: 'delete',
      label: '删除',
      method: () => {
        handleDelete(record.id)
      },
    },
  ]

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
            <p>实例ID：{record.code}</p>
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
            {record.spec.edition !== 'jiasu' && (
              <p>功能套餐：{functionMap.get(record?.spec?.function)}</p>
            )}
            {record.spec.edition !== 'jiasu' ? (
              <p>正常业务带宽：{record?.spec?.normal_bandwidth}M</p>
            ) : (
              <p>加速带宽：{record?.spec?.normal_bandwidth}M</p>
            )}
            <p>正常业务QPS：{record?.spec?.normal_qps}</p>
          </div>
        )
      },
    },
    {
      title: '独享IP',
      dataIndex: 'ip',
      key: 'ip',
      render: (_, record) => {
        return (
          <div>
            {record?.instance_info?.eips?.map((item: any, index: number) => (
              <div key={index}>
                <p>{item?.address}</p>
              </div>
            ))}
          </div>
        )
      },
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      render: (_, record) => {
        return (
          <div>
            <p>
              购买时间：{utils.timeFormat(record?.instance_info?.detail?.create_time, 'YYYY-MM-DD')}
            </p>
            <p>到期时间：{utils.timeFormat(record?.instance_info?.detail?.expire_time)}</p>
          </div>
        )
      },
    },
    {
      title: '实例配置',
      dataIndex: 'config',
      key: 'config',
      render: (_, record) => {
        return (
          <div>
            <p>防护端口数：{record?.spec?.port_count}个</p>
            <p>防护域名数：{record?.spec?.domain_count}个</p>
          </div>
        )
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
      render: (_, record) => (
        <Space size="middle">
          <ActionButton actions={actionButton(record)} />
        </Space>
      ),
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
            添加实例
          </Button>
        </div>
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

export default InstanceManage
