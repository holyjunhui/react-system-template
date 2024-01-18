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

import {
  HandlerAliAccountReq,
  HandlerQueryResp,
  ModelAliAccount,
  UtilsHTTPCreated,
  UtilsHTTPDeleted,
  UtilsHTTPError,
  UtilsHTTPUpdated,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Aliaccounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 系统账号能查看全部阿里云账号 渠道商账号能查看自己的阿里云账号
   *
   * @tags aliaccounts
   * @name AliaccountsList
   * @summary 查询阿里云账号信息
   * @request GET:/aliaccounts
   * @secure
   */
  aliaccountsList = (
    query?: {
      /** 状态 */
      status?: 'enabled' | 'disabled'
      /** 用户名 */
      username?: string
      /** AccessKey ID */
      access_key_id?: string
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
      path: `/aliaccounts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags aliaccounts
   * @name AliaccountsCreate
   * @summary 添加阿里云账号
   * @request POST:/aliaccounts
   * @secure
   */
  aliaccountsCreate = (req: HandlerAliAccountReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPCreated, UtilsHTTPError>({
      path: `/aliaccounts`,
      method: 'POST',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags aliaccounts
   * @name AliaccountsDetail
   * @summary 获取阿里云账号信息
   * @request GET:/aliaccounts/{id}
   * @secure
   */
  aliaccountsDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelAliAccount, UtilsHTTPError>({
      path: `/aliaccounts/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags aliaccounts
   * @name AliaccountsUpdate
   * @summary 更新阿里云账号信息
   * @request PUT:/aliaccounts/{id}
   * @secure
   */
  aliaccountsUpdate = (id: number, req: HandlerAliAccountReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/aliaccounts/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags aliaccounts
   * @name AliaccountsDelete
   * @summary 删除阿里云账号
   * @request DELETE:/aliaccounts/{id}
   * @secure
   */
  aliaccountsDelete = (id: number, params: RequestParams = {}) =>
    this.request<UtilsHTTPDeleted, UtilsHTTPError>({
      path: `/aliaccounts/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 切换账号启用/禁用状态
   *
   * @tags aliaccounts
   * @name StatusUpdate
   * @summary 更新阿里云账号状态
   * @request PUT:/aliaccounts/{id}/status
   * @secure
   */
  statusUpdate = (
    id: number,
    query: {
      /** 账号状态 */
      status: 'enabled' | 'disabled'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/aliaccounts/${id}/status`,
      method: 'PUT',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
