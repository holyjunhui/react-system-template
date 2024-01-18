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
  HandlerLoginReq,
  HandlerLoginResp,
  HandlerPasswordReq,
  HandlerProfileReq,
  HandlerProfileResp,
  UtilsHTTPError,
  UtilsHTTPUpdated,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user
   * @name LoginCreate
   * @summary 登录账号
   * @request POST:/user/login
   */
  loginCreate = (req: HandlerLoginReq, params: RequestParams = {}) =>
    this.request<HandlerLoginResp, UtilsHTTPError>({
      path: `/user/login`,
      method: 'POST',
      body: req,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags user
   * @name LogoutCreate
   * @summary 登出账号
   * @request POST:/user/logout
   * @secure
   */
  logoutCreate = (params: RequestParams = {}) =>
    this.request<void, UtilsHTTPError>({
      path: `/user/logout`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags user
   * @name PasswordUpdate
   * @summary 修改密码
   * @request PUT:/user/password
   * @secure
   */
  passwordUpdate = (req: HandlerPasswordReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/user/password`,
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
   * @tags user
   * @name ProfileList
   * @summary 获取个人信息
   * @request GET:/user/profile
   * @secure
   */
  profileList = (params: RequestParams = {}) =>
    this.request<HandlerProfileResp, UtilsHTTPError>({
      path: `/user/profile`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags user
   * @name ProfileUpdate
   * @summary 更新个人信息
   * @request PUT:/user/profile
   * @secure
   */
  profileUpdate = (req: HandlerProfileReq, params: RequestParams = {}) =>
    this.request<UtilsHTTPUpdated, UtilsHTTPError>({
      path: `/user/profile`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
