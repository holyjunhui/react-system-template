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

export type BigInt = object

export interface BootstrapDeviceNTP {
  enabled?: boolean
  remoteAddresses?: string[]
  server?: boolean
}

export interface BootstrapSystemInitInfoDTO {
  deviceNTP: BootstrapDeviceNTP
  groupName: string
  ip: string
  name: string
  password: string
  services: string[]
  verifyCode: string
}

export interface BootstrapSystemStatusInfoVO {
  inited?: boolean
  ip?: string
  managerIP?: string
  status?: string
}

export interface CertCert {
  algorithm:
    | 'ECDSA-SHA256'
    | 'ECDSA-SHA384'
    | 'RSA-SHA256'
    | 'RSA-SHA384'
    | 'RSA-SHA512'
    | 'RSAPSS-SHA256'
    | 'RSAPSS-SHA384'
    | 'RSAPSS-SHA512'
  commonName: string
  country?: string
  emailAddress?: string
  length?: 1024 | 2048 | 4096
  locality?: string
  organization?: string
  organizationalUnit?: string
  postalCode?: string
  province?: string
  remark?: string
  san_enabled?: boolean
  sans?: CertSAN[]
  streetAddress?: string
  validDay: number
}

export interface CertSAN {
  type?: 'ip' | 'dns' | 'url' | 'email'
  value: string
}

export interface ConfigdbDomainLibraryType {
  /** CreatedAt holds the value of the "created_at" field. */
  createdAt?: string
  /** CreatedBy holds the value of the "created_by" field. */
  createdBy?: number
  /** ID of the ent. */
  id?: number
  /** Name holds the value of the "name" field. */
  name?: string
  /** Remark holds the value of the "remark" field. */
  remark?: string
  /** 数据来源：内置，自定义 */
  source?: string
  /** UpdatedAt holds the value of the "updated_at" field. */
  updatedAt?: string
  /** UpdatedBy holds the value of the "updated_by" field. */
  updatedBy?: number
}

export enum ConstsDHCPPoolCfgMode {
  CfgAddr = 'addr',
  CfgPrefix = 'prefix',
  CfgAll = 'all',
}

export enum ConstsDHCPPoolType {
  IPStatusReserved = 'reserved',
  IPStatusFixed = 'fixed',
  FixedPool = 'fixed',
  DynamicPool = 'dynamic',
  ReservedPool = 'reserved',
}

export interface CsrCsr {
  algorithm:
    | 'ECDSA-SHA256'
    | 'ECDSA-SHA384'
    | 'RSA-SHA256'
    | 'RSA-SHA384'
    | 'RSA-SHA512'
    | 'RSAPSS-SHA256'
    | 'RSAPSS-SHA384'
    | 'RSAPSS-SHA512'
  commonName: string
  country?: string
  emailAddress?: string
  length?: 1024 | 2048 | 4096
  locality?: string
  organization?: string
  organizationalUnit?: string
  postalCode?: string
  province?: string
  remark?: string
  san_enabled?: boolean
  sans?: CsrSAN[]
  streetAddress?: string
}

export interface CsrSAN {
  type?: 'ip' | 'dns' | 'url' | 'email'
  value: string
}

export interface CustomattributesCustomAttributesCreateDTO {
  /** 自定义属性 */
  attributes: string[]
  /** 功能 */
  menu: string
}

export interface CustomattributesCustomAttributesDeleteDTO {
  ids: number[]
}

export interface CustomattributesCustomAttributesDetailVO {
  attributes?: string[]
  attributesDetails?: CustomattributesCustomAttributesRule[]
  id?: number
  menu?: string
  type?: string
}

export interface CustomattributesCustomAttributesQueryVO {
  attributes?: string[]
  attributesNames?: string[]
  id?: number
  menu?: string
  type?: string
}

export interface CustomattributesCustomAttributesRule {
  /**
   * AD域属性名
   * @maxLength 255
   */
  adValue?: string
  id?: string
  /**
   * 属性名 由数字、字母、中文、下划线、中线和点组成，不能以中线开头
   * @minLength 1
   * @maxLength 255
   */
  name: string
  /** 下拉框元素  由数字、字母、中文、下划线、中线和点组成，不能以中线开头 */
  options?: string[]
  /** 是否必填 */
  required?: boolean
  /** 属性类型 邮件 电话 文本 数字 单选下拉框 多选下拉框 AD域字段 */
  rule?: 'mail' | 'phone' | 'txt' | 'num' | 'select' | 'multiSelect' | 'ad' | 'chinese'
}

export interface CustomattributesCustomAttributesRuleUpdateDTO {
  /** @maxItems 100 */
  custom: CustomattributesCustomAttributesRule[]
}

export interface CustomattributesCustomAttributesUpdateDTO {
  /** 自定义属性 */
  attributes: string[]
  id: number
}

export interface DomainrrSoa {
  /** @format fqdn */
  authorityMailbox: string
  /**
   * @format 1-4294967295
   * @min 1
   * @max 4294967295
   */
  expireTime: number
  /**
   * @format 0-4294967295
   * @min 0
   * @max 4294967295
   */
  minimumTtl?: number
  /** @format fqdn */
  primaryNameServer: string
  /**
   * @format 1-4294967295
   * @min 1
   * @max 4294967295
   */
  refreshInterval: number
  /**
   * @format 1-4294967295
   * @min 1
   * @max 4294967295
   */
  retryInterval: number
  /**
   * @format 1-4294967295
   * @min 1
   * @max 4294967295
   */
  serialNumber?: number
}

export interface EffectrangeEffectRangeUpdateDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface GitlabYamuComHyperdnsApiServerInternalDeviceModelUpgradePkgCommon {
  createAt?: string
  createBy?: string
  description?: string
  fileName: string
  fileSize: number
  version?: string
}

export interface IpstatusDhcpIpLeaseStatus {
  domain?: string
  endTime?: string
  fingerPrint?: string
  hostname?: string
  leaseTime?: string
  startTime?: string
  status?: string
}

export interface IpstatusDhcpIpMacStatus {
  duid?: string
  interface?: string
  mac?: string
  macFactory?: string
}

export interface IpstatusDhcpIpScanStatus {
  duid?: string
  interfaces?: string[]
  mac?: string
  macFactory?: string
  netBios?: string
  os?: string
  scanTime?: string
}

export interface IpstatusDhcpIpStatusQueryMapVO {
  list?: IpstatusDhcpIpStatusVO[]
  lowerIP?: string
  name?: string
  total?: string
  upperIP?: string
  visible?: TableTableColumn[]
}

export interface IpstatusDhcpIpStatusVO {
  custom?: Record<string, any>
  id?: number
  ip?: string
  isDynamic?: boolean
  isFixed?: boolean
  isReserved?: boolean
  /** 租赁状态 */
  leaseStatus?: IpstatusDhcpIpLeaseStatus
  macStatus?: IpstatusDhcpIpMacStatus
  networkID?: number
  scanStatus?: IpstatusDhcpIpScanStatus
  /** conflict reserved unused fixed active unmanaged sealUp bond */
  status?: string
  /** dynamic fixed reserved */
  type?: string
}

export interface KmsDeleteCertReq {
  ids: number[]
  isCa?: boolean
}

export type KmsDeployCaReq = object

export interface KmsGetCertRes {
  id?: number
  issuer?: string
  name?: string
  notAfter?: string
  notBefore?: string
  publicKeyAlgorithm?: string
  serialNumber?: string
  signatureAlgorithm?: string
  status?: string
  subject?: string
}

export interface KmsImportCertReq {
  file: MultipartFileHeader
}

export interface KmsQueryRes {
  id?: number
  issuer?: string
  name?: string
  notAfter?: string
  notBefore?: string
  publicKeyAlgorithm?: string
  serialNumber?: string
  signatureAlgorithm?: string
  status?: string
  subject?: string
}

export interface LogDhcpFaultHistoryQueryVO {
  /** 线路信息 */
  circuitID?: string
  device?: string
  level?: string
  macDUID?: string
  /** 错误内容 */
  message?: string
  /** 中继IP */
  relayIP?: string
  updatedAt?: string
}

export interface LogDhcpIPLeaseHistoryQueryVO {
  addressStatus?: string
  addressType?: string
  circuitID?: string
  device?: string
  fingerprintsID?: string
  fingerprintsName?: string
  hostname?: string
  ip?: string
  leaseDuration?: string
  leaseEndTime?: string
  leaseStartTime?: string
  leaseStatus?: string
  mac?: string
  updatedAt?: string
}

export interface LogDhcpPacketHistoryQueryVO {
  /** 线路信息 */
  circuitID?: string
  /** 客户端地址,客户端地址为报文的源地址 */
  clientAddr?: string
  /** 设备名称 */
  device?: string
  deviceIP?: string
  /** 域名服务器 */
  dns?: string
  fingerprintsID?: string
  /** 指纹 */
  fingerprintsName?: string
  /** 网关 */
  gatewayAddr?: string
  /** 主机名 */
  host?: string
  /** IP地址 */
  ip?: string
  /** 租约时间 */
  lease?: string
  /** MAC地址 */
  mac?: string
  /** 报文类型 */
  msgType?: string
  /** 中继地址 */
  relay?: string
  /** 服务端标识 */
  serverIP?: string
  /** TID */
  tid?: string
  /** 时间 */
  time?: string
  /** 更新时间 */
  updatedAt?: string
}

export interface LogLogBackupConfigCreateDTO {
  deviceID?: number
  enabled?: boolean
  password?: string
  path: string
  plan: StructsJobPlan
  protocol?: 'ftp' | 'sftp'
  /** @maxLength 255 */
  remark?: string
  server: string
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
  username?: string
}

export interface LogLogBackupConfigDeleteDTO {
  ids: number[]
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
}

export interface LogLogBackupConfigEnableDTO {
  enabled?: boolean
  ids: number[]
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
}

export interface LogLogBackupConfigQueryVO {
  deviceName?: string
  enabled?: boolean
  id?: number
  path?: string
  plan?: StructsJobPlan
  protocol?: string
  remark?: string
  server?: string
  username?: string
}

export interface LogLogBackupConfigUpdateDTO {
  enabled?: boolean
  password?: string
  path: string
  plan: StructsJobPlan
  protocol?: 'ftp' | 'sftp'
  /** @maxLength 255 */
  remark?: string
  server: string
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
  username?: string
}

export interface LogLogDnsQueryVO {
  answer?: string
  category?: string
  city?: string
  continent?: string
  country?: string
  isp?: string
  latency?: number
  qName?: string
  qType?: string
  rCode?: string
  srcIP?: string
  subdivision?: string
  time?: string
}

export interface LogLogHistoryQueryVO {
  content?: string
  device?: string
  id?: number
  ip?: string
  isSuccess?: boolean
  module?: string
  operation?: string
  reason?: string
  time?: string
  user?: string
}

export interface LogLogSyslogConfigCreateDTO {
  deviceID?: number
  enabled?: boolean
  level?: 'info' | 'warning' | 'error'
  logEnabled?: boolean
  protocol: 'udp' | 'tcp'
  /** @maxLength 255 */
  remark?: string
  servers: string[]
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'audit'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
}

export interface LogLogSyslogConfigDeleteDTO {
  ids: number[]
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
}

export interface LogLogSyslogConfigEnableDTO {
  enabled?: boolean
  ids: number[]
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
}

export interface LogLogSyslogConfigLogEnableDTO {
  enabled?: boolean
  ids: number[]
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
}

export interface LogLogSyslogConfigQueryVO {
  allowDelete?: boolean
  deviceID?: number
  deviceName?: string
  enabled?: boolean
  id?: number
  level?: string
  logEnabled?: boolean
  protocol?: string
  remark?: string
  servers?: string[]
}

export interface LogLogSyslogConfigUpdateDTO {
  enabled?: boolean
  level?: 'info' | 'warning' | 'error'
  logEnabled?: boolean
  protocol: 'udp' | 'tcp'
  /** @maxLength 255 */
  remark?: string
  servers: string[]
  type?:
    | 'login'
    | 'operation'
    | 'dns'
    | 'system'
    | 'threat'
    | 'lease'
    | 'traffic'
    | 'xforce'
    | 'fault'
}

export interface LogLogSystemQueryVO {
  component?: string
  device?: string
  level?: string
  message?: string
  time?: string
}

export interface LogLogThreatIntelQueryVO {
  device?: string
  domain?: string
  event?: string
  ip?: string
  queryType?: string
  time?: string
}

export interface LogLogUpgradeQueryVO {
  device?: string
  msg?: string
  op?: string
  time?: string
}

export interface LogLogXforceQueryVO {
  clientIP?: string
  device?: string
  ecs?: string
  queryDomain?: string
  queryType?: string
  resp?: string
  respType?: string
  time?: string
}

export interface ModelACLNamesQueryVO {
  id?: number
  name?: string
}

export interface ModelAccountCreateDTO {
  email: string
  nickname: string
  password: string
  phone: string
  roleID: number
  username: string
}

export interface ModelAccountDeleteDTO {
  ids: number[]
}

export interface ModelAccountQueryVO {
  email?: string
  id?: number
  isFirstLogin?: boolean
  isSuper?: boolean
  lastIP?: string
  lastLogin?: string
  lockedAt?: string
  nickname?: string
  phone?: string
  roleID?: number
  roleName?: string
  /** 状态: disable-禁用 enable-启用 locked-锁定 */
  status?: string
  username?: string
}

export interface ModelAccountResetPasswordDTO {
  id: number
  password: string
}

export interface ModelAccountUpdateDTO {
  email: string
  id: number
  nickname: string
  phone: string
  roleID: number
  username: string
}

export interface ModelAccountUpdateEnableDTO {
  status?: 'disabled' | 'enabled' | 'locked'
}

export interface ModelAccountUpdateNicknameDTO {
  nickname: string
}

export interface ModelAccountUpdatePasswordDTO {
  newPassword: string
  oldPassword: string
}

export interface ModelAccountUpdateUnlockDTO {
  ids?: number[]
}

export interface ModelAclChild {
  /** optionID 或者 指纹管理ID */
  id?: number
  len?: number
  mac?: string
  macGroupID?: number
  offset?: number
  operator?: 'equals' | 'not_equals' | 'exists' | 'not_exists' | 'sub_equals' | 'sub_not_equals'
  /** @maxLength 255 */
  remark?: string
  value?: string
}

export interface ModelAclCreateDTO {
  ipList: string[]
  /** 数字、字母、中文、下划线、中线和点组成，不能以中线开头{1,255} ne=none,localhost,any,localnets */
  name: string
  /** @maxLength 255 */
  remark?: string
  source?: string
}

export interface ModelAclDeleteDTO {
  ids: number[]
}

export interface ModelAclExportDTO {
  ids?: number[]
}

export interface ModelAclExportVO {
  ipList: string[]
  /** 数字、字母、中文、下划线、中线和点组成，不能以中线开头{1,255} ne=none,localhost,any,localnets */
  name: string
  /** @maxLength 255 */
  remark?: string
  source?: string
}

export interface ModelAclQueryVO {
  /** ACLList holds the value of the "acl_list" field. */
  aclList?: string[]
  /** CreatedAt holds the value of the "created_at" field. */
  createdAt?: string
  /** CreatedBy holds the value of the "created_by" field. */
  createdBy?: number
  /** ID of the ent. */
  id?: number
  /** IPList holds the value of the "ip_list" field. */
  ipList?: string[]
  /** Name holds the value of the "name" field. */
  name?: string
  /** Remark holds the value of the "remark" field. */
  remark?: string
  /** Source holds the value of the "source" field. */
  source?: string
  /** UpdatedAt holds the value of the "updated_at" field. */
  updatedAt?: string
  /** UpdatedBy holds the value of the "updated_by" field. */
  updatedBy?: number
}

export interface ModelAclUpdateDTO {
  ipList: string[]
  /** @maxLength 255 */
  remark?: string
  source?: string
}

export interface ModelAddrRangeBatchDTO {
  ranges: ModelAddrRangeUpdateDTO[]
}

export interface ModelAddrRangeQueryVO {
  /** 结束偏移：偏移量不能为0，比如192.168.0.0/24  那192.168.0.0（网络地址）和192.168.0.255（广播地址） */
  endOffset: BigInt
  /**
   * 前缀长度(IPv4的掩码长度20-30,IPv6的掩码长度40-126)
   * @min 20
   * @max 126
   */
  prefix: number
  /** 起始偏移：偏移量不能为0，比如192.168.0.0/24  那192.168.0.0（网络地址）和192.168.0.255（广播地址） */
  startOffset: BigInt
  /** IP版本 */
  version: number
}

export interface ModelAddrRangeUpdateDTO {
  /** 结束偏移：偏移量不能为0，比如192.168.0.0/24  那192.168.0.0（网络地址）和192.168.0.255（广播地址） */
  endOffset: BigInt
  /**
   * 前缀长度(IPv4的掩码长度20-30,IPv6的掩码长度40-126)
   * @min 20
   * @max 126
   */
  prefix: number
  /** 起始偏移：偏移量不能为0，比如192.168.0.0/24  那192.168.0.0（网络地址）和192.168.0.255（广播地址） */
  startOffset: BigInt
  /** IP版本 */
  version: number
}

export interface ModelAddressPermissionCreateDTO {
  addresses?: string[]
  networkGroupIDs?: number[]
  permission: 'hide' | 'read' | 'write'
  roleID: number
}

export interface ModelAddressPermissionDeleteDTO {
  ids: number[]
}

export interface ModelAddressPermissionQueryVO {
  /** CreatedAt holds the value of the "created_at" field. */
  createdAt?: string
  /** CreatedBy holds the value of the "created_by" field. */
  createdBy?: number
  /** ID of the ent. */
  id?: number
  /** 网络地址 */
  networkAddress?: string
  /** 网络分组ID */
  networkGroupID?: number
  networkGroupName?: string
  /** 网络分组ID */
  permission?: string
  /** RoleID holds the value of the "role_id" field. */
  roleID?: number
  type?: string
  /** UpdatedAt holds the value of the "updated_at" field. */
  updatedAt?: string
  /** UpdatedBy holds the value of the "updated_by" field. */
  updatedBy?: number
}

export interface ModelAddressSchemaVO {
  children?: ModelAddressSchemaVO[]
  label?: string
  value?: string
}

export interface ModelAddressSchemaVOSwagger {
  children?: ModelAddressSchemaVO[]
  label?: string
  value?: string
}

export interface ModelAddressVersion {
  update_time?: string
  version?: string
}

export interface ModelAlarmActiveDetailVO {
  /** 告警级别 */
  alarmLevel?: string
  /** 告警状态 */
  alarmStatus?: string
  /** 告警类型 */
  alarmType?: string
  /** 创建时间 */
  createdAt?: string
  /** 设备名称 */
  deviceName?: string
  /** 结束时间 */
  endTime?: string
  /** 附加条件 */
  extra?: string
  id?: number
  /** 告警信息 */
  message?: string
  /** 产生时间 */
  startTime?: string
}

export interface ModelAlarmActiveList {
  /** 告警级别 */
  alarmLevel?: string
  /** 告警状态 */
  alarmStatus?: string
  /** 告警类型 */
  alarmType?: string
  /** 告警数量 */
  count?: number
  /** 设备名称 */
  deviceName?: string
  /** 持续时间 */
  duration?: string
  /** 结束时间 */
  endTime?: string
  extra?: string
  /** 告警信息 */
  message?: string
  /** 产生时间 */
  startTime?: string
}

export interface ModelAlarmConfigCreateDTO {
  /** 告警类型 */
  alarmType: string
  /** 告警信息 */
  alertRule: StructsAlertRule
  /** 是否允许删除 */
  allowDelete?: boolean
  /** 是否自动清除 */
  autoResolve?: boolean
  /** 设备 */
  deviceName?: string
  /** 是否启用 */
  enabled?: boolean
  /** 是否是默认配置 */
  isDefaultConfig?: boolean
  /** 监控对象 */
  monitorObject?: string
}

export interface ModelAlarmConfigQueryVO {
  /** 告警类型 */
  alarmType?: string
  /** 告警信息 */
  alertRule?: StructsAlertRule
  /** 是否允许删除 */
  allowDelete?: boolean
  /** 是否自动清除 */
  autoResolve?: boolean
  /** 设备 */
  deviceName?: string
  /** 是否启用 */
  enabled?: boolean
  id?: number
  /** 监控对象 */
  monitorObject?: string
}

export interface ModelAlarmConfigUpdateDTO {
  /** 告警类型 */
  alarmType: string
  /** 告警信息 */
  alertRule: StructsAlertRule
  /** 是否允许删除 */
  allowDelete?: boolean
  /** 是否自动清除 */
  autoResolve?: boolean
  /** 设备 */
  deviceName?: string
  /** 是否启用 */
  enabled?: boolean
  /** 监控对象 */
  monitorObject?: string
}

export interface ModelAlarmDelete {
  /** 告警级别 */
  alarmLevel?: string
  /** 告警类型 */
  alarmType?: string
  /** 设备名称 */
  deviceName?: string
  extra?: string
}

export interface ModelAlarmDeleteDTO {
  alarmDeletes?: ModelAlarmDelete[]
}

export interface ModelAlarmEmailConfig {
  enabled?: boolean
  password?: string
  port?: number
  server?: string
  sslEnabled?: boolean
  type?: string
  user?: string
}

export interface ModelAlarmHistoryQueryVO {
  /** 告警级别 */
  alarmLevel?: string
  /** 告警状态 */
  alarmStatus?: string
  /** 告警时间 */
  alarmTime?: string
  /** 告警类型 */
  alarmType?: string
  /** 设备名称 */
  deviceName?: string
  /** 产生时间 */
  endTime?: string
  /** 额外 */
  extra?: string
  id?: number
  /** 告警信息 */
  message?: string
  /** 产生时间 */
  startTime?: string
}

export interface ModelAlarmLabel {
  label?: string
  value?: string
}

export interface ModelAlarmNotifyCreateDTO {
  /** 告警等级 */
  alarmLevels: string[]
  /** 告警类型 */
  alarmTypes: string[]
  /** 设备名称 */
  deviceName: string
  /** 是否启用 */
  enabled?: boolean
  /** 通用额外配置 */
  info?: StructsCommonInfo
  /** 通知地址 */
  notifyAddresses: string[]
  /** 通知类型 */
  notifyType: string
  /** 备注 */
  remark?: string
}

export interface ModelAlarmNotifyDeleteDTO {
  ids: number[]
}

export interface ModelAlarmNotifyQueryDTO {
  deviceName?: string
  keyword?: string
  /** @example 1 */
  page: number
  /** @example 10 */
  pageSize: number
}

export interface ModelAlarmNotifyQueryVO {
  /** 告警等级 */
  alarmLevels?: string[]
  /** 告警类型 */
  alarmTypes?: string[]
  /** 设备名称 */
  deviceName: string
  /** 是否启用 */
  enabled?: boolean
  id?: number
  /** 通用额外配置 */
  info?: StructsCommonInfo
  /** 通知地址 */
  notifyAddresses?: string[]
  /** 通知类型 */
  notifyType: string
  /** 备注 */
  remark?: string
}

export interface ModelAlarmNotifyUpdateDTO {
  /** 告警等级 */
  alarmLevels: string[]
  /** 告警类型 */
  alarmTypes: string[]
  /** 设备名称 */
  deviceName: string
  /** 是否启用 */
  enabled?: boolean
  /** 通用额外配置 */
  info?: StructsCommonInfo
  /** 通知地址 */
  notifyAddresses: string[]
  /** 通知类型 */
  notifyType: string
  /** 备注 */
  remark?: string
}

export interface ModelAmplificationCreateDTO {
  /**
   * @min 0
   * @max 10000000
   */
  bandWidth?: number
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  exceptCidrs?: string[]
  /**
   * @min 100
   * @max 1518
   */
  maxMessageLen?: number
  /**
   * @min 1
   * @max 3600
   */
  period: number
  /**
   * @min 16
   * @max 32
   */
  prefixIpv4: number
  /**
   * @min 56
   * @max 128
   */
  prefixIpv6: number
  remark?: string
  type: 'alarm' | 'qpsSpeedLimit' | 'cut'
}

export interface ModelAmplificationDeleteDTO {
  ids: number[]
}

export interface ModelAmplificationQueryVO {
  /**
   * @min 0
   * @max 10000000
   */
  bandWidth?: number
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  exceptCidrs?: string[]
  id?: number
  /**
   * @min 100
   * @max 1518
   */
  maxMessageLen?: number
  /**
   * @min 1
   * @max 3600
   */
  period: number
  /**
   * @min 16
   * @max 32
   */
  prefixIpv4: number
  /**
   * @min 56
   * @max 128
   */
  prefixIpv6: number
  remark?: string
  type: 'alarm' | 'qpsSpeedLimit' | 'cut'
  updatedAt?: string
}

export interface ModelAmplificationUpdateDTO {
  /**
   * @min 0
   * @max 10000000
   */
  bandWidth?: number
  enabled?: boolean
  exceptCidrs?: string[]
  /**
   * @min 100
   * @max 1518
   */
  maxMessageLen?: number
  /**
   * @min 1
   * @max 3600
   */
  period: number
  /**
   * @min 16
   * @max 32
   */
  prefixIpv4: number
  /**
   * @min 56
   * @max 128
   */
  prefixIpv6: number
  remark?: string
  type: 'alarm' | 'qpsSpeedLimit' | 'cut'
}

export interface ModelAmplificationUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelAutoBackupSetting {
  enabled?: boolean
  name: string
  /** @maxItems 5 */
  paths: ModelBackupRemotePath[]
  plan: StructsJobPlan
}

export interface ModelBackupRemotePath {
  mode: 'ftp' | 'sftp'
  path: string
}

export interface ModelCacheOptionFlushDTO {
  /** @minItems 1 */
  devices: string[]
  /** @maxLength 253 */
  domain?: string
  viewIDs?: number[]
}

export interface ModelCacheOptionQueryDTO {
  device: string
  /** @maxLength 253 */
  domain: string
  /** A,AAAA,SRV,NAPTR,CAA,NS,CNAME,TXT,MX,DNAME,SPF,PTR,DS */
  type:
    | 'A'
    | 'AAAA'
    | 'SRV'
    | 'NAPTR'
    | 'CAA'
    | 'NS'
    | 'CNAME'
    | 'TXT'
    | 'MX'
    | 'DNAME'
    | 'SPF'
    | 'PTR'
    | 'DS'
  viewID: number
  viewName?: string
}

