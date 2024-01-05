import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Form, Input, message } from 'antd'
// import { useTranslation } from 'react-i18next'
import { User } from '@/newApi/User'
// import { HandlerProfileReq } from '@/newApi/data-contracts'

const tailLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 4 },
  },
}
const BasicSetting = () => {
  // const { t } = useTranslation()
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)
  const UserApi = useMemo(() => new User(), [])

  const getProfile = useCallback(() => {
    // UserApi.profileList().then((res: any) => {
    //   form.setFieldsValue(res.account)
    // })
  }, [])

  const onFinish = async (values: any) => {
    setLoading(true)
    const params = { account: { ...values } }
    // UserApi.profileUpdate(params)
    //   .then(() => {
    //     message.success('保存成功')
    //     localStorage.setItem('nickname', values.name)
    //     window.location.reload()
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <>
      <h2>基本设置</h2>
      <Form
        form={form}
        style={{ maxWidth: 400 }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
        initialValues={{
          name: localStorage.getItem('nickname'),
        }}
      >
        <Form.Item label="昵称" name="name">
          <Input placeholder="请输入昵称" allowClear />
        </Form.Item>
        <Form.Item label="邮箱" name="email">
          <Input placeholder="请输入邮箱" allowClear />
        </Form.Item>
        <Form.Item label="手机号" name="phone">
          <Input placeholder="请输入手机号" allowClear />
        </Form.Item>

        <Form.Item>
          <Button type="primary" loading={loading} htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default BasicSetting
