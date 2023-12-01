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
  ModelAddrRangeBatchDTO,
  ModelDhcpIpStatusConvertDTO,
  ModelDhcpIpStatusDeleteDTO,
  ModelDhcpIpStatusRecycleDTO,
  ModelDhcpIpStatusResolveConflictDTO,
  ModelDhcpIpStatusSetDTO,
  ModelIpamAddrCreateDTO,
  ModelIpamAddrDeleteDTO,
  ModelIpamAddrUpdateDTO,
  ModelIpamDeviceScanCancelDTO,
  ModelIpamDeviceScanCreateDTO,
  ModelIpamDeviceScanDeleteDTO,
  ModelIpamDeviceScanDisconveryDTO,
  ModelIpamDeviceScanExecuteDTO,
  ModelIpamDeviceScanUpdateDTO,
  ModelIpamExchangeBondDTO,
  ModelIpamExchangeDeleteDTO,
  ModelIpamExchangeSealUpDTO,
  ModelIpamExchangeUnBondDTO,
  ModelIpamExchangeUnSealUpDTO,
  ModelIpamIpAuditExportDTO,
  ModelIpamIpAuditSetting,
  ModelIpamIpAuditSyslogSetting,
  ModelIpamMacExportDTO,
  ModelIpamNetScanCancelDTO,
  ModelIpamNetScanCreateDTO,
  ModelIpamNetScanDeleteDTO,
  ModelIpamNetScanExecuteDTO,
  ModelIpamNetScanUpdateDTO,
  ModelMACCreateDTO,
  ModelMACDeleteDTO,
  ModelMACGroupUpdateDTO,
  ModelMACUpdateDTO,
  ModelMacDiscoverDeleteDTO,
  ModelMacGenerateDTO,
  ModelNetworkCreateDTO,
  ModelNetworkDeleteDTO,
  ModelNetworkDetailVO,
  ModelNetworkExportDTO,
  ModelNetworkMaskDTO,
  ModelNetworkMergeDTO,
  ModelNetworkSetting,
  ModelNetworkSplitDTO,
  ModelNetworkUpdateDTO,
  NetworkgroupNetworkGroupCreateDTO,
  NetworkgroupNetworkGroupDeleteDTO,
  NetworkgroupNetworkGroupGetVO,
  NetworkgroupNetworkGroupUpdateDTO,
  NetworkspaceNetworkSpaceCreateDTO,
  UtilsDataResponseArrayModelAddrRangeQueryVO,
  UtilsDataResponseArrayModelMACGroupQueryVO,
  UtilsDataResponseArrayString,
  UtilsDataResponseIpstatusDhcpIpStatusQueryMapVO,
  UtilsDataResponseModelIpamAddrDetailVO,
  UtilsDataResponseModelIpamIpAuditSetting,
  UtilsDataResponseModelIpamIpAuditSyslogSetting,
  UtilsDataResponseModelNetworkSetting,
  UtilsDataResponseUtilsPageDataModelIpamDeviceScanQueryVO,
  UtilsDataResponseUtilsPageDataModelIpamNetScanQueryVO,
  UtilsDataResponseUtilsPageDataModelMacDiscoverVO,
  UtilsEmptyResponse,
  UtilsPageDataModelIpamExchangeQueryVO,
  UtilsPageDataModelIpamIpAuditQueryVO,
  UtilsPageDataModelMACQueryVO,
  UtilsPageDataModelNetworkQueryVO,
  UtilsPageDataNetworkgroupNetworkGroupQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Ipam<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags IpamAddAdmin
   * @name AddrAdminList
   * @summary 查询地址
   * @request GET:/ipam/addr-admin
   * @secure
   */
  addrAdminList = (
    query: {
      /** encodeURIComponent(JSON.stringify([{"field":"network","relation":"start","value":"192.168", "logic": "and"}, {"field":"ip","relation":"start","value":"192.168"}])) */
      conditions?: string
      ipVersion: 4 | 6
      keyword?: string
      /** @minLength 1 */
      page: string
      /**
       * @min 1
       * @max 256
       */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseIpstatusDhcpIpStatusQueryMapVO, any>({
      path: `/ipam/addr-admin`,
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
   * @tags IpamAddAdmin
   * @name AddrAdminUpdate
   * @summary 地址变更
   * @request PUT:/ipam/addr-admin
   * @secure
   */
  addrAdminUpdate = (id: number, req: ModelIpamAddrUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/addr-admin`,
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
   * @tags IpamAddAdmin
   * @name AddrAdminCreate
   * @summary 地址注册
   * @request POST:/ipam/addr-admin
   * @secure
   */
  addrAdminCreate = (req: ModelIpamAddrCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/addr-admin`,
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
   * @tags IpamAddAdmin
   * @name AddrAdminDelete
   * @summary 地址注销
   * @request DELETE:/ipam/addr-admin
   * @secure
   */
  addrAdminDelete = (req: ModelIpamAddrDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/addr-admin`,
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
   * @tags IpamAddAdmin
   * @name AddrAdminDetailList
   * @summary 地址详情
   * @request GET:/ipam/addr-admin/detail
   * @secure
   */
  addrAdminDetailList = (
    query: {
      ip: string
      networkID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelIpamAddrDetailVO, any>({
      path: `/ipam/addr-admin/detail`,
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
   * @tags IpamAddAdmin
   * @name AddrAdminExportList
   * @summary 地址管理导出
   * @request GET:/ipam/addr-admin/export
   * @secure
   */
  addrAdminExportList = (
    query: {
      /** encodeURIComponent(JSON.stringify([{"field":"network","relation":"start","value":"192.168", "logic": "and"}, {"field":"ip","relation":"start","value":"192.168"}])) */
      conditions?: string
      ipVersion: 4 | 6
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/addr-admin/export`,
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
   * @tags IpamAddAdmin
   * @name AddrAdminGenerateList
   * @summary 生成IP地址
   * @request GET:/ipam/addr-admin/generate
   * @secure
   */
  addrAdminGenerateList = (
    query: {
      addrRange: 'subnet' | 'offset'
      endIP?: string
      /**
       * @min 1
       * @max 100
       */
      generateCount: number
      networkID: number
      order: 'descend' | 'ascend' | 'random'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayString, any>({
      path: `/ipam/addr-admin/generate`,
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
   * @tags IpamAddAdmin
   * @name AddrAdminImportCreate
   * @summary 地址管理导入
   * @request POST:/ipam/addr-admin/import
   * @secure
   */
  addrAdminImportCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 模式-add:追加 可不传，此功能就仅需要支持追加 */
      importMode: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/addr-admin/import`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags IpamAddAdmin
   * @name AddrAdminRangeList
   * @summary 查询地址范围
   * @request GET:/ipam/addr-admin/range
   * @secure
   */
  addrAdminRangeList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArrayModelAddrRangeQueryVO, any>({
      path: `/ipam/addr-admin/range`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags IpamAddAdmin
   * @name AddrAdminRangeUpdate
   * @summary 修改地址范围
   * @request PUT:/ipam/addr-admin/range
   * @secure
   */
  addrAdminRangeUpdate = (req: ModelAddrRangeBatchDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/addr-admin/range`,
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
   * @tags DeviceScan
   * @name DeviceScanList
   * @summary 查询设备扫描
   * @request GET:/ipam/device-scan
   * @secure
   */
  deviceScanList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelIpamDeviceScanQueryVO, any>({
      path: `/ipam/device-scan`,
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
   * @tags DeviceScan
   * @name DeviceScanCreate
   * @summary 新增设备扫描
   * @request POST:/ipam/device-scan
   * @secure
   */
  deviceScanCreate = (req: ModelIpamDeviceScanCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/device-scan`,
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
   * @tags DeviceScan
   * @name DeviceScanDelete
   * @summary 删除设备扫描
   * @request DELETE:/ipam/device-scan
   * @secure
   */
  deviceScanDelete = (req: ModelIpamDeviceScanDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/device-scan`,
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
   * @tags DeviceScan
   * @name DeviceScanCancelUpdate
   * @summary 停止执行
   * @request PUT:/ipam/device-scan/cancel
   * @secure
   */
  deviceScanCancelUpdate = (req: ModelIpamDeviceScanCancelDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/device-scan/cancel`,
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
   * @tags DeviceScan
   * @name DeviceScanDiscoveryUpdate
   * @summary 获取设备的网络列表(排除已经在IPAM列表中的网络)
   * @request PUT:/ipam/device-scan/discovery
   * @secure
   */
  deviceScanDiscoveryUpdate = (req: ModelIpamDeviceScanDisconveryDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseArrayString, any>({
      path: `/ipam/device-scan/discovery`,
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
   * @tags DeviceScan
   * @name DeviceScanExecuteUpdate
   * @summary 立即执行
   * @request PUT:/ipam/device-scan/execute
   * @secure
   */
  deviceScanExecuteUpdate = (req: ModelIpamDeviceScanExecuteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/device-scan/execute`,
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
   * @tags DeviceScan
   * @name DeviceScanUpdate
   * @summary 修改设备扫描
   * @request PUT:/ipam/device-scan/{id}
   * @secure
   */
  deviceScanUpdate = (id: number, req: ModelIpamDeviceScanUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/device-scan/${id}`,
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
   * @tags Switch
   * @name ExchangeList
   * @summary 交换机mac绑定或封堵查询
   * @request GET:/ipam/exchange
   * @secure
   */
  exchangeList = (
    query: {
      deviceScanID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      type?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelIpamExchangeQueryVO, any>({
      path: `/ipam/exchange`,
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
   * @tags Switch
   * @name ExchangeDelete
   * @summary 交换机mac绑定或封堵删除
   * @request DELETE:/ipam/exchange
   * @secure
   */
  exchangeDelete = (req: ModelIpamExchangeDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/exchange`,
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
   * @tags Switch
   * @name ExchangeBondCreate
   * @summary 交换机mac绑定
   * @request POST:/ipam/exchange/bond
   * @secure
   */
  exchangeBondCreate = (req: ModelIpamExchangeBondDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/exchange/bond`,
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
   * @tags Switch
   * @name ExchangeSealupCreate
   * @summary 交换机mac封堵
   * @request POST:/ipam/exchange/sealup
   * @secure
   */
  exchangeSealupCreate = (req: ModelIpamExchangeSealUpDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/exchange/sealup`,
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
   * @tags Switch
   * @name ExchangeUnbondCreate
   * @summary 交换机mac解绑
   * @request POST:/ipam/exchange/unbond
   * @secure
   */
  exchangeUnbondCreate = (req: ModelIpamExchangeUnBondDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/exchange/unbond`,
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
   * @tags Switch
   * @name ExchangeUnsealupCreate
   * @summary 交换机mac解封
   * @request POST:/ipam/exchange/unsealup
   * @secure
   */
  exchangeUnsealupCreate = (req: ModelIpamExchangeUnSealUpDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/exchange/unsealup`,
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
   * @tags IpAudit
   * @name IpAuditList
   * @summary 地址审计列表
   * @request GET:/ipam/ip-audit
   * @secure
   */
  ipAuditList = (
    query: {
      endTime?: string
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      startTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelIpamIpAuditQueryVO, any>({
      path: `/ipam/ip-audit`,
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
   * @tags IpAudit
   * @name IpAuditExportCreate
   * @summary 设置 Ipam>地址审计>导出
   * @request POST:/ipam/ip-audit/export
   * @secure
   */
  ipAuditExportCreate = (req: ModelIpamIpAuditExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-audit/export`,
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
   * @tags IpAudit
   * @name IpAuditSettingList
   * @summary 查询 Ipam>地址审计>审计设置
   * @request GET:/ipam/ip-audit/setting
   * @secure
   */
  ipAuditSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelIpamIpAuditSetting, any>({
      path: `/ipam/ip-audit/setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags IpAudit
   * @name IpAuditSettingUpdate
   * @summary 设置 Ipam>地址审计>审计设置
   * @request PUT:/ipam/ip-audit/setting
   * @secure
   */
  ipAuditSettingUpdate = (req: ModelIpamIpAuditSetting, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-audit/setting`,
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
   * @tags IpAudit
   * @name IpAuditSyslogSettingList
   * @summary 查询 Ipam>地址审计>Syslog设置
   * @request GET:/ipam/ip-audit/syslog-setting
   * @secure
   */
  ipAuditSyslogSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelIpamIpAuditSyslogSetting, any>({
      path: `/ipam/ip-audit/syslog-setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags IpAudit
   * @name IpAuditSyslogSettingUpdate
   * @summary 设置 Ipam>地址审计>Syslog设置
   * @request PUT:/ipam/ip-audit/syslog-setting
   * @secure
   */
  ipAuditSyslogSettingUpdate = (req: ModelIpamIpAuditSyslogSetting, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-audit/syslog-setting`,
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
   * @tags IP状态
   * @name IpStatusUpdate
   * @summary 设置IP状态
   * @request PUT:/ipam/ip-status
   * @secure
   */
  ipStatusUpdate = (req: ModelDhcpIpStatusSetDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-status`,
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
   * @tags IP状态
   * @name IpStatusDelete
   * @summary 删除IP状态
   * @request DELETE:/ipam/ip-status
   * @secure
   */
  ipStatusDelete = (req: ModelDhcpIpStatusDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-status`,
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
   * @tags IP状态
   * @name IpStatusConflictUpdate
   * @summary 解决冲突
   * @request PUT:/ipam/ip-status/conflict
   * @secure
   */
  ipStatusConflictUpdate = (req: ModelDhcpIpStatusResolveConflictDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-status/conflict`,
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
   * @tags IP状态
   * @name IpStatusConvertUpdate
   * @summary 转地址池(动态，保留，预留)
   * @request PUT:/ipam/ip-status/convert
   * @secure
   */
  ipStatusConvertUpdate = (req: ModelDhcpIpStatusConvertDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-status/convert`,
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
   * @tags IP状态
   * @name IpStatusMapList
   * @summary 查询IP状态地图
   * @request GET:/ipam/ip-status/map
   * @secure
   */
  ipStatusMapList = (
    query: {
      ip?: string
      keyword?: string
      networkID: number
      page: string
      /**
       * @min 1
       * @max 256
       */
      pageSize: number
      /** used unused conflict unmanaged active dynamic reserved zombie fixed */
      type?:
        | 'used'
        | 'unused'
        | 'conflict'
        | 'unmanaged'
        | 'active'
        | 'dynamic'
        | 'reserved'
        | 'zombie'
        | 'fixed'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseIpstatusDhcpIpStatusQueryMapVO, any>({
      path: `/ipam/ip-status/map`,
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
   * @tags IP状态
   * @name IpStatusRecycleUpdate
   * @summary 回收地址
   * @request PUT:/ipam/ip-status/recycle
   * @secure
   */
  ipStatusRecycleUpdate = (req: ModelDhcpIpStatusRecycleDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/ip-status/recycle`,
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
   * @tags mac
   * @name GetIpam
   * @summary MAC查询
   * @request GET:/ipam/mac
   * @secure
   */
  getIpam = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelMACQueryVO, any>({
      path: `/ipam/mac`,
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
   * @tags mac
   * @name PostIpam
   * @summary MAC新增
   * @request POST:/ipam/mac
   * @secure
   */
  postIpam = (req: ModelMACCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac`,
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
   * @tags mac
   * @name DeleteIpam
   * @summary Mac删除
   * @request DELETE:/ipam/mac
   * @secure
   */
  deleteIpam = (req: ModelMACDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac`,
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
   * @tags mac
   * @name MacGroupList
   * @summary MAC分组查询
   * @request GET:/ipam/mac-group
   * @secure
   */
  macGroupList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelMACGroupQueryVO, any>({
      path: `/ipam/mac-group`,
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
   * @tags mac
   * @name MacGroupUpdate
   * @summary MAC分组更新
   * @request PUT:/ipam/mac-group
   * @secure
   */
  macGroupUpdate = (req: ModelMACGroupUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac-group`,
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
   * @tags mac
   * @name MacDiscoverList
   * @summary MAC发现查询
   * @request GET:/ipam/mac/discover
   * @secure
   */
  macDiscoverList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelMacDiscoverVO, any>({
      path: `/ipam/mac/discover`,
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
   * @tags mac
   * @name MacDiscoverDelete
   * @summary MAC发现删除
   * @request DELETE:/ipam/mac/discover
   * @secure
   */
  macDiscoverDelete = (req: ModelMacDiscoverDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac/discover`,
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
   * @tags mac
   * @name MacExportCreate
   * @summary MAC导出
   * @request POST:/ipam/mac/export
   * @secure
   */
  macExportCreate = (req: ModelIpamMacExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac/export`,
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
   * @tags mac
   * @name MacGenerateCreate
   * @summary MAC发现转MAC地址到MAC管理
   * @request POST:/ipam/mac/generate
   * @secure
   */
  macGenerateCreate = (req: ModelMacGenerateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac/generate`,
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
   * @tags mac
   * @name MacImportCreate
   * @summary MAC导入
   * @request POST:/ipam/mac/import
   * @secure
   */
  macImportCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 模式-add:追加、update:更新、del:删除 */
      importMode: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac/import`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags mac
   * @name PutIpam
   * @summary MAC修改
   * @request PUT:/ipam/mac/{id}
   * @secure
   */
  putIpam = (id: string, req: ModelMACUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/mac/${id}`,
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
   * @tags NetScan
   * @name NetScanList
   * @summary 查询网络扫描
   * @request GET:/ipam/net-scan
   * @secure
   */
  netScanList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelIpamNetScanQueryVO, any>({
      path: `/ipam/net-scan`,
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
   * @tags NetScan
   * @name NetScanCreate
   * @summary 新增网络扫描
   * @request POST:/ipam/net-scan
   * @secure
   */
  netScanCreate = (req: ModelIpamNetScanCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/net-scan`,
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
   * @tags NetScan
   * @name NetScanDelete
   * @summary 删除网络扫描
   * @request DELETE:/ipam/net-scan
   * @secure
   */
  netScanDelete = (req: ModelIpamNetScanDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/net-scan`,
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
   * @tags NetScan
   * @name NetScanCancelUpdate
   * @summary 停止执行
   * @request PUT:/ipam/net-scan/cancel
   * @secure
   */
  netScanCancelUpdate = (req: ModelIpamNetScanCancelDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/net-scan/cancel`,
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
   * @tags NetScan
   * @name NetScanExecuteUpdate
   * @summary 立即执行
   * @request PUT:/ipam/net-scan/execute
   * @secure
   */
  netScanExecuteUpdate = (req: ModelIpamNetScanExecuteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/net-scan/execute`,
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
   * @tags NetScan
   * @name NetScanUpdate
   * @summary 修改网络扫描
   * @request PUT:/ipam/net-scan/{id}
   * @secure
   */
  netScanUpdate = (id: number, req: ModelIpamNetScanUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/net-scan/${id}`,
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
   * @tags Network
   * @name NetworkList
   * @summary 网络-查询
   * @request GET:/ipam/network
   * @secure
   */
  networkList = (
    query: {
      groupID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      parentID?: number
      spaceID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelNetworkQueryVO, any>({
      path: `/ipam/network`,
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
   * @tags Network
   * @name NetworkCreate
   * @summary 网络-新增
   * @request POST:/ipam/network
   * @secure
   */
  networkCreate = (req: ModelNetworkCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network`,
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
   * @tags Network
   * @name NetworkDelete
   * @summary 网络-删除（批量）
   * @request DELETE:/ipam/network
   * @secure
   */
  networkDelete = (req: ModelNetworkDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network`,
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
   * @tags Network
   * @name NetworkGroupList
   * @summary 网络分组-查询
   * @request GET:/ipam/network-group
   * @secure
   */
  networkGroupList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataNetworkgroupNetworkGroupQueryVO, any>({
      path: `/ipam/network-group`,
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
   * @tags Network
   * @name NetworkGroupCreate
   * @summary 网络分组-新增
   * @request POST:/ipam/network-group
   * @secure
   */
  networkGroupCreate = (req: NetworkgroupNetworkGroupCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network-group`,
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
   * @tags Network
   * @name NetworkGroupDelete
   * @summary 网络分组-删除
   * @request DELETE:/ipam/network-group
   * @secure
   */
  networkGroupDelete = (req: NetworkgroupNetworkGroupDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network-group`,
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
   * @tags Network
   * @name NetworkGroupDetail
   * @summary 网络分组-详情
   * @request GET:/ipam/network-group/{id}
   * @secure
   */
  networkGroupDetail = (id: number, params: RequestParams = {}) =>
    this.request<NetworkgroupNetworkGroupGetVO, any>({
      path: `/ipam/network-group/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Network
   * @name NetworkGroupUpdate
   * @summary 网络分组-修改
   * @request PUT:/ipam/network-group/{id}
   * @secure
   */
  networkGroupUpdate = (
    id: number,
    req: NetworkgroupNetworkGroupUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network-group/${id}`,
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
   * @tags Network
   * @name NetworkSpaceCreate
   * @summary 网络视图-新增
   * @request POST:/ipam/network-space
   * @secure
   */
  networkSpaceCreate = (req: NetworkspaceNetworkSpaceCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network-space`,
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
   * @tags Network
   * @name NetworkExportCreate
   * @summary 网络-导出
   * @request POST:/ipam/network/export
   * @secure
   */
  networkExportCreate = (req: ModelNetworkExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/export`,
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
   * @tags Network
   * @name NetworkImportCreate
   * @summary 网络-导入
   * @request POST:/ipam/network/import
   * @secure
   */
  networkImportCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 模式-add:追加、update:更新、del:删除 */
      importMode: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/import`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Network
   * @name NetworkMaskUpdate
   * @summary 网络-缩放
   * @request PUT:/ipam/network/mask/{id}
   * @secure
   */
  networkMaskUpdate = (id: string, req: ModelNetworkMaskDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/mask/${id}`,
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
   * @tags Network
   * @name NetworkMergeUpdate
   * @summary 网络-合并
   * @request PUT:/ipam/network/merge
   * @secure
   */
  networkMergeUpdate = (req: ModelNetworkMergeDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/merge`,
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
   * @tags Network
   * @name NetworkSettingList
   * @summary 查询Ipam>网络管理>设置
   * @request GET:/ipam/network/setting
   * @secure
   */
  networkSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelNetworkSetting, any>({
      path: `/ipam/network/setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Network
   * @name NetworkSettingUpdate
   * @summary 修改Ipam>网络管理>设置
   * @request PUT:/ipam/network/setting
   * @secure
   */
  networkSettingUpdate = (req: ModelNetworkSetting, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/setting`,
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
   * @tags Network
   * @name NetworkSplitList
   * @summary 获取拆分子网络
   * @request GET:/ipam/network/split
   * @secure
   */
  networkSplitList = (
    query: {
      address: string
      mask: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/split`,
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
   * @tags Network
   * @name NetworkSplitUpdate
   * @summary 网络-拆分
   * @request PUT:/ipam/network/split/{id}
   * @secure
   */
  networkSplitUpdate = (id: string, req: ModelNetworkSplitDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/split/${id}`,
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
   * @tags Network
   * @name NetworkDetail
   * @summary 根据ID查询网段详情
   * @request GET:/ipam/network/{id}
   * @secure
   */
  networkDetail = (id: string, params: RequestParams = {}) =>
    this.request<ModelNetworkDetailVO, any>({
      path: `/ipam/network/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Network
   * @name NetworkUpdate
   * @summary 网络-修改
   * @request PUT:/ipam/network/{id}
   * @secure
   */
  networkUpdate = (id: string, req: ModelNetworkUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/ipam/network/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
