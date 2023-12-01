// 柱状图
import { ECharts } from 'echarts'
import React, { useState } from 'react'
import * as echarts from 'echarts'

import ChinaJson from '@/assets/json/china.zh.json'

type IProps = {
  // search map类型
  search?: Map<string, string>
  name?: string
  headData?: string[]
  data: { name: string; value: number }[]
}
const ProvinceChart: React.FC<IProps> = (props) => {
  const { name, search, headData, data } = props
  let maxValue = 500
  // 从data中找到最大的value
  const dataMaxValue = Math.max(...data.map((item) => item.value))
  if (dataMaxValue > 500) {
    maxValue = dataMaxValue
  }
  const chartRef = React.useRef<HTMLDivElement>(null)
  const [chartInstance, setChartInstance] = useState<ECharts>() // 用来勾住生成后的 图表实例对象

  React.useEffect(() => {
    const chartDom = chartRef.current
    let myChart: any
    const option = {
      title: {
        text: '省份访问量',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        left: 'right',
        min: 0,
        max: maxValue,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
        text: ['高', '低'],
        calculable: true,
      },

      series: [
        {
          name: '省份访问量',
          type: 'map',
          roam: true,
          map: 'China',
          emphasis: {
            label: {
              show: true,
            },
          },
          data,
        },
      ],
    }

    if (chartDom) {
      myChart = echarts.init(chartDom)
      echarts.registerMap('China', ChinaJson as any)

      myChart.setOption(option)
      setChartInstance(myChart)
    }

    if (myChart) {
      // 初始自适应
      setTimeout(() => {
        myChart?.resize()
      }, 200)

      // myChart?.setOption(option)

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
  }, [data, headData, name, search])

  React.useEffect(() => {
    window.onresize = null

    // 改变宽度自适应 只能通过监听window的resize事件来实现，但是这样会导致页面频繁的resize，影响性能
    // window.onresize 是直接给window的onresize属性绑定事件，只能有一个。也就是说后面的会覆盖前面。
    window.addEventListener('resize', () => {
      chartInstance?.resize()
    })
  }, [chartInstance])

  return <div ref={chartRef} style={{ width: '100%', height: '800px' }} />
}

export default ProvinceChart
