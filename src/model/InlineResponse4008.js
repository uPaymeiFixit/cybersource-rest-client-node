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
    define(['ApiClient', 'model/InlineResponse4008Details'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse4008Details'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse4008 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse4008Details);
  }
}(this, function(ApiClient, InlineResponse4008Details) {
  'use strict';




  /**
   * The InlineResponse4008 model module.
   * @module model/InlineResponse4008
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse4008</code>.
   * @alias module:model/InlineResponse4008
   * @class
   * @param message {String} 
   * @param reason {module:model/InlineResponse4008.ReasonEnum} 
   */
  var exports = function(message, reason) {
    var _this = this;




    _this['message'] = message;
    _this['reason'] = reason;
  };

  /**
   * Constructs a <code>InlineResponse4008</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4008} obj Optional instance to populate.
   * @return {module:model/InlineResponse4008} The populated <code>InlineResponse4008</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('correlationId')) {
        obj['correlationId'] = ApiClient.convertToType(data['correlationId'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [InlineResponse4008Details]);
      }
      if (data.hasOwnProperty('informationLink')) {
        obj['informationLink'] = ApiClient.convertToType(data['informationLink'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} correlationId
   */
  exports.prototype['correlationId'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse4008Details>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {String} informationLink
   */
  exports.prototype['informationLink'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/InlineResponse4008.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;


  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "INVALID_APIKEY"
     * @const
     */
    "INVALID_APIKEY": "INVALID_APIKEY",
    /**
     * value: "INVALID_SHIPPING_INPUT_PARAMS"
     * @const
     */
    "INVALID_SHIPPING_INPUT_PARAMS": "INVALID_SHIPPING_INPUT_PARAMS",
    /**
     * value: "CAPTURE_CONTEXT_INVALID"
     * @const
     */
    "CAPTURE_CONTEXT_INVALID": "CAPTURE_CONTEXT_INVALID",
    /**
     * value: "CAPTURE_CONTEXT_EXPIRED"
     * @const
     */
    "CAPTURE_CONTEXT_EXPIRED": "CAPTURE_CONTEXT_EXPIRED",
    /**
     * value: "SDK_XHR_ERROR"
     * @const
     */
    "SDK_XHR_ERROR": "SDK_XHR_ERROR",
    /**
     * value: "UNIFIEDPAYMENTS_VALIDATION_PARAMS"
     * @const
     */
    "UNIFIEDPAYMENTS_VALIDATION_PARAMS": "UNIFIEDPAYMENTS_VALIDATION_PARAMS",
    /**
     * value: "UNIFIEDPAYMENTS_VALIDATION_FIELDS"
     * @const
     */
    "UNIFIEDPAYMENTS_VALIDATION_FIELDS": "UNIFIEDPAYMENTS_VALIDATION_FIELDS",
    /**
     * value: "UNIFIEDPAYMENT_PAYMENT_PARAMITERS"
     * @const
     */
    "UNIFIEDPAYMENT_PAYMENT_PARAMITERS": "UNIFIEDPAYMENT_PAYMENT_PARAMITERS",
    /**
     * value: "CREATE_TOKEN_TIMEOUT"
     * @const
     */
    "CREATE_TOKEN_TIMEOUT": "CREATE_TOKEN_TIMEOUT",
    /**
     * value: "CREATE_TOKEN_XHR_ERROR"
     * @const
     */
    "CREATE_TOKEN_XHR_ERROR": "CREATE_TOKEN_XHR_ERROR",
    /**
     * value: "SHOW_LOAD_CONTAINER_SELECTOR"
     * @const
     */
    "SHOW_LOAD_CONTAINER_SELECTOR": "SHOW_LOAD_CONTAINER_SELECTOR",
    /**
     * value: "SHOW_LOAD_INVALID_CONTAINER"
     * @const
     */
    "SHOW_LOAD_INVALID_CONTAINER": "SHOW_LOAD_INVALID_CONTAINER",
    /**
     * value: "SHOW_TOKEN_TIMEOUT"
     * @const
     */
    "SHOW_TOKEN_TIMEOUT": "SHOW_TOKEN_TIMEOUT",
    /**
     * value: "SHOW_TOKEN_XHR_ERROR"
     * @const
     */
    "SHOW_TOKEN_XHR_ERROR": "SHOW_TOKEN_XHR_ERROR",
    /**
     * value: "SHOW_PAYMENT_TIMEOUT"
     * @const
     */
    "SHOW_PAYMENT_TIMEOUT": "SHOW_PAYMENT_TIMEOUT"  };

  return exports;
}));


