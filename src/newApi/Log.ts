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
  LogLogBackupConfigCreateDTO,
  LogLogBackupConfigDeleteDTO,
  LogLogBackupConfigEnableDTO,
  LogLogBackupConfigUpdateDTO,
  LogLogSyslogConfigCreateDTO,
  LogLogSyslogConfigDeleteDTO,
  LogLogSyslogConfigEnableDTO,
  LogLogSyslogConfigLogEnableDTO,
  LogLogSyslogConfigUpdateDTO,
  UtilsDataResponseString,
  UtilsDataResponseUtilsPageDataLogDhcpFaultHistoryQueryVO,
  UtilsDataResponseUtilsPageDataLogDhcpIPLeaseHistoryQueryVO,
  UtilsDataResponseUtilsPageDataLogDhcpPacketHistoryQueryVO,
  UtilsDataResponseUtilsPageDataLogLogBackupConfigQueryVO,
  UtilsDataResponseUtilsPageDataLogLogDnsQueryVO,
  UtilsDataResponseUtilsPageDataLogLogHistoryQueryVO,
  UtilsDataResponseUtilsPageDataLogLogSyslogConfigQueryVO,
  UtilsDataResponseUtilsPageDataLogLogSystemQueryVO,
  UtilsDataResponseUtilsPageDataLogLogThreatIntelQueryVO,
  UtilsDataResponseUtilsPageDataLogLogUpgradeQueryVO,
  UtilsDataResponseUtilsPageDataLogLogXforceQueryVO,
  UtilsEmptyResponse,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Log<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags log
   * @name BackupConfigList
   * @summary 备份配置查询
   * @request GET:/log/backup-config
   * @secure
   */
  backupConfigList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      type?:
        | 'login'
        | 'operation'
        | 'dns'
        | 'system'
        | 'threat'
        | 'lease'
        | 'traffic'
        | 'xforce'
        | 'fault'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogBackupConfigQueryVO, any>({
      path: `/log/backup-config`,
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
   * @tags log
   * @name BackupConfigCreate
   * @summary 备份配置创建
   * @request POST:/log/backup-config
   * @secure
   */
  backupConfigCreate = (req: LogLogBackupConfigCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/backup-config`,
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
   * @tags log
   * @name BackupConfigDelete
   * @summary 备份配置删除
   * @request DELETE:/log/backup-config
   * @secure
   */
  backupConfigDelete = (req: LogLogBackupConfigDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/backup-config`,
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
   * @tags log
   * @name BackupConfigEnableUpdate
   * @summary 备份配置启用/禁用
   * @request PUT:/log/backup-config/enable
   * @secure
   */
  backupConfigEnableUpdate = (req: LogLogBackupConfigEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/backup-config/enable`,
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
   * @tags log
   * @name BackupConfigUpdate
   * @summary 备份配置更新
   * @request PUT:/log/backup-config/{id}
   * @secure
   */
  backupConfigUpdate = (id: string, req: LogLogBackupConfigUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/backup-config/${id}`,
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
   * @tags IPLease
   * @name DhcpFaultList
   * @summary 查询故障日志
   * @request GET:/log/dhcp/fault
   * @secure
   */
  dhcpFaultList = (
    query?: {
      device?: string
      /** 结束时间 */
      endTime?: string
      keyword?: string
      level?: string
      /** @max 5000 */
      limit?: number
      /** 开始时间 */
      startTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogDhcpFaultHistoryQueryVO, any>({
      path: `/log/dhcp/fault`,
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
   * @tags IPLease
   * @name DhcpLeaseList
   * @summary 查询历史租约
   * @request GET:/log/dhcp/lease
   * @secure
   */
  dhcpLeaseList = (
    query?: {
      device?: string
      /** 结束时间 */
      endTime?: string
      keyword?: string
      /** @max 5000 */
      limit?: number
      /** 开始时间 */
      startTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogDhcpIPLeaseHistoryQueryVO, any>({
      path: `/log/dhcp/lease`,
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
   * @tags DhcpPacket
   * @name DhcpPacketList
   * @summary 查询DHCP交互日志
   * @request GET:/log/dhcp/packet
   * @secure
   */
  dhcpPacketList = (
    query?: {
      device?: string
      /** 结束时间 */
      endTime?: string
      keyword?: string
      /** @max 5000 */
      limit?: number
      /** 开始时间 */
      startTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogDhcpPacketHistoryQueryVO, any>({
      path: `/log/dhcp/packet`,
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
   * @tags log
   * @name GetLog
   * @summary dns日志查询
   * @request GET:/log/dns
   * @secure
   */
  getLog = (
    query: {
      deviceID: number
      endTime: string
      /** 排除集群内的流量 HYP-5469 */
      excludes?: string[]
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      qName?: string
      rCode?: string
      srcIP?: string
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogDnsQueryVO, any>({
      path: `/log/dns`,
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
   * @tags log
   * @name DnsExportList
   * @summary DNS日志导出
   * @request GET:/log/dns/export
   * @secure
   */
  dnsExportList = (
    query: {
      deviceID: number
      endTime: string
      /** 排除集群内的流量 HYP-5469 */
      excludes?: string[]
      keyword?: string
      qName?: string
      rCode?: string
      srcIP?: string
      startTime: string
      token?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseString, any>({
      path: `/log/dns/export`,
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
   * @tags log
   * @name ExportList
   * @summary 登录日志、操作日志、系统日志导出
   * @request GET:/log/export
   * @secure
   */
  exportList = (
    query: {
      component?: string
      device?: string
      endTime: string
      level?: 'info' | 'warning' | 'error'
      name?: string
      startTime: string
      type?: 'login' | 'operation' | 'system'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseString, any>({
      path: `/log/export`,
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
   * @tags log
   * @name HistoryList
   * @summary 登录日志、操作日志查询
   * @request GET:/log/history
   * @secure
   */
  historyList = (
    query: {
      device?: string
      endTime: string
      name?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      startTime: string
      type?: 'login' | 'operation'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogHistoryQueryVO, any>({
      path: `/log/history`,
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
   * @tags log
   * @name SyslogConfigList
   * @summary syslog配置查询
   * @request GET:/log/syslog-config
   * @secure
   */
  syslogConfigList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      type?:
        | 'login'
        | 'operation'
        | 'dns'
        | 'system'
        | 'threat'
        | 'lease'
        | 'traffic'
        | 'xforce'
        | 'fault'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogSyslogConfigQueryVO, any>({
      path: `/log/syslog-config`,
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
   * @tags log
   * @name SyslogConfigCreate
   * @summary syslog配置创建
   * @request POST:/log/syslog-config
   * @secure
   */
  syslogConfigCreate = (req: LogLogSyslogConfigCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/syslog-config`,
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
   * @tags log
   * @name SyslogConfigDelete
   * @summary syslog配置删除
   * @request DELETE:/log/syslog-config
   * @secure
   */
  syslogConfigDelete = (req: LogLogSyslogConfigDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/syslog-config`,
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
   * @tags log
   * @name SyslogConfigEnableUpdate
   * @summary syslog配置启用/禁用
   * @request PUT:/log/syslog-config/enable
   * @secure
   */
  syslogConfigEnableUpdate = (req: LogLogSyslogConfigEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/syslog-config/enable`,
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
   * @tags log
   * @name SyslogConfigLogEnableUpdate
   * @summary syslog配置日志采集启用/禁用
   * @request PUT:/log/syslog-config/log-enable
   * @secure
   */
  syslogConfigLogEnableUpdate = (req: LogLogSyslogConfigLogEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/syslog-config/log-enable`,
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
   * @tags log
   * @name SyslogConfigUpdate
   * @summary syslog配置更新
   * @request PUT:/log/syslog-config/{id}
   * @secure
   */
  syslogConfigUpdate = (id: string, req: LogLogSyslogConfigUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/log/syslog-config/${id}`,
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
   * @tags log
   * @name SystemList
   * @summary 系统日志查询
   * @request GET:/log/system
   * @secure
   */
  systemList = (
    query: {
      component: string
      content?: string
      endTime: string
      level?: 'info' | 'warning' | 'error'
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogSystemQueryVO, any>({
      path: `/log/system`,
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
   * @tags log
   * @name ThreatIntelList
   * @summary 威胁情报日志查询
   * @request GET:/log/threat-intel
   * @secure
   */
  threatIntelList = (
    query: {
      device?: string
      endTime: string
      keyword?: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogThreatIntelQueryVO, any>({
      path: `/log/threat-intel`,
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
   * @tags log
   * @name UpgradeList
   * @summary 升级日志查询
   * @request GET:/log/upgrade
   * @secure
   */
  upgradeList = (
    query?: {
      deviceName?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogUpgradeQueryVO, any>({
      path: `/log/upgrade`,
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
   * @tags log
   * @name XforceList
   * @summary 强制解析日志查询
   * @request GET:/log/xforce
   * @secure
   */
  xforceList = (
    query: {
      content?: string
      device?: string
      endTime: string
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataLogLogXforceQueryVO, any>({
      path: `/log/xforce`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
