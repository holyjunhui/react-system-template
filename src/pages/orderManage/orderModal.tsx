import React, { useState } from 'react'
import { Button, Form, Input, InputNumber, Modal, Radio, Select, Space } from 'antd'
import { css } from '@emotion/react'

interface IProps {
  data: any
  visible: boolean
  type: 'add' | 'update' | 'reset'
  ok: () => void
  cancel: () => void
}
const OrderManage = ({ data, type, ok, visible, cancel }: IProps): JSX.Element => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)

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
      <Form
        layout="vertical"
        form={form}
        labelAlign="right"
        style={{ maxHeight: 600, overflowX: 'hidden', overflowY: 'auto' }}
        initialValues={{
          status: 'enabled',
          type: 1,
          orderGroup: 1,
          network: 10,
          qps: 1000,
          primary: 1,
          domain: 1,
          port: 1,
          count: 1,
          useTime: 1,
        }}
        onFinish={(v: any) => {}}
      >
        <Form.Item label="所属账号" name="account">
          <Select placeholder="请选择">
            <Select.Option value="1">1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="实例类型" name="type">
          <Radio.Group>
            <Radio value={1}>（国际）DDos高防</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="实例名称" name="name">
          <Input placeholder="请输入实例名称" />
        </Form.Item>
        <Form.Item label="防护套餐" name="orderGroup">
          <Radio.Group optionType="button">
            <Radio value={1}>保险防护</Radio>
            <Radio value={2}>无限防护</Radio>
            <Radio value={3}>加速线路</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.orderGroup !== currentValues.orderGroup
          }
        >
          {({ getFieldValue }) => {
            return getFieldValue('orderGroup') === 3 ? (
              <Form.Item label="业务带宽" name="network">
                <Radio.Group optionType="button">
                  <Radio value={10}>10M</Radio>
                  <Radio value={11}>20M</Radio>
                  <Radio value={12}>30M</Radio>
                  <Radio value={17}>40M</Radio>
                  <Radio value={18}>50M</Radio>
                  <Radio value={19}>60M</Radio>
                  <Radio value={20}>70M</Radio>
                  <Radio value={21}>80M</Radio>
                  <Radio value={22}>90M</Radio>
                  <Radio value={23}>100M</Radio>
                </Radio.Group>
              </Form.Item>
            ) : (
              <>
                <Form.Item label="业务带宽" name="network">
                  <Radio.Group optionType="button">
                    <Radio value={10}>100M</Radio>
                    <Radio value={11}>150M</Radio>
                    <Radio value={12}>200M</Radio>
                    <Radio value={17}>250M</Radio>
                    <Radio value={18}>300M</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="业务QPS" name="qps">
                  <InputNumber style={{ width: 200 }} min={1000} step={100} max={100000} />
                </Form.Item>
                <Form.Item label="功能套餐" name="primary">
                  <Radio.Group optionType="button">
                    <Radio value={1}>标准功能</Radio>
                    <Radio value={2}>增强功能</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="防护域名数" name="domain">
                  <InputNumber style={{ width: 200 }} min={10} step={10} max={2000} />
                </Form.Item>
                <Form.Item label="防护端口数" name="port">
                  <InputNumber style={{ width: 200 }} min={5} step={5} max={1500} />
                </Form.Item>
              </>
            )
          }}
        </Form.Item>

        <Form.Item label="购买数量" name="count">
          <InputNumber style={{ width: 200 }} min={1} max={10} />
        </Form.Item>
        <Form.Item label="使用时长" name="useTime">
          <InputNumber style={{ width: 200 }} min={1} max={36} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default OrderManage
