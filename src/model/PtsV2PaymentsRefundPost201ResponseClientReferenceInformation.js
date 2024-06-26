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
    root.CyberSource.PtsV2PaymentsRefundPost201ResponseClientReferenceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsRefundPost201ResponseClientReferenceInformation model module.
   * @module model/PtsV2PaymentsRefundPost201ResponseClientReferenceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsRefundPost201ResponseClientReferenceInformation</code>.
   * @alias module:model/PtsV2PaymentsRefundPost201ResponseClientReferenceInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PtsV2PaymentsRefundPost201ResponseClientReferenceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsRefundPost201ResponseClientReferenceInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsRefundPost201ResponseClientReferenceInformation} The populated <code>PtsV2PaymentsRefundPost201ResponseClientReferenceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('submitLocalDateTime')) {
        obj['submitLocalDateTime'] = ApiClient.convertToType(data['submitLocalDateTime'], 'String');
      }
      if (data.hasOwnProperty('ownerMerchantId')) {
        obj['ownerMerchantId'] = ApiClient.convertToType(data['ownerMerchantId'], 'String');
      }
      if (data.hasOwnProperty('returnReconciliationId')) {
        obj['returnReconciliationId'] = ApiClient.convertToType(data['returnReconciliationId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Merchant-generated order reference or tracking number. It is recommended that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  #### Used by **Authorization** Required field.  #### PIN Debit Requests for PIN debit reversals need to use the same merchant reference number that was used in the transaction that is being reversed.  Required field for all PIN Debit requests (purchase, credit, and reversal).  #### FDC Nashville Global Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Date and time at your physical location.  Format: `YYYYMMDDhhmmss`, where YYYY = year, MM = month, DD = day, hh = hour, mm = minutes ss = seconds  #### PIN Debit Optional field for PIN Debit purchase and credit requests. 
   * @member {String} submitLocalDateTime
   */
  exports.prototype['submitLocalDateTime'] = undefined;
  /**
   * Merchant ID that was used to create the subscription or customer profile for which the service was requested.  If your CyberSource account is enabled for Recurring Billing, this field is returned only if you are using subscription sharing and if your merchant ID is in the same merchant ID pool as the owner merchant ID.  If your CyberSource account is enabled for Payment Tokenization, this field is returned only if you are using profile sharing and if your merchant ID is in the same merchant ID pool as the owner merchant ID. 
   * @member {String} ownerMerchantId
   */
  exports.prototype['ownerMerchantId'] = undefined;
  /**
   * A new ID which is created for refund
   * @member {String} returnReconciliationId
   */
  exports.prototype['returnReconciliationId'] = undefined;



  return exports;
}));


