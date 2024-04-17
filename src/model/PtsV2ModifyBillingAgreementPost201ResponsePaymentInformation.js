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
    define(['ApiClient', 'model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationBank', 'model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationEWallet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationBank'), require('./PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationEWallet'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationBank, root.CyberSource.PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationEWallet);
  }
}(this, function(ApiClient, PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationBank, PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationEWallet) {
  'use strict';




  /**
   * The PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation model module.
   * @module model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation</code>.
   * @alias module:model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation} The populated <code>PtsV2ModifyBillingAgreementPost201ResponsePaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eWallet')) {
        obj['eWallet'] = PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationEWallet.constructFromObject(data['eWallet']);
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationBank.constructFromObject(data['bank']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationEWallet} eWallet
   */
  exports.prototype['eWallet'] = undefined;
  /**
   * @member {module:model/PtsV2ModifyBillingAgreementPost201ResponsePaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;



  return exports;
}));


