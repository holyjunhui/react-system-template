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
  UtilsDataResponseBool,
  UtilsPageDataWorkorderWorkOrderAuditSettingsQueryVO,
  UtilsPageDataWorkorderWorkOrderQueryDTO,
  WorkorderWorkOrderAuditDTO,
  WorkorderWorkOrderAuditSettingsCreateDTO,
  WorkorderWorkOrderAuditSettingsDeleteDTO,
  WorkorderWorkOrderAuditSettingsUpdateDTO,
  WorkorderWorkOrderGetVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class WorkOrder<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags WorkOrder
   * @name WorkOrderList
   * @summary 工单查询
   * @request GET:/work-order
   * @secure
   */
  workOrderList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
      status?: 'pending' | 'approved' | 'rejected'
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataWorkorderWorkOrderQueryDTO, any>({
      path: `/work-order`,
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
   * @tags WorkOrder
   * @name WorkOrderCreate
   * @summary 工单审核
   * @request POST:/work-order
   * @secure
   */
  workOrderCreate = (req: WorkorderWorkOrderAuditDTO, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/work-order`,
      method: 'POST',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags WorkOrder
   * @name GetWorkOrder
   * @summary 工单详情
   * @request GET:/work-order/:id
   * @secure
   */
  getWorkOrder = (id: string, params: RequestParams = {}) =>
    this.request<WorkorderWorkOrderGetVO, any>({
      path: `/work-order/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags WorkOrder
   * @name AuditSettingsList
   * @summary 工单审核设置查询
   * @request GET:/work-order/audit-settings
   * @secure
   */
  auditSettingsList = (
    query: {
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataWorkorderWorkOrderAuditSettingsQueryVO, any>({
      path: `/work-order/audit-settings`,
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
   * @tags WorkOrder
   * @name AuditSettingsCreate
   * @summary 工单审核设置新增
   * @request POST:/work-order/audit-settings
   * @secure
   */
  auditSettingsCreate = (
    req: WorkorderWorkOrderAuditSettingsCreateDTO,
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/work-order/audit-settings`,
      method: 'POST',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags WorkOrder
   * @name AuditSettingsDelete
   * @summary 工单审核设置删除
   * @request DELETE:/work-order/audit-settings
   * @secure
   */
  auditSettingsDelete = (
    req: WorkorderWorkOrderAuditSettingsDeleteDTO,
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/work-order/audit-settings`,
      method: 'DELETE',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags WorkOrder
   * @name AuditSettingsIdUpdate
   * @summary 工单审核设置修改
   * @request PUT:/work-order/audit-settings/:id
   * @secure
   */
  auditSettingsIdUpdate = (
    id: string,
    req: WorkorderWorkOrderAuditSettingsUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/work-order/audit-settings/${id}`,
      method: 'PUT',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags WorkOrder
   * @name AuditSettingsIsApplyRoleList
   * @summary 工单审核设置是否是申请角色
   * @request GET:/work-order/audit-settings/is-apply-role
   * @secure
   */
  auditSettingsIsApplyRoleList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseBool, any>({
      path: `/work-order/audit-settings/is-apply-role`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
