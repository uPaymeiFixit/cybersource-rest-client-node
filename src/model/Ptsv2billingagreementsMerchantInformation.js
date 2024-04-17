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
    define(['ApiClient', 'model/Ptsv2billingagreementsMerchantInformationMerchantDescriptor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2billingagreementsMerchantInformationMerchantDescriptor'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2billingagreementsMerchantInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2billingagreementsMerchantInformationMerchantDescriptor);
  }
}(this, function(ApiClient, Ptsv2billingagreementsMerchantInformationMerchantDescriptor) {
  'use strict';




  /**
   * The Ptsv2billingagreementsMerchantInformation model module.
   * @module model/Ptsv2billingagreementsMerchantInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2billingagreementsMerchantInformation</code>.
   * @alias module:model/Ptsv2billingagreementsMerchantInformation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Ptsv2billingagreementsMerchantInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2billingagreementsMerchantInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2billingagreementsMerchantInformation} The populated <code>Ptsv2billingagreementsMerchantInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantDescriptor')) {
        obj['merchantDescriptor'] = Ptsv2billingagreementsMerchantInformationMerchantDescriptor.constructFromObject(data['merchantDescriptor']);
      }
      if (data.hasOwnProperty('categoryCode')) {
        obj['categoryCode'] = ApiClient.convertToType(data['categoryCode'], 'Number');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('transactionLocalDateTime')) {
        obj['transactionLocalDateTime'] = ApiClient.convertToType(data['transactionLocalDateTime'], 'String');
      }
      if (data.hasOwnProperty('cancelUrl')) {
        obj['cancelUrl'] = ApiClient.convertToType(data['cancelUrl'], 'String');
      }
      if (data.hasOwnProperty('successUrl')) {
        obj['successUrl'] = ApiClient.convertToType(data['successUrl'], 'String');
      }
      if (data.hasOwnProperty('failureUrl')) {
        obj['failureUrl'] = ApiClient.convertToType(data['failureUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2billingagreementsMerchantInformationMerchantDescriptor} merchantDescriptor
   */
  exports.prototype['merchantDescriptor'] = undefined;
  /**
   * The value for this field is a four-digit number that the payment card industry uses to classify merchants into market segments. A payment card company assigned one or more of these values to your business when you started accepting the payment card company's cards. When you do not include this field in your request, CyberSource uses the value in your CyberSource account.  For processor-specific information, see the `merchant_category_code` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR4 - Position: 150-153 - Field: Merchant Category Code 
   * @member {Number} categoryCode
   */
  exports.prototype['categoryCode'] = undefined;
  /**
   * The state where the merchant is located.  #### PIN debit State code or region code for your business. Use the Use the [State, Province, and Territory Codes for the United States and Canada](https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf) This value might be displayed on the cardholder's statement.  When you do not include this value in your PIN debit request, the merchant name from your account is used. **Important** This value must consist of English characters.  **Note** This field is supported only for businesses located in the U.S. or Canada.  Optional field for PIN debit credit or PIN debit purchase. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Date and time at your physical location.  Format: `YYYYMMDDhhmmss`, where:  - `YYYY` = year  - `MM` = month  - `DD` = day  - `hh` = hour  - `mm` = minutes  - `ss` = seconds  #### Used by **Authorization** Required for these processors: - American Express Direct                                                                                                                                                                                                                                                                                                                         - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - SIX  Optional for all other processors. 
   * @member {String} transactionLocalDateTime
   */
  exports.prototype['transactionLocalDateTime'] = undefined;
  /**
   * URL to which the customer is directed if they fail to sign the mandate. #### SEPA Required for Create Mandate and Update Mandate #### BACS Required for Create Mandate 
   * @member {String} cancelUrl
   */
  exports.prototype['cancelUrl'] = undefined;
  /**
   * URL to which the customer is directed if they fail to sign the mandate. #### SEPA Required for Create Mandate and Update Mandate #### BACS Required for Create Mandate 
   * @member {String} successUrl
   */
  exports.prototype['successUrl'] = undefined;
  /**
   * URL to which the customer is directed if they fail to sign the mandate. #### SEPA Required for Create Mandate and Update Mandate #### BACS Required for Create Mandate 
   * @member {String} failureUrl
   */
  exports.prototype['failureUrl'] = undefined;



  return exports;
}));


