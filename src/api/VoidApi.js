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
    define(['ApiClient', 'model/MitVoidRequest', 'model/PtsV2PaymentsPost502Response', 'model/PtsV2PaymentsVoidsPost201Response', 'model/PtsV2PaymentsVoidsPost400Response', 'model/VoidCaptureRequest', 'model/VoidCreditRequest', 'model/VoidPaymentRequest', 'model/VoidRefundRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MitVoidRequest'), require('../model/PtsV2PaymentsPost502Response'), require('../model/PtsV2PaymentsVoidsPost201Response'), require('../model/PtsV2PaymentsVoidsPost400Response'), require('../model/VoidCaptureRequest'), require('../model/VoidCreditRequest'), require('../model/VoidPaymentRequest'), require('../model/VoidRefundRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VoidApi = factory(root.CyberSource.ApiClient, root.CyberSource.MitVoidRequest, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.PtsV2PaymentsVoidsPost201Response, root.CyberSource.PtsV2PaymentsVoidsPost400Response, root.CyberSource.VoidCaptureRequest, root.CyberSource.VoidCreditRequest, root.CyberSource.VoidPaymentRequest, root.CyberSource.VoidRefundRequest);
  }
}(this, function(ApiClient, MitVoidRequest, PtsV2PaymentsPost502Response, PtsV2PaymentsVoidsPost201Response, PtsV2PaymentsVoidsPost400Response, VoidCaptureRequest, VoidCreditRequest, VoidPaymentRequest, VoidRefundRequest) {
  'use strict';

  /**
   * Void service.
   * @module api/VoidApi
   * @version 0.0.1
   */

  /**
   * Constructs a new VoidApi. 
   * @alias module:api/VoidApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the mitVoid operation.
     * @callback module:api/VoidApi~mitVoidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsVoidsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Timeout Void
     * This is to void a previous payment, capture, refund, or credit that merchant does not receive a reply(Mostly due to timeout). To use this feature/API, make sure to pass unique value to field - clientReferenceInformation -&gt; transactionId in your payment, capture, refund, or credit API call and use same transactionId in this API request payload to reverse the payment.
     * @param {module:model/MitVoidRequest} mitVoidRequest 
     * @param {module:api/VoidApi~mitVoidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsVoidsPost201Response}
     */
    this.mitVoid = function(mitVoidRequest, callback) {
      var postBody = mitVoidRequest;

      // verify the required parameter 'mitVoidRequest' is set
      if (mitVoidRequest === undefined || mitVoidRequest === null) {
        throw new Error("Missing the required parameter 'mitVoidRequest' when calling mitVoid");
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
      var returnType = PtsV2PaymentsVoidsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/voids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the voidCapture operation.
     * @callback module:api/VoidApi~voidCaptureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsVoidsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Void a Capture
     * Refund a capture API is only used, if you have requested Capture independenlty using [/pts/v2/payments/{id}/captures](https://developer.cybersource.com/api-reference-assets/index.html#payments_capture) API call. Include the capture ID in the POST request to cancel the capture. 
     * @param {module:model/VoidCaptureRequest} voidCaptureRequest 
     * @param {String} id The capture ID returned from a previous capture request.
     * @param {module:api/VoidApi~voidCaptureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsVoidsPost201Response}
     */
    this.voidCapture = function(voidCaptureRequest, id, callback) {
      var postBody = voidCaptureRequest;

      // verify the required parameter 'voidCaptureRequest' is set
      if (voidCaptureRequest === undefined || voidCaptureRequest === null) {
        throw new Error("Missing the required parameter 'voidCaptureRequest' when calling voidCapture");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling voidCapture");
      }


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
      var returnType = PtsV2PaymentsVoidsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/captures/{id}/voids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the voidCredit operation.
     * @callback module:api/VoidApi~voidCreditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsVoidsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Void a Credit
     * Include the credit ID in the POST request to cancel the credit.
     * @param {module:model/VoidCreditRequest} voidCreditRequest 
     * @param {String} id The credit ID returned from a previous credit request.
     * @param {module:api/VoidApi~voidCreditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsVoidsPost201Response}
     */
    this.voidCredit = function(voidCreditRequest, id, callback) {
      var postBody = voidCreditRequest;

      // verify the required parameter 'voidCreditRequest' is set
      if (voidCreditRequest === undefined || voidCreditRequest === null) {
        throw new Error("Missing the required parameter 'voidCreditRequest' when calling voidCredit");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling voidCredit");
      }


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
      var returnType = PtsV2PaymentsVoidsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/credits/{id}/voids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the voidPayment operation.
     * @callback module:api/VoidApi~voidPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsVoidsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Void a Payment
     * Void a Payment API is only used, if you have requested Authorization and Capture together in [/pts/v2/payments](https://developer.cybersource.com/api-reference-assets/index.html#payments_payments) API call. Include the payment ID in the POST request to cancel the payment. 
     * @param {module:model/VoidPaymentRequest} voidPaymentRequest 
     * @param {String} id The payment ID returned from a previous payment request.
     * @param {module:api/VoidApi~voidPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsVoidsPost201Response}
     */
    this.voidPayment = function(voidPaymentRequest, id, callback) {
      var postBody = voidPaymentRequest;

      // verify the required parameter 'voidPaymentRequest' is set
      if (voidPaymentRequest === undefined || voidPaymentRequest === null) {
        throw new Error("Missing the required parameter 'voidPaymentRequest' when calling voidPayment");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling voidPayment");
      }


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
      var returnType = PtsV2PaymentsVoidsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/payments/{id}/voids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the voidRefund operation.
     * @callback module:api/VoidApi~voidRefundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsVoidsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Void a Refund
     * Include the refund ID in the POST request to cancel the refund.
     * @param {module:model/VoidRefundRequest} voidRefundRequest 
     * @param {String} id The refund ID returned from a previous refund request.
     * @param {module:api/VoidApi~voidRefundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsVoidsPost201Response}
     */
    this.voidRefund = function(voidRefundRequest, id, callback) {
      var postBody = voidRefundRequest;

      // verify the required parameter 'voidRefundRequest' is set
      if (voidRefundRequest === undefined || voidRefundRequest === null) {
        throw new Error("Missing the required parameter 'voidRefundRequest' when calling voidRefund");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling voidRefund");
      }


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
      var returnType = PtsV2PaymentsVoidsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/refunds/{id}/voids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
