/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { compositeSpec, CompositeTypeSpec, numberSpec, sequenceSpec, stringSpec } from "ms-rest-js";

export const ErrorModel: CompositeTypeSpec = compositeSpec({
  typeName: "ErrorModel",
  propertySpecs: {
    status: {
      valueSpec: numberSpec
    },
    message: {
      valueSpec: stringSpec
    }
  }
});

/**
 * Optional Parameters.
 */
export const QueriesArrayStringMultiNullOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "QueriesArrayStringMultiNullOptionalParams",
  propertySpecs: {
    /**
     * a null array of string using the multi-array format
     */
    arrayQuery: {
      valueSpec: sequenceSpec(stringSpec)
    }
  }
});

/**
 * Optional Parameters.
 */
export const QueriesArrayStringMultiEmptyOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "QueriesArrayStringMultiEmptyOptionalParams",
  propertySpecs: {
    /**
     * an empty array [] of string using the multi-array format
     */
    arrayQuery: {
      valueSpec: sequenceSpec(stringSpec)
    }
  }
});

/**
 * Optional Parameters.
 */
export const QueriesArrayStringMultiValidOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "QueriesArrayStringMultiValidOptionalParams",
  propertySpecs: {
    /**
     * an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
     * mult-array format
     */
    arrayQuery: {
      valueSpec: sequenceSpec(stringSpec)
    }
  }
});