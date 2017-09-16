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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";

const packageName = 'foo';
const packageVersion = '3.0.0-preview';

class AutoRestSwaggerBATService extends msRest.ServiceClient {
  baseUri: string;

  // Operation groups
  string: operations.String;
  enumModel: operations.EnumModel;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestSwaggerBATService class.
   * @constructor
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
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {

    if (!options) options = {};

    super(undefined, options);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost';
    }

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    this.string = new operations.String(this);
    this.enumModel = new operations.EnumModel(this);
    this.serializer = new msRest.Serializer(Mappers);
  }
}

export { AutoRestSwaggerBATService, Models as AutoRestSwaggerBATServiceModels, Mappers as AutoRestSwaggerBATServiceMappers };