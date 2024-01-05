import React, { useState, useMemo } from 'react'
import { Button, Form, Input, message } from 'antd'
// import { useTranslation } from 'react-i18next'

// import { hasAuth } from '@/utils/permission'
import logout from '@/utils/logout'
import { User } from '@/newApi/User'

const tailLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 4 },
  },
}
const ResetPassword = () => {
  const [form] = Form.useForm()
  const UserApi = useMemo(() => new User(), [])

  // const { t } = useTranslation()

  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    logout()
  }

  const onFinish = (values: any) => {
    setLoading(true)
    // UserApi.passwordUpdate(values)
    //   .then(() => {
    //     setLoading(false)
    //     message.success('修改成功')
    //     handleLogout()
    //   })
    //   .catch(() => {
    //     setLoading(false)
    //   })
  }

  return (
    <>
      <h2>修改密码</h2>
      <Form
        style={{ maxWidth: 400 }}
        labelCol={{ span: 6 }}
        form={form}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        initialValues={{
          old_password: '',
          newPassword: '',
          againPassword: '',
        }}
      >
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
          <Input.Password autoComplete="old-password" placeholder="请输入原密码" allowClear />
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
          <Input.Password autoComplete="new-password" placeholder="请输入新密码" allowClear />
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
            placeholder="请再次输入新密码"
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            // disabled={!hasAuth('system.system_user.center.write')}
            loading={loading}
            htmlType="submit"
          >
            保存
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ResetPassword
