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
    define(['ApiClient', 'model/Ptsv2billingagreementsInstallmentInformation', 'model/Ptsv2billingagreementsMerchantInformation', 'model/Ptsv2billingagreementsOrderInformation', 'model/Ptsv2billingagreementsPaymentInformation', 'model/Ptsv2paymentsClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2billingagreementsInstallmentInformation'), require('./Ptsv2billingagreementsMerchantInformation'), require('./Ptsv2billingagreementsOrderInformation'), require('./Ptsv2billingagreementsPaymentInformation'), require('./Ptsv2paymentsClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.IntimateBillingAgreement = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2billingagreementsInstallmentInformation, root.CyberSource.Ptsv2billingagreementsMerchantInformation, root.CyberSource.Ptsv2billingagreementsOrderInformation, root.CyberSource.Ptsv2billingagreementsPaymentInformation, root.CyberSource.Ptsv2paymentsClientReferenceInformation);
  }
}(this, function(ApiClient, Ptsv2billingagreementsInstallmentInformation, Ptsv2billingagreementsMerchantInformation, Ptsv2billingagreementsOrderInformation, Ptsv2billingagreementsPaymentInformation, Ptsv2paymentsClientReferenceInformation) {
  'use strict';




  /**
   * The IntimateBillingAgreement model module.
   * @module model/IntimateBillingAgreement
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>IntimateBillingAgreement</code>.
   * @alias module:model/IntimateBillingAgreement
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>IntimateBillingAgreement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntimateBillingAgreement} obj Optional instance to populate.
   * @return {module:model/IntimateBillingAgreement} The populated <code>IntimateBillingAgreement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('installmentInformation')) {
        obj['installmentInformation'] = Ptsv2billingagreementsInstallmentInformation.constructFromObject(data['installmentInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2billingagreementsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2billingagreementsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2billingagreementsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsInstallmentInformation} installmentInformation
   */
  exports.prototype['installmentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;



  return exports;
}));


