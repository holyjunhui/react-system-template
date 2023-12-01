// 折线图
import { ECharts } from 'echarts'
import React, { useState } from 'react'
import * as echarts from 'echarts'
import { Empty } from 'antd'
import noData from '@/assets/svg/noData.svg'

// https://blog.csdn.net/qq_43605229/article/details/124377176

// https://blog.csdn.net/qq_39877744/article/details/116303318
type IProps = {
  xAxis?: string[] // 因为都是时间
  legend: string[]
  unit?: string
  noTooltip?: boolean
  // search map类型
  search?: Map<string, string>
  name?: string
  series: { name: string; type: string; stack: string; data: number[] }[]
}
const LineChart: React.FC<IProps> = (props) => {
  const { xAxis, series, legend, noTooltip = false, unit = '', search, name } = props
  const chartRef = React.useRef<HTMLDivElement>(null)
  const [chartInstance, setChartInstance] = useState<ECharts>() // 用来勾住生成后的 图表实例对象

  React.useEffect(() => {
    const chartDom = chartRef.current
    let myChart: ECharts | null = null

    if (chartDom) {
      myChart = echarts.init(chartDom)
      setChartInstance(myChart)
    }

    const option = {
      // color: COLORS.chartsArray,
      tooltip: {
        trigger: 'axis',
        formatter(params: any) {
          let relVal = params[0].name

          for (let i = 0; i < params.length; i++) {
            relVal += `<br/><span style="display:inline-block;width: 220px;text-align:left;">${params[i].marker}${params[i].seriesName} :</span><span style="display:inline-block;width: 120px;text-align:right;">${params[i].value[1]} ${unit}</span>`
          }
          return relVal
        },
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: legend,
        type: 'scroll',
        itemWidth: 15,
        itemHeight: 7,
        width: '85%',
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '12%',
        containLabel: true,
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        // axisLabel: {
        //   formatter: (value: any) => {
        //     return dayjs(value).format('MM-DD HH-mm-ss')
        //   },
        // },
        data: xAxis,
      },

      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: `{value}${unit}`,
        },
      },

      series,
    }
    if (myChart) {
      // 初始自适应 延迟一下再自适应
      setTimeout(() => {
        myChart?.resize()
      })
      myChart?.setOption(option)
    }

    // 销毁实例，消除警告
    return () => {
      window.onresize = null
      if (myChart) {
        myChart.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legend, name, noTooltip, search, series, unit, xAxis])

  React.useEffect(() => {
    window.onresize = null

    // 改变宽度自适应 只能通过监听window的resize事件来实现，但是这样会导致页面频繁的resize，影响性能
    // window.onresize 是直接给window的onresize属性绑定事件，只能有一个。也就是说后面的会覆盖前面。
    window.addEventListener('resize', () => {
      chartInstance?.resize()
    })
  }, [chartInstance])

  return series?.length ? (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  ) : (
    <Empty image={noData} imageStyle={{ height: 130 }} />
  )
}
LineChart.defaultProps = {
  search: new Map([['导出名称', '所有设备']]),
  name: '',
}
export default LineChart
