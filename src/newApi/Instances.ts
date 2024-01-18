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
  HandlerInstanceReq,
  HandlerInstanceReviewReq,
  ModelInstanceResp,
  UtilsHTTPCreated,
  UtilsHTTPDeleted,
  UtilsHTTPError,
  UtilsHTTPUpdated,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Instances<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 系统账号能查看全部域名 渠道商账号能查看其客户的域名 客户账号只能查看自己的域名
   *
   * @tags instances
   * @name InstancesList
   * @summary 查询域名列表
   * @request GET:/instances
   * @secure
   */
  instancesList = (
    query?: {
      /** 状态 */
      status?: 'enabled' | 'disabled'
      /** 阿里账号ID */
      ali_account_id?: number
      /** 名称 */
      name?: string
      /** 实例码 */
      code?: string
      /** 审核状态 */
      review_status?: 'pending' | 'accepted' | 'rejected'
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
    this.request<ModelInstanceResp[], UtilsHTTPError>({
      path: `/instances`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供客户账号使用
   *
   * @tags instances
   * @name InstancesCreate
   * @summary 添加实例
   * @request POST:/instances
   * @secure
   */
  instancesCreate = (req: HandlerInstanceReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPCreated, UtilsHTTPError>({
      path: `/instances`,
      method: 'POST',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description 系统账号能查看全部实例 渠道商账号能查看其客户的实例 客户账号只能查看自己的实例
   *
   * @tags instances
   * @name InstancesDetail
   * @summary 获取实例信息
   * @request GET:/instances/{instanceId}
   * @secure
   */
  instancesDetail = (instanceId: number, params: RequestParams = {}) =>
    this.request<ModelInstanceResp, UtilsHTTPError>({
      path: `/instances/${instanceId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供客户账号使用
   *
   * @tags instances
   * @name InstancesUpdate
   * @summary 更新实例信息
   * @request PUT:/instances/{instanceId}
   * @secure
   */
  instancesUpdate = (instanceId: number, req: HandlerInstanceReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/instances/${instanceId}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供客户账号使用
   *
   * @tags instances
   * @name InstancesDelete
   * @summary 删除实例
   * @request DELETE:/instances/{instanceId}
   * @secure
   */
  instancesDelete = (instanceId: number, params: RequestParams = {}) =>
    this.request<UtilsHTTPDeleted, UtilsHTTPError>({
      path: `/instances/${instanceId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供渠道商账号（运营人员）使用
   *
   * @tags instances
   * @name ReviewUpdate
   * @summary 运营人员审核新增实例
   * @request PUT:/instances/{instanceId}/review
   * @secure
   */
  reviewUpdate = (instanceId: number, req: HandlerInstanceReviewReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/instances/${instanceId}/review`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供客户账号使用
   *
   * @tags instances
   * @name StatusUpdate
   * @summary 切换实例状态
   * @request PUT:/instances/{instanceId}/status
   * @secure
   */
  statusUpdate = (
    instanceId: number,
    query: {
      /** 状态 */
      status: 'enabled' | 'disabled'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/instances/${instanceId}/status`,
      method: 'PUT',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
