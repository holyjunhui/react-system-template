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
  ModelReportListDeleteDTO,
  ModelReportListDownloadDTO,
  ModelReportMenuCreateDTO,
  ModelReportMenuDeleteDTO,
  ModelReportMenuEnableDTO,
  ModelReportMenuUpdateDTO,
  ModelReportPolicyCreateDTO,
  ModelReportPolicyDeleteDTO,
  ModelReportPolicyRunDTO,
  ModelReportPolicyUpdateDTO,
  ModelReportRuleCreateDTO,
  ModelReportRuleDeleteDTO,
  ModelReportRuleEnableDTO,
  ModelReportRuleUpdateDTO,
  ModelReportTemplateCreateDTO,
  ModelReportTemplateDeleteDTO,
  ModelReportTemplateOnlyDTO,
  ModelReportTemplateUpdateDTO,
  UtilsDataResponseArrayModelReportThreatIntelStatisticsVO,
  UtilsDataResponseModelDeviceDnsAnalysisVO,
  UtilsDataResponseModelDynamicReportVO,
  UtilsDataResponseModelMapStringSampleValue,
  UtilsDataResponseModelReportMapVOSwagger,
  UtilsDataResponseModelReportThreatIntelStatisticsVO,
  UtilsDataResponseModelReportVOSwagger,
  UtilsDataResponseUtilsPageDataModelReportListQueryVO,
  UtilsDataResponseUtilsPageDataModelReportMenuQueryVO,
  UtilsDataResponseUtilsPageDataModelReportPolicyQueryVO,
  UtilsDataResponseUtilsPageDataModelReportRuleQueryVO,
  UtilsDataResponseUtilsPageDataModelReportTemplateQueryVO,
  UtilsDataResponseUtilsPageDataModelReportThreatIntelEvent,
  UtilsDataResponseUtilsPageDataModelReportThreatIntelHostQueryVO,
  UtilsEmptyResponse,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Report<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Report
   * @name DeviceDnsAnalysisList
   * @summary 设备解析指标
   * @request GET:/report/device-dns-analysis
   * @secure
   */
  deviceDnsAnalysisList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelDeviceDnsAnalysisVO, any>({
      path: `/report/device-dns-analysis`,
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
   * @tags Report
   * @name DeviceDnsQpsList
   * @summary 设备dns业务qps
   * @request GET:/report/device-dns-qps
   * @secure
   */
  deviceDnsQpsList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/device-dns-qps`,
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
   * @tags Report
   * @name DeviceNetworkUsageRateList
   * @summary 设备网络使用率
   * @request GET:/report/device-network-usage-rate
   * @secure
   */
  deviceNetworkUsageRateList = (
    query: {
      end: string
      instance?: string
      network: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportVOSwagger, any>({
      path: `/report/device-network-usage-rate`,
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
   * @tags Report
   * @name DeviceRecursionConcurrencyQpsList
   * @summary 设备递归并发量
   * @request GET:/report/device-recursion-concurrency-qps
   * @secure
   */
  deviceRecursionConcurrencyQpsList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportVOSwagger, any>({
      path: `/report/device-recursion-concurrency-qps`,
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
   * @tags Report
   * @name DeviceRequestQpsList
   * @summary 设备请求qps
   * @request GET:/report/device-request-qps
   * @secure
   */
  deviceRequestQpsList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/device-request-qps`,
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
   * @tags Report
   * @name DeviceRequestResponseTrafficList
   * @summary 设备解析分布
   * @request GET:/report/device-request-response-traffic
   * @secure
   */
  deviceRequestResponseTrafficList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/device-request-response-traffic`,
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
   * @tags Report
   * @name DeviceResourceUsageRateList
   * @summary 设备资源使用率
   * @request GET:/report/device-resource-usage-rate
   * @secure
   */
  deviceResourceUsageRateList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/device-resource-usage-rate`,
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
   * @tags Report
   * @name DeviceResponseQpsList
   * @summary 设备应答qps
   * @request GET:/report/device-response-qps
   * @secure
   */
  deviceResponseQpsList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/device-response-qps`,
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
   * @tags Report
   * @name DeviceSecurityFilterPpsList
   * @summary 设备安全过滤pps
   * @request GET:/report/device-security-filter-pps
   * @secure
   */
  deviceSecurityFilterPpsList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/device-security-filter-pps`,
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
   * @tags DHCPReport
   * @name DhcpActiveLeaseList
   * @summary 租约统计
   * @request GET:/report/dhcp-active-lease
   * @secure
   */
  dhcpActiveLeaseList = (
    query: {
      end: string
      /** 分组ID */
      groupID: number
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-active-lease`,
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
   * @tags DHCPReport
   * @name DhcpFingerprintStasList
   * @summary 指纹分布统计
   * @request GET:/report/dhcp-fingerprint-stas
   * @secure
   */
  dhcpFingerprintStasList = (
    query: {
      /** 分组ID */
      groupID: number
      keyword?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-fingerprint-stas`,
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
   * @tags DHCPReport
   * @name DhcpImportantDhcpPercentList
   * @summary 重点网络分析-DHCP利用率
   * @request GET:/report/dhcp-important-dhcp-percent
   * @secure
   */
  dhcpImportantDhcpPercentList = (
    query: {
      end: string
      /** 网络分组ID */
      networkID?: number
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-important-dhcp-percent`,
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
   * @tags DHCPReport
   * @name DhcpImportantPoolLeaseList
   * @summary 重点网络分析-地址池租约统计
   * @request GET:/report/dhcp-important-pool-lease
   * @secure
   */
  dhcpImportantPoolLeaseList = (
    query: {
      end: string
      /** 网络分组ID */
      networkID?: number
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-important-pool-lease`,
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
   * @tags DHCPReport
   * @name DhcpImportantPoolPercentList
   * @summary 重点网络分析-地址池利用率
   * @request GET:/report/dhcp-important-pool-percent
   * @secure
   */
  dhcpImportantPoolPercentList = (
    query: {
      end: string
      /** 网络分组ID */
      networkID?: number
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-important-pool-percent`,
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
   * @tags DHCPReport
   * @name DhcpImportantUsageListList
   * @summary 重点网络分析-列表
   * @request GET:/report/dhcp-important-usage-list
   * @secure
   */
  dhcpImportantUsageListList = (
    query: {
      /** 分组ID */
      groupID: number
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-important-usage-list`,
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
   * @tags DHCPReport
   * @name DhcpLpsStatsList
   * @summary 业务流量统计
   * @request GET:/report/dhcp-lps-stats
   * @secure
   */
  dhcpLpsStatsList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-lps-stats`,
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
   * @tags DHCPReport
   * @name DhcpPacketStasIpv4List
   * @summary 报文统计
   * @request GET:/report/dhcp-packet-stas-ipv4
   * @secure
   */
  dhcpPacketStasIpv4List = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-packet-stas-ipv4`,
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
   * @tags DHCPReport
   * @name DhcpTopAddressList
   * @summary DHCP 地址使用率Topn
   * @request GET:/report/dhcp-top-address
   * @secure
   */
  dhcpTopAddressList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-top-address`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags DHCPReport
   * @name DhcpTopMacList
   * @summary DHCP Topn Mac地址
   * @request GET:/report/dhcp-top-mac
   * @secure
   */
  dhcpTopMacList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-top-mac`,
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
   * @tags DHCPReport
   * @name DhcpTopNetworkList
   * @summary Top网络分析
   * @request GET:/report/dhcp-top-network
   * @secure
   */
  dhcpTopNetworkList = (
    query: {
      /** 分组ID */
      groupID: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportMapVOSwagger, any>({
      path: `/report/dhcp-top-network`,
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
   * @tags Report
   * @name DnsCountryList
   * @summary 国家解析分布
   * @request GET:/report/dns-country
   * @secure
   */
  dnsCountryList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelMapStringSampleValue, any>({
      path: `/report/dns-country`,
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
   * @tags Report
   * @name DnsSubdivisionList
   * @summary 省解析分布
   * @request GET:/report/dns-subdivision
   * @secure
   */
  dnsSubdivisionList = (
    query: {
      end: string
      instance?: string
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelMapStringSampleValue, any>({
      path: `/report/dns-subdivision`,
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
   * @tags Report
   * @name DynamicReportList
   * @summary 动态报表
   * @request GET:/report/dynamic-report
   * @secure
   */
  dynamicReportList = (
    query: {
      /** Code和RuleID二选一 */
      code?: string
      /** 查询二层分析时，传一层分析的指标的值 */
      dataValue?: string
      end: string
      instance?: string
      /** Code和RuleID二选一 */
      ruleID?: number
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelDynamicReportVO, any>({
      path: `/report/dynamic-report`,
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
   * @tags Report
   * @name DynamicReportExportList
   * @summary 动态报表下载
   * @request GET:/report/dynamic-report/export
   * @secure
   */
  dynamicReportExportList = (
    query: {
      end: string
      instance?: string
      ruleIDs?: number[]
      start: string
    },
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/report/dynamic-report/export`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Report
   * @name ListList
   * @summary 报表巡检策略查询
   * @request GET:/report/list
   * @secure
   */
  listList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      policyID?: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelReportListQueryVO, any>({
      path: `/report/list`,
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
   * @tags Report
   * @name ListDelete
   * @summary 报表巡检报告删除
   * @request DELETE:/report/list
   * @secure
   */
  listDelete = (req: ModelReportListDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/list`,
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
   * @tags Report
   * @name ListDownloadCreate
   * @summary 报告下载
   * @request POST:/report/list/download
   * @secure
   */
  listDownloadCreate = (req: ModelReportListDownloadDTO, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/report/list/download`,
      method: 'POST',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Report
   * @name MenuList
   * @summary 报表菜单查询
   * @request GET:/report/menu
   * @secure
   */
  menuList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelReportMenuQueryVO, any>({
      path: `/report/menu`,
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
   * @tags Report
   * @name MenuCreate
   * @summary 报表菜单创建
   * @request POST:/report/menu
   * @secure
   */
  menuCreate = (req: ModelReportMenuCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/menu`,
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
   * @tags Report
   * @name MenuDelete
   * @summary 报表菜单删除
   * @request DELETE:/report/menu
   * @secure
   */
  menuDelete = (req: ModelReportMenuDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/menu`,
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
   * @tags Report
   * @name MenuEnableUpdate
   * @summary 报表菜单启用/禁用
   * @request PUT:/report/menu/enable
   * @secure
   */
  menuEnableUpdate = (req: ModelReportMenuEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/menu/enable`,
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
   * @tags Report
   * @name MenuUpdate
   * @summary 报表菜单更新
   * @request PUT:/report/menu/{id}
   * @secure
   */
  menuUpdate = (id: string, req: ModelReportMenuUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/menu/${id}`,
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
   * @tags Report
   * @name PolicyList
   * @summary 报表巡检策略查询
   * @request GET:/report/policy
   * @secure
   */
  policyList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelReportPolicyQueryVO, any>({
      path: `/report/policy`,
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
   * @tags Report
   * @name PolicyCreate
   * @summary 报表巡检策略创建
   * @request POST:/report/policy
   * @secure
   */
  policyCreate = (req: ModelReportPolicyCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/policy`,
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
   * @tags Report
   * @name PolicyDelete
   * @summary 报表巡检策略删除
   * @request DELETE:/report/policy
   * @secure
   */
  policyDelete = (req: ModelReportPolicyDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/policy`,
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
   * @tags Report
   * @name PolicyRunCreate
   * @summary 报表巡检策略执行
   * @request POST:/report/policy/run
   * @secure
   */
  policyRunCreate = (req: ModelReportPolicyRunDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/policy/run`,
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
   * @tags Report
   * @name PolicyUpdate
   * @summary 报表巡检策略更新
   * @request PUT:/report/policy/{id}
   * @secure
   */
  policyUpdate = (id: string, req: ModelReportPolicyUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/policy/${id}`,
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
   * @tags Report
   * @name RuleList
   * @summary 报表规则查询
   * @request GET:/report/rule
   * @secure
   */
  ruleList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelReportRuleQueryVO, any>({
      path: `/report/rule`,
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
   * @tags Report
   * @name RuleCreate
   * @summary 报表规则创建
   * @request POST:/report/rule
   * @secure
   */
  ruleCreate = (req: ModelReportRuleCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/rule`,
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
   * @tags Report
   * @name RuleDelete
   * @summary 报表规则删除
   * @request DELETE:/report/rule
   * @secure
   */
  ruleDelete = (req: ModelReportRuleDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/rule`,
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
   * @tags Report
   * @name RuleEnableUpdate
   * @summary 报表规则启用/禁用
   * @request PUT:/report/rule/enable
   * @secure
   */
  ruleEnableUpdate = (req: ModelReportRuleEnableDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/rule/enable`,
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
   * @tags Report
   * @name RuleUpdate
   * @summary 报表规则更新
   * @request PUT:/report/rule{id}
   * @secure
   */
  ruleUpdate = (id: string, req: ModelReportRuleUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/rule${id}`,
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
   * @tags Report
   * @name TemplateList
   * @summary 报表巡检模版查询
   * @request GET:/report/template
   * @secure
   */
  templateList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelReportTemplateQueryVO, any>({
      path: `/report/template`,
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
   * @tags Report
   * @name TemplateCreate
   * @summary 报表巡检模版创建
   * @request POST:/report/template
   * @secure
   */
  templateCreate = (req: ModelReportTemplateCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/template`,
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
   * @tags Report
   * @name TemplateDelete
   * @summary 报表巡检模版删除
   * @request DELETE:/report/template
   * @secure
   */
  templateDelete = (req: ModelReportTemplateDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/template`,
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
   * @tags Report
   * @name TemplateDetail
   * @summary 报表巡检模版查询详情页
   * @request GET:/report/template/{id}
   * @secure
   */
  templateDetail = (id: number, params: RequestParams = {}) =>
    this.request<ModelReportTemplateOnlyDTO, any>({
      path: `/report/template/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Report
   * @name TemplateUpdate
   * @summary 报表巡检模版更新
   * @request PUT:/report/template/{id}
   * @secure
   */
  templateUpdate = (id: string, req: ModelReportTemplateUpdateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/report/template/${id}`,
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
   * @tags Report
   * @name ThreatIntelEventList
   * @summary 威胁情报报表查询-事件
   * @request GET:/report/threat-intel/event
   * @secure
   */
  threatIntelEventList = (
    query: {
      endTime: string
      level?: 'high' | 'middle' | 'low'
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelReportThreatIntelEvent, any>({
      path: `/report/threat-intel/event`,
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
   * @tags Report
   * @name ThreatIntelEventStatisticsList
   * @summary 威胁情报报表查询-威胁事件统计饼图
   * @request GET:/report/threat-intel/event-statistics
   * @secure
   */
  threatIntelEventStatisticsList = (
    query: {
      endTime: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseArrayModelReportThreatIntelStatisticsVO, any>({
      path: `/report/threat-intel/event-statistics`,
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
   * @tags Report
   * @name ThreatIntelHostList
   * @summary 威胁情报报表查询-告警主机
   * @request GET:/report/threat-intel/host
   * @secure
   */
  threatIntelHostList = (
    query: {
      endTime: string
      ip?: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelReportThreatIntelHostQueryVO, any>({
      path: `/report/threat-intel/host`,
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
   * @tags Report
   * @name ThreatIntelInterceptCurveList
   * @summary 威胁情报报表查询-拦截曲线
   * @request GET:/report/threat-intel/intercept-curve
   * @secure
   */
  threatIntelInterceptCurveList = (
    query: {
      endTime: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/report/threat-intel/intercept-curve`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Report
   * @name ThreatIntelStatisticsList
   * @summary 威胁情报报表查询-威胁统计
   * @request GET:/report/threat-intel/statistics
   * @secure
   */
  threatIntelStatisticsList = (
    query: {
      endTime: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseModelReportThreatIntelStatisticsVO, any>({
      path: `/report/threat-intel/statistics`,
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
   * @tags Report
   * @name ThreatIntelTopDomainList
   * @summary 威胁情报报表查询-Top域名
   * @request GET:/report/threat-intel/top-domain
   * @secure
   */
  threatIntelTopDomainList = (
    query: {
      endTime: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/report/threat-intel/top-domain`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Report
   * @name ThreatIntelTopEventList
   * @summary 威胁情报报表查询-Top事件
   * @request GET:/report/threat-intel/top-event
   * @secure
   */
  threatIntelTopEventList = (
    query: {
      endTime: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/report/threat-intel/top-event`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Report
   * @name ThreatIntelTopIpList
   * @summary 威胁情报报表查询-Top IP
   * @request GET:/report/threat-intel/top-ip
   * @secure
   */
  threatIntelTopIpList = (
    query: {
      endTime: string
      /** @max 5000 */
      limit?: number
      startTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/report/threat-intel/top-ip`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
