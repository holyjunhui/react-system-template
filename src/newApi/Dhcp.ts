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
  ModelChildExportDTO,
  ModelDDns,
  ModelDeviceClassUpdateDTO,
  ModelDhcpAclChildCreateDTOSwagger,
  ModelDhcpAclChildDeleteDTO,
  ModelDhcpAclChildUpdateDTOSwagger,
  ModelDhcpAclCreateDTOSwagger,
  ModelDhcpAclDeleteDTO,
  ModelDhcpAclUpdateDTO,
  ModelDhcpFailoverDeleteDTO,
  ModelDhcpFloatHostCreateDTO,
  ModelDhcpFloatHostDeleteDTO,
  ModelDhcpFloatHostExportDTO,
  ModelDhcpFloatHostUpdateDTO,
  ModelDhcpIPLeaseExportDTO,
  ModelDhcpIPLeaseReleaseDTO,
  ModelDhcpNodeFailoverCreateDTO,
  ModelDhcpNodeUpdateFailoverDTO,
  ModelDhcpNodeUpdateFailoverPartnerDTO,
  ModelDhcpPoolCreateDTO,
  ModelDhcpPoolDeleteDTO,
  ModelDhcpPoolDownDTO,
  ModelDhcpPoolUpDTO,
  ModelDhcpTempAuthCreateDTO,
  ModelDhcpTempAuthDeleteDTO,
  ModelDhcpTempAuthUpdateDTO,
  ModelFingerPrintsCreateDTO,
  ModelFingerPrintsDeleteDTO,
  ModelFingerPrintsDiscoverDeleteDTO,
  ModelFingerPrintsEnableDTO,
  ModelFingerPrintsGenerateDTO,
  ModelFingerPrintsUpdateDTO,
  ModelIPPoolDeleteDTO,
  ModelOptionsCreateDTO,
  ModelOptionsDeleteDTO,
  ModelOptionsUpdateDTO,
  ModelPoolCreateDTO,
  ModelPoolGlobalSettingDTO,
  ModelPoolNetworkBatchUpdateDTO,
  ModelPoolNetworkUpdateDTO,
  ModelPoolNodeBatchUpdateDTO,
  ModelPoolUpdateDTO,
  ModelShareNetworkCreateDTO,
  ModelShareNetworkDeleteDTO,
  ModelShareNetworkUpdateDTO,
  ModelTemplateCreateDTO,
  ModelTemplateDeleteDTO,
  ModelTemplateUpdateDTO,
  UtilsDataResponseArrayModelDeviceClassVO,
  UtilsDataResponseModelDDns,
  UtilsDataResponseModelPoolGlobalSettingVO,
  UtilsDataResponseUtilsPageDataModelDhcpAclChildQueryVO,
  UtilsDataResponseUtilsPageDataModelDhcpAclQueryVO,
  UtilsDataResponseUtilsPageDataModelDhcpFloatHostQueryVO,
  UtilsDataResponseUtilsPageDataModelDhcpIPLeaseQueryVO,
  UtilsDataResponseUtilsPageDataModelDhcpTempAuthQueryVO,
  UtilsDataResponseUtilsPageDataModelFingerPrintsQueryVO,
  UtilsDataResponseUtilsPageDataModelOptionsQueryVO,
  UtilsDataResponseUtilsPageDataModelPoolQueryVO,
  UtilsDataResponseUtilsPageDataModelShareNetworkQueryVO,
  UtilsDataResponseUtilsPageDataModelTemplateQueryVO,
  UtilsEmptyResponse,
  UtilsPageDataModelDhcpNodeFailoverQueryVO,
  UtilsPageDataModelDhcpPoolQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Dhcp<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags DhcpACL
   * @name GetDhcp
   * @summary 访问控制查询
   * @request GET:/dhcp/acl
   * @secure
   */
  getDhcp = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDhcpAclQueryVO, any>({
      path: `/dhcp/acl`,
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
   * @tags DhcpACL
   * @name PostDhcp
   * @summary 访问控制新增
   * @request POST:/dhcp/acl
   * @secure
   */
  postDhcp = (req: ModelDhcpAclCreateDTOSwagger, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl`,
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
   * @tags DhcpACL
   * @name DeleteDhcp
   * @summary 访问控制删除
   * @request DELETE:/dhcp/acl
   * @secure
   */
  deleteDhcp = (req: ModelDhcpAclDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl`,
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
   * @tags DhcpACL
   * @name AclChildList
   * @summary 访问控制子项查询
   * @request GET:/dhcp/acl/child
   * @secure
   */
  aclChildList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      pid: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDhcpAclChildQueryVO, any>({
      path: `/dhcp/acl/child`,
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
   * @tags DhcpACL
   * @name AclChildCreate
   * @summary 访问控制子项新增
   * @request POST:/dhcp/acl/child
   * @secure
   */
  aclChildCreate = (req: ModelDhcpAclChildCreateDTOSwagger, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl/child`,
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
   * @tags DhcpACL
   * @name AclChildDelete
   * @summary 访问控制子项删除
   * @request DELETE:/dhcp/acl/child
   * @secure
   */
  aclChildDelete = (req: ModelDhcpAclChildDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl/child`,
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
   * @tags DhcpACL
   * @name AclChildExportCreate
   * @summary 访问控制子项（MAC）导出
   * @request POST:/dhcp/acl/child/export/{pid}
   * @secure
   */
  aclChildExportCreate = (pid: number, req: ModelChildExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl/child/export/${pid}`,
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
   * @tags DhcpACL
   * @name AclChildImportCreate
   * @summary 访问控制子项（MAC）导入
   * @request POST:/dhcp/acl/child/import/{pid}
   * @secure
   */
  aclChildImportCreate = (
    pid: number,
    data: {
      /** 模式-add:追加、del:删除 */
      importMode: 'add' | 'del' | 'update'
      /** 操作日志的id */
      messageID?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl/child/import/${pid}`,
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
   * @tags DhcpACL
   * @name AclChildUpdate
   * @summary 访问控制子项修改
   * @request PUT:/dhcp/acl/child/{id}
   * @secure
   */
  aclChildUpdate = (
    id: number,
    req: ModelDhcpAclChildUpdateDTOSwagger,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl/child/${id}`,
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
   * @tags DhcpACL
   * @name PutDhcp
   * @summary 访问控制修改
   * @request PUT:/dhcp/acl/{id}
   * @secure
   */
  putDhcp = (id: number, req: ModelDhcpAclUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/acl/${id}`,
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
   * @tags Dhcp
   * @name DdnsList
   * @summary 查询 Dhcp>DDns
   * @request GET:/dhcp/ddns
   * @secure
   */
  ddnsList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelDDns, any>({
      path: `/dhcp/ddns`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dhcp
   * @name DdnsUpdate
   * @summary 修改 Dhcp>DDNS
   * @request PUT:/dhcp/ddns
   * @secure
   */
  ddnsUpdate = (req: ModelDDns, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/ddns`,
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
   * @tags DHCPNode
   * @name DhcpNodeFailoverList
   * @summary DHCP业务组-查询Failover
   * @request GET:/dhcp/dhcp-node/failover
   * @secure
   */
  dhcpNodeFailoverList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDhcpNodeFailoverQueryVO, any>({
      path: `/dhcp/dhcp-node/failover`,
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
   * @tags DHCPNode
   * @name DhcpNodeFailoverCreate
   * @summary DHCP业务组-Failover新增
   * @request POST:/dhcp/dhcp-node/failover
   * @secure
   */
  dhcpNodeFailoverCreate = (req: ModelDhcpNodeFailoverCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-node/failover`,
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
   * @tags DHCPNode
   * @name DhcpNodeFailoverDelete
   * @summary DHCP业务组-Failover删除
   * @request DELETE:/dhcp/dhcp-node/failover
   * @secure
   */
  dhcpNodeFailoverDelete = (req: ModelDhcpFailoverDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-node/failover`,
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
   * @tags DHCPNode
   * @name DhcpNodeFailoverPartnerDetail
   * @summary DHCP业务组-设备partner down
   * @request GET:/dhcp/dhcp-node/failover/partner/{id}
   * @secure
   */
  dhcpNodeFailoverPartnerDetail = (id: string, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-node/failover/partner/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags DHCPNode
   * @name DhcpNodeFailoverPartnerUpdate
   * @summary DHCP业务组-设备partner down
   * @request PUT:/dhcp/dhcp-node/failover/partner/{id}
   * @secure
   */
  dhcpNodeFailoverPartnerUpdate = (
    id: number,
    req: ModelDhcpNodeUpdateFailoverPartnerDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-node/failover/partner/${id}`,
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
   * @tags DHCPNode
   * @name DhcpNodeFailoverUpdate
   * @summary DHCP业务组-Failover修改
   * @request PUT:/dhcp/dhcp-node/failover/{id}
   * @secure
   */
  dhcpNodeFailoverUpdate = (
    id: number,
    req: ModelDhcpNodeUpdateFailoverDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-node/failover/${id}`,
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
   * @tags DhcpPool
   * @name DhcpPoolList
   * @summary 查询DhcpPool
   * @request GET:/dhcp/dhcp-pool
   * @secure
   */
  dhcpPoolList = (
    query: {
      keyword?: string
      networkGroupID?: number
      networkSpaceID?: number
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDhcpPoolQueryVO, any>({
      path: `/dhcp/dhcp-pool`,
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
   * @tags DhcpPool
   * @name DhcpPoolCreate
   * @summary 新增DhcpPool（网段与设备绑定并新增地址池）
   * @request POST:/dhcp/dhcp-pool
   * @secure
   */
  dhcpPoolCreate = (req: ModelDhcpPoolCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool`,
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
   * @tags DhcpPool
   * @name DhcpPoolDelete
   * @summary 删除DhcpPool（网段与设备解除绑定并删除地址池）
   * @request DELETE:/dhcp/dhcp-pool
   * @secure
   */
  dhcpPoolDelete = (req: ModelDhcpPoolDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool`,
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
   * @tags DhcpPool
   * @name DhcpPoolDhcpNodeUpdate
   * @summary 批量修改地址池设备组
   * @request PUT:/dhcp/dhcp-pool/dhcp-node
   * @secure
   */
  dhcpPoolDhcpNodeUpdate = (req: ModelPoolNodeBatchUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool/dhcp-node`,
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
   * @tags DhcpPool
   * @name DhcpPoolDownUpdate
   * @summary 暂停DhcpPool
   * @request PUT:/dhcp/dhcp-pool/down
   * @secure
   */
  dhcpPoolDownUpdate = (req: ModelDhcpPoolDownDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool/down`,
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
   * @tags DhcpPool
   * @name DhcpPoolNetworkBatchUpdate
   * @summary 批量修改地址池网段配置
   * @request PUT:/dhcp/dhcp-pool/network-batch
   * @secure
   */
  dhcpPoolNetworkBatchUpdate = (req: ModelPoolNetworkBatchUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool/network-batch`,
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
   * @tags DhcpPool
   * @name DhcpPoolNetworkUpdate
   * @summary 修改地址池网段配置
   * @request PUT:/dhcp/dhcp-pool/network/{id}
   * @secure
   */
  dhcpPoolNetworkUpdate = (
    id: string,
    req: ModelPoolNetworkUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool/network/${id}`,
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
   * @tags DhcpPool
   * @name DhcpPoolSettingList
   * @summary 查询DhcpPoolSetting
   * @request GET:/dhcp/dhcp-pool/setting
   * @secure
   */
  dhcpPoolSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelPoolGlobalSettingVO, any>({
      path: `/dhcp/dhcp-pool/setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags DhcpPool
   * @name DhcpPoolSettingUpdate
   * @summary 修改DhcpPoolSetting
   * @request PUT:/dhcp/dhcp-pool/setting
   * @secure
   */
  dhcpPoolSettingUpdate = (req: ModelPoolGlobalSettingDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool/setting`,
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
   * @tags DhcpPool
   * @name DhcpPoolUpUpdate
   * @summary 启动DhcpPool
   * @request PUT:/dhcp/dhcp-pool/up
   * @secure
   */
  dhcpPoolUpUpdate = (req: ModelDhcpPoolUpDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/dhcp-pool/up`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsList
   * @summary 指纹库查询
   * @request GET:/dhcp/finger-prints
   * @secure
   */
  fingerPrintsList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelFingerPrintsQueryVO, any>({
      path: `/dhcp/finger-prints`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsCreate
   * @summary 指纹库新增
   * @request POST:/dhcp/finger-prints
   * @secure
   */
  fingerPrintsCreate = (req: ModelFingerPrintsCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsDelete
   * @summary 指纹库删除
   * @request DELETE:/dhcp/finger-prints
   * @secure
   */
  fingerPrintsDelete = (req: ModelFingerPrintsDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsBuiltinCreate
   * @summary 升级-内置指纹库
   * @request POST:/dhcp/finger-prints/builtin
   * @secure
   */
  fingerPrintsBuiltinCreate = (data: any, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints/builtin`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsDeviceClassList
   * @summary 设备类型查询
   * @request GET:/dhcp/finger-prints/device-class
   * @secure
   */
  fingerPrintsDeviceClassList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelDeviceClassVO, any>({
      path: `/dhcp/finger-prints/device-class`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsDeviceClassUpdate
   * @summary 设备类型更新
   * @request PUT:/dhcp/finger-prints/device-class
   * @secure
   */
  fingerPrintsDeviceClassUpdate = (req: ModelDeviceClassUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints/device-class`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsDiscoverList
   * @summary 指纹发现查询
   * @request GET:/dhcp/finger-prints/discover
   * @secure
   */
  fingerPrintsDiscoverList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelFingerPrintsQueryVO, any>({
      path: `/dhcp/finger-prints/discover`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsDiscoverDelete
   * @summary 指纹发现删除
   * @request DELETE:/dhcp/finger-prints/discover
   * @secure
   */
  fingerPrintsDiscoverDelete = (
    req: ModelFingerPrintsDiscoverDeleteDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints/discover`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsEnableUpdate
   * @summary 指纹库启用（批量）
   * @request PUT:/dhcp/finger-prints/enable
   * @secure
   */
  fingerPrintsEnableUpdate = (req: ModelFingerPrintsEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints/enable`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsGenerateCreate
   * @summary 指纹发现转指纹库
   * @request POST:/dhcp/finger-prints/generate
   * @secure
   */
  fingerPrintsGenerateCreate = (req: ModelFingerPrintsGenerateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints/generate`,
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
   * @tags DhcpFingerprints
   * @name FingerPrintsUpdate
   * @summary 指纹库修改
   * @request PUT:/dhcp/finger-prints/{id}
   * @secure
   */
  fingerPrintsUpdate = (id: number, req: ModelFingerPrintsUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/finger-prints/${id}`,
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
   * @tags floatHost
   * @name FloatHostList
   * @summary floatHost查询
   * @request GET:/dhcp/float-host
   * @secure
   */
  floatHostList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDhcpFloatHostQueryVO, any>({
      path: `/dhcp/float-host`,
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
   * @tags floatHost
   * @name FloatHostCreate
   * @summary floatHost新增
   * @request POST:/dhcp/float-host
   * @secure
   */
  floatHostCreate = (req: ModelDhcpFloatHostCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/float-host`,
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
   * @tags floatHost
   * @name FloatHostDelete
   * @summary floatHost删除
   * @request DELETE:/dhcp/float-host
   * @secure
   */
  floatHostDelete = (req: ModelDhcpFloatHostDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/float-host`,
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
   * @tags floatHost
   * @name FloatHostExportCreate
   * @summary floatHost导出
   * @request POST:/dhcp/float-host/export
   * @secure
   */
  floatHostExportCreate = (req: ModelDhcpFloatHostExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/float-host/export`,
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
   * @tags floatHost
   * @name FloatHostImportCreate
   * @summary floatHost导入
   * @request POST:/dhcp/float-host/import
   * @secure
   */
  floatHostImportCreate = (
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
      path: `/dhcp/float-host/import`,
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
   * @tags floatHost
   * @name FloatHostUpdate
   * @summary floatHost修改
   * @request PUT:/dhcp/float-host/{id}
   * @secure
   */
  floatHostUpdate = (id: number, req: ModelDhcpFloatHostUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/float-host/${id}`,
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
   * @name IpLeaseActiveList
   * @summary 查询实时租约
   * @request GET:/dhcp/ip-lease/active
   * @secure
   */
  ipLeaseActiveList = (
    query: {
      keyword?: string
      networkID?: number
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      version: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDhcpIPLeaseQueryVO, any>({
      path: `/dhcp/ip-lease/active`,
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
   * @name IpLeaseActiveExportCreate
   * @summary 实时租约导出
   * @request POST:/dhcp/ip-lease/active/export
   * @secure
   */
  ipLeaseActiveExportCreate = (req: ModelDhcpIPLeaseExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/ip-lease/active/export`,
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
   * @tags IPLease
   * @name IpLeaseActiveReleaseCreate
   * @summary 实时租约释放
   * @request POST:/dhcp/ip-lease/active/release
   * @secure
   */
  ipLeaseActiveReleaseCreate = (req: ModelDhcpIPLeaseReleaseDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/ip-lease/active/release`,
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
   * @tags IPPool
   * @name IpPoolList
   * @summary 查询IPPool
   * @request GET:/dhcp/ip-pool
   * @secure
   */
  ipPoolList = (
    query: {
      keyword?: string
      networkId?: number
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelPoolQueryVO, any>({
      path: `/dhcp/ip-pool`,
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
   * @tags IPPool
   * @name IpPoolCreate
   * @summary 新增IPPool
   * @request POST:/dhcp/ip-pool
   * @secure
   */
  ipPoolCreate = (req: ModelPoolCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/ip-pool`,
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
   * @tags IPPool
   * @name IpPoolDelete
   * @summary 删除IPPool
   * @request DELETE:/dhcp/ip-pool
   * @secure
   */
  ipPoolDelete = (req: ModelIPPoolDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/ip-pool`,
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
   * @tags IPPool
   * @name IpPoolUpdate
   * @summary 修改IPPool
   * @request PUT:/dhcp/ip-pool/{id}
   * @secure
   */
  ipPoolUpdate = (id: number, req: ModelPoolUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/ip-pool/${id}`,
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
   * @tags DhcpOptions
   * @name OptionsList
   * @summary 查询DhcpOptions(分页)
   * @request GET:/dhcp/options
   * @secure
   */
  optionsList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelOptionsQueryVO, any>({
      path: `/dhcp/options`,
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
   * @tags DhcpOptions
   * @name OptionsCreate
   * @summary 新增DhcpOptions
   * @request POST:/dhcp/options
   * @secure
   */
  optionsCreate = (req: ModelOptionsCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/options`,
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
   * @tags DhcpOptions
   * @name OptionsDelete
   * @summary 删除DhcpOptions
   * @request DELETE:/dhcp/options
   * @secure
   */
  optionsDelete = (req: ModelOptionsDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/options`,
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
   * @tags DhcpOptions
   * @name OptionsUpdate
   * @summary 修改DhcpOptions
   * @request PUT:/dhcp/options/{id}
   * @secure
   */
  optionsUpdate = (id: number, req: ModelOptionsUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/options/${id}`,
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
   * @tags dhcpShareNetwork
   * @name ShareNetworkList
   * @summary shareNetwork查询
   * @request GET:/dhcp/share-network
   * @secure
   */
  shareNetworkList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelShareNetworkQueryVO, any>({
      path: `/dhcp/share-network`,
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
   * @tags dhcpShareNetwork
   * @name ShareNetworkCreate
   * @summary shareNetwork新增
   * @request POST:/dhcp/share-network
   * @secure
   */
  shareNetworkCreate = (req: ModelShareNetworkCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/share-network`,
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
   * @tags dhcpShareNetwork
   * @name ShareNetworkDelete
   * @summary shareNetwork删除
   * @request DELETE:/dhcp/share-network
   * @secure
   */
  shareNetworkDelete = (req: ModelShareNetworkDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/share-network`,
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
   * @tags dhcpShareNetwork
   * @name ShareNetworkUpdate
   * @summary shareNetwork修改
   * @request PUT:/dhcp/share-network/{id}
   * @secure
   */
  shareNetworkUpdate = (id: number, req: ModelShareNetworkUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/share-network/${id}`,
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
   * @tags DhcpTempAuth
   * @name TempAuthList
   * @summary 临时授权查询
   * @request GET:/dhcp/temp-auth
   * @secure
   */
  tempAuthList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDhcpTempAuthQueryVO, any>({
      path: `/dhcp/temp-auth`,
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
   * @tags DhcpTempAuth
   * @name TempAuthCreate
   * @summary 临时授权新增
   * @request POST:/dhcp/temp-auth
   * @secure
   */
  tempAuthCreate = (req: ModelDhcpTempAuthCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/temp-auth`,
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
   * @tags DhcpTempAuth
   * @name TempAuthDelete
   * @summary 临时授权删除
   * @request DELETE:/dhcp/temp-auth
   * @secure
   */
  tempAuthDelete = (req: ModelDhcpTempAuthDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/temp-auth`,
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
   * @tags DhcpTempAuth
   * @name TempAuthUpdate
   * @summary 临时授权修改
   * @request PUT:/dhcp/temp-auth/{id}
   * @secure
   */
  tempAuthUpdate = (id: number, req: ModelDhcpTempAuthUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/temp-auth/${id}`,
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
   * @tags DhcpTemplate
   * @name TemplateList
   * @summary 查询DhcpTemplate
   * @request GET:/dhcp/template
   * @secure
   */
  templateList = (
    query: {
      /** 名称或备注 */
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelTemplateQueryVO, any>({
      path: `/dhcp/template`,
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
   * @tags DhcpTemplate
   * @name TemplateCreate
   * @summary 新增DhcpTemplate
   * @request POST:/dhcp/template
   * @secure
   */
  templateCreate = (req: ModelTemplateCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/template`,
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
   * @tags DhcpTemplate
   * @name TemplateDelete
   * @summary 删除DhcpTemplate
   * @request DELETE:/dhcp/template
   * @secure
   */
  templateDelete = (req: ModelTemplateDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/template`,
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
   * @tags DhcpTemplate
   * @name TemplateUpdate
   * @summary 修改DhcpTemplate
   * @request PUT:/dhcp/template/{id}
   * @secure
   */
  templateUpdate = (id: number, req: ModelTemplateUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dhcp/template/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
