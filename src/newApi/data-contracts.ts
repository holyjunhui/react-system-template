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

export interface HandlerAccountCreateReq {
  /**
   * 备注信息
   * @maxLength 512
   */
  comment?: string
  /**
   * 客户属性
   * 说明:
   * - 仅适用于客户账号 (type=customer)
   * - 目前仅支持 ali_account_id 属性，用于绑定相应的阿里账号
   */
  customer_attributes?: Record<string, string>
  /**
   * 邮箱地址 (创建时必填)
   * @maxLength 128
   */
  email?: string
  /**
   * 登录用户名 (创建后不再允许修改)
   * @minLength 5
   * @maxLength 64
   */
  login: string
  /**
   * 账号名称
   * @minLength 5
   * @maxLength 128
   */
  name?: string
  /**
   * 登录密码
   * @minLength 6
   * @maxLength 64
   */
  password: string
  /**
   * 电话号码
   * @maxLength 32
   */
  phone?: string
  /**
   * 账号角色: admin (管理员), operator (操作员), auditor (审计员)
   * 注意: 子账号角色目前只能为 operator 和 auditor
   */
  role?: 'admin' | 'operator' | 'auditor'
  /**
   * 账号类型: channel (渠道商), customer (客户)
   * 说明:
   * - 系统账号 (type=system) 才能创建渠道商账号 (type=channel)
   * - 渠道商账号 (type=channel) 才能创建客户账号 (type=customer)
   * - 渠道商和客户主账号都可以创建自己的子账号
   * - 子账号角色只能为 operator 和 auditor (将来根据需要再调整)
   */
  type: 'channel' | 'customer'
}

export interface HandlerAccountImpersonateResp {
  /** 账号信息 */
  account?: ModelAccount
  /** 跳转地址 */
  redirect?: string
  /** JWT token */
  token?: string
}

export interface HandlerAccountPasswordReq {
  /**
   * @minLength 6
   * @maxLength 64
   */
  new_password: string
  /**
   * @minLength 6
   * @maxLength 64
   */
  old_password?: string
}

export interface HandlerAccountUpdateReq {
  /**
   * 备注信息
   * @maxLength 512
   */
  comment?: string
  /**
   * 客户属性
   * 说明:
   * - 仅适用于客户账号 (type=customer)
   * - 目前仅支持 ali_account_id 属性，用于绑定相应的阿里账号
   */
  customer_attributes?: Record<string, string>
  /**
   * 邮箱地址 (创建时必填)
   * @maxLength 128
   */
  email?: string
  /**
   * 账号名称
   * @minLength 5
   * @maxLength 128
   */
  name?: string
  /**
   * 电话号码
   * @maxLength 32
   */
  phone?: string
  /**
   * 账号角色: admin (管理员), operator (操作员), auditor (审计员)
   * 注意: 子账号角色目前只能为 operator 和 auditor
   */
  role?: 'admin' | 'operator' | 'auditor'
}

export interface HandlerAliAccountReq {
  /**
   * AccessKey
   * @maxLength 128
   */
  access_key_id?: string
  /** @maxLength 128 */
  access_key_secret?: string
  /**
   * 备注信息
   * @maxLength 256
   */
  comment?: string
  /**
   * RAM 密码 (创建时必填)
   * @maxLength 128
   */
  password?: string
  /** 状态: enabled, disabled */
  status?: 'enabled' | 'disabled'
  /**
   * RAM 用户名 (创建时必填)
   * @minLength 5
   * @maxLength 128
   */
  username?: string
}

export interface HandlerInstanceReq {
  /**
   * 实例码
   * @maxLength 64
   */
  code: string
  /**
   * 备注信息
   * @maxLength 255
   */
  comment?: string
  /**
   * 自定义名称
   * @maxLength 128
   */
  name: string
  /** 状态: enabled, disabled */
  status?: 'enabled' | 'disabled'
}

export interface HandlerInstanceReviewReq {
  /**
   * 备注信息
   * @maxLength 255
   */
  comment?: string
  /**
   * 审核通过/拒绝的原因
   * @maxLength 128
   */
  reason: string
  /** 审核状态: accepted, rejected */
  status: 'accepted' | 'rejected'
}

export interface HandlerLoginReq {
  /**
   * 用户名
   * @example "testuser"
   */
  login?: string
  /**
   * 密码
   * @example "password"
   */
  password?: string
}

export interface HandlerLoginResp {
  /** 账号信息 */
  account?: ModelAccount
  /** JWT token */
  token?: string
}

export interface HandlerPasswordReq {
  /**
   * @minLength 6
   * @maxLength 64
   */
  new_password: string
  /**
   * @minLength 6
   * @maxLength 64
   */
  old_password: string
}

export interface HandlerProfileReq {
  /** 账号信息 */
  account?: HandlerAccountUpdateReq
}

export interface HandlerProfileResp {
  /** 账号信息 */
  account?: ModelAccount
}

