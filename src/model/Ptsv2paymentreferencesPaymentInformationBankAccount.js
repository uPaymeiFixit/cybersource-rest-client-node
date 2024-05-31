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
    root.CyberSource.Ptsv2paymentreferencesPaymentInformationBankAccount = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentreferencesPaymentInformationBankAccount model module.
   * @module model/Ptsv2paymentreferencesPaymentInformationBankAccount
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentreferencesPaymentInformationBankAccount</code>.
   * @alias module:model/Ptsv2paymentreferencesPaymentInformationBankAccount
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentreferencesPaymentInformationBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentreferencesPaymentInformationBankAccount} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentreferencesPaymentInformationBankAccount} The populated <code>Ptsv2paymentreferencesPaymentInformationBankAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('iban')) {
        obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
      }
    }
    return obj;
  }

  /**
   * Account number.  When processing encoded account numbers, use this field for the encoded account number. 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * International Bank Account Number (IBAN) for the bank account. For some countries you can provide this number instead of the traditional bank account information. You can use this field only when scoring a direct debit transaction.  For all possible values, see the `bank_iban` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} iban
   */
  exports.prototype['iban'] = undefined;



  return exports;
}));