export interface ModelCacheProtectedSnoopCreateDTO {
  /** @max 4294967295 */
  customTtl?: number
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  nonRecursionAllowAddr?: string[]
  remark?: string
  ttlResponseType: 'logonly' | 'fixedttl' | 'authttl'
}

export interface ModelCacheProtectedSnoopDeleteDTO {
  ids: number[]
}

export interface ModelCacheProtectedSnoopQueryVO {
  /** @max 4294967295 */
  customTtl?: number
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  nonRecursionAllowAddr?: string[]
  remark?: string
  ttlResponseType: 'logonly' | 'fixedttl' | 'authttl'
  updatedAt?: string
}

export interface ModelCacheProtectedSnoopUpdateDTO {
  /** @max 4294967295 */
  customTtl?: number
  enabled?: boolean
  nonRecursionAllowAddr?: string[]
  remark?: string
  ttlResponseType: 'logonly' | 'fixedttl' | 'authttl'
}

export interface ModelCacheProtectedSnoopUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelCacheSettingCreateDTO {
  effectRange: SqlmodelEffectRange[]
  expActiveEnabled?: boolean
  /**
   * @min 1
   * @max 4294967295
   */
  expActiveNum?: number
  /**
   * @min 0
   * @max 4294967295
   */
  expActiveTtl?: number
  /**
   * @min 0
   * @max 4294967295
   */
  maxTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  minTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  ncacheTtl?: number
  /**
   * @min 0
   * @max 30
   */
  servfailTtl?: number
  viewID: number
}

export interface ModelCacheSettingDeleteDTO {
  ids: number[]
}

