import { css } from '@emotion/react'
import { Col, Form, Row } from 'antd'
import React from 'react'

const ListDetail = () => {
  const [form] = Form.useForm()
  const formList = [
    {
      key: '1',
      label: '证书序列号',
      value: '12234444',
    },
    {
      key: '2',
      label: '信任状态',
      value: '可信',
    },
    {
      key: '3',
      label: '证书生效日期',
      value: '2024-08-03 14:00:00',
    },
    {
      key: '4',
      label: '证书吊销状态',
      value: '正常',
    },
    {
      key: '5',
      label: 'OCSP装订状态',
      value: '不支持',
    },
  ]
  return (
    <div>
      <h3>证书详情</h3>
      <Form labelWrap labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Row gutter={[24, 0]}>
          {formList.map((item) => (
            <Col span={12} key={item.key}>
              <Form.Item
                label={item.label}
                name={item.label}
                css={css(`
                  margin-bottom: 0;
                  label {
                    color: #525966 !important;
                  }
                  .ant-form-item-control-input-content {
                    color: #2D3440 !important;
                  }
            `)}
              >
                {item.value}
              </Form.Item>
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  )
}

export default ListDetail
