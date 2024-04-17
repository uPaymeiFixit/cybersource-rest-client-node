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
    define(['ApiClient', 'model/Ptsv2paymentsPaymentInformationCustomer', 'model/Ptsv2paymentsPaymentInformationFluidData', 'model/Ptsv2paymentsPaymentInformationInstrumentIdentifier', 'model/Ptsv2paymentsPaymentInformationLegacyToken', 'model/Ptsv2paymentsPaymentInformationPaymentInstrument', 'model/Ptsv2paymentsPaymentInformationShippingAddress', 'model/Ptsv2paymentsPaymentInformationTokenizedCard', 'model/Ptsv2paymentsidrefundsPaymentInformationBank', 'model/Ptsv2paymentsidrefundsPaymentInformationCard', 'model/Ptsv2paymentsidrefundsPaymentInformationEWallet', 'model/Ptsv2paymentsidrefundsPaymentInformationPaymentType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPaymentInformationCustomer'), require('./Ptsv2paymentsPaymentInformationFluidData'), require('./Ptsv2paymentsPaymentInformationInstrumentIdentifier'), require('./Ptsv2paymentsPaymentInformationLegacyToken'), require('./Ptsv2paymentsPaymentInformationPaymentInstrument'), require('./Ptsv2paymentsPaymentInformationShippingAddress'), require('./Ptsv2paymentsPaymentInformationTokenizedCard'), require('./Ptsv2paymentsidrefundsPaymentInformationBank'), require('./Ptsv2paymentsidrefundsPaymentInformationCard'), require('./Ptsv2paymentsidrefundsPaymentInformationEWallet'), require('./Ptsv2paymentsidrefundsPaymentInformationPaymentType'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidrefundsPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPaymentInformationCustomer, root.CyberSource.Ptsv2paymentsPaymentInformationFluidData, root.CyberSource.Ptsv2paymentsPaymentInformationInstrumentIdentifier, root.CyberSource.Ptsv2paymentsPaymentInformationLegacyToken, root.CyberSource.Ptsv2paymentsPaymentInformationPaymentInstrument, root.CyberSource.Ptsv2paymentsPaymentInformationShippingAddress, root.CyberSource.Ptsv2paymentsPaymentInformationTokenizedCard, root.CyberSource.Ptsv2paymentsidrefundsPaymentInformationBank, root.CyberSource.Ptsv2paymentsidrefundsPaymentInformationCard, root.CyberSource.Ptsv2paymentsidrefundsPaymentInformationEWallet, root.CyberSource.Ptsv2paymentsidrefundsPaymentInformationPaymentType);
  }
}(this, function(ApiClient, Ptsv2paymentsPaymentInformationCustomer, Ptsv2paymentsPaymentInformationFluidData, Ptsv2paymentsPaymentInformationInstrumentIdentifier, Ptsv2paymentsPaymentInformationLegacyToken, Ptsv2paymentsPaymentInformationPaymentInstrument, Ptsv2paymentsPaymentInformationShippingAddress, Ptsv2paymentsPaymentInformationTokenizedCard, Ptsv2paymentsidrefundsPaymentInformationBank, Ptsv2paymentsidrefundsPaymentInformationCard, Ptsv2paymentsidrefundsPaymentInformationEWallet, Ptsv2paymentsidrefundsPaymentInformationPaymentType) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsPaymentInformation model module.
   * @module model/Ptsv2paymentsidrefundsPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsPaymentInformation</code>.
   * @alias module:model/Ptsv2paymentsidrefundsPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsPaymentInformation} The populated <code>Ptsv2paymentsidrefundsPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Ptsv2paymentsidrefundsPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = Ptsv2paymentsidrefundsPaymentInformationBank.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = Ptsv2paymentsPaymentInformationTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
      if (data.hasOwnProperty('fluidData')) {
        obj['fluidData'] = Ptsv2paymentsPaymentInformationFluidData.constructFromObject(data['fluidData']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = Ptsv2paymentsPaymentInformationCustomer.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('paymentInstrument')) {
        obj['paymentInstrument'] = Ptsv2paymentsPaymentInformationPaymentInstrument.constructFromObject(data['paymentInstrument']);
      }
      if (data.hasOwnProperty('instrumentIdentifier')) {
        obj['instrumentIdentifier'] = Ptsv2paymentsPaymentInformationInstrumentIdentifier.constructFromObject(data['instrumentIdentifier']);
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = Ptsv2paymentsPaymentInformationShippingAddress.constructFromObject(data['shippingAddress']);
      }
      if (data.hasOwnProperty('legacyToken')) {
        obj['legacyToken'] = Ptsv2paymentsPaymentInformationLegacyToken.constructFromObject(data['legacyToken']);
      }
      if (data.hasOwnProperty('paymentType')) {
        obj['paymentType'] = Ptsv2paymentsidrefundsPaymentInformationPaymentType.constructFromObject(data['paymentType']);
      }
      if (data.hasOwnProperty('eWallet')) {
        obj['eWallet'] = Ptsv2paymentsidrefundsPaymentInformationEWallet.constructFromObject(data['eWallet']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsidrefundsPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsPaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationFluidData} fluidData
   */
  exports.prototype['fluidData'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationPaymentInstrument} paymentInstrument
   */
  exports.prototype['paymentInstrument'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationInstrumentIdentifier} instrumentIdentifier
   */
  exports.prototype['instrumentIdentifier'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationShippingAddress} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationLegacyToken} legacyToken
   */
  exports.prototype['legacyToken'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentType} paymentType
   */
  exports.prototype['paymentType'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsPaymentInformationEWallet} eWallet
   */
  exports.prototype['eWallet'] = undefined;



  return exports;
}));


