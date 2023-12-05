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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1liststypeentriesPaymentInformationBank = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1liststypeentriesPaymentInformationBank model module.
   * @module model/Riskv1liststypeentriesPaymentInformationBank
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1liststypeentriesPaymentInformationBank</code>.
   * Customer&#39;s bank account details
   * @alias module:model/Riskv1liststypeentriesPaymentInformationBank
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Riskv1liststypeentriesPaymentInformationBank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1liststypeentriesPaymentInformationBank} obj Optional instance to populate.
   * @return {module:model/Riskv1liststypeentriesPaymentInformationBank} The populated <code>Riskv1liststypeentriesPaymentInformationBank</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountNumber')) {
        obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('iban')) {
        obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
      }
    }
    return obj;
  }

  /**
   * Customer's bank account number. You can use this field only when scoring a direct debit transaction. Use this field if you do not or are not allowed to provide the IBAN. Note Do not use the IBAN in this field. Use nly the traditional account number information. For the IBAN, use bank_iban. 
   * @member {String} accountNumber
   */
  exports.prototype['accountNumber'] = undefined;
  /**
   * Country-specific code used to identify the customer's bank. Required for some countries if you do not or are not allowed to provide the IBAN instead. You can use this field only when scoring a direct debit transaction. For specific requirements, see \"Required Bank Account Information by Country,\" 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Country where the bank is located. Use the two-character ISO codes. You can use this field only when scoring a direct debit transaction. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * International Bank Account Number (IBAN) for the bank account. For some countries you can provide this number instead of the traditional bank account information. You can use this field only when scoring a direct debit transaction. For specific requirements, see \"Required Bank Account Information by Country,\" 
   * @member {String} iban
   */
  exports.prototype['iban'] = undefined;



  return exports;
}));


