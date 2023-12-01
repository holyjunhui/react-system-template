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

import { ModelSMSConfig, UtilsEmptyResponse } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Sms<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags sms
   * @name PostSms
   * @summary 设置短信信息
   * @request POST:/sms
   */
  postSms = (req: ModelSMSConfig, params: RequestParams = {}) =>
    this.request<UtilsEmptyResponse, any>({
      path: `/sms`,
      method: 'POST',
      body: req,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
