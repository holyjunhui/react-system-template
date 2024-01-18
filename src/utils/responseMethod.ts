import { message, notification } from '@/components/EscapeAntd'
import logout from './logout'

const responseMethod = {
  responseSuccess: (res: any) => {
    const { status } = res
    const { description } = res.data

    // 完全正确
    if (status === 200) {
      return Promise.resolve(res.data)
    }
    switch (status) {
      case 200:
        return Promise.resolve(res.data)
      case 201:
        return Promise.resolve()
      case 204:
        return Promise.resolve()
      default:
        break
    }

    message.error(description)

    return Promise.reject(res)
  },
  responseError: (error: any) => {
    const { status } = error.response
    const description = error?.response?.data?.description
    // form表单错误

    if (status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          logout()
          message.error('重新登录')
          return Promise.reject(description)

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空userStore中token对象
        // 跳转登录页面
        case 403:
          logout()
          break
        // 404请求不存在
        case 404:
          notification.error({
            message: `请求不存在`,
            description: error.response.data?.msg || 'Error',
          })
          break
        case 406:
          notification.error({
            message: `请求参数有误`,
            description: error.response.data?.msg || 'Error',
          })
          break
        default:
          notification.error({
            message: `请求错误`,
            description: error.response.data?.msg || 'Error',
          })
      }
    }

    // throw new Error(error);
    return Promise.reject(error)
  },
}

export default responseMethod