export interface HandlerQueryResp {
  /** 此次查询的结果数量，即 items 的长度 */
  count?: number
  /** 此次查询的结果数据 */
  items?: any
  /** 总数量 */
  total?: number
}

export interface HandlerWebRuleReq {
  /**
   * 备注
   * @maxLength 256
   */
  comment?: string
  /**
   * 网站(全域名)
   * @maxLength 255
   */
  domain: string
  /** HTTPS 高级配置 */
  https?: ModelWebHttps
  /**
   * 实例
   * @minItems 1
   */
  instance_ids: number[]
  /**
   * 网站名称
   * @maxLength 128
   */
  name: string
  /**
   * 协议类型
   * @minItems 1
   */
  proxys: ModelWebProxy[]
  /** 服务器地址 */
  real_server: ModelWebRealServer
}

export interface ModelAccount {
  /** 所属渠道商 */
  channel_id?: number
  /** 备注信息 */
  comment?: string
  /** 创建时间 */
  created_at?: string
  /** 所属客户 */
  customer_id?: number
  /** 邮箱地址 */
  email?: string
  id?: number
  /** 是否系统内置账号？ */
  is_builtin?: boolean
  /** 登录用户名 */
  login?: string
  /** 账号名称 */
  name?: string
  /** 主/父账号 ID；如果等于 0 则表示为主/父账号 */
  parent_id?: number
  /** 电话号码 */
  phone?: string
  /** 账号角色 (枚举类型，取值: admin (管理员), operator (操作员), auditor (审计员)) */
  role?: string
  /** 状态 (枚举类型，取值: enabled, disabled, deleted) */
  status?: string
  /** 账号类型 (枚举类型，取值: system (系统), channel (渠道商), customer (客户)) */
  type?: string
  /** 更新时间 */
  updated_at?: string
}

export interface ModelAccountMenuItem {
  /** 账号ID */
  id?: number
  /** 登录用户名 */
  login?: string
  /** 账号名称 */
  name?: string
  /** 账号角色 (admin, operator, auditor) */
  role?: string
  /** 状态 (enabled, disabled) */
  status?: string
}

export interface ModelAccountResp {
  /** 阿里账号名称 */
  ali_account_username?: string
  /** 所属渠道商 */
  channel_id?: number
  /** 渠道商名称 */
  channel_name?: string
  /** 备注信息 */
  comment?: string
  /** 创建时间 */
  created_at?: string
  /** 客户属性 */
  customer_attributes?: Record<string, string>
  /** 所属客户 */
  customer_id?: number
  /** 客户名称 */
  customer_name?: string
  /** 邮箱地址 */
  email?: string
  id?: number
  /** 是否系统内置账号？ */
  is_builtin?: boolean
  /** 登录用户名 */
  login?: string
  /** 账号名称 */
  name?: string
  /** 主/父账号 ID；如果等于 0 则表示为主/父账号 */
  parent_id?: number
  /** 电话号码 */
  phone?: string
  /** 账号角色 (枚举类型，取值: admin (管理员), operator (操作员), auditor (审计员)) */
  role?: string
  /** 状态 (枚举类型，取值: enabled, disabled, deleted) */
  status?: string
  /** 账号类型 (枚举类型，取值: system (系统), channel (渠道商), customer (客户)) */
  type?: string
  /** 更新时间 */
  updated_at?: string
}

export interface ModelAliAccount {
  /**
   * AccessKey
   * TODO: 加密 secret
   */
  access_key_id?: string
  /** 所属渠道商 */
  channel_id?: number
  /** 备注信息 */
  comment?: string
  /** 创建时间 */
  created_at?: string
  id?: number
  /** 状态 (枚举类型，取值: enabled, disabled, deleted) */
  status?: string
  /** 更新时间 */
  updated_at?: string
  /**
   * RAM 用户名及密码
   * TODO: 加密 password
   */
  username?: string
}

export interface ModelAliAccountMenuItem {
  /** 账号ID */
  id?: number
  /** 状态 (enabled, disabled) */
  status?: string
  /** 用户名 */
  username?: string
}

export interface ModelApiStatus {
  /** 调用时间 */
  called_at?: string
  /** 失败次数 */
  failed_count?: number
  /** 描述信息 */
  message?: string
  /**
   * 操作动作
   * c.f. ApiOperation*
   */
  operation?: string
  /**
   * 操作结果
   * c.f. ApiResult*
   */
  status?: string
  /** 更新的字段列表，用于确定具体使用的阿里云 API */
  updated_fields?: string[]
}

export interface ModelInstanceMenuItem {
  /** 实例码 */
  code?: string
  /** 实例 ID */
  id?: number
  /** 名称（自定义名称） */
  name?: string
  /** 审核状态 (pending, accepted, rejected) */
  review_status?: string
  /** 状态 (enabled, disabled) */
  status?: string
}

