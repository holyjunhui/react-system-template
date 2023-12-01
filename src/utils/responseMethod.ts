import { message, notification } from 'antd'
import logout from './logout'

const responseMethod = {
  responseSuccess: (res: any) => {
    const { status } = res
    const { rcode, description, data } = res.data

    if (rcode === 7) {
      // 换行符换行
      message.warning(description)
      logout()
    }
    // 特殊提示
    if (status === 200 && rcode === 1003) {
      // 警告信息，全局提示
      notification.warning({
        description,
        duration: null,
        message: '警告',
        placement: 'topRight',
      })
      return Promise.resolve(data)
    }
    // 文件下载
    if (status === 200 && Object.prototype.toString.call(res.data) === '[object Blob]') {
      return Promise.resolve(res)
    }
    // 完全正确
    if (status === 200 && rcode === 0) {
      // 批量处理 visible，通过国际化设置 title 值
      // if (data?.visible) {
      //   data.visible = data.visible.map((item) => {
      //     console.log(i18n.t(item?.dataIndex))
      //     return { ...item, title: i18n.t(item?.dataIndex) }
      //   })
      // }
      return Promise.resolve(data)
    }

    message.error(description)

    return Promise.reject(res)
  },
  responseError: (error: any) => {
    const { status, data } = error.response
    const description = error?.response?.data?.description
    const rcode = error?.response?.data?.rcode
    // form表单错误
    if (status === 400) {
      if (rcode === 1002) {
        const des = description.split('\n').map((item: any) => {
          const str = item?.split(':')
          // str包含.即是嵌套对象，需要拆分为数组
          // 判断嵌套对象 如：source.cidr:必须是一个有效的无类别域间路由(CIDR)\ndestination.cidr:必须是一个有效的无类别域间路由(CIDR)
          if (str[0].includes('.')) {
            const nameObj2Arr = str?.[0]?.split('.')
            // 判断key是否是数组 members[0].cidr:必须是一个有效的无类别域间路由(CIDR)
            if (nameObj2Arr?.[0].includes('[')) {
              const nameArray = str?.[0]?.split('[')
              const name = nameArray?.[0]
              const index = Number(nameArray?.[1]?.split(']')[0])
              const key = nameArray?.[1]?.split('.')[1]
              return {
                name: [name, index, key],
                errors: [str[1]],
              }
            }
            return {
              name: nameObj2Arr,
              errors: [str[1]],
            }
          }
          // 判断key是否是数组 如： xfrSlaves[0]:必须是一个有效的IP地址
          if (str[0].includes('[')) {
            const nameArray = str?.[0]?.split('[')
            const name = nameArray?.[0]
            const index = Number(nameArray?.[1]?.split(']')[0])

            return {
              name,
              errors: [`第${index + 1}行${str[1]}`],
            }
          }
          return {
            name: str?.[0],
            errors: [str?.[1]],
          }
        })

        return Promise.reject({
          ...error.response.data,
          formErrors: des,
        })
      }

      if (rcode === 1001) {
        logout()
        message.error('重新登录')

        return Promise.reject(error)
      }
    }
    // token无效
    if (status === 401) {
      logout()
      message.error('重新登录')
      return Promise.reject(description)
    }
    if (status === 403) {
      message.error('无权限')

      return Promise.reject('无权限')
    }

    if (!description && status >= 500 && status < 600) {
      message.error('服务器报错，请联系管理员')

      return Promise.reject('服务器报错，请联系管理员')
    }
    if (status === 404) {
      message.error('接口报错404，请联系管理员')

      return Promise.reject('接口报错404，请联系管理员')
    }
    if (Object.prototype.toString.call(data) !== '[object Blob]') {
      message.error(description || '报错信息为空')
    }

    return Promise.reject(error)
  },
}

export default responseMethod
