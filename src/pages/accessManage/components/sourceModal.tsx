import { Form, Input, Modal, Radio, Table } from 'antd'
import React, { useState } from 'react'

interface IProps {
  data: any
  visible: boolean
  type: 'add' | 'update' | 'reset'
  ok: () => void
  cancel: () => void
}
const SourceModal = ({ data, type, ok, visible, cancel }: IProps): JSX.Element => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSpin, setIsSpin] = useState<boolean>(type === 'update')

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
        }}
        onFinish={(v: any) => {
          console.log('v', v)
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
        <Form.Item
          label="域名"
          name="domain"
          rules={[
            {
              required: false,
              message: '请输入域名',
            },
          ]}
        >
          <Input placeholder="请输入域名" allowClear />
        </Form.Item>
        <Form.Item
          label="回源负载算法"
          name="algorithm"
          rules={[
            {
              required: false,
              message: '请选择回源负载算法',
            },
          ]}
        >
          <Radio.Group
            options={[
              { label: 'IP hash', value: 'ip_hash' },
              { label: '轮询', value: 'polling' },
              { label: 'Least time', value: 'least_conn' },
            ]}
          />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.algorithm !== currentValues.algorithm
          }
        >
          <Form.Item name="tables">
            <Table
              columns={[
                {
                  title: '源站',
                  dataIndex: 'source',
                  key: 'source',
                },
                {
                  title: '权重',
                  dataIndex: 'weight',
                  key: 'weight',
                  render: (_: any, record: any) => <Input onChange={(e) => {}} />,
                },
              ]}
              dataSource={[
                {
                  source: '102.3.4.5',
                  weight: '10',
                },
              ]}
              pagination={false}
            />
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default SourceModal
