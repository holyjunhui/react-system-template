import React, { useState } from 'react'
import { Checkbox, Form, Input, Modal, Radio, Select } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import { css } from '@emotion/react'

interface IProps {
  data: any
  visible: boolean
  type: 'add' | 'update' | 'reset'
  ok: () => void
  cancel: () => void
}
const PortModal = ({ data, type, ok, visible, cancel }: IProps): JSX.Element => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSpin, setIsSpin] = useState<boolean>(type === 'update')
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ]

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues)
  }
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
        style={{ maxHeight: 700, overflowX: 'hidden', overflowY: 'auto' }}
        initialValues={{
          status: 'enabled',
        }}
        onFinish={(v: any) => {
          setLoading(true)
          if (type === 'add') {
            const data = { ...v }

            // AccountsApi.accountsCreate(data)
            //   .then(() => {
            //     setLoading(false)
            //     message.success('添加成功')
            //     ok()
            //   })
            //   .catch(() => {
            //     setLoading(false)
            //   })
          }
          if (type === 'update') {
            const formData = { ...v }

            // AccountsApi.accountsUpdate(data.id, formData)
            //   .then(() => {
            //     setLoading(false)
            //     message.success('修改成功')
            //     ok()
            //   })
            //   .catch(() => {
            //     setLoading(false)
            //   })
          }
          if (type === 'reset') {
            const formData = { ...v }
            // AccountsApi.passwordUpdate(data.id, formData)
            //   .then(() => {
            //     setLoading(false)
            //     message.success('修改成功')
            //     ok()
            //     // logout()
            //   })
            //   .catch(() => {
            //     setLoading(false)
            //   })
          }
        }}
      >
        <p
          css={css(`
        height: 36px;
        font-size: 12px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #F5BD17;
        line-height: 18px;
        `)}
        >
          注：如果您所配置的端口将承载HTTP或HTTPS业务，建议您调整成网站配置，将有助于大幅度提升HTTP或HTTPS业务七层CC攻击的防护能力，目前网站配置支持配置非标端口。
        </p>
        <Form.Item
          label="转发协议"
          name="protocol"
          rules={[
            {
              required: false,
              message: '请选择转发协议',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="tcp">TCP</Radio>
            <Radio value="udp">UDP</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="转发端口"
          name="transPort"
          style={{ marginBottom: 35 }}
          help="输入范围1~65535"
          rules={[
            {
              required: false,
              message: '请输入转发端口',
            },
          ]}
        >
          <Input placeholder="请输入转发端口" allowClear />
        </Form.Item>
        <Form.Item
          label="源站端口"
          name="sourcePort"
          style={{ marginBottom: 35 }}
          help="输入范围1~65535"
          rules={[
            {
              required: false,
              message: '请输入源站端口',
            },
          ]}
        >
          <Input placeholder="请输入源站端口" allowClear />
        </Form.Item>
        <Form.Item
          label="回源转发模式"
          name="mode"
          rules={[
            {
              required: false,
              message: '请选择',
            },
          ]}
        >
          <Select placeholder="请选择">
            <Select.Option value="demo">轮询模式</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="源站ip"
          label="源站IP"
          style={{ marginBottom: 35 }}
          help="请输入IP，以换行分隔，不可重复，最多20个，不支持添加跨账号的源站"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea placeholder="请输入IP，以英文逗号（,）隔开，不可重复，最多20个。" />
        </Form.Item>
        <p
          css={css(`
        height: 36px;
        font-size: 12px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #F5BD17;
        line-height: 18px;
        `)}
        >
          DDoS高防（中国站）从2020年6月4日零点后端口接入方式中的TCP转发协议将不再支持80、8080、443和8443，上述端口业务接入高防建议调整成域名接入方式，域名接入方式支持HTTP(S)和Websocket(S)
          协议。给您带来的不便敬请谅解，有任何问题，可通过工单联系我们进行咨询反馈。
        </p>
      </Form>
    </Modal>
  )
}

export default PortModal
