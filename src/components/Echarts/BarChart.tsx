// 柱状图
import { ECharts } from 'echarts'
import React, { useState } from 'react'
import { Empty } from 'antd'
import * as echarts from 'echarts'

import noData from '@/assets/svg/noData.svg'

type IProps = {
  xAxis: string[]
  instance?: string
  date: any
  // search map类型
  search?: Map<string, string>
  name?: string
  headData?: string[]
  series: { name: string; type: string; hasNext?: boolean; ruleID?: number; data: number[] }
}
const BarChart: React.FC<IProps> = (props) => {
  const { xAxis, series, instance, date, name, search, headData } = props

  const chartRef = React.useRef<HTMLDivElement>(null)
  const [chartInstance, setChartInstance] = useState<ECharts>() // 用来勾住生成后的 图表实例对象

  React.useEffect(() => {
    const chartDom = chartRef.current
    let myChart: any

    if (chartDom) {
      myChart = echarts.init(chartDom)
      setChartInstance(myChart)
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'line', // 默认为直线，可选为：'line' | 'shadow'
        },
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '11%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: xAxis,

        axiosLabel: {
          rotate: 45,
        },
        axisTick: {
          alignWithLabel: true,
        },
      },

      yAxis: {
        type: 'value',
      },

      series,
    }

    if (myChart) {
      // 初始自适应
      setTimeout(() => {
        myChart?.resize()
      }, 200)
      myChart?.setOption(option)

      // 改变宽度自适应 只能通过监听window的resize事件来实现，但是这样会导致页面频繁的resize，影响性能
      // window.onresize 是直接给window的onresize属性绑定事件，只能有一个。也就是说后面的会覆盖前面。
      // https://m.html.cn/web/javascript/11660237499500.html
      window.addEventListener('resize', () => {
        myChart?.resize()
      })
    }

    // 销毁实例，消除警告
    return () => {
      window.onresize = null
      if (myChart) {
        myChart.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, headData, instance, name, search, series, xAxis])

  React.useEffect(() => {
    window.onresize = null

    // 改变宽度自适应 只能通过监听window的resize事件来实现，但是这样会导致页面频繁的resize，影响性能
    // window.onresize 是直接给window的onresize属性绑定事件，只能有一个。也就是说后面的会覆盖前面。
    window.addEventListener('resize', () => {
      chartInstance?.resize()
    })
  }, [chartInstance])

  return series?.data?.length ? (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  ) : (
    <Empty image={noData} imageStyle={{ height: 130 }} />
  )
}
BarChart.defaultProps = {
  search: new Map([['导出名称', '所有设备']]),
  name: '',
}
export default BarChart
