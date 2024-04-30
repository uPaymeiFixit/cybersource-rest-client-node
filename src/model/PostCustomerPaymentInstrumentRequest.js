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
    define(['ApiClient', 'model/TmsPaymentInstrumentProcessingInfo', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCard', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsPaymentInstrumentProcessingInfo'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentCard'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PostCustomerPaymentInstrumentRequest = factory(root.CyberSource.ApiClient, root.CyberSource.TmsPaymentInstrumentProcessingInfo, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentCard, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata);
  }
}(this, function(ApiClient, TmsPaymentInstrumentProcessingInfo, Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount, Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo, Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation, Tmsv2customersEmbeddedDefaultPaymentInstrumentCard, Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded, Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier, Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks, Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation, Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata) {
  'use strict';




  /**
   * The PostCustomerPaymentInstrumentRequest model module.
   * @module model/PostCustomerPaymentInstrumentRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PostCustomerPaymentInstrumentRequest</code>.
   * @alias module:model/PostCustomerPaymentInstrumentRequest
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>PostCustomerPaymentInstrumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCustomerPaymentInstrumentRequest} obj Optional instance to populate.
   * @return {module:model/PostCustomerPaymentInstrumentRequest} The populated <code>PostCustomerPaymentInstrumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('bankAccount')) {
        obj['bankAccount'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount.constructFromObject(data['bankAccount']);
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = TmsPaymentInstrumentProcessingInfo.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('instrumentIdentifier')) {
        obj['instrumentIdentifier'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier.constructFromObject(data['instrumentIdentifier']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('_embedded')) {
        obj['_embedded'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded.constructFromObject(data['_embedded']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * The Id of the Payment Instrument Token.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The type.  Possible Values: - paymentInstrument 
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * Flag that indicates whether customer payment instrument is the dafault. Possible Values:  - `true`: Payment instrument is customer's default.  - `false`: Payment instrument is not customer's default. 
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * Issuers state for the card number. Possible Values: - ACTIVE - CLOSED : The account has been closed. 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The type of Payment Instrument. Possible Values: - cardHash 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount} bankAccount
   */
  exports.prototype['bankAccount'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/TmsPaymentInstrumentProcessingInfo} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier} instrumentIdentifier
   */
  exports.prototype['instrumentIdentifier'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded} _embedded
   */
  exports.prototype['_embedded'] = undefined;



  return exports;
}));


