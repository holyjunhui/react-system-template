import { Form, Input, Modal } from 'antd'
import React, { useState } from 'react'

interface IProps {
  data: any
  visible: boolean
  type: 'add' | 'update' | 'reset'
  ok: () => void
  cancel: () => void
}
const InstanceModal = ({ data, type, ok, visible, cancel }: IProps): JSX.Element => {
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
        {(type === 'add' || type === 'update') && (
          <Form.Item
            label="上传实例码"
            name="name"
            rules={[
              {
                required: false,
                message: '请输入上传实例码',
              },
            ]}
          >
            <Input placeholder="请输入上传实例码" allowClear />
          </Form.Item>
        )}
      </Form>
    </Modal>
  )
}

export default InstanceModal