export interface ModelInstanceResp {
  /**
   * 所属阿里云账号
   * NOTE: 不可修改
   */
  ali_account_id?: number
  /** 所属渠道商 */
  channel_id?: number
  /**
   * 实例码
   * 由售卖系统生成，唯一且不变，与实例 ID 唯一对应。
   * NOTE: 不可修改
   */
  code?: string
  /** 备注信息 */
  comment?: string
  /** 创建时间 */
  created_at?: string
  /** 所属客户 */
  customer_id?: number
  /** 客户名称 */
  customer_name?: string
  id?: number
  /** 名称（自定义名称） */
  name?: string
  /** 审核信息 */
  review_info?: ModelInstanceReview
  /**
   * 审核状态 (c.f., InstanceReviewStatus*)
   * 取值: pending (审核中), accepted (通过), rejected (拒绝)
   */
  review_status?: string
  /** 状态 (枚举类型，取值: enabled, disabled, deleted) */
  status?: string
  /** 更新时间 */
  updated_at?: string
}

export interface ModelInstanceReview {
  /**
   * 备注信息
   * @maxLength 255
   */
  comment?: string
  /**
   * 审核通过/拒绝的原因
   * @maxLength 128
   */
  reason: string
}

export interface ModelWebCertificate {
  /** 证书内容 (PEM) */
  cert: string
  /**
   * 私钥内容 (PEM)
   * TODO: 加密处理
   */
  key: string
  /**
   * 证书名称
   * @maxLength 128
   */
  name: string
}

export interface ModelWebHttps {
  /** 是否启用 HTTP 2.0 协议？ */
  http2?: boolean
  /** 是否开启 HTTPS 的强制跳转功能？ */
  http2https?: boolean
  /** 是否开启 HTTP 回源功能？ */
  https2http?: boolean
  /** 是否开启 OCSP 功能？ */
  ocsp?: boolean
  /**
   * TLS 加密套件配置
   * c.f. WebHttpsSslCiphers*
   */
  ssl_ciphers: 'all' | 'improved' | 'strong' | 'default'
  /**
   * TLS 版本支持
   * c.f. WebHttpsSslProtocols*
   */
  ssl_protocols: 'tls1.0' | 'tls1.1' | 'tls1.2'
}

export interface ModelWebProxy {
  /**
   * 端口
   * @minItems 1
   */
  ports: number[]
  /**
   * 协议
   * c.f. WebProxyType*
   */
  type: 'http' | 'https' | 'websocket' | 'websockets'
}

export interface ModelWebRealServer {
  /**
   * 回源负载均衡算法
   * c.f. WebRealServerPolicy*
   * AliAPI: DescribeL7RsPolicy
   */
  policy: 'ip_hash' | 'rr' | 'least_time'
  /**
   * 源站地址
   * @maxItems 20
   * @minItems 1
   */
  servers: string[]
  /**
   * 源站类型: 0-源站IP, 1-源站域名
   * c.f. WebRealServerType*
   * @max 1
   */
  type?: number
}

export interface ModelWebRule {
  /** 阿里云接口同步状态 */
  api_status?: ModelApiStatus
  /** SSL 证书配置 */
  certificate?: ModelWebCertificate
  /** 所属渠道商 */
  channel_id?: number
  /**
   * 接入生成的 CNAME
   * NOTE: 接入成功之后才有
   */
  cname?: string
  /** 备注信息 */
  comment?: string
  /** 创建时间 */
  created_at?: string
  /** 所属客户 */
  customer_id?: number
  /**
   * 接入域名（完整域名）
   * NOTE: 客户的域名不能重复
   */
  domain?: string
  /** HTTPS 配置 */
  https?: ModelWebHttps
  id?: number
  /** 关联的实例 */
  instance_ids?: number[]
  /** 网站名称 */
  name?: string
  /** 转发协议 */
  proxys?: ModelWebProxy[]
  /** 源站信息 */
  real_server?: ModelWebRealServer
  /** 状态 (枚举类型，取值: enabled, disabled, deleted) */
  status?: string
  /** 更新时间 */
  updated_at?: string
  /**
   * 主域名/网站（由上述 Domain 提取）
   * TODO: 是否必要？
   */
  zone?: string
}

export interface UtilsHTTPCreated {
  /** @example "2023-06-13T10:12:34.282Z" */
  created_at?: string
  /** @example 123 */
  id?: number
}

export interface UtilsHTTPDeleted {
  /** @example "2023-06-13T10:12:34.282Z" */
  deleted_at?: string
  /** @example 123 */
  id?: number
}

export interface UtilsHTTPError {
  /** @example 400 */
  code?: number
  /** @example "invalid parameter" */
  message?: string
}

export interface UtilsHTTPUpdated {
  /** @example 123 */
  id?: number
  /** @example "2023-06-13T10:12:34.282Z" */
  updated_at?: string
}
