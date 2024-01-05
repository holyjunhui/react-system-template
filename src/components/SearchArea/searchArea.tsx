import React, { useMemo, useState } from 'react'
import { Button, Form, Input, message, Space, Row, Col } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'

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

const SearchArea = () => {
  const [form] = Form.useForm()
  const [expand, setExpand] = useState(false)

  const onFinish = () => {
    message.success('Submit success!')
  }
  const handleExpand = () => {
    setExpand(!expand)
  }
  const onFinishFailed = () => {
    message.error('Submit failed!')
  }

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    })
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[16, 0]}>
        <Col xs={12} sm={8} md={6} lg={4} xl={8}>
          <Form.Item label="域名" name="url">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} xl={8}>
          <Form.Item label="网站名称" name="name">
            <Input />
          </Form.Item>
        </Col>
        {
          // 以下是展开的内容
          expand && (
            <>
              <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                <Form.Item label="网站类型" name="type">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={12} sm={8} md={6} lg={4} xl={8}>
                <Form.Item label="网站状态" name="status">
                  <Input />
                </Form.Item>
              </Col>
            </>
          )
        }
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
  )
}

export default SearchArea
