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
    define(['ApiClient', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentCard = factory(root.CyberSource.ApiClient, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation);
  }
}(this, function(ApiClient, Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation) {
  'use strict';




  /**
   * The Tmsv2customersEmbeddedDefaultPaymentInstrumentCard model module.
   * @module model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentCard</code>.
   * @alias module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCard
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCard} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCard} The populated <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('issueNumber')) {
        obj['issueNumber'] = ApiClient.convertToType(data['issueNumber'], 'String');
      }
      if (data.hasOwnProperty('startMonth')) {
        obj['startMonth'] = ApiClient.convertToType(data['startMonth'], 'String');
      }
      if (data.hasOwnProperty('startYear')) {
        obj['startYear'] = ApiClient.convertToType(data['startYear'], 'String');
      }
      if (data.hasOwnProperty('useAs')) {
        obj['useAs'] = ApiClient.convertToType(data['useAs'], 'String');
      }
      if (data.hasOwnProperty('hash')) {
        obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
      }
      if (data.hasOwnProperty('tokenizedInformation')) {
        obj['tokenizedInformation'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation.constructFromObject(data['tokenizedInformation']);
      }
    }
    return obj;
  }

  /**
   * Two-digit month in which the payment card expires.  Format: `MM`.  Possible Values: `01` through `12`. 
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the credit card expires.  Format: `YYYY`. 
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * Value that indicates the card type. Possible Values v2 : v1:   * 001 : visa   * 002 : mastercard - Eurocard—European regional brand of Mastercard   * 003 : american express   * 004 : discover   * 005 : diners club   * 006 : carte blanche   * 007 : jcb   * 008 : optima   * 011 : twinpay credit   * 012 : twinpay debit   * 013 : walmart   * 014 : enRoute   * 015 : lowes consumer   * 016 : home depot consumer   * 017 : mbna   * 018 : dicks sportswear   * 019 : casual corner   * 020 : sears   * 021 : jal   * 023 : disney   * 024 : maestro uk domestic   * 025 : sams club consumer   * 026 : sams club business   * 028 : bill me later   * 029 : bebe   * 030 : restoration hardware   * 031 : delta online — use this value only for Ingenico ePayments. For other processors, use 001 for all Visa card types.   * 032 : solo   * 033 : visa electron   * 034 : dankort   * 035 : laser   * 036 : carte bleue — formerly Cartes Bancaires   * 037 : carta si   * 038 : pinless debit   * 039 : encoded account   * 040 : uatp   * 041 : household   * 042 : maestro international   * 043 : ge money uk   * 044 : korean cards   * 045 : style   * 046 : jcrew   * 047 : payease china processing ewallet   * 048 : payease china processing bank transfer   * 049 : meijer private label   * 050 : hipercard — supported only by the Comercio Latino processor.   * 051 : aura — supported only by the Comercio Latino processor.   * 052 : redecard   * 054 : elo — supported only by the Comercio Latino processor.   * 055 : capital one private label   * 056 : synchrony private label   * 057 : costco private label   * 060 : mada   * 062 : china union pay   * 063 : falabella private label 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Number of times a Maestro (UK Domestic) card has been issued to the account holder. The card might or might not have an issue number. The number can consist of one or two digits, and the first digit might be a zero. When you include this value in your request, include exactly what is printed on the card. A value of 2 is different than a value of 02. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card.  **Note** The issue number is not required for Maestro (UK Domestic) transactions. 
   * @member {String} issueNumber
   */
  exports.prototype['issueNumber'] = undefined;
  /**
   * Month of the start of the Maestro (UK Domestic) card validity period. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card. `Format: MM`. Possible Values: 01 through 12.  **Note** The start date is not required for Maestro (UK Domestic) transactions. 
   * @member {String} startMonth
   */
  exports.prototype['startMonth'] = undefined;
  /**
   * Year of the start of the Maestro (UK Domestic) card validity period. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card. `Format: YYYY`.  **Note** The start date is not required for Maestro (UK Domestic) transactions. 
   * @member {String} startYear
   */
  exports.prototype['startYear'] = undefined;
  /**
   * 'Payment Instrument was created / updated as part of a pinless debit transaction.' 
   * @member {String} useAs
   */
  exports.prototype['useAs'] = undefined;
  /**
   * Hash value representing the card. 
   * @member {String} hash
   */
  exports.prototype['hash'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation} tokenizedInformation
   */
  exports.prototype['tokenizedInformation'] = undefined;



  return exports;
}));