export interface ModelCacheSettingQueryVO {
  effectRange: SqlmodelEffectRange[]
  expActiveEnabled?: boolean
  /**
   * @min 1
   * @max 4294967295
   */
  expActiveNum?: number
  /**
   * @min 0
   * @max 4294967295
   */
  expActiveTtl?: number
  id?: number
  /**
   * @min 0
   * @max 4294967295
   */
  maxTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  minTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  ncacheTtl?: number
  /**
   * @min 0
   * @max 30
   */
  servfailTtl?: number
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelCacheSettingUpdateDTO {
  effectRange?: SqlmodelEffectRange[]
  expActiveEnabled?: boolean
  /**
   * @min 1
   * @max 4294967295
   */
  expActiveNum?: number
  /**
   * @min 0
   * @max 4294967295
   */
  expActiveTtl?: number
  /**
   * @min 0
   * @max 4294967295
   */
  maxTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  minTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  ncacheTtl?: number
  /**
   * @min 0
   * @max 30
   */
  servfailTtl?: number
}

export interface ModelCacheSettingUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelChildExportDTO {
  ids?: number[]
}

export interface ModelCloudThreatintelShowVO {
  addr?: string
  enabled?: boolean
  /** 离线导入时间 */
  importAt?: string
  passwd?: string
  plan?: StructsJobPlan
  subscribeType?: string[]
  /** 同步时间 */
  syncAt?: string
  todayTotal?: number
  total?: number
  /** 更新时间 */
  updatedAt?: string
  username?: string
  version?: string
}

export interface ModelDDns {
  eui64?: boolean
  /** 外部域配置 */
  externalDomains?: ModelExternalDomain[]
  /** 内部域配置 */
  internalDomains?: ModelInternalDomain[]
}

export interface ModelDeviceAnycastSaveDTO {
  bgp: StructsDeviceAnycastBGP
  ipv4: StructsDeviceAnycastIPv4
  ipv6: StructsDeviceAnycastIPv6
  type: 'ipv4' | 'ipv6' | 'bgp'
}

export interface ModelDeviceClass {
  /** @maxLength 255 */
  name: string
  source: 'builtIn custom'
}

export interface ModelDeviceClassUpdateDTO {
  deviceClasses: ModelDeviceClass[]
}

export interface ModelDeviceClassVO {
  id?: number
  /** @maxLength 255 */
  name: string
  source: 'builtIn custom'
}

export interface ModelDeviceCreateDTO {
  enabled?: boolean
  groupID: number
  ip: string
  name: string
  role: 'master' | 'slave' | 'member'
  services: string[]
  verifyCode: string
}

export interface ModelDeviceDeleteDTO {
  ids: number[]
  password?: string
}

export interface ModelDeviceDnsAnalysisVO {
  cacheHit?: ModelSamplePair[]
  iterateSuccess?: ModelSamplePair[]
  resolveSuccess?: ModelSamplePair[]
}

export interface ModelDeviceEnableDTO {
  enabled?: boolean
  ids: number[]
}

export interface ModelDeviceExportDTO {
  ids?: number[]
}

export interface ModelDeviceGetVO {
  groupName?: string
  haRole?: string
  ip?: string
  name?: string
  ntpEnable?: boolean
  role?: string
  status?: SqlmodelDeviceStatus
}

export interface ModelDeviceGroupCreateDTO {
  deviceIDs?: number[]
  name: string
  remark?: string
}

export interface ModelDeviceGroupDeleteDTO {
  ids: number[]
}

export interface ModelDeviceGroupQueryVO {
  devices?: ModelDeviceGroupQueryVODevice[]
  id?: number
  name?: string
  remark?: string
}

export interface ModelDeviceGroupQueryVODevice {
  id?: number
  name?: string
}

export interface ModelDeviceGroupUpdateDTO {
  deviceIDs?: number[]
  remark?: string
}

export interface ModelDeviceHASaveDTO {
  enabled?: boolean
  interface?: string
  interval?: number
  ips?: string[]
  mode?: string
  priority?: number
  routerID?: number
  state?: string
}

export interface ModelDeviceHaChangeDTO {
  deviceID: number
}

export interface ModelDeviceInterfaceCommonUpdate {
  ipv4s?: string[]
  ipv6s?: string[]
  members?: string[]
  mip?: string
  mode?:
    | 'round-robin'
    | 'active-backup'
    | 'XOR'
    | 'broadcast'
    | '802.3ad'
    | 'balance-tlb'
    | 'balance-alb'
  name: string
  /** bond类型才有的参数 */
  options?: string
  /** manager 管理口 worker 工作口 */
  role?: string
  type: 'loopback' | 'physical' | 'bond'
}

export interface ModelDeviceInterfaceNameResp {
  name: string
}

export interface ModelDeviceInterfaceResp {
  bonded?: boolean
  ipv4s?: string[]
  ipv6s?: string[]
  members?: string[]
  mip?: string
  mode?:
    | 'round-robin'
    | 'active-backup'
    | 'XOR'
    | 'broadcast'
    | '802.3ad'
    | 'balance-tlb'
    | 'balance-alb'
  name: string
  options?: string
  role: 'worker' | 'manager'
  status?: string
  type: 'physical' | 'bond'
  vipv4s?: string[]
  vipv6s?: string[]
}

export interface ModelDeviceInterfaceUpdateDTO {
  /** @minItems 0 */
  data: ModelDeviceInterfaceCommonUpdate[]
  type: 'interface' | 'interfaceBond'
}

export type ModelDeviceMetricsVO = Record<string, Record<string, any>>

export interface ModelDeviceNTPReportDTO {
  time: string
}

export interface ModelDeviceNTPSaveDTO {
  enabled?: boolean
  /**
   * @min 1
   * @max 3600
   */
  interval?: number
  remoteAddresses?: string[]
  server?: boolean
}

export interface ModelDeviceNTPSyncDTO {
  /** @minItems 1 */
  remoteAddresses: string[]
}

export interface ModelDeviceQueryVO {
  enabled?: boolean
  groupID?: number
  groupName?: string
  haRole?: string
  id?: number
  ip?: string
  name?: string
  productModel?: string
  role?: string
  serialNumber?: string
  services?: string[]
  status?: string
  upgradeAt?: string
  upgradeFailed?: string
  upgradePreviousVersion?: string
  upgradeStatus?: string
  upgradesVersion?: string
}

export interface ModelDeviceResetDTO {
  password?: string
}

export interface ModelDeviceRestartDTO {
  password?: string
}

export interface ModelDeviceRestoreFactoryDTO {
  password?: string
}

export interface ModelDeviceSNMPSaveDTO {
  authPass?: string
  authType?: 'noAuth' | 'MD5' | 'SHA'
  enabled?: boolean
  port?: number
  privPass?: string
  privType?: 'noPriv' | 'DES' | 'AES'
  securityLevel?: 'noAuthNoPriv' | 'authNoPriv' | 'authPriv'
  user?: string
  version?: 'v2c' | 'v3'
  whiteList?: string[]
}

export interface ModelDeviceServerUpdateDTO {
  action: 'stop' | 'restart'
  serverName: 'frr' | 'ntpd' | 'snmpd' | 'tftp'
}

export interface ModelDeviceStaticRouteCommon {
  ipv4s?: ModelDeviceStaticRouteIPv4Common[]
  ipv6s?: ModelDeviceStaticRouteIPv6Common[]
}

export interface ModelDeviceStaticRouteIPv4Common {
  gateway: string
  interface: string
  network: string
  type?: string
}

export interface ModelDeviceStaticRouteIPv6Common {
  gateway: string
  interface: string
  network: string
  type?: string
}

export interface ModelDeviceStaticRouteUpdateDTO {
  ipv4s?: ModelDeviceStaticRouteIPv4Common[]
  ipv6s?: ModelDeviceStaticRouteIPv6Common[]
}

export interface ModelDeviceTFTPSaveDTO {
  enabled?: boolean
}

export interface ModelDeviceToolDigQueryDTO {
  /** @minItems 1 */
  domains: string[]
  host: string
  option: 'dig' | 'trace' | 'norecurse'
  qtype:
    | 'A'
    | 'AAAA'
    | 'ANY'
    | 'CAA'
    | 'CNAME'
    | 'DNAME'
    | 'HTTPS'
    | 'MX'
    | 'NAPTR'
    | 'NS'
    | 'PTR'
    | 'SPF'
    | 'SRV'
    | 'TXT'
    | 'SOA'
    | 'DS'
}

export interface ModelDeviceToolPingQueryDTO {
  host: string
}

export interface ModelDeviceToolTcpDumpQueryDTO {
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
}

export interface ModelDeviceToolTraceRouteQueryDTO {
  host: string
}

export interface ModelDeviceUpdateDTO {
  enabled?: boolean
  groupID: number
}

export interface ModelDeviceUpdateVerifyCodeDTO {
  verifyCode: string
}

export interface ModelDhcpAclChildCreateDTOSwagger {
  data: ModelAclChild[]
  pid: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDhcpAclChildDeleteDTO {
  ids: number[]
}

export interface ModelDhcpAclChildQueryVO {
  expression?: string
  fingerprintsDevClass?: string
  fingerprintsDevClassID?: number
  fingerprintsID?: number
  fingerprintsName?: string
  id?: number
  len?: number
  mac?: string
  macGroupID?: number
  macGroupName?: string
  macType?: 'mac' | 'group'
  offset?: number
  operator?: string
  optionGroupID?: number
  optionGroupName?: string
  optionID?: number
  optionName?: string
  /** @maxLength 255 */
  remark?: string
  value?: string
}

export interface ModelDhcpAclChildUpdateDTOSwagger {
  data: ModelAclChild
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDhcpAclCreateDTOSwagger {
  child?: ModelAclChild[]
  /** @maxLength 255 */
  name: string
  /** @maxLength 255 */
  remark?: string
  type: 'mac' | 'fingerprint' | 'option'
}

export interface ModelDhcpAclDeleteDTO {
  ids: number[]
}

export interface ModelDhcpAclQueryVO {
  id?: number
  name?: string
  num?: number
  /** @maxLength 255 */
  remark?: string
  type?: string
}

export interface ModelDhcpAclUpdateDTO {
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDhcpFailoverDeleteDTO {
  ids: number[]
}

export interface ModelDhcpFloatHostCreateDTO {
  hostname: string
  mac: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDhcpFloatHostDeleteDTO {
  ids: number[]
}

export interface ModelDhcpFloatHostExportDTO {
  ids?: number[]
}

export interface ModelDhcpFloatHostQueryVO {
  hostname: string
  id?: number
  mac: string
  remark?: string
  updatedAt?: string
}

export interface ModelDhcpFloatHostUpdateDTO {
  hostname: string
  mac: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDhcpIPLeaseExportDTO {
  ids?: number[]
}

export interface ModelDhcpIPLeaseQueryVO {
  addressStatus?: string
  addressType?: string
  circuitID?: string
  device?: string
  domain?: string
  duid?: string
  fingerprintsID?: number
  fingerprintsName?: string
  hostname?: string
  id?: number
  ip?: string
  ipVersion?: number
  leaseDuration?: number
  leaseEndTime?: string
  leaseStartTime?: string
  leaseStatus?: string
  mac?: string
  mask?: number
  networkAddress?: string
  networkID?: number
  operation?: string
  poolID?: number
  remoteID?: string
  updatedAt?: string
}

export interface ModelDhcpIPLeaseReleaseDTO {
  /** @uniqueItems true */
  ids: number[]
}

export interface ModelDhcpIpStatusConvertDTO {
  custom?: Record<string, any>
  endIP?: string
  interface?: string
  /** @uniqueItems true */
  ips?: string[]
  networkID: number
  startIP?: string
  type: 'fixed' | 'dynamic' | 'reserved'
}

export interface ModelDhcpIpStatusDeleteDTO {
  /** @uniqueItems true */
  ips: string[]
  networkID: number
}

export interface ModelDhcpIpStatusRecycleDTO {
  /** @uniqueItems true */
  ips: string[]
  networkID: number
}

export interface ModelDhcpIpStatusResolveConflictDTO {
  /** @uniqueItems true */
  ips: string[]
  networkID: number
  solution: 'rewrite' | 'clean'
}

export interface ModelDhcpIpStatusSetDTO {
  custom?: Record<string, any>
  id?: number
  interface?: string
  ip?: string
  mac?: string
  networkID?: number
  type: 'fixed' | 'reserved'
}

export interface ModelDhcpNodeFailoverCreateDTO {
  /** 启动代理 */
  isStartProxy?: boolean
  masterID: number
  masterIp: string
  /** @max 3600 */
  mclt: number
  name: string
  /** @maxLength 255 */
  remark?: string
  slaveID: number
  slaveIp: string
  /**
   * @min 0
   * @max 100
   */
  splitFrom?: number
  /**
   * @min 0
   * @max 100
   */
  splitTo?: number
}

export interface ModelDhcpNodeFailoverQueryVO {
  id?: number
  isStartProxy?: boolean
  masterID?: number
  masterIp?: string
  masterName?: string
  masterStatus?: boolean
  mclt?: number
  name?: string
  remark?: string
  slaveID?: number
  slaveIp?: string
  slaveName?: string
  slaveStatus?: boolean
  splitFrom?: number
  splitTo?: number
  updatedAt?: string
}

export interface ModelDhcpNodeUpdateFailoverDTO {
  isStartProxy?: boolean
  /** @max 3600 */
  mclt: number
  /** @maxLength 255 */
  remark?: string
  slaveID?: number
  slaveIp: string
  /**
   * @min 0
   * @max 100
   */
  splitFrom?: number
  /**
   * @min 0
   * @max 100
   */
  splitTo?: number
}

export interface ModelDhcpNodeUpdateFailoverPartnerDTO {
  isDownPrimary?: boolean
  isDownSecondary?: boolean
}

export interface ModelDhcpPoolCreateDTO {
  dhcpNodeID?: number
  /**
   * @minItems 0
   * @uniqueItems true
   */
  dhcpTemplateIDs: number[]
  /** @uniqueItems true */
  networkIDs: number[]
}

export interface ModelDhcpPoolDeleteDTO {
  /** @uniqueItems true */
  networkIDs: number[]
}

export interface ModelDhcpPoolDownDTO {
  /** @uniqueItems true */
  ids: number[]
}

export interface ModelDhcpPoolQueryVO {
  address?: string
  addressCount?: string
  custom?: Record<string, any>
  ddns?: string
  dhcpNodeID?: number
  dhcpNodeName?: string
  dhcpUsed?: number
  dnsSuffix?: string
  domainServers?: string[]
  enablePing?: boolean
  gateway?: string
  groupID?: number
  id?: number
  isDown?: boolean
  isSharedNetwork?: boolean
  leaseTime?: SqlmodelDhcpLeaseTime
  networkGroupName?: string
  parentID?: number
  parentName?: string
  remark?: string
  spaceID?: number
  total?: string
  updatedAt?: string
  used?: string
  version?: number
}

export interface ModelDhcpPoolUpDTO {
  /** @uniqueItems true */
  ids: number[]
}

export interface ModelDhcpTempAuthCreateDTO {
  MACs: string[]
  custom?: Record<string, any>
  entryIntoForceTime: string
  /** @format 禁用 删除 */
  expirationStrategy: 'disabled' | 'delete'
  expirationTime: string
  ipPoolId: number
  poolId: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDhcpTempAuthDeleteDTO {
  ids: number[]
}

export interface ModelDhcpTempAuthQueryVO {
  MAC?: string
  custom?: Record<string, any>
  entryIntoForceTime: string
  /** @format 禁用 删除 */
  expirationStrategy: 'disabled' | 'delete'
  expirationTime: string
  id?: number
  ipPoolId: number
  ipPoolName?: string
  poolId: number
  poolName?: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDhcpTempAuthUpdateDTO {
  custom?: Record<string, any>
  entryIntoForceTime: string
  /** @format 禁用 删除 */
  expirationStrategy: 'disabled' | 'delete'
  expirationTime: string
  ipPoolId: number
  poolId: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDnsViewCreateDTO {
  /** 允许缓存 */
  allowRecurseCache?: boolean
  /** ECS数据  枚举：user-ip(携带用户地址) fixed(携带映射地址) ecs-prefer(用户ECS优先) user-ecs(透传用户ECS) */
  controls?: 'user-ip' | 'fixed' | 'ecs-prefer' | 'user-ecs'
  /** AnswerCookies         bool     `json:"answerCookies" excel:"应答Cookies,bool"` */
  cookiesChecks?: boolean
  dns64?: boolean
  /** 启用DNSSEC验证 */
  dnssecValidation?: boolean
  /** 枚举 on off */
  ecs?: 'on' | 'off'
  effectRange: SqlmodelEffectRange[]
  /** 映射地址 IP或IP段 */
  fixedScope?: string
  id?: number
  /** @maxItems 100 */
  ipLimitRange?: string[]
  /** 1-32 可以不传 */
  ipv4Mask?: number
  /** 1-128 可以不传 */
  ipv6Mask?: number
  matchClientsBlackList?: string[]
  matchClientsWhiteList: string[]
  matchDestinations?: string[]
  minimalResponse: 'yes' | 'no'
  /**
   * @format ASCII{1,128}
   * @minLength 1
   * @maxLength 128
   */
  name: string
  prefix?: string
  prefixLen?: 32 | 40 | 48 | 56 | 64 | 96
  /**
   * @min 1
   * @max 10
   */
  priority: number
  recursion?: boolean
  recursionBlackList?: string[]
  recursionWiteList?: string[]
  /** @maxLength 255 */
  remark?: string
  sendCookies?: boolean
  suffix?: string
  suffixLen?: number
  tsigID?: number
  tsigName?: string
}

export interface ModelDnsViewDeleteDTO {
  ids: number[]
}

export interface ModelDnsViewExportDTO {
  ids?: number[]
}

export interface ModelDnsViewQueryVO {
  /** 允许缓存 */
  allowRecurseCache?: boolean
  /** ECS数据  枚举：user-ip(携带用户地址) fixed(携带映射地址) ecs-prefer(用户ECS优先) user-ecs(透传用户ECS) */
  controls?: 'user-ip' | 'fixed' | 'ecs-prefer' | 'user-ecs'
  /** AnswerCookies         bool     `json:"answerCookies" excel:"应答Cookies,bool"` */
  cookiesChecks?: boolean
  dns64?: boolean
  /** 启用DNSSEC验证 */
  dnssecValidation?: boolean
  /** 枚举 on off */
  ecs?: 'on' | 'off'
  effectRange: SqlmodelEffectRange[]
  /** 映射地址 IP或IP段 */
  fixedScope?: string
  id?: number
  /** @maxItems 100 */
  ipLimitRange?: string[]
  /** 1-32 可以不传 */
  ipv4Mask?: number
  /** 1-128 可以不传 */
  ipv6Mask?: number
  matchClientsBlackList?: string[]
  matchClientsWhiteList: string[]
  matchDestinations?: string[]
  minimalResponse: 'yes' | 'no'
  /**
   * @format ASCII{1,128}
   * @minLength 1
   * @maxLength 128
   */
  name: string
  prefix?: string
  prefixLen?: 32 | 40 | 48 | 56 | 64 | 96
  /**
   * @min 1
   * @max 10
   */
  priority: number
  recursion?: boolean
  recursionBlackList?: string[]
  recursionWiteList?: string[]
  /** @maxLength 255 */
  remark?: string
  sendCookies?: boolean
  suffix?: string
  suffixLen?: number
  tsigID?: number
  tsigName?: string
}

export interface ModelDnsViewUpdateDTO {
  /** 允许缓存 */
  allowRecurseCache?: boolean
  /** ECS数据  枚举：user-ip(携带用户地址) fixed(携带映射地址) ecs-prefer(用户ECS优先) user-ecs(透传用户ECS) */
  controls?: 'user-ip' | 'fixed' | 'ecs-prefer' | 'user-ecs'
  /** AnswerCookies         bool     `json:"answerCookies" excel:"应答Cookies,bool"` */
  cookiesChecks?: boolean
  dns64?: boolean
  /** 启用DNSSEC验证 */
  dnssecValidation?: boolean
  /** 枚举 on off */
  ecs?: 'on' | 'off'
  /** 映射地址 IP或IP段 */
  fixedScope?: string
  /** @maxItems 100 */
  ipLimitRange?: string[]
  /** 1-32 可以不传 */
  ipv4Mask?: number
  /** 1-128 可以不传 */
  ipv6Mask?: number
  matchClientsBlackList?: string[]
  matchClientsWhiteList: string[]
  matchDestinations?: string[]
  minimalResponse: 'yes' | 'no'
  /**
   * @format ASCII{1,128}
   * @minLength 1
   * @maxLength 128
   */
  name: string
  prefix?: string
  prefixLen?: 32 | 40 | 48 | 56 | 64 | 96
  /**
   * @min 1
   * @max 10
   */
  priority: number
  recursion?: boolean
  recursionBlackList?: string[]
  recursionWiteList?: string[]
  /** @maxLength 255 */
  remark?: string
  sendCookies?: boolean
  suffix?: string
  suffixLen?: number
  tsigID?: number
  tsigName?: string
}

export interface ModelDnsViewUpdateEffectRangeDTO {
  /**
   * @maxItems 3
   * @minItems 1
   */
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthConsitencyCheckDTO {
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthCreateDTO {
  /** cidr */
  allowUpdate?: string[]
  /** forward reverse */
  authType: 'forward' | 'reverse'
  custom?: Record<string, any>
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  /** @maxItems 100 */
  ipLimitRange?: string[]
  /** inherit rewrite */
  ipLimitRangeStrategy: 'inherit' | 'rewrite'
  isMaster?: boolean
  /** 第三方来源-ipam联动生成zone */
  isThirdSource?: boolean
  locked?: boolean
  masterDeviceID?: number
  name: string
  noExpired?: boolean
  reason?: string
  /** @maxLength 255 */
  remark?: string
  server?: string
  soa?: DomainrrSoa
  /** local zoneFile server */
  syncSource?: 'local' | 'zoneFile' | 'server'
  tsigID?: number
  /**
   * 0-4294967295
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  viewID: number
  /** IP 副区此字段为必填项，在service层验证 */
  xfrMasters?: SqlmodelXfrMasters[]
  /** IP */
  xfrSlaves?: string[]
  zoneFileName?: string
}

export interface ModelDnsZoneAuthDeleteDTO {
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthDnssecExportDTO {
  digestAlgorithm: string[]
  ids: number[]
}

export interface ModelDnsZoneAuthDnssecRolloverKskDTO {
  ids: number[]
}

export interface ModelDnsZoneAuthDnssecRolloverZskDTO {
  ids: number[]
}

export interface ModelDnsZoneAuthDnssecSignDTO {
  dnssecID: number
  ids: number[]
}

export interface ModelDnsZoneAuthDnssecUnsignDTO {
  ids: number[]
}

export interface ModelDnsZoneAuthEnableDTO {
  enabled?: boolean
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthExportDTO {
  ids?: number[]
}

export interface ModelDnsZoneAuthLockDTO {
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthQueryVO {
  /** cidr */
  allowUpdate?: string[]
  auditStatus?: string
  /** forward reverse */
  authType: 'forward' | 'reverse'
  custom?: Record<string, any>
  dnssecAuthID?: number
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  /** @maxItems 100 */
  ipLimitRange?: string[]
  /** inherit rewrite */
  ipLimitRangeStrategy: 'inherit' | 'rewrite'
  isMaster?: boolean
  locked?: boolean
  lockedBy?: string
  masterDeviceID?: number
  name: string
  noExpired?: boolean
  /** @maxLength 255 */
  remark?: string
  rrNum?: number
  soa?: DomainrrSoa
  /**
   * 0-4294967295
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  updatedAt?: string
  viewID: number
  viewName?: string
  /** IP 副区此字段为必填项，在service层验证 */
  xfrMasters?: SqlmodelXfrMasters[]
  /** IP */
  xfrSlaves?: string[]
}

export interface ModelDnsZoneAuthRRBatchCreateDTO {
  custom?: Record<string, any>
  enabled?: boolean
  reason?: string
  /**
   * @maxItems 30000
   * @minItems 1
   */
  records: string[]
  remark?: string
  zoneID: number
}

export interface ModelDnsZoneAuthRRBatchUpdateDTO {
  custom?: Record<string, any>
  enabled?: boolean
  /** @minItems 1 */
  ids: number[]
  rdata?: string
  reason?: string
  remark?: string
  /**
   * @format 0-4294967295
   * @max 4294967295
   */
  ttl?: number
  /** @format 继承 重写 */
  ttlStrategy?: 'inherit rewrite'
}

export interface ModelDnsZoneAuthRRCreateDTO {
  /** pending approved rejected */
  auditStatus?: string
  custom?: Record<string, any>
  effectiveStrategyEnabled?: boolean
  enabled?: boolean
  entryIntoForceTime?: string
  expirationStrategy?: 'disabled' | 'delete'
  expirationTime?: string
  locked?: boolean
  /** fqdn 或 * 或 不填 */
  name?: string
  /**
   * 正向区：NS CNAME DNAME TXT SPF MX A AAAA NAPTR SRV CAA DS
   * 反向区：NS CNAME DNAME TXT SPF MX PTR DS
   */
  qtype:
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
  rdata: any
  reason?: string
  remark?: string
  source?: string
  /**
   * 默认为86400
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  ttlStrategy: 'inherit' | 'rewrite'
  withPtr?: boolean
  zoneID: number
}

export interface ModelDnsZoneAuthRRDeleteDTO {
  ids: number[]
  reason?: string
  withPtr?: boolean
}

export interface ModelDnsZoneAuthRREnableDTO {
  enabled?: boolean
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthRRExportTextDTO {
  type: 'txt' | 'csv'
  zoneID: number
}

export interface ModelDnsZoneAuthRRLockOrNotDTO {
  enabled?: boolean
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthRRQueryVO {
  auditStatus?: string
  custom?: Record<string, any>
  effectiveStatus?: boolean
  effectiveStrategyEnabled?: boolean
  enabled?: boolean
  entryIntoForceTime?: string
  expirationStrategy?: 'disabled' | 'delete'
  expirationTime?: string
  id?: number
  locked?: boolean
  lockedBy?: string
  /** fqdn 或 * 或 不填 */
  name?: string
  /**
   * 正向区：NS CNAME DNAME TXT SPF MX A AAAA NAPTR SRV CAA DS
   * 反向区：NS CNAME DNAME TXT SPF MX PTR DS
   */
  qtype:
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
  rdata?: any
  rdataStr: string
  reason?: string
  remark?: string
  source?: string
  /**
   * 默认为86400
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  ttlStrategy: 'inherit' | 'rewrite'
  updatedAt?: string
  /**
   * @format ASCII{1,128}
   * @minLength 1
   * @maxLength 128
   */
  viewName: string
  zoneName: string
}

export interface ModelDnsZoneAuthRRSearchCommon {
  field?: 'fqdn' | 'viewName' | 'zoneName' | 'rdata' | 'qtype' | 'remark'
  logic?: 'and' | 'or'
  relation?: 'eq' | 'start' | 'end' | 'contains' | 'neq'
  value?: string
}

export interface ModelDnsZoneAuthRRSearchQueryDTO {
  keyword?: string
  order?: 'ascend' | 'descend'
  orderField?: 'viewName' | 'zoneName' | 'fqdn' | 'ttl' | 'rdata' | 'qtype' | 'enable' | 'updatedAt'
  /** @example 1 */
  page: number
  /** @example 10 */
  pageSize: number
  searchKey?: ModelDnsZoneAuthRRSearchCommon[]
}

export interface ModelDnsZoneAuthRRSearchQueryVO {
  auditStatus?: string
  authType?: string
  custom?: Record<string, any>
  effectRange: SqlmodelEffectRange[]
  effectiveStrategyEnabled?: boolean
  enabled?: boolean
  entryIntoForceTime?: string
  expirationStrategy?: 'disabled' | 'delete'
  expirationTime?: string
  fqdn?: string
  id?: number
  isMaster?: boolean
  locked?: boolean
  /** fqdn 或 * 或 不填 */
  name?: string
  /**
   * 正向区：NS CNAME DNAME TXT SPF MX A AAAA NAPTR SRV CAA DS
   * 反向区：NS CNAME DNAME TXT SPF MX PTR DS
   */
  qtype:
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
  rdata?: any
  rdataStr?: string
  reason?: string
  remark?: string
  source?: string
  /**
   * 默认为86400
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  ttlStrategy: 'inherit' | 'rewrite'
  updatedAt?: string
  viewName?: string
  zoneName?: string
}

export interface ModelDnsZoneAuthRRUpdateDTO {
  /** pending approved rejected */
  auditStatus?: string
  custom?: Record<string, any>
  effectiveStrategyEnabled?: boolean
  enabled?: boolean
  entryIntoForceTime?: string
  expirationStrategy?: 'disabled' | 'delete'
  expirationTime?: string
  locked?: boolean
  /** fqdn 或 * 或 不填 */
  name?: string
  /**
   * 正向区：NS CNAME DNAME TXT SPF MX A AAAA NAPTR SRV CAA DS
   * 反向区：NS CNAME DNAME TXT SPF MX PTR DS
   */
  qtype:
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
  rdata: any
  reason?: string
  remark?: string
  source?: string
  /**
   * 默认为86400
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  ttlStrategy: 'inherit' | 'rewrite'
  withPtr?: boolean
}

export interface ModelDnsZoneAuthShareRRCreateDTO {
  authType: 'forward' | 'reverse'
  /** 默认启用 */
  enabled?: boolean
  /** fqdn 或 * 或 不填 */
  name?: string
  /**
   * 正向区：NS CNAME DNAME TXT SPF MX A AAAA NAPTR SRV CAA DS
   * 反向区：NS CNAME DNAME TXT SPF MX PTR DS
   */
  qtype:
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
  rdata?: any
  /** @maxLength 255 */
  remark?: string
  /**
   * 默认为86400
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  zoneIDs: number[]
}

export interface ModelDnsZoneAuthShareRRImportDTO {
  authType: 'forward' | 'reverse'
  enabled?: boolean
  name?: string
  names: string[]
  newRdata?: string
  qtype:
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
  rdata: string
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 0
   * @max 4294967295
   */
  ttl?: number
}

export interface ModelDnsZoneAuthShareRRQueryVO {
  authType?: string
  enabled?: boolean
  id?: number
  /** fqdn 或 * 或 不填 */
  name?: string
  /**
   * 正向区：NS CNAME DNAME TXT SPF MX A AAAA NAPTR SRV CAA DS
   * 反向区：NS CNAME DNAME TXT SPF MX PTR DS
   */
  qtype:
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
  rdata?: any
  rdataStr?: string
  remark?: string
  /**
   * 默认为86400
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  updatedAt?: string
  zones?: ModelDnsZoneAuthShareZone[]
}

export interface ModelDnsZoneAuthShareRRUpdateDTO {
  enabled?: boolean
  /** fqdn 或 * 或 不填 */
  name?: string
  /**
   * 正向区：NS CNAME DNAME TXT SPF MX A AAAA NAPTR SRV CAA DS
   * 反向区：NS CNAME DNAME TXT SPF MX PTR DS
   */
  qtype:
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
  rdata?: any
  /** @maxLength 255 */
  remark?: string
  /**
   * 默认为86400
   * @min 0
   * @max 4294967295
   */
  ttl?: number
}

export interface ModelDnsZoneAuthShareRRUpdateZoneDTO {
  authType: 'forward' | 'reverse'
  ids: number[]
  zoneIDs: number[]
}

export interface ModelDnsZoneAuthShareZone {
  id?: number
  name?: string
  viewID?: number
  viewName?: string
}

export interface ModelDnsZoneAuthSwitchMasterDTO {
  /** cidr或ip */
  allowUpdate?: string[]
  ids: number[]
  masterDeviceID: number
  soa?: DomainrrSoa
  /** ip */
  xfrSlaves?: string[]
}

export interface ModelDnsZoneAuthSwitchSlaveDTO {
  ids: number[]
  xfrMasters: SqlmodelXfrMasters[]
}

export interface ModelDnsZoneAuthUnLockDTO {
  ids: number[]
  reason?: string
}

export interface ModelDnsZoneAuthUpdateDTO {
  /** cidr */
  allowUpdate?: string[]
  /** forward reverse */
  authType: 'forward' | 'reverse'
  custom?: Record<string, any>
  enabled?: boolean
  /** @maxItems 100 */
  ipLimitRange?: string[]
  /** inherit rewrite */
  ipLimitRangeStrategy: 'inherit' | 'rewrite'
  isMaster?: boolean
  locked?: boolean
  masterDeviceID?: number
  name: string
  noExpired?: boolean
  /** 申请的原因 */
  reason?: string
  /** @maxLength 255 */
  remark?: string
  soa?: DomainrrSoa
  /**
   * 0-4294967295
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  viewID: number
  /** IP 副区此字段为必填项，在service层验证 */
  xfrMasters?: SqlmodelXfrMasters[]
  /** IP */
  xfrSlaves?: string[]
}

export interface ModelDnsZoneAuthUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface ModelDnssecCreateDTO {
  dnskeyTTL?: number
  keys: StructsDnssecKey[]
  /** 由数字、字母、中文、下划线、中线和点组成，不能以中线开头,字符串长度为1-128且不能是none、default、insecure */
  name: string
  nsec: 'NSEC' | 'NSEC3'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDnssecDeleteDTO {
  ids: number[]
}

export interface ModelDnssecRecurTrustAnchorsDTO {
  /** @maxItems 200 */
  trustAnchors: ModelTrustAnchor[]
}

export interface ModelDnssecRecurValidateExceptDTO {
  /** @maxItems 200 */
  validateExcept: ModelZoneName[]
}

export interface ModelDnssecUpdateDTO {
  dnskeyTTL?: number
  keys: StructsDnssecKey[]
  nsec: 'NSEC' | 'NSEC3'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDnssecVO {
  dnskeyTTL?: number
  id?: number
  keys: StructsDnssecKey[]
  /** 由数字、字母、中文、下划线、中线和点组成，不能以中线开头,字符串长度为1-128且不能是none、default、insecure */
  name: string
  nsec: 'NSEC' | 'NSEC3'
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
}

export interface ModelDnzZoneAuthShareRRDeleteDTO {
  ids: number[]
}

export interface ModelDomainAclCreateDTO {
  domains: string[]
  effectRange: SqlmodelEffectRange[]
  mode: 'allow' | 'deny'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDomainAclDeleteDTO {
  ids: number[]
  mode: 'allow' | 'deny'
}

export interface ModelDomainAclExportDTO {
  ids?: number[]
}

export interface ModelDomainAclExportVO {
  /** @maxLength 253 */
  domain: string
  effectRange: SqlmodelEffectRange[]
  id?: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDomainAclQueryVO {
  domain?: string
  effectRange: SqlmodelEffectRange[]
  id?: number
  mode?: string
  remark?: string
  updatedAt?: string
}

export interface ModelDomainAclUpdateDTO {
  /** @maxLength 253 */
  domain: string
  effectRange?: SqlmodelEffectRange[]
  mode: 'allow' | 'deny'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelDomainAclUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  mode: 'allow' | 'deny'
}

export interface ModelDomainLibBuiltInExport {
  ids?: number[]
}

export interface ModelDomainLibCreateDTO {
  domains: string[]
  /** @maxLength 255 */
  remark?: string
  type: string
}

export interface ModelDomainLibDeleteDTO {
  ids: number[]
}

export interface ModelDomainLibQueryVO {
  company?: string
  domain?: string
  id?: number
  remark?: string
  source?: string
  type?: string
  updatedAt?: string
  website?: string
}

export interface ModelDomainLibType {
  name: string
  source: 'builtIn custom'
}

export interface ModelDomainLibTypeUpdateDTO {
  types: ModelDomainLibType[]
}

export interface ModelDomainLibUpdateDTO {
  company?: string
  /** @maxLength 253 */
  domain: string
  /** @maxLength 255 */
  remark?: string
  secondaryDomain?: string
  type: string
  website?: string
}

export interface ModelDomainMonitorCreateDTO {
  /** 探测设备 */
  deviceID: number
  /** 域名 */
  domain: string
  /** 设备组 */
  effectRange: SqlmodelEffectRange[]
  /** 启用 */
  enabled?: boolean
  /** 解析结果 */
  expectResult: string[]
  /** 请求类型 */
  qtype: 'A' | 'AAAA'
  /**
   * 备注
   * @maxLength 255
   */
  remark?: string
  /** 探测计划 */
  schedule: StructsJobPlan
}

export interface ModelDomainMonitorDeleteDTO {
  ids: number[]
}

export interface ModelDomainMonitorExecuteDTO {
  ids: number[]
}

export interface ModelDomainMonitorQueryVO {
  createdAt?: string
  createdBy?: number
  /** 探测设备ID */
  deviceID?: number
  /** 域名 */
  domain?: string
  /** 设备组 */
  effectRange?: SqlmodelEffectRange[]
  /** 启用 */
  enabled?: boolean
  /** 解析结果 */
  expectResult?: string[]
  /** 最近探测时间 */
  finishAt?: string
  id?: number
  /** 探测设备名称 */
  monitorName?: string
  /** 请求类型 */
  qtype?: string
  /** 备注 */
  remark?: string
  /** 探测计划 */
  schedule?: StructsJobPlan
  /** 状态 失败 fail 成功 success 告警 warning */
  status?: string
  /** 修改时间 */
  updatedAt?: string
  updatedBy?: number
}

export interface ModelDomainMonitorUpdateDTO {
  /** 探测设备 */
  deviceID: number
  /** 域名 */
  domain: string
  /** 设备组 */
  effectRange: SqlmodelEffectRange[]
  /** 启用 */
  enabled?: boolean
  /** 解析结果 */
  expectResult: string[]
  /** 请求类型 */
  qtype: 'A' | 'AAAA'
  /** @maxLength 255 */
  remark?: string
  /** 探测计划 */
  schedule: StructsJobPlan
}

export interface ModelDynamicReportVO {
  analysisDataItem?: string
  analysisType?: string
  code?: string
  data?: any
  hasNext?: boolean
  name?: string
  ruleID?: number
}

export interface ModelEffectRangeTreeVO {
  children?: ModelEffectRangeTreeVO[]
  label?: string
  value?: string
}

export interface ModelEnableDTO {
  enabled?: boolean
  ids: number[]
}

export interface ModelExternalDomain {
  serverIP: string
  tsigID?: number
  zoneName: string
}

export interface ModelFingerPrintsCreateDTO {
  /** 设备类型 */
  deviceClassID: number
  enabled?: boolean
  /**
   * 长度1-255
   * @minLength 1
   * @maxLength 255
   */
  name: string
  /** 选项序列 */
  optionSequence?: string[]
  optionSequence6?: string[]
  /** @maxLength 255 */
  remark?: string
  /** 厂家标识 */
  vendorIDs?: string[]
}

export interface ModelFingerPrintsDeleteDTO {
  ids: number[]
}

export interface ModelFingerPrintsDiscoverDeleteDTO {
  ids: number[]
}

export interface ModelFingerPrintsEnableDTO {
  enabled?: boolean
  ids: number[]
}

export interface ModelFingerPrintsGenerate {
  /** 设备类型 */
  deviceClassID: number
  /** 指纹发现ID */
  fpDiscoverID: number
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelFingerPrintsGenerateDTO {
  data?: ModelFingerPrintsGenerate[]
}

export interface ModelFingerPrintsQueryVO {
  /** 设备类型 */
  deviceClassID?: number
  deviceClassName?: string
  deviceClassSource?: string
  enabled?: boolean
  id?: number
  name?: string
  optionSequence?: string[]
  optionSequence6?: string[]
  /** @maxLength 255 */
  remark?: string
  source?: string
  vendorIDs?: string[]
}

export interface ModelFingerPrintsUpdateDTO {
  enabled?: boolean
  /** 选项序列 */
  optionSequence?: string[]
  optionSequence6?: string[]
  /** @maxLength 255 */
  remark?: string
  /** 厂家标识 */
  vendorIDs?: string[]
}

export interface ModelGEOISPAddressVO {
  children?: ModelGEOISPAddressVO[]
  label?: string
  value?: number
}

export interface ModelGroupNamesQueryVO {
  groupName?: string
  id?: number
  version?: number
}

export interface ModelGslbDatacenterCreateDTO {
  enabled?: boolean
  groupID: number
  name: string
  proberFallback:
    | 'none'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
    | 'any_available'
  proberFallbackPoolID?: number
  proberPreferred: 'inside_data_center' | 'outside_data_center' | 'prober_pool'
  proberPreferredPoolID?: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbDatacenterDeleteDTO {
  ids: number[]
}

export interface ModelGslbDatacenterExporterDTO {
  ids?: number[]
}

export type ModelGslbDatacenterInfoDTO = object

export interface ModelGslbDatacenterInfoVO {
  enabled?: boolean
  groupID?: number
  id?: number
  name?: string
  proberFallback?: string
  proberFallbackPool?: string
  proberFallbackPoolID?: number
  proberPreferred?: string
  proberPreferredPool?: string
  proberPreferredPoolID?: number
  remark?: string
  serviceNum?: number
  status?: ModelGslbStatus
}

export interface ModelGslbDatacenterQueryVO {
  enabled?: boolean
  groupID?: number
  groupName?: string
  id?: number
  linkNum?: number
  name?: string
  proberNum?: number
  remark?: string
  serviceNum?: number
  status?: ModelGslbStatus
  updatedAt?: string
}

export interface ModelGslbDatacenterUpdateDTO {
  enabled?: boolean
  proberFallback:
    | 'none'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
    | 'any_available'
  proberFallbackPoolID?: number
  proberPreferred: 'inside_data_center' | 'outside_data_center' | 'prober_pool'
  proberPreferredPoolID?: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbGraphVO {
  lines?: ModelLine[]
  nodes?: any[]
}

export interface ModelGslbLinkCreateDTO {
  address: string
  all?: number
  allEnable?: boolean
  /** 服务器负载采集开关 */
  availability?: boolean
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  collectMonitorID?: number
  datacenterID: number
  enabled?: boolean
  groupID: number
  healthMonitorIDs: number[]
  in?: number
  inEnable?: boolean
  ldnsProberID?: number
  /** @maxLength 255 */
  name: string
  out?: number
  outEnable?: boolean
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  /** @maxLength 255 */
  remark?: string
  remoteAddress?: string
}

export interface ModelGslbLinkDeleteDTO {
  ids: number[]
}

export interface ModelGslbLinkQueryVO {
  address?: string
  all?: number
  allEnable?: boolean
  /** 服务器负载采集开关 */
  availability?: boolean
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  collectMonitorID?: number
  datacenterName?: string
  enabled?: boolean
  groupID?: number
  groupName?: string
  healthMonitorIDs: number[]
  healthMonitorNames?: string[]
  id?: number
  in?: number
  inEnable?: boolean
  ldnsDeviceName?: string
  ldnsProberID?: number
  name?: string
  out?: number
  outEnable?: boolean
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  remark?: string
  remoteAddress?: string
  status?: ModelGslbStatus
}

export interface ModelGslbLinkUpdateDTO {
  address: string
  all?: number
  allEnable?: boolean
  /** 服务器负载采集开关 */
  availability?: boolean
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  collectMonitorID?: number
  enabled?: boolean
  healthMonitorIDs: number[]
  in?: number
  inEnable?: boolean
  ldnsProberID?: number
  out?: number
  outEnable?: boolean
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  /** @maxLength 255 */
  remark?: string
  remoteAddress?: string
}

export interface ModelGslbMonitorInfoCommon {
  authPass?: string
  authType?: string
  body?: string
  certificateEnabled?: boolean
  code?: number
  /** @max 4294967295 */
  column?: number
  community?: string
  dbName?: string
  domain?: string
  header?: string[]
  inputOid?: string
  method?: string
  outputOid?: string
  password?: string
  path?: string
  privPass?: string
  privType?: string
  qtype?: string
  receiveMsg?: string
  /**
   * Postgresql DB2 MySQL Oracle
   * @max 4294967295
   */
  row?: number
  securityLevel?: string
  sendMsg?: string
  service?: string
  sid?: string
  sniEnabled?: boolean
  sslEnabled?: boolean
  user?: string
  username?: string
  version?: string
}

export interface ModelGslbPoolCreateDTO {
  alternateTopologyGroupID?: number
  alternateTopologyGroupName?: string
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  cpuWeight?: number
  enabled?: boolean
  fallbackIP?: string
  fallbackTopologyGroupID?: number
  fallbackTopologyGroupName?: string
  groupID: number
  healthMonitorIDs: number[]
  loadBalancingMethodAlternate:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'qos'
  loadBalancingMethodFallback:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'fallback-ip'
    | 'fallback-all'
    | 'qos'
    | 'rtt'
  loadBalancingMethodPreferred:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'require'
    | 'qos'
    | 'rtt'
  /**
   * @min 1
   * @max 8
   */
  maxAnswersCount?: number
  /** @maxItems 50 */
  members: SqlmodelGslbPoolMember[]
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  memoryWeight?: number
  /** @maxLength 255 */
  name: string
  preferredTopologyGroupID?: number
  preferredTopologyGroupName?: string
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  qtype: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'SRV' | 'NAPTR'
  /** @maxLength 255 */
  remark?: string
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=require,此字段必填
   * @min 0
   */
  requireAvailableCount?: number
  requireCondition?: 'lt' | 'le' | 'gt' | 'ge' | 'eq' | 'ne'
  schedulingMode: 'manual_online' | 'manual_offline' | 'auto_scheduling'
  /**
   * @min 0
   * @max 2147483647
   */
  ttl?: number
  verifyMemberAvailability?: boolean
}

export interface ModelGslbPoolDeleteDTO {
  ids: number[]
}

export interface ModelGslbPoolGraphUpdateDTOSwagger {
  enabled?: boolean
  /** @maxItems 50 */
  members: SqlmodelGslbPoolMember[]
}

export type ModelGslbPoolInfoDTO = object

export interface ModelGslbPoolInfoServiceMemberVO {
  datacenter?: string
  enabled?: boolean
  flags?: string
  id?: number
  isStaticTarget?: boolean
  name?: string
  order?: number
  port?: number
  preference?: number
  priority?: number
  qtype?: string
  ratio?: number
  service?: string
  serviceHost?: string
  servicePort?: number
  status?: ModelGslbStatus
  weight?: number
}

export interface ModelGslbPoolInfoVO {
  alternateTopologyGroupID?: number
  alternateTopologyGroupName?: string
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  cpuWeight?: number
  enabled?: boolean
  fallbackIP?: string
  fallbackTopologyGroupID?: number
  fallbackTopologyGroupName?: string
  groupID?: number
  healthMonitorIDs: number[]
  id?: number
  loadBalancingMethodAlternate:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'qos'
  loadBalancingMethodFallback:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'fallback-ip'
    | 'fallback-all'
    | 'qos'
    | 'rtt'
  loadBalancingMethodPreferred:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'require'
    | 'qos'
    | 'rtt'
  maxAnswersCount?: number
  members?: ModelGslbPoolInfoServiceMemberVO[]
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  memoryWeight?: number
  name?: string
  preferredTopologyGroupID?: number
  preferredTopologyGroupName?: string
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  qtype?: string
  remark?: string
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=require,此字段必填
   * @min 0
   */
  requireAvailableCount?: number
  requireCondition?: 'lt' | 'le' | 'gt' | 'ge' | 'eq' | 'ne'
  schedulingMode?: string
  status?: ModelGslbStatus
  ttl?: number
  verifyMemberAvailability?: boolean
}

export interface ModelGslbPoolQueryVO {
  alternateTopologyGroupID?: number
  alternateTopologyGroupName?: string
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  cpuWeight?: number
  enabled?: boolean
  fallbackIP?: string
  fallbackTopologyGroupID?: number
  fallbackTopologyGroupName?: string
  groupID?: number
  groupName?: string
  id?: number
  loadBalancingMethodAlternate:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'qos'
  loadBalancingMethodFallback:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'fallback-ip'
    | 'fallback-all'
    | 'qos'
    | 'rtt'
  loadBalancingMethodPreferred:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'require'
    | 'qos'
    | 'rtt'
  memberNum?: number
  members?: SqlmodelGslbPoolMember[]
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  memoryWeight?: number
  name?: string
  preferredTopologyGroupID?: number
  preferredTopologyGroupName?: string
  qtype?: string
  remark?: string
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=require,此字段必填
   * @min 0
   */
  requireAvailableCount?: number
  requireCondition?: 'lt' | 'le' | 'gt' | 'ge' | 'eq' | 'ne'
  status?: ModelGslbStatus
  updatedAt?: string
}

export interface ModelGslbPoolUpdateDTO {
  alternateTopologyGroupID?: number
  alternateTopologyGroupName?: string
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  cpuWeight?: number
  enabled?: boolean
  fallbackIP?: string
  fallbackTopologyGroupID?: number
  fallbackTopologyGroupName?: string
  healthMonitorIDs: number[]
  loadBalancingMethodAlternate:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'qos'
  loadBalancingMethodFallback:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'none'
    | 'fallback-ip'
    | 'fallback-all'
    | 'qos'
    | 'rtt'
  loadBalancingMethodPreferred:
    | 'global-availability'
    | 'ratio'
    | 'round-robin'
    | 'topology'
    | 'drop-packet'
    | 'return-to-dns'
    | 'return-all'
    | 'static-persist'
    | 'require'
    | 'qos'
    | 'rtt'
  /**
   * @min 1
   * @max 8
   */
  maxAnswersCount?: number
  /** @maxItems 50 */
  members: SqlmodelGslbPoolMember[]
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=qos,此字段必填
   * @min 0
   * @max 100
   */
  memoryWeight?: number
  preferredTopologyGroupID?: number
  preferredTopologyGroupName?: string
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  /** @maxLength 255 */
  remark?: string
  /**
   * loadBalancingMethodPreferred|loadBalancingMethodAlternate|loadBalancingMethodFallback=require,此字段必填
   * @min 0
   */
  requireAvailableCount?: number
  requireCondition?: 'lt' | 'le' | 'gt' | 'ge' | 'eq' | 'ne'
  schedulingMode: 'manual_online' | 'manual_offline' | 'auto_scheduling'
  /**
   * @min 0
   * @max 2147483647
   */
  ttl?: number
  verifyMemberAvailability?: boolean
}

export interface ModelGslbProberCreateDTO {
  datacenterID: number
  deviceID: number
  enabled?: boolean
  groupID: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbProberDeleteDTO {
  ids: number[]
}

export interface ModelGslbProberPoolCreateDTO {
  enabled?: boolean
  groupID: number
  loadBalancingMethod: 'round-robin' | 'global-availability'
  members: ModelGslbProberPoolMember[]
  /** @maxLength 255 */
  name: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbProberPoolDeleteDTO {
  ids: number[]
}

export interface ModelGslbProberPoolExportDTO {
  ids?: number[]
}

export interface ModelGslbProberPoolImportDTO {
  file: MultipartFileHeader
  type: string
}

export type ModelGslbProberPoolInfoDTO = object

export interface ModelGslbProberPoolInfoVO {
  enabled?: boolean
  groupID?: number
  id?: number
  loadBalancingMethod?: string
  members?: ModelGslbProberPoolMember[]
  name?: string
  remark?: string
  status?: ModelGslbStatus
}

export interface ModelGslbProberPoolMember {
  enabled?: boolean
  id?: number
  name?: string
  order?: number
  proberID?: number
  status?: ModelGslbStatus
}

export interface ModelGslbProberPoolMemberQueryVO {
  name?: string
  proberID?: number
}

export interface ModelGslbProberPoolQueryVO {
  enabled?: boolean
  groupID?: number
  groupName?: string
  id?: number
  loadBalancingMethod?: string
  memberNum?: number
  name?: string
  remark?: string
  status?: ModelGslbStatus
}

export interface ModelGslbProberPoolUpdateDTO {
  enabled?: boolean
  loadBalancingMethod: 'round-robin' | 'global-availability'
  members: ModelGslbProberPoolMember[]
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbProberQueryVO {
  datacenterName?: string
  deviceID?: number
  deviceIP?: string
  deviceName?: string
  enabled?: boolean
  groupID?: number
  groupName?: string
  id?: number
  /** @maxLength 255 */
  remark?: string
  status?: ModelGslbStatus
}

export interface ModelGslbProberSettingSetDTO {
  groupID: number
  /**
   * @min 10
   * @max 60
   */
  heartbeatInterval: number
  /**
   * @min 30
   * @max 180
   */
  heartbeatTimeout: number
  /**
   * @min 60
   * @max 31536000
   */
  inactivePathTtl: number
  ipSubnets: string[]
  /**
   * @min 1
   * @max 600
   */
  pathsRetry: number
  /**
   * @min 1
   * @max 2419200
   */
  pathsTtl: number
  protocol: 'ICMP' | 'DNSREV' | 'DNSDOT'
  /**
   * @min 1
   * @max 10
   */
  sampleCount: number
  /**
   * @min 1
   * @max 10
   */
  timeout: number
  /**
   * @min 1
   * @max 60
   */
  updateInterval?: number
}

export interface ModelGslbProberUpdateDTO {
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbServerCreateDTO {
  /** @minItems 1 */
  addressList: StructsGslbServerAddress[]
  /** 服务器可用性检查开关 */
  availability?: boolean
  /** 服务器负载采集开关 */
  collectEnable?: boolean
  collectMonitorID?: number
  /** 服务器负载采集方法 */
  collectorMonitor?: string
  cpuEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  cpuThreshold?: number
  datacenter: number
  enabled?: boolean
  groupID: number
  memoryEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  memoryThreshold?: number
  /** @maxLength 255 */
  name: string
  /** @maxLength 255 */
  remark?: string
  type: 'generic'
}

export interface ModelGslbServerDeleteDTO {
  ids: number[]
}

export type ModelGslbServerInfoDTO = object

export interface ModelGslbServerInfoVO {
  /** @minItems 1 */
  addressList: StructsGslbServerAddress[]
  /** 服务器可用性检查开关 */
  availability?: boolean
  /** 服务器负载采集开关 */
  collectEnable?: boolean
  collectMonitorID?: number
  /** 服务器负载采集方法 */
  collectorMonitor?: string
  cpuEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  cpuThreshold?: number
  datacenter: number
  enabled?: boolean
  groupID?: number
  id?: number
  memoryEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  memoryThreshold?: number
  name?: string
  /** @maxLength 255 */
  remark?: string
  status?: ModelGslbStatus
  type: 'generic'
}

export interface ModelGslbServerQueryVO {
  addressList?: string[]
  /** 服务器可用性检查开关 */
  availability?: boolean
  /** 服务器负载采集开关 */
  collectEnable?: boolean
  collectMonitorID?: number
  /** 服务器负载采集方法 */
  collectorMonitor?: string
  cpuEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  cpuThreshold?: number
  datacenter?: string
  groupID?: number
  groupName?: string
  id?: number
  memoryEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  memoryThreshold?: number
  name?: string
  remark?: string
  serviceNum?: number
  status?: ModelGslbStatus
  type?: string
}

export interface ModelGslbServerUpdateDTO {
  /** @minItems 1 */
  addressList: StructsGslbServerAddress[]
  /** 服务器可用性检查开关 */
  availability?: boolean
  /** 服务器负载采集开关 */
  collectEnable?: boolean
  collectMonitorID?: number
  /** 服务器负载采集方法 */
  collectorMonitor?: string
  cpuEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  cpuThreshold?: number
  datacenter: number
  enabled?: boolean
  memoryEnable?: boolean
  /**
   * @min 1
   * @max 100
   */
  memoryThreshold?: number
  /** @maxLength 255 */
  remark?: string
  type: 'generic'
}

export interface ModelGslbServiceCreateDTO {
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  datacenterID: number
  dependencyIDs?: number[]
  enabled?: boolean
  groupID: number
  healthMonitorIDs: number[]
  linkID?: number
  /** @maxLength 255 */
  name: string
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  proberFallback:
    | 'none'
    | 'inherit_from_datacenter'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
    | 'any_available'
  proberFallbackPoolID?: number
  proberPreferred:
    | 'inherit_from_datacenter'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
  proberPreferredPoolID?: number
  /** @maxLength 255 */
  remark?: string
  serverID?: number
  serviceHost: string
  servicePort?: number
  sniName?: string
  translationHost?: string
  translationPort?: number
  translationUsed?: boolean
}

export interface ModelGslbServiceDeleteDTO {
  ids: number[]
}

export interface ModelGslbServiceGraphUpdateDTO {
  enabled?: boolean
}

export type ModelGslbServiceInfoDTO = object

export interface ModelGslbServiceInfoVO {
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  datacenterID: number
  dependencyIDs?: number[]
  enabled?: boolean
  groupID?: number
  healthMonitorIDs: number[]
  id?: number
  linkID?: number
  name?: string
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  proberFallback:
    | 'none'
    | 'inherit_from_datacenter'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
    | 'any_available'
  proberFallbackPoolID?: number
  proberPreferred:
    | 'inherit_from_datacenter'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
  proberPreferredPoolID?: number
  /** @maxLength 255 */
  remark?: string
  serverID?: number
  serviceHost: string
  servicePort?: number
  sniName?: string
  status?: ModelGslbStatus
  translationHost?: string
  translationPort?: number
  translationUsed?: boolean
}

export interface ModelGslbServiceQueryVO {
  datacenter?: string
  enabled?: boolean
  groupID?: number
  groupName?: string
  id?: number
  link?: string
  name?: string
  qtype?: string
  remark?: string
  serverID?: number
  serverName?: string
  serviceHost?: string
  servicePort?: number
  sniName?: string
  status?: ModelGslbStatus
  translationHost?: string
}

export interface ModelGslbServiceUpdateDTO {
  availabilityRequirements?: 'any' | 'all' | 'at_least' | 'multi_device'
  /**
   * availabilityRequirements=multi_device|at_least,此字段必填
   * @min 1
   * @max 50
   */
  availabilityRequirementsNumber?: number
  datacenterID: number
  dependencyIDs?: number[]
  enabled?: boolean
  healthMonitorIDs: number[]
  link?: string
  linkID?: number
  /**
   * availabilityRequirements=multi_device时，必填
   * @min 1
   * @max 50
   */
  proberCount?: number
  proberFallback:
    | 'none'
    | 'inherit_from_datacenter'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
    | 'any_available'
  proberFallbackPoolID?: number
  proberPreferred:
    | 'inherit_from_datacenter'
    | 'inside_data_center'
    | 'outside_data_center'
    | 'prober_pool'
  proberPreferredPoolID?: number
  /** @maxLength 255 */
  remark?: string
  serverID?: number
  serviceHost: string
  servicePort?: number
  sniName?: string
  translationHost?: string
  translationPort?: number
  translationUsed?: boolean
}

export interface ModelGslbSoaSettingSetDTO {
  authorityMailbox: string
  domain: string
  ecs: 'prefer' | 'off' | 'default'
  errorReturnCode: 'NOERROR' | 'FORMERR' | 'SERVFAIL' | 'NXDOMAIN' | 'NOTIMP' | 'REFUSED'
  errorReturnSoaTtl?: number
  /** @max 4294967295 */
  expireLimit?: number
  groupID: number
  /** @max 4294967295 */
  minimumTtl?: number
  primaryNameserver: string
  /** @max 4294967295 */
  refreshInterval?: number
  /** @max 4294967295 */
  retry?: number
  /** @max 4294967295 */
  serialNumber: number
}

export interface ModelGslbStatus {
  members?: ModelGslbStatus[]
  name?: string
  reason?: string
  status?: number
  type?: string
}

export interface ModelGslbThirdServiceVO {
  /** @maxLength 255 */
  user: string
  version: string
}

export interface ModelGslbThirdSyncCreateDTO {
  enabled?: boolean
  /** @min 1 */
  groupID: number
  plan?: StructsJobPlan
  /** @maxLength 255 */
  remark?: string
  service: Record<string, any>
  serviceAddress: string
  serviceType: 'f5'
}

export interface ModelGslbThirdSyncDeleteDTO {
  ids: number[]
}

export interface ModelGslbThirdSyncEnableDTO {
  enabled?: boolean
  ids: number[]
}

export interface ModelGslbThirdSyncExecuteDTO {
  ids: number[]
}

export interface ModelGslbThirdSyncJob {
  /** @min 1 */
  groupID: number
  service: Record<string, any>
  serviceAddress: string
  serviceType: 'f5'
}

export interface ModelGslbThirdSyncUpdateDTO {
  enabled?: boolean
  /** @min 1 */
  groupID: number
  plan?: StructsJobPlan
  /** @maxLength 255 */
  remark?: string
  service: Record<string, any>
  serviceAddress: string
  serviceType: 'f5'
}

export interface ModelGslbThirdSyncVO {
  enabled?: boolean
  groupID: number
  groupName?: string
  id?: number
  lastSyncTime?: string
  plan?: StructsJobPlan
  /** @maxLength 255 */
  remark?: string
  service: ModelGslbThirdServiceVO
  serviceAddress: string
  serviceType: 'f5'
}

export interface ModelGslbTopologyCreateDTO {
  destination: SqlmodelTopologyDestinationMember
  enabled?: boolean
  groupID?: number
  order?: number
  /** @maxLength 255 */
  remark?: string
  source: SqlmodelTopologySourceMember
  topologyGroupID: number
  /**
   * 1-4294967295
   * @min 1
   * @max 4294967295
   */
  weight?: number
}

export interface ModelGslbTopologyDeleteDTO {
  ids: number[]
}

export interface ModelGslbTopologyExportDTO {
  ids?: number[]
  topologyGroupID?: number
}

export interface ModelGslbTopologyGroupCreateCommon {
  groupID: number
  /** @maxLength 255 */
  name: string
}

export interface ModelGslbTopologyGroupDeleteDTO {
  ids: number[]
}

export interface ModelGslbTopologyGroupQueryDTO {
  groupID?: number
  keyword?: string
}

export interface ModelGslbTopologyImportDTO {
  file: MultipartFileHeader
  type: string
}

export interface ModelGslbTopologyQueryVO {
  destination: ModelTopologyDestinationMember
  enabled?: boolean
  groupID?: number
  groupName?: string
  id?: number
  order?: number
  remark?: string
  source: ModelTopologySourceMember
  topologyGroupID?: number
  topologyGroupName?: string
  uuid?: string
  weight?: number
}

export interface ModelGslbTopologyRegionCreateDTO {
  groupID: number
  /** @minItems 1 */
  members: SqlmodelTopologyRegionMember[]
  /** @maxLength 255 */
  name: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbTopologyRegionDeleteDTO {
  ids: number[]
}

export interface ModelGslbTopologyRegionQueryVO {
  groupID?: number
  groupName?: string
  id?: number
  members?: SqlmodelTopologyRegionMember[]
  name?: string
  remark?: string
}

export interface ModelGslbTopologyRegionUpdateDTO {
  /** @minItems 1 */
  members: SqlmodelTopologyRegionMember[]
  /** @maxLength 255 */
  remark?: string
}

export interface ModelGslbTopologySaveOrderDTO {
  ids: number[]
  /** @example 1 */
  page: number
  /** @example 10 */
  pageSize: number
}

export interface ModelGslbTopologySetOrderDTO {
  order?: number
}

export interface ModelGslbTopologyUpdateDTO {
  destination: SqlmodelTopologyDestinationMember
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
  source: SqlmodelTopologySourceMember
  topologyGroupID: number
  /**
   * 1-4294967295
   * @min 1
   * @max 4294967295
   */
  weight?: number
}

export interface ModelGslbWideIPCreateDTO {
  backupPoolID?: number
  enabled?: boolean
  errorReturnCode?: 'NOERROR' | 'FORMERR' | 'SERVFAIL' | 'NXDOMAIN' | 'NOTIMP' | 'REFUSED'
  errorReturnSetting: 'rewrite' | 'inherit'
  /**
   * @min 0
   * @max 2147483647
   */
  errorReturnSoaTtl?: number
  groupID: number
  loadBalancingMethod?: 'global-availability' | 'ratio' | 'round-robin' | 'topology'
  /** @maxItems 50 */
  members: SqlmodelGslbWideIPMember[]
  name: string
  persistenceEnabled?: boolean
  /**
   * @min 0
   * @max 2147483647
   */
  persistenceTtl?: number
  qtype: 'A' | 'AAAA' | 'NAPTR' | 'MX' | 'SRV'
  /** @maxLength 255 */
  remark?: string
  topologyGroupID?: number
}

export interface ModelGslbWideIPDeleteDTO {
  ids: number[]
}

export interface ModelGslbWideIPExportDTO {
  ids?: number[]
}

export interface ModelGslbWideIPGraphUpdateDTOSwagger {
  enabled?: boolean
  /** @maxItems 50 */
  members: SqlmodelGslbWideIPMember[]
}

export type ModelGslbWideIPInfoDTO = object

export interface ModelGslbWideIPInfoMemberVO {
  enabled?: boolean
  id?: number
  memberNum?: number
  name: string
  qtype: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'SRV' | 'NAPTR'
  /**
   * @min 1
   * @max 32767
   */
  ratio: number
  status?: ModelGslbStatus
}

export interface ModelGslbWideIPInfoVO {
  backupPoolID?: number
  backupPoolName?: string
  enabled?: boolean
  errorReturnCode?: string
  errorReturnSetting?: string
  errorReturnSoaTtl?: number
  groupID?: number
  id?: number
  loadBalancingMethod?: string
  members?: ModelGslbWideIPInfoMemberVO[]
  name?: string
  persistenceEnabled?: boolean
  persistenceTtl?: number
  qtype?: string
  remark?: string
  status?: ModelGslbStatus
  topologyGroupID?: number
  topologyGroupName?: string
}

export interface ModelGslbWideIPQueryVO {
  backupPoolName?: string
  enabled?: boolean
  groupName?: string
  id?: number
  loadBalancingMethod?: string
  memberNum?: number
  members?: SqlmodelGslbWideIPMember[]
  name?: string
  qtype?: string
  remark?: string
  status?: ModelGslbStatus
  topologyGroupID?: number
  topologyGroupName?: string
  updatedAt?: string
}

export interface ModelGslbWideIPUpdateDTO {
  backupPoolID?: number
  enabled?: boolean
  errorReturnCode?: 'NOERROR' | 'FORMERR' | 'SERVFAIL' | 'NXDOMAIN' | 'NOTIMP' | 'REFUSED'
  errorReturnSetting: 'rewrite' | 'inherit'
  /**
   * @min 0
   * @max 2147483647
   */
  errorReturnSoaTtl?: number
  loadBalancingMethod?: 'global-availability' | 'ratio' | 'round-robin' | 'topology'
  /** @maxItems 50 */
  members: SqlmodelGslbWideIPMember[]
  persistenceEnabled?: boolean
  /**
   * @min 0
   * @max 2147483647
   */
  persistenceTtl?: number
  /** @maxLength 255 */
  remark?: string
  topologyGroupID?: number
}

export interface ModelHAGroupChangeDTO {
  masterDevID: number
}

export interface ModelHAGroupCreateDTO {
  arpInterval?: number
  /**
   * @min 1
   * @max 300
   */
  interval: number
  /** @minItems 1 */
  members?: ModelHAMember[]
  mode: 'preempt' | 'nopreempt'
  /** @minLength 1 */
  name: string
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 1
   * @max 255
   */
  routeID: number
  /** @maxItems 2 */
  types: string[]
  virtualIPs?: string[]
}

export interface ModelHAGroupDeleteDTO {
  ids: number[]
}

export interface ModelHAGroupQueryVO {
  arpInterval?: number
  id?: number
  interval?: number
  members?: ModelHAMember[]
  mode?: string
  name?: string
  remark?: string
  routeID?: number
  status?: 'normal' | 'tierdown' | 'breakdown'
  types?: string[]
  updatedAt?: string
  virtualIPs?: string[]
}

export interface ModelHAGroupUpdateDTO {
  arpInterval?: number
  /**
   * @min 1
   * @max 300
   */
  interval: number
  /** @minItems 1 */
  members?: ModelHAMember[]
  mode: 'preempt' | 'nopreempt'
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 1
   * @max 255
   */
  routeID: number
  /** @maxItems 3 */
  types: string[]
  virtualIPs?: string[]
}

export interface ModelHAMember {
  deviceID: number
  deviceInterface: string
  deviceInterfaceIP: string
  deviceName?: string
  role?: 'master' | 'slave' | 'stop' | 'init' | 'unknown' | 'fault'
}

export interface ModelIPPoolDeleteDTO {
  ids: number[]
}

export interface ModelIPPoolNamesQueryVO {
  endIP?: number[]
  id?: number
  startIP?: number[]
}

export interface ModelISPAddressVO {
  label?: string
  value?: number
}

export interface ModelIntelligentCacheCreateDTO {
  effectRange?: SqlmodelEffectRange[]
  enabled?: boolean
  /**
   * @min 10
   * @max 86400
   */
  intelligentTtl: number
  /**
   * @min 1
   * @max 10
   */
  triggerTtl: number
  viewID?: number
}

export interface ModelIntelligentCacheDeleteDTO {
  ids: number[]
}

export interface ModelIntelligentCacheQueryVO {
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  intelligentTtl?: number
  triggerTtl?: number
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelIntelligentCacheUpdateDTO {
  effectRange?: SqlmodelEffectRange[]
  enabled?: boolean
  /**
   * @min 10
   * @max 86400
   */
  intelligentTtl: number
  /**
   * @min 1
   * @max 10
   */
  triggerTtl: number
  viewID?: number
}

export interface ModelInternalDomain {
  viewID: number
  zoneID: number
}

export interface ModelIpAclAllowCreateDTO {
  acls: string[]
  effectRange: SqlmodelEffectRange[]
  /** @maxLength 255 */
  remark?: string
}

export interface ModelIpAclAllowUpdateDTO {
  acl: string
  effectRange?: SqlmodelEffectRange[]
  /** @maxLength 255 */
  remark?: string
}

export interface ModelIpAclDeleteDTO {
  ids: number[]
  mode: 'allow' | 'deny'
}

export interface ModelIpAclDenyCreateDTO {
  effectRange: SqlmodelEffectRange[]
  ips: string[]
  /** @maxLength 255 */
  remark?: string
}

export interface ModelIpAclDenyExportDTO {
  ids?: number[]
}

export interface ModelIpAclDenyExportVO {
  acl: string
  effectRange: SqlmodelEffectRange[]
  id?: number
  newAcl?: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelIpAclDenyQueryVO {
  effectRange: SqlmodelEffectRange[]
  id?: number
  ip?: string
  remark?: string
  updatedAt?: string
}

export interface ModelIpAclDenyUpdateDTO {
  effectRange?: SqlmodelEffectRange[]
  ip: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelIpAclQueryVO {
  acl?: string
  effectRange: SqlmodelEffectRange[]
  id?: number
  remark?: string
  updatedAt?: string
}

export interface ModelIpAclUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  mode: 'allow' | 'deny'
  reason?: string
}

export interface ModelIpamAddrCreateDTO {
  authEnabled?: boolean
  /** 域名 */
  authrrName?: string
  custom?: Record<string, any>
  /** @uniqueItems true */
  ips: string[]
  /** v4支持mac，v6需要支持mac或duid */
  matchMode: 'mac' | 'duid'
  /** @minItems 0 */
  matchPatterns: string[]
  networkID: number
  withPTR?: boolean
  zoneID?: number
}

export interface ModelIpamAddrDeleteDTO {
  relations: ModelNetworkIPRelation[]
  withPTR?: boolean
}

export interface ModelIpamAddrDetailVO {
  /** 生成权威记录 */
  authEnabled?: boolean
  /** 授权记录ID */
  authrrID?: number
  /** 域名 */
  authrrName?: string
  /** 自定义属性 */
  custom?: Record<string, any>
  /** ip地址 */
  ip?: string
  /** 匹配模式 */
  matchMode?: string
  /** 匹配值 */
  matchPattern?: string
  /** 所属网段ID */
  networkID?: number
  /** 网段名称 */
  networkName?: string
  /** 区名称 */
  viewName?: string
  /** 联动管理PTR记录 */
  withPTR?: boolean
  /** 区ID */
  zoneID?: number
  /** 区名称 */
  zoneName?: string
}

export interface ModelIpamAddrUpdateDTO {
  authEnabled?: boolean
  /** 域名 */
  authrrName?: string
  custom?: Record<string, any>
  ip: string
  matchMode: 'mac' | 'duid'
  matchPattern?: string
  networkID: number
  withPTR?: boolean
  zoneID?: number
}

export interface ModelIpamDeviceOptions {
  authAlgo?: string
  authPwd?: string
  authentication?: string
  community?: string
  enabledUnsafe?: boolean
  encipherAlgo?: string
  encipherPwd?: string
  password?: string
  protocol?: string
  username?: string
  version?: string
}

export interface ModelIpamDeviceScanCancelDTO {
  ids: number[]
}

export interface ModelIpamDeviceScanCreateDTO {
  deviceHost: string
  deviceID: number
  /** @maxLength 255 */
  deviceName?: string
  devicePort?: number
  deviceType: 'switch' | 'router' | 'vmware' | 'openstack' | 'azure' | 'ad'
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
  scanOptions?: ModelIpamDeviceOptions
  schedule: StructsJobPlan
  spaceID?: number
  ssh?: ModelSSHOptionsCreate
  switchType?: 'access' | 'core'
}

export interface ModelIpamDeviceScanDeleteDTO {
  ids: number[]
}

export interface ModelIpamDeviceScanDisconveryDTO {
  ids: number[]
}

export interface ModelIpamDeviceScanExecuteDTO {
  ids: number[]
}

export interface ModelIpamDeviceScanQueryVO {
  createdAt?: string
  createdBy?: number
  deviceHost?: string
  deviceID?: number
  deviceName?: string
  devicePort?: number
  deviceType?: string
  enabled?: boolean
  id?: number
  lastScanResult?: StructsIpamLastScanResult
  remark?: string
  /** 扫描的交换机名称 */
  scanName?: string
  scanOptions?: Record<string, any>
  scannerName?: string
  schedule?: StructsJobPlan
  spaceID?: number
  ssh?: ModelSSHOptionsVO
  updatedAt?: string
  updatedBy?: number
}

export interface ModelIpamDeviceScanUpdateDTO {
  deviceHost: string
  deviceID: number
  /** @maxLength 255 */
  deviceName?: string
  devicePort?: number
  deviceType: 'switch' | 'router' | 'vmware' | 'openstack' | 'azure' | 'ad'
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
  scanOptions?: ModelIpamDeviceOptions
  schedule: StructsJobPlan
  spaceID?: number
  ssh?: ModelSSHOptionsUpdate
  switchType?: 'access' | 'core'
}

export interface ModelIpamDeviceSwitchScanQueryVO {
  id?: number
  scanName?: string
}

export interface ModelIpamDeviceSwitchScanVlanQueryVO {
  descr?: string
  pvid?: string
}

export interface ModelIpamExchangeBondDTO {
  deviceScanID: number
  id?: number
  interface: string
  mac: string
  pvid: string
}

export interface ModelIpamExchangeDeleteDTO {
  ids: number[]
}

export interface ModelIpamExchangeQueryVO {
  id?: number
  interface?: string
  mac?: string
  pvid?: string
  switchName?: string
  type?: string
  updatedAt?: string
}

export interface ModelIpamExchangeSealUpDTO {
  deviceScanIDs: number[]
  mac: string
}

export interface ModelIpamExchangeUnBondDTO {
  deviceScanID: number
  interface: string
  mac: string
  pvid: string
}

export interface ModelIpamExchangeUnSealUpDTO {
  deviceScanID: number
  mac: string
}

export interface ModelIpamIpAuditExportDTO {
  ids?: number[]
}

export interface ModelIpamIpAuditQueryVO {
  /** 活跃时间 */
  activeTime?: string
  /** CreatedAt holds the value of the "created_at" field. */
  createdAt?: string
  /** CreatedBy holds the value of the "created_by" field. */
  createdBy?: number
  /** 记录名称 */
  dnsZoneAuthName?: string
  /** 结束时间 */
  endTime?: string
  /** ID of the ent. */
  id?: number
  /** IP地址 */
  ip?: string
  /** 租约状态 3:已超时 4:renew续租 5: rebind续租 6:已分配 7:已释放 8:已回收 9:已删除 */
  leaseState?: string
  /** MAC地址 */
  mac?: string
  /** NetBIOS名称 */
  netbiosName?: string
  /** 网络ID */
  networkID?: number
  /** 网卡 */
  networkInterface?: string
  /** 操作系统类型 */
  osType?: string
  /** 扫描MAC地址 */
  scanMac?: string
  /** 扫描网卡 */
  scanNetworkInterfaces?: string[]
  /** 开始时间 */
  startTime?: string
  /** UpdatedAt holds the value of the "updated_at" field. */
  updatedAt?: string
  /** UpdatedBy holds the value of the "updated_by" field. */
  updatedBy?: number
}

export interface ModelIpamIpAuditSetting {
  /** 审计网络 */
  auditNetworkID?: number[]
}

export interface ModelIpamIpAuditSyslogSetting {
  /** 启用 */
  isEnable?: boolean
  /** 协议 */
  protocol: 'UDP' | 'TCP'
  /**
   * 服务器
   * @minItems 0
   */
  servers?: string[]
}

export interface ModelIpamMacExportDTO {
  ids?: number[]
}

export interface ModelIpamNetScanCancelDTO {
  ids: number[]
}

export interface ModelIpamNetScanCreateDTO {
  deviceID: number
  enabled?: boolean
  /** @uniqueItems true */
  networkIDs: number[]
  /** @uniqueItems true */
  protocolList: string[]
  /** @maxLength 255 */
  remark?: string
  schedule: StructsJobPlan
  spaceID?: number
}

export interface ModelIpamNetScanDeleteDTO {
  ids: number[]
}

export interface ModelIpamNetScanExecuteDTO {
  ids: number[]
}

export interface ModelIpamNetScanQueryVO {
  createdAt?: string
  createdBy?: number
  deviceID?: number
  enabled?: boolean
  id?: number
  lastScanResult?: StructsIpamLastScanResult
  /** 网段 */
  network?: string
  networkID?: number
  protocolList?: string[]
  remark?: string
  scannerName?: string
  schedule?: StructsJobPlan
  spaceID?: number
  updatedAt?: string
  updatedBy?: number
}

export interface ModelIpamNetScanUpdateDTO {
  deviceID: number
  enabled?: boolean
  networkID?: number
  /** @uniqueItems true */
  protocolList: string[]
  /** @maxLength 255 */
  remark?: string
  schedule: StructsJobPlan
  spaceID?: number
}

export interface ModelKeywordPageRequestDTO {
  keyword?: string
  /** @example 1 */
  page: number
  /** @example 10 */
  pageSize: number
}

export interface ModelLicenseAllowQueryDTO {
  keyword?: string
}

export interface ModelLicenseAllowQueryVO {
  allow?: string
  deviceID?: number
  deviceName?: string
  id?: number
  qps?: number
  status?: number
  updatedAt?: string
}

export interface ModelLicenseExportDTO {
  ids?: number[]
}

export interface ModelLicenseFuncItemVO {
  endAt?: string
  name?: string
  parent?: string
  remainDay?: number
  startAt?: string
  status?: number
}

export interface ModelLicenseFuncQueryVO {
  customerName?: string
  functions?: ModelLicenseFuncItemVO[]
  productName?: string
}

export interface ModelLicenseHistoryFunctionItem {
  day?: number
  name?: string
  parent?: string
}

export interface ModelLicenseHistoryQueryVO {
  createdAt?: string
  customerName?: string
  functions?: ModelLicenseHistoryFunctionItem[]
  id?: number
  productName?: string
  status?: number
  type?: string
}

export interface ModelLicenseImportDTO {
  file: MultipartFileHeader
}

export interface ModelLicenseQueryDTO {
  keyword?: string
  /** @example 1 */
  page: number
  /** @example 10 */
  pageSize: number
}

export interface ModelLicenseShareQueryVO {
  deadlineAt?: string
  hasQuotaNum?: number
  id?: number
  num?: number
  qps?: number
  quotaNum?: number
  remainDay?: number
  resourceName?: string
  status?: number
  updatedAt?: string
}

export interface ModelLine {
  from?: ModelLineCommon
  to?: ModelLineCommon
}

export interface ModelLineCommon {
  id?: number
  type?: string
}

export interface ModelLoginDTO {
  code?: string
  mode?: string
  password: string
  type?: string
  username: string
}

export interface ModelLoginVO {
  accessToken?: string
  hasRealIp?: boolean
  /** 是否首次登录 */
  isFirstLogin?: boolean
  isSupper?: boolean
  licensePermissions?: string[]
  licenseWarning?: any[]
  lockedAt?: string
  nickname?: string
  permissions?: string[]
  roleID?: number
  roleName?: string
  /** 状态: disable-禁用 enable-启用 disable-锁定 */
  status?: string
  userId?: number
  username?: string
}

export interface ModelMACCreateDTO {
  custom?: Record<string, any>
  groups: number[]
  macs: string[]
  /** @maxLength 255 */
  remark?: string
}

export interface ModelMACCreateOne {
  custom?: Record<string, any>
  groups: number[]
  mac: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelMACDeleteDTO {
  ids: number[]
}

export interface ModelMACGroupQueryVO {
  id?: number
  name?: string
}

export interface ModelMACGroupUpdateCommon {
  /**
   * @minLength 1
   * @maxLength 128
   */
  name: string
}

export interface ModelMACGroupUpdateDTO {
  macGroups: ModelMACGroupUpdateCommon[]
}

export interface ModelMACQueryVO {
  custom?: Record<string, any>
  groups?: ModelMACGroupQueryVO[]
  id?: number
  mac?: string
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
}

export interface ModelMACUpdateDTO {
  custom?: Record<string, any>
  groups: number[]
  /** @maxLength 255 */
  remark?: string
}

export interface ModelMacDiscoverDeleteDTO {
  ids: number[]
}

export interface ModelMacDiscoverVO {
  activeTime?: string
  fingerprintsName?: string
  host?: string
  id?: number
  ip?: string
  mac?: string
  networkLcation?: Record<string, StructsSNMPDialStatus>
}

export interface ModelMacGenerateDTO {
  data?: ModelMACCreateOne[]
}

export type ModelMapStringSampleValue = Record<string, number>

export interface ModelMonitorCreateDTO {
  aliasAddress?: string
  aliasPort?: number
  groupID: number
  info?: ModelGslbMonitorInfoCommon
  /**
   * @min 1
   * @max 86400
   */
  interval: number
  /** @maxLength 255 */
  name: string
  /**
   * protocol=ICMP|UDP|SNMP|SNMPLINK,此字段必填
   * @max 4294967295
   */
  probeAttempts?: number
  /**
   * protocol=ICMP|UDP|SNMP|SNMPLINK,此字段必填
   * @max 4294967295
   */
  probeInterval?: number
  /** @max 4294967295 */
  probeTimeout: number
  protocol:
    | 'UDP'
    | 'TCP'
    | 'SNMP'
    | 'SMTP'
    | 'ORACLE'
    | 'MYSQL'
    | 'ICMP'
    | 'HTTPS'
    | 'HTTP'
    | 'FTP'
    | 'DNS'
    | 'TCPSYN'
    | 'TCPKEEP'
    | 'SNMPLINK'
    | 'POSTGRESQL'
    | 'DB2'
  /** @maxLength 255 */
  remark?: string
  /** @max 86400 */
  timeout: number
}

export interface ModelMonitorDeleteDTO {
  ids: number[]
}

export interface ModelMonitorExportDTO {
  ids?: number[]
}

export interface ModelMonitorImportDTO {
  file: MultipartFileHeader
  type: string
}

export interface ModelMonitorQueryVO {
  aliasAddress?: string
  aliasPort?: number
  groupID?: number
  groupName?: string
  id?: number
  info?: any
  interval?: number
  name?: string
  probeAttempts?: number
  probeInterval?: number
  probeTimeout?: number
  protocol?: string
  readonly?: boolean
  remark?: string
  timeout?: number
}

export interface ModelMonitorUpdateDTO {
  aliasAddress?: string
  aliasPort?: number
  info?: ModelGslbMonitorInfoCommon
  /**
   * @min 1
   * @max 86400
   */
  interval: number
  /**
   * protocol=ICMP|UDP|SNMP|SNMPLINK,此字段必填
   * @max 4294967295
   */
  probeAttempts?: number
  /**
   * protocol=ICMP|UDP|SNMP|SNMPLINK,此字段必填
   * @max 4294967295
   */
  probeInterval?: number
  /** @max 4294967295 */
  probeTimeout: number
  protocol:
    | 'UDP'
    | 'TCP'
    | 'SNMP'
    | 'SMTP'
    | 'ORACLE'
    | 'MYSQL'
    | 'ICMP'
    | 'HTTPS'
    | 'HTTP'
    | 'FTP'
    | 'DNS'
    | 'TCPSYN'
    | 'TCPKEEP'
    | 'SNMPLINK'
    | 'POSTGRESQL'
    | 'DB2'
  /** @maxLength 255 */
  remark?: string
  /** @max 86400 */
  timeout: number
}

export interface ModelNetworkCreateDTO {
  addresses: string[]
  custom?: Record<string, any>
  dhcpNodeID?: number
  dhcpTemplateIDs?: number[]
  dnsEffectRange?: SqlmodelEffectRange[]
  dnsViewID?: number
  groupID: number
  isEnableDHCP?: boolean
  isGenerateReverseZone?: boolean
  isMonitor?: boolean
  parentID?: number
  /** @maxLength 255 */
  remark?: string
  /** 网络空间，不需要传值 */
  spaceID?: number
  /** @maxItems 4 */
  thresholds?: StructsThreshold[]
}

export interface ModelNetworkDeleteDTO {
  ids: number[]
  /** 删除DNS反向域 */
  isDeleteDnsReverse?: boolean
  /** 是否删除子网 */
  isDeleteSubNetwork?: boolean
}

export interface ModelNetworkDetailVO {
  address?: string
  custom?: Record<string, any>
  ddns?: string
  dhcpNodeID?: number
  dhcpNodeName?: string
  dnsSuffix?: string
  domainServers?: string[]
  enablePing?: boolean
  gateway?: string
  groupID?: number
  /** 分组名称 */
  groupName?: string
  hasConflict?: boolean
  hasUnmanage?: boolean
  id?: number
  ip?: string
  isLeaf?: boolean
  /** 是否监控 */
  isMonitor?: boolean
  leaseTime?: SqlmodelDhcpLeaseTime
  mask?: number
  parentAddress?: string
  parentID?: number
  remark?: string
  shareNetworkIDs?: number[]
  spaceID?: number
  /** 告警配置 */
  thresholds?: StructsThreshold[]
  total?: number
  version?: number
}

export interface ModelNetworkExportDTO {
  ids?: number[]
}

export interface ModelNetworkIPRelation {
  /** @uniqueItems true */
  ips: string[]
  networkID: number
}

export interface ModelNetworkListQueryVO {
  address?: string
  id?: number
  version?: number
}

export interface ModelNetworkMaskDTO {
  mask?: number
}

export interface ModelNetworkMergeDTO {
  mask: number
}

export interface ModelNetworkQueryVO {
  address?: string
  custom?: Record<string, any>
  ddns?: string
  dhcpNodeID?: number
  dhcpNodeName?: string
  dnsSuffix?: string
  domainServers?: string[]
  enablePing?: boolean
  gateway?: string
  groupID?: number
  /** 分组名称 */
  groupName?: string
  hasConflict?: boolean
  hasUnmanage?: boolean
  id?: number
  ip?: string
  isLeaf?: boolean
  /** 是否监控 */
  isMonitor?: boolean
  leaseTime?: SqlmodelDhcpLeaseTime
  mask?: number
  parentAddress?: string
  parentID?: number
  remark?: string
  shareNetworkIDs?: number[]
  spaceID?: number
  /** 告警配置 */
  thresholds?: StructsThreshold[]
  total?: number
  version?: number
}

export interface ModelNetworkSetting {
  /**
   * 自动回收阈值
   * @min 1
   * @max 365
   */
  autoRecycleZombieThreshold?: number
  /** 僵尸地址自动回收 */
  isAutoRecycleZombie?: boolean
  /** 反向域设备 */
  reverseEffectRange?: SqlmodelEffectRange[]
  /** 反向域视图                                                                              // 反向域视图 */
  reverseViewID?: number
  /**
   * 僵尸地址阈值
   * @min 1
   * @max 365
   */
  zombieThreshold: number
}

export interface ModelNetworkSplitDTO {
  address: string
  groupID?: number
  num: number
  subnets: string[]
}

export interface ModelNetworkUpdateDTO {
  address?: string
  businessErrors?: any[]
  custom?: Record<string, any>
  excelRow?: number
  groupID: number
  isMonitor?: boolean
  /** @maxLength 255 */
  remark?: string
  /** @maxItems 4 */
  thresholds?: StructsThreshold[]
}

export interface ModelNxrCreateDTO {
  effectRange: SqlmodelEffectRange[]
  radataWeight?: number
  rdataIp: string
  /** @maxLength 255 */
  remark?: string
  viewID: number
}

export interface ModelNxrDeleteDTO {
  ids: number[]
}

export interface ModelNxrQueryVO {
  effectRange: SqlmodelEffectRange[]
  id?: number
  radataWeight?: number
  rdataIp?: string
  remark?: string
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelNxrUpdateDTO {
  effectRange?: SqlmodelEffectRange[]
  radataWeight?: number
  rdataIp: string
  /** @maxLength 255 */
  remark?: string
  viewID: number
}

export interface ModelNxrUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelOptionDTO {
  force?: boolean
  /** options分组主键 */
  groupID: number
  id?: number
  /** option主键 */
  optionID: number
  /** option值 */
  value: string
}

export interface ModelOptionReferenceCreateDTO {
  code?: number
  /** @maxLength 255 */
  name: string
  valueType:
    | 'boolean'
    | 'ip'
    | 'domain'
    | 'aip'
    | 'adomain'
    | 'string'
    | 'text'
    | 'u8'
    | 'i8'
    | 'u16'
    | 'i16'
    | 'u32'
    | 'i32'
    | 'au8'
    | 'a8'
    | 'au16'
    | 'a16'
    | 'au32'
    | 'a32'
}

export interface ModelOptionReferenceQueryVO {
  code?: number
  name?: string
  optionID?: number
  valueType?: string
}

export interface ModelOptionReferenceUpdateDTO {
  code?: number
  id?: number
  /** @maxLength 255 */
  name: string
  valueType:
    | 'boolean'
    | 'ip'
    | 'domain'
    | 'aip'
    | 'adomain'
    | 'string'
    | 'text'
    | 'u8'
    | 'i8'
    | 'u16'
    | 'i16'
    | 'u32'
    | 'i32'
    | 'au8'
    | 'a8'
    | 'au16'
    | 'a16'
    | 'au32'
    | 'a32'
}

export interface ModelOptionReferenceVO {
  code?: number
  id?: number
  name?: string
  valueType?: string
}

export interface ModelOptionVO {
  /** option代码 */
  code?: number
  /** 强制下发 */
  force?: boolean
  /** options分组主键 */
  groupID?: number
  /** options分组名称 */
  groupName?: string
  id?: number
  /** IPV4(4)或IPv6(6) */
  ipVer?: number
  /** option名称 */
  name?: string
  /** option主键 */
  optionID?: number
  /** option值 */
  value?: string
  /** option类型 */
  valueType?: string
}

export interface ModelOptionsCreateDTO {
  /** @maxLength 255 */
  groupName: string
  options: ModelOptionReferenceCreateDTO[]
  /** @maxLength 255 */
  remark?: string
  version: number
}

export interface ModelOptionsDeleteDTO {
  ids: number[]
}

export interface ModelOptionsQueryVO {
  groupName?: string
  id?: number
  options?: ModelOptionReferenceVO[]
  optionsCount?: number
  remark?: string
  version?: number
}

export interface ModelOptionsUpdateDTO {
  /** @maxLength 255 */
  groupName: string
  options: ModelOptionReferenceUpdateDTO[]
  /** @maxLength 255 */
  remark?: string
  version: number
}

export interface ModelPoolCreateDTO {
  authrrName?: string
  /**
   * @min 1
   * @max 365
   */
  bindDays?: number
  /** @uniqueItems true */
  blackList?: number[]
  cfgMode?: 'addr' | 'prefix' | 'all'
  custom?: Record<string, any>
  ddns?: 'disable' | 'enable' | 'floating-host'
  dnsSuffix?: string
  dnsSuffixStrategy?: 'inherit' | 'rewrite'
  /** @uniqueItems true */
  domainServers?: string[]
  domainServersStrategy?: 'inherit' | 'rewrite'
  enableAutoBind?: boolean
  enableDdnsStrategy?: 'inherit' | 'rewrite'
  enableTemplate?: boolean
  endIP?: string
  endPrefix?: string
  gateway?: string
  gatewayStrategy?: 'inherit' | 'rewrite'
  interface?: string
  leaseTime?: SqlmodelDhcpLeaseTime
  leaseTimeStrategy?: 'inherit' | 'rewrite'
  matchMode?: 'mac' | 'duid'
  matchPattern?: string
  networkID: number
  nextServer?: string
  options?: ModelOptionDTO[]
  /**
   * @min 56
   * @max 128
   */
  prefixLength?: number
  /** @maxLength 255 */
  remark?: string
  startIP?: string
  startPrefix?: string
  templateIDs?: number[]
  type?: 'fixed' | 'dynamic' | 'reserved'
  version: number
  viewName?: string
  /** @uniqueItems true */
  whiteList?: number[]
}

export interface ModelPoolGlobalSettingDTO {
  /**
   * @min 1
   * @max 365
   */
  bindDays?: number
  /** @uniqueItems true */
  blackList?: number[]
  ddns: 'disable' | 'enable' | 'floating-host'
  dnsSuffix?: string
  /** @uniqueItems true */
  domainServers?: string[]
  enableAutoBind?: boolean
  /**
   * @min 1
   * @max 16777214
   */
  gatewayOffset: number
  leaseTime: SqlmodelDhcpLeaseTime
  nextServer?: string
  options?: ModelPoolGlobalSettingOptionDTO[]
  /** @uniqueItems true */
  whiteList?: number[]
}

export interface ModelPoolGlobalSettingOptionDTO {
  force?: boolean
  /** options分组主键 */
  groupID: number
  /** option主键 */
  optionID: number
  /** option值 */
  value: string
}

export interface ModelPoolGlobalSettingOptionVO {
  /** option代码 */
  code?: number
  /** 强制下发 */
  force?: boolean
  /** options分组主键 */
  groupID?: number
  /** options分组名称 */
  groupName?: string
  /** IPV4(4)或IPv6(6) */
  ipVer?: number
  /** option名称 */
  name?: string
  /** option主键 */
  optionID?: number
  /** option值 */
  value?: string
  /** option类型 */
  valueType?: string
}

export interface ModelPoolGlobalSettingVO {
  bindDays?: number
  blackList?: number[]
  ddns?: string
  dnsSuffix?: string
  domainServers?: string[]
  enableAutoBind?: boolean
  gatewayOffset?: number
  leaseTime?: SqlmodelDhcpLeaseTime
  nextServer?: string
  options?: ModelPoolGlobalSettingOptionVO[]
  whiteList?: number[]
}

export interface ModelPoolNamesQueryVO {
  address?: string
  id?: number
}

export interface ModelPoolNetworkBatchUpdateDTO {
  ddns?: 'disable' | 'enable' | 'floating-host'
  dnsSuffix?: string
  /** @uniqueItems true */
  domainServers?: string[]
  enablePing?: boolean
  /**
   * @min 1
   * @max 16777214
   */
  gatewayOffset?: number
  /** @uniqueItems true */
  ids: number[]
  leaseTime?: SqlmodelDhcpLeaseTime
}

export interface ModelPoolNetworkUpdateDTO {
  ddns: 'disable' | 'enable' | 'floating-host'
  dnsSuffix?: string
  /** @uniqueItems true */
  domainServers?: string[]
  enablePing?: boolean
  gateway?: string
  leaseTime: SqlmodelDhcpLeaseTime
}

export interface ModelPoolNodeBatchUpdateDTO {
  dhcpNodeID?: number
  /** @uniqueItems true */
  ids: number[]
}

export interface ModelPoolQueryVO {
  addressCount?: string
  authrrName?: string
  bindDays?: number
  blackList?: number[]
  cfgMode?: string
  createdAt?: string
  createdBy?: number
  custom?: Record<string, any>
  ddns?: string
  dhcpUsed?: number
  dnsSuffix?: string
  dnsSuffixStrategy?: string
  domainServers?: string[]
  domainServersStrategy?: string
  enableAutoBind?: boolean
  enableDdnsStrategy?: string
  enableTemplate?: boolean
  endIP?: number[]
  endPrefix?: string
  gateway?: string
  gatewayStrategy?: string
  id?: number
  interface?: string
  leaseTime?: SqlmodelDhcpLeaseTime
  leaseTimeStrategy?: string
  matchMode?: string
  matchPattern?: string
  networkID?: number
  nextServer?: string
  options?: ModelOptionVO[]
  prefixLength?: number
  remark?: string
  startIP?: number[]
  startPrefix?: string
  templateID?: number
  total?: string
  type?: string
  updatedAt?: string
  updatedBy?: number
  used?: string
  version?: number
  viewName?: string
  whiteList?: number[]
}

export interface ModelPoolUpdateDTO {
  authrrName?: string
  /**
   * @min 1
   * @max 365
   */
  bindDays?: number
  /** @uniqueItems true */
  blackList?: number[]
  cfgMode?: 'addr' | 'prefix' | 'all'
  custom?: Record<string, any>
  ddns?: 'disable' | 'enable' | 'floating-host'
  dnsSuffix?: string
  dnsSuffixStrategy?: 'inherit' | 'rewrite'
  /** @uniqueItems true */
  domainServers?: string[]
  domainServersStrategy?: 'inherit' | 'rewrite'
  enableAutoBind?: boolean
  enableDdnsStrategy?: 'inherit' | 'rewrite'
  enableTemplate?: boolean
  endIP?: string
  endPrefix?: string
  gateway?: string
  gatewayStrategy?: 'inherit' | 'rewrite'
  interface?: string
  leaseTime?: SqlmodelDhcpLeaseTime
  leaseTimeStrategy?: 'inherit' | 'rewrite'
  matchMode?: 'mac' | 'duid'
  matchPattern?: string
  networkID: number
  nextServer?: string
  options?: ModelOptionDTO[]
  /**
   * @min 56
   * @max 128
   */
  prefixLength?: number
  /** @maxLength 255 */
  remark?: string
  startIP?: string
  startPrefix?: string
  type?: 'fixed' | 'dynamic' | 'reserved'
  version: number
  viewName?: string
  /** @uniqueItems true */
  whiteList?: number[]
}

export interface ModelQtypeAclCreateDTO {
  /** @maxLength 100 */
  action: 'nodata' | 'drop'
  /** @maxLength 100 */
  effect: 'all' | 'exceptdns'
  effectRange: SqlmodelEffectRange[]
  /** @maxLength 16 */
  qtype: 'AAAA PTR TXT NULL ANY NS CNAME SRV NAPTR MX'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelQtypeAclDeleteDTO {
  ids: number[]
}

export interface ModelQtypeAclQueryVO {
  action?: string
  effect?: string
  effectRange: SqlmodelEffectRange[]
  id?: number
  qtype?: string
  remark?: string
  updatedAt?: string
}

export interface ModelQtypeAclUpdateDTO {
  /** @maxLength 100 */
  action: 'nodata' | 'drop'
  /** @maxLength 100 */
  effect: 'all' | 'exceptdns'
  effectRange?: SqlmodelEffectRange[]
  /** @maxLength 16 */
  qtype: 'AAAA PTR TXT NULL ANY NS CNAME SRV NAPTR MX'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelQtypeAclUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelRateDomainLimitCreateDTO {
  domains: string[]
  effectRange: SqlmodelEffectRange[]
  /**
   * @min 0
   * @max 4294967295
   */
  limit: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRateDomainLimitDeleteDTO {
  ids: number[]
}

export interface ModelRateDomainLimitQueryVO {
  domain?: string
  effectRange: SqlmodelEffectRange[]
  id?: number
  limit?: number
  remark?: string
  updatedAt?: string
}

export interface ModelRateDomainLimitUpdateDTO {
  /** @maxLength 253 */
  domain: string
  effectRange?: SqlmodelEffectRange[]
  /**
   * @min 0
   * @max 4294967295
   */
  limit: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRateDomainLimitUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelRateIpLimitCreateDTO {
  effectRange: SqlmodelEffectRange[]
  ips: string[]
  /**
   * @min 0
   * @max 4294967295
   */
  limit: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRateIpLimitDeleteDTO {
  ids: number[]
}

export interface ModelRateIpLimitQueryVO {
  effectRange: SqlmodelEffectRange[]
  id?: number
  ip?: string
  limit?: number
  remark?: string
  updatedAt?: string
}

export interface ModelRateIpLimitUpdateDTO {
  effectRange?: SqlmodelEffectRange[]
  ip: string
  /**
   * @min 0
   * @max 4294967295
   */
  limit: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRateIpLimitUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelRecursionCacheTtlCreateDTO {
  domains?: string[]
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  /**
   * @min 0
   * @max 4294967295
   */
  maxTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  minTtl?: number
  /** @maxLength 255 */
  remark?: string
  type: 'domain' | 'domainlibrary'
  viewID: number
}

export interface ModelRecursionCacheTtlDeleteDTO {
  ids: number[]
}

export interface ModelRecursionCacheTtlExportDTO {
  effectRange: SqlmodelEffectRange[]
  ids?: number[]
}

export interface ModelRecursionCacheTtlQueryVO {
  domain: string
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  innerType?: 'domain' | 'domainlib' | 'domainlib_builtin'
  /** @max 4294967295 */
  maxTtl?: number
  /** @max 4294967294 */
  minTtl?: number
  /** @maxLength 255 */
  remark?: string
  type: 'domain' | 'domainlibrary'
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelRecursionCacheTtlUpdateDTO {
  /** @maxLength 253 */
  domain: string
  enabled?: boolean
  /**
   * @min 0
   * @max 4294967295
   */
  maxTtl?: number
  /**
   * @min 0
   * @max 604800
   */
  minTtl?: number
  /** @maxLength 255 */
  remark?: string
  type: 'domain' | 'domainlibrary'
  viewID: number
}

export interface ModelRecursionCacheTtlUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelRecursionForwardDomainCreateDTO {
  algorithm: 'srtt' | 'weight'
  domainLibrarys?: string[]
  domains?: string[]
  ecs?: boolean
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  mode: 'first' | 'only'
  recursionResMergeSwitch?: boolean
  /** @maxLength 255 */
  remark?: string
  serverGroupID?: number
  stripCname?: boolean
  type: 'domain' | 'domainlibrary'
  viewID: number
}

export interface ModelRecursionForwardDomainDeleteDTO {
  ids: number[]
}

export interface ModelRecursionForwardDomainEffectRangeUpdateDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface ModelRecursionForwardDomainExportDTO {
  ids?: number[]
}

export interface ModelRecursionForwardDomainExportVO {
  _?: 'domain' | 'domainlibrary'
  algorithm: 'srtt' | 'weight'
  domain?: string
  domainLib?: string
  ecs?: boolean
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  mode: 'first' | 'only'
  recursionResMergeSwitch?: boolean
  /** @maxLength 255 */
  remark?: string
  serverGroupID?: number
  serverGroupName: string
  stripCname?: boolean
  viewID?: number
  /**
   * @minLength 1
   * @maxLength 128
   */
  viewName: string
}

export interface ModelRecursionForwardDomainQueryVO {
  algorithm: 'srtt' | 'weight'
  domain?: string
  domainLibrary?: string
  ecs?: boolean
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  mode: 'first' | 'only'
  recursionResMergeSwitch?: boolean
  /** @maxLength 255 */
  remark?: string
  serverGroupID?: number
  serverGroupName?: string
  stripCname?: boolean
  type: 'domain' | 'domainlibrary'
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelRecursionForwardDomainUpdateDTO {
  algorithm: 'srtt' | 'weight'
  domain?: string
  domainLibrary?: string
  ecs?: boolean
  enabled?: boolean
  mode: 'first' | 'only'
  recursionResMergeSwitch?: boolean
  /** @maxLength 255 */
  remark?: string
  serverGroupID?: number
  stripCname?: boolean
  type: 'domain' | 'domainlibrary'
}

export interface ModelRecursionForwardExceptCreateDTO {
  domains?: string[]
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
  viewID: number
}

export interface ModelRecursionForwardExceptDeleteDTO {
  ids: number[]
}

export interface ModelRecursionForwardExceptQueryVO {
  domain?: string
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelRecursionForwardExceptUpdateDTO {
  domain: string
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRecursionForwardExceptffectRangeUpdateDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface ModelRecursionForwardGlobalCreateDTO {
  algorithm: 'srtt' | 'weight'
  ecs?: boolean
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  mode: 'first' | 'only'
  /** @maxLength 255 */
  remark?: string
  serverGroupID: number
  viewID: number
}

export interface ModelRecursionForwardGlobalDeleteDTO {
  ids: number[]
}

export interface ModelRecursionForwardGlobalQueryVO {
  algorithm: 'srtt' | 'weight'
  ecs?: boolean
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  mode: 'first' | 'only'
  recursionResMergeSwitch?: boolean
  /** @maxLength 255 */
  remark?: string
  serverGroupID?: number
  serverGroupName?: string
  stripCname?: boolean
  type: 'domain' | 'domainlibrary'
  updatedAt?: string
  viewID: number
  /**
   * @minLength 1
   * @maxLength 128
   */
  viewName?: string
}

export interface ModelRecursionForwardGlobalRangeUpdateDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface ModelRecursionForwardGlobalUpdateDTO {
  algorithm: 'srtt' | 'weight'
  ecs?: boolean
  enabled?: boolean
  mode: 'first' | 'only'
  /** @maxLength 255 */
  remark?: string
  serverGroupID: number
}

export interface ModelRecursionForwardServerGroupCreateDTO {
  monitorEnabled?: boolean
  name: string
  /** @maxLength 255 */
  remark?: string
  servers: StructsRecursionForwardServer[]
}

export interface ModelRecursionForwardServerGroupDeleteDTO {
  ids: number[]
}

export interface ModelRecursionForwardServerGroupQueryVO {
  id?: number
  monitorEnabled?: boolean
  name?: string
  /** @maxLength 255 */
  remark?: string
  servers: StructsRecursionForwardServer[]
  updatedAt?: string
}

export interface ModelRecursionForwardServerGroupUpdateDTO {
  monitorEnabled?: boolean
  /** @maxLength 255 */
  remark?: string
  servers: StructsRecursionForwardServer[]
}

export interface ModelRecursionPrefetchCreateDTO {
  /** @maxItems 1000 */
  domains: string[]
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  hotDomain?: 'top-100' | 'top-200' | 'top-500' | 'top-1000'
  /** @maxLength 255 */
  remark?: string
  viewID: number
}

export interface ModelRecursionPrefetchDeleteDTO {
  ids: number[]
}

export interface ModelRecursionPrefetchQueryVO {
  /** @maxItems 1001 */
  domainList: string[]
  /** @maxItems 1000 */
  domains: string[]
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  hotDomain?: 'top-100' | 'top-200' | 'top-500' | 'top-1000'
  id?: number
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
  viewID: number
  viewName?: string
}

export interface ModelRecursionPrefetchTTLUpdateDTO {
  /**
   * @min 10
   * @max 86400
   */
  intelligentTtl: number
  /**
   * @min 1
   * @max 10
   */
  triggerTtl: number
}

export interface ModelRecursionPrefetchUpdateDTO {
  /** @maxItems 1000 */
  domains: string[]
  enabled?: boolean
  hotDomain?: 'top-100' | 'top-200' | 'top-500' | 'top-1000'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRecursionPrefetchUpdateEffectRange {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface ModelRecursionQuerySourceCreateDTO {
  alternateAddresses?: string[]
  deviceID: number
  enabled?: boolean
  primaryAddress: string
  /** @maxLength 255 */
  remark?: string
  viewID: number
  viewName?: string
}

export interface ModelRecursionQuerySourceDeleteDTO {
  ids: number[]
}

export interface ModelRecursionQuerySourceMonitorSettingUpdateDTO {
  /**
   * @maxItems 2
   * @minItems 1
   */
  addresses?: string[]
  /**
   * @min 1
   * @max 2147483647
   */
  interval?: number
  /**
   * @min 1
   * @max 2147483647
   */
  timeout?: number
  /**
   * @min 1
   * @max 2147483647
   */
  times?: number
}

export interface ModelRecursionQuerySourceQueryVO {
  alternateAddresses?: string[]
  deviceID: number
  deviceName?: string
  enabled?: boolean
  primaryAddress: string
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
  viewID: number
  viewName?: string
}

export interface ModelRecursionQuerySourceUpdateDTO {
  alternateAddresses?: string[]
  deviceID: number
  enabled?: boolean
  primaryAddress: string
  /** @maxLength 255 */
  remark?: string
  viewName?: string
}

export interface ModelRecursionRootHintDeleteDTO {
  ids: number[]
}

export interface ModelRecursionRootHintQueryVO {
  /** @maxItems 20 */
  cidr: string[]
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelRecursionRootHintUpdateDTO {
  /** @maxItems 20 */
  cidr: string[]
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRecursionRootHintUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelRecursionSortListCreateDTO {
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  preferredAcl: SqlmodelACLCommon[]
  /** @maxLength 255 */
  remark?: string
  sourceAcl: string[]
  viewID: number
  viewName?: string
}

export interface ModelRecursionSortListDeleteDTO {
  ids: number[]
}

export interface ModelRecursionSortListEffectRangeUpdateDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
  reason?: string
}

export interface ModelRecursionSortListQueryVO {
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  preferredAcl: SqlmodelACLCommon[]
  /** @maxLength 255 */
  remark?: string
  sourceAcl: string[]
  updatedAt?: string
  viewID: number
  viewName?: string
}

export interface ModelRecursionSortListUpdateDTO {
  enabled?: boolean
  preferredAcl: SqlmodelACLCommon[]
  /** @maxLength 255 */
  remark?: string
  sourceAcl: string[]
  viewID: number
  viewName?: string
}

export interface ModelRecursionStubZoneCreateDTO {
  address?: string[]
  addressType: 'addr' | 'name'
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
  viewID: number
  zone: string
}

export interface ModelRecursionStubZoneDeleteDTO {
  ids: number[]
}

export interface ModelRecursionStubZoneQueryVO {
  address?: string[]
  addressType: 'addr' | 'name'
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
  viewID?: number
  viewName?: string
  zone: string
}

export interface ModelRecursionStubZoneUpdateDTO {
  address?: string[]
  addressType: 'addr' | 'name'
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
  zone: string
}

export interface ModelRecursionStubZoneUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelRemoteAuthConfigRoleSetDTO {
  defaultRoleID: number
}

export interface ModelRemoteAuthConfigSetDTO {
  authMode?: 'local' | 'remote'
  /** @minItems 1 */
  cliAuthMode?: string[]
}

export interface ModelRemoteAuthOrderCreateDTO {
  /** @maxLength 255 */
  remark?: string
}

export interface ModelRemoteAuthOrderDeleteDTO {
  ids: number[]
}

export interface ModelRemoteAuthOrderGetVO {
  id?: number
  name?: string
  readonly?: boolean
  /** @maxLength 255 */
  remark?: string
  type?: string
}

export interface ModelRemoteAuthOrderUpdateDTO {
  ids?: number[]
}

export interface ModelRemoteAuthRoleMapCreateDTO {
  localRoleID: number
  /** @maxLength 255 */
  remark?: string
  remoteRole: string
}

export interface ModelRemoteAuthRoleMapDeleteDTO {
  ids?: number[]
}

export interface ModelRemoteAuthRoleMapQueryVO {
  id?: number
  localRole?: string
  remark?: string
  remoteRole?: string
}

export interface ModelRemoteAuthServiceCreateDTOSwagger {
  enabled?: boolean
  matchType: 'order' | 'round-robin'
  name: string
  /**
   * @min 0
   * @max 10
   */
  retry?: number
  serverInfo?: {
    adminDN?: string
    adminPassword?: string
    authType: 'anonymous' | 'authenticated'
    memberProp: string
  }
  /** @minItems 1 */
  serverMembers?: {
    authMode: 'CHAP' | 'PAP' | 'MSCHAPV1' | 'MSCHAPV2' | 'EAPMD5' | 'EAPMSCHAPV2'
    baseDN: string
    domain: string
    ip: string
    port: number
    rule: string
    secret: string
    ssl?: boolean
  }[]
  /**
   * @min 1
   * @max 86400
   */
  timeout?: number
  type: 'AD' | 'LDAP' | 'RADIUS' | 'TACACS'
}

export interface ModelRemoteAuthServiceDeleteDTO {
  ids: number[]
}

export interface ModelRemoteAuthServiceQueryVO {
  enabled?: boolean
  id?: number
  matchType: 'order' | 'round-robin'
  name?: string
  /**
   * @min 0
   * @max 10
   */
  retry?: number
  serverInfo?: Record<string, any>
  /** @minItems 1 */
  serverMembers?: any[]
  /**
   * @min 1
   * @max 86400
   */
  timeout?: number
  type?: string
}

export interface ModelRemoteAuthServiceUpdateDTOSwagger {
  enabled?: boolean
  id?: number
  matchType: 'order' | 'round-robin'
  /**
   * @min 0
   * @max 10
   */
  retry?: number
  serverInfo?: {
    adminDN?: string
    adminPassword?: string
    authType: 'anonymous' | 'authenticated'
    memberProp: string
  }
  /** @minItems 1 */
  serverMembers?: {
    authMode: 'CHAP' | 'PAP' | 'MSCHAPV1' | 'MSCHAPV2' | 'EAPMD5' | 'EAPMSCHAPV2'
    baseDN: string
    domain: string
    ip: string
    port: number
    rule: string
    secret: string
    ssl?: boolean
  }[]
  /**
   * @min 1
   * @max 86400
   */
  timeout?: number
}

export interface ModelReportListDeleteDTO {
  ids: number[]
}

export interface ModelReportListDownloadDTO {
  id: number
}

export interface ModelReportListQueryVO {
  generateTime?: string
  id?: number
  name?: string
  remark?: string
  size?: string
  status?: boolean
}

export type ModelReportMapVOSwagger = Record<string, any[]>

export interface ModelReportMenuCreateDTO {
  enabled?: boolean
  name?: string
  /** @maxLength 255 */
  remark?: string
  ruleIDs?: number[]
  type?: 'dns' | 'dhcp'
}

export interface ModelReportMenuDeleteDTO {
  ids: number[]
}

export interface ModelReportMenuEnableDTO {
  enabled?: boolean
  ids: number[]
}

export interface ModelReportMenuQueryVO {
  enabled?: boolean
  id?: number
  name?: string
  readonly?: boolean
  remark?: string
  rules?: SqlmodelName[]
  type?: string
}

export interface ModelReportMenuUpdateDTO {
  enabled?: boolean
  /** @maxLength 255 */
  remark?: string
  ruleIDs?: number[]
  type?: 'dns' | 'dhcp'
}

export interface ModelReportPolicyCreateDTO {
  emailEnabled?: boolean
  emailList?: string[]
  enabled?: boolean
  endPlan: StructsJobPlan
  /** binding:"required,report_time" */
  endTime?: string
  /**
   * @min 1
   * @max 100
   */
  maxCount: number
  /**
   * @format ASCII{1,128}
   * @minLength 1
   * @maxLength 128
   */
  name: string
  /** @maxLength 255 */
  remark?: string
  schedulePlan: StructsJobPlan
  /** binding:"required,report_time" */
  scheduleTime?: string
  startPlan: StructsJobPlan
  /** binding:"required,report_time" */
  startTime?: string
  templateID: number
}

export interface ModelReportPolicyDeleteDTO {
  ids: number[]
}

export interface ModelReportPolicyQueryVO {
  cycle?: string
  emailEnabled?: boolean
  emailList?: string[]
  enabled?: boolean
  endPlan?: StructsJobPlan
  endTime?: string
  id?: number
  lastGenerateTime?: string
  maxCount?: number
  name?: string
  plan?: string
  remark?: string
  schedulePlan?: StructsJobPlan
  scheduleTime?: string
  startPlan?: StructsJobPlan
  startTime?: string
  templateID?: number
  templates?: SqlmodelName
}

export interface ModelReportPolicyRunDTO {
  endTime: string
  id: number
  startTime: string
}

export interface ModelReportPolicyUpdateDTO {
  emailEnabled?: boolean
  emailList?: string[]
  enabled?: boolean
  endPlan: StructsJobPlan
  /** binding:"required,report_time" */
  endTime?: string
  /** @max 100 */
  maxCount: number
  /**
   * @format ASCII{1,128}
   * @minLength 1
   * @maxLength 128
   */
  name: string
  /** @maxLength 255 */
  remark?: string
  schedulePlan: StructsJobPlan
  /** binding:"required,report_time" */
  scheduleTime?: string
  startPlan: StructsJobPlan
  /** binding:"required,report_time" */
  startTime?: string
  templateID: number
}

export interface ModelReportRuleCreateDTO {
  analysisDataItem?:
    | 'SrcIP'
    | 'QName'
    | 'QType'
    | 'RCode'
    | 'Country'
    | 'Subdivision'
    | 'City'
    | 'ISP'
  analysisMatchMethod?: 'all' | 'equal' | 'not_equal' | 'contains' | 'not_contains'
  analysisSecondDataItem?:
    | 'SrcIP'
    | 'QName'
    | 'QType'
    | 'RCode'
    | 'Country'
    | 'Subdivision'
    | 'City'
    | 'ISP'
  analysisSecondMatchMethod?: 'all' | 'equal' | 'not_equal' | 'contains' | 'not_contains'
  analysisSecondType?: string
  analysisSecondValues?: string[]
  analysisType?: 'top' | 'qps' | 'rate'
  analysisValues?: string[]
  enabled?: boolean
  isAnalysisSecond?: boolean
  name: string
  /** @maxLength 255 */
  remark?: string
  type?: 'dns' | 'dhcp'
}

export interface ModelReportRuleDeleteDTO {
  ids: number[]
}

export interface ModelReportRuleEnableDTO {
  enabled?: boolean
  ids: number[]
}

export interface ModelReportRuleQueryVO {
  analysisDataItem?: string
  analysisMatchMethod?: string
  analysisSecondDataItem?: string
  analysisSecondMatchMethod?: string
  analysisSecondType?: string
  analysisSecondValues?: string[]
  analysisType?: 'top' | 'qps' | 'rate'
  analysisValues?: string[]
  createdAt?: string
  displayName?: string
  enabled?: boolean
  id?: number
  isAnalysisSecond?: boolean
  name?: string
  readonly?: boolean
  remark?: string
  type: 'dns' | 'dhcp'
}

export interface ModelReportRuleUpdateDTO {
  analysisDataItem?:
    | 'SrcIP'
    | 'QName'
    | 'QType'
    | 'RCode'
    | 'Country'
    | 'Subdivision'
    | 'City'
    | 'ISP'
  analysisMatchMethod?: 'all' | 'equal' | 'not_equal' | 'contains' | 'not_contains'
  analysisSecondDataItem?:
    | 'SrcIP'
    | 'QName'
    | 'QType'
    | 'RCode'
    | 'Country'
    | 'Subdivision'
    | 'City'
    | 'ISP'
  analysisSecondMatchMethod?: 'all' | 'equal' | 'not_equal' | 'contains' | 'not_contains'
  analysisSecondType?: string
  analysisSecondValues?: string[]
  analysisType?: 'top' | 'qps' | 'rate'
  analysisValues?: string[]
  enabled?: boolean
  isAnalysisSecond?: boolean
  /** @maxLength 255 */
  remark?: string
}

export interface ModelReportTemplateCreateDTO {
  content?: string
  /**
   * @format ASCII{1,255}
   * @minLength 1
   * @maxLength 128
   */
  name: string
  refID?: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelReportTemplateDeleteDTO {
  ids: number[]
}

export interface ModelReportTemplateOnlyDTO {
  id: number
}

export interface ModelReportTemplateQueryVO {
  content?: string
  id?: number
  name?: string
  readonly?: boolean
  remark?: string
}

export interface ModelReportTemplateUpdateDTO {
  content?: string
  /** @maxLength 255 */
  remark?: string
}

export interface ModelReportThreatIntelEvent {
  endTime?: string
  event?: string
  ipNum?: number
  level?: 'high' | 'middle' | 'low'
  startTime?: string
  total?: number
}

export interface ModelReportThreatIntelHostQueryVO {
  endTime?: string
  event?: string
  ip?: string
  level?: 'high' | 'middle' | 'low'
  startTime?: string
  total?: number
}

export interface ModelReportThreatIntelStatisticsVO {
  eventTotal?: number
  ipTotal?: number
  logTotal?: number
}

export interface ModelResourceDeviceQueryVO {
  groupID?: number
  groupName?: string
  haRole?: string
  id?: number
  ip?: string
  name?: string
  role?: string
}

export interface ModelResourceSummaryGetVO {
  viewCount?: number
  wideIPCount?: number
  zoneAuthCount?: number
  zoneAuthRRCount?: number
}

export interface ModelResourceZoneQueryVO {
  id?: number
  name?: string
  viewID?: number
  viewName?: string
}

export interface ModelRoleCreateDTO {
  cliEnabled?: boolean
  cliPerms?: 'read' | 'write'
  name: string
  openapiEnabled?: boolean
  /** @maxLength 255 */
  remark?: string
  webEnabled?: boolean
}

export interface ModelRoleDeleteDTO {
  ids: number[]
}

export interface ModelRolePermsUpdateDTO {
  perms?: string[]
}

export interface ModelRoleQueryVO {
  cliEnabled?: boolean
  cliPerms?: string
  createdAt?: string
  id?: number
  isSuper?: boolean
  name?: string
  openapiEnabled?: boolean
  pagePerms?: string[]
  remark?: string
  used?: number
  webEnabled?: boolean
}

export interface ModelRoleResolveCreateDTO {
  permission: 'hide' | 'read' | 'write'
  recordNames: string[]
  recordType?: 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'DNAME' | 'MX' | 'NS' | 'NAPTR' | 'PTR' | 'DS'
  roleID: number
  type: 'view' | 'auth' | 'stub' | 'forward' | 'record'
  viewID?: number
  zoneID?: number
}

export interface ModelRoleResolveDeleteDTO {
  ids: number[]
}

export interface ModelRoleResolveQueryVO {
  /** CreatedAt holds the value of the "created_at" field. */
  createdAt?: string
  /** CreatedBy holds the value of the "created_by" field. */
  createdBy?: number
  /** ID of the ent. */
  id?: number
  /** Permission holds the value of the "permission" field. */
  permission?: string
  /** RecordNames holds the value of the "record_names" field. */
  recordNames?: string[]
  /** RecordType holds the value of the "record_type" field. */
  recordType?: string
  /** RoleID holds the value of the "role_id" field. */
  roleID?: number
  /** Type holds the value of the "type" field. */
  type?: string
  /** UpdatedAt holds the value of the "updated_at" field. */
  updatedAt?: string
  /** UpdatedBy holds the value of the "updated_by" field. */
  updatedBy?: number
  /** ViewID holds the value of the "view_id" field. */
  viewID?: number
  viewName?: string
  /** ZoneID holds the value of the "zone_id" field. */
  zoneID?: number
  /** ZoneName holds the value of the "zone_name" field. */
  zoneName?: string
}

export interface ModelRoleResolveUpdateDTO {
  permission: 'hide' | 'read' | 'write'
  recordNames: string[]
  recordType?: 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'DNAME' | 'MX' | 'NS' | 'NAPTR' | 'PTR' | 'DS'
  viewID?: number
  zoneID?: number
}

export interface ModelRoleUpdateDTO {
  cliEnabled?: boolean
  cliPerms?: 'read' | 'write'
  name: string
  openapiEnabled?: boolean
  /** @maxLength 255 */
  remark?: string
  webEnabled?: boolean
}

export interface ModelRpzCreateDTO {
  /** @maxLength 100 */
  action: 'NXDOMAIN' | 'NODATA' | 'DROP' | 'TRUNCATE'
  /** @maxLength 253 */
  domain?: string
  effectRange: SqlmodelEffectRange[]
  ip?: string
  /** @maxLength 255 */
  remark?: string
  /** @maxLength 100 */
  trigger: 'qname' | 'ip' | 'result' | 'ns' | 'nsIp'
  viewID: number
}

export interface ModelRpzDeleteDTO {
  ids: number[]
}

export interface ModelRpzQueryVO {
  action?: string
  domain?: string
  effectRange: SqlmodelEffectRange[]
  id?: number
  ip?: string
  remark?: string
  trigger?: string
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelRpzUpdateDTO {
  /** @maxLength 100 */
  action: 'NXDOMAIN' | 'NODATA' | 'DROP' | 'TRUNCATE'
  /** @maxLength 253 */
  domain?: string
  effectRange?: SqlmodelEffectRange[]
  ip?: string
  /** @maxLength 255 */
  remark?: string
  /** @maxLength 100 */
  trigger: 'qname' | 'ip' | 'result' | 'ns' | 'nsIp'
  viewID: number
}

export interface ModelRpzUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelSMSConfig {
  accessKeyId: string
  accessKeySecret: string
  enabled: boolean
  server: string
  smsTemplates?: StructsSMSTemplate[]
}

export interface ModelSSHOptionsCreate {
  password?: string
  port: number
  username?: string
}

export interface ModelSSHOptionsUpdate {
  password?: string
  port: number
  username?: string
}

export interface ModelSSHOptionsVO {
  port: number
  username: string
}

export interface ModelSamplePair {
  timestamp?: string
  value?: number
}

export interface ModelSecurityAdvanceAclCreateDTO {
  action?: 'ACCEPT' | 'DROP' | 'LIMIT'
  customRule?: string[]
  dstIP?: string
  dstPort?: string
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  ipType?: number
  /** @max 10000000 */
  limit?: number
  /**
   * @min 1
   * @max 65535
   */
  priority: number
  protocols?: string[]
  /** @maxLength 255 */
  remark?: string
  srcIP?: string
  srcPort?: string
  type: 'basic' | 'custom'
}

export interface ModelSecurityAdvanceAclDeleteDTO {
  ids: number[]
}

export interface ModelSecurityAdvanceAclQueryVO {
  action?: 'ACCEPT' | 'DROP' | 'LIMIT'
  customRule?: string
  dstIP?: string
  dstPort?: string
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  /** @max 10000000 */
  limit?: number
  /**
   * @min 1
   * @max 65535
   */
  priority: number
  protocols?: string[]
  /** @maxLength 255 */
  remark?: string
  srcIP?: string
  srcPort?: string
  type: 'basic'
  updatedAt?: string
}

export interface ModelSecurityAdvanceAclSettingCommon {
  deviceID?: number
  enabled?: boolean
}

export interface ModelSecurityAdvanceAclSettingUpdateDTO {
  data: ModelSecurityAdvanceAclSettingCommon[]
}

export interface ModelSecurityAdvanceAclUpdateDTO {
  action?: 'ACCEPT' | 'DROP' | 'LIMIT'
  customRule?: string
  dstIP?: string
  dstPort?: string
  enabled?: boolean
  ipType?: number
  /** @max 10000000 */
  limit?: number
  /**
   * @min 1
   * @max 65535
   */
  priority: number
  protocols?: string[]
  /** @maxLength 255 */
  remark?: string
  srcIP?: string
  srcPort?: string
  type: 'basic' | 'custom'
}

export interface ModelSecurityAdvanceAclUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelSecurityBasicCreateDTO {
  abnormalDnsPacketsFilterEnabled?: boolean
  abnormalIpPacketsFilterEnabled?: boolean
  abnormalUdpPacketsFilterEnabled?: boolean
  cacheDefenseEnabled?: boolean
  domainAllowEnabled?: boolean
  domainRateLimitEnabled?: boolean
  effectRange: SqlmodelEffectRange[]
  globalRateLimitEnabled?: boolean
  /** @max 2147483647 */
  globalRateLimitValue?: number
  icmpConnLimitEnabled?: boolean
  /**
   * @min 0
   * @max 1000000
   */
  icmpConnLimitValue?: number
  ipAllowEnabled?: boolean
  ipRateLimitEnabled?: boolean
  /** @max 2147483647 */
  ipRateLimitValue?: number
  isLocked?: boolean
  nxrEnabled?: boolean
  rateLimitEnabled?: boolean
  tcpConnLimitEnabled?: boolean
  /**
   * @min 0
   * @max 1000000
   */
  tcpConnLimitValue?: number
  tcpEnabled?: boolean
}

export interface ModelSecurityBasicDeleteDTO {
  ids: number[]
}

export interface ModelSecurityBasicQueryVO {
  abnormalDnsPacketsFilterEnabled?: boolean
  abnormalIpPacketsFilterEnabled?: boolean
  abnormalUdpPacketsFilterEnabled?: boolean
  cacheDefenseEnabled?: boolean
  domainAllowEnabled?: boolean
  domainRateLimitEnabled?: boolean
  effectRange: SqlmodelEffectRange[]
  globalRateLimitEnabled?: boolean
  /** @max 2147483647 */
  globalRateLimitValue?: number
  icmpConnLimitEnabled?: boolean
  /**
   * @min 0
   * @max 1000000
   */
  icmpConnLimitValue?: number
  id?: number
  ipAllowEnabled?: boolean
  ipRateLimitEnabled?: boolean
  /** @max 2147483647 */
  ipRateLimitValue?: number
  isLocked?: boolean
  nxrEnabled?: boolean
  rateLimitEnabled?: boolean
  tcpConnLimitEnabled?: boolean
  /**
   * @min 0
   * @max 1000000
   */
  tcpConnLimitValue?: number
  tcpEnabled?: boolean
  updatedAt?: string
}

export interface ModelSecurityBasicUpdateDTO {
  abnormalDnsPacketsFilterEnabled?: boolean
  abnormalIpPacketsFilterEnabled?: boolean
  abnormalUdpPacketsFilterEnabled?: boolean
  cacheDefenseEnabled?: boolean
  domainAllowEnabled?: boolean
  domainRateLimitEnabled?: boolean
  effectRange?: SqlmodelEffectRange[]
  globalRateLimitEnabled?: boolean
  /** @max 2147483647 */
  globalRateLimitValue?: number
  icmpConnLimitEnabled?: boolean
  /**
   * @min 0
   * @max 1000000
   */
  icmpConnLimitValue?: number
  ipAllowEnabled?: boolean
  ipRateLimitEnabled?: boolean
  /** @max 2147483647 */
  ipRateLimitValue?: number
  nxrEnabled?: boolean
  rateLimitEnabled?: boolean
  tcpConnLimitEnabled?: boolean
  /**
   * @min 0
   * @max 1000000
   */
  tcpConnLimitValue?: number
  tcpEnabled?: boolean
}

export interface ModelSecurityBasicUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelSecurityCacheCapacityDTO {
  /** 最大缓存限制模式 */
  maxCacheLimit: 'default' | 'unlimited' | 'percentage'
  /**
   * 最大缓存百分比
   * @min 10
   * @max 90
   */
  maxCachePercentage?: number
}

export interface ModelSecurityCloudThreatintelSet {
  addr?: string
  enabled?: boolean
  passwd?: string
  plan?: StructsJobPlan
  subscribeType?: string[]
  username?: string
}

export interface ModelSecurityRecursionCreateDTO {
  /** @min 0 */
  clientsPerQuery?: number
  effectRange: SqlmodelEffectRange[]
  /**
   * @min 0
   * @max 1000
   */
  maxClientsPerQuery?: number
  method?: 'overflowNoReply' | 'overflowAggregation'
  /** @min 0 */
  multiClientsPerQuery?: number
  /**
   * @min 1
   * @max 4294967295
   */
  recursiveClients?: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelSecurityRecursionDeleteDTO {
  ids: number[]
}

export interface ModelSecurityRecursionQueryVO {
  /** @min 0 */
  clientsPerQuery?: number
  effectRange: SqlmodelEffectRange[]
  id?: number
  /**
   * @min 0
   * @max 1000
   */
  maxClientsPerQuery?: number
  method?: 'overflowNoReply' | 'overflowAggregation'
  /** @min 0 */
  multiClientsPerQuery?: number
  /**
   * @min 1
   * @max 4294967295
   */
  recursiveClients?: number
  remark?: string
  updatedAt?: string
}

export interface ModelSecurityRecursionUpdateDTO {
  /** @min 0 */
  clientsPerQuery?: number
  effectRange?: SqlmodelEffectRange[]
  /**
   * @min 0
   * @max 1000
   */
  maxClientsPerQuery?: number
  method?: 'overflowNoReply' | 'overflowAggregation'
  /** @min 0 */
  multiClientsPerQuery?: number
  /**
   * @min 1
   * @max 4294967295
   */
  recursiveClients?: number
  /** @maxLength 255 */
  remark?: string
}

export interface ModelSecurityRecursionUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelSecurityThreatintelCreateDTO {
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  exceptDomains: string[]
  redirects?: string[]
  remark?: string
  type: 'alarm' | 'nxdomain' | 'drop' | 'redirect'
}

export interface ModelSecurityThreatintelDeleteDTO {
  ids: number[]
}

export interface ModelSecurityThreatintelQueryVO {
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  exceptDomains: string[]
  id?: number
  redirects?: string[]
  remark?: string
  type: 'alarm' | 'nxdomain' | 'drop' | 'redirect'
  updatedAt?: string
}

export interface ModelSecurityThreatintelUpdateDTO {
  enabled?: boolean
  exceptDomains: string[]
  redirects?: string[]
  remark?: string
  type: 'alarm' | 'nxdomain' | 'drop' | 'redirect'
}

export interface ModelSecurityThreatintelUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelSecurityTunnelCreateDTO {
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  exceptDomains?: string[]
  /** @maxLength 255 */
  remark?: string
  type: 'warn' | 'nxdomain' | 'refused' | 'drop'
}

export interface ModelSecurityTunnelDeleteDTO {
  ids: number[]
}

export interface ModelSecurityTunnelQueryVO {
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  exceptDomains?: string[]
  id?: number
  remark?: string
  type: 'warn' | 'nxdomain' | 'refused' | 'drop'
  updatedAt?: string
}

export interface ModelSecurityTunnelUpdateDTO {
  enabled?: boolean
  exceptDomains?: string[]
  /** @maxLength 255 */
  remark?: string
  type: 'warn' | 'nxdomain' | 'refused' | 'drop'
}

export interface ModelSecurityTunnelUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelSecurityXforceCreateDTO {
  domains: string[]
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  policyType: 'redirect' | 'nodata' | 'drop' | 'nxdomain'
  qtype:
    | 'ANY'
    | 'A'
    | 'AAAA'
    | 'SOA'
    | 'NS'
    | 'MX'
    | 'CNAME'
    | 'NAPTR'
    | 'SRV'
    | 'TXT'
    | 'DNAME'
    | 'HTTPS'
  rdata?: string[]
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  type: 'domain' | 'domainlibrary'
  viewID: number
}

export interface ModelSecurityXforceDeleteDTO {
  ids: number[]
}

export interface ModelSecurityXforceExportDTO {
  ids?: number[]
}

export interface ModelSecurityXforceExportVO {
  domain?: string
  domainLib?: string
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  policyType: 'redirect' | 'nodata' | 'drop' | 'nxdomain'
  qtype:
    | 'ANY'
    | 'A'
    | 'AAAA'
    | 'SOA'
    | 'NS'
    | 'MX'
    | 'CNAME'
    | 'NAPTR'
    | 'SRV'
    | 'TXT'
    | 'DNAME'
    | 'HTTPS'
  rdata?: string[]
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  /**
   * @minLength 1
   * @maxLength 128
   */
  viewName: string
}

export interface ModelSecurityXforceQueryVO {
  domain?: string
  effectRange: SqlmodelEffectRange[]
  enabled?: boolean
  id?: number
  policyType: 'redirect' | 'nodata' | 'drop' | 'nxdomain'
  qtype:
    | 'ANY'
    | 'A'
    | 'AAAA'
    | 'SOA'
    | 'NS'
    | 'MX'
    | 'CNAME'
    | 'NAPTR'
    | 'SRV'
    | 'TXT'
    | 'DNAME'
    | 'HTTPS'
  rdata?: string[]
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  type?: string
  updatedAt?: string
  viewID?: number
  viewName?: string
}

export interface ModelSecurityXforceUpdateDTO {
  domain?: string
  enabled?: boolean
  policyType: 'redirect' | 'nodata' | 'drop' | 'nxdomain'
  qtype:
    | 'ANY'
    | 'A'
    | 'AAAA'
    | 'SOA'
    | 'NS'
    | 'MX'
    | 'CNAME'
    | 'NAPTR'
    | 'SRV'
    | 'TXT'
    | 'DNAME'
    | 'HTTPS'
  rdata?: string[]
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 0
   * @max 4294967295
   */
  ttl?: number
  type: 'domain' | 'domainlibrary'
}

export interface ModelSecurityXforceUpdateEffectDTO {
  effectRange: SqlmodelEffectRange[]
  ids: number[]
}

export interface ModelShareNetworkCreateDTO {
  dhcpNodeID: number
  name: string
  /** @maxItems 8 */
  networkIDs?: number[]
  qtype: 'ipv4' | 'ipv6'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelShareNetworkDeleteDTO {
  ids: number[]
}

export interface ModelShareNetworkQueryVO {
  dhcpNodeID: number
  dhcpNodeName?: string
  dhcpTotal?: number
  dhcpUsed?: number
  id?: number
  name: string
  /** @maxItems 8 */
  networkIDs?: number[]
  networkNames?: string[]
  number?: number
  qtype: 'ipv4' | 'ipv6'
  /** @maxLength 255 */
  remark?: string
  updatedAt?: string
}

export interface ModelShareNetworkUpdateDTO {
  dhcpNodeID: number
  name: string
  /** @maxItems 8 */
  networkIDs?: number[]
  qtype: 'ipv4' | 'ipv6'
  /** @maxLength 255 */
  remark?: string
}

export interface ModelSubNetworkQueryVO {
  address?: string
  dhcpNodeID?: number
  dhcpNodeName?: string
  id?: number
}

export interface ModelSystemBackupCreateDTO {
  name: string
  /** @maxItems 5 */
  paths?: ModelBackupRemotePath[]
}

export interface ModelSystemBackupDeleteDTO {
  ids: number[]
}

export type ModelSystemBackupDownloadDTO = object

export interface ModelSystemBackupQueryVO {
  id?: number
  isAuto?: boolean
  mode?: string
  name?: string
  path?: string
  reason?: string
  size?: number
  status?: string
}

export type ModelSystemBackupRecoverDTO = object

export interface ModelTemplateCreateDTO {
  /**
   * @min 2
   * @max 16777214
   */
  addressCount?: number
  /**
   * @min 1
   * @max 365
   */
  bindDays?: number
  /** @uniqueItems true */
  blackList?: number[]
  ddns: 'disable' | 'enable' | 'floating-host'
  dnsSuffix?: string
  dnsSuffixStrategy: 'inherit' | 'rewrite'
  /** @uniqueItems true */
  domainServers?: string[]
  domainServersStrategy: 'inherit' | 'rewrite'
  enableAutoBind?: boolean
  enableDdnsStrategy: 'inherit' | 'rewrite'
  /**
   * @min 1
   * @max 16777214
   */
  gatewayOffset?: number
  gatewayOffsetStrategy?: 'inherit' | 'rewrite'
  leaseTime: SqlmodelDhcpLeaseTime
  leaseTimeStrategy: 'inherit' | 'rewrite'
  /** @maxLength 255 */
  name: string
  nextServer?: string
  options?: ModelOptionDTO[]
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 1
   * @max 16777214
   */
  startIPOffset?: number
  version: number
  /** @uniqueItems true */
  whiteList?: number[]
}

export interface ModelTemplateDeleteDTO {
  ids: number[]
}

export interface ModelTemplateNamesQueryVO {
  id?: number
  name?: string
  version?: number
}

export interface ModelTemplateQueryVO {
  addressCount?: number
  bindDays?: number
  blackList?: number[]
  ddns?: string
  dnsSuffix?: string
  dnsSuffixStrategy?: string
  domainServers?: string[]
  domainServersStrategy?: string
  enableAutoBind?: boolean
  enableDdnsStrategy?: string
  gatewayOffset?: number
  gatewayOffsetStrategy?: string
  id?: number
  leaseTime?: SqlmodelDhcpLeaseTime
  leaseTimeStrategy?: string
  name?: string
  nextServer?: string
  options?: ModelOptionVO[]
  remark?: string
  startIPOffset?: number
  updatedAt?: string
  version?: number
  whiteList?: number[]
}

export interface ModelTemplateUpdateDTO {
  /**
   * @min 2
   * @max 16777214
   */
  addressCount?: number
  /**
   * @min 1
   * @max 365
   */
  bindDays?: number
  /** @uniqueItems true */
  blackList?: number[]
  ddns: 'disable' | 'enable' | 'floating-host'
  dnsSuffix?: string
  dnsSuffixStrategy: 'inherit' | 'rewrite'
  /** @uniqueItems true */
  domainServers?: string[]
  domainServersStrategy: 'inherit' | 'rewrite'
  enableAutoBind?: boolean
  enableDdnsStrategy: 'inherit' | 'rewrite'
  /**
   * @min 1
   * @max 16777214
   */
  gatewayOffset?: number
  gatewayOffsetStrategy?: 'inherit' | 'rewrite'
  leaseTime: SqlmodelDhcpLeaseTime
  leaseTimeStrategy: 'inherit' | 'rewrite'
  /** @maxLength 255 */
  name: string
  nextServer?: string
  options?: ModelOptionDTO[]
  /** @maxLength 255 */
  remark?: string
  /**
   * @min 1
   * @max 16777214
   */
  startIPOffset?: number
  version: number
  /** @uniqueItems true */
  whiteList?: number[]
}

export interface ModelTopologyDestinationMember {
  aclName?: string
  addrLab?: string[]
  addrVal?: string[]
  cidr?: string
  condition?: 'is' | 'is not'
  datacenterID?: number
  datacenterName?: string
  geoViewIDs?: number[]
  poolName?: string
  regionID?: number
  regionName?: string
  type?:
    | 'ip'
    | 'region'
    | 'ISP'
    | 'GEO+ISP'
    | 'pool'
    | 'datacenter'
    | 'acl'
    | 'Continent'
    | 'Country'
    | 'Province'
    | 'City'
  viewID?: number
}

export interface ModelTopologySourceMember {
  aclName?: string
  addrLab?: string[]
  addrVal?: string[]
  cidr?: string
  condition?: 'is' | 'is not'
  geoViewIDs?: number[]
  regionID?: number
  regionName?: string
  type?: 'ip' | 'region' | 'ISP' | 'GEO+ISP' | 'acl' | 'Continent' | 'Country' | 'Province' | 'City'
  viewID?: number
}

export interface ModelTreeNode {
  children?: ModelTreeNode[]
  label?: string
  value?: number
}

export interface ModelTrustAnchor {
  /** 算法 RSASHA1(5) RSASHA256(8) RSASHA512(10) ECDSAP256SHA256(13) ECDSAP384SHA384(14) SM2SM3(17) RSASHA1-NSEC3-SHA1(7) */
  algorithm: 5 | 8 | 10 | 13 | 14 | 17 | 7
  /** DS摘要类型 SHA-1(1) SHA-256(2) SHA-384(4) SM3(5) */
  digestType?: 1 | 2 | 4 | 5
  /**
   * 公钥/摘要
   * @maxLength 4096
   */
  key: string
  /** DS标记 0-65535 */
  keyTag?: number
  type: 'ZSK' | 'KSK' | 'DS'
  zone: string
}

export interface ModelTsigCreateDTO {
  /** hmac-md5,hmac-sha1,hmac-sha224,hmac-sha256,hmac-sha384,hmac-sha512,hmac-sm3 */
  algorithm:
    | 'hmac-md5'
    | 'hmac-sha1'
    | 'hmac-sha224'
    | 'hmac-sha256'
    | 'hmac-sha384'
    | 'hmac-sha512'
    | 'hmac-sm3'
  name: string
  /** @maxLength 255 */
  remark?: string
  secret: string
}

export interface ModelTsigDeleteDTO {
  ids: number[]
}

export interface ModelTsigGenerateDTO {
  /** hmac-md5,hmac-sha1,hmac-sha224,hmac-sha256,hmac-sha384,hmac-sha512,hmac-sm3 */
  algorithm:
    | 'hmac-md5'
    | 'hmac-sha1'
    | 'hmac-sha224'
    | 'hmac-sha256'
    | 'hmac-sha384'
    | 'hmac-sha512'
    | 'hmac-sm3'
  name: string
}

export interface ModelTsigQueryVO {
  /** 算法: HMAC-MD5,HMAC-SHA1,HMAC-SHA224,HMAC-SHA256,HMAC-SHA384,HMAC-SHA512 */
  algorithm?: string
  /** CreatedAt holds the value of the "created_at" field. */
  createdAt?: string
  /** CreatedBy holds the value of the "created_by" field. */
  createdBy?: number
  /** ID of the ent. */
  id?: number
  /** Name holds the value of the "name" field. */
  name?: string
  /** 备注 */
  remark?: string
  /** key值 */
  secret?: string
  /** 来源 */
  source?: string
  /** UpdatedAt holds the value of the "updated_at" field. */
  updatedAt?: string
  /** UpdatedBy holds the value of the "updated_by" field. */
  updatedBy?: number
}

export interface ModelTsigUpdateDTO {
  /** hmac-md5,hmac-sha1,hmac-sha224,hmac-sha256,hmac-sha384,hmac-sha512,hmac-sm3 */
  algorithm:
    | 'hmac-md5'
    | 'hmac-sha1'
    | 'hmac-sha224'
    | 'hmac-sha256'
    | 'hmac-sha384'
    | 'hmac-sha512'
    | 'hmac-sm3'
  name: string
  /** @maxLength 255 */
  remark?: string
  secret: string
}

export interface ModelUpgradeDeviceQueryVO {
  id?: number
  name?: string
  upgradeAt?: string
  upgradeExpectVersion?: string
  upgradeFailed?: string
  upgradePreviousVersion?: string
  upgradeStatus?: string
  upgradesVersion?: string
}

export interface ModelUpgradePkgDeleteDTO {
  ids: number[]
}

export interface ModelUpgradePkgInstallDTO {
  /** ID        int32   `json:"id" binding:"required"` */
  ids: number[]
}

export interface ModelUpgradePkgRollBackDTO {
  ids: number[]
}

export interface ModelZoneName {
  zone: string
}

export interface MultipartFileHeader {
  filename?: string
  header?: TextprotoMIMEHeader
  size?: number
}

export interface NetworkgroupNetworkGroupCreateDTO {
  name: string
  parentID?: number
  /** @maxLength 255 */
  remark?: string
}

export interface NetworkgroupNetworkGroupDeleteDTO {
  id: number
}

export interface NetworkgroupNetworkGroupGetVO {
  id?: number
  name?: string
  parentIDs?: number[]
  remark?: string
}

export interface NetworkgroupNetworkGroupQueryVO {
  id?: number
  name?: string
  parentID?: number
  parentName?: string
  remark?: string
}

export interface NetworkgroupNetworkGroupUpdateDTO {
  name: string
  parentID?: number
  /** @maxLength 255 */
  remark?: string
}

export interface NetworkspaceNetworkSpaceCreateDTO {
  name: string
  /** @maxLength 255 */
  remark?: string
}

export interface SqlmodelACLCommon {
  /**
   * @format ASCII{1,255}
   * @minLength 1
   * @maxLength 255
   */
  acl: string
}

export interface SqlmodelBannerSetting {
  companyName?: string
  logo?: string
  tips?: string
  title?: string
}

export interface SqlmodelDeviceStatus {
  /** 指纹 */
  allow?: string
  haRole?: string
  productModel?: string
  serialNumber?: string
  status?: string
  version?: string
}

export interface SqlmodelDhcpLeaseTime {
  leaseTimeType: 'second' | 'minute' | 'hour' | 'day'
  /**
   * @min 1
   * @max 86313600
   */
  leaseTimeValue: number
}

export interface SqlmodelEffectRange {
  device?: string
  global?: string
  group?: string
}

export interface SqlmodelGslbPoolMember {
  enabled?: boolean
  flags?: string
  id?: number
  isStaticTarget?: boolean
  name?: string
  order?: number
  port?: number
  preference?: number
  priority?: number
  qtype?: string
  ratio?: number
  service?: string
  weight?: number
}

export interface SqlmodelGslbWideIPMember {
  enabled?: boolean
  id: number
  name?: string
  qtype?: string
  /**
   * @min 1
   * @max 32767
   */
  ratio: number
}

export interface SqlmodelName {
  id?: number
  name?: string
}

export interface SqlmodelTopologyDestinationMember {
  aclName?: string
  addrLab?: string[]
  addrVal?: string[]
  cidr?: string
  condition?: 'is' | 'is not'
  datacenterID?: number
  geoViewIDs?: number[]
  poolName?: string
  regionID?: number
  type?:
    | 'ip'
    | 'region'
    | 'ISP'
    | 'GEO+ISP'
    | 'pool'
    | 'datacenter'
    | 'acl'
    | 'Continent'
    | 'Country'
    | 'Province'
    | 'City'
  viewID?: number
}

export interface SqlmodelTopologyRegionMember {
  aclName?: string
  addrLab?: string[]
  addrVal?: string[]
  cidr?: string
  datacenterID?: number
  datacenterName?: string
  geoViewIDs?: number[]
  geoViewNames?: string[]
  poolName?: string
  regionID?: number
  regionName?: string
  type?:
    | 'ip'
    | 'region'
    | 'ISP'
    | 'GEO+ISP'
    | 'pool'
    | 'datacenter'
    | 'acl'
    | 'Continent'
    | 'Country'
    | 'Province'
    | 'City'
  viewID?: number
  viewName?: string
}

export interface SqlmodelTopologySourceMember {
  aclName?: string
  addrLab?: string[]
  addrVal?: string[]
  cidr?: string
  condition?: 'is' | 'is not'
  geoViewIDs?: number[]
  regionID?: number
  type?: 'ip' | 'region' | 'ISP' | 'GEO+ISP' | 'acl' | 'Continent' | 'Country' | 'Province' | 'City'
  viewID?: number
}

export interface SqlmodelXfrMasters {
  service?: string
  tsig?: string
}

export interface StructsAlertRule {
  alarmType?: string
  deviceIP?: string
  deviceName?: string
  enabled?: boolean
  monitorObject?: string
  thresholds?: StructsThreshold[]
}

export interface StructsCityHotSetting {
  allowIPs?: string[]
  enabled?: boolean
}

export interface StructsCommonInfo {
  snmp?: StructsSNMPInfo
  syslog?: StructsSyslogInfo
}

export interface StructsDeviceAnycast {
  bgp: StructsDeviceAnycastBGP
  ipv4: StructsDeviceAnycastIPv4
  ipv6: StructsDeviceAnycastIPv6
}

export interface StructsDeviceAnycastBGP {
  /** 0-4294967295 */
  asn?: number
  enabled?: boolean
  neighbors?: StructsNeighbor[]
  networkAdvers?: StructsNetworkAdver[]
  /** 路由通告 network（网络） local-direct-connection（本地直连发布） */
  routeAdvertisements?: 'network' | 'local-direct-connection'
  /** ipv4 */
  routerID?: string
}

export interface StructsDeviceAnycastBfdsIPv4 {
  detectMultiplier: number
  echoEnabled?: boolean
  echoInterval?: number
  interface: string
  peerAddress: string
  receiveInterval?: number
  transmitInterval?: number
}

export interface StructsDeviceAnycastBfdsIPv6 {
  detectMultiplier: number
  echoEnabled?: boolean
  echoInterval?: number
  interface: string
  localAddress: string
  peerAddress: string
  receiveInterval?: number
  transmitInterval?: number
}

export interface StructsDeviceAnycastIPv4 {
  anycast?: string[]
  area?: string
  areaType?: 'standard' | 'stub' | 'nssa'
  authKey?: string
  authSerial?: number
  authType?: 'none' | 'md5'
  bfdEnabled?: boolean
  bfds?: StructsDeviceAnycastBfdsIPv4[]
  enabled?: boolean
  interface?: string[]
  /**
   * @min 1
   * @max 65535
   */
  interfaceCost?: number
  /** @max 65535 */
  interfaceDead?: number
  /** @max 65535 */
  interfaceHello?: number
  /**
   * @min 0
   * @max 255
   */
  interfacePriority?: number
  /** @max 65535 */
  interfaceRetransmit?: number
  /** @max 3600 */
  interfaceTransmit?: number
  interfaceType?: 'broadcast' | 'non-broadcast' | 'point-to-multipoint' | 'point-to-point'
  routerID?: string
}

export interface StructsDeviceAnycastIPv6 {
  anycast?: string[]
  area?: string
  areaType?: 'standard' | 'stub'
  authKey?: string
  authSerial?: number
  authType?: 'none' | 'md5'
  bfdEnabled?: boolean
  bfds?: StructsDeviceAnycastBfdsIPv6[]
  enabled?: boolean
  interface?: string[]
  /**
   * @min 1
   * @max 65535
   */
  interfaceCost?: number
  /** @max 65535 */
  interfaceDead?: number
  /** @max 65535 */
  interfaceHello?: number
  /**
   * @min 0
   * @max 255
   */
  interfacePriority?: number
  /** @max 65535 */
  interfaceRetransmit?: number
  /** @max 3600 */
  interfaceTransmit?: number
  interfaceType?: 'broadcast' | 'non-broadcast' | 'point-to-multipoint' | 'point-to-point'
  routerID?: string
}

export interface StructsDeviceHA {
  enabled?: boolean
  interface?: string
  interval?: number
  ips?: string[]
  mode?: string
  priority?: number
  routerID?: number
  state?: string
}

export interface StructsDeviceMonitorInfo {
  id?: number
  ip?: string
  name?: string
}

export interface StructsDeviceNTP {
  enabled?: boolean
  /**
   * @min 1
   * @max 3600
   */
  interval?: number
  remoteAddresses?: string[]
  server?: boolean
}

export interface StructsDeviceSNMP {
  authPass?: string
  authType?: 'noAuth' | 'MD5' | 'SHA'
  enabled?: boolean
  port?: number
  privPass?: string
  privType?: 'noPriv' | 'DES' | 'AES'
  securityLevel?: 'noAuthNoPriv' | 'authNoPriv' | 'authPriv'
  user?: string
  version?: 'v2c' | 'v3'
  whiteList?: string[]
}

export interface StructsDeviceScannerInfo {
  id?: number
  ip?: string
  name?: string
}

export interface StructsDeviceTFTP {
  enabled?: boolean
}

export interface StructsDnssecKey {
  /** RSASHA1(5) RSASHA256(8) RSASHA512(10) ECDSAP256SHA256(13) ECDSAP384SHA384(14) SM2SM3(17) */
  algorithmKSK: 5 | 8 | 10 | 13 | 14 | 17
  /** RSASHA1(5) RSASHA256(8) RSASHA512(10) ECDSAP256SHA256(13) ECDSAP384SHA384(14) SM2SM3(17) */
  algorithmZSK: 5 | 8 | 10 | 13 | 14 | 17
  /**
   * @min 1024
   * @max 4096
   */
  lenKSK?: number
  /**
   * @min 1024
   * @max 4096
   */
  lenZSK?: number
}

export interface StructsGslbProberSetting {
  /**
   * @min 10
   * @max 60
   */
  heartbeatInterval: number
  /**
   * @min 30
   * @max 180
   */
  heartbeatTimeout: number
  /**
   * @min 60
   * @max 31536000
   */
  inactivePathTtl: number
  ipSubnets: string[]
  /**
   * @min 1
   * @max 600
   */
  pathsRetry: number
  /**
   * @min 1
   * @max 2419200
   */
  pathsTtl: number
  protocol: 'ICMP' | 'DNSREV' | 'DNSDOT'
  /**
   * @min 1
   * @max 10
   */
  sampleCount: number
  /**
   * @min 1
   * @max 10
   */
  timeout: number
  /**
   * @min 1
   * @max 60
   */
  updateInterval?: number
}

export interface StructsGslbServerAddress {
  innerIP?: string
  ip?: string
  link?: string
}

export interface StructsGslbSoaSetting {
  authorityMailbox: string
  domain: string
  ecs: 'prefer' | 'off' | 'default'
  errorReturnCode: 'NOERROR' | 'FORMERR' | 'SERVFAIL' | 'NXDOMAIN' | 'NOTIMP' | 'REFUSED'
  errorReturnSoaTtl?: number
  /** @max 4294967295 */
  expireLimit?: number
  /** @max 4294967295 */
  minimumTtl?: number
  primaryNameserver: string
  /** @max 4294967295 */
  refreshInterval?: number
  /** @max 4294967295 */
  retry?: number
  /** @max 4294967295 */
  serialNumber: number
}

export interface StructsIpamLastScanResult {
  addressCount?: number
  finishAt?: string
  message?: string
  scanAt?: string
  status: 'undo' | 'doing' | 'success' | 'fail'
}

export interface StructsJobPlan {
  circle: 'daily' | 'weekly' | 'monthly' | 'hourly'
  circleDay?: number
  circleTime?: string
}

export interface StructsLoginSetting {
  apiIpRange?: string[]
  failureCount?: number
  ipRange?: string[]
  isNeedUpdateFirstLoginPwd?: boolean
  /**
   * @min 1
   * @max 999
   */
  lockDay?: number
  lockEnable?: boolean
  lockTime?: number
  loginType: 'allow' | 'keep_logged_in' | 'offline_logged_in'
  tokenExpired?: number
}

export interface StructsPasswordSetting {
  allowIncludeUsername?: boolean
  cipherComplexity?: 'none' | 'letter_number_symbol'
  enabled?: boolean
  expireDay?: number
  minLength?: number
  repeatPwdEnable?: boolean
  /**
   * @min 1
   * @max 99
   */
  repeatPwdNum?: number
}

export interface StructsRecursionForwardServer {
  address: string
  /**
   * @min 1
   * @max 255
   */
  priority: number
  /**
   * @min 1
   * @max 255
   */
  weight: number
}

export interface StructsRecursionForwardServerGroupMonitorSetting {
  domain?: string
  /**
   * @min 1
   * @max 2147483647
   */
  interval?: number
  /**
   * @min 1
   * @max 2147483647
   */
  timeout?: number
  /**
   * @min 1
   * @max 2147483647
   */
  times?: number
}

export interface StructsRecursionPrefetchTTL {
  /**
   * @min 10
   * @max 86400
   */
  intelligentTtl: number
  /**
   * @min 1
   * @max 10
   */
  triggerTtl: number
}

export interface StructsRecursionQuerySourceMonitor {
  /**
   * @maxItems 2
   * @minItems 1
   */
  addresses?: string[]
  /**
   * @min 1
   * @max 2147483647
   */
  interval?: number
  /**
   * @min 1
   * @max 2147483647
   */
  timeout?: number
  /**
   * @min 1
   * @max 2147483647
   */
  times?: number
}

export interface StructsRemoteAuthSetting {
  authMode?: 'local' | 'remote'
  /** 3.5-rc5改版 */
  cliAuthMode?: string[]
  defaultRoleID?: number
}

export interface StructsSMSTemplate {
  sign?: string
  tmpl?: string
  type?: string
}

export interface StructsSNMPDialStatus {
  hostInterface?: string
  hostVlan?: string
  switchName?: string
}

export interface StructsSNMPInfo {
  authPass?: string
  authType?: string
  community?: string
  privPass?: string
  privType?: string
  protocol?: string
  securityLevel?: string
  user?: string
  version?: string
}

export interface StructsSyslogInfo {
  protocol?: string
}

export interface StructsThreshold {
  limit?: number
  thresholdLevel: 'info' | 'warn' | 'error' | 'critical'
}

export interface StructsNeighbor {
  /** 0-4294967295 */
  asn?: number
  /** ip */
  ip: string
}

export interface StructsNetworkAdver {
  /** ip */
  ip: string
  /**
   * 0-128
   * @max 128
   */
  mask?: number
}

export interface TableTableColumn {
  dataIndex?: string
  format?: string
  key?: string
  title?: string
  value?: string
  visible?: boolean
}

export type TextprotoMIMEHeader = Record<string, string[]>

export interface UtilsDataResponseArrayConfigdbDomainLibraryType {
  data?: ConfigdbDomainLibraryType[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelAddrRangeQueryVO {
  data?: ModelAddrRangeQueryVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelAddressSchemaVOSwagger {
  data?: ModelAddressSchemaVOSwagger[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelAddressVersion {
  data?: ModelAddressVersion[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelDeviceClassVO {
  data?: ModelDeviceClassVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelGEOISPAddressVO {
  data?: ModelGEOISPAddressVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelGslbProberPoolMemberQueryVO {
  data?: ModelGslbProberPoolMemberQueryVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelGslbTopologyGroupQueryDTO {
  data?: ModelGslbTopologyGroupQueryDTO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelISPAddressVO {
  data?: ModelISPAddressVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelMACGroupQueryVO {
  data?: ModelMACGroupQueryVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelReportThreatIntelStatisticsVO {
  data?: ModelReportThreatIntelStatisticsVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelResourceDeviceQueryVO {
  data?: ModelResourceDeviceQueryVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayModelResourceZoneQueryVO {
  data?: ModelResourceZoneQueryVO[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArraySqlmodelName {
  data?: SqlmodelName[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseArrayString {
  data?: string[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseBool {
  data?: boolean
  description?: string
  rcode?: number
}

export interface UtilsDataResponseBootstrapSystemStatusInfoVO {
  data?: BootstrapSystemStatusInfoVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseCustomattributesCustomAttributesDetailVO {
  data?: CustomattributesCustomAttributesDetailVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseIpstatusDhcpIpStatusQueryMapVO {
  data?: IpstatusDhcpIpStatusQueryMapVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseKmsGetCertRes {
  data?: KmsGetCertRes
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelAutoBackupSetting {
  data?: ModelAutoBackupSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelDDns {
  data?: ModelDDns
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelDeviceDnsAnalysisVO {
  data?: ModelDeviceDnsAnalysisVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelDeviceInterfaceNameResp {
  data?: ModelDeviceInterfaceNameResp
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelDeviceInterfaceResp {
  data?: ModelDeviceInterfaceResp
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelDeviceMetricsVO {
  data?: ModelDeviceMetricsVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelDeviceStaticRouteCommon {
  data?: ModelDeviceStaticRouteCommon
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelDynamicReportVO {
  data?: ModelDynamicReportVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelEffectRangeTreeVO {
  data?: ModelEffectRangeTreeVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelGslbDatacenterInfoVO {
  data?: ModelGslbDatacenterInfoVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelGslbPoolInfoVO {
  data?: ModelGslbPoolInfoVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelGslbProberPoolInfoVO {
  data?: ModelGslbProberPoolInfoVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelGslbServerInfoVO {
  data?: ModelGslbServerInfoVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelGslbServiceInfoVO {
  data?: ModelGslbServiceInfoVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelGslbWideIPInfoVO {
  data?: ModelGslbWideIPInfoVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelIpamAddrDetailVO {
  data?: ModelIpamAddrDetailVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelIpamDeviceSwitchScanQueryVO {
  data?: ModelIpamDeviceSwitchScanQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelIpamDeviceSwitchScanVlanQueryVO {
  data?: ModelIpamDeviceSwitchScanVlanQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelIpamIpAuditSetting {
  data?: ModelIpamIpAuditSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelIpamIpAuditSyslogSetting {
  data?: ModelIpamIpAuditSyslogSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelLoginVO {
  data?: ModelLoginVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelMapStringSampleValue {
  data?: ModelMapStringSampleValue
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelNetworkListQueryVO {
  data?: ModelNetworkListQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelNetworkSetting {
  data?: ModelNetworkSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelPoolGlobalSettingVO {
  data?: ModelPoolGlobalSettingVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelReportMapVOSwagger {
  data?: ModelReportMapVOSwagger
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelReportThreatIntelStatisticsVO {
  data?: ModelReportThreatIntelStatisticsVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelReportVOSwagger {
  data?: any[]
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelResourceSummaryGetVO {
  data?: ModelResourceSummaryGetVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelSubNetworkQueryVO {
  data?: ModelSubNetworkQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseModelTreeNode {
  data?: ModelTreeNode
  description?: string
  rcode?: number
}

export interface UtilsDataResponseSqlmodelBannerSetting {
  data?: SqlmodelBannerSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseString {
  data?: string
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsCityHotSetting {
  data?: StructsCityHotSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsDeviceAnycast {
  data?: StructsDeviceAnycast
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsDeviceHA {
  data?: StructsDeviceHA
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsDeviceNTP {
  data?: StructsDeviceNTP
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsDeviceSNMP {
  data?: StructsDeviceSNMP
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsDeviceTFTP {
  data?: StructsDeviceTFTP
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsGslbProberSetting {
  data?: StructsGslbProberSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsGslbSoaSetting {
  data?: StructsGslbSoaSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsLoginSetting {
  data?: StructsLoginSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsPasswordSetting {
  data?: StructsPasswordSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsRecursionForwardServerGroupMonitorSetting {
  data?: StructsRecursionForwardServerGroupMonitorSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsRecursionPrefetchTTL {
  data?: StructsRecursionPrefetchTTL
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsRecursionQuerySourceMonitor {
  data?: StructsRecursionQuerySourceMonitor
  description?: string
  rcode?: number
}

export interface UtilsDataResponseStructsRemoteAuthSetting {
  data?: StructsRemoteAuthSetting
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataCustomattributesCustomAttributesQueryVO {
  data?: UtilsPageDataCustomattributesCustomAttributesQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogDhcpFaultHistoryQueryVO {
  data?: UtilsPageDataLogDhcpFaultHistoryQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogDhcpIPLeaseHistoryQueryVO {
  data?: UtilsPageDataLogDhcpIPLeaseHistoryQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogDhcpPacketHistoryQueryVO {
  data?: UtilsPageDataLogDhcpPacketHistoryQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogBackupConfigQueryVO {
  data?: UtilsPageDataLogLogBackupConfigQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogDnsQueryVO {
  data?: UtilsPageDataLogLogDnsQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogHistoryQueryVO {
  data?: UtilsPageDataLogLogHistoryQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogSyslogConfigQueryVO {
  data?: UtilsPageDataLogLogSyslogConfigQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogSystemQueryVO {
  data?: UtilsPageDataLogLogSystemQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogThreatIntelQueryVO {
  data?: UtilsPageDataLogLogThreatIntelQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogUpgradeQueryVO {
  data?: UtilsPageDataLogLogUpgradeQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataLogLogXforceQueryVO {
  data?: UtilsPageDataLogLogXforceQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelAclQueryVO {
  data?: UtilsPageDataModelAclQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelAmplificationQueryVO {
  data?: UtilsPageDataModelAmplificationQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelCacheProtectedSnoopQueryVO {
  data?: UtilsPageDataModelCacheProtectedSnoopQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDhcpAclChildQueryVO {
  data?: UtilsPageDataModelDhcpAclChildQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDhcpAclQueryVO {
  data?: UtilsPageDataModelDhcpAclQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDhcpFloatHostQueryVO {
  data?: UtilsPageDataModelDhcpFloatHostQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDhcpIPLeaseQueryVO {
  data?: UtilsPageDataModelDhcpIPLeaseQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDhcpTempAuthQueryVO {
  data?: UtilsPageDataModelDhcpTempAuthQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDnsZoneAuthRRSearchQueryVO {
  data?: UtilsPageDataModelDnsZoneAuthRRSearchQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDnssecVO {
  data?: UtilsPageDataModelDnssecVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDomainAclQueryVO {
  data?: UtilsPageDataModelDomainAclQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDomainLibQueryVO {
  data?: UtilsPageDataModelDomainLibQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelDomainMonitorQueryVO {
  data?: UtilsPageDataModelDomainMonitorQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelFingerPrintsQueryVO {
  data?: UtilsPageDataModelFingerPrintsQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelGslbDatacenterQueryVO {
  data?: UtilsPageDataModelGslbDatacenterQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelGslbLinkQueryVO {
  data?: UtilsPageDataModelGslbLinkQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelGslbProberPoolQueryVO {
  data?: UtilsPageDataModelGslbProberPoolQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelGslbProberQueryVO {
  data?: UtilsPageDataModelGslbProberQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelGslbTopologyQueryVO {
  data?: UtilsPageDataModelGslbTopologyQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelGslbTopologyRegionQueryVO {
  data?: UtilsPageDataModelGslbTopologyRegionQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelGslbWideIPQueryVO {
  data?: UtilsPageDataModelGslbWideIPQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelIpamDeviceScanQueryVO {
  data?: UtilsPageDataModelIpamDeviceScanQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelIpamNetScanQueryVO {
  data?: UtilsPageDataModelIpamNetScanQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelMacDiscoverVO {
  data?: UtilsPageDataModelMacDiscoverVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelMonitorQueryVO {
  data?: UtilsPageDataModelMonitorQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelOptionsQueryVO {
  data?: UtilsPageDataModelOptionsQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelPoolQueryVO {
  data?: UtilsPageDataModelPoolQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRateDomainLimitQueryVO {
  data?: UtilsPageDataModelRateDomainLimitQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionCacheTtlQueryVO {
  data?: UtilsPageDataModelRecursionCacheTtlQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionForwardDomainQueryVO {
  data?: UtilsPageDataModelRecursionForwardDomainQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionForwardExceptQueryVO {
  data?: UtilsPageDataModelRecursionForwardExceptQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionForwardGlobalQueryVO {
  data?: UtilsPageDataModelRecursionForwardGlobalQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionForwardServerGroupQueryVO {
  data?: UtilsPageDataModelRecursionForwardServerGroupQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionPrefetchQueryVO {
  data?: UtilsPageDataModelRecursionPrefetchQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionQuerySourceQueryVO {
  data?: UtilsPageDataModelRecursionQuerySourceQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionRootHintQueryVO {
  data?: UtilsPageDataModelRecursionRootHintQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionSortListQueryVO {
  data?: UtilsPageDataModelRecursionSortListQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRecursionStubZoneQueryVO {
  data?: UtilsPageDataModelRecursionStubZoneQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRemoteAuthOrderGetVO {
  data?: UtilsPageDataModelRemoteAuthOrderGetVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRemoteAuthRoleMapQueryVO {
  data?: UtilsPageDataModelRemoteAuthRoleMapQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelRemoteAuthServiceQueryVO {
  data?: UtilsPageDataModelRemoteAuthServiceQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelReportListQueryVO {
  data?: UtilsPageDataModelReportListQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelReportMenuQueryVO {
  data?: UtilsPageDataModelReportMenuQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelReportPolicyQueryVO {
  data?: UtilsPageDataModelReportPolicyQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelReportRuleQueryVO {
  data?: UtilsPageDataModelReportRuleQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelReportTemplateQueryVO {
  data?: UtilsPageDataModelReportTemplateQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelReportThreatIntelEvent {
  data?: UtilsPageDataModelReportThreatIntelEvent
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelReportThreatIntelHostQueryVO {
  data?: UtilsPageDataModelReportThreatIntelHostQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelSecurityAdvanceAclQueryVO {
  data?: UtilsPageDataModelSecurityAdvanceAclQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelSecurityThreatintelQueryVO {
  data?: UtilsPageDataModelSecurityThreatintelQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelSecurityTunnelQueryVO {
  data?: UtilsPageDataModelSecurityTunnelQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelSecurityXforceQueryVO {
  data?: UtilsPageDataModelSecurityXforceQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelShareNetworkQueryVO {
  data?: UtilsPageDataModelShareNetworkQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelSystemBackupQueryVO {
  data?: UtilsPageDataModelSystemBackupQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelTemplateQueryVO {
  data?: UtilsPageDataModelTemplateQueryVO
  description?: string
  rcode?: number
}

export interface UtilsDataResponseUtilsPageDataModelTsigQueryVO {
  data?: UtilsPageDataModelTsigQueryVO
  description?: string
  rcode?: number
}

export interface UtilsEmptyResponse {
  description?: string
  rcode?: number
}

export interface UtilsPageDataCustomattributesCustomAttributesQueryVO {
  list?: CustomattributesCustomAttributesQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataGitlabYamuComHyperdnsApiServerInternalDeviceModelUpgradePkgCommon {
  list?: GitlabYamuComHyperdnsApiServerInternalDeviceModelUpgradePkgCommon[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataKmsQueryRes {
  list?: KmsQueryRes[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogDhcpFaultHistoryQueryVO {
  list?: LogDhcpFaultHistoryQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogDhcpIPLeaseHistoryQueryVO {
  list?: LogDhcpIPLeaseHistoryQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogDhcpPacketHistoryQueryVO {
  list?: LogDhcpPacketHistoryQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogBackupConfigQueryVO {
  list?: LogLogBackupConfigQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogDnsQueryVO {
  list?: LogLogDnsQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogHistoryQueryVO {
  list?: LogLogHistoryQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogSyslogConfigQueryVO {
  list?: LogLogSyslogConfigQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogSystemQueryVO {
  list?: LogLogSystemQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogThreatIntelQueryVO {
  list?: LogLogThreatIntelQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogUpgradeQueryVO {
  list?: LogLogUpgradeQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataLogLogXforceQueryVO {
  list?: LogLogXforceQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAccountQueryVO {
  list?: ModelAccountQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAclExportVO {
  list?: ModelAclExportVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAclQueryVO {
  list?: ModelAclQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAddressPermissionQueryVO {
  list?: ModelAddressPermissionQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAlarmActiveDetailVO {
  list?: ModelAlarmActiveDetailVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAlarmActiveList {
  list?: ModelAlarmActiveList[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAlarmConfigQueryVO {
  list?: ModelAlarmConfigQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAlarmHistoryQueryVO {
  list?: ModelAlarmHistoryQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAlarmNotifyQueryVO {
  list?: ModelAlarmNotifyQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelAmplificationQueryVO {
  list?: ModelAmplificationQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelCacheProtectedSnoopQueryVO {
  list?: ModelCacheProtectedSnoopQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelCacheSettingQueryVO {
  list?: ModelCacheSettingQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDeviceGroupQueryVO {
  list?: ModelDeviceGroupQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDeviceQueryVO {
  list?: ModelDeviceQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDhcpAclChildQueryVO {
  list?: ModelDhcpAclChildQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDhcpAclQueryVO {
  list?: ModelDhcpAclQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDhcpFloatHostQueryVO {
  list?: ModelDhcpFloatHostQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDhcpIPLeaseQueryVO {
  list?: ModelDhcpIPLeaseQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDhcpNodeFailoverQueryVO {
  list?: ModelDhcpNodeFailoverQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDhcpPoolQueryVO {
  list?: ModelDhcpPoolQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDhcpTempAuthQueryVO {
  list?: ModelDhcpTempAuthQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDnsViewQueryVO {
  list?: ModelDnsViewQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDnsZoneAuthQueryVO {
  list?: ModelDnsZoneAuthQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDnsZoneAuthRRQueryVO {
  list?: ModelDnsZoneAuthRRQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDnsZoneAuthRRSearchQueryVO {
  list?: ModelDnsZoneAuthRRSearchQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDnsZoneAuthShareRRImportDTO {
  list?: ModelDnsZoneAuthShareRRImportDTO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDnsZoneAuthShareRRQueryVO {
  list?: ModelDnsZoneAuthShareRRQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDnssecVO {
  list?: ModelDnssecVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDomainAclExportVO {
  list?: ModelDomainAclExportVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDomainAclQueryVO {
  list?: ModelDomainAclQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDomainLibQueryVO {
  list?: ModelDomainLibQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelDomainMonitorQueryVO {
  list?: ModelDomainMonitorQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelFingerPrintsQueryVO {
  list?: ModelFingerPrintsQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbDatacenterQueryVO {
  list?: ModelGslbDatacenterQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbLinkQueryVO {
  list?: ModelGslbLinkQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbPoolQueryVO {
  list?: ModelGslbPoolQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbProberPoolQueryVO {
  list?: ModelGslbProberPoolQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbProberQueryVO {
  list?: ModelGslbProberQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbServerQueryVO {
  list?: ModelGslbServerQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbServiceQueryVO {
  list?: ModelGslbServiceQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbThirdSyncVO {
  list?: ModelGslbThirdSyncVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbTopologyQueryVO {
  list?: ModelGslbTopologyQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbTopologyRegionQueryVO {
  list?: ModelGslbTopologyRegionQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelGslbWideIPQueryVO {
  list?: ModelGslbWideIPQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelHAGroupQueryVO {
  list?: ModelHAGroupQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIntelligentCacheQueryVO {
  list?: ModelIntelligentCacheQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIpAclDenyExportVO {
  list?: ModelIpAclDenyExportVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIpAclDenyQueryVO {
  list?: ModelIpAclDenyQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIpAclQueryVO {
  list?: ModelIpAclQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIpamDeviceScanQueryVO {
  list?: ModelIpamDeviceScanQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIpamExchangeQueryVO {
  list?: ModelIpamExchangeQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIpamIpAuditQueryVO {
  list?: ModelIpamIpAuditQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelIpamNetScanQueryVO {
  list?: ModelIpamNetScanQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelLicenseAllowQueryVO {
  list?: ModelLicenseAllowQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelLicenseHistoryQueryVO {
  list?: ModelLicenseHistoryQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelLicenseShareQueryVO {
  list?: ModelLicenseShareQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelMACQueryVO {
  list?: ModelMACQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelMacDiscoverVO {
  list?: ModelMacDiscoverVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelMonitorQueryVO {
  list?: ModelMonitorQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelNetworkQueryVO {
  list?: ModelNetworkQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelNxrQueryVO {
  list?: ModelNxrQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelOptionsQueryVO {
  list?: ModelOptionsQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelPoolQueryVO {
  list?: ModelPoolQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelQtypeAclQueryVO {
  list?: ModelQtypeAclQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRateDomainLimitQueryVO {
  list?: ModelRateDomainLimitQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRateIpLimitQueryVO {
  list?: ModelRateIpLimitQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionCacheTtlQueryVO {
  list?: ModelRecursionCacheTtlQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionForwardDomainExportVO {
  list?: ModelRecursionForwardDomainExportVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionForwardDomainQueryVO {
  list?: ModelRecursionForwardDomainQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionForwardExceptQueryVO {
  list?: ModelRecursionForwardExceptQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionForwardGlobalQueryVO {
  list?: ModelRecursionForwardGlobalQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionForwardServerGroupQueryVO {
  list?: ModelRecursionForwardServerGroupQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionPrefetchQueryVO {
  list?: ModelRecursionPrefetchQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionQuerySourceQueryVO {
  list?: ModelRecursionQuerySourceQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionRootHintQueryVO {
  list?: ModelRecursionRootHintQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionSortListQueryVO {
  list?: ModelRecursionSortListQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRecursionStubZoneQueryVO {
  list?: ModelRecursionStubZoneQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRemoteAuthOrderGetVO {
  list?: ModelRemoteAuthOrderGetVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRemoteAuthRoleMapQueryVO {
  list?: ModelRemoteAuthRoleMapQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRemoteAuthServiceQueryVO {
  list?: ModelRemoteAuthServiceQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelReportListQueryVO {
  list?: ModelReportListQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelReportMenuQueryVO {
  list?: ModelReportMenuQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelReportPolicyQueryVO {
  list?: ModelReportPolicyQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelReportRuleQueryVO {
  list?: ModelReportRuleQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelReportTemplateQueryVO {
  list?: ModelReportTemplateQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelReportThreatIntelEvent {
  list?: ModelReportThreatIntelEvent[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelReportThreatIntelHostQueryVO {
  list?: ModelReportThreatIntelHostQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRoleQueryVO {
  list?: ModelRoleQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRoleResolveQueryVO {
  list?: ModelRoleResolveQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelRpzQueryVO {
  list?: ModelRpzQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSecurityAdvanceAclQueryVO {
  list?: ModelSecurityAdvanceAclQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSecurityBasicQueryVO {
  list?: ModelSecurityBasicQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSecurityRecursionQueryVO {
  list?: ModelSecurityRecursionQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSecurityThreatintelQueryVO {
  list?: ModelSecurityThreatintelQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSecurityTunnelQueryVO {
  list?: ModelSecurityTunnelQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSecurityXforceExportVO {
  list?: ModelSecurityXforceExportVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSecurityXforceQueryVO {
  list?: ModelSecurityXforceQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelShareNetworkQueryVO {
  list?: ModelShareNetworkQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelSystemBackupQueryVO {
  list?: ModelSystemBackupQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelTemplateQueryVO {
  list?: ModelTemplateQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelTsigQueryVO {
  list?: ModelTsigQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataModelUpgradeDeviceQueryVO {
  list?: ModelUpgradeDeviceQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataNetworkgroupNetworkGroupQueryVO {
  list?: NetworkgroupNetworkGroupQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataWorkorderWorkOrderAuditSettingsQueryVO {
  list?: WorkorderWorkOrderAuditSettingsQueryVO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface UtilsPageDataWorkorderWorkOrderQueryDTO {
  list?: WorkorderWorkOrderQueryDTO[]
  total?: number
  types?: string[]
  visible?: TableTableColumn[]
}

export interface WorkorderWorkOrderAuditDTO {
  ids: number[]
  reason?: string
  status?: 'approved' | 'rejected'
}

export interface WorkorderWorkOrderAuditSettingsCreateDTO {
  applyRoleID: number
  auditRoleID: number
  notifyEmailEnabled?: boolean
  remark?: string
}

export interface WorkorderWorkOrderAuditSettingsDeleteDTO {
  ids: number[]
}

export interface WorkorderWorkOrderAuditSettingsQueryVO {
  applyRoleID?: number
  applyRoleName?: string
  auditRoleID?: number
  auditRoleName?: string
  id?: number
  notifyEmailEnabled?: boolean
  remark?: string
  updatedAt?: string
}

export interface WorkorderWorkOrderAuditSettingsUpdateDTO {
  applyRoleID: number
  auditRoleID: number
  notifyEmailEnabled?: boolean
  remark?: string
}

export interface WorkorderWorkOrderGetVO {
  applyAt?: string
  applyReason?: string
  applyUserID?: number
  applyUserName?: string
  auditAt?: string
  auditReason?: string
  auditUserID?: number
  auditUserName?: string
  data?: any
  id?: number
  status?: string
  type?: string
}

export interface WorkorderWorkOrderQueryDTO {
  /** @example 1 */
  page: number
  /** @example 10 */
  pageSize: number
  status?: 'pending' | 'approved' | 'rejected'
}
