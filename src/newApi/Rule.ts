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
  HandlerQueryResp,
  HandlerWebRuleReq,
  ModelWebCertificate,
  ModelWebRealServer,
  ModelWebRule,
  UtilsHTTPCreated,
  UtilsHTTPDeleted,
  UtilsHTTPError,
  UtilsHTTPUpdated,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Rule<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags webrule
   * @name GetRule
   * @summary 获取域名接入列表
   * @request GET:/rule/web
   * @secure
   */
  getRule = (
    query?: {
      /** 域名 */
      domain?: string
      /** 实例码 */
      instanceID?: number
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
      path: `/rule/web`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags webrule
   * @name PostRule
   * @summary 添加域名接入
   * @request POST:/rule/web
   * @secure
   */
  postRule = (req: HandlerWebRuleReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPCreated, UtilsHTTPError>({
      path: `/rule/web`,
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
   * @tags webrule
   * @name GetRule2
   * @summary 获取域名接入详情
   * @request GET:/rule/web/{id}
   * @originalName getRule
   * @duplicate
   * @secure
   */
  getRule2 = (id: number, params: RequestParams = {}) =>
    this.request<ModelWebRule, UtilsHTTPError>({
      path: `/rule/web/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags webrule
   * @name PutRule
   * @summary 更新域名接入
   * @request PUT:/rule/web/{id}
   * @secure
   */
  putRule = (id: number, req: HandlerWebRuleReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/rule/web/${id}`,
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
   * @tags webrule
   * @name DeleteRule
   * @summary 删除域名接入
   * @request DELETE:/rule/web/{id}
   * @secure
   */
  deleteRule = (id: number, params: RequestParams = {}) =>
    this.request<UtilsHTTPDeleted, UtilsHTTPError>({
      path: `/rule/web/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags webrule
   * @name WebCaUpdate
   * @summary 更新域名接入CA
   * @request PUT:/rule/web/{id}/ca
   * @secure
   */
  webCaUpdate = (id: number, req: ModelWebCertificate, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/rule/web/${id}/ca`,
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
   * @tags webrule
   * @name WebPolicyUpdate
   * @summary 更新域名接入-回源信息
   * @request PUT:/rule/web/{id}/policy
   * @secure
   */
  webPolicyUpdate = (id: number, req: ModelWebRealServer, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/rule/web/${id}/policy`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
