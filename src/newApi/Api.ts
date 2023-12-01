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
  ModelAlarmDeleteDTO,
  ModelAlarmEmailConfig,
  ModelAlarmNotifyCreateDTO,
  ModelAlarmNotifyDeleteDTO,
  ModelAlarmNotifyUpdateDTO,
  UtilsEmptyResponse,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags alarm
   * @name AlarmActiveDelete
   * @summary 设置告警通知配置
   * @request DELETE:/api/alarm/active
   * @secure
   */
  alarmActiveDelete = (req: ModelAlarmDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/api/alarm/active`,
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
   * @tags alarm
   * @name AlarmNotifyUpdate
   * @summary 设置告警通知配置
   * @request PUT:/api/alarm/notify
   * @secure
   */
  alarmNotifyUpdate = (req: ModelAlarmNotifyUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/api/alarm/notify`,
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
   * @tags alarm
   * @name AlarmNotifyCreate
   * @summary 设置告警通知配置
   * @request POST:/api/alarm/notify
   * @secure
   */
  alarmNotifyCreate = (req: ModelAlarmNotifyCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/api/alarm/notify`,
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
   * @tags alarm
   * @name AlarmNotifyDelete
   * @summary 设置告警通知配置
   * @request DELETE:/api/alarm/notify
   * @secure
   */
  alarmNotifyDelete = (req: ModelAlarmNotifyDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/api/alarm/notify`,
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
   * @tags sms
   * @name AlarmNotifyMailList
   * @summary 查询短信信息
   * @request GET:/api/alarm/notify/mail
   * @secure
   */
  alarmNotifyMailList = (params: RequestParams = {}) =>
    this.request<ModelAlarmEmailConfig, any>({
      path: `/api/alarm/notify/mail`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
