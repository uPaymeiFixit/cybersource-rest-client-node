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
    root.CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations model module.
   * @module model/ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations</code>.
   * Authorization Info Values
   * @alias module:model/ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations} obj Optional instance to populate.
   * @return {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations} The populated <code>ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('transactionReferenceNumber')) {
        obj['transactionReferenceNumber'] = ApiClient.convertToType(data['transactionReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('authorizationRequestId')) {
        obj['authorizationRequestId'] = ApiClient.convertToType(data['authorizationRequestId'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('rcode')) {
        obj['rcode'] = ApiClient.convertToType(data['rcode'], 'String');
      }
    }
    return obj;
  }

  /**
   * An unique identification number assigned by CyberSource to identify the submitted request.
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * Authorization Transaction Reference Number
   * @member {String} transactionReferenceNumber
   */
  exports.prototype['transactionReferenceNumber'] = undefined;
  /**
   * Authorization Date
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Authorization Request Id
   * @member {String} authorizationRequestId
   */
  exports.prototype['authorizationRequestId'] = undefined;
  /**
   * Authorization Amount
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Valid ISO 4217 ALPHA-3 currency code
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * Authorization Code
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Authorization RCode
   * @member {String} rcode
   */
  exports.prototype['rcode'] = undefined;



  return exports;
}));


