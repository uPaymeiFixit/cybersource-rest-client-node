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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TransientTokenDataApi = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * TransientTokenData service.
   * @module api/TransientTokenDataApi
   * @version 0.0.1
   */

  /**
   * Constructs a new TransientTokenDataApi. 
   * @alias module:api/TransientTokenDataApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getPaymentCredentialsForTransientToken operation.
     * @callback module:api/TransientTokenDataApi~getPaymentCredentialsForTransientTokenCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment Credentials
     * Retrieve the Payment data captured by Unified Checkout. This API is used to retrieve the detailed data represented by the Transient Token. This API will return PCI payment data captured by the Unified Checkout platform.
     * @param {String} jti The jti field contained within the Transient token returned from a successful Unified Checkout transaction 
     * @param {module:api/TransientTokenDataApi~getPaymentCredentialsForTransientTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getPaymentCredentialsForTransientToken = function(jti, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'jti' is set
      if (jti === undefined || jti === null) {
        throw new Error("Missing the required parameter 'jti' when calling getPaymentCredentialsForTransientToken");
      }


      var pathParams = {
        'jti': jti
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/up/v1/payment-credentials/{jti}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionForTransientToken operation.
     * @callback module:api/TransientTokenDataApi~getTransactionForTransientTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Transient Token Data
     * Retrieve the data captured by Unified Checkout. This API is used to retrieve the detailed data represented by the Transient Token. This API will not return PCI payment data (PAN). Include the Request ID in the GET request to retrieve the transaction details.
     * @param {String} transientToken Transient Token returned by the Unified Checkout application. 
     * @param {module:api/TransientTokenDataApi~getTransactionForTransientTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTransactionForTransientToken = function(transientToken, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'transientToken' is set
      if (transientToken === undefined || transientToken === null) {
        throw new Error("Missing the required parameter 'transientToken' when calling getTransactionForTransientToken");
      }


      var pathParams = {
        'transientToken': transientToken
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/up/v1/payment-details/{transientToken}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
