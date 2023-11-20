import request from '@/utils/request'

export const login = (data: { code?: string; password: string; username: string }) =>
  request.post('api/user/login', data)

export const getCaptcha = () => request.get(`/api/user/captcha`)
export const getUserInfo = () => request.get(`/api/user/info`)
