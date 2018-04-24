/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { compositeSpec, CompositeTypeSpec, numberSpec, stringSpec } from "ms-rest-js";

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
export const AutoRestReportServiceGetReportOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "AutoRestReportServiceGetReportOptionalParams",
  propertySpecs: {
    /**
     * If specified, qualifies the generated report further (e.g. '2.7' vs '3.5' in for Python).
     * The only effect is, that generators that run all tests several times, can distinguish the
     * generated reports.
     */
    qualifier: {
      valueSpec: stringSpec
    }
  }
});
