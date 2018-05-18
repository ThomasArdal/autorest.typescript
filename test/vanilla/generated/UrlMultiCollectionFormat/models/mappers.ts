/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const ErrorModel = {
  required: false,
  serializedName: 'Error',
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      status: {
        required: false,
        serializedName: 'status',
        type: {
          name: 'Number'
        }
      },
      message: {
        required: false,
        serializedName: 'message',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const QueriesArrayStringMultiNullOptionalParams = {
  required: false,
  serializedName: 'ArrayStringMultiNullOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringMultiNullOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringMultiEmptyOptionalParams = {
  required: false,
  serializedName: 'ArrayStringMultiEmptyOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringMultiEmptyOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringMultiValidOptionalParams = {
  required: false,
  serializedName: 'ArrayStringMultiValidOptions',
  type: {
    name: 'Composite',
    className: 'QueriesArrayStringMultiValidOptionalParams',
    modelProperties: {
      arrayQuery: {
        required: false,
        serializedName: 'arrayQuery',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};
