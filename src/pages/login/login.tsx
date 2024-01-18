import React, { useCallback, useMemo } from 'react'

import { Form, Input, Button, Row, Col, Divider } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import LeftLogo from '@/assets/svg/left_top_logo.svg?react'
import backgroundImage from '@/assets/images/login-back.jpg'

import useUserStore from '@/store/user'
import { User } from '@/newApi/User'

const Login = () => {
  const UserApi = useMemo(() => new User(), [])

  const navigate = useNavigate()
  const fetchUserInfo = useUserStore((state) => state.fetchUserInfo)

  const [loading, setLoading] = React.useState(false)
  const onFinish = async (values: any) => {
    const data = {
      ...values,
      password: values.password,
    }

    // 去除用户名所有空格
    data.login = data.login.replace(/\s/g, '')
    setLoading(true)
    try {
      const res: any = await UserApi.loginCreate(data)
      localStorage.setItem('token', res.token)

      // 先行获取，不会出现白屏，后续需要再获取
      res.token && fetchUserInfo()
      // 跳回登录前页面
      console.log(333)
      setTimeout(() => {
        navigate('/home')
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div
        css={css(`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
        `)}
      >
        <LeftLogo
          css={css(`
        width: 250px;
        margin: 10px 40px;`)}
        />
        <Divider
          css={css(`
          margin-top: 0;
          background-color: #3f4251;
      `)}
        />
      </div>
      <div
        css={css(`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        min-height: 100vh;
        background: #f0f2f5 no-repeat center/100% url(${backgroundImage});
        background-size: cover;
      `)}
      >
        <div
          css={css(`
              width: 472px;
              margin-right: 242px;
              background: #fff;
        `)}
        >
          <div
            css={css(`
        margin-right: 242px;
        background: #fff;
        width: 336px;
        margin: 0 auto;
        `)}
          >
            <div
              css={css(`
          margin: 36px 0 24px;
          font-size: 28px;
          font-family: dingTalk;
          text-align: left;
        `)}
            >
              证书管理系统
            </div>
            <div
              css={css(`
          width: 72px;
          height: 18px;
          color: #2B2C2D;
          font-size: 18px;`)}
            >
              欢迎登录
            </div>
            <div
              css={css(`width: 30px;
          height: 3px;
          margin: 8px 0 24px;
          background: #FC671A;`)}
            />
          </div>

          <div
            css={css(`
         width: 336px;
        margin: 0 auto;
        padding-top: 0;

       :global{
         .ant-form-item-control-input-content .ant-input-affix-wrapper {
           border-radius: 2px ;
         }`)}
          >
            <Form
              size="large"
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              style={{ width: 300 }}
            >
              <Form.Item name="login" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input prefix={<UserOutlined />} placeholder="用户名" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
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
        </div>
      </div>
      <div
        css={css(`
      position: absolute;
    bottom: 15px;
    width: 100%;
    height: 19px;
    color: #7C7F8D;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    line-height: 19px;
    text-align: center;`)}
      >
        <div>©2014-{new Date().getFullYear()} 牙木科技股份有限公司</div>
      </div>
    </div>
  )
}

export default Login
