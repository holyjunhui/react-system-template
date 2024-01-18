import React, { useCallback, useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Modal, Radio, Select, Switch, App } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import { css } from '@emotion/react'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { Rule } from '@/newApi/Rule'
import { Menu } from '@/newApi/Menu'
import utils from '@/utils/utils'

interface IProps {
  data: any
  visible: boolean
  type: 'add' | 'update' | 'reset'
  ok: () => void
  cancel: () => void
}
const DomainModal = ({ data, type, ok, visible, cancel }: IProps): JSX.Element => {
  const MenuApi = React.useMemo(() => new Menu(), [])

  const configStyle = css(`
  height: 36px;
font-size: 12px;
font-family: PingFangSC, PingFang SC;
font-weight: 400;
color: #AEB2B8;
line-height: 18px;`)

  const { message } = App.useApp()
  const [form] = Form.useForm()
  const RuleApi = React.useMemo(() => new Rule(), [])

  const [loading, setLoading] = useState<boolean>(false)
  const [isSpin, setIsSpin] = useState<boolean>(type === 'update')
  const [showConfig, setShowConfig] = useState<boolean>(true)
  const [instance_ids, setInstance_ids] = useState<number[]>([])
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ]
  // 配置信息展示隐藏控制
  const handleChangeShowConfig = () => {
    setShowConfig(!showConfig)
  }
  const getInstanceListMenu = useCallback(() => {
    MenuApi.instancesList().then((res: any) => {
      console.log(res)
      setInstance_ids(res)
    })
  }, [MenuApi])

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues)

    // 如果包含webssockets，https必须选中
    if (checkedValues.includes('websockets')) {
      form.setFieldsValue({
        protocol: Array.from(new Set([...checkedValues, 'https', 'websockets'])),
      })
    }
    // 如果包含websocket，http必须选中
    if (checkedValues.includes('websocket')) {
      form.setFieldsValue({
        protocol: Array.from(new Set([...checkedValues, 'http', 'websocket'])),
      })
    }
  }

  useEffect(() => {
    getInstanceListMenu()
  }, [getInstanceListMenu])

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
        form={form}
        labelAlign="left"
        labelCol={{ span: 24 }}
        style={{ maxHeight: 600, overflowX: 'hidden', overflowY: 'auto' }}
        initialValues={{
          status: 'enabled',
          protocol: [],
          real_server: {
            type: 0,
            servers: '',
          },
          https: {
            http2https: true,
            https2http: true,
            http2: true,
            ocsp: true,
            ssl_ciphers: 'default',
            ssl_protocols: 'tls1.0',
          },
        }}
        onFinish={(v: any) => {
          console.log(v, 'v')
          if (type === 'add') {
            const data = { ...v }
            const protocol = v.protocol.map((item: any) => {
              if (['http', 'https'].includes(item)) {
                return { type: item, ports: [80] }
              }
              if (['websocket', 'websockets'].includes(item)) {
                return { type: item, ports: [443] }
              }
              return { type: item, ports: [] }
            })
            data.proxys = protocol
            data.real_server.servers = data?.real_server?.servers
              ? utils.getFilterString(data?.real_server?.servers)
              : []
            console.log(data, 'data')
            RuleApi.postRule(data)
              .then(() => {
                setLoading(false)
                message.success('添加成功')
                ok()
              })
              .catch(() => {
                setLoading(false)
              })
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
          label="网站"
          name="domain"
          rules={[
            {
              required: true,
              message: '请输入网站',
            },
          ]}
        >
          <Input placeholder="请输入网站" allowClear />
        </Form.Item>
        <Form.Item
          label="网站名称"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入网站名称',
            },
          ]}
        >
          <Input placeholder="请输入网站名称" allowClear />
        </Form.Item>
        <Form.Item
          label="实例"
          name="instance_ids"
          rules={[
            {
              required: true,
              message: '请输入上传实例码',
            },
          ]}
        >
          <Select placeholder="请选择" mode="multiple">
            {instance_ids.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="协议类型"
          name="protocol"
          style={{ marginBottom: 12 }}
          rules={[
            {
              required: true,
              message: '请输入上传实例码',
            },
          ]}
        >
          <Checkbox.Group onChange={onChange}>
            <Checkbox value="http">http</Checkbox>
            <Checkbox value="https">https</Checkbox>
            <Checkbox value="websocket">Websocket</Checkbox>
            <Checkbox value="websockets">Websockets</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.protocol !== currentValues.protocol
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('protocol')?.includes('https') && (
              <>
                <Button
                  type="link"
                  onClick={handleChangeShowConfig}
                  css={css(`
                    padding-left: 0;
                  `)}
                >
                  高级配置 {showConfig ? <UpOutlined /> : <DownOutlined />}
                </Button>
                <Form.Item noStyle hidden={!showConfig}>
                  <div
                    css={css(`
                    padding: 16px 12px;
                    background: #F8F9FA;
                  `)}
                  >
                    <Form.Item
                      label="开启HTTPS的强制跳转"
                      style={{ marginBottom: 0 }}
                      labelCol={{ span: 8 }}
                      name={['https', 'http2https']}
                      valuePropName="checked"
                    >
                      <Switch />
                    </Form.Item>
                    <span css={configStyle}>
                      (开启后，HTTP请求将显示为HTTPS，默认跳转到443端口，配置websocket协议时不支持开启)
                    </span>
                    <Form.Item
                      label="开启HTTP回源"
                      style={{ marginBottom: 24 }}
                      labelCol={{ span: 6 }}
                      name={['https', 'https2http']}
                      valuePropName="checked"
                    >
                      <Switch />
                    </Form.Item>
                    <span css={configStyle}>
                      (若您的网站不支持HTTPS回源，请务必开启此项，默认回源端口为80，开启后HTTPS协议通过HTTP回源，Websockets协议会通过Websocket回源
                      )
                    </span>
                    <Form.Item
                      label="启用HTTP2"
                      style={{ marginBottom: 0 }}
                      labelCol={{ span: 5 }}
                      name={['https', 'http2']}
                      valuePropName="checked"
                    >
                      <Switch />
                    </Form.Item>
                    <Form.Item
                      label="OCSP"
                      labelCol={{ span: 3 }}
                      style={{ marginBottom: 0 }}
                      name={['https', 'ocsp']}
                      valuePropName="checked"
                    >
                      <Switch />
                    </Form.Item>
                  </div>
                </Form.Item>
              </>
            )
          }
        </Form.Item>
        <Form.Item
          label="服务器地址"
          name={['real_server', 'type']}
          rules={[
            {
              required: false,
              message: '请输入服务器地址',
            },
          ]}
        >
          <Radio.Group
            onChange={() => {
              form.setFieldsValue({
                real_server: {
                  servers: '',
                },
              })
            }}
          >
            <Radio value={0}>源站IP</Radio>
            <Radio value={1}>源站域名</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.real_server.type !== currentValues.real_server.type
          }
        >
          {({ getFieldValue }) =>
            getFieldValue(['real_server', 'type']) === 0 ? (
              <Form.Item
                name={['real_server', 'servers']}
                help="请输入IP，以换行分隔，不可重复，最多20个。"
                style={{ marginBottom: 35 }}
                rules={[
                  {
                    required: true,
                    validator: (_, v) => {
                      if (!v) return Promise.reject('请输入IP')
                      const filterStr = utils.getFilterString(v)
                      const allRight = filterStr.every((item) => utils.check_ipv4v6(item))
                      return allRight ? Promise.resolve() : Promise.reject('请输入正确的IP地址')
                    },
                  },
                ]}
              >
                <Input.TextArea placeholder="请输入IP，以英文逗号（,）隔开，不可重复，最多20个。" />
              </Form.Item>
            ) : (
              <Form.Item
                name={['real_server', 'servers']}
                style={{ marginBottom: 35 }}
                help="请输入源站域名，多个域名请用换行分隔，最多10个。"
                rules={[
                  {
                    required: true,
                    validator: (_, v) => {
                      if (!v) return Promise.reject('请输入合法的域名')
                      const filterStr = utils.getFilterString(v)
                      if (filterStr.length > 10) return Promise.reject('最多输入10个域名')
                      const allRightDomain = filterStr.every((item) =>
                        utils.checkDomainRegex().test(item?.trim())
                      )
                      return allRightDomain ? Promise.resolve() : Promise.reject('请输入合法的域名')
                    },
                  },
                ]}
              >
                <Input.TextArea placeholder="请输入源站域名，多个域名请用换行分隔，最多10个。" />
              </Form.Item>
            )
          }
        </Form.Item>
        <Form.Item
          label="备注"
          name="comment"
          rules={[
            {
              required: false,
              message: '请输入备注',
            },
          ]}
        >
          <Input.TextArea placeholder="请输入备注" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default DomainModal
