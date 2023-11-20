import axios from 'axios'
import qs from 'qs'
import { notification } from 'antd'

const request = axios.create({
  baseURL: '',
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer(params) {
    // 针对get请求时需要对参数为空的字段进行处理
    // eg: =&page_size=page10&name=''&age=undefined  to page=null&page_size=1&name=null&age=null
    for (const key in params) {
      if (!params[key] && params[key] !== 0 && params[key] !== false) {
        params[key] = null
      }
    }
    // 去除空字符串 eg：age=null&name="li" to name="li"
    const formatParams = qs.stringify(params, { skipNulls: true })
    // 对传入的参数进行重复便利  note:https://www.npmjs.com/package/qs
    return qs.stringify(qs.parse(formatParams), {
      arrayFormat: 'repeat',
    })
  },
})

request.interceptors.request.use(
  (config) => {
    // 一般会请求拦截里面加token，用于后端的验证
    const token = localStorage.getItem('token') as string
    if (token) {
      config.headers!.Authorization = `token ${token}`
    }

    return config
  },
  (err) => {
    // 请求错误，这里可以用全局提示框进行提示
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (response) => {
    // const { status } = response
    const { data } = response.data
    console.log('response:', response)
    if (response.status === 200) {
      return data
    }

    notification.error({
      message: `请求错误 ${response.statusText}: ${response}`,
      description: data || response.statusText || 'Error',
    })

    // if (response.status === 401) {
    //   window.location.href = '/login'
    // }

    return Promise.reject(new Error(response.statusText || 'Error'))
  },
  async (error) => {
    // console.log('err:', error, error.response) // for debug

    if (error.response && error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        // case 401:
        //   window.location.href = '/login'

        //   break
        // // 403 token过期
        // // 登录过期对用户进行提示
        // // 清除本地token和清空vuex中token对象
        // // 跳转登录页面
        // case 403:
        //   window.location.href = '/login'
        //   break
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
  }
)

export default request
