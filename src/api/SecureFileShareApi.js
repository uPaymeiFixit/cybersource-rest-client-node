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
    define(['ApiClient', 'model/InlineResponse4004', 'model/V1FileDetailsGet200Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse4004'), require('../model/V1FileDetailsGet200Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.SecureFileShareApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse4004, root.CyberSource.V1FileDetailsGet200Response);
  }
}(this, function(ApiClient, InlineResponse4004, V1FileDetailsGet200Response) {
  'use strict';

  /**
   * SecureFileShare service.
   * @module api/SecureFileShareApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SecureFileShareApi. 
   * @alias module:api/SecureFileShareApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getFile operation.
     * @callback module:api/SecureFileShareApi~getFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a File with File Identifier
     * Download a file for the given file identifier
     * @param {String} fileId Unique identifier for each file
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Cybersource Organization Id
     * @param {module:api/SecureFileShareApi~getFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFile = function(fileId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFile");
      }


      var pathParams = {
        'fileId': fileId
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['*/*;charset=utf-8'];
      var accepts = ['application/xml', 'text/csv', 'application/pdf'];
      var returnType = null;

      return this.apiClient.callApi(
        '/sfs/v1/files/{fileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileDetail operation.
     * @callback module:api/SecureFileShareApi~getFileDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1FileDetailsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List of Files
     * Get list of files and it's information of them available inside the report directory
     * @param {Date} startDate Valid start date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd 
     * @param {Date} endDate Valid end date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd 
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Cybersource Organization Id
     * @param {String} opts.name **Tailored to searches for specific files with in given Date range** example : MyTransactionDetailreport.xml 
     * @param {module:api/SecureFileShareApi~getFileDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1FileDetailsGet200Response}
     */
    this.getFileDetail = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getFileDetail");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getFileDetail");
      }


      var pathParams = {
      };
      var queryParams = {
        'startDate': startDate,
        'endDate': endDate,
        'organizationId': opts['organizationId'],
        'name': opts['name']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['*/*;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = V1FileDetailsGet200Response;

      return this.apiClient.callApi(
        '/sfs/v1/file-details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
