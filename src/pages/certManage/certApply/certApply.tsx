import React, { useRef, useState } from 'react'
import { Button, Form, Input, Select, Steps, message } from 'antd'
import { css } from '@emotion/react'
import { FileDoneOutlined } from '@ant-design/icons'

const CertApply = () => {
  const [form] = Form.useForm()
  const formValues = useRef({} as any)
  const steps = [
    {
      title: '提交申请',
      content: 'First-content',
    },
    {
      title: '验证请求',
      content: 'Second-content',
    },
    {
      title: '证书签发',
      content: 'Last-content',
    },
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }
  const handleFinish = (values: any) => {
    formValues.current = {
      ...formValues.current,
      ...values,
    }
    message.success('提交成功')
  }
  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  return (
    <div
      className="whiteBg"
      css={css(`
      display: flex;
      flex-direction: column;
      align-items: center;
      `)}
    >
      <div
        css={css(`
      width: 700px;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      `)}
      >
        <div
          css={css(`
         width: 500px;
          `)}
        >
          <Steps labelPlacement="vertical" current={current} items={items} />
        </div>
        <div
          css={css(`
         margin-top: 30px;
          `)}
        >
          <Form
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={handleFinish}
            labelAlign="left"
          >
            {current === 0 && (
              <div
                css={css(`
         width: 500px;
          `)}
              >
                <Form.Item
                  label="申请账号"
                  name="account"
                  css={css(`
                    margin-bottom: 16px;
                    `)}
                  rules={[
                    {
                      required: true,
                      message: '请输入申请账号',
                    },
                  ]}
                >
                  <Select placeholder="请选择">
                    <Select.Option value="demo">demo</Select.Option>
                    <Select.Option value="auto">auto</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="域名"
                  name="domain"
                  css={css(`
                    margin-bottom: 16px;
                    `)}
                  rules={[
                    {
                      required: true,
                      message: '请输入域名',
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </div>
            )}
            <div
              css={css(`
         width: 500px;
          `)}
            >
              {current === 1 && (
                <>
                  <Form.Item
                    label="域名"
                    name="domain"
                    css={css(`
                    margin-bottom: 16px;
                    `)}
                    rules={[
                      {
                        required: true,
                        message: '请输入域名',
                      },
                    ]}
                  >
                    <Input placeholder="请输入" disabled />
                  </Form.Item>
                  <Form.Item
                    label="选择域验证方法："
                    name="method"
                    rules={[
                      {
                        required: true,
                        message: '请输入选择域验证方法：',
                      },
                    ]}
                    help="方法：
DNS自动验证：如果DNS解析服务器在本地服务中，系统会自动进行验证
DNS手动验证：如果DNS解析服务器不在本地服务中，则使用CSR哈希值作为验证码添加到 DNS CNAME 记录中"
                  >
                    <Select placeholder="请选择">
                      <Select.Option value="demo">DNS手动验证</Select.Option>
                      <Select.Option value="auto">DNS自动验证</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    shouldUpdate={(prevValues, currentValues) =>
                      prevValues.method !== currentValues.method
                    }
                  >
                    {({ getFieldValue }) => {
                      return getFieldValue('method') === 'demo' ? (
                        <Form.Item
                          label="请添加CNAME域名解析记录："
                          name="cname"
                          rules={[
                            {
                              required: true,
                              message: '请添加CNAME域名解析记录：',
                            },
                          ]}
                        >
                          <Input placeholder="请输入" />
                        </Form.Item>
                      ) : null
                    }}
                  </Form.Item>
                </>
              )}

              {current === 2 && (
                <div
                  css={css(`
                text-align: center;

                `)}
                >
                  <p
                    css={css(`
                    margin-bottom: 8px;
                    `)}
                  >
                    证书签发完成
                  </p>
                  <Button
                    icon={<FileDoneOutlined />}
                    type="link"
                    css={css(`
                  color: #00AB7A;
                  &:hover {
                    color: #00AB7A !important;
                  }
                  `)}
                  >
                    证书下载
                  </Button>
                </div>
              )}
            </div>
          </Form>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  form.validateFields().then((values) => {
                    console.log(values, 'btn')
                    next()
                    form.submit()
                  })
                }}
              >
                {current === 1 ? '提交验证信息' : '下一步'}
              </Button>
            )}

            {current === 1 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                上一步
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertApply
