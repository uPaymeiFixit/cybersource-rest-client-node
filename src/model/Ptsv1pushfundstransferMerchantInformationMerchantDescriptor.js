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
    root.CyberSource.Ptsv1pushfundstransferMerchantInformationMerchantDescriptor = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferMerchantInformationMerchantDescriptor model module.
   * @module model/Ptsv1pushfundstransferMerchantInformationMerchantDescriptor
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferMerchantInformationMerchantDescriptor</code>.
   * @alias module:model/Ptsv1pushfundstransferMerchantInformationMerchantDescriptor
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferMerchantInformationMerchantDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferMerchantInformationMerchantDescriptor} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferMerchantInformationMerchantDescriptor} The populated <code>Ptsv1pushfundstransferMerchantInformationMerchantDescriptor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('storeId')) {
        obj['storeId'] = ApiClient.convertToType(data['storeId'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * The state where the merchant is located.  See https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf  Note This field is supported only for businesses located in the U.S. or Canada. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * For the descriptions, used-by information, data types, and lengths for these fields, see merchant_descriptor_contact field description in Credit Card Services Using the SCMP API.--> Contact information for the merchant.  Note These are the maximum data lengths for the following payment processors:  FDC Compass (13) Chase Paymentech (13). 
   * @member {String} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * Merchant's country.  Country code for your business location. Use the ISO Standard Alpha Country Codes This value might be displayed on the cardholder's statement.  See https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf  Note If your business is located in the U.S. or Canada and you include this field in a request, you must also include merchantInformation.merchantDescriptor.administrativeArea. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Merchant's City.  City for your business location. This value might be displayed on the cardholder's statement. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Merchant's business name. This name is displayed on the cardholder's statement.  Chase Paymentech, Visa Platform Connect: length 22 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The unique id of the merchant's shop which assigned by the merchant. 
   * @member {String} storeId
   */
  exports.prototype['storeId'] = undefined;
  /**
   * Merchant's postal code. This value might be displayed on the cardholder's statement.  If your business is domiciled in the U.S., you can use a 5-digit or 9-digit postal code. A 9-digit postal code must follow this format: [5 digits][dash][4 digits] Example: 12345-6789  If your business is domiciled in Canada, you can use a 6-digit or 9-digit postal code. A 6-digit postal code must follow this format: [alpha][numeric][alpha][space] [numeric][alpha][numeric] Example: A1B 2C3 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;



  return exports;
}));


