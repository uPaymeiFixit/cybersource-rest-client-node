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
    root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection model module.
   * @module model/PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection} The populated <code>PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('eligibility')) {
        obj['eligibility'] = ApiClient.convertToType(data['eligibility'], 'String');
      }
      if (data.hasOwnProperty('eligibilityType')) {
        obj['eligibilityType'] = ApiClient.convertToType(data['eligibilityType'], 'String');
      }
    }
    return obj;
  }

  /**
   * The kind of seller protection in force for the transaction. This field is returned only when the protection eligibility value is set to ELIGIBLE or PARTIALLY_ELIGIBLE. Possible values - ITEM_NOT_RECEIVED_ELIGIBLE: Sellers are protected against claims for items not received. - UNAUTHORIZED_PAYMENT_ELIGIBLE: Sellers are protected against claims for unauthorized payments. One or both values can be returned. 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The level of seller protection in force for the transaction. Possible values: - `ELIGIBLE` - `PARTIALLY_ELIGIBLE` - `INELIGIBLE` 
   * @member {String} eligibility
   */
  exports.prototype['eligibility'] = undefined;
  /**
   * The kind of seller protection in force for the transaction. This field is returned only when the protection_eligibility property is set to ELIGIBLE or PARTIALLY_ELIGIBLE. Possible values: - `ITEM_NOT_RECEIVED_ELIGIBLE: Sellers are protected against claims for items not received.` - `UNAUTHORIZED_PAYMENT_ELIGIBLE: Sellers are protected against claims for unauthorized payments.` One or both values can be returned. 
   * @member {String} eligibilityType
   */
  exports.prototype['eligibilityType'] = undefined;



  return exports;
}));


