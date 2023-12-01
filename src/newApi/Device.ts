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
  ModelDeviceAnycastSaveDTO,
  ModelDeviceCreateDTO,
  ModelDeviceDeleteDTO,
  ModelDeviceEnableDTO,
  ModelDeviceExportDTO,
  ModelDeviceGetVO,
  ModelDeviceGroupCreateDTO,
  ModelDeviceGroupDeleteDTO,
  ModelDeviceGroupUpdateDTO,
  ModelDeviceHASaveDTO,
  ModelDeviceHaChangeDTO,
  ModelDeviceInterfaceUpdateDTO,
  ModelDeviceNTPReportDTO,
  ModelDeviceNTPSaveDTO,
  ModelDeviceNTPSyncDTO,
  ModelDeviceResetDTO,
  ModelDeviceRestartDTO,
  ModelDeviceRestoreFactoryDTO,
  ModelDeviceSNMPSaveDTO,
  ModelDeviceServerUpdateDTO,
  ModelDeviceStaticRouteUpdateDTO,
  ModelDeviceTFTPSaveDTO,
  ModelDeviceToolDigQueryDTO,
  ModelDeviceToolPingQueryDTO,
  ModelDeviceToolTcpDumpQueryDTO,
  ModelDeviceToolTraceRouteQueryDTO,
  ModelDeviceUpdateDTO,
  ModelDeviceUpdateVerifyCodeDTO,
  ModelHAGroupChangeDTO,
  ModelHAGroupCreateDTO,
  ModelHAGroupDeleteDTO,
  ModelHAGroupUpdateDTO,
  UtilsDataResponseModelDeviceInterfaceNameResp,
  UtilsDataResponseModelDeviceInterfaceResp,
  UtilsDataResponseModelDeviceMetricsVO,
  UtilsDataResponseModelDeviceStaticRouteCommon,
  UtilsDataResponseStructsDeviceAnycast,
  UtilsDataResponseStructsDeviceHA,
  UtilsDataResponseStructsDeviceNTP,
  UtilsDataResponseStructsDeviceSNMP,
  UtilsDataResponseStructsDeviceTFTP,
  UtilsEmptyResponse,
  UtilsPageDataModelDeviceGroupQueryVO,
  UtilsPageDataModelDeviceQueryVO,
  UtilsPageDataModelHAGroupQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Device<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Device
   * @name DeviceList
   * @summary 设备查询
   * @request GET:/device
   * @secure
   */
  deviceList = (
    query: {
      groupID?: number
      keyword?: string
      names?: string[]
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDeviceQueryVO, any>({
      path: `/device`,
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
   * @tags Device
   * @name DeviceCreate
   * @summary 设备新增
   * @request POST:/device
   * @secure
   */
  deviceCreate = (req: ModelDeviceCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device`,
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
   * @tags Device
   * @name DeviceDelete
   * @summary 设备删除
   * @request DELETE:/device
   * @secure
   */
  deviceDelete = (req: ModelDeviceDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device`,
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
   * @tags Device
   * @name EnableUpdate
   * @summary 设备启用/禁用
   * @request PUT:/device/enable
   * @secure
   */
  enableUpdate = (req: ModelDeviceEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/enable`,
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
   * @tags Device
   * @name ExportList
   * @summary 设备导出
   * @request GET:/device/export
   * @secure
   */
  exportList = (req: ModelDeviceExportDTO, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/device/export`,
      method: 'GET',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name GroupList
   * @summary 查询设备组
   * @request GET:/device/group
   * @secure
   */
  groupList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDeviceGroupQueryVO, any>({
      path: `/device/group`,
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
   * @tags Device
   * @name GroupCreate
   * @summary 新增设备组
   * @request POST:/device/group
   * @secure
   */
  groupCreate = (req: ModelDeviceGroupCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/group`,
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
   * @tags Device
   * @name GroupDelete
   * @summary 删除设备组
   * @request DELETE:/device/group
   * @secure
   */
  groupDelete = (req: ModelDeviceGroupDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/group`,
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
   * @tags Device
   * @name GroupUpdate
   * @summary 修改设备组
   * @request PUT:/device/group/{id}
   * @secure
   */
  groupUpdate = (id: number, req: ModelDeviceGroupUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/group/${id}`,
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
   * @tags Device
   * @name HaChangeUpdate
   * @summary 设备HA切换
   * @request PUT:/device/ha-change
   * @secure
   */
  haChangeUpdate = (req: ModelDeviceHaChangeDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/ha-change`,
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
   * @tags Device
   * @name HaGroupList
   * @summary 集群管理-HA组查询
   * @request GET:/device/ha-group
   * @secure
   */
  haGroupList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelHAGroupQueryVO, any>({
      path: `/device/ha-group`,
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
   * @tags Device
   * @name HaGroupCreate
   * @summary 集群管理-HA组创建
   * @request POST:/device/ha-group
   * @secure
   */
  haGroupCreate = (req: ModelHAGroupCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/ha-group`,
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
   * @tags Device
   * @name HaGroupDelete
   * @summary 集群管理-HA组删除
   * @request DELETE:/device/ha-group
   * @secure
   */
  haGroupDelete = (req: ModelHAGroupDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/ha-group`,
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
   * @tags Device
   * @name HaGroupUpdate
   * @summary 集群管理-HA组修改
   * @request PUT:/device/ha-group/{id}
   * @secure
   */
  haGroupUpdate = (id: number, req: ModelHAGroupUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/ha-group/${id}`,
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
   * @tags Device
   * @name HaGroupChangeUpdate
   * @summary 集群管理-HA组主备切换
   * @request PUT:/device/ha-group/{id}/change
   * @secure
   */
  haGroupChangeUpdate = (id: number, req: ModelHAGroupChangeDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/ha-group/${id}/change`,
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
   * @tags Device
   * @name ImportCreate
   * @summary 设备导入
   * @request POST:/device/import
   * @secure
   */
  importCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/import`,
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
   * @tags Device
   * @name MetricsList
   * @summary 设备指标
   * @request GET:/device/metrics
   * @secure
   */
  metricsList = (
    query: {
      deviceIPs: string[]
      /** 是否展示关键进程 */
      isShowKeyProcess?: boolean
      /**
       * 指标类型
       *  cpu: CPU使用率，百分比
       *  memory: 内存使用率，百分比
       *  disk: 磁盘使用率，百分比
       *  tx: 所有网卡的发送流量，KB
       *  rx: 所有网卡的接受流量，KB
       *  tx_qps: dns查询，qps
       *  rx_qps: dns应答，qps
       *  cpu_temp: CPU温度
       *  disk_status: 磁盘状态
       *  fan_status: 风扇状态
       *  power_status: 电源状态
       *  time: 系统时间
       *  network_up: 网卡是否启用
       *  network_tx: 网卡的发送流量，单位KB
       *  network_rx: 网卡的接受流量，单位KB
       *  ntp_status: ntp服务的状态
       *  snmp_status: snmp服务的状态
       *  tftp_status: tftp服务的状态
       *  frr_status: frr服务的状态
       *  alarm: 告警数量
       */
      types: string[]
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelDeviceMetricsVO, any>({
      path: `/device/metrics`,
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
   * @tags Device
   * @name DeviceDetail
   * @summary 设备详情
   * @request GET:/device/{id}
   * @secure
   */
  deviceDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelDeviceGetVO, any>({
      path: `/device/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name DeviceUpdate
   * @summary 设备修改
   * @request PUT:/device/{id}
   * @secure
   */
  deviceUpdate = (id: number, req: ModelDeviceUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}`,
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
   * @tags Device
   * @name AnycastDetail
   * @summary 设备anycast获取(ipv4和ipv6)
   * @request GET:/device/{id}/anycast
   * @secure
   */
  anycastDetail = (id: number, params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsDeviceAnycast, any>({
      path: `/device/${id}/anycast`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name AnycastUpdate
   * @summary 设备anycast修改(ipv4或ipv6,有且只能有一个)
   * @request PUT:/device/{id}/anycast
   * @secure
   */
  anycastUpdate = (id: number, req: ModelDeviceAnycastSaveDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/anycast`,
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
   * @tags Device
   * @name GetDevice
   * @summary 设备HA获取
   * @request GET:/device/{id}/ha
   * @secure
   */
  getDevice = (id: number, params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsDeviceHA, any>({
      path: `/device/${id}/ha`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name PutDevice
   * @summary 设备HA修改
   * @request PUT:/device/{id}/ha
   * @secure
   */
  putDevice = (id: number, req: ModelDeviceHASaveDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/ha`,
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
   * @tags Device
   * @name InterfaceDetail
   * @summary 设备网卡接口获取
   * @request GET:/device/{id}/interface
   * @secure
   */
  interfaceDetail = (
    id: number,
    query: {
      type:
        | 'interface'
        | 'interfaceBond'
        | 'bond'
        | 'anyCast'
        | 'staticRoute'
        | 'tcpdumpTool'
        | 'networkAnalysis'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelDeviceInterfaceResp, any>({
      path: `/device/${id}/interface`,
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
   * @tags Device
   * @name InterfaceUpdate
   * @summary 设备网卡接口更改
   * @request PUT:/device/{id}/interface
   * @secure
   */
  interfaceUpdate = (id: number, req: ModelDeviceInterfaceUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/interface`,
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
   * @tags Device
   * @name InterfaceNamesDetail
   * @summary 设备网卡名称接口获取
   * @request GET:/device/{id}/interface/names
   * @secure
   */
  interfaceNamesDetail = (
    id: number,
    query: {
      type:
        | 'interface'
        | 'interfaceBond'
        | 'bond'
        | 'anyCast'
        | 'staticRoute'
        | 'tcpdumpTool'
        | 'networkAnalysis'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelDeviceInterfaceNameResp, any>({
      path: `/device/${id}/interface/names`,
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
   * @tags Device
   * @name GetDevice2
   * @summary 设备NTP获取
   * @request GET:/device/{id}/ntp
   * @originalName getDevice
   * @duplicate
   * @secure
   */
  getDevice2 = (id: number, params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsDeviceNTP, any>({
      path: `/device/${id}/ntp`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name PutDevice2
   * @summary 设备NTP修改
   * @request PUT:/device/{id}/ntp
   * @originalName putDevice
   * @duplicate
   * @secure
   */
  putDevice2 = (id: number, req: ModelDeviceNTPSaveDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/ntp`,
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
   * @tags Device
   * @name NtpReportUpdate
   * @summary 设备NTP上报时间
   * @request PUT:/device/{id}/ntp/report
   * @secure
   */
  ntpReportUpdate = (id: number, req: ModelDeviceNTPReportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/ntp/report`,
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
   * @tags Device
   * @name NtpShowDetail
   * @summary 设备NTP时间获取
   * @request GET:/device/{id}/ntp/show
   * @secure
   */
  ntpShowDetail = (id: number, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/ntp/show`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name NtpSyncUpdate
   * @summary 设备NTP立即同步
   * @request PUT:/device/{id}/ntp/sync
   * @secure
   */
  ntpSyncUpdate = (id: number, req: ModelDeviceNTPSyncDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/ntp/sync`,
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
   * @tags Device
   * @name ResetUpdate
   * @summary 设备重置
   * @request PUT:/device/{id}/reset
   * @secure
   */
  resetUpdate = (id: string, req: ModelDeviceResetDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/reset`,
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
   * @tags Device
   * @name RestartUpdate
   * @summary 设备重启
   * @request PUT:/device/{id}/restart
   * @secure
   */
  restartUpdate = (id: string, req: ModelDeviceRestartDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/restart`,
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
   * @tags Device
   * @name RestoreFactoryUpdate
   * @summary 设备恢复出厂
   * @request PUT:/device/{id}/restore-factory
   * @secure
   */
  restoreFactoryUpdate = (
    id: string,
    req: ModelDeviceRestoreFactoryDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/restore-factory`,
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
   * @tags Device
   * @name ServerStartStopUpdate
   * @summary 设备服务启停修改
   * @request PUT:/device/{id}/server/start-stop
   * @secure
   */
  serverStartStopUpdate = (
    id: number,
    req: ModelDeviceServerUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/server/start-stop`,
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
   * @tags Device
   * @name SnmpDetail
   * @summary 设备SNMP获取
   * @request GET:/device/{id}/snmp
   * @secure
   */
  snmpDetail = (id: number, params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsDeviceSNMP, any>({
      path: `/device/${id}/snmp`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name SnmpUpdate
   * @summary 设备SNMP修改
   * @request PUT:/device/{id}/snmp
   * @secure
   */
  snmpUpdate = (id: number, req: ModelDeviceSNMPSaveDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/snmp`,
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
   * @tags Device
   * @name StaticRouteDetail
   * @summary 设备静态路由查看
   * @request GET:/device/{id}/static-route
   * @secure
   */
  staticRouteDetail = (id: number, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelDeviceStaticRouteCommon, any>({
      path: `/device/${id}/static-route`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name StaticRouteUpdate
   * @summary 设备静态路由修改
   * @request PUT:/device/{id}/static-route
   * @secure
   */
  staticRouteUpdate = (
    id: number,
    req: ModelDeviceStaticRouteUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/static-route`,
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
   * @tags Device
   * @name TftpDetail
   * @summary 设备TFTP获取
   * @request GET:/device/{id}/tftp
   * @secure
   */
  tftpDetail = (id: number, params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsDeviceTFTP, any>({
      path: `/device/${id}/tftp`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Device
   * @name TftpUpdate
   * @summary 设备TFTP修改
   * @request PUT:/device/{id}/tftp
   * @secure
   */
  tftpUpdate = (id: number, req: ModelDeviceTFTPSaveDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/tftp`,
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
   * @tags Device
   * @name ToolDigCreate
   * @summary 系统工具-dig
   * @request POST:/device/{id}/tool/dig
   * @secure
   */
  toolDigCreate = (id: string, req: ModelDeviceToolDigQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/tool/dig`,
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
   * @tags Device
   * @name ToolPingCreate
   * @summary 系统工具-ping
   * @request POST:/device/{id}/tool/ping
   * @secure
   */
  toolPingCreate = (id: string, req: ModelDeviceToolPingQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/tool/ping`,
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
   * @tags Device
   * @name ToolTcpdumpCreate
   * @summary 系统工具-tcpdump
   * @request POST:/device/{id}/tool/tcpdump
   * @secure
   */
  toolTcpdumpCreate = (
    id: string,
    req: ModelDeviceToolTcpDumpQueryDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/tool/tcpdump`,
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
   * @tags Device
   * @name ToolTcpdumpDownloadDetail
   * @summary 系统工具-tcpdump-download
   * @request GET:/device/{id}/tool/tcpdump-download
   * @secure
   */
  toolTcpdumpDownloadDetail = (
    id: string,
    query: {
      action: 'start' | 'stop'
      host?: string
      interface?: string
      packets?: number
      /**
       * @min 1
       * @max 65535
       */
      port?: number
      /** @max 600 */
      timeout?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/tool/tcpdump-download`,
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
   * @tags Device
   * @name ToolTraceRouteCreate
   * @summary 系统工具-traceroute
   * @request POST:/device/{id}/tool/trace-route
   * @secure
   */
  toolTraceRouteCreate = (
    id: string,
    req: ModelDeviceToolTraceRouteQueryDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/tool/trace-route`,
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
   * @tags Device
   * @name VerifyCodeUpdate
   * @summary 设备更新验证码
   * @request PUT:/device/{id}/verify-code
   * @secure
   */
  verifyCodeUpdate = (
    id: number,
    req: ModelDeviceUpdateVerifyCodeDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/device/${id}/verify-code`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
