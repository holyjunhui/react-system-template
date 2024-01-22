import React, { useState } from 'react'
import { Button, Form, Input, InputNumber, Radio, Select, Space } from 'antd'

const OrderManage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="whiteBg">
      <Form
        form={form}
        initialValues={{
          status: 'enabled',
        }}
        onFinish={(v: any) => {}}
      >
        <Form.Item label="所属账号">
          <Select placeholder="请选择" style={{ width: 200 }}>
            <Select.Option value="1">1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="实例类型">
          <Radio.Group>
            <Radio value={1}>（国际）DDos高防</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="实例名称">
          <Input style={{ width: 200 }} />
        </Form.Item>
        <Form.Item label="防护套餐" help="保险版适用于防护有低DDos攻击风险的服务">
          <Radio.Group>
            <Radio value={1}>保险防护</Radio>
            <Radio value={2}>无限防护</Radio>
            <Radio value={3}>加速线路</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="业务带宽">
          <Radio.Group>
            <Radio value={10}>100M</Radio>
            <Radio value={11}>200M</Radio>
            <Radio value={12}>300M</Radio>
            <Radio value={17}>800M</Radio>
            <Radio value={18}>900M</Radio>
            <Radio value={19}>1000M</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="业务QPS">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item label="功能套餐">
          <Radio.Group>
            <Radio value={1}>标准功能</Radio>
            <Radio value={2}>增强功能</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="防护域名数">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item label="防护端口数">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item label="购买数量">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item label="使用时长">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button>取消</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default OrderManage
