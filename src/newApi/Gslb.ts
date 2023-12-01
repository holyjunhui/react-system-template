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
  ModelEnableDTO,
  ModelGslbDatacenterCreateDTO,
  ModelGslbDatacenterDeleteDTO,
  ModelGslbDatacenterExporterDTO,
  ModelGslbDatacenterInfoDTO,
  ModelGslbDatacenterUpdateDTO,
  ModelGslbGraphVO,
  ModelGslbLinkCreateDTO,
  ModelGslbLinkDeleteDTO,
  ModelGslbLinkUpdateDTO,
  ModelGslbPoolCreateDTO,
  ModelGslbPoolDeleteDTO,
  ModelGslbPoolGraphUpdateDTOSwagger,
  ModelGslbPoolInfoDTO,
  ModelGslbPoolUpdateDTO,
  ModelGslbProberCreateDTO,
  ModelGslbProberDeleteDTO,
  ModelGslbProberPoolCreateDTO,
  ModelGslbProberPoolDeleteDTO,
  ModelGslbProberPoolExportDTO,
  ModelGslbProberPoolImportDTO,
  ModelGslbProberPoolInfoDTO,
  ModelGslbProberPoolUpdateDTO,
  ModelGslbProberSettingSetDTO,
  ModelGslbProberUpdateDTO,
  ModelGslbServerCreateDTO,
  ModelGslbServerDeleteDTO,
  ModelGslbServerInfoDTO,
  ModelGslbServerUpdateDTO,
  ModelGslbServiceCreateDTO,
  ModelGslbServiceDeleteDTO,
  ModelGslbServiceGraphUpdateDTO,
  ModelGslbServiceInfoDTO,
  ModelGslbServiceUpdateDTO,
  ModelGslbSoaSettingSetDTO,
  ModelGslbThirdSyncCreateDTO,
  ModelGslbThirdSyncDeleteDTO,
  ModelGslbThirdSyncEnableDTO,
  ModelGslbThirdSyncExecuteDTO,
  ModelGslbThirdSyncJob,
  ModelGslbThirdSyncUpdateDTO,
  ModelGslbTopologyCreateDTO,
  ModelGslbTopologyDeleteDTO,
  ModelGslbTopologyExportDTO,
  ModelGslbTopologyGroupCreateCommon,
  ModelGslbTopologyGroupDeleteDTO,
  ModelGslbTopologyImportDTO,
  ModelGslbTopologyRegionCreateDTO,
  ModelGslbTopologyRegionDeleteDTO,
  ModelGslbTopologyRegionUpdateDTO,
  ModelGslbTopologySaveOrderDTO,
  ModelGslbTopologySetOrderDTO,
  ModelGslbTopologyUpdateDTO,
  ModelGslbWideIPCreateDTO,
  ModelGslbWideIPDeleteDTO,
  ModelGslbWideIPExportDTO,
  ModelGslbWideIPGraphUpdateDTOSwagger,
  ModelGslbWideIPInfoDTO,
  ModelGslbWideIPUpdateDTO,
  ModelMonitorCreateDTO,
  ModelMonitorDeleteDTO,
  ModelMonitorExportDTO,
  ModelMonitorImportDTO,
  ModelMonitorUpdateDTO,
  UtilsDataResponseArrayModelGslbProberPoolMemberQueryVO,
  UtilsDataResponseModelGslbDatacenterInfoVO,
  UtilsDataResponseModelGslbPoolInfoVO,
  UtilsDataResponseModelGslbProberPoolInfoVO,
  UtilsDataResponseModelGslbServerInfoVO,
  UtilsDataResponseModelGslbServiceInfoVO,
  UtilsDataResponseModelGslbWideIPInfoVO,
  UtilsDataResponseStructsGslbProberSetting,
  UtilsDataResponseStructsGslbSoaSetting,
  UtilsDataResponseUtilsPageDataModelGslbDatacenterQueryVO,
  UtilsDataResponseUtilsPageDataModelGslbLinkQueryVO,
  UtilsDataResponseUtilsPageDataModelGslbProberPoolQueryVO,
  UtilsDataResponseUtilsPageDataModelGslbProberQueryVO,
  UtilsDataResponseUtilsPageDataModelGslbTopologyQueryVO,
  UtilsDataResponseUtilsPageDataModelGslbTopologyRegionQueryVO,
  UtilsDataResponseUtilsPageDataModelGslbWideIPQueryVO,
  UtilsDataResponseUtilsPageDataModelMonitorQueryVO,
  UtilsEmptyResponse,
  UtilsPageDataModelGslbPoolQueryVO,
  UtilsPageDataModelGslbServerQueryVO,
  UtilsPageDataModelGslbServiceQueryVO,
  UtilsPageDataModelGslbThirdSyncVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Gslb<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Gslb
   * @name DatacenterList
   * @summary 数据中心查询
   * @request GET:/gslb/datacenter
   * @secure
   */
  datacenterList = (
    query: {
      groupID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelGslbDatacenterQueryVO, any>({
      path: `/gslb/datacenter`,
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
   * @tags Gslb
   * @name DatacenterCreate
   * @summary 数据中心新增
   * @request POST:/gslb/datacenter
   * @secure
   */
  datacenterCreate = (req: ModelGslbDatacenterCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/datacenter`,
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
   * @tags Gslb
   * @name DatacenterDelete
   * @summary 数据中心删除
   * @request DELETE:/gslb/datacenter
   * @secure
   */
  datacenterDelete = (req: ModelGslbDatacenterDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/datacenter`,
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
   * @tags Gslb
   * @name DatacenterIdList
   * @summary 数据中心详情
   * @request GET:/gslb/datacenter/:id
   * @secure
   */
  datacenterIdList = (id: string, req: ModelGslbDatacenterInfoDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelGslbDatacenterInfoVO, any>({
      path: `/gslb/datacenter/${id}`,
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
   * @tags Gslb
   * @name DatacenterEnableUpdate
   * @summary 数据中心启用/禁用
   * @request PUT:/gslb/datacenter/enable
   * @secure
   */
  datacenterEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/datacenter/enable`,
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
   * @tags Gslb
   * @name DatacenterExportCreate
   * @summary 数据中心导出
   * @request POST:/gslb/datacenter/export
   * @secure
   */
  datacenterExportCreate = (req: ModelGslbDatacenterExporterDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/datacenter/export`,
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
   * @tags Gslb
   * @name DatacenterImportCreate
   * @summary 数据中心导入
   * @request POST:/gslb/datacenter/import
   * @secure
   */
  datacenterImportCreate = (
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
      path: `/gslb/datacenter/import`,
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
   * @tags Gslb
   * @name DatacenterUpdate
   * @summary 数据中心修改
   * @request PUT:/gslb/datacenter/{id}
   * @secure
   */
  datacenterUpdate = (id: number, req: ModelGslbDatacenterUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/datacenter/${id}`,
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
   * @tags GslbGraph
   * @name GraphPoolIdList
   * @summary 资源池预览图查询
   * @request GET:/gslb/graph/pool/:id
   * @secure
   */
  graphPoolIdList = (id: string, params: RequestParams = {}) =>
    this.request<ModelGslbGraphVO, any>({
      path: `/gslb/graph/pool/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags GslbGraph
   * @name GraphPoolIdUpdate
   * @summary 资源池预览图编辑
   * @request PUT:/gslb/graph/pool/:id
   * @secure
   */
  graphPoolIdUpdate = (
    id: number,
    req: ModelGslbPoolGraphUpdateDTOSwagger,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/graph/pool/${id}`,
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
   * @tags GslbGraph
   * @name GraphServiceIdList
   * @summary 服务预览图查询
   * @request GET:/gslb/graph/service/:id
   * @secure
   */
  graphServiceIdList = (id: string, params: RequestParams = {}) =>
    this.request<ModelGslbGraphVO, any>({
      path: `/gslb/graph/service/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags GslbGraph
   * @name GraphServiceIdUpdate
   * @summary 服务预览图编辑
   * @request PUT:/gslb/graph/service/:id
   * @secure
   */
  graphServiceIdUpdate = (
    id: number,
    req: ModelGslbServiceGraphUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/graph/service/${id}`,
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
   * @tags GslbGraph
   * @name GraphWideIpIdList
   * @summary 域名预览图查询
   * @request GET:/gslb/graph/wide-ip/:id
   * @secure
   */
  graphWideIpIdList = (id: string, params: RequestParams = {}) =>
    this.request<ModelGslbGraphVO, any>({
      path: `/gslb/graph/wide-ip/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags GslbGraph
   * @name GraphWideIpIdUpdate
   * @summary 域名预览图编辑
   * @request PUT:/gslb/graph/wide-ip/:id
   * @secure
   */
  graphWideIpIdUpdate = (
    id: number,
    req: ModelGslbWideIPGraphUpdateDTOSwagger,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/graph/wide-ip/${id}`,
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
   * @tags Gslb
   * @name HealthMonitorList
   * @summary 健康监测查询
   * @request GET:/gslb/health-monitor
   * @secure
   */
  healthMonitorList = (
    query: {
      groupID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      protocols?: string[]
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelMonitorQueryVO, any>({
      path: `/gslb/health-monitor`,
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
   * @tags Gslb
   * @name HealthMonitorCreate
   * @summary 健康监测新增
   * @request POST:/gslb/health-monitor
   * @secure
   */
  healthMonitorCreate = (req: ModelMonitorCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/health-monitor`,
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
   * @tags Gslb
   * @name HealthMonitorDelete
   * @summary 健康监测删除
   * @request DELETE:/gslb/health-monitor
   * @secure
   */
  healthMonitorDelete = (req: ModelMonitorDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/health-monitor`,
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
   * @tags Gslb
   * @name HealthMonitorExportCreate
   * @summary 健康监测导出
   * @request POST:/gslb/health-monitor/export
   * @secure
   */
  healthMonitorExportCreate = (req: ModelMonitorExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/health-monitor/export`,
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
   * @tags Gslb
   * @name HealthMonitorImportCreate
   * @summary 健康监测导入
   * @request POST:/gslb/health-monitor/import
   * @secure
   */
  healthMonitorImportCreate = (req: ModelMonitorImportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/health-monitor/import`,
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
   * @tags Gslb
   * @name HealthMonitorUpdate
   * @summary 健康监测修改
   * @request PUT:/gslb/health-monitor/{id}
   * @secure
   */
  healthMonitorUpdate = (id: number, req: ModelMonitorUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/health-monitor/${id}`,
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
   * @tags Gslb
   * @name LinkList
   * @summary 链路查询
   * @request GET:/gslb/link
   * @secure
   */
  linkList = (
    query: {
      datacenterID: number
      groupID?: number
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelGslbLinkQueryVO, any>({
      path: `/gslb/link`,
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
   * @tags Gslb
   * @name LinkCreate
   * @summary 链路新增
   * @request POST:/gslb/link
   * @secure
   */
  linkCreate = (req: ModelGslbLinkCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/link`,
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
   * @tags Gslb
   * @name LinkDelete
   * @summary 链路删除
   * @request DELETE:/gslb/link
   * @secure
   */
  linkDelete = (req: ModelGslbLinkDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/link`,
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
   * @tags Gslb
   * @name LinkEnableUpdate
   * @summary 链路启用/禁用
   * @request PUT:/gslb/link/enable
   * @secure
   */
  linkEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/link/enable`,
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
   * @tags Gslb
   * @name LinkUpdate
   * @summary 链路修改
   * @request PUT:/gslb/link/{id}
   * @secure
   */
  linkUpdate = (id: number, req: ModelGslbLinkUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/link/${id}`,
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
   * @tags Gslb
   * @name PoolList
   * @summary 资源池查询
   * @request GET:/gslb/pool
   * @secure
   */
  poolList = (
    query: {
      groupID?: number
      ids?: number[]
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      wideIPID?: number
      wideIPQtype?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelGslbPoolQueryVO, any>({
      path: `/gslb/pool`,
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
   * @tags Gslb
   * @name PoolCreate
   * @summary 资源池新增
   * @request POST:/gslb/pool
   * @secure
   */
  poolCreate = (req: ModelGslbPoolCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/pool`,
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
   * @tags Gslb
   * @name PoolDelete
   * @summary 资源池删除（批量）
   * @request DELETE:/gslb/pool
   * @secure
   */
  poolDelete = (req: ModelGslbPoolDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/pool`,
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
   * @tags Gslb
   * @name PoolIdList
   * @summary 资源池详情
   * @request GET:/gslb/pool/:id
   * @secure
   */
  poolIdList = (id: string, req: ModelGslbPoolInfoDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelGslbPoolInfoVO, any>({
      path: `/gslb/pool/${id}`,
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
   * @tags Gslb
   * @name PoolEnableUpdate
   * @summary 资源池启用/禁用
   * @request PUT:/gslb/pool/enable
   * @secure
   */
  poolEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/pool/enable`,
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
   * @tags Gslb
   * @name PoolUpdate
   * @summary 资源池修改
   * @request PUT:/gslb/pool/{id}
   * @secure
   */
  poolUpdate = (id: number, req: ModelGslbPoolUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/pool/${id}`,
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
   * @tags Gslb
   * @name ProberList
   * @summary 拨测点查询
   * @request GET:/gslb/prober
   * @secure
   */
  proberList = (
    query: {
      datacenterID: number
      groupID?: number
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelGslbProberQueryVO, any>({
      path: `/gslb/prober`,
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
   * @tags Gslb
   * @name ProberCreate
   * @summary 拨测点新增
   * @request POST:/gslb/prober
   * @secure
   */
  proberCreate = (req: ModelGslbProberCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober`,
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
   * @tags Gslb
   * @name ProberDelete
   * @summary 拨测点删除
   * @request DELETE:/gslb/prober
   * @secure
   */
  proberDelete = (req: ModelGslbProberDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober`,
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
   * @tags Gslb
   * @name ProberPoolList
   * @summary 探测池查询
   * @request GET:/gslb/prober-pool
   * @secure
   */
  proberPoolList = (
    query: {
      groupID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelGslbProberPoolQueryVO, any>({
      path: `/gslb/prober-pool`,
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
   * @tags Gslb
   * @name ProberPoolCreate
   * @summary 探测池新增
   * @request POST:/gslb/prober-pool
   * @secure
   */
  proberPoolCreate = (req: ModelGslbProberPoolCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober-pool`,
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
   * @tags Gslb
   * @name ProberPoolDelete
   * @summary 探测池删除
   * @request DELETE:/gslb/prober-pool
   * @secure
   */
  proberPoolDelete = (req: ModelGslbProberPoolDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober-pool`,
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
   * @tags Gslb
   * @name ProberPoolEnableUpdate
   * @summary 探测池启用/禁用
   * @request PUT:/gslb/prober-pool/enable
   * @secure
   */
  proberPoolEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober-pool/enable`,
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
   * @tags Gslb
   * @name ProberPoolExportCreate
   * @summary 探测池导出
   * @request POST:/gslb/prober-pool/export
   * @secure
   */
  proberPoolExportCreate = (req: ModelGslbProberPoolExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober-pool/export`,
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
   * @tags Gslb
   * @name ProberPoolImportCreate
   * @summary 探测池导入
   * @request POST:/gslb/prober-pool/import
   * @secure
   */
  proberPoolImportCreate = (req: ModelGslbProberPoolImportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober-pool/import`,
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
   * @tags Gslb
   * @name ProberPoolMemberList
   * @summary 探测池成员查询
   * @request GET:/gslb/prober-pool/member
   * @secure
   */
  proberPoolMemberList = (
    query?: {
      excludeIDs?: number[]
      groupID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelGslbProberPoolMemberQueryVO, any>({
      path: `/gslb/prober-pool/member`,
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
   * @tags Gslb
   * @name ProberPoolDetail
   * @summary 探测池详情
   * @request GET:/gslb/prober-pool/{id}
   * @secure
   */
  proberPoolDetail = (id: string, req: ModelGslbProberPoolInfoDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelGslbProberPoolInfoVO, any>({
      path: `/gslb/prober-pool/${id}`,
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
   * @tags Gslb
   * @name ProberPoolUpdate
   * @summary 探测池修改
   * @request PUT:/gslb/prober-pool/{id}
   * @secure
   */
  proberPoolUpdate = (id: number, req: ModelGslbProberPoolUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober-pool/${id}`,
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
   * @tags Gslb
   * @name ProberEnableUpdate
   * @summary 拨测点启用/禁用
   * @request PUT:/gslb/prober/enable
   * @secure
   */
  proberEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober/enable`,
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
   * @tags Gslb
   * @name ProberUpdate
   * @summary 拨测点修改
   * @request PUT:/gslb/prober/{id}
   * @secure
   */
  proberUpdate = (id: number, req: ModelGslbProberUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/prober/${id}`,
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
   * @tags Gslb
   * @name ServerList
   * @summary 服务器查询
   * @request GET:/gslb/server
   * @secure
   */
  serverList = (
    query: {
      groupID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelGslbServerQueryVO, any>({
      path: `/gslb/server`,
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
   * @tags Gslb
   * @name ServerCreate
   * @summary 服务器新增
   * @request POST:/gslb/server
   * @secure
   */
  serverCreate = (req: ModelGslbServerCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/server`,
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
   * @tags Gslb
   * @name ServerDelete
   * @summary 服务器删除（批量）
   * @request DELETE:/gslb/server
   * @secure
   */
  serverDelete = (req: ModelGslbServerDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/server`,
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
   * @tags Gslb
   * @name ServerIdList
   * @summary 服务器详情
   * @request GET:/gslb/server/:id
   * @secure
   */
  serverIdList = (id: string, req: ModelGslbServerInfoDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelGslbServerInfoVO, any>({
      path: `/gslb/server/${id}`,
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
   * @tags Gslb
   * @name ServerEnableUpdate
   * @summary 服务器启用/禁用
   * @request PUT:/gslb/server/enable
   * @secure
   */
  serverEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/server/enable`,
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
   * @tags Gslb
   * @name ServerUpdate
   * @summary 服务器修改
   * @request PUT:/gslb/server/{id}
   * @secure
   */
  serverUpdate = (id: number, req: ModelGslbServerUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/server/${id}`,
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
   * @tags Gslb
   * @name ServiceList
   * @summary 服务查询
   * @request GET:/gslb/service
   * @secure
   */
  serviceList = (
    query: {
      datacenterID?: number
      groupID?: number
      ids?: number[]
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      poolID?: number
      qtype?: 'A' | 'AAAA'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelGslbServiceQueryVO, any>({
      path: `/gslb/service`,
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
   * @tags Gslb
   * @name ServiceCreate
   * @summary 服务新增
   * @request POST:/gslb/service
   * @secure
   */
  serviceCreate = (req: ModelGslbServiceCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/service`,
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
   * @tags Gslb
   * @name ServiceDelete
   * @summary 服务删除（批量）
   * @request DELETE:/gslb/service
   * @secure
   */
  serviceDelete = (req: ModelGslbServiceDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/service`,
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
   * @tags Gslb
   * @name ServiceIdList
   * @summary 服务详情
   * @request GET:/gslb/service/:id
   * @secure
   */
  serviceIdList = (id: string, req: ModelGslbServiceInfoDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelGslbServiceInfoVO, any>({
      path: `/gslb/service/${id}`,
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
   * @tags Gslb
   * @name ServiceEnableUpdate
   * @summary 服务启用/禁用
   * @request PUT:/gslb/service/enable
   * @secure
   */
  serviceEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/service/enable`,
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
   * @tags Gslb
   * @name ServiceUpdate
   * @summary 服务修改
   * @request PUT:/gslb/service/{id}
   * @secure
   */
  serviceUpdate = (id: number, req: ModelGslbServiceUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/service/${id}`,
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
   * @tags Gslb
   * @name SettingProberList
   * @summary 拨测点设置获取
   * @request GET:/gslb/setting/prober
   * @secure
   */
  settingProberList = (
    query: {
      groupID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseStructsGslbProberSetting, any>({
      path: `/gslb/setting/prober`,
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
   * @tags Gslb
   * @name SettingProberUpdate
   * @summary 拨测点设置更新
   * @request PUT:/gslb/setting/prober
   * @secure
   */
  settingProberUpdate = (req: ModelGslbProberSettingSetDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/setting/prober`,
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
   * @tags Gslb
   * @name SettingSoaList
   * @summary Soa设置获取
   * @request GET:/gslb/setting/soa
   * @secure
   */
  settingSoaList = (
    query: {
      groupID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseStructsGslbSoaSetting, any>({
      path: `/gslb/setting/soa`,
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
   * @tags Gslb
   * @name SettingSoaUpdate
   * @summary Soa设置更新
   * @request PUT:/gslb/setting/soa
   * @secure
   */
  settingSoaUpdate = (req: ModelGslbSoaSettingSetDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/setting/soa`,
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
   * @tags GslbThirdSync
   * @name ThirdSyncList
   * @summary GSLB第三方同步获取
   * @request GET:/gslb/third-sync
   * @secure
   */
  thirdSyncList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelGslbThirdSyncVO, any>({
      path: `/gslb/third-sync`,
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
   * @tags GslbThirdSync
   * @name ThirdSyncCreate
   * @summary GSLB第三方同步新增
   * @request POST:/gslb/third-sync
   * @secure
   */
  thirdSyncCreate = (req: ModelGslbThirdSyncCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/third-sync`,
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
   * @tags GslbThirdSync
   * @name ThirdSyncDelete
   * @summary GSLB第三方同步删除（批量）
   * @request DELETE:/gslb/third-sync
   * @secure
   */
  thirdSyncDelete = (req: ModelGslbThirdSyncDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/third-sync`,
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
   * @tags GslbThirdSync
   * @name ThirdSyncEnableUpdate
   * @summary GSLB第三方同步启用/禁用（批量）
   * @request PUT:/gslb/third-sync/enable
   * @secure
   */
  thirdSyncEnableUpdate = (req: ModelGslbThirdSyncEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/third-sync/enable`,
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
   * @tags GslbThirdSync
   * @name ThirdSyncExecuteUpdate
   * @summary GSLB第三方同步执行(批量)
   * @request PUT:/gslb/third-sync/execute
   * @secure
   */
  thirdSyncExecuteUpdate = (req: ModelGslbThirdSyncExecuteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/third-sync/execute`,
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
   * @tags GslbThirdSync
   * @name ThirdSyncImportCreate
   * @summary GSLB第三方导入
   * @request POST:/gslb/third-sync/import
   * @secure
   */
  thirdSyncImportCreate = (req: ModelGslbThirdSyncJob, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/third-sync/import`,
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
   * @tags GslbThirdSync
   * @name ThirdSyncUpdate
   * @summary GSLB第三方同步编辑
   * @request PUT:/gslb/third-sync/{id}
   * @secure
   */
  thirdSyncUpdate = (id: string, req: ModelGslbThirdSyncUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/third-sync/${id}`,
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
   * @tags Gslb
   * @name TopologyList
   * @summary 拓扑记录查询
   * @request GET:/gslb/topology
   * @secure
   */
  topologyList = (
    query: {
      groupID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      topologyGroupID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelGslbTopologyQueryVO, any>({
      path: `/gslb/topology`,
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
   * @tags Gslb
   * @name TopologyCreate
   * @summary 拓扑记录新增
   * @request POST:/gslb/topology
   * @secure
   */
  topologyCreate = (req: ModelGslbTopologyCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology`,
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
   * @tags Gslb
   * @name TopologyDelete
   * @summary 拓扑记录删除
   * @request DELETE:/gslb/topology
   * @secure
   */
  topologyDelete = (req: ModelGslbTopologyDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology`,
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
   * @tags Gslb
   * @name TopologyGroupCreate
   * @summary 拓扑组新增
   * @request POST:/gslb/topology-group
   * @secure
   */
  topologyGroupCreate = (req: ModelGslbTopologyGroupCreateCommon[], params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology-group`,
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
   * @tags Gslb
   * @name TopologyGroupDelete
   * @summary 拓扑组删除
   * @request DELETE:/gslb/topology-group
   * @secure
   */
  topologyGroupDelete = (req: ModelGslbTopologyGroupDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology-group`,
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
   * @tags Gslb
   * @name TopologyRegionList
   * @summary 拓扑规则区域查询
   * @request GET:/gslb/topology-region
   * @secure
   */
  topologyRegionList = (
    query: {
      groupID?: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelGslbTopologyRegionQueryVO, any>({
      path: `/gslb/topology-region`,
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
   * @tags Gslb
   * @name TopologyRegionCreate
   * @summary 拓扑规则区域新增
   * @request POST:/gslb/topology-region
   * @secure
   */
  topologyRegionCreate = (req: ModelGslbTopologyRegionCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology-region`,
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
   * @tags Gslb
   * @name TopologyRegionDelete
   * @summary 拓扑规则区域删除
   * @request DELETE:/gslb/topology-region
   * @secure
   */
  topologyRegionDelete = (req: ModelGslbTopologyRegionDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology-region`,
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
   * @tags Gslb
   * @name TopologyRegionUpdate
   * @summary 拓扑规则区域修改
   * @request PUT:/gslb/topology-region/{id}
   * @secure
   */
  topologyRegionUpdate = (
    id: number,
    req: ModelGslbTopologyRegionUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology-region/${id}`,
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
   * @tags Gslb
   * @name TopologyEnableUpdate
   * @summary 拓扑记录启用/禁用
   * @request PUT:/gslb/topology/enable
   * @secure
   */
  topologyEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology/enable`,
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
   * @tags Gslb
   * @name TopologyExportCreate
   * @summary 拓扑导出
   * @request POST:/gslb/topology/export
   * @secure
   */
  topologyExportCreate = (req: ModelGslbTopologyExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology/export`,
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
   * @tags Gslb
   * @name TopologyImportCreate
   * @summary 拓扑导入
   * @request POST:/gslb/topology/import
   * @secure
   */
  topologyImportCreate = (req: ModelGslbTopologyImportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology/import`,
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
   * @tags Gslb
   * @name TopologyOrderCreate
   * @summary 拓扑记录排序（整页）
   * @request POST:/gslb/topology/order
   * @secure
   */
  topologyOrderCreate = (req: ModelGslbTopologySaveOrderDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology/order`,
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
   * @tags Gslb
   * @name TopologyUpdate
   * @summary 拓扑记录修改
   * @request PUT:/gslb/topology/{id}
   * @secure
   */
  topologyUpdate = (id: number, req: ModelGslbTopologyUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology/${id}`,
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
   * @tags Gslb
   * @name TopologyOrderCreate2
   * @summary 拓扑记录排序（单个）
   * @request POST:/gslb/topology/{id}/order
   * @originalName topologyOrderCreate
   * @duplicate
   * @secure
   */
  topologyOrderCreate2 = (
    id: string,
    req: ModelGslbTopologySetOrderDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/topology/${id}/order`,
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
   * @tags Gslb
   * @name WideIpList
   * @summary 域名查询
   * @request GET:/gslb/wide-ip
   * @secure
   */
  wideIpList = (
    query: {
      groupID?: number
      ids?: number[]
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      poolID?: number
      poolQtype?: 'CNAME' | 'MX' | 'SRV' | 'NAPTR'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelGslbWideIPQueryVO, any>({
      path: `/gslb/wide-ip`,
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
   * @tags Gslb
   * @name WideIpCreate
   * @summary 域名新增
   * @request POST:/gslb/wide-ip
   * @secure
   */
  wideIpCreate = (req: ModelGslbWideIPCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/wide-ip`,
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
   * @tags Gslb
   * @name WideIpDelete
   * @summary 域名删除
   * @request DELETE:/gslb/wide-ip
   * @secure
   */
  wideIpDelete = (req: ModelGslbWideIPDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/wide-ip`,
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
   * @tags Gslb
   * @name WideIpIdList
   * @summary 域名详情
   * @request GET:/gslb/wide-ip/:id
   * @secure
   */
  wideIpIdList = (id: string, req: ModelGslbWideIPInfoDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelGslbWideIPInfoVO, any>({
      path: `/gslb/wide-ip/${id}`,
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
   * @tags Gslb
   * @name WideIpEnableUpdate
   * @summary 域名启用/禁用
   * @request PUT:/gslb/wide-ip/enable
   * @secure
   */
  wideIpEnableUpdate = (req: ModelEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/wide-ip/enable`,
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
   * @tags Gslb
   * @name WideIpExportCreate
   * @summary 域名导出
   * @request POST:/gslb/wide-ip/export
   * @secure
   */
  wideIpExportCreate = (req: ModelGslbWideIPExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/wide-ip/export`,
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
   * @tags Gslb
   * @name WideIpImportCreate
   * @summary 域名导入
   * @request POST:/gslb/wide-ip/import
   * @secure
   */
  wideIpImportCreate = (
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
      path: `/gslb/wide-ip/import`,
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
   * @tags Gslb
   * @name WideIpImportEventsList
   * @summary 域名导入事件流
   * @request GET:/gslb/wide-ip/import-events
   * @secure
   */
  wideIpImportEventsList = (params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/wide-ip/import-events`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Gslb
   * @name WideIpUpdate
   * @summary 域名修改
   * @request PUT:/gslb/wide-ip/{id}
   * @secure
   */
  wideIpUpdate = (id: number, req: ModelGslbWideIPUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/gslb/wide-ip/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
