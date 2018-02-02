/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { AutoRestParameterGroupingTestService } from "../autoRestParameterGroupingTestService";

const WebResource = msRest.WebResource;

/** Class representing a ParameterGrouping. */
export class ParameterGrouping {
  private readonly client: AutoRestParameterGroupingTestService;
  /**
   * Create a ParameterGrouping.
   * @param {AutoRestParameterGroupingTestService} client Reference to the service client.
   */
  constructor(client: AutoRestParameterGroupingTestService) {
    this.client = client;
  }

  /**
   * Post a bunch of required parameters grouped
   *
   * @param {ParameterGroupingPostRequiredParameters}
   * parameterGroupingPostRequiredParameters Additional parameters for the
   * operation
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postRequiredWithHttpOperationResponse(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (parameterGroupingPostRequiredParameters === null || parameterGroupingPostRequiredParameters === undefined) {
        throw new Error('parameterGroupingPostRequiredParameters cannot be null or undefined.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let body: any;
    let customHeader: any;
    let query: any;
    let path: any;
    try {
      if (parameterGroupingPostRequiredParameters !== null && parameterGroupingPostRequiredParameters !== undefined)
      {
        body = parameterGroupingPostRequiredParameters.body;
        if (body === null || body === undefined || typeof body !== 'number') {
          throw new Error('body cannot be null or undefined and it must be of type number.');
        }
      }
      if (parameterGroupingPostRequiredParameters !== null && parameterGroupingPostRequiredParameters !== undefined)
      {
        customHeader = parameterGroupingPostRequiredParameters.customHeader;
        if (customHeader !== null && customHeader !== undefined && typeof customHeader.valueOf() !== 'string') {
          throw new Error('customHeader must be of type string.');
        }
      }
      if (parameterGroupingPostRequiredParameters !== null && parameterGroupingPostRequiredParameters !== undefined)
      {
        query = parameterGroupingPostRequiredParameters.query;
        if (query !== null && query !== undefined && typeof query !== 'number') {
          throw new Error('query must be of type number.');
        }
      }
      if (parameterGroupingPostRequiredParameters !== null && parameterGroupingPostRequiredParameters !== undefined)
      {
        path = parameterGroupingPostRequiredParameters.path;
        if (path === null || path === undefined || typeof path.valueOf() !== 'string') {
          throw new Error('path cannot be null or undefined and it must be of type string.');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'parameterGrouping/postRequired/{path}';
    requestUrl = requestUrl.replace('{path}', encodeURIComponent(path));
    let queryParamsArray: Array<any> = [];
    if (query !== null && query !== undefined) {
      queryParamsArray.push('query=' + encodeURIComponent(query.toString()));
    }
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if (customHeader !== undefined && customHeader !== null) {
      httpRequest.headers['customHeader'] = customHeader;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Serialize Request
    let requestContent = null;
    let requestModel = null;
    try {
      if (body !== null && body !== undefined) {
        let requestModelMapper = {
          required: true,
          serializedName: 'body',
          type: {
            name: 'Number'
          }
        };
        requestModel = client.serializer.serialize(requestModelMapper, body, 'body');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(body, null, 2)}.`);
      return Promise.reject(serializationError);
    }
    httpRequest.body = requestContent;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Post a bunch of optional parameters grouped
   *
   * @param {ParameterGroupingPostOptionalOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postOptionalWithHttpOperationResponse(options?: Models.ParameterGroupingPostOptionalOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let parameterGroupingPostOptionalParameters = (options && options.parameterGroupingPostOptionalParameters !== undefined) ? options.parameterGroupingPostOptionalParameters : undefined;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let customHeader: any;
    let query: any;
    try {
      if (parameterGroupingPostOptionalParameters !== null && parameterGroupingPostOptionalParameters !== undefined)
      {
        customHeader = parameterGroupingPostOptionalParameters.customHeader;
        if (customHeader !== null && customHeader !== undefined && typeof customHeader.valueOf() !== 'string') {
          throw new Error('customHeader must be of type string.');
        }
      }
      if (parameterGroupingPostOptionalParameters !== null && parameterGroupingPostOptionalParameters !== undefined)
      {
        query = parameterGroupingPostOptionalParameters.query;
        if (query !== null && query !== undefined && typeof query !== 'number') {
          throw new Error('query must be of type number.');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'parameterGrouping/postOptional';
    let queryParamsArray: Array<any> = [];
    if (query !== null && query !== undefined) {
      queryParamsArray.push('query=' + encodeURIComponent(query.toString()));
    }
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if (customHeader !== undefined && customHeader !== null) {
      httpRequest.headers['customHeader'] = customHeader;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Post parameters from multiple different parameter groups
   *
   * @param {ParameterGroupingPostMultiParamGroupsOptionalParams} [options]
   * Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postMultiParamGroupsWithHttpOperationResponse(options?: Models.ParameterGroupingPostMultiParamGroupsOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let firstParameterGroup = (options && options.firstParameterGroup !== undefined) ? options.firstParameterGroup : undefined;
    let parameterGroupingPostMultiParamGroupsSecondParamGroup = (options && options.parameterGroupingPostMultiParamGroupsSecondParamGroup !== undefined) ? options.parameterGroupingPostMultiParamGroupsSecondParamGroup : undefined;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let headerOne: any;
    let queryOne: any;
    let headerTwo: any;
    let queryTwo: any;
    try {
      if (firstParameterGroup !== null && firstParameterGroup !== undefined)
      {
        headerOne = firstParameterGroup.headerOne;
        if (headerOne !== null && headerOne !== undefined && typeof headerOne.valueOf() !== 'string') {
          throw new Error('headerOne must be of type string.');
        }
      }
      if (firstParameterGroup !== null && firstParameterGroup !== undefined)
      {
        queryOne = firstParameterGroup.queryOne;
        if (queryOne !== null && queryOne !== undefined && typeof queryOne !== 'number') {
          throw new Error('queryOne must be of type number.');
        }
      }
      if (parameterGroupingPostMultiParamGroupsSecondParamGroup !== null && parameterGroupingPostMultiParamGroupsSecondParamGroup !== undefined)
      {
        headerTwo = parameterGroupingPostMultiParamGroupsSecondParamGroup.headerTwo;
        if (headerTwo !== null && headerTwo !== undefined && typeof headerTwo.valueOf() !== 'string') {
          throw new Error('headerTwo must be of type string.');
        }
      }
      if (parameterGroupingPostMultiParamGroupsSecondParamGroup !== null && parameterGroupingPostMultiParamGroupsSecondParamGroup !== undefined)
      {
        queryTwo = parameterGroupingPostMultiParamGroupsSecondParamGroup.queryTwo;
        if (queryTwo !== null && queryTwo !== undefined && typeof queryTwo !== 'number') {
          throw new Error('queryTwo must be of type number.');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'parameterGrouping/postMultipleParameterGroups';
    let queryParamsArray: Array<any> = [];
    if (queryOne !== null && queryOne !== undefined) {
      queryParamsArray.push('query-one=' + encodeURIComponent(queryOne.toString()));
    }
    if (queryTwo !== null && queryTwo !== undefined) {
      queryParamsArray.push('query-two=' + encodeURIComponent(queryTwo.toString()));
    }
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if (headerOne !== undefined && headerOne !== null) {
      httpRequest.headers['header-one'] = headerOne;
    }
    if (headerTwo !== undefined && headerTwo !== null) {
      httpRequest.headers['header-two'] = headerTwo;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Post parameters with a shared parameter group object
   *
   * @param {ParameterGroupingPostSharedParameterGroupObjectOptionalParams}
   * [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postSharedParameterGroupObjectWithHttpOperationResponse(options?: Models.ParameterGroupingPostSharedParameterGroupObjectOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let firstParameterGroup = (options && options.firstParameterGroup !== undefined) ? options.firstParameterGroup : undefined;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let headerOne: any;
    let queryOne: any;
    try {
      if (firstParameterGroup !== null && firstParameterGroup !== undefined)
      {
        headerOne = firstParameterGroup.headerOne;
        if (headerOne !== null && headerOne !== undefined && typeof headerOne.valueOf() !== 'string') {
          throw new Error('headerOne must be of type string.');
        }
      }
      if (firstParameterGroup !== null && firstParameterGroup !== undefined)
      {
        queryOne = firstParameterGroup.queryOne;
        if (queryOne !== null && queryOne !== undefined && typeof queryOne !== 'number') {
          throw new Error('queryOne must be of type number.');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'parameterGrouping/sharedParameterGroupObject';
    let queryParamsArray: Array<any> = [];
    if (queryOne !== null && queryOne !== undefined) {
      queryParamsArray.push('query-one=' + encodeURIComponent(queryOne.toString()));
    }
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if (headerOne !== undefined && headerOne !== null) {
      httpRequest.headers['header-one'] = headerOne;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Post a bunch of required parameters grouped
   *
   * @param {ParameterGroupingPostRequiredParameters}
   * parameterGroupingPostRequiredParameters Additional parameters for the
   * operation
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters): Promise<void>;
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, options: msRest.RequestOptionsBase): Promise<void>;
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, callback: msRest.ServiceCallback<void>): void;
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postRequiredWithHttpOperationResponse(parameterGroupingPostRequiredParameters, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postRequiredWithHttpOperationResponse(parameterGroupingPostRequiredParameters, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * Post a bunch of optional parameters grouped
   *
   * @param {ParameterGroupingPostOptionalOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postOptional(): Promise<void>;
  postOptional(options: Models.ParameterGroupingPostOptionalOptionalParams): Promise<void>;
  postOptional(callback: msRest.ServiceCallback<void>): void;
  postOptional(options: Models.ParameterGroupingPostOptionalOptionalParams, callback: msRest.ServiceCallback<void>): void;
  postOptional(options?: Models.ParameterGroupingPostOptionalOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postOptionalWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postOptionalWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * Post parameters from multiple different parameter groups
   *
   * @param {ParameterGroupingPostMultiParamGroupsOptionalParams} [options]
   * Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postMultiParamGroups(): Promise<void>;
  postMultiParamGroups(options: Models.ParameterGroupingPostMultiParamGroupsOptionalParams): Promise<void>;
  postMultiParamGroups(callback: msRest.ServiceCallback<void>): void;
  postMultiParamGroups(options: Models.ParameterGroupingPostMultiParamGroupsOptionalParams, callback: msRest.ServiceCallback<void>): void;
  postMultiParamGroups(options?: Models.ParameterGroupingPostMultiParamGroupsOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMultiParamGroupsWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMultiParamGroupsWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * Post parameters with a shared parameter group object
   *
   * @param {ParameterGroupingPostSharedParameterGroupObjectOptionalParams}
   * [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postSharedParameterGroupObject(): Promise<void>;
  postSharedParameterGroupObject(options: Models.ParameterGroupingPostSharedParameterGroupObjectOptionalParams): Promise<void>;
  postSharedParameterGroupObject(callback: msRest.ServiceCallback<void>): void;
  postSharedParameterGroupObject(options: Models.ParameterGroupingPostSharedParameterGroupObjectOptionalParams, callback: msRest.ServiceCallback<void>): void;
  postSharedParameterGroupObject(options?: Models.ParameterGroupingPostSharedParameterGroupObjectOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postSharedParameterGroupObjectWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postSharedParameterGroupObjectWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

}
