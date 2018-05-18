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

const packageName = "";
const packageVersion = "";

class AutoRestBoolTestService extends msRest.ServiceClient {
  baseUri: string;

  // Operation groups
  bool: operations.Bool;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestBoolTestService class.
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
    const serviceClientOptions: msRest.ServiceClientOptions = !options ? {} : { ...options };
    if (!serviceClientOptions.serializer) serviceClientOptions.serializer = new msRest.Serializer(Mappers, false);

    super(undefined, serviceClientOptions);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    this.bool = new operations.Bool(this);
    this.serializer = serviceClientOptions.serializer;
  }
}

export { AutoRestBoolTestService, Models as AutoRestBoolTestServiceModels, Mappers as AutoRestBoolTestServiceMappers };
