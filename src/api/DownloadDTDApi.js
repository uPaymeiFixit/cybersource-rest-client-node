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
    root.CyberSource.DownloadDTDApi = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * DownloadDTD service.
   * @module api/DownloadDTDApi
   * @version 0.0.1
   */

  /**
   * Constructs a new DownloadDTDApi. 
   * @alias module:api/DownloadDTDApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getDTDV2 operation.
     * @callback module:api/DownloadDTDApi~getDTDV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download DTD for Report
     * Used to download DTDs for reports on no-auth.
     * @param {String} reportDefinitionNameVersion Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1
     * @param {module:api/DownloadDTDApi~getDTDV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getDTDV2 = function(reportDefinitionNameVersion, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'reportDefinitionNameVersion' is set
      if (reportDefinitionNameVersion === undefined || reportDefinitionNameVersion === null) {
        throw new Error("Missing the required parameter 'reportDefinitionNameVersion' when calling getDTDV2");
      }


      var pathParams = {
        'reportDefinitionNameVersion': reportDefinitionNameVersion
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/xml-dtd'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reporting/v3/dtds/{reportDefinitionNameVersion}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
