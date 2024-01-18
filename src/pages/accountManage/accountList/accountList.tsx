import React, { useCallback, useState, useMemo, useEffect } from 'react'
import { Table, Button, Select, Form, Input, Row, Col, App, Space } from 'antd'

import { DownOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import { Accounts } from '@/newApi/Accounts'
import AccountModal from './accountModal'
import { INIT_PAGINATION } from '@/utils/commonConst'

// import { Accounts } from '@/newApi/Accounts'
// import utils from '@/utils/utils'
// import meta from '@/utils/meta'
import useGlobalStore from '@/store/user'

const SYSTEMID = 1 // 系统账号id
const AccountList = (): JSX.Element => {
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

  const Navigate = useNavigate()
  const { message, modal } = App.useApp()
  const [form] = Form.useForm()
  const [expand, setExpand] = useState(false)
  const AccountsApi = useMemo(() => new Accounts(), [])
  const setUserInfo = useGlobalStore((state) => state.setUserInfo)
  const [visible, setVisible] = useState<boolean>(false)
  const [type, setType] = useState<'add' | 'update' | 'reset'>('add')
  const InitParams = {
    keyword: '',
  }
  const [data, setData] = useState({})
  const [dataSource, setDataSource] = useState<{ id: number }[]>([])
  const [params, setParams] = useState<{ keyword?: string; enabled?: boolean }>(InitParams)
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState(INIT_PAGINATION)

  const handleExpand = () => {
    setExpand(!expand)
  }
  const getTable = useCallback(() => {
    AccountsApi.accountsList({
      ...params,
      page_number: pagination.page,
      page_size: pagination.pageSize,
    })
      .then((res: any) => {
        setDataSource(res.items)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [AccountsApi, pagination.page, pagination.pageSize, params])
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    })
  }
  // hook
  useEffect(() => {
    getTable()
  }, [getTable])

  const handleDelete = (id?: any) => {
    modal.confirm({
      title: '确认删除',
      content: '删除确认',
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          try {
            await AccountsApi.accountsDelete(id)

            message.success('删除成功')
            getTable()
            resolve()
          } catch {
            reject()
          }
        })
      },
    })
  }

  const handleOperate = (id?: any) => {
    modal.confirm({
      title: '切换账号',
      content: '确认切换',
      onOk: () => {
        return new Promise<void>(async (resolve, reject) => {
          try {
            const res: any = await AccountsApi.impersonateCreate(id)
            localStorage.setItem('token', res.token)
            setUserInfo(res.account)
            useGlobalStore.setState({ name: res?.account?.name })
            message.success('切换成功')
            getTable()
            Navigate('/dashboard')
            resolve()
          } catch {
            reject()
          }
        })
      },
    })
  }

  const columns: any = [
    {
      title: '账户名称',
      dataIndex: 'name',
    },
    {
      title: '登录名',
      dataIndex: 'login',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '账号类型',
      dataIndex: 'type',
    },
    {
      title: '角色',
      dataIndex: 'role',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
    },
    // {
    //   title: '状态',
    //   dataIndex: 'status',
    //   render: (v: string, record: any) => (
    //     // <Switch
    //     //   size="small"
    //     //   title="登录账号不能改变"
    //     //   disabled={userInfo.id === record.id}
    //     //   onChange={(checked) => {
    //     //     AccountsApi.statusUpdate(record?.id, { status: checked ? 'enabled' : 'disabled' }).then(
    //     //       () => {
    //     //         getTable()
    //     //       }
    //     //     )
    //     //   }}
    //     //   checked={v === 'enabled'}
    //     // />
    //   ),
    // },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      // render: (text) => utils.timeFormat(text),
    },
    {
      title: '备注',
      dataIndex: 'comment',
    },
    {
      dataIndex: 'operation',
      title: '操作',
      render: (v: string, record: any) => {
        const isSystem = record?.id === SYSTEMID
        return (
          <div className="operationContainer">
            <Button
              type="link"
              disabled={isSystem}
              onClick={() => {
                setData(record)
                setVisible(true)
                setType('update')
              }}
            >
              修改
            </Button>
            <span className="separatist">|</span>

            <Button disabled={isSystem} type="link" onClick={() => handleDelete(record?.id)}>
              删除
            </Button>
            <span className="separatist">|</span>

            <Button disabled={isSystem} type="link" onClick={() => handleOperate(record?.id)}>
              切换账号
            </Button>
            <span className="separatist">|</span>
            <Button
              onClick={() => {
                setData(record)
                setVisible(true)
                setType('reset')
              }}
              type="link"
            >
              修改密码
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
              startTime: v?.time?.[0]?.format(),
              endTime: v?.time?.[1]?.format(),
            }
            setParams(data)
          }}
        >
          <Row gutter={[16, 0]}>
            <Col xs={12} sm={8} md={6} lg={4} xl={8}>
              <Form.Item label="登录用户名：" name="login">
                <Input placeholder="请输入登录用户名" allowClear />
              </Form.Item>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4} xl={8}>
              <Form.Item label="名称：" name="name">
                <Input placeholder="请输入名称" allowClear />
              </Form.Item>
            </Col>
            {expand && (
              <>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item label="邮箱地址：" name="email">
                    <Input placeholder="请输入邮箱地址" allowClear />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item label="电话号码：" name="phone">
                    <Input placeholder="请输入电话号码" allowClear />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                  <Form.Item name="status" label="状态：">
                    <Select placeholder="请选择状态">
                      <Select.Option value="enabled">启用</Select.Option>
                      <Select.Option value="disabled">禁用</Select.Option>
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
        <div className="searchContainer">
          <div className="buttonsLeft">
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => {
                setType('add')
                setVisible(true)
              }}
            >
              新增
            </Button>
          </div>
        </div>

        <Table
          size="small"
          pagination={{
            ...pagination,

            showSizeChanger: true,
            showTotal: (total) => `共 ${total}条`,
          }}
          onChange={(page: any) => {
            setPagination({
              ...pagination,
              pageSize: page.pageSize,
              page: page.current,
            })
          }}
          columns={columns}
          loading={loading}
          dataSource={dataSource}
          rowKey={(row) => row.id}
        />
      </div>
      <AccountModal
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

export default AccountList
