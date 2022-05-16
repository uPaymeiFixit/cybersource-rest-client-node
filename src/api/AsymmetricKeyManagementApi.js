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
    define(['ApiClient', 'model/CreateP12KeysRequest', 'model/DeleteBulkP12KeysRequest', 'model/InlineResponse4002', 'model/KmsV2KeysAsymDeletesPost200Response', 'model/KmsV2KeysAsymGet200Response', 'model/KmsV2KeysAsymPost201Response', 'model/PtsV2PaymentsPost502Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateP12KeysRequest'), require('../model/DeleteBulkP12KeysRequest'), require('../model/InlineResponse4002'), require('../model/KmsV2KeysAsymDeletesPost200Response'), require('../model/KmsV2KeysAsymGet200Response'), require('../model/KmsV2KeysAsymPost201Response'), require('../model/PtsV2PaymentsPost502Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.AsymmetricKeyManagementApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateP12KeysRequest, root.CyberSource.DeleteBulkP12KeysRequest, root.CyberSource.InlineResponse4002, root.CyberSource.KmsV2KeysAsymDeletesPost200Response, root.CyberSource.KmsV2KeysAsymGet200Response, root.CyberSource.KmsV2KeysAsymPost201Response, root.CyberSource.PtsV2PaymentsPost502Response);
  }
}(this, function(ApiClient, CreateP12KeysRequest, DeleteBulkP12KeysRequest, InlineResponse4002, KmsV2KeysAsymDeletesPost200Response, KmsV2KeysAsymGet200Response, KmsV2KeysAsymPost201Response, PtsV2PaymentsPost502Response) {
  'use strict';

  /**
   * AsymmetricKeyManagement service.
   * @module api/AsymmetricKeyManagementApi
   * @version 0.0.1
   */

  /**
   * Constructs a new AsymmetricKeyManagementApi. 
   * @alias module:api/AsymmetricKeyManagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createP12Keys operation.
     * @callback module:api/AsymmetricKeyManagementApi~createP12KeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KmsV2KeysAsymPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create one or more PKCS#12 keys
     * &#39;Create one or more PKCS#12 keys&#39; 
     * @param {module:model/CreateP12KeysRequest} createP12KeysRequest 
     * @param {module:api/AsymmetricKeyManagementApi~createP12KeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KmsV2KeysAsymPost201Response}
     */
    this.createP12Keys = function(createP12KeysRequest, callback) {
      var postBody = createP12KeysRequest;

      // verify the required parameter 'createP12KeysRequest' is set
      if (createP12KeysRequest === undefined || createP12KeysRequest === null) {
        throw new Error("Missing the required parameter 'createP12KeysRequest' when calling createP12Keys");
      }


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
      var returnType = KmsV2KeysAsymPost201Response;

      return this.apiClient.callApi(
        '/kms/v2/keys-asym', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBulkP12Keys operation.
     * @callback module:api/AsymmetricKeyManagementApi~deleteBulkP12KeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KmsV2KeysAsymDeletesPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete one or more PKCS#12 keys
     * &#39;Delete one or more PKCS#12 keys&#39; 
     * @param {module:model/DeleteBulkP12KeysRequest} deleteBulkP12KeysRequest 
     * @param {module:api/AsymmetricKeyManagementApi~deleteBulkP12KeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KmsV2KeysAsymDeletesPost200Response}
     */
    this.deleteBulkP12Keys = function(deleteBulkP12KeysRequest, callback) {
      var postBody = deleteBulkP12KeysRequest;

      // verify the required parameter 'deleteBulkP12KeysRequest' is set
      if (deleteBulkP12KeysRequest === undefined || deleteBulkP12KeysRequest === null) {
        throw new Error("Missing the required parameter 'deleteBulkP12KeysRequest' when calling deleteBulkP12Keys");
      }


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
      var returnType = KmsV2KeysAsymDeletesPost200Response;

      return this.apiClient.callApi(
        '/kms/v2/keys-asym/deletes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getP12KeyDetails operation.
     * @callback module:api/AsymmetricKeyManagementApi~getP12KeyDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KmsV2KeysAsymGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves PKCS#12 key details
     * Retrieves keys details by providing the key id.
     * @param {String} keyId Key ID. 
     * @param {module:api/AsymmetricKeyManagementApi~getP12KeyDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KmsV2KeysAsymGet200Response}
     */
    this.getP12KeyDetails = function(keyId, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling getP12KeyDetails");
      }


      var pathParams = {
        'keyId': keyId
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
      var returnType = KmsV2KeysAsymGet200Response;

      return this.apiClient.callApi(
        '/kms/v2/keys-asym/{keyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
