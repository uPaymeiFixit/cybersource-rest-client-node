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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidcapturesAggregatorInformationSubMerchant = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesAggregatorInformationSubMerchant model module.
   * @module model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesAggregatorInformationSubMerchant</code>.
   * @alias module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesAggregatorInformationSubMerchant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant} The populated <code>Ptsv2paymentsidcapturesAggregatorInformationSubMerchant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Sub-merchant's business name.  #### American Express Direct The maximum length of the sub-merchant name depends on the length of the aggregator name. The combined length for both values must not exceed 36 characters.  #### CyberSource through VisaNet With American Express, the maximum length of the sub-merchant name depends on the length of the aggregator name. The combined length for both values must not exceed 36 characters. The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters.  #### FDC Nashville Global With Mastercard, the maximum length of the sub-merchant name depends on the length of the aggregator name: - If aggregator name length is 1 through 3, maximum sub-merchant name length is 21. - If aggregator name length is 4 through 7, maximum sub-merchant name length is 17. - If aggregator name length is 8 through 12, maximum sub-merchant name length is 12. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * First line of the sub-merchant's street address.  For processor-specific details, see `submerchant_street` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Sub-merchant's city.  For processor-specific details, see `submerchant_city` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Sub-merchant's state or province.  For possible values and also aggregator support, see `submerchant_state` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Partial postal code for the sub-merchant's address.  For processor-specific details, see `submerchant_postal_code` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Sub-merchant's country. Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file.  #### FDC Compass This value must consist of uppercase characters.  For details, see the `submerchant_country` request-level field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Sub-merchant's email address.  **Maximum length for processors**   - American Express Direct: 40  - CyberSource through VisaNet: 40  - FDC Compass: 40  - FDC Nashville Global: 19  #### CyberSource through VisaNet With American Express, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCRB - Position: 25-64 - Field: American Express Seller E-mail Address  **Note** The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant's acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Sub-merchant's telephone number.  **Maximum length for procesors**   - American Express Direct: 20  - CyberSource through VisaNet: 20  - FDC Compass: 13  - FDC Nashville Global: 10  #### CyberSource through VisaNet With American Express, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCRB - Position: 5-24 - Field: American Express Seller Telephone Number  **FDC Compass**\\ This value must consist of uppercase characters. Use one of these recommended formats:\\ `NNN-NNN-NNNN`\\ `NNN-AAAAAAA` 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * The ID you assigned to your sub-merchant. CyberSource through VisaNet: For American Express transaction, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCRB - Position: 65-84 - Field: American Express Seller ID For  Mastercard transactions, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 117-131 - Field: Sub-Merchant ID FDC Compass: This value must consist of uppercase characters.  American Express Direct: String (20) CyberSource through VisaNet with American Express: String (20) CyberSource through VisaNet with Visa,Mastercard and Discover: String (15) FDC Compass: String (20) FDC Nashville Global: String (14) 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


