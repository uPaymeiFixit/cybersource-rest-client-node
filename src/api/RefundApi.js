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
    define(['ApiClient', 'model/PtsV2PaymentsPost502Response', 'model/PtsV2PaymentsRefundPost201Response', 'model/PtsV2PaymentsRefundPost400Response', 'model/RefundCaptureRequest', 'model/RefundPaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PtsV2PaymentsPost502Response'), require('../model/PtsV2PaymentsRefundPost201Response'), require('../model/PtsV2PaymentsRefundPost400Response'), require('../model/RefundCaptureRequest'), require('../model/RefundPaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RefundApi = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.PtsV2PaymentsRefundPost201Response, root.CyberSource.PtsV2PaymentsRefundPost400Response, root.CyberSource.RefundCaptureRequest, root.CyberSource.RefundPaymentRequest);
  }
}(this, function(ApiClient, PtsV2PaymentsPost502Response, PtsV2PaymentsRefundPost201Response, PtsV2PaymentsRefundPost400Response, RefundCaptureRequest, RefundPaymentRequest) {
  'use strict';

  /**
   * Refund service.
   * @module api/RefundApi
   * @version 0.0.1
   */

  /**
   * Constructs a new RefundApi. 
   * @alias module:api/RefundApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the refundCapture operation.
     * @callback module:api/RefundApi~refundCaptureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsRefundPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund a Capture
     * Refund a capture API is only used, if you have requested Capture independenlty using [/pts/v2/payments/{id}/captures](https://developer.cybersource.com/api-reference-assets/index.html#payments_capture) API call Include the capture ID in the POST request to refund the captured amount. 
     * @param {module:model/RefundCaptureRequest} refundCaptureRequest 
     * @param {String} id The capture ID. This ID is returned from a previous capture request.
     * @param {module:api/RefundApi~refundCaptureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsRefundPost201Response}
     */
    this.refundCapture = function(refundCaptureRequest, id, callback) {
      var postBody = refundCaptureRequest;

      // verify the required parameter 'refundCaptureRequest' is set
      if (refundCaptureRequest === undefined || refundCaptureRequest === null) {
        throw new Error("Missing the required parameter 'refundCaptureRequest' when calling refundCapture");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling refundCapture");
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
      var returnType = PtsV2PaymentsRefundPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/captures/{id}/refunds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the refundPayment operation.
     * @callback module:api/RefundApi~refundPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsRefundPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund a Payment
     * Refund a Payment API is only used, if you have requested Authorization and Capture together in [/pts/v2/payments](https://developer.cybersource.com/api-reference-assets/index.html#payments_payments) API call.  Include the payment ID in the POST request to refund the payment amount. 
     * @param {module:model/RefundPaymentRequest} refundPaymentRequest 
     * @param {String} id The payment ID. This ID is returned from a previous payment request.
     * @param {module:api/RefundApi~refundPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsRefundPost201Response}
     */
    this.refundPayment = function(refundPaymentRequest, id, callback) {
      var postBody = refundPaymentRequest;

      // verify the required parameter 'refundPaymentRequest' is set
      if (refundPaymentRequest === undefined || refundPaymentRequest === null) {
        throw new Error("Missing the required parameter 'refundPaymentRequest' when calling refundPayment");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling refundPayment");
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
      var returnType = PtsV2PaymentsRefundPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/payments/{id}/refunds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
