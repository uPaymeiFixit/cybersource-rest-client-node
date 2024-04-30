/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.38
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PushFunds201Response', 'model/PushFunds400Response', 'model/PushFunds401Response', 'model/PushFunds404Response', 'model/PushFunds502Response', 'model/PushFundsRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PushFunds201Response'), require('../model/PushFunds400Response'), require('../model/PushFunds401Response'), require('../model/PushFunds404Response'), require('../model/PushFunds502Response'), require('../model/PushFundsRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PushFundsApi = factory(root.CyberSource.ApiClient, root.CyberSource.PushFunds201Response, root.CyberSource.PushFunds400Response, root.CyberSource.PushFunds401Response, root.CyberSource.PushFunds404Response, root.CyberSource.PushFunds502Response, root.CyberSource.PushFundsRequest);
  }
}(this, function(ApiClient, PushFunds201Response, PushFunds400Response, PushFunds401Response, PushFunds404Response, PushFunds502Response, PushFundsRequest) {
  'use strict';

  /**
   * PushFunds service.
   * @module api/PushFundsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PushFundsApi. 
   * @alias module:api/PushFundsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createPushFundsTransfer operation.
     * @callback module:api/PushFundsApi~createPushFundsTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PushFunds201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process a Push Funds Transfer
     * Receive funds using an Original Credit Transaction (OCT). 
     * @param {module:model/PushFundsRequest} pushFundsRequest 
     * @param {String} contentType 
     * @param {String} xRequestid 
     * @param {String} vCMerchantId 
     * @param {String} vCPermissions 
     * @param {String} vCCorrelationId 
     * @param {String} vCOrganizationId 
     * @param {module:api/PushFundsApi~createPushFundsTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PushFunds201Response}
     */
    this.createPushFundsTransfer = function(pushFundsRequest, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, callback) {
      var postBody = pushFundsRequest;

      // verify the required parameter 'pushFundsRequest' is set
      if (pushFundsRequest === undefined || pushFundsRequest === null) {
        throw new Error("Missing the required parameter 'pushFundsRequest' when calling createPushFundsTransfer");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling createPushFundsTransfer");
      }

      // verify the required parameter 'xRequestid' is set
      if (xRequestid === undefined || xRequestid === null) {
        throw new Error("Missing the required parameter 'xRequestid' when calling createPushFundsTransfer");
      }

      // verify the required parameter 'vCMerchantId' is set
      if (vCMerchantId === undefined || vCMerchantId === null) {
        throw new Error("Missing the required parameter 'vCMerchantId' when calling createPushFundsTransfer");
      }

      // verify the required parameter 'vCPermissions' is set
      if (vCPermissions === undefined || vCPermissions === null) {
        throw new Error("Missing the required parameter 'vCPermissions' when calling createPushFundsTransfer");
      }

      // verify the required parameter 'vCCorrelationId' is set
      if (vCCorrelationId === undefined || vCCorrelationId === null) {
        throw new Error("Missing the required parameter 'vCCorrelationId' when calling createPushFundsTransfer");
      }

      // verify the required parameter 'vCOrganizationId' is set
      if (vCOrganizationId === undefined || vCOrganizationId === null) {
        throw new Error("Missing the required parameter 'vCOrganizationId' when calling createPushFundsTransfer");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PushFundsRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Type': contentType,
        'x-requestid': xRequestid,
        'v-c-merchant-id': vCMerchantId,
        'v-c-permissions': vCPermissions,
        'v-c-correlation-id': vCCorrelationId,
        'v-c-organization-id': vCOrganizationId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PushFunds201Response;

      return this.apiClient.callApi(
        '/pts/v1/push-funds-transfer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
