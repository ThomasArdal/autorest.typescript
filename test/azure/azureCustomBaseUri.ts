﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as assert from 'assert';
import * as msRest from 'ms-rest-js';
import * as msRestAzure from 'ms-rest-azure-js';

import { AutoRestParameterizedHostTestClient } from './generated/CustomBaseUri/autoRestParameterizedHostTestClient';
import { timeoutPromise } from '../util/util';
var dummySubscriptionId = '1234-5678-9012-3456';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: any = {};

describe('typescript', function () {
  describe('Custom BaseUri Client', function () {
    clientOptions.host = 'host:3000';
    var testClient = new AutoRestParameterizedHostTestClient(credentials, clientOptions);
    it('should return 200', function (done) {
      testClient.paths.getEmpty('local', function (error, result, request, response) {
        should.not.exist(error);
        response.status.should.equal(200);
        done();
      });
    });
    it('should throw due to bad "host", bad "account" and missing account', async function () {
      testClient.host = 'nonexistent';
      try {
        await Promise.race([testClient.paths.getEmpty('local'), timeoutPromise(1000)]);
        assert.fail('');
      } catch (error) {
        should(error).not.be.instanceof(assert.AssertionError);
      }
      testClient.host = 'host:3000';
      try {
        await Promise.race([testClient.paths.getEmpty('bad'), timeoutPromise(1000)]);
        assert.fail('');
      } catch (error) {
        should(error).not.be.instanceof(assert.AssertionError);
      }

      try {
        await Promise.race([testClient.paths.getEmpty(null), timeoutPromise(1000)]);
      } catch (error) {
        should(error).not.be.instanceof(assert.AssertionError);
      }
    });
  });
});