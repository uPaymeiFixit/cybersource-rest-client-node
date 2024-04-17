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
    define(['ApiClient', 'model/Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidrefundsPaymentInformationPaymentType = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod);
  }
}(this, function(ApiClient, Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsPaymentInformationPaymentType model module.
   * @module model/Ptsv2paymentsidrefundsPaymentInformationPaymentType
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsPaymentInformationPaymentType</code>.
   * @alias module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentType
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsPaymentInformationPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentType} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentType} The populated <code>Ptsv2paymentsidrefundsPaymentInformationPaymentType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subTypeName')) {
        obj['subTypeName'] = ApiClient.convertToType(data['subTypeName'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod.constructFromObject(data['method']);
      }
    }
    return obj;
  }

  /**
   * A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - `CARD` (use this for a PIN debit transaction) - `CHECK` (use this for all eCheck payment transactions - ECP Debit, ECP Follow-on Credit, ECP StandAlone Credit) - `bankTransfer` (use for Online Bank Transafer for methods such as P24, iDeal, Estonia Bank, KCP) - `localCard` (KCP Local card via Altpay) - `carrierBilling` (KCP Carrier Billing via Altpay) 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Detailed information about the Payment Type. Possible values: - `DEBIT`: Use this value to indicate a PIN debit transaction.  Examples: For Card, if Credit or Debit or PrePaid. For Bank Transfer, if Online Bank Transfer or Wire Transfers. 
   * @member {String} subTypeName
   */
  exports.prototype['subTypeName'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));


