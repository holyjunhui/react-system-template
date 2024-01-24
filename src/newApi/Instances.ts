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
  HandlerInstanceCreateReq,
  HandlerInstanceReviewReq,
  HandlerInstanceUpdateReq,
  ModelInstanceResp,
  UtilsHTTPCreated,
  UtilsHTTPDeleted,
  UtilsHTTPError,
  UtilsHTTPUpdated,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Instances<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 系统账号能查看全部实例 渠道商账号能查看其客户的实例 客户账号只能查看自己的实例
   *
   * @tags instances
   * @name InstancesList
   * @summary 查询实例列表
   * @request GET:/instances
   * @secure
   */
  instancesList = (
    query?: {
      /** 状态 */
      status?: 'enabled' | 'disabled'
      /** 名称 */
      name?: string
      /** 实例码 */
      code?: string
      /** 实例类型/版本 */
      edition?: 'baoxian' | 'wuyou' | 'jiasu'
      /** 功能套餐类型 */
      function?: 'default' | 'enhance'
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
   * @description 仅供渠道商账号（运营人员）使用
   *
   * @tags instances
   * @name InstancesCreate
   * @summary 添加（购买）实例
   * @request POST:/instances
   * @secure
   */
  instancesCreate = (req: HandlerInstanceCreateReq, params: RequestParams = {}) =>
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
   * @request GET:/instances/{id}
   * @secure
   */
  instancesDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelInstanceResp, UtilsHTTPError>({
      path: `/instances/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags instances
   * @name InstancesUpdate
   * @summary 更新实例信息
   * @request PUT:/instances/{id}
   * @secure
   */
  instancesUpdate = (id: number, req: HandlerInstanceUpdateReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/instances/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供渠道商账号（运营人员）使用
   *
   * @tags instances
   * @name InstancesDelete
   * @summary 删除实例
   * @request DELETE:/instances/{id}
   * @secure
   */
  instancesDelete = (id: number, params: RequestParams = {}) =>
    this.request<UtilsHTTPDeleted, UtilsHTTPError>({
      path: `/instances/${id}`,
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
   * @request PUT:/instances/{id}/review
   * @secure
   */
  reviewUpdate = (id: number, req: HandlerInstanceReviewReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/instances/${id}/review`,
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
   * @tags instances
   * @name StatusUpdate
   * @summary 切换实例状态
   * @request PUT:/instances/{id}/status
   * @secure
   */
  statusUpdate = (
    id: number,
    query: {
      /** 状态 */
      status: 'enabled' | 'disabled'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/instances/${id}/status`,
      method: 'PUT',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
