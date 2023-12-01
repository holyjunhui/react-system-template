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
  ModelACLNamesQueryVO,
  ModelGroupNamesQueryVO,
  ModelIPPoolNamesQueryVO,
  ModelKeywordPageRequestDTO,
  ModelNetworkListQueryVO,
  ModelOptionReferenceQueryVO,
  ModelPoolNamesQueryVO,
  ModelResourceZoneQueryVO,
  ModelTemplateNamesQueryVO,
  StructsDeviceMonitorInfo,
  StructsDeviceScannerInfo,
  UtilsDataResponseArrayModelAddressSchemaVOSwagger,
  UtilsDataResponseArrayModelGslbTopologyGroupQueryDTO,
  UtilsDataResponseArrayModelResourceDeviceQueryVO,
  UtilsDataResponseArrayModelResourceZoneQueryVO,
  UtilsDataResponseArraySqlmodelName,
  UtilsDataResponseArrayString,
  UtilsDataResponseModelEffectRangeTreeVO,
  UtilsDataResponseModelIpamDeviceSwitchScanQueryVO,
  UtilsDataResponseModelIpamDeviceSwitchScanVlanQueryVO,
  UtilsDataResponseModelNetworkListQueryVO,
  UtilsDataResponseModelResourceSummaryGetVO,
  UtilsDataResponseModelSubNetworkQueryVO,
  UtilsDataResponseModelTreeNode,
  UtilsEmptyResponse,
  UtilsPageDataModelAlarmActiveList,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Resource<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Resource
   * @name GetResource
   * @summary 查询地址组名称不分页
   * @request GET:/resource/acl
   * @secure
   */
  getResource = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/acl`,
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
   * @tags Resource
   * @name AddressSchemaList
   * @summary 获取地址库字典
   * @request GET:/resource/address-schema
   * @secure
   */
  addressSchemaList = (
    query?: {
      /** City Province Country ISP Continent GEO+ISP */
      type?: 'City' | 'Province' | 'Country' | 'ISP' | 'Continent' | 'GEO+ISP'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelAddressSchemaVOSwagger, any>({
      path: `/resource/address-schema`,
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
   * @tags Resource
   * @name AlarmActiveList
   * @summary 查询活动告警列表
   * @request GET:/resource/alarm/active
   * @secure
   */
  alarmActiveList = (
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
    this.request<UtilsPageDataModelAlarmActiveList, any>({
      path: `/resource/alarm/active`,
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
   * @tags Resource
   * @name DatacenterList
   * @summary 数据中心名称查询
   * @request GET:/resource/datacenter
   * @secure
   */
  datacenterList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/datacenter`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name DeviceList
   * @summary 查询设备列表
   * @request GET:/resource/device
   * @secure
   */
  deviceList = (
    query?: {
      groupID?: number
      name?: string
      service?: 'dns' | 'gslb' | 'manager' | 'dhcp' | 'scanner'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelResourceDeviceQueryVO, any>({
      path: `/resource/device`,
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
   * @tags Resource
   * @name DeviceGroupList
   * @summary 查询设备组列表(ID和Name)
   * @request GET:/resource/device-group
   * @secure
   */
  deviceGroupList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/device-group`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name DeviceScanSwitchNamesList
   * @summary 查询交换机设备
   * @request GET:/resource/device-scan/switch-names
   * @secure
   */
  deviceScanSwitchNamesList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelIpamDeviceSwitchScanQueryVO, any>({
      path: `/resource/device-scan/switch-names`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name DeviceScanSwitchVlansList
   * @summary 查询交换机的网口信息
   * @request GET:/resource/device-scan/switch-vlans
   * @secure
   */
  deviceScanSwitchVlansList = (
    query: {
      deviceScanID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelIpamDeviceSwitchScanVlanQueryVO, any>({
      path: `/resource/device-scan/switch-vlans`,
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
   * @tags Resource
   * @name DeviceInterfacesList
   * @summary 设备的网口信息
   * @request GET:/resource/device/interfaces
   * @secure
   */
  deviceInterfacesList = (
    query?: {
      deviceIDs?: number[]
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/resource/device/interfaces`,
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
   * @tags Resource
   * @name DeviceMonitorList
   * @summary 域名监控设备查询
   * @request GET:/resource/device/monitor
   * @secure
   */
  deviceMonitorList = (params: RequestParams = {}) =>
    this.request<StructsDeviceMonitorInfo[], any>({
      path: `/resource/device/monitor`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name DeviceScannerList
   * @summary 扫描设备查询
   * @request GET:/resource/device/scanner
   * @secure
   */
  deviceScannerList = (params: RequestParams = {}) =>
    this.request<StructsDeviceScannerInfo[], any>({
      path: `/resource/device/scanner`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name DhcpNodeFailoverMemberList
   * @summary DHCP业务组-Failover主备成员, ip, VIP下拉
   * @request GET:/resource/dhcp-node/failover-member
   * @secure
   */
  dhcpNodeFailoverMemberList = (
    query?: {
      id?: number
      isMaster?: boolean
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/resource/dhcp-node/failover-member`,
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
   * @tags Resource
   * @name DhcpNodeNetworkBindList
   * @summary DHCP业务组-Network绑定列表
   * @request GET:/resource/dhcp-node/network-bind
   * @secure
   */
  dhcpNodeNetworkBindList = (req: ModelKeywordPageRequestDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/resource/dhcp-node/network-bind`,
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
   * @tags Resource
   * @name DhcpAclNamesList
   * @summary 获取ACL访问控制列表
   * @request GET:/resource/dhcp/acl/names
   * @secure
   */
  dhcpAclNamesList = (params: RequestParams = {}) =>
    this.request<ModelACLNamesQueryVO[], any>({
      path: `/resource/dhcp/acl/names`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name DhcpDdnsZoneAuthList
   * @summary 获取ddns的区
   * @request GET:/resource/dhcp/ddns/zone/auth
   * @secure
   */
  dhcpDdnsZoneAuthList = (
    query?: {
      authType?: 'forward' | 'reverse'
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelResourceZoneQueryVO[], any>({
      path: `/resource/dhcp/ddns/zone/auth`,
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
   * @tags Resource
   * @name DhcpIpPoolDetail
   * @summary 获取地址池列表（DHCP-IPPool）
   * @request GET:/resource/dhcp/ip-pool/{pid}
   * @secure
   */
  dhcpIpPoolDetail = (pid: number, params: RequestParams = {}) =>
    this.request<ModelIPPoolNamesQueryVO[], any>({
      path: `/resource/dhcp/ip-pool/${pid}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name DhcpPoolList
   * @summary 获取地址池列表（DHCP-Pool）
   * @request GET:/resource/dhcp/pool
   * @secure
   */
  dhcpPoolList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelPoolNamesQueryVO[], any>({
      path: `/resource/dhcp/pool`,
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
   * @tags Resource
   * @name DomainLibTypeList
   * @summary 查询域名库类型名称不分页
   * @request GET:/resource/domain-lib-type
   * @secure
   */
  domainLibTypeList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/domain-lib-type`,
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
   * @tags Resource
   * @name EffectRangeList
   * @summary 查询下发范围列表
   * @request GET:/resource/effect-range
   * @secure
   */
  effectRangeList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelEffectRangeTreeVO, any>({
      path: `/resource/effect-range`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name FingerprintsList
   * @summary 查询指纹管理名称不分页
   * @request GET:/resource/fingerprints
   * @secure
   */
  fingerprintsList = (
    query?: {
      deviceClassID?: number
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/fingerprints`,
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
   * @tags Resource
   * @name GslbPoolList
   * @summary GSLB资源池ID和名称查询
   * @request GET:/resource/gslb-pool
   * @secure
   */
  gslbPoolList = (
    query?: {
      qtype?: 'A' | 'AAAA' | 'MX' | 'CNAME' | 'SRV' | 'NAPTR'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/gslb-pool`,
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
   * @tags Resource
   * @name GslbPoolNameList
   * @summary GSLB资源池名称查询
   * @request GET:/resource/gslb-pool-name
   * @secure
   */
  gslbPoolNameList = (
    query: {
      groupID: number
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayString, any>({
      path: `/resource/gslb-pool-name`,
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
   * @tags Resource
   * @name HealthMonitorList
   * @summary 健康监测名称查询
   * @request GET:/resource/health-monitor
   * @secure
   */
  healthMonitorList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/health-monitor`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name NetworkGroupList
   * @summary 获取网络分组
   * @request GET:/resource/network-group
   * @secure
   */
  networkGroupList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelTreeNode, any>({
      path: `/resource/network-group`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name NetworkAddrAdminList
   * @summary 获取叶子网络(用于地址管理列表,ipv4 20-30|ipv6 40-126)
   * @request GET:/resource/network/addr-admin
   * @secure
   */
  networkAddrAdminList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelNetworkListQueryVO, any>({
      path: `/resource/network/addr-admin`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name NetworkDhcpEnabledList
   * @summary 获取所有启用DHCP的网络地址(用于实时租约释放界面)
   * @request GET:/resource/network/dhcp-enabled
   * @secure
   */
  networkDhcpEnabledList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelNetworkListQueryVO, any>({
      path: `/resource/network/dhcp-enabled`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name NetworkLeafList
   * @summary IPAM网络列表叶子
   * @request GET:/resource/network/leaf
   * @secure
   */
  networkLeafList = (
    query?: {
      groupID?: number
      keyword?: string
      spaceID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelNetworkListQueryVO[], any>({
      path: `/resource/network/leaf`,
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
   * @tags Resource
   * @name NetworkScanList
   * @summary 获取叶子网络(用于网段扫描列表,ipv4>=22|ipv6>=118)
   * @request GET:/resource/network/scan
   * @secure
   */
  networkScanList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelNetworkListQueryVO, any>({
      path: `/resource/network/scan`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name NetworkUnbindList
   * @summary 查询未启用的IPAM网段列表(新增DhcpPool使用)
   * @request GET:/resource/network/unbind
   * @secure
   */
  networkUnbindList = (
    query?: {
      networkGroupID?: number
      networkSpaceID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelNetworkListQueryVO[], any>({
      path: `/resource/network/unbind`,
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
   * @tags Resource
   * @name OptionsGroupList
   * @summary 指定类型下的options分组列表
   * @request GET:/resource/options/group
   * @secure
   */
  optionsGroupList = (
    query?: {
      version?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelGroupNamesQueryVO[], any>({
      path: `/resource/options/group`,
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
   * @tags Resource
   * @name OptionsOptionList
   * @summary 指定分组下的option列表
   * @request GET:/resource/options/option
   * @secure
   */
  optionsOptionList = (
    query: {
      groupID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelOptionReferenceQueryVO[], any>({
      path: `/resource/options/option`,
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
   * @tags Resource
   * @name ProberPoolList
   * @summary 探测池名称查询
   * @request GET:/resource/prober-pool
   * @secure
   */
  proberPoolList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/prober-pool`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name RecordList
   * @summary 查询RR记录
   * @request GET:/resource/record
   * @secure
   */
  recordList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      qtype?:
        | 'A'
        | 'AAAA'
        | 'NS'
        | 'CNAME'
        | 'DNAME'
        | 'TXT'
        | 'SPF'
        | 'PTR'
        | 'SRV'
        | 'NAPTR'
        | 'MX'
        | 'CAA'
        | 'DS'
      viewID?: number
      zoneID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayString, any>({
      path: `/resource/record`,
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
   * @tags Resource
   * @name RecursionServerGroupList
   * @summary 递归转发服务器名称查询
   * @request GET:/resource/recursion-server-group
   * @secure
   */
  recursionServerGroupList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/recursion-server-group`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name ReportRuleList
   * @summary 报表规则查询
   * @request GET:/resource/report-rule
   * @secure
   */
  reportRuleList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/report-rule`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name ReportTemplateList
   * @summary 报表模版查询
   * @request GET:/resource/report-template
   * @secure
   */
  reportTemplateList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/report-template`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name RoleList
   * @summary 查询角色列表(ID和Name)
   * @request GET:/resource/role
   * @secure
   */
  roleList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/role`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name SubNetworkList
   * @summary 获取子网络
   * @request GET:/resource/sub-network
   * @secure
   */
  subNetworkList = (
    query: {
      dhcpNodeID?: number
      keyword?: string
      qtype: 'ipv4' | 'ipv6'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelSubNetworkQueryVO, any>({
      path: `/resource/sub-network`,
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
   * @tags Resource
   * @name SummaryList
   * @summary 资源概要查询
   * @request GET:/resource/summary
   * @secure
   */
  summaryList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelResourceSummaryGetVO, any>({
      path: `/resource/summary`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name SystemTipsList
   * @summary 系统提醒查询
   * @request GET:/resource/system-tips
   * @secure
   */
  systemTipsList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelResourceSummaryGetVO, any>({
      path: `/resource/system-tips`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Resource
   * @name TemplateList
   * @summary 获取指定类型下的模板名称列表
   * @request GET:/resource/template
   * @secure
   */
  templateList = (
    query?: {
      version?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<ModelTemplateNamesQueryVO[], any>({
      path: `/resource/template`,
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
   * @tags Resource
   * @name TopologyGroupList
   * @summary 获取拓扑组
   * @request GET:/resource/topology-group
   * @secure
   */
  topologyGroupList = (
    query?: {
      groupID?: number
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelGslbTopologyGroupQueryDTO, any>({
      path: `/resource/topology-group`,
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
   * @tags Resource
   * @name TsigList
   * @summary 查询TSIG名称不分页
   * @request GET:/resource/tsig
   * @secure
   */
  tsigList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/tsig`,
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
   * @tags Resource
   * @name ViewList
   * @summary 查询视图名称不分页
   * @request GET:/resource/view
   * @secure
   */
  viewList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/view`,
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
   * @tags Resource
   * @name ZoneAuthList
   * @summary 查询授权区
   * @request GET:/resource/zone/auth
   * @secure
   */
  zoneAuthList = (
    query: {
      authType?: 'forward' | 'reverse'
      isMaster?: boolean
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      viewID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelResourceZoneQueryVO, any>({
      path: `/resource/zone/auth`,
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
   * @tags Resource
   * @name ZoneForwardList
   * @summary 查询转发区
   * @request GET:/resource/zone/forward
   * @secure
   */
  zoneForwardList = (
    query: {
      authType?: 'forward' | 'reverse'
      isMaster?: boolean
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      viewID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/zone/forward`,
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
   * @tags Resource
   * @name ZoneStubList
   * @summary 查询存根区
   * @request GET:/resource/zone/stub
   * @secure
   */
  zoneStubList = (
    query: {
      authType?: 'forward' | 'reverse'
      isMaster?: boolean
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      viewID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArraySqlmodelName, any>({
      path: `/resource/zone/stub`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
