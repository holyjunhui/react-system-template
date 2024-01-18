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
  HandlerAccountCreateReq,
  HandlerAccountImpersonateResp,
  HandlerAccountPasswordReq,
  HandlerAccountUpdateReq,
  ModelAccountResp,
  UtilsHTTPCreated,
  UtilsHTTPDeleted,
  UtilsHTTPError,
  UtilsHTTPUpdated,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Accounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 系统账号能查看全部账号 渠道商账号能查看自己的子账号及其客户账号 客户账号只能查看自己的子账号
   *
   * @tags accounts
   * @name AccountsList
   * @summary 查询账号列表
   * @request GET:/accounts
   * @secure
   */
  accountsList = (
    query?: {
      /** 状态 */
      status?: 'enabled' | 'disabled'
      /** 登录用户名 (搜索) */
      login?: string
      /** 名称 (搜索) */
      name?: string
      /** 邮箱地址 (搜索) */
      email?: string
      /** 电话号码 (搜索) */
      phone?: string
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
    this.request<ModelAccountResp[], UtilsHTTPError>({
      path: `/accounts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 系统账号 (type=system) 创建渠道商账号 (type=channel) 渠道商账号 (type=channel) 创建客户账号 (type=customer) 渠道商主账号 (type=channel, parent_id=0) 创建渠道商子账号 客户主账号 (type=customer, parent_id=0) 创建客户子账号
   *
   * @tags accounts
   * @name AccountsCreate
   * @summary 创建账号
   * @request POST:/accounts
   * @secure
   */
  accountsCreate = (req: HandlerAccountCreateReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPCreated, UtilsHTTPError>({
      path: `/accounts`,
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
   * @tags accounts
   * @name AccountsDetail
   * @summary 获取账号信息
   * @request GET:/accounts/{id}
   * @secure
   */
  accountsDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelAccountResp, UtilsHTTPError>({
      path: `/accounts/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags accounts
   * @name AccountsUpdate
   * @summary 更新账号信息
   * @request PUT:/accounts/{id}
   * @secure
   */
  accountsUpdate = (id: number, req: HandlerAccountUpdateReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/accounts/${id}`,
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
   * @tags accounts
   * @name AccountsDelete
   * @summary 删除账号
   * @request DELETE:/accounts/{id}
   * @secure
   */
  accountsDelete = (id: number, params: RequestParams = {}) =>
    this.request<UtilsHTTPDeleted, UtilsHTTPError>({
      path: `/accounts/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 客户主账号可以切换至其子账号登录（跳转至首页） 渠道商账号可以切换至其客户账号登录（代理运营，从运营系统跳转至用户系统）
   *
   * @tags accounts
   * @name ImpersonateCreate
   * @summary 切换登录账号
   * @request POST:/accounts/{id}/impersonate
   * @secure
   */
  impersonateCreate = (id: number, params: RequestParams = {}) =>
    this.request<HandlerAccountImpersonateResp, UtilsHTTPError>({
      path: `/accounts/${id}/impersonate`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 主账号可以直接为子账号设置密码（无需提供旧密码） 渠道商主账号可以直接为客户账号设置密码 修改自己的密码需要验证旧密码
   *
   * @tags accounts
   * @name PasswordUpdate
   * @summary 修改账号密码
   * @request PUT:/accounts/{id}/password
   * @secure
   */
  passwordUpdate = (id: number, form: HandlerAccountPasswordReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/accounts/${id}/password`,
      method: 'PUT',
      body: form,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description 切换账号启用/禁用状态；不可修改自己的状态
   *
   * @tags accounts
   * @name StatusUpdate
   * @summary 更新账号状态
   * @request PUT:/accounts/{id}/status
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
      path: `/accounts/${id}/status`,
      method: 'PUT',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
