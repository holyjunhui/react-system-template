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
  ModelAddressPermissionCreateDTO,
  ModelAddressPermissionDeleteDTO,
  ModelRoleCreateDTO,
  ModelRoleDeleteDTO,
  ModelRolePermsUpdateDTO,
  ModelRoleResolveCreateDTO,
  ModelRoleResolveDeleteDTO,
  ModelRoleResolveUpdateDTO,
  ModelRoleUpdateDTO,
  UtilsEmptyResponse,
  UtilsPageDataModelAddressPermissionQueryVO,
  UtilsPageDataModelRoleQueryVO,
  UtilsPageDataModelRoleResolveQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Role<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name RoleList
   * @summary 查询角色
   * @request GET:/role
   * @secure
   */
  roleList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelRoleQueryVO, any>({
      path: `/role`,
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
   * @name RoleCreate
   * @summary 创建角色
   * @request POST:/role
   * @secure
   */
  roleCreate = (req: ModelRoleCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role`,
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
   * @name RoleDelete
   * @summary 删除角色
   * @request DELETE:/role
   * @secure
   */
  roleDelete = (req: ModelRoleDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role`,
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
   * @name AddressPermissionList
   * @summary 角色>地址解析查询
   * @request GET:/role/address-permission
   * @secure
   */
  addressPermissionList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      roleID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelAddressPermissionQueryVO, any>({
      path: `/role/address-permission`,
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
   * @name AddressPermissionCreate
   * @summary 角色>地址解析新增
   * @request POST:/role/address-permission
   * @secure
   */
  addressPermissionCreate = (req: ModelAddressPermissionCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role/address-permission`,
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
   * @name AddressPermissionDelete
   * @summary 角色>地址解析删除
   * @request DELETE:/role/address-permission
   * @secure
   */
  addressPermissionDelete = (req: ModelAddressPermissionDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role/address-permission`,
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
   * @name ResolveList
   * @summary 角色分域数据配置查询
   * @request GET:/role/resolve
   * @secure
   */
  resolveList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      roleID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelRoleResolveQueryVO, any>({
      path: `/role/resolve`,
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
   * @name ResolveCreate
   * @summary 角色分域数据配置新增
   * @request POST:/role/resolve
   * @secure
   */
  resolveCreate = (req: ModelRoleResolveCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role/resolve`,
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
   * @name ResolveDelete
   * @summary 角色分域数据配置删除
   * @request DELETE:/role/resolve
   * @secure
   */
  resolveDelete = (req: ModelRoleResolveDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role/resolve`,
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
   * @name ResolveUpdate
   * @summary 角色分域数据配置修改
   * @request PUT:/role/resolve/{id}
   * @secure
   */
  resolveUpdate = (id: number, req: ModelRoleResolveUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role/resolve/${id}`,
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
   * @name RoleCreate2
   * @summary 修改角色
   * @request POST:/role/{id}
   * @originalName roleCreate
   * @duplicate
   * @secure
   */
  roleCreate2 = (id: number, req: ModelRoleUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role/${id}`,
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
   * @name PermsUpdate
   * @summary 修改角色功能权限
   * @request PUT:/role/{id}/perms
   * @secure
   */
  permsUpdate = (id: number, req: ModelRolePermsUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/role/${id}/perms`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
