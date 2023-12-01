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
  ModelRemoteAuthConfigRoleSetDTO,
  ModelRemoteAuthConfigSetDTO,
  ModelRemoteAuthOrderCreateDTO,
  ModelRemoteAuthOrderDeleteDTO,
  ModelRemoteAuthOrderUpdateDTO,
  ModelRemoteAuthRoleMapCreateDTO,
  ModelRemoteAuthRoleMapDeleteDTO,
  ModelRemoteAuthServiceCreateDTOSwagger,
  ModelRemoteAuthServiceDeleteDTO,
  ModelRemoteAuthServiceUpdateDTOSwagger,
  UtilsDataResponseStructsRemoteAuthSetting,
  UtilsDataResponseUtilsPageDataModelRemoteAuthOrderGetVO,
  UtilsDataResponseUtilsPageDataModelRemoteAuthRoleMapQueryVO,
  UtilsDataResponseUtilsPageDataModelRemoteAuthServiceQueryVO,
  UtilsEmptyResponse,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class RemoteAuth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name ConfigList
   * @summary 远程认证配置查询
   * @request GET:/remote-auth/config
   * @secure
   */
  configList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsRemoteAuthSetting, any>({
      path: `/remote-auth/config`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name ConfigUpdate
   * @summary 远程认证配置修改
   * @request PUT:/remote-auth/config
   * @secure
   */
  configUpdate = (req: ModelRemoteAuthConfigSetDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/config`,
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
   * @tags User
   * @name ConfigRoleUpdate
   * @summary 远程认证配置角色修改
   * @request PUT:/remote-auth/config-role
   * @secure
   */
  configRoleUpdate = (req: ModelRemoteAuthConfigRoleSetDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/config-role`,
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
   * @tags User
   * @name OrderList
   * @summary 远程认证排序查询
   * @request GET:/remote-auth/order
   * @secure
   */
  orderList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseUtilsPageDataModelRemoteAuthOrderGetVO, any>({
      path: `/remote-auth/order`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name OrderUpdate
   * @summary 远程认证排序修改
   * @request PUT:/remote-auth/order
   * @secure
   */
  orderUpdate = (req: ModelRemoteAuthOrderUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/order`,
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
   * @tags User
   * @name OrderDelete
   * @summary 远程认证删除
   * @request DELETE:/remote-auth/order
   * @secure
   */
  orderDelete = (req: ModelRemoteAuthOrderDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/order`,
      method: 'DELETE',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name OrderCreate
   * @summary 远程认证排序新增
   * @request POST:/remote-auth/order/{id}
   * @secure
   */
  orderCreate = (id: number, req: ModelRemoteAuthOrderCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/order/${id}`,
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
   * @tags User
   * @name RoleMapList
   * @summary 远程认证角色映射查询
   * @request GET:/remote-auth/role-map
   * @secure
   */
  roleMapList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRemoteAuthRoleMapQueryVO, any>({
      path: `/remote-auth/role-map`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name RoleMapCreate
   * @summary 远程认证角色映射新增
   * @request POST:/remote-auth/role-map
   * @secure
   */
  roleMapCreate = (req: ModelRemoteAuthRoleMapCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/role-map`,
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
   * @tags User
   * @name RoleMapDelete
   * @summary 远程认证角色映射删除
   * @request DELETE:/remote-auth/role-map
   * @secure
   */
  roleMapDelete = (req: ModelRemoteAuthRoleMapDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/role-map`,
      method: 'DELETE',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name ServiceList
   * @summary 远程认证服务查询
   * @request GET:/remote-auth/service
   * @secure
   */
  serviceList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRemoteAuthServiceQueryVO, any>({
      path: `/remote-auth/service`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name ServiceCreate
   * @summary 远程认证服务新增
   * @request POST:/remote-auth/service
   * @secure
   */
  serviceCreate = (req: ModelRemoteAuthServiceCreateDTOSwagger, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/service`,
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
   * @tags User
   * @name ServiceDelete
   * @summary 远程认证服务删除
   * @request DELETE:/remote-auth/service
   * @secure
   */
  serviceDelete = (req: ModelRemoteAuthServiceDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/service`,
      method: 'DELETE',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name ServiceUpdate
   * @summary 远程认证服务修改
   * @request PUT:/remote-auth/service/{id}
   * @secure
   */
  serviceUpdate = (
    id: number,
    req: ModelRemoteAuthServiceUpdateDTOSwagger,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/remote-auth/service/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
