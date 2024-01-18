import React from 'react'

import { Button, Radio, Tabs } from 'antd'

import type { TabsProps } from 'antd'
import { css } from '@emotion/react'
import RowBarChart from '@/components/Echarts/RowBarChart'

const DomainHeader = () => {
  const yAxis = ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  const series = {
    name: '2020',
    type: 'bar',
    data: [18203, 23489, 29034, 104970, 131744, 630230],
  }

  const BarChart = () => {
    return (
      <div>
        <div
          css={css(`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        `)}
        >
          <Radio.Group optionType="button" buttonStyle="solid" size="small">
            <Radio value="global">全球</Radio>
            <Radio value="china">中国地区</Radio>
          </Radio.Group>

          <span
            css={css(`
          height: 20px;
          font-size: 12px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #F6B816;
          line-height: 22px;
          `)}
          >
            数据非实时，存在一天的延时
          </span>
        </div>
        <div
          css={css(`
        height: 250px`)}
        >
          <RowBarChart yAxis={yAxis} series={series} />
        </div>
      </div>
    )
  }
  const items: TabsProps['items'] = [
    {
      key: 'allView',
      label: '正常业务地区分布',
      children: <BarChart />,
    },
    {
      key: 'enter',
      label: '正常业务运营商分布',
      children: <BarChart />,
    },
  ]
  return (
    <div
      className="whiteBg"
      css={css(`
      height: 386px;
      position: relative;
    `)}
    >
      <Button
        type="link"
        css={css(`
      position: absolute;
      right: 10px;
      top: 35px;
      `)}
      >
        更多
      </Button>
      <Tabs items={items} />
    </div>
  )
}

export default DomainHeader
