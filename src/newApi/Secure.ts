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
  ModelAmplificationCreateDTO,
  ModelAmplificationDeleteDTO,
  ModelAmplificationUpdateDTO,
  ModelAmplificationUpdateEffectDTO,
  ModelCacheOptionFlushDTO,
  ModelCacheOptionQueryDTO,
  ModelCacheProtectedSnoopCreateDTO,
  ModelCacheProtectedSnoopDeleteDTO,
  ModelCacheProtectedSnoopUpdateDTO,
  ModelCacheProtectedSnoopUpdateEffectDTO,
  ModelCacheSettingCreateDTO,
  ModelCacheSettingDeleteDTO,
  ModelCacheSettingUpdateDTO,
  ModelCacheSettingUpdateEffectDTO,
  ModelCloudThreatintelShowVO,
  ModelDomainAclCreateDTO,
  ModelDomainAclDeleteDTO,
  ModelDomainAclExportDTO,
  ModelDomainAclUpdateDTO,
  ModelDomainAclUpdateEffectDTO,
  ModelDomainMonitorCreateDTO,
  ModelDomainMonitorDeleteDTO,
  ModelDomainMonitorExecuteDTO,
  ModelDomainMonitorUpdateDTO,
  ModelIpAclAllowCreateDTO,
  ModelIpAclAllowUpdateDTO,
  ModelIpAclDeleteDTO,
  ModelIpAclDenyCreateDTO,
  ModelIpAclDenyExportDTO,
  ModelIpAclDenyUpdateDTO,
  ModelIpAclUpdateEffectDTO,
  ModelNxrCreateDTO,
  ModelNxrDeleteDTO,
  ModelNxrUpdateDTO,
  ModelNxrUpdateEffectDTO,
  ModelQtypeAclCreateDTO,
  ModelQtypeAclDeleteDTO,
  ModelQtypeAclUpdateDTO,
  ModelQtypeAclUpdateEffectDTO,
  ModelRateDomainLimitCreateDTO,
  ModelRateDomainLimitDeleteDTO,
  ModelRateDomainLimitUpdateDTO,
  ModelRateDomainLimitUpdateEffectDTO,
  ModelRateIpLimitCreateDTO,
  ModelRateIpLimitDeleteDTO,
  ModelRateIpLimitUpdateDTO,
  ModelRateIpLimitUpdateEffectDTO,
  ModelRpzCreateDTO,
  ModelRpzDeleteDTO,
  ModelRpzUpdateDTO,
  ModelRpzUpdateEffectDTO,
  ModelSecurityAdvanceAclCreateDTO,
  ModelSecurityAdvanceAclDeleteDTO,
  ModelSecurityAdvanceAclSettingUpdateDTO,
  ModelSecurityAdvanceAclUpdateDTO,
  ModelSecurityAdvanceAclUpdateEffectDTO,
  ModelSecurityBasicCreateDTO,
  ModelSecurityBasicDeleteDTO,
  ModelSecurityBasicUpdateDTO,
  ModelSecurityBasicUpdateEffectDTO,
  ModelSecurityCacheCapacityDTO,
  ModelSecurityCloudThreatintelSet,
  ModelSecurityRecursionCreateDTO,
  ModelSecurityRecursionDeleteDTO,
  ModelSecurityRecursionUpdateDTO,
  ModelSecurityRecursionUpdateEffectDTO,
  ModelSecurityThreatintelCreateDTO,
  ModelSecurityThreatintelDeleteDTO,
  ModelSecurityThreatintelUpdateDTO,
  ModelSecurityThreatintelUpdateEffectDTO,
  ModelSecurityTunnelCreateDTO,
  ModelSecurityTunnelDeleteDTO,
  ModelSecurityTunnelUpdateDTO,
  ModelSecurityTunnelUpdateEffectDTO,
  ModelSecurityXforceCreateDTO,
  ModelSecurityXforceDeleteDTO,
  ModelSecurityXforceExportDTO,
  ModelSecurityXforceUpdateDTO,
  ModelSecurityXforceUpdateEffectDTO,
  UtilsDataResponseUtilsPageDataModelAmplificationQueryVO,
  UtilsDataResponseUtilsPageDataModelCacheProtectedSnoopQueryVO,
  UtilsDataResponseUtilsPageDataModelDomainAclQueryVO,
  UtilsDataResponseUtilsPageDataModelDomainMonitorQueryVO,
  UtilsDataResponseUtilsPageDataModelRateDomainLimitQueryVO,
  UtilsDataResponseUtilsPageDataModelSecurityAdvanceAclQueryVO,
  UtilsDataResponseUtilsPageDataModelSecurityThreatintelQueryVO,
  UtilsDataResponseUtilsPageDataModelSecurityTunnelQueryVO,
  UtilsDataResponseUtilsPageDataModelSecurityXforceQueryVO,
  UtilsEmptyResponse,
  UtilsPageDataModelCacheSettingQueryVO,
  UtilsPageDataModelDomainAclExportVO,
  UtilsPageDataModelIpAclDenyExportVO,
  UtilsPageDataModelIpAclDenyQueryVO,
  UtilsPageDataModelIpAclQueryVO,
  UtilsPageDataModelNxrQueryVO,
  UtilsPageDataModelQtypeAclQueryVO,
  UtilsPageDataModelRateIpLimitQueryVO,
  UtilsPageDataModelRpzQueryVO,
  UtilsPageDataModelSecurityBasicQueryVO,
  UtilsPageDataModelSecurityRecursionQueryVO,
  UtilsPageDataModelSecurityXforceExportVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Secure<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags systemACL
   * @name AdvAclList
   * @summary 系统ACL查询
   * @request GET:/secure/adv-acl
   * @secure
   */
  advAclList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelSecurityAdvanceAclQueryVO, any>({
      path: `/secure/adv-acl`,
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
   * @tags systemACL
   * @name AdvAclCreate
   * @summary 系统ACL新增
   * @request POST:/secure/adv-acl
   * @secure
   */
  advAclCreate = (req: ModelSecurityAdvanceAclCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/adv-acl`,
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
   * @tags systemACL
   * @name AdvAclDelete
   * @summary 系统ACL删除
   * @request DELETE:/secure/adv-acl
   * @secure
   */
  advAclDelete = (req: ModelSecurityAdvanceAclDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/adv-acl`,
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
   * @tags systemACL
   * @name AdvAclEffectRangeUpdate
   * @summary 系统ACL修改生效范围
   * @request PUT:/secure/adv-acl/effect-range
   * @secure
   */
  advAclEffectRangeUpdate = (
    req: ModelSecurityAdvanceAclUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/adv-acl/effect-range`,
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
   * @tags systemACL
   * @name AdvAclSettingsList
   * @summary 系统ACL获取设置
   * @request GET:/secure/adv-acl/settings
   * @secure
   */
  advAclSettingsList = (
    query?: {
      groupID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/adv-acl/settings`,
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
   * @tags systemACL
   * @name AdvAclSettingsUpdate
   * @summary 系统ACL修改设置
   * @request PUT:/secure/adv-acl/settings
   * @secure
   */
  advAclSettingsUpdate = (
    req: ModelSecurityAdvanceAclSettingUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/adv-acl/settings`,
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
   * @tags systemACL
   * @name AdvAclUpdate
   * @summary 系统ACL修改
   * @request PUT:/secure/adv-acl/{id}
   * @secure
   */
  advAclUpdate = (id: number, req: ModelSecurityAdvanceAclUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/adv-acl/${id}`,
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
   * @tags Security
   * @name AmplificationList
   * @summary 放大攻击防护查询
   * @request GET:/secure/amplification
   * @secure
   */
  amplificationList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelAmplificationQueryVO, any>({
      path: `/secure/amplification`,
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
   * @tags Security
   * @name AmplificationCreate
   * @summary 放大攻击防护新增
   * @request POST:/secure/amplification
   * @secure
   */
  amplificationCreate = (req: ModelAmplificationCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/amplification`,
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
   * @tags Security
   * @name AmplificationDelete
   * @summary 放大攻击防护删除
   * @request DELETE:/secure/amplification
   * @secure
   */
  amplificationDelete = (req: ModelAmplificationDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/amplification`,
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
   * @tags Security
   * @name AmplificationEffectRangeUpdate
   * @summary 放大攻击防护修改生效范围
   * @request PUT:/secure/amplification/effect-range
   * @secure
   */
  amplificationEffectRangeUpdate = (
    req: ModelAmplificationUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/amplification/effect-range`,
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
   * @tags Security
   * @name AmplificationUpdate
   * @summary 放大攻击防护修改
   * @request PUT:/secure/amplification/{id}
   * @secure
   */
  amplificationUpdate = (
    id: number,
    req: ModelAmplificationUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/amplification/${id}`,
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
   * @tags Security
   * @name BasicSettingsList
   * @summary 基础参数列表
   * @request GET:/secure/basic-settings
   * @secure
   */
  basicSettingsList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelSecurityBasicQueryVO, any>({
      path: `/secure/basic-settings`,
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
   * @tags Security
   * @name BasicSettingsCreate
   * @summary 基础安全参数新增
   * @request POST:/secure/basic-settings
   * @secure
   */
  basicSettingsCreate = (req: ModelSecurityBasicCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/basic-settings`,
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
   * @tags Security
   * @name BasicSettingsDelete
   * @summary 基础安全参数删除
   * @request DELETE:/secure/basic-settings
   * @secure
   */
  basicSettingsDelete = (req: ModelSecurityBasicDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/basic-settings`,
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
   * @tags Security
   * @name BasicSettingsEffectRangeUpdate
   * @summary 修改缓存防护的生效范围（批量）
   * @request PUT:/secure/basic-settings/effect-range
   * @secure
   */
  basicSettingsEffectRangeUpdate = (
    req: ModelSecurityBasicUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/basic-settings/effect-range`,
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
   * @tags Security
   * @name BasicSettingsUpdate
   * @summary 基础安全参数修改
   * @request PUT:/secure/basic-settings/{id}
   * @secure
   */
  basicSettingsUpdate = (
    id: number,
    req: ModelSecurityBasicUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/basic-settings/${id}`,
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
   * @tags Security
   * @name CacheCapacityList
   * @summary 安全>缓存防护>缓存容量查询
   * @request GET:/secure/cache-capacity
   * @secure
   */
  cacheCapacityList = (params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-capacity`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Security
   * @name CacheCapacityUpdate
   * @summary 安全>缓存防护>缓存容量设置
   * @request PUT:/secure/cache-capacity
   * @secure
   */
  cacheCapacityUpdate = (req: ModelSecurityCacheCapacityDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-capacity`,
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
   * @tags Security
   * @name CacheProtectedSnoopList
   * @summary 缓存防护窥查询
   * @request GET:/secure/cache-protected-snoop
   * @secure
   */
  cacheProtectedSnoopList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelCacheProtectedSnoopQueryVO, any>({
      path: `/secure/cache-protected-snoop`,
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
   * @tags Security
   * @name CacheProtectedSnoopCreate
   * @summary 缓存防护窥新增
   * @request POST:/secure/cache-protected-snoop
   * @secure
   */
  cacheProtectedSnoopCreate = (
    req: ModelCacheProtectedSnoopCreateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-protected-snoop`,
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
   * @tags Security
   * @name CacheProtectedSnoopDelete
   * @summary 缓存防护窥删除
   * @request DELETE:/secure/cache-protected-snoop
   * @secure
   */
  cacheProtectedSnoopDelete = (
    req: ModelCacheProtectedSnoopDeleteDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-protected-snoop`,
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
   * @tags Security
   * @name CacheProtectedSnoopEffectRangeUpdate
   * @summary 缓存防护窥探修改生效范围
   * @request PUT:/secure/cache-protected-snoop/effect-range
   * @secure
   */
  cacheProtectedSnoopEffectRangeUpdate = (
    req: ModelCacheProtectedSnoopUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-protected-snoop/effect-range`,
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
   * @tags Security
   * @name CacheProtectedSnoopUpdate
   * @summary 缓存防护窥修改
   * @request PUT:/secure/cache-protected-snoop/{id}
   * @secure
   */
  cacheProtectedSnoopUpdate = (
    id: number,
    req: ModelCacheProtectedSnoopUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-protected-snoop/${id}`,
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
   * @tags Security
   * @name CacheQueryCreate
   * @summary 缓存查询
   * @request POST:/secure/cache-query
   * @secure
   */
  cacheQueryCreate = (req: ModelCacheOptionQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-query`,
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
   * @tags Security
   * @name CacheRefreshCreate
   * @summary 缓存刷新
   * @request POST:/secure/cache-refresh
   * @secure
   */
  cacheRefreshCreate = (req: ModelCacheOptionFlushDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-refresh`,
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
   * @tags Security
   * @name CacheSettingsList
   * @summary 缓存防护列表
   * @request GET:/secure/cache-settings
   * @secure
   */
  cacheSettingsList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelCacheSettingQueryVO, any>({
      path: `/secure/cache-settings`,
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
   * @tags Security
   * @name CacheSettingsCreate
   * @summary 缓存防护新增
   * @request POST:/secure/cache-settings
   * @secure
   */
  cacheSettingsCreate = (req: ModelCacheSettingCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-settings`,
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
   * @tags Security
   * @name CacheSettingsDelete
   * @summary 缓存防护删除
   * @request DELETE:/secure/cache-settings
   * @secure
   */
  cacheSettingsDelete = (req: ModelCacheSettingDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-settings`,
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
   * @tags Security
   * @name CacheSettingsEffectRangeUpdate
   * @summary 修改缓存防护的生效范围（批量）
   * @request PUT:/secure/cache-settings/effect-range
   * @secure
   */
  cacheSettingsEffectRangeUpdate = (
    req: ModelCacheSettingUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-settings/effect-range`,
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
   * @tags Security
   * @name CacheSettingsUpdate
   * @summary 缓存防护修改
   * @request PUT:/secure/cache-settings/{id}
   * @secure
   */
  cacheSettingsUpdate = (id: number, req: ModelCacheSettingUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cache-settings/${id}`,
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
   * @tags Security
   * @name CloudThreatintelList
   * @summary 云端威胁情报获取
   * @request GET:/secure/cloud/threatintel
   * @secure
   */
  cloudThreatintelList = (params: RequestParams = {}) =>
    this.request<ModelCloudThreatintelShowVO, any>({
      path: `/secure/cloud/threatintel`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Security
   * @name CloudThreatintelUpdate
   * @summary 云端威胁情报设置
   * @request PUT:/secure/cloud/threatintel
   * @secure
   */
  cloudThreatintelUpdate = (req: ModelSecurityCloudThreatintelSet, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/secure/cloud/threatintel`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Security
   * @name CloudThreatintelImportCreate
   * @summary 云端威胁情报离线导入
   * @request POST:/secure/cloud/threatintel/import
   * @secure
   */
  cloudThreatintelImportCreate = (params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cloud/threatintel/import`,
      method: 'POST',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Security
   * @name CloudThreatintelSyncUpdate
   * @summary 云端威胁情报同步
   * @request PUT:/secure/cloud/threatintel/sync
   * @secure
   */
  cloudThreatintelSyncUpdate = (params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/cloud/threatintel/sync`,
      method: 'PUT',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Security
   * @name DomainAclList
   * @summary 域名访问限速列表
   * @request GET:/secure/domain-acl
   * @secure
   */
  domainAclList = (
    query: {
      keyword?: string
      mode?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDomainAclQueryVO, any>({
      path: `/secure/domain-acl`,
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
   * @tags Security
   * @name DomainAclCreate
   * @summary 域名访问控制新增
   * @request POST:/secure/domain-acl
   * @secure
   */
  domainAclCreate = (req: ModelDomainAclCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-acl`,
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
   * @tags Security
   * @name DomainAclDelete
   * @summary 域名访问控制删除
   * @request DELETE:/secure/domain-acl
   * @secure
   */
  domainAclDelete = (req: ModelDomainAclDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-acl`,
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
   * @tags Recursion
   * @name DomainAclDenyExportCreate
   * @summary 域名黑名单导出
   * @request POST:/secure/domain-acl/deny/export
   * @secure
   */
  domainAclDenyExportCreate = (req: ModelDomainAclExportDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelDomainAclExportVO, any>({
      path: `/secure/domain-acl/deny/export`,
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
   * @tags Recursion
   * @name DomainAclDenyImportCreate
   * @summary 域名黑名单导入
   * @request POST:/secure/domain-acl/deny/import
   * @secure
   */
  domainAclDenyImportCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 模式-add:追加、del:删除 */
      importMode: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-acl/deny/import`,
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
   * @tags Security
   * @name DomainAclEffectRangeUpdate
   * @summary 修改域名访问控制的生效范围（批量）
   * @request PUT:/secure/domain-acl/effect-range
   * @secure
   */
  domainAclEffectRangeUpdate = (req: ModelDomainAclUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-acl/effect-range`,
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
   * @tags Security
   * @name DomainAclUpdate
   * @summary 域名访问控制修改
   * @request PUT:/secure/domain-acl/{id}
   * @secure
   */
  domainAclUpdate = (id: number, req: ModelDomainAclUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-acl/${id}`,
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
   * @tags Security
   * @name DomainLimitList
   * @summary 域名限速列表
   * @request GET:/secure/domain-limit
   * @secure
   */
  domainLimitList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRateDomainLimitQueryVO, any>({
      path: `/secure/domain-limit`,
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
   * @tags Security
   * @name DomainLimitCreate
   * @summary 域名限速新增
   * @request POST:/secure/domain-limit
   * @secure
   */
  domainLimitCreate = (req: ModelRateDomainLimitCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-limit`,
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
   * @tags Security
   * @name DomainLimitDelete
   * @summary 域名限速删除
   * @request DELETE:/secure/domain-limit
   * @secure
   */
  domainLimitDelete = (req: ModelRateDomainLimitDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-limit`,
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
   * @tags Security
   * @name DomainLimitEffectRangeUpdate
   * @summary 修改域名限速的生效范围（批量）
   * @request PUT:/secure/domain-limit/effect-range
   * @secure
   */
  domainLimitEffectRangeUpdate = (
    req: ModelRateDomainLimitUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-limit/effect-range`,
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
   * @tags Security
   * @name DomainLimitUpdate
   * @summary 域名限速修改
   * @request PUT:/secure/domain-limit/{id}
   * @secure
   */
  domainLimitUpdate = (
    id: number,
    req: ModelRateDomainLimitUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-limit/${id}`,
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
   * @tags DomainMonitor
   * @name DomainMonitorList
   * @summary 查询域名监控
   * @request GET:/secure/domain-monitor
   * @secure
   */
  domainMonitorList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDomainMonitorQueryVO, any>({
      path: `/secure/domain-monitor`,
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
   * @tags DomainMonitor
   * @name DomainMonitorCreate
   * @summary 新增域名监控
   * @request POST:/secure/domain-monitor
   * @secure
   */
  domainMonitorCreate = (req: ModelDomainMonitorCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-monitor`,
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
   * @tags DomainMonitor
   * @name DomainMonitorDelete
   * @summary 删除域名监控
   * @request DELETE:/secure/domain-monitor
   * @secure
   */
  domainMonitorDelete = (req: ModelDomainMonitorDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-monitor`,
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
   * @tags DomainMonitor
   * @name DomainMonitorExecuteUpdate
   * @summary 域名监控立即执行
   * @request PUT:/secure/domain-monitor/execute
   * @secure
   */
  domainMonitorExecuteUpdate = (req: ModelDomainMonitorExecuteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-monitor/execute`,
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
   * @tags DomainMonitor
   * @name DomainMonitorUpdate
   * @summary 修改域名监控
   * @request PUT:/secure/domain-monitor/{id}
   * @secure
   */
  domainMonitorUpdate = (
    id: number,
    req: ModelDomainMonitorUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/domain-monitor/${id}`,
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
   * @tags Security
   * @name IpAclDelete
   * @summary ip访问删除
   * @request DELETE:/secure/ip-acl
   * @secure
   */
  ipAclDelete = (req: ModelIpAclDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-acl`,
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
   * @tags Security
   * @name IpAclAllowList
   * @summary ip白名单列表
   * @request GET:/secure/ip-acl/allow
   * @secure
   */
  ipAclAllowList = (
    query: {
      keyword?: string
      mode?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelIpAclQueryVO, any>({
      path: `/secure/ip-acl/allow`,
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
   * @tags Security
   * @name IpAclAllowCreate
   * @summary ip白名单新增
   * @request POST:/secure/ip-acl/allow
   * @secure
   */
  ipAclAllowCreate = (req: ModelIpAclAllowCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-acl/allow`,
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
   * @tags Security
   * @name IpAclAllowUpdate
   * @summary ip白名单修改
   * @request PUT:/secure/ip-acl/allow/{id}
   * @secure
   */
  ipAclAllowUpdate = (id: number, req: ModelIpAclAllowUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-acl/allow/${id}`,
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
   * @tags Security
   * @name IpAclDenyList
   * @summary ip黑名单列表
   * @request GET:/secure/ip-acl/deny
   * @secure
   */
  ipAclDenyList = (
    query: {
      keyword?: string
      mode?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelIpAclDenyQueryVO, any>({
      path: `/secure/ip-acl/deny`,
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
   * @tags Security
   * @name IpAclDenyCreate
   * @summary ip黑名单新增
   * @request POST:/secure/ip-acl/deny
   * @secure
   */
  ipAclDenyCreate = (req: ModelIpAclDenyCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-acl/deny`,
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
   * @tags Security
   * @name IpAclDenyExportCreate
   * @summary IP黑名单导出
   * @request POST:/secure/ip-acl/deny/export
   * @secure
   */
  ipAclDenyExportCreate = (req: ModelIpAclDenyExportDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelIpAclDenyExportVO, any>({
      path: `/secure/ip-acl/deny/export`,
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
   * @tags Security
   * @name IpAclDenyImportCreate
   * @summary IP黑名单导入
   * @request POST:/secure/ip-acl/deny/import
   * @secure
   */
  ipAclDenyImportCreate = (
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
      path: `/secure/ip-acl/deny/import`,
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
   * @tags Security
   * @name IpAclDenyUpdate
   * @summary ip黑名单修改
   * @request PUT:/secure/ip-acl/deny/{id}
   * @secure
   */
  ipAclDenyUpdate = (id: number, req: ModelIpAclDenyUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-acl/deny/${id}`,
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
   * @tags Security
   * @name IpAclEffectRangeUpdate
   * @summary 修改ip访问控制的生效范围（批量）
   * @request PUT:/secure/ip-acl/effect-range
   * @secure
   */
  ipAclEffectRangeUpdate = (req: ModelIpAclUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-acl/effect-range`,
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
   * @tags Security
   * @name IpLimitList
   * @summary ip限速列表
   * @request GET:/secure/ip-limit
   * @secure
   */
  ipLimitList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelRateIpLimitQueryVO, any>({
      path: `/secure/ip-limit`,
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
   * @tags Security
   * @name IpLimitCreate
   * @summary ip限速新增
   * @request POST:/secure/ip-limit
   * @secure
   */
  ipLimitCreate = (req: ModelRateIpLimitCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-limit`,
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
   * @tags Security
   * @name IpLimitDelete
   * @summary ip限速删除
   * @request DELETE:/secure/ip-limit
   * @secure
   */
  ipLimitDelete = (req: ModelRateIpLimitDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-limit`,
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
   * @tags Security
   * @name IpLimitEffectRangeUpdate
   * @summary 修改ip限速的生效范围（批量）
   * @request PUT:/secure/ip-limit/effect-range
   * @secure
   */
  ipLimitEffectRangeUpdate = (req: ModelRateIpLimitUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-limit/effect-range`,
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
   * @tags Security
   * @name IpLimitUpdate
   * @summary ip限速修改
   * @request PUT:/secure/ip-limit/{id}
   * @secure
   */
  ipLimitUpdate = (id: number, req: ModelRateIpLimitUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/ip-limit/${id}`,
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
   * @tags Security
   * @name NxdDefenseList
   * @summary nxdomain重定向列表
   * @request GET:/secure/nxd-defense
   * @secure
   */
  nxdDefenseList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelNxrQueryVO, any>({
      path: `/secure/nxd-defense`,
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
   * @tags Security
   * @name NxdDefenseCreate
   * @summary nxdomain重定向新增
   * @request POST:/secure/nxd-defense
   * @secure
   */
  nxdDefenseCreate = (req: ModelNxrCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/nxd-defense`,
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
   * @tags Security
   * @name NxdDefenseDelete
   * @summary nxdomain重定向删除
   * @request DELETE:/secure/nxd-defense
   * @secure
   */
  nxdDefenseDelete = (req: ModelNxrDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/nxd-defense`,
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
   * @tags Security
   * @name NxdDefenseEffectRangeUpdate
   * @summary 修改nxdomain的生效范围（批量）
   * @request PUT:/secure/nxd-defense/effect-range
   * @secure
   */
  nxdDefenseEffectRangeUpdate = (req: ModelNxrUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/nxd-defense/effect-range`,
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
   * @tags Security
   * @name NxdDefenseUpdate
   * @summary nxdomain重定向修改
   * @request PUT:/secure/nxd-defense/{id}
   * @secure
   */
  nxdDefenseUpdate = (id: number, req: ModelNxrUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/nxd-defense/${id}`,
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
   * @tags Security
   * @name QtypeAclList
   * @summary 请求类型访问限速列表
   * @request GET:/secure/qtype-acl
   * @secure
   */
  qtypeAclList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelQtypeAclQueryVO, any>({
      path: `/secure/qtype-acl`,
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
   * @tags Security
   * @name QtypeAclCreate
   * @summary 请求访问控制新增
   * @request POST:/secure/qtype-acl
   * @secure
   */
  qtypeAclCreate = (req: ModelQtypeAclCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/qtype-acl`,
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
   * @tags Security
   * @name QtypeAclDelete
   * @summary 请求类型访问控制删除
   * @request DELETE:/secure/qtype-acl
   * @secure
   */
  qtypeAclDelete = (req: ModelQtypeAclDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/qtype-acl`,
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
   * @tags Security
   * @name QtypeAclEffectRangeUpdate
   * @summary 修改请求类型访问控制的生效范围（批量）
   * @request PUT:/secure/qtype-acl/effect-range
   * @secure
   */
  qtypeAclEffectRangeUpdate = (req: ModelQtypeAclUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/qtype-acl/effect-range`,
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
   * @tags Security
   * @name QtypeAclUpdate
   * @summary 请求访问控制修改
   * @request PUT:/secure/qtype-acl/{id}
   * @secure
   */
  qtypeAclUpdate = (id: number, req: ModelQtypeAclUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/qtype-acl/${id}`,
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
   * @tags Security
   * @name RecursionAggregationsList
   * @summary 递归聚合列表
   * @request GET:/secure/recursion-aggregations
   * @secure
   */
  recursionAggregationsList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelSecurityRecursionQueryVO, any>({
      path: `/secure/recursion-aggregations`,
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
   * @tags Security
   * @name RecursionAggregationsCreate
   * @summary 递归聚合新增
   * @request POST:/secure/recursion-aggregations
   * @secure
   */
  recursionAggregationsCreate = (
    req: ModelSecurityRecursionCreateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/recursion-aggregations`,
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
   * @tags Security
   * @name RecursionAggregationsDelete
   * @summary 递归聚合删除
   * @request DELETE:/secure/recursion-aggregations
   * @secure
   */
  recursionAggregationsDelete = (
    req: ModelSecurityRecursionDeleteDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/recursion-aggregations`,
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
   * @tags Security
   * @name RecursionAggregationsEffectRangeUpdate
   * @summary 修改递归聚合的生效范围（批量）
   * @request PUT:/secure/recursion-aggregations/effect-range
   * @secure
   */
  recursionAggregationsEffectRangeUpdate = (
    req: ModelSecurityRecursionUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/recursion-aggregations/effect-range`,
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
   * @tags Security
   * @name RecursionAggregationsUpdate
   * @summary 递归聚合修改
   * @request PUT:/secure/recursion-aggregations/{id}
   * @secure
   */
  recursionAggregationsUpdate = (
    id: number,
    req: ModelSecurityRecursionUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/recursion-aggregations/${id}`,
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
   * @tags Security
   * @name GetSecure
   * @summary dns防火墙列表
   * @request GET:/secure/rpz
   * @secure
   */
  getSecure = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelRpzQueryVO, any>({
      path: `/secure/rpz`,
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
   * @tags Security
   * @name PostSecure
   * @summary dns防火墙新增
   * @request POST:/secure/rpz
   * @secure
   */
  postSecure = (req: ModelRpzCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/rpz`,
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
   * @tags Security
   * @name DeleteSecure
   * @summary dns防火墙删除
   * @request DELETE:/secure/rpz
   * @secure
   */
  deleteSecure = (req: ModelRpzDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/rpz`,
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
   * @tags Security
   * @name RpzEffectRangeUpdate
   * @summary 修改rpz的生效范围（批量）
   * @request PUT:/secure/rpz/effect-range
   * @secure
   */
  rpzEffectRangeUpdate = (req: ModelRpzUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/rpz/effect-range`,
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
   * @tags Security
   * @name PutSecure
   * @summary dns防火墙修改
   * @request PUT:/secure/rpz/{id}
   * @secure
   */
  putSecure = (id: number, req: ModelRpzUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/rpz/${id}`,
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
   * @tags Security
   * @name ThreatintelList
   * @summary 威胁情报查询
   * @request GET:/secure/threatintel
   * @secure
   */
  threatintelList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelSecurityThreatintelQueryVO, any>({
      path: `/secure/threatintel`,
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
   * @tags Security
   * @name ThreatintelCreate
   * @summary 威胁情报新增
   * @request POST:/secure/threatintel
   * @secure
   */
  threatintelCreate = (req: ModelSecurityThreatintelCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/threatintel`,
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
   * @tags Security
   * @name ThreatintelDelete
   * @summary 威胁情报删除
   * @request DELETE:/secure/threatintel
   * @secure
   */
  threatintelDelete = (req: ModelSecurityThreatintelDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/threatintel`,
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
   * @tags Security
   * @name ThreatintelEffectRangeUpdate
   * @summary 威胁情报修改生效范围
   * @request PUT:/secure/threatintel/effect-range
   * @secure
   */
  threatintelEffectRangeUpdate = (
    req: ModelSecurityThreatintelUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/threatintel/effect-range`,
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
   * @tags Security
   * @name ThreatintelUpdate
   * @summary 威胁情报修改
   * @request PUT:/secure/threatintel/{id}
   * @secure
   */
  threatintelUpdate = (
    id: number,
    req: ModelSecurityThreatintelUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/threatintel/${id}`,
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
   * @tags SecurityTunnel
   * @name TunnelList
   * @summary 隧道攻击防护查询
   * @request GET:/secure/tunnel
   * @secure
   */
  tunnelList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelSecurityTunnelQueryVO, any>({
      path: `/secure/tunnel`,
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
   * @tags SecurityTunnel
   * @name TunnelCreate
   * @summary 隧道攻击防护新增
   * @request POST:/secure/tunnel
   * @secure
   */
  tunnelCreate = (req: ModelSecurityTunnelCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/tunnel`,
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
   * @tags SecurityTunnel
   * @name TunnelDelete
   * @summary 隧道攻击防护删除
   * @request DELETE:/secure/tunnel
   * @secure
   */
  tunnelDelete = (req: ModelSecurityTunnelDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/tunnel`,
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
   * @tags SecurityTunnel
   * @name TunnelEffectRangeUpdate
   * @summary 隧道攻击防护修改生效范围
   * @request PUT:/secure/tunnel/effect-range
   * @secure
   */
  tunnelEffectRangeUpdate = (req: ModelSecurityTunnelUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/tunnel/effect-range`,
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
   * @tags SecurityTunnel
   * @name TunnelUpdate
   * @summary 隧道攻击防护修改
   * @request PUT:/secure/tunnel/{id}
   * @secure
   */
  tunnelUpdate = (id: number, req: ModelSecurityTunnelUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/tunnel/${id}`,
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
   * @tags SecurityXforce
   * @name XforceList
   * @summary 强制解析查询
   * @request GET:/secure/xforce
   * @secure
   */
  xforceList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelSecurityXforceQueryVO, any>({
      path: `/secure/xforce`,
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
   * @tags SecurityXforce
   * @name XforceCreate
   * @summary 强制解析新增
   * @request POST:/secure/xforce
   * @secure
   */
  xforceCreate = (req: ModelSecurityXforceCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/xforce`,
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
   * @tags SecurityXforce
   * @name XforceDelete
   * @summary 强制解析删除
   * @request DELETE:/secure/xforce
   * @secure
   */
  xforceDelete = (req: ModelSecurityXforceDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/xforce`,
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
   * @tags SecurityXforce
   * @name XforceEffectRangeUpdate
   * @summary 强制解析修改生效范围
   * @request PUT:/secure/xforce/effect-range
   * @secure
   */
  xforceEffectRangeUpdate = (req: ModelSecurityXforceUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/xforce/effect-range`,
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
   * @tags SecurityXforce
   * @name XforceExportCreate
   * @summary 强制解析导出
   * @request POST:/secure/xforce/export
   * @secure
   */
  xforceExportCreate = (req: ModelSecurityXforceExportDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelSecurityXforceExportVO, any>({
      path: `/secure/xforce/export`,
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
   * @tags SecurityXforce
   * @name XforceImportCreate
   * @summary 强制解析导入
   * @request POST:/secure/xforce/import
   * @secure
   */
  xforceImportCreate = (
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
      path: `/secure/xforce/import`,
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
   * @tags SecurityXforce
   * @name XforceUpdate
   * @summary 强制解析修改
   * @request PUT:/secure/xforce/{id}
   * @secure
   */
  xforceUpdate = (id: number, req: ModelSecurityXforceUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/secure/xforce/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
