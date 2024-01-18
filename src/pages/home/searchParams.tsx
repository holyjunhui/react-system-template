import React from 'react'
import { Select, Form, Button, Radio, DatePicker } from 'antd'
import dayjs from 'dayjs'
import { css } from '@emotion/react'

const SearchParams = () => {
  const [form] = Form.useForm()

  const [date, setDate] = React.useState<[dayjs.Dayjs, dayjs.Dayjs]>([
    dayjs().subtract(1, 'h'),
    dayjs(),
  ])

  return (
    <div
      className="whiteBg"
      css={css(`
      height: 80px;
      line-height: 80px;
      margin-bottom: 24px;
    `)}
    >
      <Form
        form={form}
        layout="inline"
        initialValues={{
          name: '',
          instance: '',
        }}
      >
        <Form.Item
          name="instance"
          css={css(`
          width: 300px;
        `)}
        >
          <Select placeholder="全部实例">
            <Select.Option value="1">实例</Select.Option>
            <Select.Option value="2">domain</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="date">
          <Radio.Group
            onChange={(e) => {
              if (e.target.value === 1) {
                // 当前时间减去1小时
                setDate([dayjs().subtract(1, 'h'), dayjs()])
              }
              if (e.target.value === 6) {
                // 当前时间减去6小时
                setDate([dayjs().subtract(6, 'h'), dayjs()])
              }
              if (e.target.value === 24) {
                // 当前时间减去24小时
                setDate([dayjs().subtract(24, 'h'), dayjs()])
              }
            }}
            defaultValue={1}
          >
            <Radio.Button value={1}>实时</Radio.Button>
            <Radio.Button value={6}>6小时</Radio.Button>
            <Radio.Button value={24}>1天</Radio.Button>
            <Radio.Button value={24 * 7}>7天</Radio.Button>
            <Radio.Button value={24 * 7 * 30}>30天</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="date">
          <DatePicker.RangePicker showTime format="YYYY-MM-DD HH:mm:ss" value={date} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            css={css(`
            margin-right: 8px;
          `)}
          >
            搜索
          </Button>
          <Button>重置</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SearchParams
