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
  EffectrangeEffectRangeUpdateDTO,
  ModelIntelligentCacheCreateDTO,
  ModelIntelligentCacheDeleteDTO,
  ModelIntelligentCacheUpdateDTO,
  ModelRecursionCacheTtlCreateDTO,
  ModelRecursionCacheTtlDeleteDTO,
  ModelRecursionCacheTtlExportDTO,
  ModelRecursionCacheTtlUpdateDTO,
  ModelRecursionCacheTtlUpdateEffectDTO,
  ModelRecursionForwardDomainCreateDTO,
  ModelRecursionForwardDomainDeleteDTO,
  ModelRecursionForwardDomainEffectRangeUpdateDTO,
  ModelRecursionForwardDomainExportDTO,
  ModelRecursionForwardDomainUpdateDTO,
  ModelRecursionForwardExceptCreateDTO,
  ModelRecursionForwardExceptDeleteDTO,
  ModelRecursionForwardExceptUpdateDTO,
  ModelRecursionForwardExceptffectRangeUpdateDTO,
  ModelRecursionForwardGlobalCreateDTO,
  ModelRecursionForwardGlobalDeleteDTO,
  ModelRecursionForwardGlobalRangeUpdateDTO,
  ModelRecursionForwardGlobalUpdateDTO,
  ModelRecursionForwardServerGroupCreateDTO,
  ModelRecursionForwardServerGroupDeleteDTO,
  ModelRecursionForwardServerGroupUpdateDTO,
  ModelRecursionPrefetchCreateDTO,
  ModelRecursionPrefetchDeleteDTO,
  ModelRecursionPrefetchTTLUpdateDTO,
  ModelRecursionPrefetchUpdateDTO,
  ModelRecursionPrefetchUpdateEffectRange,
  ModelRecursionQuerySourceCreateDTO,
  ModelRecursionQuerySourceDeleteDTO,
  ModelRecursionQuerySourceMonitorSettingUpdateDTO,
  ModelRecursionQuerySourceUpdateDTO,
  ModelRecursionRootHintDeleteDTO,
  ModelRecursionRootHintUpdateDTO,
  ModelRecursionRootHintUpdateEffectDTO,
  ModelRecursionSortListCreateDTO,
  ModelRecursionSortListDeleteDTO,
  ModelRecursionSortListEffectRangeUpdateDTO,
  ModelRecursionSortListUpdateDTO,
  ModelRecursionStubZoneCreateDTO,
  ModelRecursionStubZoneDeleteDTO,
  ModelRecursionStubZoneUpdateDTO,
  ModelRecursionStubZoneUpdateEffectDTO,
  StructsRecursionForwardServerGroupMonitorSetting,
  UtilsDataResponseStructsRecursionForwardServerGroupMonitorSetting,
  UtilsDataResponseStructsRecursionPrefetchTTL,
  UtilsDataResponseStructsRecursionQuerySourceMonitor,
  UtilsDataResponseUtilsPageDataModelRecursionCacheTtlQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionForwardDomainQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionForwardExceptQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionForwardGlobalQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionForwardServerGroupQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionPrefetchQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionQuerySourceQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionRootHintQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionSortListQueryVO,
  UtilsDataResponseUtilsPageDataModelRecursionStubZoneQueryVO,
  UtilsEmptyResponse,
  UtilsPageDataModelIntelligentCacheQueryVO,
  UtilsPageDataModelRecursionForwardDomainExportVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Recursion<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Recursion
   * @name CacheIntelligentList
   * @summary 查询智能缓存
   * @request GET:/recursion/cache-intelligent
   * @secure
   */
  cacheIntelligentList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelIntelligentCacheQueryVO, any>({
      path: `/recursion/cache-intelligent`,
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
   * @tags Recursion
   * @name CacheIntelligentCreate
   * @summary 创建智能缓存
   * @request POST:/recursion/cache-intelligent
   * @secure
   */
  cacheIntelligentCreate = (req: ModelIntelligentCacheCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-intelligent`,
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
   * @name CacheIntelligentDelete
   * @summary 删除智能缓存（批量）
   * @request DELETE:/recursion/cache-intelligent
   * @secure
   */
  cacheIntelligentDelete = (req: ModelIntelligentCacheDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-intelligent`,
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
   * @name CacheIntelligentEffectRangeUpdate
   * @summary 修改智能缓存的生效范围（批量）
   * @request PUT:/recursion/cache-intelligent/effect-range
   * @secure
   */
  cacheIntelligentEffectRangeUpdate = (
    req: EffectrangeEffectRangeUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-intelligent/effect-range`,
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
   * @tags Recursion
   * @name CacheIntelligentUpdate
   * @summary 修改智能缓存
   * @request PUT:/recursion/cache-intelligent/{id}
   * @secure
   */
  cacheIntelligentUpdate = (
    id: number,
    req: ModelIntelligentCacheUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-intelligent/${id}`,
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
   * @tags Recursion
   * @name CacheTtlList
   * @summary 缓存TTL查询
   * @request GET:/recursion/cache-ttl
   * @secure
   */
  cacheTtlList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionCacheTtlQueryVO, any>({
      path: `/recursion/cache-ttl`,
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
   * @tags Recursion
   * @name CacheTtlCreate
   * @summary 缓存TTL新增
   * @request POST:/recursion/cache-ttl
   * @secure
   */
  cacheTtlCreate = (req: ModelRecursionCacheTtlCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-ttl`,
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
   * @name CacheTtlDelete
   * @summary 缓存TTL删除
   * @request DELETE:/recursion/cache-ttl
   * @secure
   */
  cacheTtlDelete = (req: ModelRecursionCacheTtlDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-ttl`,
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
   * @name CacheTtlEffectRangeUpdate
   * @summary 缓存TTL修改生效范围
   * @request PUT:/recursion/cache-ttl/effect-range
   * @secure
   */
  cacheTtlEffectRangeUpdate = (
    req: ModelRecursionCacheTtlUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-ttl/effect-range`,
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
   * @tags Recursion
   * @name CacheTtlExportCreate
   * @summary 缓存ttl导出查询
   * @request POST:/recursion/cache-ttl/export
   * @secure
   */
  cacheTtlExportCreate = (req: ModelRecursionCacheTtlExportDTO, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/recursion/cache-ttl/export`,
      method: 'POST',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Recursion
   * @name CacheTtlImportCreate
   * @summary 缓存ttl导入
   * @request POST:/recursion/cache-ttl/import
   * @secure
   */
  cacheTtlImportCreate = (
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
      path: `/recursion/cache-ttl/import`,
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
   * @tags Recursion
   * @name CacheTtlUpdate
   * @summary 缓存TTL修改
   * @request PUT:/recursion/cache-ttl/{id}
   * @secure
   */
  cacheTtlUpdate = (id: number, req: ModelRecursionCacheTtlUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/cache-ttl/${id}`,
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
   * @tags Recursion
   * @name ForwardDomainList
   * @summary 递归转发域查询
   * @request GET:/recursion/forward-domain
   * @secure
   */
  forwardDomainList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionForwardDomainQueryVO, any>({
      path: `/recursion/forward-domain`,
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
   * @tags Recursion
   * @name ForwardDomainCreate
   * @summary 递归转发域新增
   * @request POST:/recursion/forward-domain
   * @secure
   */
  forwardDomainCreate = (req: ModelRecursionForwardDomainCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-domain`,
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
   * @name ForwardDomainDelete
   * @summary 递归转发域删除
   * @request DELETE:/recursion/forward-domain
   * @secure
   */
  forwardDomainDelete = (req: ModelRecursionForwardDomainDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-domain`,
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
   * @name ForwardDomainEffectRangeUpdate
   * @summary 递归转发域修改生效范围
   * @request PUT:/recursion/forward-domain/effect-range
   * @secure
   */
  forwardDomainEffectRangeUpdate = (
    req: ModelRecursionForwardDomainEffectRangeUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-domain/effect-range`,
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
   * @tags Recursion
   * @name ForwardDomainExportCreate
   * @summary 转发区导出
   * @request POST:/recursion/forward-domain/export
   * @secure
   */
  forwardDomainExportCreate = (
    req: ModelRecursionForwardDomainExportDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelRecursionForwardDomainExportVO, any>({
      path: `/recursion/forward-domain/export`,
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
   * @name ForwardDomainImportCreate
   * @summary 转发区导入
   * @request POST:/recursion/forward-domain/import
   * @secure
   */
  forwardDomainImportCreate = (
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
      path: `/recursion/forward-domain/import`,
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
   * @tags Recursion
   * @name ForwardDomainUpdate
   * @summary 递归转发域修改
   * @request PUT:/recursion/forward-domain/{id}
   * @secure
   */
  forwardDomainUpdate = (
    id: number,
    req: ModelRecursionForwardDomainUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-domain/${id}`,
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
   * @tags Recursion
   * @name ForwardExceptList
   * @summary 递归转发例外查询
   * @request GET:/recursion/forward-except
   * @secure
   */
  forwardExceptList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionForwardExceptQueryVO, any>({
      path: `/recursion/forward-except`,
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
   * @tags Recursion
   * @name ForwardExceptCreate
   * @summary 递归转发例外新增
   * @request POST:/recursion/forward-except
   * @secure
   */
  forwardExceptCreate = (req: ModelRecursionForwardExceptCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-except`,
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
   * @name ForwardExceptDelete
   * @summary 递归转发例外删除
   * @request DELETE:/recursion/forward-except
   * @secure
   */
  forwardExceptDelete = (req: ModelRecursionForwardExceptDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-except`,
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
   * @name ForwardExceptEffectRangeUpdate
   * @summary 递归转发例外修改生效范围
   * @request PUT:/recursion/forward-except/effect-range
   * @secure
   */
  forwardExceptEffectRangeUpdate = (
    req: ModelRecursionForwardExceptffectRangeUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-except/effect-range`,
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
   * @tags Recursion
   * @name ForwardExceptUpdate
   * @summary 递归转发例外修改
   * @request PUT:/recursion/forward-except/{id}
   * @secure
   */
  forwardExceptUpdate = (
    id: number,
    req: ModelRecursionForwardExceptUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-except/${id}`,
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
   * @tags Recursion
   * @name ForwardGlobalList
   * @summary 递归全局转发查询
   * @request GET:/recursion/forward-global
   * @secure
   */
  forwardGlobalList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionForwardGlobalQueryVO, any>({
      path: `/recursion/forward-global`,
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
   * @tags Recursion
   * @name ForwardGlobalCreate
   * @summary 递归全局转发新增
   * @request POST:/recursion/forward-global
   * @secure
   */
  forwardGlobalCreate = (req: ModelRecursionForwardGlobalCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-global`,
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
   * @name ForwardGlobalDelete
   * @summary 递归全局转发删除
   * @request DELETE:/recursion/forward-global
   * @secure
   */
  forwardGlobalDelete = (req: ModelRecursionForwardGlobalDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-global`,
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
   * @name ForwardGlobalEffectRangeUpdate
   * @summary 递归全局转发修改生效范围
   * @request PUT:/recursion/forward-global/effect-range
   * @secure
   */
  forwardGlobalEffectRangeUpdate = (
    req: ModelRecursionForwardGlobalRangeUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-global/effect-range`,
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
   * @tags Recursion
   * @name ForwardGlobalUpdate
   * @summary 递归全局转发修改
   * @request PUT:/recursion/forward-global/{id}
   * @secure
   */
  forwardGlobalUpdate = (
    id: number,
    req: ModelRecursionForwardGlobalUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-global/${id}`,
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
   * @tags Recursion
   * @name ForwardServerGroupList
   * @summary 递归转发服务器查询
   * @request GET:/recursion/forward-server-group
   * @secure
   */
  forwardServerGroupList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionForwardServerGroupQueryVO, any>({
      path: `/recursion/forward-server-group`,
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
   * @tags Recursion
   * @name ForwardServerGroupCreate
   * @summary 递归转发服务器新增
   * @request POST:/recursion/forward-server-group
   * @secure
   */
  forwardServerGroupCreate = (
    req: ModelRecursionForwardServerGroupCreateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-server-group`,
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
   * @name ForwardServerGroupDelete
   * @summary 递归转发服务器删除
   * @request DELETE:/recursion/forward-server-group
   * @secure
   */
  forwardServerGroupDelete = (
    req: ModelRecursionForwardServerGroupDeleteDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-server-group`,
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
   * @tags Resource
   * @name ForwardServerGroupMonitorSettingList
   * @summary 递归转发检测设置获取
   * @request GET:/recursion/forward-server-group/monitor-setting
   * @secure
   */
  forwardServerGroupMonitorSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsRecursionForwardServerGroupMonitorSetting, any>({
      path: `/recursion/forward-server-group/monitor-setting`,
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
   * @name ForwardServerGroupMonitorSettingUpdate
   * @summary 递归转发检测设置修改
   * @request PUT:/recursion/forward-server-group/monitor-setting
   * @secure
   */
  forwardServerGroupMonitorSettingUpdate = (
    req: StructsRecursionForwardServerGroupMonitorSetting,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-server-group/monitor-setting`,
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
   * @tags Recursion
   * @name ForwardServerGroupUpdate
   * @summary 递归转发服务器修改
   * @request PUT:/recursion/forward-server-group/{id}
   * @secure
   */
  forwardServerGroupUpdate = (
    id: number,
    req: ModelRecursionForwardServerGroupUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/forward-server-group/${id}`,
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
   * @tags Recursion
   * @name PrefetchList
   * @summary 缓存预取查询-新
   * @request GET:/recursion/prefetch
   * @secure
   */
  prefetchList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionPrefetchQueryVO, any>({
      path: `/recursion/prefetch`,
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
   * @tags Recursion
   * @name PrefetchCreate
   * @summary 缓存预取新增-新
   * @request POST:/recursion/prefetch
   * @secure
   */
  prefetchCreate = (req: ModelRecursionPrefetchCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/prefetch`,
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
   * @name PrefetchDelete
   * @summary 缓存预取删除-新
   * @request DELETE:/recursion/prefetch
   * @secure
   */
  prefetchDelete = (req: ModelRecursionPrefetchDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/prefetch`,
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
   * @name PrefetchEffectRangeUpdate
   * @summary 缓存预取修改生效范围-新
   * @request PUT:/recursion/prefetch/effect-range
   * @secure
   */
  prefetchEffectRangeUpdate = (
    req: ModelRecursionPrefetchUpdateEffectRange,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/prefetch/effect-range`,
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
   * @tags Recursion
   * @name PrefetchTtlList
   * @summary 获取缓存预取TTL
   * @request GET:/recursion/prefetch/ttl
   * @secure
   */
  prefetchTtlList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsRecursionPrefetchTTL, any>({
      path: `/recursion/prefetch/ttl`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Recursion
   * @name PrefetchTtlUpdate
   * @summary 修改缓存预取TTL
   * @request PUT:/recursion/prefetch/ttl
   * @secure
   */
  prefetchTtlUpdate = (req: ModelRecursionPrefetchTTLUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/prefetch/ttl`,
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
   * @tags Recursion
   * @name PrefetchUpdate
   * @summary 缓存预取修改-新
   * @request PUT:/recursion/prefetch/{id}
   * @secure
   */
  prefetchUpdate = (id: number, req: ModelRecursionPrefetchUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/prefetch/${id}`,
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
   * @tags Recursion
   * @name QuerySourceList
   * @summary 递归源地址查询
   * @request GET:/recursion/query-source
   * @secure
   */
  querySourceList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionQuerySourceQueryVO, any>({
      path: `/recursion/query-source`,
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
   * @tags Recursion
   * @name QuerySourceCreate
   * @summary 递归源地址新增
   * @request POST:/recursion/query-source
   * @secure
   */
  querySourceCreate = (req: ModelRecursionQuerySourceCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/query-source`,
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
   * @name QuerySourceDelete
   * @summary 递归源地址删除
   * @request DELETE:/recursion/query-source
   * @secure
   */
  querySourceDelete = (req: ModelRecursionQuerySourceDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/query-source`,
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
   * @name QuerySourceMonitorSettingList
   * @summary 递归源地址监测设置获取
   * @request GET:/recursion/query-source/monitor-setting
   * @secure
   */
  querySourceMonitorSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsRecursionQuerySourceMonitor, any>({
      path: `/recursion/query-source/monitor-setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Recursion
   * @name QuerySourceMonitorSettingUpdate
   * @summary 递归源地址监测设置修改
   * @request PUT:/recursion/query-source/monitor-setting
   * @secure
   */
  querySourceMonitorSettingUpdate = (
    req: ModelRecursionQuerySourceMonitorSettingUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/query-source/monitor-setting`,
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
   * @tags Recursion
   * @name QuerySourceUpdate
   * @summary 递归源地址修改
   * @request PUT:/recursion/query-source/{id}
   * @secure
   */
  querySourceUpdate = (
    id: number,
    req: ModelRecursionQuerySourceUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/query-source/${id}`,
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
   * @tags Recursion
   * @name RootHintList
   * @summary 根配置查询
   * @request GET:/recursion/root-hint
   * @secure
   */
  rootHintList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionRootHintQueryVO, any>({
      path: `/recursion/root-hint`,
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
   * @tags Recursion
   * @name RootHintCreate
   * @summary 根配置新增
   * @request POST:/recursion/root-hint
   * @secure
   */
  rootHintCreate = (
    query: {
      /** @maxItems 20 */
      cidr: string[]
      enabled?: boolean
      /** @maxLength 255 */
      remark?: string
      viewID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/root-hint`,
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
   * @tags Recursion
   * @name RootHintDelete
   * @summary 根配置删除
   * @request DELETE:/recursion/root-hint
   * @secure
   */
  rootHintDelete = (req: ModelRecursionRootHintDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/root-hint`,
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
   * @name RootHintEffectRangeUpdate
   * @summary 根配置修改生效范围
   * @request PUT:/recursion/root-hint/effect-range
   * @secure
   */
  rootHintEffectRangeUpdate = (
    req: ModelRecursionRootHintUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/root-hint/effect-range`,
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
   * @tags Recursion
   * @name RootHintUpdate
   * @summary 根配置修改
   * @request PUT:/recursion/root-hint/{id}
   * @secure
   */
  rootHintUpdate = (id: number, req: ModelRecursionRootHintUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/root-hint/${id}`,
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
   * @tags Recursion
   * @name SortListList
   * @summary 智能优选查询
   * @request GET:/recursion/sort-list
   * @secure
   */
  sortListList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionSortListQueryVO, any>({
      path: `/recursion/sort-list`,
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
   * @tags Recursion
   * @name SortListCreate
   * @summary 智能优选新增
   * @request POST:/recursion/sort-list
   * @secure
   */
  sortListCreate = (req: ModelRecursionSortListCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/sort-list`,
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
   * @name SortListDelete
   * @summary 智能优选删除
   * @request DELETE:/recursion/sort-list
   * @secure
   */
  sortListDelete = (req: ModelRecursionSortListDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/sort-list`,
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
   * @name SortListEffectRangeUpdate
   * @summary 智能优选修改生效范围
   * @request PUT:/recursion/sort-list/effect-range
   * @secure
   */
  sortListEffectRangeUpdate = (
    req: ModelRecursionSortListEffectRangeUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/sort-list/effect-range`,
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
   * @tags Recursion
   * @name SortListUpdate
   * @summary 智能优选修改
   * @request PUT:/recursion/sort-list/{id}
   * @secure
   */
  sortListUpdate = (id: number, req: ModelRecursionSortListUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/sort-list/${id}`,
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
   * @tags Recursion
   * @name StubZoneList
   * @summary 存根配置查询
   * @request GET:/recursion/stub-zone
   * @secure
   */
  stubZoneList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelRecursionStubZoneQueryVO, any>({
      path: `/recursion/stub-zone`,
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
   * @tags Recursion
   * @name StubZoneCreate
   * @summary 存根配置新增
   * @request POST:/recursion/stub-zone
   * @secure
   */
  stubZoneCreate = (req: ModelRecursionStubZoneCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/stub-zone`,
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
   * @name StubZoneDelete
   * @summary 存根配置删除
   * @request DELETE:/recursion/stub-zone
   * @secure
   */
  stubZoneDelete = (req: ModelRecursionStubZoneDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/stub-zone`,
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
   * @name StubZoneEffectRangeUpdate
   * @summary 存根配置修改生效范围
   * @request PUT:/recursion/stub-zone/effect-range
   * @secure
   */
  stubZoneEffectRangeUpdate = (
    req: ModelRecursionStubZoneUpdateEffectDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/stub-zone/effect-range`,
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
   * @tags Recursion
   * @name StubZoneUpdate
   * @summary 存根配置修改
   * @request PUT:/recursion/stub-zone/{id}
   * @secure
   */
  stubZoneUpdate = (id: number, req: ModelRecursionStubZoneUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/recursion/stub-zone/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
