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
    define(['ApiClient', 'model/Ptsv2billingagreementsAggregatorInformation', 'model/Ptsv2billingagreementsClientReferenceInformation', 'model/Ptsv2billingagreementsConsumerAuthenticationInformation', 'model/Ptsv2billingagreementsDeviceInformation', 'model/Ptsv2billingagreementsInstallmentInformation', 'model/Ptsv2billingagreementsMerchantInformation', 'model/Ptsv2billingagreementsOrderInformation', 'model/Ptsv2billingagreementsPaymentInformation', 'model/Ptsv2billingagreementsidAgreementInformation', 'model/Ptsv2billingagreementsidBuyerInformation', 'model/Ptsv2billingagreementsidProcessingInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2billingagreementsAggregatorInformation'), require('./Ptsv2billingagreementsClientReferenceInformation'), require('./Ptsv2billingagreementsConsumerAuthenticationInformation'), require('./Ptsv2billingagreementsDeviceInformation'), require('./Ptsv2billingagreementsInstallmentInformation'), require('./Ptsv2billingagreementsMerchantInformation'), require('./Ptsv2billingagreementsOrderInformation'), require('./Ptsv2billingagreementsPaymentInformation'), require('./Ptsv2billingagreementsidAgreementInformation'), require('./Ptsv2billingagreementsidBuyerInformation'), require('./Ptsv2billingagreementsidProcessingInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ModifyBillingAgreement = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2billingagreementsAggregatorInformation, root.CyberSource.Ptsv2billingagreementsClientReferenceInformation, root.CyberSource.Ptsv2billingagreementsConsumerAuthenticationInformation, root.CyberSource.Ptsv2billingagreementsDeviceInformation, root.CyberSource.Ptsv2billingagreementsInstallmentInformation, root.CyberSource.Ptsv2billingagreementsMerchantInformation, root.CyberSource.Ptsv2billingagreementsOrderInformation, root.CyberSource.Ptsv2billingagreementsPaymentInformation, root.CyberSource.Ptsv2billingagreementsidAgreementInformation, root.CyberSource.Ptsv2billingagreementsidBuyerInformation, root.CyberSource.Ptsv2billingagreementsidProcessingInformation);
  }
}(this, function(ApiClient, Ptsv2billingagreementsAggregatorInformation, Ptsv2billingagreementsClientReferenceInformation, Ptsv2billingagreementsConsumerAuthenticationInformation, Ptsv2billingagreementsDeviceInformation, Ptsv2billingagreementsInstallmentInformation, Ptsv2billingagreementsMerchantInformation, Ptsv2billingagreementsOrderInformation, Ptsv2billingagreementsPaymentInformation, Ptsv2billingagreementsidAgreementInformation, Ptsv2billingagreementsidBuyerInformation, Ptsv2billingagreementsidProcessingInformation) {
  'use strict';




  /**
   * The ModifyBillingAgreement model module.
   * @module model/ModifyBillingAgreement
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ModifyBillingAgreement</code>.
   * @alias module:model/ModifyBillingAgreement
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ModifyBillingAgreement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModifyBillingAgreement} obj Optional instance to populate.
   * @return {module:model/ModifyBillingAgreement} The populated <code>ModifyBillingAgreement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agreementInformation')) {
        obj['agreementInformation'] = Ptsv2billingagreementsidAgreementInformation.constructFromObject(data['agreementInformation']);
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2billingagreementsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('aggregatorInformation')) {
        obj['aggregatorInformation'] = Ptsv2billingagreementsAggregatorInformation.constructFromObject(data['aggregatorInformation']);
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = Ptsv2billingagreementsConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Ptsv2billingagreementsDeviceInformation.constructFromObject(data['deviceInformation']);
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
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2billingagreementsidProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Ptsv2billingagreementsidBuyerInformation.constructFromObject(data['buyerInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2billingagreementsidAgreementInformation} agreementInformation
   */
  exports.prototype['agreementInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsAggregatorInformation} aggregatorInformation
   */
  exports.prototype['aggregatorInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
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
  /**
   * @member {module:model/Ptsv2billingagreementsidProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsidBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;



  return exports;
}));


