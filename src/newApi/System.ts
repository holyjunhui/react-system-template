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
  BootstrapSystemInitInfoDTO,
  CertCert,
  CsrCsr,
  CustomattributesCustomAttributesCreateDTO,
  CustomattributesCustomAttributesDeleteDTO,
  CustomattributesCustomAttributesRuleUpdateDTO,
  CustomattributesCustomAttributesUpdateDTO,
  KmsDeleteCertReq,
  KmsDeployCaReq,
  KmsImportCertReq,
  ModelAutoBackupSetting,
  ModelLicenseAllowQueryDTO,
  ModelLicenseExportDTO,
  ModelLicenseFuncQueryVO,
  ModelLicenseImportDTO,
  ModelLicenseQueryDTO,
  ModelSystemBackupCreateDTO,
  ModelSystemBackupDeleteDTO,
  ModelSystemBackupDownloadDTO,
  ModelSystemBackupRecoverDTO,
  ModelUpgradePkgDeleteDTO,
  ModelUpgradePkgInstallDTO,
  ModelUpgradePkgRollBackDTO,
  StructsCityHotSetting,
  StructsLoginSetting,
  StructsPasswordSetting,
  UtilsDataResponseBootstrapSystemStatusInfoVO,
  UtilsDataResponseCustomattributesCustomAttributesDetailVO,
  UtilsDataResponseKmsGetCertRes,
  UtilsDataResponseModelAutoBackupSetting,
  UtilsDataResponseSqlmodelBannerSetting,
  UtilsDataResponseStructsCityHotSetting,
  UtilsDataResponseStructsLoginSetting,
  UtilsDataResponseStructsPasswordSetting,
  UtilsDataResponseUtilsPageDataCustomattributesCustomAttributesQueryVO,
  UtilsDataResponseUtilsPageDataModelSystemBackupQueryVO,
  UtilsEmptyResponse,
  UtilsPageDataGitlabYamuComHyperdnsApiServerInternalDeviceModelUpgradePkgCommon,
  UtilsPageDataKmsQueryRes,
  UtilsPageDataModelLicenseAllowQueryVO,
  UtilsPageDataModelLicenseHistoryQueryVO,
  UtilsPageDataModelLicenseShareQueryVO,
  UtilsPageDataModelUpgradeDeviceQueryVO,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class System<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags System
   * @name BackupList
   * @summary 备份查询
   * @request GET:/system/backup
   * @secure
   */
  backupList = (
    query: {
      filename?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataModelSystemBackupQueryVO, any>({
      path: `/system/backup`,
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
   * @tags System
   * @name BackupCreate
   * @summary 备份新增
   * @request POST:/system/backup
   * @secure
   */
  backupCreate = (req: ModelSystemBackupCreateDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/backup`,
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
   * @tags System
   * @name BackupDelete
   * @summary 备份删除
   * @request DELETE:/system/backup
   * @secure
   */
  backupDelete = (req: ModelSystemBackupDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/backup`,
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
   * @tags System
   * @name BackupAutoList
   * @summary 自动备份获取
   * @request GET:/system/backup/auto
   * @secure
   */
  backupAutoList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseModelAutoBackupSetting, any>({
      path: `/system/backup/auto`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name BackupAutoUpdate
   * @summary 自动备份设置
   * @request PUT:/system/backup/auto
   * @secure
   */
  backupAutoUpdate = (req: ModelAutoBackupSetting, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/backup/auto`,
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
   * @tags System
   * @name BackupUploadCreate
   * @summary 备份上传
   * @request POST:/system/backup/upload
   * @secure
   */
  backupUploadCreate = (
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
      path: `/system/backup/upload`,
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
   * @tags System
   * @name BackupDownloadDetail
   * @summary 备份下载
   * @request GET:/system/backup/{id}/download
   * @secure
   */
  backupDownloadDetail = (
    id: string,
    req: ModelSystemBackupDownloadDTO,
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/system/backup/${id}/download`,
      method: 'GET',
      body: req,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name BackupRecoverUpdate
   * @summary 备份恢复
   * @request PUT:/system/backup/{id}/recover
   * @secure
   */
  backupRecoverUpdate = (
    id: number,
    req: ModelSystemBackupRecoverDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/backup/${id}/recover`,
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
   * @tags System
   * @name BannerSettingList
   * @summary 获取Banner设置
   * @request GET:/system/banner-setting
   * @secure
   */
  bannerSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseSqlmodelBannerSetting, any>({
      path: `/system/banner-setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name BannerSettingUpdate
   * @summary 修改Banner设置
   * @request PUT:/system/banner-setting
   * @secure
   */
  bannerSettingUpdate = (
    data: {
      /** 标题 */
      title: string
      /** 公司名称 */
      companyName: string
      /**
       * LOGO，仅支持png和jpg格式，不能超过1M
       * @format binary
       */
      logo: File
      /** 提示信息 */
      tips: string
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/banner-setting`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Cert
   * @name CertList
   * @summary 查询证书
   * @request GET:/system/cert
   * @secure
   */
  certList = (
    query: {
      isCa?: boolean
      name?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsPageDataKmsQueryRes, any>({
      path: `/system/cert`,
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
   * @tags Cert
   * @name CertCreate
   * @summary 生成证书
   * @request POST:/system/cert
   * @secure
   */
  certCreate = (req: CertCert, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/cert`,
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
   * @tags Cert
   * @name CertDelete
   * @summary 删除证书
   * @request DELETE:/system/cert
   * @secure
   */
  certDelete = (req: KmsDeleteCertReq, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/cert`,
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
   * @tags Cert
   * @name CertCsrList
   * @summary 下载 CSR
   * @request GET:/system/cert/csr
   * @secure
   */
  certCsrList = (params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/cert/csr`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Cert
   * @name CertCsrCreate
   * @summary 生成 CSR
   * @request POST:/system/cert/csr
   * @secure
   */
  certCsrCreate = (req: CsrCsr, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/cert/csr`,
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
   * @tags Cert
   * @name CertExportDetail
   * @summary 下载证书
   * @request GET:/system/cert/export/{id}
   * @secure
   */
  certExportDetail = (id: string, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/cert/export/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Cert
   * @name CertImportCreate
   * @summary 导入证书
   * @request POST:/system/cert/import
   * @secure
   */
  certImportCreate = (req: KmsImportCertReq, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/cert/import`,
      method: 'POST',
      body: req,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Cert
   * @name CertDetail
   * @summary 查看证书
   * @request GET:/system/cert/{id}
   * @secure
   */
  certDetail = (id: string, params: RequestParams = {}) =>
    this.request<UtilsDataResponseKmsGetCertRes, any>({
      path: `/system/cert/${id}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Cert
   * @name CertDeployCreate
   * @summary 部署证书
   * @request POST:/system/cert/{id}/deploy
   * @secure
   */
  certDeployCreate = (id: string, req: KmsDeployCaReq, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/cert/${id}/deploy`,
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
   * @tags System
   * @name CityHotSettingList
   * @summary 城市热点设置获取
   * @request GET:/system/city-hot/setting
   * @secure
   */
  cityHotSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsCityHotSetting, any>({
      path: `/system/city-hot/setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name CityHotSettingUpdate
   * @summary 热点城市设置
   * @request PUT:/system/city-hot/setting
   * @secure
   */
  cityHotSettingUpdate = (req: StructsCityHotSetting, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/city-hot/setting`,
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
   * @tags System
   * @name CustomAttributesList
   * @summary 自定义属性查询
   * @request GET:/system/custom-attributes
   * @secure
   */
  customAttributesList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsDataResponseUtilsPageDataCustomattributesCustomAttributesQueryVO, any>({
      path: `/system/custom-attributes`,
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
   * @tags System
   * @name CustomAttributesCreate
   * @summary 自定义属性新增
   * @request POST:/system/custom-attributes
   * @secure
   */
  customAttributesCreate = (
    req: CustomattributesCustomAttributesCreateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/custom-attributes`,
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
   * @tags System
   * @name CustomAttributesDelete
   * @summary 自定义属性删除
   * @request DELETE:/system/custom-attributes
   * @secure
   */
  customAttributesDelete = (
    req: CustomattributesCustomAttributesDeleteDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/custom-attributes`,
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
   * @tags System
   * @name CustomAttributesMenuList
   * @summary 自定义属性详情
   * @request GET:/system/custom-attributes/:menu
   * @secure
   */
  customAttributesMenuList = (menu: string, params: RequestParams = {}) =>
    this.request<UtilsDataResponseCustomattributesCustomAttributesDetailVO, any>({
      path: `/system/custom-attributes/${menu}`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name CustomAttributesRuleList
   * @summary 自定义属性规则查询
   * @request GET:/system/custom-attributes/rule
   * @secure
   */
  customAttributesRuleList = (params: RequestParams = {}) =>
    this.request<CustomattributesCustomAttributesRuleUpdateDTO, any>({
      path: `/system/custom-attributes/rule`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name CustomAttributesRuleUpdate
   * @summary 自定义属性规则更新
   * @request PUT:/system/custom-attributes/rule
   * @secure
   */
  customAttributesRuleUpdate = (
    req: CustomattributesCustomAttributesRuleUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/custom-attributes/rule`,
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
   * @tags System
   * @name CustomAttributesUpdate
   * @summary 自定义属性修改
   * @request PUT:/system/custom-attributes/{id}
   * @secure
   */
  customAttributesUpdate = (
    id: number,
    req: CustomattributesCustomAttributesUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/custom-attributes/${id}`,
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
   * @tags System
   * @name InitCreate
   * @summary 系统初始化
   * @request POST:/system/init
   * @secure
   */
  initCreate = (req: BootstrapSystemInitInfoDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/init`,
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
   * @tags license
   * @name LicenseDevicesList
   * @summary License设备功能
   * @request GET:/system/license/devices
   * @secure
   */
  licenseDevicesList = (req: ModelLicenseAllowQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelLicenseAllowQueryVO, any>({
      path: `/system/license/devices`,
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
   * @tags license
   * @name LicenseExportCreate
   * @summary 导出设备指纹
   * @request POST:/system/license/export
   * @secure
   */
  licenseExportCreate = (req: ModelLicenseExportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/license/export`,
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
   * @tags license
   * @name LicenseFuncsList
   * @summary License功能
   * @request GET:/system/license/funcs
   * @secure
   */
  licenseFuncsList = (params: RequestParams = {}) =>
    this.request<ModelLicenseFuncQueryVO, any>({
      path: `/system/license/funcs`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags license
   * @name LicenseHistoryList
   * @summary License历史
   * @request GET:/system/license/history
   * @secure
   */
  licenseHistoryList = (req: ModelLicenseQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelLicenseHistoryQueryVO, any>({
      path: `/system/license/history`,
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
   * @tags license
   * @name LicenseImportCreate
   * @summary License导入
   * @request POST:/system/license/import
   * @secure
   */
  licenseImportCreate = (req: ModelLicenseImportDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/license/import`,
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
   * @tags license
   * @name LicenseSharesList
   * @summary License共享许可功能
   * @request GET:/system/license/shares
   * @secure
   */
  licenseSharesList = (req: ModelLicenseQueryDTO, params: RequestParams = {}) =>
    this.request<UtilsPageDataModelLicenseShareQueryVO, any>({
      path: `/system/license/shares`,
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
   * @tags System
   * @name LoginSettingList
   * @summary 获取登录设置
   * @request GET:/system/login-setting
   * @secure
   */
  loginSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsLoginSetting, any>({
      path: `/system/login-setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name LoginSettingUpdate
   * @summary 修改登录设置
   * @request PUT:/system/login-setting
   * @secure
   */
  loginSettingUpdate = (req: StructsLoginSetting, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/login-setting`,
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
   * @tags System
   * @name PasswordSettingList
   * @summary 获取密码设置
   * @request GET:/system/password-setting
   * @secure
   */
  passwordSettingList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseStructsPasswordSetting, any>({
      path: `/system/password-setting`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name PasswordSettingUpdate
   * @summary 修改密码设置
   * @request PUT:/system/password-setting
   * @secure
   */
  passwordSettingUpdate = (req: StructsPasswordSetting, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/password-setting`,
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
   * @tags System
   * @name StatusList
   * @summary 查询系统状态(登录页面使用)
   * @request GET:/system/status
   * @secure
   */
  statusList = (params: RequestParams = {}) =>
    this.request<UtilsDataResponseBootstrapSystemStatusInfoVO, any>({
      path: `/system/status`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags System
   * @name UpgradeList
   * @summary 升级包查询
   * @request GET:/system/upgrade
   * @secure
   */
  upgradeList = (
    query: {
      keyword?: string
      /** @example 1 */
      page: number
      /** @example 10 */
      pageSize: number
    },
    params: RequestParams = {}
  ) =>
    this.request<
      UtilsPageDataGitlabYamuComHyperdnsApiServerInternalDeviceModelUpgradePkgCommon,
      any
    >({
      path: `/system/upgrade`,
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
   * @tags System
   * @name UpgradeDelete
   * @summary 升级包删除
   * @request DELETE:/system/upgrade
   * @secure
   */
  upgradeDelete = (req: ModelUpgradePkgDeleteDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/upgrade`,
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
   * @tags System
   * @name UpgradeImportCreate
   * @summary 升级包导入
   * @request POST:/system/upgrade/import
   * @secure
   */
  upgradeImportCreate = (
    data: {
      /**
       * 上传的文件
       * @format binary
       */
      file: File
      /** 文件的md5值 */
      md5: string
      /** 总分片数 */
      chunks: number
      /** 当前分片 */
      chunk: number
    },
    params: RequestParams = {}
  ) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/upgrade/import`,
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
   * @tags System
   * @name UpgradeInstallCreate
   * @summary 安装包安装
   * @request POST:/system/upgrade/install
   * @secure
   */
  upgradeInstallCreate = (req: ModelUpgradePkgInstallDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/upgrade/install`,
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
   * @tags System
   * @name UpgradeRollbackCreate
   * @summary 安装包回滚
   * @request POST:/system/upgrade/rollback
   * @secure
   */
  upgradeRollbackCreate = (req: ModelUpgradePkgRollBackDTO, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/system/upgrade/rollback`,
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
   * @tags System
   * @name UpgradeStatusList
   * @summary 设备升级状态查询
   * @request GET:/system/upgrade/status
   * @secure
   */
  upgradeStatusList = (
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
    this.request<UtilsPageDataModelUpgradeDeviceQueryVO, any>({
      path: `/system/upgrade/status`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
