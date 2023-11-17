/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthReversalRequest', 'model/MitReversalRequest', 'model/PtsV2PaymentsPost502Response', 'model/PtsV2PaymentsReversalsPost201Response', 'model/PtsV2PaymentsReversalsPost400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthReversalRequest'), require('../model/MitReversalRequest'), require('../model/PtsV2PaymentsPost502Response'), require('../model/PtsV2PaymentsReversalsPost201Response'), require('../model/PtsV2PaymentsReversalsPost400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReversalApi = factory(root.CyberSource.ApiClient, root.CyberSource.AuthReversalRequest, root.CyberSource.MitReversalRequest, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.PtsV2PaymentsReversalsPost201Response, root.CyberSource.PtsV2PaymentsReversalsPost400Response);
  }
}(this, function(ApiClient, AuthReversalRequest, MitReversalRequest, PtsV2PaymentsPost502Response, PtsV2PaymentsReversalsPost201Response, PtsV2PaymentsReversalsPost400Response) {
  'use strict';

  /**
   * Reversal service.
   * @module api/ReversalApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ReversalApi. 
   * @alias module:api/ReversalApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the authReversal operation.
     * @callback module:api/ReversalApi~authReversalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsReversalsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process an Authorization Reversal
     * Include the payment ID in the POST request to reverse the payment amount.
     * @param {String} id The payment ID returned from a previous payment request.
     * @param {module:model/AuthReversalRequest} authReversalRequest 
     * @param {module:api/ReversalApi~authReversalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsReversalsPost201Response}
     */
    this.authReversal = function(id, authReversalRequest, callback) {
      var postBody = authReversalRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling authReversal");
      }

      // verify the required parameter 'authReversalRequest' is set
      if (authReversalRequest === undefined || authReversalRequest === null) {
        throw new Error("Missing the required parameter 'authReversalRequest' when calling authReversal");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/AuthReversalRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2PaymentsReversalsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/payments/{id}/reversals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mitReversal operation.
     * @callback module:api/ReversalApi~mitReversalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsReversalsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Timeout Reversal
     * This is to reverse a previous payment that merchant does not receive a reply(Mostly due to Timeout). To use this feature/API, make sure to pass unique value to field - clientReferenceInformation -&gt; transactionId in [/pts/v2/payments](https://developer.cybersource.com/api-reference-assets/index.html#payments_payments) API call and use same transactionId in this API request payload to reverse the payment.
     * @param {module:model/MitReversalRequest} mitReversalRequest 
     * @param {module:api/ReversalApi~mitReversalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsReversalsPost201Response}
     */
    this.mitReversal = function(mitReversalRequest, callback) {
      var postBody = mitReversalRequest;

      // verify the required parameter 'mitReversalRequest' is set
      if (mitReversalRequest === undefined || mitReversalRequest === null) {
        throw new Error("Missing the required parameter 'mitReversalRequest' when calling mitReversal");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/MitReversalRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2PaymentsReversalsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/reversals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
