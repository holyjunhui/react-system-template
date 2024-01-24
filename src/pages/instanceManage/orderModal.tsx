import React, { useCallback, useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber, Modal, Radio, Select, Space, Spin, message } from 'antd'
import { css } from '@emotion/react'
import useGetResource from '@/hooks/useGetResource'
import { Rules } from '@/newApi/Rules'
import { Menu } from '@/newApi/Menu'
import { Instances } from '@/newApi/Instances'

interface IProps {
  data: any
  visible: boolean
  type: 'add' | 'update' | 'reset'
  ok: () => void
  cancel: () => void
}
const OrderManage = ({ data, type, ok, visible, cancel }: IProps): JSX.Element => {
  const RulesApi = React.useMemo(() => new Rules(), [])
  const MenuApi = React.useMemo(() => new Menu(), [])
  const InstancesApi = React.useMemo(() => new Instances(), [])

  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSpin, setIsSpin] = useState<boolean>(type === 'update')

  const { data: customersList } = useGetResource(MenuApi.customersList)

  const handleCancel = () => {
    form.resetFields()
    cancel()
  }
  const getInstanceDetail = useCallback(() => {
    InstancesApi.instancesDetail(data.id).then((res: any) => {
      setIsSpin(false)
      form.setFieldsValue({
        ...res,
      })
    })
  }, [InstancesApi, data.id, form])

  useEffect(() => {
    if (type === 'update' && visible) {
      getInstanceDetail()
    }
  }, [getInstanceDetail, type, visible])

  return (
    <Modal
      title={type === 'add' ? '新增' : '修改'}
      maskClosable={false}
      onOk={() => {
        form.submit()
      }}
      onCancel={() => {
        handleCancel()
      }}
      open={visible}
      confirmLoading={loading}
      width={700}
    >
      {isSpin ? (
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          <Spin />
        </div>
      ) : (
        <Form
          layout="vertical"
          form={form}
          labelAlign="right"
          style={{ maxHeight: 600, overflowX: 'hidden', overflowY: 'auto' }}
          initialValues={{
            status: 'enabled',
            type: 'global',
            spec: {
              edition: 'baoxian',
              normal_bandwidth: 100,
              normal_qps: 1000,
              function: 'default',
              domain_count: 10,
              port_count: 5,
            },
            periods: 1,
          }}
          onFinish={(v: any) => {
            const formData = { ...v }

            if (type === 'add') {
              InstancesApi.instancesCreate(formData)
                .then(() => {
                  setLoading(false)
                  message.success('添加成功')
                  handleCancel()
                  ok()
                })
                .catch(() => {
                  setLoading(false)
                })
            }
            if (type === 'update') {
              InstancesApi.instancesUpdate(data.id, formData)
                .then(() => {
                  setLoading(false)
                  message.success('编辑成功')
                  handleCancel()
                  ok()
                })
                .catch(() => {
                  setLoading(false)
                })
            }
          }}
        >
          <Form.Item label="所属用户" name="customer_id">
            <Select placeholder="请选择">
              {customersList?.map((item: any) => {
                return (
                  <Select.Option value={item.id} key={item.id}>
                    {item.name}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label="实例类型" name="type">
            <Radio.Group>
              <Radio value="global">（国际）DDos高防</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="实例名称" name="name">
            <Input placeholder="请输入实例名称" />
          </Form.Item>
          <Form.Item label="防护套餐" name={['spec', 'edition']}>
            <Radio.Group optionType="button">
              <Radio value="baoxian">保险防护</Radio>
              <Radio value="wuyou">无限防护</Radio>
              <Radio value="jiasu">加速线路</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.spec.edition !== currentValues.spec.edition
            }
          >
            {({ getFieldValue }) => {
              return getFieldValue(['spec', 'edition']) === 'jiasu' ? (
                <Form.Item label="业务带宽" name={['spec', 'normal_bandwidth']}>
                  <Radio.Group optionType="button">
                    <Radio value={10}>10M</Radio>
                    <Radio value={20}>20M</Radio>
                    <Radio value={30}>30M</Radio>
                    <Radio value={40}>40M</Radio>
                    <Radio value={50}>50M</Radio>
                    <Radio value={60}>60M</Radio>
                    <Radio value={70}>70M</Radio>
                    <Radio value={80}>80M</Radio>
                    <Radio value={90}>90M</Radio>
                    <Radio value={100}>100M</Radio>
                  </Radio.Group>
                </Form.Item>
              ) : (
                <>
                  <Form.Item label="业务带宽" name={['spec', 'normal_bandwidth']}>
                    <Radio.Group optionType="button">
                      <Radio value={100}>100M</Radio>
                      <Radio value={150}>150M</Radio>
                      <Radio value={200}>200M</Radio>
                      <Radio value={250}>250M</Radio>
                      <Radio value={300}>300M</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="功能套餐" name={['spec', 'function']}>
                    <Radio.Group optionType="button">
                      <Radio value="default">标准功能</Radio>
                      <Radio value="enhance">增强功能</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="业务QPS" name={['spec', 'normal_qps']}>
                    <InputNumber style={{ width: '100%' }} min={1000} step={100} max={100000} />
                  </Form.Item>
                  <Form.Item label="防护域名数" name={['spec', 'domain_count']}>
                    <InputNumber style={{ width: '100%' }} min={10} step={10} max={2000} />
                  </Form.Item>
                  <Form.Item label="防护端口数" name={['spec', 'port_count']}>
                    <InputNumber style={{ width: '100%' }} min={5} step={5} max={1500} />
                  </Form.Item>
                </>
              )
            }}
          </Form.Item>
          <Form.Item label="使用时长" name="periods">
            <InputNumber style={{ width: '100%' }} min={1} max={36} />
          </Form.Item>
        </Form>
      )}
    </Modal>
  )
}

export default OrderManage
