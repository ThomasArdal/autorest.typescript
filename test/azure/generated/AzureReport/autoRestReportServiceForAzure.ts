/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
const WebResource = msRest.WebResource;


class AutoRestReportServiceForAzure extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;
  baseUri: string;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestReportServiceForAzure class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: Models.AutoRestReportServiceForAzureOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, subscriptionId, {
      acceptLanguage: options.acceptLanguage,
      generateClientRequestId: options.generateClientRequestId,
      longRunningOperationRetryTimeoutInSeconds: options.longRunningOperationRetryTimeoutInSeconds,
      rpRegistrationRetryTimeoutInSeconds: options.rpRegistrationRetryTimeoutInSeconds,
      noRetryPolicy: options.noRetryPolicy,
      nodeJsUserAgentPackage: options.nodeJsUserAgentPackage || "/$"
    });

    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }
    this.credentials = credentials;

    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.serializer = new msRest.Serializer(Mappers);
  }
  // methods on the client.

  /**
   * Get test coverage report
   *
   * @param {AutoRestReportServiceForAzureGetReportOptionalParams} [options]
   * Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getReportWithHttpOperationResponse(options?: Models.AutoRestReportServiceForAzureGetReportOptionalParams): Promise<msRest.HttpResponse> {
    let client = this;
    let qualifier = (options && options.qualifier !== undefined) ? options.qualifier : undefined;
    // Validate
    try {
      if (qualifier !== null && qualifier !== undefined && typeof qualifier.valueOf() !== 'string') {
        throw new Error('qualifier must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'report/azure';
    let queryParamsArray: Array<any> = [];
    if (qualifier !== null && qualifier !== undefined) {
      queryParamsArray.push('qualifier=' + encodeURIComponent(qualifier));
    }
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "GET", url: requestUrl });
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
      httpRequest.headers.set("accept-language", this.acceptLanguage);
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
          const resultMapper = {
            required: false,
            serializedName: 'deserializedBody',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'numberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          };
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
   * Get test coverage report
   *
   * @param {AutoRestReportServiceForAzureGetReportOptionalParams} [options]
   * Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {{ [propertyName: string]: number }} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getReport(): Promise<{ [propertyName: string]: number }>;
  getReport(options: Models.AutoRestReportServiceForAzureGetReportOptionalParams): Promise<{ [propertyName: string]: number }>;
  getReport(callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options: Models.AutoRestReportServiceForAzureGetReportOptionalParams, callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options?: Models.AutoRestReportServiceForAzureGetReportOptionalParams, callback?: msRest.ServiceCallback<{ [propertyName: string]: number }>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<{ [propertyName: string]: number }>;
    if (!callback) {
      return this.getReportWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getReportWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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

export { AutoRestReportServiceForAzure, Models as AutoRestReportServiceForAzureModels, Mappers as AutoRestReportServiceForAzureMappers };
