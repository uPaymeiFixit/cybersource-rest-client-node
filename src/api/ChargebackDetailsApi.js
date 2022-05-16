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
    define(['ApiClient', 'model/ReportingV3ChargebackDetailsGet200Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReportingV3ChargebackDetailsGet200Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ChargebackDetailsApi = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ChargebackDetailsGet200Response);
  }
}(this, function(ApiClient, ReportingV3ChargebackDetailsGet200Response) {
  'use strict';

  /**
   * ChargebackDetails service.
   * @module api/ChargebackDetailsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ChargebackDetailsApi. 
   * @alias module:api/ChargebackDetailsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getChargebackDetails operation.
     * @callback module:api/ChargebackDetailsApi~getChargebackDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportingV3ChargebackDetailsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Chargeback Details
     * Chargeback Detail Report Description
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ChargebackDetailsApi~getChargebackDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportingV3ChargebackDetailsGet200Response}
     */
    this.getChargebackDetails = function(startTime, endTime, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getChargebackDetails");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getChargebackDetails");
      }


      var pathParams = {
      };
      var queryParams = {
        'startTime': startTime,
        'endTime': endTime,
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json', 'application/xml'];
      var returnType = ReportingV3ChargebackDetailsGet200Response;

      return this.apiClient.callApi(
        '/reporting/v3/chargeback-details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
