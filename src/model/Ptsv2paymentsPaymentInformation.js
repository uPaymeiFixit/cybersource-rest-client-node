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
    define(['ApiClient', 'model/Ptsv2paymentsPaymentInformationBank', 'model/Ptsv2paymentsPaymentInformationCard', 'model/Ptsv2paymentsPaymentInformationCustomer', 'model/Ptsv2paymentsPaymentInformationDirectDebit', 'model/Ptsv2paymentsPaymentInformationEWallet', 'model/Ptsv2paymentsPaymentInformationFluidData', 'model/Ptsv2paymentsPaymentInformationInstrumentIdentifier', 'model/Ptsv2paymentsPaymentInformationLegacyToken', 'model/Ptsv2paymentsPaymentInformationOptions', 'model/Ptsv2paymentsPaymentInformationPaymentInstrument', 'model/Ptsv2paymentsPaymentInformationPaymentType', 'model/Ptsv2paymentsPaymentInformationShippingAddress', 'model/Ptsv2paymentsPaymentInformationTokenizedCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPaymentInformationBank'), require('./Ptsv2paymentsPaymentInformationCard'), require('./Ptsv2paymentsPaymentInformationCustomer'), require('./Ptsv2paymentsPaymentInformationDirectDebit'), require('./Ptsv2paymentsPaymentInformationEWallet'), require('./Ptsv2paymentsPaymentInformationFluidData'), require('./Ptsv2paymentsPaymentInformationInstrumentIdentifier'), require('./Ptsv2paymentsPaymentInformationLegacyToken'), require('./Ptsv2paymentsPaymentInformationOptions'), require('./Ptsv2paymentsPaymentInformationPaymentInstrument'), require('./Ptsv2paymentsPaymentInformationPaymentType'), require('./Ptsv2paymentsPaymentInformationShippingAddress'), require('./Ptsv2paymentsPaymentInformationTokenizedCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPaymentInformationBank, root.CyberSource.Ptsv2paymentsPaymentInformationCard, root.CyberSource.Ptsv2paymentsPaymentInformationCustomer, root.CyberSource.Ptsv2paymentsPaymentInformationDirectDebit, root.CyberSource.Ptsv2paymentsPaymentInformationEWallet, root.CyberSource.Ptsv2paymentsPaymentInformationFluidData, root.CyberSource.Ptsv2paymentsPaymentInformationInstrumentIdentifier, root.CyberSource.Ptsv2paymentsPaymentInformationLegacyToken, root.CyberSource.Ptsv2paymentsPaymentInformationOptions, root.CyberSource.Ptsv2paymentsPaymentInformationPaymentInstrument, root.CyberSource.Ptsv2paymentsPaymentInformationPaymentType, root.CyberSource.Ptsv2paymentsPaymentInformationShippingAddress, root.CyberSource.Ptsv2paymentsPaymentInformationTokenizedCard);
  }
}(this, function(ApiClient, Ptsv2paymentsPaymentInformationBank, Ptsv2paymentsPaymentInformationCard, Ptsv2paymentsPaymentInformationCustomer, Ptsv2paymentsPaymentInformationDirectDebit, Ptsv2paymentsPaymentInformationEWallet, Ptsv2paymentsPaymentInformationFluidData, Ptsv2paymentsPaymentInformationInstrumentIdentifier, Ptsv2paymentsPaymentInformationLegacyToken, Ptsv2paymentsPaymentInformationOptions, Ptsv2paymentsPaymentInformationPaymentInstrument, Ptsv2paymentsPaymentInformationPaymentType, Ptsv2paymentsPaymentInformationShippingAddress, Ptsv2paymentsPaymentInformationTokenizedCard) {
  'use strict';




  /**
   * The Ptsv2paymentsPaymentInformation model module.
   * @module model/Ptsv2paymentsPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPaymentInformation</code>.
   * @alias module:model/Ptsv2paymentsPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Ptsv2paymentsPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPaymentInformation} The populated <code>Ptsv2paymentsPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Ptsv2paymentsPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = Ptsv2paymentsPaymentInformationTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
      if (data.hasOwnProperty('directDebit')) {
        obj['directDebit'] = Ptsv2paymentsPaymentInformationDirectDebit.constructFromObject(data['directDebit']);
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
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = Ptsv2paymentsPaymentInformationBank.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = Ptsv2paymentsPaymentInformationOptions.constructFromObject(data['options']);
      }
      if (data.hasOwnProperty('paymentType')) {
        obj['paymentType'] = Ptsv2paymentsPaymentInformationPaymentType.constructFromObject(data['paymentType']);
      }
      if (data.hasOwnProperty('initiationChannel')) {
        obj['initiationChannel'] = ApiClient.convertToType(data['initiationChannel'], 'String');
      }
      if (data.hasOwnProperty('eWallet')) {
        obj['eWallet'] = Ptsv2paymentsPaymentInformationEWallet.constructFromObject(data['eWallet']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationDirectDebit} directDebit
   */
  exports.prototype['directDebit'] = undefined;
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
   * @member {module:model/Ptsv2paymentsPaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationOptions} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationPaymentType} paymentType
   */
  exports.prototype['paymentType'] = undefined;
  /**
   * Mastercard-defined code that indicates how the account information was obtained.  - `00`: Card - `01`: Mobile Network Operator (MNO) controlled removable secure element (SIM or UICC) personalized for use with a mobile phone or smartphone - `02`: Key fob - `03`: Watch using a contactless chip or a fixed (non-removable) secure element not controlled by the MNO - `04`: Mobile tag - `05`: Wristband - `06`: Mobile phone case or sleeve - `07`: Mobile phone or smartphone with a fixed (non-removable) secure element controlled by the MNO,for example, code division multiple access (CDMA) - `08`: Removable secure element not controlled by the MNO, for example, memory card personalized forused with a mobile phone or smartphone - `09`: Mobile Phone or smartphone with a fixed (non-removable) secure element not controlled by the MNO - `10`: MNO controlled removable secure element (SIM or UICC) personalized for use with a tablet or e-book - `11`: Tablet or e-book with a fixed (non-removable) secure element controlled by the MNO - `12`: Removable secure element not controlled by the MNO, for example, memory card personalized foruse with a tablet or e-book - `13`: Tablet or e-book with fixed (non-removable) secure element not controlled by the MNO - `14`: Mobile phone or smartphone with a payment application running in a host processor - `15`: Tablet or e-book with a payment application running in a host processor - `16`: Mobile phone or smartphone with a payment application running in the Trusted ExecutionEnvironment (TEE) of a host processor - `17`: Tablet or e-book with a payment application running in the TEE of a host processor - `18`: Watch with a payment application running in the TEE of a host processor - `19`: Watch with a payment application running in a host processor  Values from 20–99 exclusively indicate the form factor only without also indicating the storage technology  - `20`: Card - `21`: Phone e.g. Mobile Phone - `22`: Tablet/e-reader - `23`: Watch/Wristband e.g. Watch or wristband, including a fitness band, smart strap, disposable band, watch add-on, and security/ID band - `24`: Sticker - `25`: PC - `26`: Device Peripheral e.g. mobile phone case or sleeve - `27`: Tag e.g. key fob or mobile tag - `28`: Jewelry e.g. ring, bracelet, necklace and cuff links - `29`: Fashion Accessory e.g. handbag, bag charm and glasses - `30`: Garment e.g. dress - `31`: Domestic Appliance e.g refrigerator, washing machine - `32`: Vehicle e.g. vehicle, including vehicle attached devices - `33`: Media/Gaming Device e.g. media or gaming device, including a set top box, media player and television  34–99 are reserved for future form factors. Any value in this range may occur within form factor and transaction data without prior notice.  This field is supported only for Mastercard on CyberSource through VisaNet. When initiation channel is not provided via this API field, the value is extracted from EMV tag 9F6E for Mastercard transactions. To enable this feature please call support.  #### Used by **Authorization** Optional field. 
   * @member {String} initiationChannel
   */
  exports.prototype['initiationChannel'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationEWallet} eWallet
   */
  exports.prototype['eWallet'] = undefined;



  return exports;
}));


