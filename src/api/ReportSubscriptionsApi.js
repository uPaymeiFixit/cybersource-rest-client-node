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
    define(['ApiClient', 'model/CreateReportSubscriptionRequest', 'model/InlineResponse4004', 'model/PredefinedSubscriptionRequestBean', 'model/ReportingV3ReportSubscriptionsGet200Response', 'model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions', 'model/Reportingv3ReportDownloadsGet400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateReportSubscriptionRequest'), require('../model/InlineResponse4004'), require('../model/PredefinedSubscriptionRequestBean'), require('../model/ReportingV3ReportSubscriptionsGet200Response'), require('../model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions'), require('../model/Reportingv3ReportDownloadsGet400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportSubscriptionsApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateReportSubscriptionRequest, root.CyberSource.InlineResponse4004, root.CyberSource.PredefinedSubscriptionRequestBean, root.CyberSource.ReportingV3ReportSubscriptionsGet200Response, root.CyberSource.ReportingV3ReportSubscriptionsGet200ResponseSubscriptions, root.CyberSource.Reportingv3ReportDownloadsGet400Response);
  }
}(this, function(ApiClient, CreateReportSubscriptionRequest, InlineResponse4004, PredefinedSubscriptionRequestBean, ReportingV3ReportSubscriptionsGet200Response, ReportingV3ReportSubscriptionsGet200ResponseSubscriptions, Reportingv3ReportDownloadsGet400Response) {
  'use strict';

  /**
   * ReportSubscriptions service.
   * @module api/ReportSubscriptionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ReportSubscriptionsApi. 
   * @alias module:api/ReportSubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createStandardOrClassicSubscription operation.
     * @callback module:api/ReportSubscriptionsApi~createStandardOrClassicSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Standard or Classic Subscription
     * Create or update an already existing classic or standard subscription. 
     * @param {module:model/PredefinedSubscriptionRequestBean} predefinedSubscriptionRequestBean Report subscription request payload
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ReportSubscriptionsApi~createStandardOrClassicSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createStandardOrClassicSubscription = function(predefinedSubscriptionRequestBean, opts, callback) {
      opts = opts || {};
      var postBody = predefinedSubscriptionRequestBean;

      // verify the required parameter 'predefinedSubscriptionRequestBean' is set
      if (predefinedSubscriptionRequestBean === undefined || predefinedSubscriptionRequestBean === null) {
        throw new Error("Missing the required parameter 'predefinedSubscriptionRequestBean' when calling createStandardOrClassicSubscription");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PredefinedSubscriptionRequestBean', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reporting/v3/predefined-report-subscriptions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback module:api/ReportSubscriptionsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Report Subscription for a Report Name by Organization
     * Create a report subscription for your organization. The report name must be unique. 
     * @param {module:model/CreateReportSubscriptionRequest} createReportSubscriptionRequest Report subscription request payload
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ReportSubscriptionsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createSubscription = function(createReportSubscriptionRequest, opts, callback) {
      opts = opts || {};
      var postBody = createReportSubscriptionRequest;

      // verify the required parameter 'createReportSubscriptionRequest' is set
      if (createReportSubscriptionRequest === undefined || createReportSubscriptionRequest === null) {
        throw new Error("Missing the required parameter 'createReportSubscriptionRequest' when calling createSubscription");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateReportSubscriptionRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reporting/v3/report-subscriptions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubscription operation.
     * @callback module:api/ReportSubscriptionsApi~deleteSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Subscription of a Report Name by Organization
     * Delete a report subscription for your organization. You must know the unique name of the report you want to delete. 
     * @param {String} reportName Name of the Report to Delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ReportSubscriptionsApi~deleteSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubscription = function(reportName, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('DELETE' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'reportName' is set
      if (reportName === undefined || reportName === null) {
        throw new Error("Missing the required parameter 'reportName' when calling deleteSubscription");
      }


      var pathParams = {
        'reportName': reportName
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reporting/v3/report-subscriptions/{reportName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllSubscriptions operation.
     * @callback module:api/ReportSubscriptionsApi~getAllSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportingV3ReportSubscriptionsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Subscriptions
     * View a summary of all report subscriptions. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ReportSubscriptionsApi~getAllSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportingV3ReportSubscriptionsGet200Response}
     */
    this.getAllSubscriptions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }


      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = ReportingV3ReportSubscriptionsGet200Response;

      return this.apiClient.callApi(
        '/reporting/v3/report-subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscription operation.
     * @callback module:api/ReportSubscriptionsApi~getSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Subscription for Report Name
     * View the details of a report subscription, such as the report format or report frequency, using the report's unique name. 
     * @param {String} reportName Name of the Report to Retrieve
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ReportSubscriptionsApi~getSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions}
     */
    this.getSubscription = function(reportName, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'reportName' is set
      if (reportName === undefined || reportName === null) {
        throw new Error("Missing the required parameter 'reportName' when calling getSubscription");
      }


      var pathParams = {
        'reportName': reportName
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = ReportingV3ReportSubscriptionsGet200ResponseSubscriptions;

      return this.apiClient.callApi(
        '/reporting/v3/report-subscriptions/{reportName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
