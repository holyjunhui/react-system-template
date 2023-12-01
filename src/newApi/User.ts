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
  ModelAccountCreateDTO,
  ModelAccountDeleteDTO,
  ModelAccountResetPasswordDTO,
  ModelAccountUpdateDTO,
  ModelAccountUpdateEnableDTO,
  ModelAccountUpdateNicknameDTO,
  ModelAccountUpdatePasswordDTO,
  ModelAccountUpdateUnlockDTO,
  ModelLoginDTO,
  UtilsDataResponseModelLoginVO,
  UtilsDataResponseString,
  UtilsEmptyResponse,
  UtilsPageDataModelAccountQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name AccountList
   * @summary 查询用户
   * @request GET:/user/account
   * @secure
   */
  accountList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      status?: 'disabled' | 'enabled' | 'locked'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelAccountQueryVO, any>({
      path: `/user/account`,
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
   * @name AccountCreate
   * @summary 新增用户
   * @request POST:/user/account
   * @secure
   */
  accountCreate = (req: ModelAccountCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account`,
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
   * @name AccountDelete
   * @summary 删除用户
   * @request DELETE:/user/account
   * @secure
   */
  accountDelete = (req: ModelAccountDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account`,
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
   * @name AccountChangePasswordUpdate
   * @summary 修改密码
   * @request PUT:/user/account/change-password
   * @secure
   */
  accountChangePasswordUpdate = (req: ModelAccountUpdatePasswordDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account/change-password`,
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
   * @name AccountNicknameUpdate
   * @summary 修改昵称
   * @request PUT:/user/account/nickname
   * @secure
   */
  accountNicknameUpdate = (req: ModelAccountUpdateNicknameDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account/nickname`,
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
   * @name AccountUnlockUpdate
   * @summary 修改用户锁定状态
   * @request PUT:/user/account/unlock
   * @secure
   */
  accountUnlockUpdate = (req: ModelAccountUpdateUnlockDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account/unlock`,
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
   * @name AccountUpdate
   * @summary 修改用户
   * @request PUT:/user/account/{id}
   * @secure
   */
  accountUpdate = (id: string, req: ModelAccountUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account/${id}`,
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
   * @name AccountEnableUpdate
   * @summary 修改用户启用状态
   * @request PUT:/user/account/{id}/enable
   * @secure
   */
  accountEnableUpdate = (
    id: number,
    req: ModelAccountUpdateEnableDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account/${id}/enable`,
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
   * @name AccountResetPasswordUpdate
   * @summary 重置密码
   * @request PUT:/user/account/{id}/reset-password
   * @secure
   */
  accountResetPasswordUpdate = (
    id: string,
    req: ModelAccountResetPasswordDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/account/${id}/reset-password`,
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
   * @name CaptchaList
   * @summary 获取验证码
   * @request GET:/user/captcha
   * @secure
   */
  captchaList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseString, any>({
      path: `/user/captcha`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description get user info by access token
   *
   * @tags User
   * @name InfoList
   * @summary 获取登录用信息
   * @request GET:/user/info
   * @secure
   */
  infoList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelLoginVO, any>({
      path: `/user/info`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description get string by ID
   *
   * @tags User
   * @name LoginCreate
   * @summary 登录
   * @request POST:/user/login
   * @secure
   */
  loginCreate = (req: ModelLoginDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelLoginVO, any>({
      path: `/user/login`,
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
   * @name LogoutList
   * @summary 登出
   * @request GET:/user/logout
   * @secure
   */
  logoutList = (params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/logout`,
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
   * @name MenuList
   * @summary 获取所有菜单
   * @request GET:/user/menu
   * @secure
   */
  menuList = (params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/user/menu`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
