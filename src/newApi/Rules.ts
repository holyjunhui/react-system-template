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
  HandlerNetworkRuleReq,
  HandlerQueryResp,
  HandlerWebRuleReq,
  ModelNetworkRule,
  ModelWebCertificate,
  ModelWebRealServer,
  ModelWebRule,
  UtilsHTTPCreated,
  UtilsHTTPDeleted,
  UtilsHTTPError,
  UtilsHTTPUpdated,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Rules<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags networkrule
   * @name NetworkList
   * @summary 获取端口接入列表
   * @request GET:/rules/network
   * @secure
   */
  networkList = (
    query?: {
      /** 转发端口 */
      frontend_port?: number
      /** 实例ID */
      instance_id?: number
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
      path: `/rules/network`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags networkrule
   * @name NetworkCreate
   * @summary 添加端口接入
   * @request POST:/rules/network
   * @secure
   */
  networkCreate = (req: HandlerNetworkRuleReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPCreated, UtilsHTTPError>({
      path: `/rules/network`,
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
   * @tags networkrule
   * @name NetworkDetail
   * @summary 获取端口接入详情
   * @request GET:/rules/network/{id}
   * @secure
   */
  networkDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelNetworkRule, UtilsHTTPError>({
      path: `/rules/network/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags networkrule
   * @name NetworkUpdate
   * @summary 更新端口接入
   * @request PUT:/rules/network/{id}
   * @secure
   */
  networkUpdate = (id: number, req: HandlerNetworkRuleReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/rules/network/${id}`,
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
   * @tags networkrule
   * @name NetworkDelete
   * @summary 删除端口接入
   * @request DELETE:/rules/network/{id}
   * @secure
   */
  networkDelete = (id: number, params: RequestParams = {}) =>
    this.request<UtilsHTTPDeleted, UtilsHTTPError>({
      path: `/rules/network/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags webrule
   * @name GetRules
   * @summary 获取域名接入列表
   * @request GET:/rules/web
   * @secure
   */
  getRules = (
    query?: {
      /** 域名 */
      domain?: string
      /** 实例ID */
      instance_id?: number
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
      path: `/rules/web`,
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
   * @name PostRules
   * @summary 添加域名接入
   * @request POST:/rules/web
   * @secure
   */
  postRules = (req: HandlerWebRuleReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPCreated, UtilsHTTPError>({
      path: `/rules/web`,
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
   * @name GetRules2
   * @summary 获取域名接入详情
   * @request GET:/rules/web/{id}
   * @originalName getRules
   * @duplicate
   * @secure
   */
  getRules2 = (id: number, params: RequestParams = {}) =>
    this.request<ModelWebRule, UtilsHTTPError>({
      path: `/rules/web/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags webrule
   * @name PutRules
   * @summary 更新域名接入
   * @request PUT:/rules/web/{id}
   * @secure
   */
  putRules = (id: number, req: HandlerWebRuleReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/rules/web/${id}`,
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
   * @name DeleteRules
   * @summary 删除域名接入
   * @request DELETE:/rules/web/{id}
   * @secure
   */
  deleteRules = (id: number, params: RequestParams = {}) =>
    this.request<UtilsHTTPDeleted, UtilsHTTPError>({
      path: `/rules/web/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags webrule
   * @name WebCertificateUpdate
   * @summary 更新域名接入的证书配置
   * @request PUT:/rules/web/{id}/certificate
   * @secure
   */
  webCertificateUpdate = (id: number, req: ModelWebCertificate, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/rules/web/${id}/certificate`,
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
   * @name WebRealserverUpdate
   * @summary 更新域名接入-回源信息
   * @request PUT:/rules/web/{id}/realserver
   * @secure
   */
  webRealserverUpdate = (id: number, req: ModelWebRealServer, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/rules/web/${id}/realserver`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
