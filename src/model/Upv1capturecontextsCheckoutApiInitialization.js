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
    root.CyberSource.Upv1capturecontextsCheckoutApiInitialization = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Upv1capturecontextsCheckoutApiInitialization model module.
   * @module model/Upv1capturecontextsCheckoutApiInitialization
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Upv1capturecontextsCheckoutApiInitialization</code>.
   * @alias module:model/Upv1capturecontextsCheckoutApiInitialization
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Upv1capturecontextsCheckoutApiInitialization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Upv1capturecontextsCheckoutApiInitialization} obj Optional instance to populate.
   * @return {module:model/Upv1capturecontextsCheckoutApiInitialization} The populated <code>Upv1capturecontextsCheckoutApiInitialization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profile_id')) {
        obj['profile_id'] = ApiClient.convertToType(data['profile_id'], 'String');
      }
      if (data.hasOwnProperty('access_key')) {
        obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
      }
      if (data.hasOwnProperty('reference_number')) {
        obj['reference_number'] = ApiClient.convertToType(data['reference_number'], 'String');
      }
      if (data.hasOwnProperty('transaction_uuid')) {
        obj['transaction_uuid'] = ApiClient.convertToType(data['transaction_uuid'], 'String');
      }
      if (data.hasOwnProperty('transaction_type')) {
        obj['transaction_type'] = ApiClient.convertToType(data['transaction_type'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('override_custom_receipt_page')) {
        obj['override_custom_receipt_page'] = ApiClient.convertToType(data['override_custom_receipt_page'], 'String');
      }
      if (data.hasOwnProperty('unsigned_field_names')) {
        obj['unsigned_field_names'] = ApiClient.convertToType(data['unsigned_field_names'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} profile_id
   */
  exports.prototype['profile_id'] = undefined;
  /**
   * @member {String} access_key
   */
  exports.prototype['access_key'] = undefined;
  /**
   * @member {String} reference_number
   */
  exports.prototype['reference_number'] = undefined;
  /**
   * @member {String} transaction_uuid
   */
  exports.prototype['transaction_uuid'] = undefined;
  /**
   * @member {String} transaction_type
   */
  exports.prototype['transaction_type'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * @member {String} override_custom_receipt_page
   */
  exports.prototype['override_custom_receipt_page'] = undefined;
  /**
   * @member {String} unsigned_field_names
   */
  exports.prototype['unsigned_field_names'] = undefined;



  return exports;
}));


