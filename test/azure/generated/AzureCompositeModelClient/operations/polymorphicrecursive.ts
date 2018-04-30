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
import { AzureCompositeModel } from "../azureCompositeModel";

const WebResource = msRest.WebResource;

/** Class representing a Polymorphicrecursive. */
export class Polymorphicrecursive {
  private readonly client: AzureCompositeModel;
  /**
   * Create a Polymorphicrecursive.
   * @param {AzureCompositeModel} client Reference to the service client.
   */
  constructor(client: AzureCompositeModel) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic and have recursive references
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/polymorphicrecursive/valid';
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "GET", url: requestUrl });
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers.set("accept-language", this.client.acceptLanguage);
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let httpResponse: msRest.HttpResponse;
    httpResponse = await client.sendRequest(httpRequest);
    const statusCode: number = httpResponse.statusCode;
    let deserializedBody: { [key: string]: any } = await httpResponse.deserializedBody();
    if (statusCode !== 200) {
      let errorMessage: string = deserializedBody.error && deserializedBody.error.message || deserializedBody.message;
      try {
        if (deserializedBody != undefined) {
          const resultMapper = Mappers.ErrorModel;
          deserializedBody = client.serializer.deserialize(resultMapper, deserializedBody, 'deserializedBody');
        }
      } catch (deserializationError) {
        errorMessage = `Error "${deserializationError.message}" occurred in deserializing the responseBody - "${JSON.stringify(deserializedBody)}" for the default response.`;
      }
      throw new msRest.RestError(errorMessage, {
        code: deserializedBody.error && deserializedBody.error.code || deserializedBody.code,
        statusCode: httpResponse.statusCode,
        request: httpRequest,
        response: httpResponse,
        body: deserializedBody
      });
    }
    // Deserialize Response
    if (statusCode === 200) {
      try {
        if (deserializedBody != undefined) {
          const resultMapper = Mappers.Fish;
          deserializedBody = client.serializer.deserialize(resultMapper, deserializedBody, 'deserializedBody');
        }
      } catch (error) {
        const errorMessage = `Error ${error} occurred in deserializing the responseBody - ${JSON.stringify(deserializedBody)}`;
        throw new msRest.RestError(errorMessage, {
          request: httpRequest,
          response: httpResponse
        });
      }
    }
        httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);

    return httpResponse;
  }

  /**
   * Put complex types that are polymorphic and have recursive references
   *
   * @param {Fish} complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putValidWithHttpOperationResponse(complexBody: Models.Fish, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (complexBody === null || complexBody === undefined) {
        throw new Error('complexBody cannot be null or undefined.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/polymorphicrecursive/valid';
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "PUT", url: requestUrl });
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers.set("accept-language", this.client.acceptLanguage);
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
      if (complexBody !== null && complexBody !== undefined) {
        let requestModelMapper = Mappers.Fish;
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
    let httpResponse: msRest.HttpResponse;
    httpResponse = await client.sendRequest(httpRequest);
    const statusCode: number = httpResponse.statusCode;
    let deserializedBody: { [key: string]: any } = await httpResponse.deserializedBody();
    if (statusCode !== 200) {
      let errorMessage: string = deserializedBody.error && deserializedBody.error.message || deserializedBody.message;
      try {
        if (deserializedBody != undefined) {
          const resultMapper = Mappers.ErrorModel;
          deserializedBody = client.serializer.deserialize(resultMapper, deserializedBody, 'deserializedBody');
        }
      } catch (deserializationError) {
        errorMessage = `Error "${deserializationError.message}" occurred in deserializing the responseBody - "${JSON.stringify(deserializedBody)}" for the default response.`;
      }
      throw new msRest.RestError(errorMessage, {
        code: deserializedBody.error && deserializedBody.error.code || deserializedBody.code,
        statusCode: httpResponse.statusCode,
        request: httpRequest,
        response: httpResponse,
        body: deserializedBody
      });
    }
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);

    return httpResponse;
  }

  /**
   * Get complex types that are polymorphic and have recursive references
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Fish} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Fish} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.Fish>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.Fish>;
  getValid(callback: msRest.ServiceCallback<Models.Fish>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Fish>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Fish>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.Fish>;
    if (!callback) {
      return this.getValidWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
        if (err) {
          cb(err);
        } else {
          httpResponse.deserializedBody().then((httpResponseBody: any) => {
            cb(err, httpResponseBody, httpResponse.request, httpResponse);
          });
        }
      });
    }
  }

  /**
   * Put complex types that are polymorphic and have recursive references
   *
   * @param {Fish} complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
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
  putValid(complexBody: Models.Fish): Promise<void>;
  putValid(complexBody: Models.Fish, options: msRest.RequestOptionsBase): Promise<void>;
  putValid(complexBody: Models.Fish, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.Fish, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.Fish, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putValidWithHttpOperationResponse(complexBody, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putValidWithHttpOperationResponse(complexBody, options))((err: Error, httpResponse: msRest.HttpResponse) => {
        if (err) {
          cb(err);
        } else {
          httpResponse.deserializedBody().then((httpResponseBody: any) => {
            cb(err, httpResponseBody, httpResponse.request, httpResponse);
          });
        }
      });
    }
  }

}
