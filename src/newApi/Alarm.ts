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
  ModelAlarmConfigCreateDTO,
  ModelAlarmConfigUpdateDTO,
  ModelAlarmLabel,
  ModelAlarmNotifyQueryDTO,
  UtilsEmptyResponse,
  UtilsPageDataModelAlarmActiveDetailVO,
  UtilsPageDataModelAlarmConfigQueryVO,
  UtilsPageDataModelAlarmHistoryQueryVO,
  UtilsPageDataModelAlarmNotifyQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Alarm<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags alarm
   * @name ActiveList
   * @summary 查询活动告警详情
   * @request GET:/alarm/active
   * @secure
   */
  activeList = (
    query: {
      /** 告警级别 */
      alarmLevel?: string
      /** 告警类型 */
      alarmType?: string
      deviceName?: string
      /** 结束时间 */
      endTime?: string
      extra?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      /** 产生时间 */
      startTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelAlarmActiveDetailVO, any>({
      path: `/alarm/active`,
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
   * @tags alarm
   * @name ActiveCreate
   * @summary 活动告警插入
   * @request POST:/alarm/active
   * @secure
   */
  activeCreate = (
    query?: {
      alarmLevel?: string
      alarmStatus?: string
      alarmType?: string
      deviceName?: string
      endTime?: string
      extra?: string
      message?: string
      startTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/alarm/active`,
      method: 'POST',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags alarm
   * @name ConfigList
   * @summary 获取告警配置
   * @request GET:/alarm/config
   */
  configList = (
    query: {
      alarmType?: string
      deviceName?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelAlarmConfigQueryVO, any>({
      path: `/alarm/config`,
      method: 'GET',
      query: query,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags alarm
   * @name ConfigCreate
   * @summary 告警配置添加
   * @request POST:/alarm/config
   * @secure
   */
  configCreate = (req: ModelAlarmConfigCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/alarm/config`,
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
   * @name ConfigUpdate
   * @summary 告警配置修改
   * @request PUT:/alarm/config/{id}
   */
  configUpdate = (id: string, req: ModelAlarmConfigUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/alarm/config/${id}`,
      method: 'PUT',
      body: req,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags alarm
   * @name ConfigDelete
   * @summary 告警配置删除
   * @request DELETE:/alarm/config/{id}
   */
  configDelete = (
    id: string,
    query: {
      ids: number[]
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/alarm/config/${id}`,
      method: 'DELETE',
      query: query,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags alarm
   * @name HistoryList
   * @summary 查询告警历史
   * @request GET:/alarm/history
   * @secure
   */
  historyList = (
    query: {
      alarmLevel?: string
      alarmType?: string
      deviceName?: string
      endTime?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      startTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelAlarmHistoryQueryVO, any>({
      path: `/alarm/history`,
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
   * @tags alarm
   * @name MetadataList
   * @summary 查询告警元信息
   * @request GET:/alarm/metadata
   * @secure
   */
  metadataList = (
    query?: {
      needFilter?: boolean
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelAlarmLabel[], any>({
      path: `/alarm/metadata`,
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
   * @tags alarm
   * @name NotifyList
   * @summary 查询告警通知配置
   * @request GET:/alarm/notify
   * @secure
   */
  notifyList = (req: ModelAlarmNotifyQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelAlarmNotifyQueryVO, any>({
      path: `/alarm/notify`,
      method: 'GET',
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
   * @name NotifyMailCreate
   * @summary 设置告警邮件信息
   * @request POST:/alarm/notify/mail
   */
  notifyMailCreate = (
    query?: {
      enabled?: boolean
      password?: string
      port?: number
      server?: string
      sslEnabled?: boolean
      type?: string
      user?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/alarm/notify/mail`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
