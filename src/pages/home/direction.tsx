import React, { useCallback, useEffect, useState } from 'react'
import { Radio, Tabs } from 'antd'
import type { TabsProps } from 'antd'

import { css } from '@emotion/react'
import LineChart from '@/components/Echarts/LineChart'

import { getNameAndKey, getTime } from '../components/reportMethod'

const Direction = () => {
  const [series, setSeries] = useState<any>([{ name: '', type: 'line', time: [], data: [] }])
  const [legend, setLegend] = useState<any>([])
  const [value, setValue] = useState<string>('bps')
  const getData = useCallback(() => {
    const res: any = {
      labels: ['x', 'bps', 'pps'],
      x: [1618986000000, 1618986060000, 1618986120000, 1618986180000, 1618986240000, 1618986300000],
      y: [0, 0, 0, 0, 0, 0],
      bps: [0, 0, 0, 0, 0, 0],
      pps: [0, 0, 0, 0, 0, 0],
    }
    const nameAndKeyObj = getNameAndKey(res.labels)
    const seriesData = nameAndKeyObj.map((item: any) => {
      // 将x和y的数据组合为[[x,y],[x,y]]的形式
      const timeData = res[item?.key]?.map((_: any, index: number) => {
        return [getTime(res?.x?.[index]), res[item.key]?.[index]]
      })
      return {
        name: item?.name,
        showSymbol: false,
        connectNulls: true,
        type: 'line',
        key: item?.key,
        data: timeData,
      }
    })

    const legendData = seriesData.map((item: any) => item?.name)
    setLegend(legendData)
    setSeries(seriesData)
  }, [])

  useEffect(() => {
    // 延后执行，防止加载 出现混乱
    setTimeout(() => {
      getData()
    }, 100)
  }, [getData])

  const AllView = () => {
    return (
      <div>
        <div>
          <Radio.Group
            onChange={(e) => {
              console.log(e, 'e.target.value')
              setValue(e.target.value)
            }}
            value={value}
            optionType="button"
            buttonStyle="solid"
            size="small"
          >
            <Radio value="bps">bps</Radio>
            <Radio value="pps">pps</Radio>
          </Radio.Group>
        </div>
        <div
          css={css(`
        height: 250px`)}
        >
          <LineChart unit="KB" noTooltip legend={legend} series={series} />
        </div>
      </div>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: 'allView',
      label: '总览',
      children: <AllView />,
    },
    {
      key: 'enter',
      label: '入方向分布',
      children: <AllView />,
    },
    {
      key: 'out',
      label: '出方向分布',
      children: <AllView />,
    },
  ]

  return (
    <div
      className="whiteBg"
      css={css(`
      height: 386px;
    `)}
    >
      <Tabs
        css={css(`
      .ant-tabs-content {
        height: 200px;
      }
      `)}
        items={items}
        onChange={(key) => {
          console.log(key)
        }}
      />
    </div>
  )
}

export default Direction
