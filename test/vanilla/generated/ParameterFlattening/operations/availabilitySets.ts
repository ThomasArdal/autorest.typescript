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
import * as Mappers from "../models/mappers";
import { AutoRestParameterFlatteningContext } from "../autoRestParameterFlatteningContext";

const WebResource = msRest.WebResource;

/** Class representing a AvailabilitySets. */
export class AvailabilitySets {
  private readonly client: AutoRestParameterFlatteningContext;
  /**
   * Create a AvailabilitySets.
   * @param {AutoRestParameterFlatteningContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterFlatteningContext) {
    this.client = client;
  }

  /**
   * Updates the tags for an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} avset The name of the storage availability set.
   *
   * @param {{ [propertyName: string]: string }} tags A set of tags. A
   * description about the set of tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async updateWithHttpOperationResponse(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (avset === null || avset === undefined || typeof avset.valueOf() !== 'string') {
        throw new Error('avset cannot be null or undefined and it must be of type string.');
      }
      if (avset !== null && avset !== undefined) {
        if (avset.length > 80)
        {
          throw new Error('"avset" should satisfy the constraint - "MaxLength": 80');
        }
      }
      if (tags === null || tags === undefined || typeof tags !== 'object') {
        throw new Error('tags cannot be null or undefined and it must be of type object.');
      }
      for(let valueElement in tags) {
        if (tags[valueElement] !== null && tags[valueElement] !== undefined && typeof tags[valueElement].valueOf() !== 'string') {
          throw new Error('tags[valueElement] must be of type string.');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let tags1: any
    if (tags !== null && tags !== undefined) {
      tags1 = {};
      tags1.tags = tags;
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          avset,
          tags1
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "PATCH",
          baseUrl: this.client.baseUri,
          path: "parameterFlattening/{resourceGroupName}/{availabilitySetName}",
          urlParameters: [
            {
              parameterName: "resourceGroupName",
              mapper: {
                required: true,
                serializedName: "resourceGroupName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterName: "avset",
              mapper: {
                required: true,
                serializedName: "availabilitySetName",
                constraints: {
                  MaxLength: 80
                },
                type: {
                  name: "String"
                }
              }
            }
          ],
          requestBodyMapper: Mappers.AvailabilitySetUpdateParameters,
          requestBodyName: "tags1",
          contentType: "application/json; charset=utf-8"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
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
   * Updates the tags for an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} avset The name of the storage availability set.
   *
   * @param {{ [propertyName: string]: string }} tags A set of tags. A
   * description about the set of tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }): Promise<void>;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: msRest.RequestOptionsBase): Promise<void>;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.updateWithHttpOperationResponse(resourceGroupName, avset, tags, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.updateWithHttpOperationResponse(resourceGroupName, avset, tags, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
