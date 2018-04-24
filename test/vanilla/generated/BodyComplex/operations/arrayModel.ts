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
import * as TypeSpecs from "../models/typeSpecs";
import { AutoRestComplexTestService } from "../autoRestComplexTestService";

const WebResource = msRest.WebResource;
const OperationSpec = msRest.OperationSpec;
const HttpMethod = msRest.HttpMethod;

const getValidOperationSpec: OperationSpec = {
  requestHttpMethod: HttpMethod.GET
};

const putValidOperationSpec: OperationSpec = {
  requestHttpMethod: HttpMethod.PUT,
  requestBodySpec: TypeSpecs.ArrayWrapper
};

const getEmptyOperationSpec: OperationSpec = {
  requestHttpMethod: HttpMethod.GET
};

const putEmptyOperationSpec: OperationSpec = {
  requestHttpMethod: HttpMethod.PUT,
  requestBodySpec: TypeSpecs.ArrayWrapper
};

const getNotProvidedOperationSpec: OperationSpec = {
  requestHttpMethod: HttpMethod.GET
};

/** Class representing a ArrayModel. */
export class ArrayModel {
  private readonly client: AutoRestComplexTestService;
  /**
   * Create a ArrayModel.
   * @param {AutoRestComplexTestService} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestService) {
    this.client = client;
  }

    /**
     * Get complex types with array property
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
      let client = this.client;

      // Construct URL
      let baseUrl = this.client.baseUri;
      let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/valid';

      // Create HTTP transport objects
      let httpRequest = new WebResource();
      httpRequest.method = 'GET';
      httpRequest.url = requestUrl;
      httpRequest.headers = {};
      // Set Headers
      httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
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
          let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
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
        // Deserialize Response
        if (statusCode === 200) {
          let parsedResponse = operationRes.parsedBody as { [key: string]: any };
          try {
            if (parsedResponse !== null && parsedResponse !== undefined) {
              let resultMapper = Mappers.ArrayWrapper;
              operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
            }
          } catch (error) {
            let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
            deserializationError.request = msRest.stripRequest(httpRequest);
            deserializationError.response = msRest.stripResponse(response);
            return Promise.reject(deserializationError);
          }
        }

      } catch(err) {
        return Promise.reject(err);
      }

      return Promise.resolve(operationRes);
    }

    /**
     * Put complex types with array property
     *
     * @param {ArrayModelPutValidOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    async putValidWithHttpOperationResponse(options?: Models.ArrayModelPutValidOptionalParams): Promise<msRest.HttpOperationResponse> {
      let client = this.client;
      let arrayProperty = (options && options.arrayProperty !== undefined) ? options.arrayProperty : undefined;
      // Validate
      try {
        if (Array.isArray(arrayProperty)) {
          for (let i = 0; i < arrayProperty.length; i++) {
            if (arrayProperty[i] !== null && arrayProperty[i] !== undefined && typeof arrayProperty[i].valueOf() !== 'string') {
              throw new Error('arrayProperty[i] must be of type string.');
            }
          }
        }
      } catch (error) {
        return Promise.reject(error);
      }
      let complexBody: any
      if (arrayProperty !== null && arrayProperty !== undefined) {
        complexBody = {};
        complexBody.arrayProperty = arrayProperty;
      }

      // Construct URL
      let baseUrl = this.client.baseUri;
      let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/valid';

      // Create HTTP transport objects
      let httpRequest = new WebResource();
      httpRequest.method = 'PUT';
      httpRequest.url = requestUrl;
      httpRequest.headers = {};
      // Set Headers
      httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
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
        if (complexBody !== null && complexBody !== undefined) {
          let requestModelMapper = Mappers.ArrayWrapper;
          requestModel = client.serializer.serialize(requestModelMapper, complexBody, 'complexBody');
          requestContent = JSON.stringify(requestModel);
        }
      } catch (error) {
        let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
            `payload - ${JSON.stringify(complexBody, null, 2)}.`);
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
          let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
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
     * Get complex types with array property which is empty
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    async getEmptyWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
      let client = this.client;

      // Construct URL
      let baseUrl = this.client.baseUri;
      let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/empty';

      // Create HTTP transport objects
      let httpRequest = new WebResource();
      httpRequest.method = 'GET';
      httpRequest.url = requestUrl;
      httpRequest.headers = {};
      // Set Headers
      httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
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
          let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
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
        // Deserialize Response
        if (statusCode === 200) {
          let parsedResponse = operationRes.parsedBody as { [key: string]: any };
          try {
            if (parsedResponse !== null && parsedResponse !== undefined) {
              let resultMapper = Mappers.ArrayWrapper;
              operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
            }
          } catch (error) {
            let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
            deserializationError.request = msRest.stripRequest(httpRequest);
            deserializationError.response = msRest.stripResponse(response);
            return Promise.reject(deserializationError);
          }
        }

      } catch(err) {
        return Promise.reject(err);
      }

      return Promise.resolve(operationRes);
    }

    /**
     * Put complex types with array property which is empty
     *
     * @param {ArrayModelPutEmptyOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    async putEmptyWithHttpOperationResponse(options?: Models.ArrayModelPutEmptyOptionalParams): Promise<msRest.HttpOperationResponse> {
      let client = this.client;
      let arrayProperty = (options && options.arrayProperty !== undefined) ? options.arrayProperty : undefined;
      // Validate
      try {
        if (Array.isArray(arrayProperty)) {
          for (let i = 0; i < arrayProperty.length; i++) {
            if (arrayProperty[i] !== null && arrayProperty[i] !== undefined && typeof arrayProperty[i].valueOf() !== 'string') {
              throw new Error('arrayProperty[i] must be of type string.');
            }
          }
        }
      } catch (error) {
        return Promise.reject(error);
      }
      let complexBody: any
      if (arrayProperty !== null && arrayProperty !== undefined) {
        complexBody = {};
        complexBody.arrayProperty = arrayProperty;
      }

      // Construct URL
      let baseUrl = this.client.baseUri;
      let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/empty';

      // Create HTTP transport objects
      let httpRequest = new WebResource();
      httpRequest.method = 'PUT';
      httpRequest.url = requestUrl;
      httpRequest.headers = {};
      // Set Headers
      httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
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
        if (complexBody !== null && complexBody !== undefined) {
          let requestModelMapper = Mappers.ArrayWrapper;
          requestModel = client.serializer.serialize(requestModelMapper, complexBody, 'complexBody');
          requestContent = JSON.stringify(requestModel);
        }
      } catch (error) {
        let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
            `payload - ${JSON.stringify(complexBody, null, 2)}.`);
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
          let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
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
     * Get complex types with array property while server doesn't provide a
     * response payload
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    async getNotProvidedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
      let client = this.client;

      // Construct URL
      let baseUrl = this.client.baseUri;
      let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/notprovided';

      // Create HTTP transport objects
      let httpRequest = new WebResource();
      httpRequest.method = 'GET';
      httpRequest.url = requestUrl;
      httpRequest.headers = {};
      // Set Headers
      httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
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
          let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
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
        // Deserialize Response
        if (statusCode === 200) {
          let parsedResponse = operationRes.parsedBody as { [key: string]: any };
          try {
            if (parsedResponse !== null && parsedResponse !== undefined) {
              let resultMapper = Mappers.ArrayWrapper;
              operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
            }
          } catch (error) {
            let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
            deserializationError.request = msRest.stripRequest(httpRequest);
            deserializationError.response = msRest.stripResponse(response);
            return Promise.reject(deserializationError);
          }
        }

      } catch(err) {
        return Promise.reject(err);
      }

      return Promise.resolve(operationRes);
    }

    /**
     * Get complex types with array property
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ArrayWrapper} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getValid(): Promise<Models.ArrayWrapper>;
    getValid(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
    getValid(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
    getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
    getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
      if (!callback && typeof options === 'function') {
        callback = options;
        options = undefined;
      }
      let cb = callback as msRest.ServiceCallback<Models.ArrayWrapper>;
      if (!callback) {
        return this.getValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
          return Promise.resolve(operationRes.parsedBody as Models.ArrayWrapper);
        }).catch((err: Error) => {
          return Promise.reject(err);
        });
      } else {
        msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
          if (err) {
            return cb(err);
          }
          let result = data.parsedBody as Models.ArrayWrapper;
          return cb(err, result, data.request, data.response);
        });
      }
    }

    /**
     * Put complex types with array property
     *
     * @param {ArrayModelPutValidOptionalParams} [options] Optional Parameters.
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
    putValid(): Promise<void>;
    putValid(options: Models.ArrayModelPutValidOptionalParams): Promise<void>;
    putValid(callback: msRest.ServiceCallback<void>): void;
    putValid(options: Models.ArrayModelPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
    putValid(options?: Models.ArrayModelPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
      if (!callback && typeof options === 'function') {
        callback = options;
        options = undefined;
      }
      let cb = callback as msRest.ServiceCallback<void>;
      if (!callback) {
        return this.putValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
          return Promise.resolve(operationRes.parsedBody as void);
        }).catch((err: Error) => {
          return Promise.reject(err);
        });
      } else {
        msRest.promiseToCallback(this.putValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
          if (err) {
            return cb(err);
          }
          let result = data.parsedBody as void;
          return cb(err, result, data.request, data.response);
        });
      }
    }

    /**
     * Get complex types with array property which is empty
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ArrayWrapper} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getEmpty(): Promise<Models.ArrayWrapper>;
    getEmpty(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
    getEmpty(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
    getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
    getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
      if (!callback && typeof options === 'function') {
        callback = options;
        options = undefined;
      }
      let cb = callback as msRest.ServiceCallback<Models.ArrayWrapper>;
      if (!callback) {
        return this.getEmptyWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
          return Promise.resolve(operationRes.parsedBody as Models.ArrayWrapper);
        }).catch((err: Error) => {
          return Promise.reject(err);
        });
      } else {
        msRest.promiseToCallback(this.getEmptyWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
          if (err) {
            return cb(err);
          }
          let result = data.parsedBody as Models.ArrayWrapper;
          return cb(err, result, data.request, data.response);
        });
      }
    }

    /**
     * Put complex types with array property which is empty
     *
     * @param {ArrayModelPutEmptyOptionalParams} [options] Optional Parameters.
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
    putEmpty(): Promise<void>;
    putEmpty(options: Models.ArrayModelPutEmptyOptionalParams): Promise<void>;
    putEmpty(callback: msRest.ServiceCallback<void>): void;
    putEmpty(options: Models.ArrayModelPutEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
    putEmpty(options?: Models.ArrayModelPutEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): any {
      if (!callback && typeof options === 'function') {
        callback = options;
        options = undefined;
      }
      let cb = callback as msRest.ServiceCallback<void>;
      if (!callback) {
        return this.putEmptyWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
          return Promise.resolve(operationRes.parsedBody as void);
        }).catch((err: Error) => {
          return Promise.reject(err);
        });
      } else {
        msRest.promiseToCallback(this.putEmptyWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
          if (err) {
            return cb(err);
          }
          let result = data.parsedBody as void;
          return cb(err, result, data.request, data.response);
        });
      }
    }

    /**
     * Get complex types with array property while server doesn't provide a
     * response payload
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ArrayWrapper} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getNotProvided(): Promise<Models.ArrayWrapper>;
    getNotProvided(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
    getNotProvided(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
    getNotProvided(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
    getNotProvided(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
      if (!callback && typeof options === 'function') {
        callback = options;
        options = undefined;
      }
      let cb = callback as msRest.ServiceCallback<Models.ArrayWrapper>;
      if (!callback) {
        return this.getNotProvidedWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
          return Promise.resolve(operationRes.parsedBody as Models.ArrayWrapper);
        }).catch((err: Error) => {
          return Promise.reject(err);
        });
      } else {
        msRest.promiseToCallback(this.getNotProvidedWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
          if (err) {
            return cb(err);
          }
          let result = data.parsedBody as Models.ArrayWrapper;
          return cb(err, result, data.request, data.response);
        });
      }
    }
}
