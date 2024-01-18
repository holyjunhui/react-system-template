import dayjs from 'dayjs'

const timeFormat = (text: string | number, type?: string, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!text) return '-'
  if (type === 'unix') {
    return dayjs.unix(Number(text)).format(format)
  }
  return dayjs(text).format(format)
}

const getNumber = (text: any, isInteger?: boolean) => {
  // 如果是qps的话。值在展示的时候如果大于1， 不保留小数点， 整数展示。 小于1的情况下， 才需要保留小数点后面两位
  if (isInteger) {
    if (typeof text === 'number') {
      // eslint-disable-next-line no-nested-ternary
      return text || text === 0
        ? text >= 1
          ? Number(text || 0)?.toFixed(0)
          : Number(text || 0)?.toFixed(2)
        : '-'
    }
    // eslint-disable-next-line no-nested-ternary
    return text
      ? (text?.[1] || 0) >= 1
        ? Number(text?.[1] || 0)?.toFixed(0)
        : Number(text?.[1] || 0)?.toFixed(2)
      : '-'
  }

  if (typeof text === 'number') {
    return text || text === 0 ? Number(text || 0)?.toFixed(2) : '-'
  }
  return text ? Number(text?.[1] || 0)?.toFixed(2) : '-'
}

export const getTime = (value: any) => timeFormat(value, 'unix')

const getColumns = (unix: string, t: any) => {
  const isInteger = unix === 'qps' || unix === 'pps'
  const isUnix = unix ? `（${unix}）` : ''
  return [
    {
      dataIndex: 'type',
      title: t('report.device-status.category'),
    },
    {
      dataIndex: 'maxData',
      title: `${t('maxData')}（${isUnix}）`,
      render: (_: any, record: any) => record.maxData?.[1],
    },
    {
      dataIndex: 'maxTime',
      title: t('maxTime'),
      render: (_: any, record: any) => record.maxData?.[0],
    },
    {
      dataIndex: 'minData',
      title: `${t('minData')}（${isUnix}）`,
      render: (_: any, record: any) => record.minData?.[1],
    },
    {
      dataIndex: 'minTime',
      title: t('minTime'),
      render: (_: any, record: any) => record.minData?.[0],
    },
    {
      dataIndex: 'current',
      title: `${t('currentData')}（${isUnix}）`,
      render: (_: any, record: any) => record.current?.[1],
    },
    {
      dataIndex: 'avg',
      title: `${t('avgData')}（${isUnix}）`,
      render: (text: string) => getNumber(text, isInteger),
    },
  ]
}

// 根据数组的key 生成nameAndKey
const getNameAndKey = (res: { [key: string]: string }) => {
  const newArr: any = []
  Object.entries(res).forEach((item: any) => {
    newArr.push({
      name: item[1],
      key: item[0],
    })
  })
  return newArr
}

// 根据数组返回数组对象值
const handleFromArray2ArrayObject = (
  arr: { name: string; key: number }[],
  data: any,
  isArea?: boolean,
  isInteger?: boolean
) => {
  return arr.map((item: any) => {
    const obj: any = {
      name: item?.name,
      showSymbol: false,
      connectNulls: true,
      type: 'line',
      key: item?.key,
      time: data?.[item.key]?.map((arr: number[]) => arr?.[0]),
      data: data[item.key].map((item: any) => {
        if (isInteger) {
          // 值在展示的时候如果大于1， 不保留小数点， 整数展示。 小于1的情况下， 才需要保留小数点后面两位
          return [
            getTime(item[0]),
            Number(item[1]) >= 1 ? Number(item[1]).toFixed(0) : Number(item[1]).toFixed(2),
          ]
        }
        return [
          getTime(item[0]),
          Number?.isInteger(Number(item[1])) ? Number(item[1]) : Number(item[1]).toFixed(2),
        ]
      }),
    }
    // 折线图是否显示阴影面积
    if (isArea) {
      obj.areaStyle = {}
    }

    return obj
  })
}

// 对于多条不确定的折线图，name可以与key相同
const nameAndKeySame = (data: any) => {
  const nameAndKey: { name: string; key: string }[] = []
  Object.keys(data).forEach((item: string) => {
    nameAndKey.push({
      name: item,
      key: item,
    })
  })
  return nameAndKey
}
export { getColumns, getNameAndKey, nameAndKeySame, handleFromArray2ArrayObject }
