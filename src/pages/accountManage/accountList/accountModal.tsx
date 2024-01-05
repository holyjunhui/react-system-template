import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { Modal, Form, Input, Select, Radio, message, Spin, App } from 'antd'
// import { useTranslation } from 'react-i18next'

// import { Data } from '../accountManage.store'
// import utils from '@/utils/utils'
// import { Accounts } from '@/newApi/Accounts'

// import meta from '@/utils/meta'

interface IProps {
  data: any
  visible: boolean
  type: 'add' | 'update' | 'reset'
  ok: () => void
  cancel: () => void
}
const AccountManage = ({ data, type, ok, visible, cancel }: IProps): JSX.Element => {
  // const AccountsApi = useMemo(() => new Accounts(), [])

  // const { t } = useTranslation()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSpin, setIsSpin] = useState<boolean>(type === 'update')

  const validator = useCallback(
    () => ({
      validator(rule: any, value: any) {
        const password = form.getFieldValue('password')
        if (password !== value) {
          return Promise.reject('两次密码输入不一致，请重新输入')
        }
        return Promise.resolve()
      },
    }),
    [form]
  )

  // useEffect(() => {
  //   if (type === 'update') {
  //     AccountsApi.accountsDetail(data.id).then((res) => {
  //       form.setFieldsValue(res)
  //       setIsSpin(false)
  //     })
  //   }
  // }, [AccountsApi, data, form, type])
  return (
    <Modal
      title={type === 'add' ? '新增' : '修改'}
      maskClosable={false}
      onOk={() => {
        form.submit()
      }}
      onCancel={cancel}
      open={visible}
      confirmLoading={loading}
      width={550}
    >
      {isSpin ? (
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          <Spin />
        </div>
      ) : (
        <Form
          layout="vertical"
          form={form}
          labelAlign="right"
          style={{ maxHeight: 600, overflowX: 'hidden', overflowY: 'auto' }}
          initialValues={{
            status: 'enabled',
          }}
          onFinish={(v: any) => {
            setLoading(true)
            if (type === 'add') {
              const data = { ...v }

              // AccountsApi.accountsCreate(data)
              //   .then(() => {
              //     setLoading(false)
              //     message.success('添加成功')
              //     ok()
              //   })
              //   .catch(() => {
              //     setLoading(false)
              //   })
            }
            if (type === 'update') {
              const formData = { ...v }

              // AccountsApi.accountsUpdate(data.id, formData)
              //   .then(() => {
              //     setLoading(false)
              //     message.success('修改成功')
              //     ok()
              //   })
              //   .catch(() => {
              //     setLoading(false)
              //   })
            }
            if (type === 'reset') {
              const formData = { ...v }
              // AccountsApi.passwordUpdate(data.id, formData)
              //   .then(() => {
              //     setLoading(false)
              //     message.success('修改成功')
              //     ok()
              //     // logout()
              //   })
              //   .catch(() => {
              //     setLoading(false)
              //   })
            }
          }}
        >
          {(type === 'add' || type === 'update') && (
            <>
              <Form.Item
                label="账户名称"
                name="name"
                rules={[
                  {
                    required: false,
                    validator: (_, v) => {
                      // maxLength: 128 minLength: 5
                      // if (!v) return Promise.reject('请输入账户名称')

                      if (v?.length < 5) return Promise.reject('账户名称最小长度为5')
                      if (v?.length > 128) return Promise.reject('账户名称最大长度为128')
                      return Promise.resolve()
                    },
                  },
                ]}
              >
                <Input placeholder="请输入账号名称" allowClear />
              </Form.Item>
              <Form.Item
                label="登录用户名"
                name="login"
                rules={[
                  {
                    required: true,
                    message: '请输入登录用户名',
                  },
                  {
                    // ...utils.checkNameChinese(),
                  },
                ]}
              >
                <Input placeholder="请输入登录用户名" disabled={type === 'update'} allowClear />
              </Form.Item>
              <Form.Item
                label="邮箱"
                name="email"
                rules={[
                  {
                    required: true,
                    validator: (_, v) => {
                      if (!v) return Promise.reject('请输入邮箱')

                      // if (utils.checkEmail(v)) {
                      //   return Promise.resolve()
                      // }
                      return Promise.reject('邮箱格式不正确')
                    },
                  },
                ]}
              >
                <Input placeholder="请输入邮箱" allowClear />
              </Form.Item>
              <Form.Item
                label="手机号码"
                name="phone"
                rules={[
                  {
                    required: false,
                    validator: (_, v) => {
                      if (!v) return Promise.resolve()

                      // if (utils.checkPhone(v)) {
                      //   return Promise.resolve()
                      // }
                      return Promise.reject('手机号码格式不正确')
                    },
                  },
                ]}
              >
                <Input placeholder="请输入手机号码" allowClear />
              </Form.Item>

              {type === 'add' && (
                <>
                  <Form.Item
                    label="密码"
                    name="password"
                    tooltip="密码包含大小写字母，数字和特殊符号组成"
                    rules={[
                      {
                        required: true,
                        validator: (_, v) => {
                          if (!v) return Promise.reject('请输入密码')

                          if (!v || v?.length >= 6) {
                            return Promise.resolve()
                          }
                          return Promise.reject('密码长度不小于6位')
                        },
                      },
                    ]}
                  >
                    <Input.Password
                      autoComplete="new-password"
                      placeholder="请输入密码"
                      allowClear
                    />
                  </Form.Item>

                  <Form.Item
                    label="确认密码"
                    name="confirmPassword"
                    validateFirst
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: '请输入确认密码',
                      },
                      () => validator(),
                    ]}
                  >
                    <Input.Password placeholder="请输入确认密码" allowClear />
                  </Form.Item>
                </>
              )}

              <Form.Item
                label="角色"
                name="role"
                rules={[
                  {
                    required: false,
                    message: '请选择角色',
                  },
                ]}
              >
                <Select allowClear placeholder="请选择角色">
                  {/* {meta.roleList.map((item: any) => (
                    <Select.Option key={item.key} value={item.key}>
                      {item.name}
                    </Select.Option>
                  ))} */}
                </Select>
              </Form.Item>
              <Form.Item
                label="账号类型"
                name="type"
                rules={[
                  {
                    required: true,
                    message: '请选择账号类型',
                  },
                ]}
              >
                <Select
                  allowClear
                  disabled={type === 'update'}
                  placeholder="请选择账号类型"
                  onChange={() => {
                    form.setFieldsValue({
                      channel_id: null,
                      customer_id: null,
                    })
                  }}
                >
                  <Select.Option value="channel">渠道商</Select.Option>
                  <Select.Option value="customer">客户账号</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name="status" label="状态：">
                {/* enabled和disabled */}
                <Radio.Group>
                  <Radio value="enabled">启用</Radio>
                  <Radio value="disabled">禁用</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="备注信息" name="comment">
                <Input.TextArea rows={4} placeholder="请输入备注信息" maxLength={255} />
              </Form.Item>
            </>
          )}
          {type === 'reset' && (
            <>
              <Form.Item
                label="原密码"
                name="old_password"
                tooltip="密码包含大小写字母，数字和特殊符号组成"
                rules={[
                  {
                    required: true,
                    validator: (_, v) => {
                      if (!v) return Promise.reject('请输入密码')

                      if (v?.length >= 6) {
                        return Promise.resolve()
                      }
                      return Promise.reject('密码长度不小于6位')
                    },
                  },
                ]}
              >
                <Input.Password autoComplete="old-password" placeholder="请输入密码" allowClear />
              </Form.Item>

              <Form.Item
                label="新密码"
                name="new_password"
                tooltip="密码包含大小写字母，数字和特殊符号组成"
                rules={[
                  {
                    required: true,
                    validator: (_, v) => {
                      if (!v) return Promise.reject('请输入密码')

                      if (v?.length >= 6) {
                        return Promise.resolve()
                      }
                      return Promise.reject('密码长度不小于6位')
                    },
                  },
                ]}
              >
                <Input.Password autoComplete="new-password" placeholder="请输入密码" allowClear />
              </Form.Item>

              <Form.Item
                label="确认密码"
                name="confirmPassword"
                validateFirst
                dependencies={['new_password']}
                rules={[
                  {
                    required: true,
                    validator: (rule: any, value: any) => {
                      const password = form.getFieldValue('new_password')
                      if (password !== value) {
                        return Promise.reject('两次密码输入不一致，请重新输入')
                      }
                      return Promise.resolve()
                    },
                  },
                ]}
              >
                <Input.Password
                  autoComplete="confirmPassword"
                  placeholder="请输入确认密码"
                  allowClear
                />
              </Form.Item>
            </>
          )}
        </Form>
      )}
    </Modal>
  )
}

export default AccountManage
