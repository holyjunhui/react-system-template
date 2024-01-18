/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HandlerQueryResp, UtilsHTTPError } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Logs<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 主账号可以查看自己及子账号的操作日志 操作员角色只能查看自己的操作日志 (审计员可以查看全部操作日志) 渠道商账号不允许查看客户的操作日志
   *
   * @tags logs
   * @name OperationsList
   * @summary 查询操作日志
   * @request GET:/logs/operations
   * @secure
   */
  operationsList = (
    query?: {
      /** 状态 */
      status?: 'enabled' | 'disabled'
      /** 开始时间,以秒为单位的时间戳 */
      start_time?: number
      /** 结束时间,以秒为单位的时间戳 */
      end_time?: number
      /** 前端时区相对UTC时间偏移的时间量,不填默认零时区,单位 (秒), e.g.东八区为28800 */
      utc_offset?: number
      /** 客户端IP */
      client_ip?: string
      /** 账号ID */
      account_id?: number
      /** 操作项目 */
      subject?: string
      /** 操作动作 */
      action?: string
      /** 是否成功 */
      is_success?: boolean
      /**
       * 搜索关键词
       * @minLength 3
       * @maxLength 64
       */
      search?: string
      /**
       * 分页页码
       * @min 1
       */
      page_number?: number
      /**
       * 分页条目个数
       * @min 1
       * @max 100
       */
      page_size?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<HandlerQueryResp, UtilsHTTPError>({
      path: `/logs/operations`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
