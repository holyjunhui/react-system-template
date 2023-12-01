import qs from 'qs'
import responseMethod from './responseMethod'

export const paramsSerializer = (params: any) => {
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
}
export const requestResolve = (config: any) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `token ${token}`
  }
  return config
}

export const requestReject = (error: any) => {
  return Promise.reject(error)
}

export const responseResolve = (res: any) => {
  return responseMethod.responseSuccess(res)
}

export const responseReject = async (error: any) => {
  return responseMethod.responseError(error)
}
