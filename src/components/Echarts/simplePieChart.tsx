import React, { useState, useEffect } from 'react'
import * as echarts from 'echarts'

import { ECharts } from 'echarts'

const SimplePieChart = ({ color, title, data }: any) => {
  const pieChartRef = React.useRef<HTMLDivElement>(null)
  const [pieChartsInstance, setPieEchartsInstance] = useState<ECharts>() // 用来勾住生成后的 图表实例对象

  useEffect(() => {
    if (pieChartRef.current) {
      const chart = echarts.init(pieChartRef.current)
      setPieEchartsInstance(chart)
    }

    const option = {
      color,
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.name}： ${params.data.value}%`
        },
        position: 'right',
      },
      title: {
        text: title,
        left: 'center',
        bottom: '0',
        textStyle: {
          color: '#4E5D78',
          fontSize: 12,
          fontWeight: 400,
        },
      },

      series: [
        {
          name: title,
          type: 'pie',
          radius: ['50%', '70%'],
          top: '0',
          avoidLabelOverlap: false,
          label: {
            color: '#707070',
            show: true,
            formatter: (params: any) => {
              if (params.index) return ''
              return `${params.name} ${params.value}% `
            },
            fontSize: 12,
          },

          labelLine: {
            show: true,
          },
          data,
        },
      ],
    }

    pieChartsInstance?.setOption(option)
    // 初始自适应
    pieChartsInstance?.resize()
    // 改变宽度自适应

    window.addEventListener('resize', () => {
      pieChartsInstance?.resize()
    })
    // 销毁实例，消除警告
    return () => {
      window.onresize = null
      if (pieChartsInstance) {
        pieChartsInstance.dispose()
      }
    }
  }, [color, data, pieChartsInstance, title])

  return (
    <div style={{ width: '32%', height: 160 }}>
      <div ref={pieChartRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default SimplePieChart
