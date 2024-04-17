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
    define(['ApiClient', 'model/CreateSearchRequest', 'model/PtsV2PaymentsPost502Response', 'model/TssV2TransactionsPost201Response', 'model/TssV2TransactionsPost400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateSearchRequest'), require('../model/PtsV2PaymentsPost502Response'), require('../model/TssV2TransactionsPost201Response'), require('../model/TssV2TransactionsPost400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.SearchTransactionsApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateSearchRequest, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.TssV2TransactionsPost201Response, root.CyberSource.TssV2TransactionsPost400Response);
  }
}(this, function(ApiClient, CreateSearchRequest, PtsV2PaymentsPost502Response, TssV2TransactionsPost201Response, TssV2TransactionsPost400Response) {
  'use strict';

  /**
   * SearchTransactions service.
   * @module api/SearchTransactionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SearchTransactionsApi. 
   * @alias module:api/SearchTransactionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createSearch operation.
     * @callback module:api/SearchTransactionsApi~createSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TssV2TransactionsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Search Request
     * Create a search request. 
     * @param {module:model/CreateSearchRequest} createSearchRequest 
     * @param {module:api/SearchTransactionsApi~createSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TssV2TransactionsPost201Response}
     */
    this.createSearch = function(createSearchRequest, callback) {
      var postBody = createSearchRequest;

      // verify the required parameter 'createSearchRequest' is set
      if (createSearchRequest === undefined || createSearchRequest === null) {
        throw new Error("Missing the required parameter 'createSearchRequest' when calling createSearch");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateSearchRequest', this.apiClient.merchantConfig.runEnvironment);

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
      var accepts = ['application/json;charset=utf-8'];
      var returnType = TssV2TransactionsPost201Response;

      return this.apiClient.callApi(
        '/tss/v2/searches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSearch operation.
     * @callback module:api/SearchTransactionsApi~getSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TssV2TransactionsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Search Results
     * Include the Search ID in the GET request to retrieve the search results.
     * @param {String} searchId Search ID.
     * @param {module:api/SearchTransactionsApi~getSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TssV2TransactionsPost201Response}
     */
    this.getSearch = function(searchId, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'searchId' is set
      if (searchId === undefined || searchId === null) {
        throw new Error("Missing the required parameter 'searchId' when calling getSearch");
      }


      var pathParams = {
        'searchId': searchId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['*/*'];
      var returnType = TssV2TransactionsPost201Response;

      return this.apiClient.callApi(
        '/tss/v2/searches/{searchId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
