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
  ModelAccountMenuItem,
  ModelAliAccountMenuItem,
  ModelBaseMenuItem,
  ModelInstanceMenuItem,
  UtilsHTTPError,
} from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Menu<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags accounts
   * @name AccountsList
   * @summary 获取账号菜单
   * @request GET:/menu/accounts
   * @secure
   */
  accountsList = (params: RequestParams = {}) =>
    this.request<ModelAccountMenuItem[], UtilsHTTPError>({
      path: `/menu/accounts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags aliaccounts
   * @name AliaccountsList
   * @summary 获取阿里云账号的菜单列表
   * @request GET:/menu/aliaccounts
   * @secure
   */
  aliaccountsList = (params: RequestParams = {}) =>
    this.request<ModelAliAccountMenuItem[], UtilsHTTPError>({
      path: `/menu/aliaccounts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供渠道商账号使用
   *
   * @tags customers
   * @name CustomersList
   * @summary 获取客户列表菜单
   * @request GET:/menu/customers
   * @secure
   */
  customersList = (params: RequestParams = {}) =>
    this.request<ModelBaseMenuItem[], UtilsHTTPError>({
      path: `/menu/customers`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description 仅供客户账号使用
   *
   * @tags instances
   * @name InstancesList
   * @summary 获取当前客户的全部实例菜单
   * @request GET:/menu/instances
   * @secure
   */
  instancesList = (
    query?: {
      /** 实例类型/版本 */
      editions?: ('baoxian' | 'wuyou' | 'jiasu')[]
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelInstanceMenuItem[], UtilsHTTPError>({
      path: `/menu/instances`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
