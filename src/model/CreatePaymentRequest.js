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
    define(['ApiClient', 'model/Ptsv2paymentsAcquirerInformation', 'model/Ptsv2paymentsAggregatorInformation', 'model/Ptsv2paymentsAgreementInformation', 'model/Ptsv2paymentsBuyerInformation', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsConsumerAuthenticationInformation', 'model/Ptsv2paymentsDeviceInformation', 'model/Ptsv2paymentsHealthCareInformation', 'model/Ptsv2paymentsInstallmentInformation', 'model/Ptsv2paymentsInvoiceDetails', 'model/Ptsv2paymentsIssuerInformation', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/Ptsv2paymentsMerchantDefinedSecureInformation', 'model/Ptsv2paymentsMerchantInformation', 'model/Ptsv2paymentsOrderInformation', 'model/Ptsv2paymentsPaymentInformation', 'model/Ptsv2paymentsPointOfSaleInformation', 'model/Ptsv2paymentsProcessingInformation', 'model/Ptsv2paymentsProcessorInformation', 'model/Ptsv2paymentsPromotionInformation', 'model/Ptsv2paymentsRecipientInformation', 'model/Ptsv2paymentsRecurringPaymentInformation', 'model/Ptsv2paymentsRiskInformation', 'model/Ptsv2paymentsTokenInformation', 'model/Ptsv2paymentsTravelInformation', 'model/Ptsv2paymentsWatchlistScreeningInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsAcquirerInformation'), require('./Ptsv2paymentsAggregatorInformation'), require('./Ptsv2paymentsAgreementInformation'), require('./Ptsv2paymentsBuyerInformation'), require('./Ptsv2paymentsClientReferenceInformation'), require('./Ptsv2paymentsConsumerAuthenticationInformation'), require('./Ptsv2paymentsDeviceInformation'), require('./Ptsv2paymentsHealthCareInformation'), require('./Ptsv2paymentsInstallmentInformation'), require('./Ptsv2paymentsInvoiceDetails'), require('./Ptsv2paymentsIssuerInformation'), require('./Ptsv2paymentsMerchantDefinedInformation'), require('./Ptsv2paymentsMerchantDefinedSecureInformation'), require('./Ptsv2paymentsMerchantInformation'), require('./Ptsv2paymentsOrderInformation'), require('./Ptsv2paymentsPaymentInformation'), require('./Ptsv2paymentsPointOfSaleInformation'), require('./Ptsv2paymentsProcessingInformation'), require('./Ptsv2paymentsProcessorInformation'), require('./Ptsv2paymentsPromotionInformation'), require('./Ptsv2paymentsRecipientInformation'), require('./Ptsv2paymentsRecurringPaymentInformation'), require('./Ptsv2paymentsRiskInformation'), require('./Ptsv2paymentsTokenInformation'), require('./Ptsv2paymentsTravelInformation'), require('./Ptsv2paymentsWatchlistScreeningInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreatePaymentRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsAcquirerInformation, root.CyberSource.Ptsv2paymentsAggregatorInformation, root.CyberSource.Ptsv2paymentsAgreementInformation, root.CyberSource.Ptsv2paymentsBuyerInformation, root.CyberSource.Ptsv2paymentsClientReferenceInformation, root.CyberSource.Ptsv2paymentsConsumerAuthenticationInformation, root.CyberSource.Ptsv2paymentsDeviceInformation, root.CyberSource.Ptsv2paymentsHealthCareInformation, root.CyberSource.Ptsv2paymentsInstallmentInformation, root.CyberSource.Ptsv2paymentsInvoiceDetails, root.CyberSource.Ptsv2paymentsIssuerInformation, root.CyberSource.Ptsv2paymentsMerchantDefinedInformation, root.CyberSource.Ptsv2paymentsMerchantDefinedSecureInformation, root.CyberSource.Ptsv2paymentsMerchantInformation, root.CyberSource.Ptsv2paymentsOrderInformation, root.CyberSource.Ptsv2paymentsPaymentInformation, root.CyberSource.Ptsv2paymentsPointOfSaleInformation, root.CyberSource.Ptsv2paymentsProcessingInformation, root.CyberSource.Ptsv2paymentsProcessorInformation, root.CyberSource.Ptsv2paymentsPromotionInformation, root.CyberSource.Ptsv2paymentsRecipientInformation, root.CyberSource.Ptsv2paymentsRecurringPaymentInformation, root.CyberSource.Ptsv2paymentsRiskInformation, root.CyberSource.Ptsv2paymentsTokenInformation, root.CyberSource.Ptsv2paymentsTravelInformation, root.CyberSource.Ptsv2paymentsWatchlistScreeningInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsAcquirerInformation, Ptsv2paymentsAggregatorInformation, Ptsv2paymentsAgreementInformation, Ptsv2paymentsBuyerInformation, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsConsumerAuthenticationInformation, Ptsv2paymentsDeviceInformation, Ptsv2paymentsHealthCareInformation, Ptsv2paymentsInstallmentInformation, Ptsv2paymentsInvoiceDetails, Ptsv2paymentsIssuerInformation, Ptsv2paymentsMerchantDefinedInformation, Ptsv2paymentsMerchantDefinedSecureInformation, Ptsv2paymentsMerchantInformation, Ptsv2paymentsOrderInformation, Ptsv2paymentsPaymentInformation, Ptsv2paymentsPointOfSaleInformation, Ptsv2paymentsProcessingInformation, Ptsv2paymentsProcessorInformation, Ptsv2paymentsPromotionInformation, Ptsv2paymentsRecipientInformation, Ptsv2paymentsRecurringPaymentInformation, Ptsv2paymentsRiskInformation, Ptsv2paymentsTokenInformation, Ptsv2paymentsTravelInformation, Ptsv2paymentsWatchlistScreeningInformation) {
  'use strict';




  /**
   * The CreatePaymentRequest model module.
   * @module model/CreatePaymentRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreatePaymentRequest</code>.
   * @alias module:model/CreatePaymentRequest
   * @class
   */
  var exports = function() {
    var _this = this;



























  };

  /**
   * Constructs a <code>CreatePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePaymentRequest} obj Optional instance to populate.
   * @return {module:model/CreatePaymentRequest} The populated <code>CreatePaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2paymentsProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('issuerInformation')) {
        obj['issuerInformation'] = Ptsv2paymentsIssuerInformation.constructFromObject(data['issuerInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Ptsv2paymentsBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('recipientInformation')) {
        obj['recipientInformation'] = Ptsv2paymentsRecipientInformation.constructFromObject(data['recipientInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Ptsv2paymentsDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2paymentsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('aggregatorInformation')) {
        obj['aggregatorInformation'] = Ptsv2paymentsAggregatorInformation.constructFromObject(data['aggregatorInformation']);
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = Ptsv2paymentsConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = Ptsv2paymentsPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Ptsv2paymentsMerchantDefinedInformation]);
      }
      if (data.hasOwnProperty('merchantDefinedSecureInformation')) {
        obj['merchantDefinedSecureInformation'] = Ptsv2paymentsMerchantDefinedSecureInformation.constructFromObject(data['merchantDefinedSecureInformation']);
      }
      if (data.hasOwnProperty('installmentInformation')) {
        obj['installmentInformation'] = Ptsv2paymentsInstallmentInformation.constructFromObject(data['installmentInformation']);
      }
      if (data.hasOwnProperty('travelInformation')) {
        obj['travelInformation'] = Ptsv2paymentsTravelInformation.constructFromObject(data['travelInformation']);
      }
      if (data.hasOwnProperty('healthCareInformation')) {
        obj['healthCareInformation'] = Ptsv2paymentsHealthCareInformation.constructFromObject(data['healthCareInformation']);
      }
      if (data.hasOwnProperty('promotionInformation')) {
        obj['promotionInformation'] = Ptsv2paymentsPromotionInformation.constructFromObject(data['promotionInformation']);
      }
      if (data.hasOwnProperty('tokenInformation')) {
        obj['tokenInformation'] = Ptsv2paymentsTokenInformation.constructFromObject(data['tokenInformation']);
      }
      if (data.hasOwnProperty('invoiceDetails')) {
        obj['invoiceDetails'] = Ptsv2paymentsInvoiceDetails.constructFromObject(data['invoiceDetails']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = Ptsv2paymentsProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('agreementInformation')) {
        obj['agreementInformation'] = Ptsv2paymentsAgreementInformation.constructFromObject(data['agreementInformation']);
      }
      if (data.hasOwnProperty('riskInformation')) {
        obj['riskInformation'] = Ptsv2paymentsRiskInformation.constructFromObject(data['riskInformation']);
      }
      if (data.hasOwnProperty('acquirerInformation')) {
        obj['acquirerInformation'] = Ptsv2paymentsAcquirerInformation.constructFromObject(data['acquirerInformation']);
      }
      if (data.hasOwnProperty('recurringPaymentInformation')) {
        obj['recurringPaymentInformation'] = Ptsv2paymentsRecurringPaymentInformation.constructFromObject(data['recurringPaymentInformation']);
      }
      if (data.hasOwnProperty('watchlistScreeningInformation')) {
        obj['watchlistScreeningInformation'] = Ptsv2paymentsWatchlistScreeningInformation.constructFromObject(data['watchlistScreeningInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsIssuerInformation} issuerInformation
   */
  exports.prototype['issuerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsRecipientInformation} recipientInformation
   */
  exports.prototype['recipientInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsAggregatorInformation} aggregatorInformation
   */
  exports.prototype['aggregatorInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;
  /**
   * The object containing the custom data that the merchant defines. 
   * @member {Array.<module:model/Ptsv2paymentsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsMerchantDefinedSecureInformation} merchantDefinedSecureInformation
   */
  exports.prototype['merchantDefinedSecureInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsInstallmentInformation} installmentInformation
   */
  exports.prototype['installmentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTravelInformation} travelInformation
   */
  exports.prototype['travelInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsHealthCareInformation} healthCareInformation
   */
  exports.prototype['healthCareInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPromotionInformation} promotionInformation
   */
  exports.prototype['promotionInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTokenInformation} tokenInformation
   */
  exports.prototype['tokenInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsInvoiceDetails} invoiceDetails
   */
  exports.prototype['invoiceDetails'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsAgreementInformation} agreementInformation
   */
  exports.prototype['agreementInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsRiskInformation} riskInformation
   */
  exports.prototype['riskInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsAcquirerInformation} acquirerInformation
   */
  exports.prototype['acquirerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsRecurringPaymentInformation} recurringPaymentInformation
   */
  exports.prototype['recurringPaymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsWatchlistScreeningInformation} watchlistScreeningInformation
   */
  exports.prototype['watchlistScreeningInformation'] = undefined;



  return exports;
}));


