import React from 'react'

import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { css } from '@emotion/react'
import { login, getCaptcha } from '@/api/common'
import useUserStore from '@/store/user'
import { encrypt } from '@/utils/encrypt'

const Login = () => {
  const navigate = useNavigate()
  const fetchUserInfo = useUserStore((state) => state.fetchUserInfo)

  const [captcha, setCaptcha] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const onFinish = async (values: any) => {
    const data = {
      ...values,
      password: encrypt(values.password),
    }

    // 去除用户名所有空格
    data.username = data.username.replace(/\s/g, '')
    setLoading(true)
    try {
      const res: any = await login(data)
      localStorage.setItem('token', res.accessToken)

      // 先行获取，不会出现白屏，后续需要再获取
      res.accessToken && fetchUserInfo()
      // 跳回登录前页面
      setTimeout(() => {
        navigate('/home')
      })
    } catch (e) {
      await fetchCaptcha() // 失败刷新验证码
    } finally {
      setLoading(false)
    }
  }
  const fetchCaptcha = async () => {
    getCaptcha().then((res) => {
      setCaptcha(res as any)
    })
  }

  React.useEffect(() => {
    fetchCaptcha()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        size="large"
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: 300 }}
      >
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[{ required: true, message: '请输入验证码' }]}
              >
                <Input placeholder="请输入验证码" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <img
                onClick={() => fetchCaptcha()}
                src={captcha}
                role="presentation"
                alt="验证码"
                css={css`
                  width: 99%;
                  height: 40.14px;
                  cursor: pointer;
                `}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button
            block
            loading={loading}
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
