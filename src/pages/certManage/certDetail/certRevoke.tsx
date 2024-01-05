import React from 'react'
import { css } from '@emotion/react'
import { Form, Input, Button, Select } from 'antd'
import ListDetail from '@/components/ListDetail/listDetail'

const CertRevoke = () => {
  return (
    <div>
      <div className="whiteBg">
        <ListDetail />
        <div
          css={css(`
        width: 50%;
        `)}
        >
          <h3>吊销原因</h3>
          <Form>
            <Form.Item name="reason" wrapperCol={{ span: 12 }}>
              <Select placeholder="未注明原因">
                <Select.Option value="1">证书过期</Select.Option>
                <Select.Option value="2">证书被盗</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="remark">
              <Input.TextArea rows={4} placeholder="描述" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">证书吊销</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CertRevoke
