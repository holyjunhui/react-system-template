import React, { useCallback, useEffect, useState } from 'react'
import { Radio } from 'antd'
import dayjs, { Dayjs } from 'dayjs'

import { css } from '@emotion/react'
import LineChart from '@/components/Echarts/LineChart'
import NetworkTable from './networkTable'
import { getNameAndKey, getTime } from '../components/reportMethod'

const Bandwidth = () => {
  const [series, setSeries] = useState<any>([{ name: '', type: 'line', time: [], data: [] }])
  const [date, setDate] = useState<Dayjs[]>([dayjs().subtract(1, 'hour'), dayjs()])
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
  return (
    <div
      className="whiteBg"
      css={css(`
      height: 386px;
    `)}
    >
      <Radio.Group
        onChange={(e) => {
          setValue(e.target.value)
        }}
        value={value}
        optionType="button"
        buttonStyle="solid"
        size="small"
      >
        <Radio value="concurrent">并发连接数</Radio>
        <Radio value="newly">新建连接数</Radio>
      </Radio.Group>
      <div
        css={css(`
        height: 250px`)}
      >
        <LineChart unit="KB" noTooltip legend={legend} series={series} />
      </div>
    </div>
  )
}

export default Bandwidth
