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
    define(['ApiClient', 'model/Ptsv2paymentreferencesAgreementInformation', 'model/Ptsv2paymentreferencesBuyerInformation', 'model/Ptsv2paymentreferencesDeviceInformation', 'model/Ptsv2paymentreferencesMerchantInformation', 'model/Ptsv2paymentreferencesOrderInformation', 'model/Ptsv2paymentreferencesPaymentInformation', 'model/Ptsv2paymentreferencesProcessingInformation', 'model/Ptsv2paymentreferencesTravelInformation', 'model/Ptsv2paymentreferencesUserInterface', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/Ptsv2refreshpaymentstatusidClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentreferencesAgreementInformation'), require('./Ptsv2paymentreferencesBuyerInformation'), require('./Ptsv2paymentreferencesDeviceInformation'), require('./Ptsv2paymentreferencesMerchantInformation'), require('./Ptsv2paymentreferencesOrderInformation'), require('./Ptsv2paymentreferencesPaymentInformation'), require('./Ptsv2paymentreferencesProcessingInformation'), require('./Ptsv2paymentreferencesTravelInformation'), require('./Ptsv2paymentreferencesUserInterface'), require('./Ptsv2paymentsMerchantDefinedInformation'), require('./Ptsv2refreshpaymentstatusidClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreateSessionReq = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentreferencesAgreementInformation, root.CyberSource.Ptsv2paymentreferencesBuyerInformation, root.CyberSource.Ptsv2paymentreferencesDeviceInformation, root.CyberSource.Ptsv2paymentreferencesMerchantInformation, root.CyberSource.Ptsv2paymentreferencesOrderInformation, root.CyberSource.Ptsv2paymentreferencesPaymentInformation, root.CyberSource.Ptsv2paymentreferencesProcessingInformation, root.CyberSource.Ptsv2paymentreferencesTravelInformation, root.CyberSource.Ptsv2paymentreferencesUserInterface, root.CyberSource.Ptsv2paymentsMerchantDefinedInformation, root.CyberSource.Ptsv2refreshpaymentstatusidClientReferenceInformation);
  }
}(this, function(ApiClient, Ptsv2paymentreferencesAgreementInformation, Ptsv2paymentreferencesBuyerInformation, Ptsv2paymentreferencesDeviceInformation, Ptsv2paymentreferencesMerchantInformation, Ptsv2paymentreferencesOrderInformation, Ptsv2paymentreferencesPaymentInformation, Ptsv2paymentreferencesProcessingInformation, Ptsv2paymentreferencesTravelInformation, Ptsv2paymentreferencesUserInterface, Ptsv2paymentsMerchantDefinedInformation, Ptsv2refreshpaymentstatusidClientReferenceInformation) {
  'use strict';




  /**
   * The CreateSessionReq model module.
   * @module model/CreateSessionReq
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateSessionReq</code>.
   * @alias module:model/CreateSessionReq
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>CreateSessionReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSessionReq} obj Optional instance to populate.
   * @return {module:model/CreateSessionReq} The populated <code>CreateSessionReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2refreshpaymentstatusidClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2paymentreferencesProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentreferencesPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentreferencesOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Ptsv2paymentreferencesBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Ptsv2paymentreferencesDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2paymentreferencesMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('userInterface')) {
        obj['userInterface'] = Ptsv2paymentreferencesUserInterface.constructFromObject(data['userInterface']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Ptsv2paymentsMerchantDefinedInformation]);
      }
      if (data.hasOwnProperty('agreementInformation')) {
        obj['agreementInformation'] = Ptsv2paymentreferencesAgreementInformation.constructFromObject(data['agreementInformation']);
      }
      if (data.hasOwnProperty('travelInformation')) {
        obj['travelInformation'] = Ptsv2paymentreferencesTravelInformation.constructFromObject(data['travelInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2refreshpaymentstatusidClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesUserInterface} userInterface
   */
  exports.prototype['userInterface'] = undefined;
  /**
   * The object containing the custom data that the merchant defines. 
   * @member {Array.<module:model/Ptsv2paymentsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesAgreementInformation} agreementInformation
   */
  exports.prototype['agreementInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentreferencesTravelInformation} travelInformation
   */
  exports.prototype['travelInformation'] = undefined;



  return exports;
}));


