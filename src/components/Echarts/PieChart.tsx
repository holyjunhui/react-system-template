// 饼图
import { ECharts } from 'echarts'
import React, { useState } from 'react'
import * as echarts from 'echarts'

import { Empty } from 'antd'
import noData from '@/assets/svg/noData.svg'

type IProps = {
  series: { name: string; value: number }[]
  name?: string
  // search map类型
  search?: Map<string, string>
  headData: string[]
}
const PieChart: React.FC<IProps> = (props) => {
  const { series, name, headData, search } = props
  const pieChartRef = React.useRef<HTMLDivElement>(null)
  const [pieChartsInstance, setPieChartsInstance] = useState<ECharts>() // 用来勾住生成后的 图表实例对象
  React.useEffect(() => {
    const chartDom = pieChartRef.current
    let myChart: ECharts | null = null

    if (chartDom) {
      myChart = echarts.init(chartDom)
      setPieChartsInstance(myChart)
    }
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },

      legend: {
        // 显示滚动条
        type: 'scroll',
        top: '1%',
        orient: 'vertical',

        width: '85%',
        left: '1%',
        right: '1%',
        formatter(name: string) {
          if (name.length > 30) {
            return `${name.slice(0, 30)}...`
          }
          return name
        },
        itemWidth: 14,
        itemHeight: 7,
      },

      grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
      },
      series: [
        {
          name,
          type: 'pie',
          radius: '50%',
          center: ['50%', '55%'],
          data: series,
          // label: {
          //   formatter(params: any) {
          //     if (params.name.length > 5) {
          //       return `${params.name.slice(0, 5)}...`
          //     }
          //     return params.name
          //   },
          // },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
    // 初始自适应
    setTimeout(() => {
      myChart?.resize()
      myChart?.setOption(option)
    })

    // 销毁实例，消除警告
    return () => {
      window.onresize = null
      if (myChart) {
        myChart.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headData, name, search, series])

  React.useEffect(() => {
    window.onresize = null

    // 改变宽度自适应 只能通过监听window的resize事件来实现，但是这样会导致页面频繁的resize，影响性能
    // window.onresize 是直接给window的onresize属性绑定事件，只能有一个。也就是说后面的会覆盖前面。
    window.addEventListener('resize', () => {
      pieChartsInstance?.resize()
    })
  }, [pieChartsInstance])

  return series?.length ? (
    <div ref={pieChartRef} style={{ width: '100%', height: '100%' }} />
  ) : (
    <Empty image={noData} imageStyle={{ height: 130 }} />
  )
}

PieChart.defaultProps = {
  search: new Map([['导出名称', '所有设备']]),
  name: '',
}
export default PieChart
