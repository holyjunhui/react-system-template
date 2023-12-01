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
  ModelAclCreateDTO,
  ModelAclDeleteDTO,
  ModelAclExportDTO,
  ModelAclUpdateDTO,
  ModelDnsViewCreateDTO,
  ModelDnsViewDeleteDTO,
  ModelDnsViewExportDTO,
  ModelDnsViewQueryVO,
  ModelDnsViewUpdateDTO,
  ModelDnsViewUpdateEffectRangeDTO,
  ModelDnsZoneAuthConsitencyCheckDTO,
  ModelDnsZoneAuthCreateDTO,
  ModelDnsZoneAuthDeleteDTO,
  ModelDnsZoneAuthDnssecExportDTO,
  ModelDnsZoneAuthDnssecRolloverKskDTO,
  ModelDnsZoneAuthDnssecRolloverZskDTO,
  ModelDnsZoneAuthDnssecSignDTO,
  ModelDnsZoneAuthDnssecUnsignDTO,
  ModelDnsZoneAuthEnableDTO,
  ModelDnsZoneAuthExportDTO,
  ModelDnsZoneAuthLockDTO,
  ModelDnsZoneAuthQueryVO,
  ModelDnsZoneAuthRRBatchCreateDTO,
  ModelDnsZoneAuthRRBatchUpdateDTO,
  ModelDnsZoneAuthRRCreateDTO,
  ModelDnsZoneAuthRRDeleteDTO,
  ModelDnsZoneAuthRREnableDTO,
  ModelDnsZoneAuthRRExportTextDTO,
  ModelDnsZoneAuthRRLockOrNotDTO,
  ModelDnsZoneAuthRRSearchQueryDTO,
  ModelDnsZoneAuthRRUpdateDTO,
  ModelDnsZoneAuthShareRRCreateDTO,
  ModelDnsZoneAuthShareRRUpdateDTO,
  ModelDnsZoneAuthShareRRUpdateZoneDTO,
  ModelDnsZoneAuthSwitchMasterDTO,
  ModelDnsZoneAuthSwitchSlaveDTO,
  ModelDnsZoneAuthUnLockDTO,
  ModelDnsZoneAuthUpdateDTO,
  ModelDnsZoneAuthUpdateEffectDTO,
  ModelDnssecCreateDTO,
  ModelDnssecDeleteDTO,
  ModelDnssecRecurTrustAnchorsDTO,
  ModelDnssecRecurValidateExceptDTO,
  ModelDnssecUpdateDTO,
  ModelDnzZoneAuthShareRRDeleteDTO,
  ModelDomainLibBuiltInExport,
  ModelDomainLibCreateDTO,
  ModelDomainLibDeleteDTO,
  ModelDomainLibTypeUpdateDTO,
  ModelDomainLibUpdateDTO,
  ModelTrustAnchor,
  ModelTsigCreateDTO,
  ModelTsigDeleteDTO,
  ModelTsigGenerateDTO,
  ModelTsigUpdateDTO,
  ModelZoneName,
  UtilsDataResponseArrayConfigdbDomainLibraryType,
  UtilsDataResponseArrayModelAddressVersion,
  UtilsDataResponseArrayModelGEOISPAddressVO,
  UtilsDataResponseArrayModelISPAddressVO,
  UtilsDataResponseString,
  UtilsDataResponseUtilsPageDataModelAclQueryVO,
  UtilsDataResponseUtilsPageDataModelDnsZoneAuthRRSearchQueryVO,
  UtilsDataResponseUtilsPageDataModelDnssecVO,
  UtilsDataResponseUtilsPageDataModelDomainLibQueryVO,
  UtilsDataResponseUtilsPageDataModelTsigQueryVO,
  UtilsEmptyResponse,
  UtilsPageDataModelAclExportVO,
  UtilsPageDataModelDnsViewQueryVO,
  UtilsPageDataModelDnsZoneAuthQueryVO,
  UtilsPageDataModelDnsZoneAuthRRQueryVO,
  UtilsPageDataModelDnsZoneAuthShareRRImportDTO,
  UtilsPageDataModelDnsZoneAuthShareRRQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Dns<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Acl
   * @name GetDns
   * @summary 查询Acl
   * @request GET:/dns/acl
   * @secure
   */
  getDns = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelAclQueryVO, any>({
      path: `/dns/acl`,
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
   * @tags Acl
   * @name PostDns
   * @summary 新增Acl
   * @request POST:/dns/acl
   * @secure
   */
  postDns = (req: ModelAclCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/acl`,
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
   * @tags Acl
   * @name DeleteDns
   * @summary 删除Acl
   * @request DELETE:/dns/acl
   * @secure
   */
  deleteDns = (req: ModelAclDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/acl`,
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
   * @tags Acl
   * @name AclExportCreate
   * @summary Acl导出
   * @request POST:/dns/acl/export
   * @secure
   */
  aclExportCreate = (req: ModelAclExportDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelAclExportVO, any>({
      path: `/dns/acl/export`,
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
   * @tags Acl
   * @name AclGeoIspAddressList
   * @summary 获取GEO+ISP地址库
   * @request GET:/dns/acl/geo-isp-address
   * @secure
   */
  aclGeoIspAddressList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArrayModelGEOISPAddressVO, any>({
      path: `/dns/acl/geo-isp-address`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Acl
   * @name AclImportCreate
   * @summary Acl导入
   * @request POST:/dns/acl/import
   * @secure
   */
  aclImportCreate = (
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
      path: `/dns/acl/import`,
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
   * @tags Acl
   * @name AclIpRepeatCheckList
   * @summary 检查 acl 是否合法
   * @request GET:/dns/acl/ip-repeat/check
   * @secure
   */
  aclIpRepeatCheckList = (
    query: {
      ips: string[]
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/acl/ip-repeat/check`,
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
   * @tags Acl
   * @name AclIspAddressList
   * @summary 获取ISP地址库
   * @request GET:/dns/acl/isp-address
   * @secure
   */
  aclIspAddressList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArrayModelISPAddressVO, any>({
      path: `/dns/acl/isp-address`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Acl
   * @name PutDns
   * @summary 修改Acl
   * @request PUT:/dns/acl/{id}
   * @secure
   */
  putDns = (id: number, req: ModelAclUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/acl/${id}`,
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
   * @tags Acl
   * @name AddressCreate
   * @summary 上传地址库
   * @request POST:/dns/address
   * @secure
   */
  addressCreate = (data: any, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/address`,
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
   * @tags Acl
   * @name AddressVersionList
   * @summary 获取地址库版本信息
   * @request GET:/dns/address/version
   * @secure
   */
  addressVersionList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseArrayModelAddressVersion, any>({
      path: `/dns/address/version`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags DNSSEC
   * @name DnssecList
   * @summary 查询DNSSEC
   * @request GET:/dns/dnssec
   * @secure
   */
  dnssecList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDnssecVO, any>({
      path: `/dns/dnssec`,
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
   * @tags DNSSEC
   * @name DnssecCreate
   * @summary 新增DNSSEC
   * @request POST:/dns/dnssec
   * @secure
   */
  dnssecCreate = (req: ModelDnssecCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/dnssec`,
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
   * @tags DNSSEC
   * @name DnssecDelete
   * @summary 删除DNSSEC
   * @request DELETE:/dns/dnssec
   * @secure
   */
  dnssecDelete = (req: ModelDnssecDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/dnssec`,
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
   * @tags DNSSEC
   * @name DnssecRecurTrustAnchorsList
   * @summary 获取DNSSEC信任锚
   * @request GET:/dns/dnssec-recur/trust-anchors
   * @secure
   */
  dnssecRecurTrustAnchorsList = (params: RequestParams = {}) =>
    this.request<ModelTrustAnchor, any>({
      path: `/dns/dnssec-recur/trust-anchors`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags DNSSEC
   * @name DnssecRecurTrustAnchorsUpdate
   * @summary 更新DNSSEC信任锚
   * @request PUT:/dns/dnssec-recur/trust-anchors
   * @secure
   */
  dnssecRecurTrustAnchorsUpdate = (
    req: ModelDnssecRecurTrustAnchorsDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/dnssec-recur/trust-anchors`,
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
   * @tags DNSSEC
   * @name DnssecRecurValidateExceptList
   * @summary 获取DNSSEC否定信任锚
   * @request GET:/dns/dnssec-recur/validate-except
   * @secure
   */
  dnssecRecurValidateExceptList = (params: RequestParams = {}) =>
    this.request<ModelZoneName, any>({
      path: `/dns/dnssec-recur/validate-except`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags DNSSEC
   * @name DnssecRecurValidateExceptUpdate
   * @summary 更新DNSSEC否定信任锚
   * @request PUT:/dns/dnssec-recur/validate-except
   * @secure
   */
  dnssecRecurValidateExceptUpdate = (
    req: ModelDnssecRecurValidateExceptDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/dnssec-recur/validate-except`,
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
   * @tags DNSSEC
   * @name DnssecUpdate
   * @summary 修改DNSSEC
   * @request PUT:/dns/dnssec/{id}
   * @secure
   */
  dnssecUpdate = (id: number, req: ModelDnssecUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/dnssec/${id}`,
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
   * @tags DomainLibrary
   * @name DomainList
   * @summary 域名库查询
   * @request GET:/dns/domain
   * @secure
   */
  domainList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      type?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelDomainLibQueryVO, any>({
      path: `/dns/domain`,
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
   * @tags DomainLibrary
   * @name DomainCreate
   * @summary 域名库新增
   * @request POST:/dns/domain
   * @secure
   */
  domainCreate = (req: ModelDomainLibCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/domain`,
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
   * @tags DomainLibrary
   * @name DomainDelete
   * @summary 域名库删除
   * @request DELETE:/dns/domain
   * @secure
   */
  domainDelete = (req: ModelDomainLibDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/domain`,
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
   * @tags DomainLibrary
   * @name DomainBuiltinCreate
   * @summary 升级-内置域名库
   * @request POST:/dns/domain/builtin
   * @secure
   */
  domainBuiltinCreate = (data: any, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/domain/builtin`,
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
   * @tags DomainLibrary
   * @name DomainExportCreate
   * @summary 域名库导出
   * @request POST:/dns/domain/export
   * @secure
   */
  domainExportCreate = (req: ModelDomainLibBuiltInExport, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/domain/export`,
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
   * @tags DomainLibrary
   * @name DomainImportCreate
   * @summary 域名库导入
   * @request POST:/dns/domain/import
   * @secure
   */
  domainImportCreate = (
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
      path: `/dns/domain/import`,
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
   * @tags DomainLibrary
   * @name DomainTypeList
   * @summary 域名类型查询
   * @request GET:/dns/domain/type
   * @secure
   */
  domainTypeList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayConfigdbDomainLibraryType, any>({
      path: `/dns/domain/type`,
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
   * @tags DomainLibrary
   * @name DomainTypeUpdate
   * @summary 域名类型更新
   * @request PUT:/dns/domain/type
   * @secure
   */
  domainTypeUpdate = (req: ModelDomainLibTypeUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/domain/type`,
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
   * @tags DomainLibrary
   * @name DomainUpdate
   * @summary 域名库修改
   * @request PUT:/dns/domain/{id}
   * @secure
   */
  domainUpdate = (id: number, req: ModelDomainLibUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/domain/${id}`,
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
   * @tags Tsig
   * @name TsigList
   * @summary 查询Tsig
   * @request GET:/dns/tsig
   * @secure
   */
  tsigList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelTsigQueryVO, any>({
      path: `/dns/tsig`,
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
   * @tags Tsig
   * @name TsigCreate
   * @summary 新增Tsig
   * @request POST:/dns/tsig
   * @secure
   */
  tsigCreate = (req: ModelTsigCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/tsig`,
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
   * @tags Tsig
   * @name TsigDelete
   * @summary 删除Tsig
   * @request DELETE:/dns/tsig
   * @secure
   */
  tsigDelete = (req: ModelTsigDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/tsig`,
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
   * @tags Tsig
   * @name TsigGenerateUpdate
   * @summary 生成Tsig
   * @request PUT:/dns/tsig/generate
   * @secure
   */
  tsigGenerateUpdate = (req: ModelTsigGenerateDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseString, any>({
      path: `/dns/tsig/generate`,
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
   * @tags Tsig
   * @name TsigUpdate
   * @summary 修改Tsig
   * @request PUT:/dns/tsig/{id}
   * @secure
   */
  tsigUpdate = (id: number, req: ModelTsigUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/tsig/${id}`,
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
   * @tags View
   * @name ViewList
   * @summary 查询视图
   * @request GET:/dns/view
   * @secure
   */
  viewList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDnsViewQueryVO, any>({
      path: `/dns/view`,
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
   * @tags View
   * @name ViewCreate
   * @summary 新增视图
   * @request POST:/dns/view
   * @secure
   */
  viewCreate = (req: ModelDnsViewCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/view`,
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
   * @tags View
   * @name ViewDelete
   * @summary 删除视图（批量）
   * @request DELETE:/dns/view
   * @secure
   */
  viewDelete = (req: ModelDnsViewDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/view`,
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
   * @tags View
   * @name ViewEffectRangeUpdate
   * @summary 修改视图的生效范围（批量）
   * @request PUT:/dns/view/effect-range
   * @secure
   */
  viewEffectRangeUpdate = (req: ModelDnsViewUpdateEffectRangeDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/view/effect-range`,
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
   * @tags View
   * @name ViewExportCreate
   * @summary 视图导出
   * @request POST:/dns/view/export
   * @secure
   */
  viewExportCreate = (req: ModelDnsViewExportDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelDnsViewQueryVO, any>({
      path: `/dns/view/export`,
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
   * @tags View
   * @name ViewImportCreate
   * @summary 视图导入
   * @request POST:/dns/view/import
   * @secure
   */
  viewImportCreate = (
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
      path: `/dns/view/import`,
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
   * @tags ZoneAuth
   * @name ViewDetail
   * @summary 视图查询详情页
   * @request GET:/dns/view/{id}
   * @secure
   */
  viewDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelDnsViewQueryVO, any>({
      path: `/dns/view/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags View
   * @name ViewUpdate
   * @summary 修改视图
   * @request PUT:/dns/view/{id}
   * @secure
   */
  viewUpdate = (id: number, req: ModelDnsViewUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/view/${id}`,
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
   * @tags ZoneAuth
   * @name ZoneAuthList
   * @summary 授权区查询
   * @request GET:/dns/zone/auth
   * @secure
   */
  zoneAuthList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      viewID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDnsZoneAuthQueryVO, any>({
      path: `/dns/zone/auth`,
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
   * @tags ZoneAuth
   * @name ZoneAuthCreate
   * @summary 授权区新增
   * @request POST:/dns/zone/auth
   * @secure
   */
  zoneAuthCreate = (req: ModelDnsZoneAuthCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth`,
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
   * @tags ZoneAuth
   * @name ZoneAuthDelete
   * @summary 授权区删除（批量）
   * @request DELETE:/dns/zone/auth
   * @secure
   */
  zoneAuthDelete = (req: ModelDnsZoneAuthDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth`,
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
   * @tags ZoneAuth
   * @name ZoneAuthConsistencyCheckUpdate
   * @summary 授权区一致性校验（批量）
   * @request PUT:/dns/zone/auth/consistency-check
   * @secure
   */
  zoneAuthConsistencyCheckUpdate = (
    req: ModelDnsZoneAuthConsitencyCheckDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/consistency-check`,
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
   * @tags ZoneAuth
   * @name ZoneAuthDetailDetail
   * @summary 授权区查询详情页
   * @request GET:/dns/zone/auth/detail/{id}
   * @secure
   */
  zoneAuthDetailDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelDnsZoneAuthQueryVO, any>({
      path: `/dns/zone/auth/detail/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags ZoneAuth
   * @name ZoneAuthDnssecExportCreate
   * @summary 授权区dnssec导出（批量）
   * @request POST:/dns/zone/auth/dnssec/export
   * @secure
   */
  zoneAuthDnssecExportCreate = (req: ModelDnsZoneAuthDnssecExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/dnssec/export`,
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
   * @tags ZoneAuth
   * @name ZoneAuthDnssecImportCreate
   * @summary 授权区dnssec导入（单个域导入批量DS）
   * @request POST:/dns/zone/auth/dnssec/import
   * @secure
   */
  zoneAuthDnssecImportCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 区域id */
      zoneId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/dnssec/import`,
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
   * @tags ZoneAuth
   * @name ZoneAuthDnssecRolloverKskUpdate
   * @summary 授权区KSK翻转
   * @request PUT:/dns/zone/auth/dnssec/rollover/ksk
   * @secure
   */
  zoneAuthDnssecRolloverKskUpdate = (
    req: ModelDnsZoneAuthDnssecRolloverKskDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/dnssec/rollover/ksk`,
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
   * @tags ZoneAuth
   * @name ZoneAuthDnssecRolloverZskUpdate
   * @summary 授权区ZSK翻转
   * @request PUT:/dns/zone/auth/dnssec/rollover/zsk
   * @secure
   */
  zoneAuthDnssecRolloverZskUpdate = (
    req: ModelDnsZoneAuthDnssecRolloverZskDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/dnssec/rollover/zsk`,
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
   * @tags ZoneAuth
   * @name ZoneAuthDnssecSignUpdate
   * @summary 授权区签名（批量）
   * @request PUT:/dns/zone/auth/dnssec/sign
   * @secure
   */
  zoneAuthDnssecSignUpdate = (req: ModelDnsZoneAuthDnssecSignDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/dnssec/sign`,
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
   * @tags ZoneAuth
   * @name ZoneAuthDnssecUnsignUpdate
   * @summary 授权区取消签名（批量）
   * @request PUT:/dns/zone/auth/dnssec/unsign
   * @secure
   */
  zoneAuthDnssecUnsignUpdate = (req: ModelDnsZoneAuthDnssecUnsignDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/dnssec/unsign`,
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
   * @tags ZoneAuth
   * @name ZoneAuthEffectRangeUpdate
   * @summary 授权区修改生效范围（批量）
   * @request PUT:/dns/zone/auth/effect-range
   * @secure
   */
  zoneAuthEffectRangeUpdate = (req: ModelDnsZoneAuthUpdateEffectDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/effect-range`,
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
   * @tags ZoneAuth
   * @name ZoneAuthEnableUpdate
   * @summary 授权区启用（批量）
   * @request PUT:/dns/zone/auth/enable
   * @secure
   */
  zoneAuthEnableUpdate = (req: ModelDnsZoneAuthEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/enable`,
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
   * @tags ZoneAuth
   * @name ZoneAuthExportCreate
   * @summary 授权区导出
   * @request POST:/dns/zone/auth/export
   * @secure
   */
  zoneAuthExportCreate = (req: ModelDnsZoneAuthExportDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelDnsZoneAuthQueryVO, any>({
      path: `/dns/zone/auth/export`,
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
   * @tags ZoneAuth
   * @name ZoneAuthImportCreate
   * @summary 授权区导入
   * @request POST:/dns/zone/auth/import
   * @secure
   */
  zoneAuthImportCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 模式-add:追加、update:更新、del:删除、overwrite:覆盖 */
      importMode: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/import`,
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
   * @tags ZoneAuth
   * @name ZoneAuthLockUpdate
   * @summary 授权区锁定（批量）
   * @request PUT:/dns/zone/auth/lock
   * @secure
   */
  zoneAuthLockUpdate = (req: ModelDnsZoneAuthLockDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/lock`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrList
   * @summary 授权记录查询
   * @request GET:/dns/zone/auth/rr
   * @secure
   */
  zoneAuthRrList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      viewID?: number
      zoneID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDnsZoneAuthRRQueryVO, any>({
      path: `/dns/zone/auth/rr`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrCreate
   * @summary 授权记录新增
   * @request POST:/dns/zone/auth/rr
   * @secure
   */
  zoneAuthRrCreate = (req: ModelDnsZoneAuthRRCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrDelete
   * @summary 授权记录删除（批量）
   * @request DELETE:/dns/zone/auth/rr
   * @secure
   */
  zoneAuthRrDelete = (req: ModelDnsZoneAuthRRDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrBatchUpdate
   * @summary 授权记录修改（批量）
   * @request PUT:/dns/zone/auth/rr/batch
   * @secure
   */
  zoneAuthRrBatchUpdate = (req: ModelDnsZoneAuthRRBatchUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/batch`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrBatchCreate
   * @summary 授权记录新增（批量）
   * @request POST:/dns/zone/auth/rr/batch
   * @secure
   */
  zoneAuthRrBatchCreate = (req: ModelDnsZoneAuthRRBatchCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/batch`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrEnableUpdate
   * @summary 授权记录启用（批量）
   * @request PUT:/dns/zone/auth/rr/enable
   * @secure
   */
  zoneAuthRrEnableUpdate = (req: ModelDnsZoneAuthRREnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/enable`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrExportTextCreate
   * @summary 授权记录导出（txt/csv）
   * @request POST:/dns/zone/auth/rr/export-text
   * @secure
   */
  zoneAuthRrExportTextCreate = (req: ModelDnsZoneAuthRRExportTextDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/export-text`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrImportTextCreate
   * @summary 授权记录导入（txt/csv）
   * @request POST:/dns/zone/auth/rr/import-text
   * @secure
   */
  zoneAuthRrImportTextCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 文件格式-txt:.txt或区域文件、csv:.csv文件 */
      type: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/import-text`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrLockUpdate
   * @summary 授权记录锁定（批量）
   * @request PUT:/dns/zone/auth/rr/lock
   * @secure
   */
  zoneAuthRrLockUpdate = (req: ModelDnsZoneAuthRRLockOrNotDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/lock`,
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
   * @tags dns
   * @name ZoneAuthRrSearchCreate
   * @summary 全局搜询
   * @request POST:/dns/zone/auth/rr/search
   * @secure
   */
  zoneAuthRrSearchCreate = (req: ModelDnsZoneAuthRRSearchQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsDataResponseUtilsPageDataModelDnsZoneAuthRRSearchQueryVO, any>({
      path: `/dns/zone/auth/rr/search`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrUnlockUpdate
   * @summary 授权记录解锁（批量）
   * @request PUT:/dns/zone/auth/rr/unlock
   * @secure
   */
  zoneAuthRrUnlockUpdate = (req: ModelDnsZoneAuthRRLockOrNotDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/unlock`,
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
   * @tags ZoneAuthRR
   * @name ZoneAuthRrUpdate
   * @summary 授权记录修改
   * @request PUT:/dns/zone/auth/rr/{id}
   * @secure
   */
  zoneAuthRrUpdate = (id: number, req: ModelDnsZoneAuthRRUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/rr/${id}`,
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
   * @tags ZoneAuthShareRR
   * @name ZoneAuthShareRrList
   * @summary 共享记录查询
   * @request GET:/dns/zone/auth/share-rr
   * @secure
   */
  zoneAuthShareRrList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDnsZoneAuthShareRRQueryVO, any>({
      path: `/dns/zone/auth/share-rr`,
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
   * @tags ZoneAuthShareRR
   * @name ZoneAuthShareRrCreate
   * @summary 共享记录新增
   * @request POST:/dns/zone/auth/share-rr
   * @secure
   */
  zoneAuthShareRrCreate = (req: ModelDnsZoneAuthShareRRCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/share-rr`,
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
   * @tags ZoneAuthShareRR
   * @name ZoneAuthShareRrDelete
   * @summary 共享记录删除（批量）
   * @request DELETE:/dns/zone/auth/share-rr
   * @secure
   */
  zoneAuthShareRrDelete = (req: ModelDnzZoneAuthShareRRDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/share-rr`,
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
   * @tags ZoneAuthShareRR
   * @name ZoneAuthShareRrExportList
   * @summary 共享记录导出
   * @request GET:/dns/zone/auth/share-rr/export
   * @secure
   */
  zoneAuthShareRrExportList = (
    query?: {
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataModelDnsZoneAuthShareRRImportDTO, any>({
      path: `/dns/zone/auth/share-rr/export`,
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
   * @tags ZoneAuthShareRR
   * @name ZoneAuthShareRrImportCreate
   * @summary 共享记录导入
   * @request POST:/dns/zone/auth/share-rr/import
   * @secure
   */
  zoneAuthShareRrImportCreate = (
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
      path: `/dns/zone/auth/share-rr/import`,
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
   * @tags ZoneAuthShareRR
   * @name ZoneAuthShareRrZoneUpdate
   * @summary 共享记录区域修改
   * @request PUT:/dns/zone/auth/share-rr/zone
   * @secure
   */
  zoneAuthShareRrZoneUpdate = (
    req: ModelDnsZoneAuthShareRRUpdateZoneDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/share-rr/zone`,
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
   * @tags ZoneAuthShareRR
   * @name ZoneAuthShareRrUpdate
   * @summary 共享记录修改
   * @request PUT:/dns/zone/auth/share-rr/{id}
   * @secure
   */
  zoneAuthShareRrUpdate = (
    id: number,
    req: ModelDnsZoneAuthShareRRUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/share-rr/${id}`,
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
   * @tags ZoneAuth
   * @name ZoneAuthSwitchMasterUpdate
   * @summary 授权区辅切换主（批量）
   * @request PUT:/dns/zone/auth/switch-master
   * @secure
   */
  zoneAuthSwitchMasterUpdate = (req: ModelDnsZoneAuthSwitchMasterDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/switch-master`,
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
   * @tags ZoneAuth
   * @name ZoneAuthSwitchSlaveUpdate
   * @summary 授权区主切换辅（批量）
   * @request PUT:/dns/zone/auth/switch-slave
   * @secure
   */
  zoneAuthSwitchSlaveUpdate = (req: ModelDnsZoneAuthSwitchSlaveDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/switch-slave`,
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
   * @tags ZoneAuth
   * @name ZoneAuthUnlockUpdate
   * @summary 授权区解锁（批量）
   * @request PUT:/dns/zone/auth/unlock
   * @secure
   */
  zoneAuthUnlockUpdate = (req: ModelDnsZoneAuthUnLockDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/unlock`,
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
   * @tags ZoneAuth
   * @name ZoneAuthZoneFileUploadCreate
   * @summary 区文件上传
   * @request POST:/dns/zone/auth/zone-file/upload
   * @secure
   */
  zoneAuthZoneFileUploadCreate = (
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
      path: `/dns/zone/auth/zone-file/upload`,
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
   * @tags ZoneAuth
   * @name ZoneAuthUpdate
   * @summary 授权区修改
   * @request PUT:/dns/zone/auth/{id}
   * @secure
   */
  zoneAuthUpdate = (id: number, req: ModelDnsZoneAuthUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/dns/zone/auth/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
