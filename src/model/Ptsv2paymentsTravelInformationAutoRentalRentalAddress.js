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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsTravelInformationAutoRentalRentalAddress = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsTravelInformationAutoRentalRentalAddress model module.
   * @module model/Ptsv2paymentsTravelInformationAutoRentalRentalAddress
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTravelInformationAutoRentalRentalAddress</code>.
   * @alias module:model/Ptsv2paymentsTravelInformationAutoRentalRentalAddress
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Ptsv2paymentsTravelInformationAutoRentalRentalAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTravelInformationAutoRentalRentalAddress} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTravelInformationAutoRentalRentalAddress} The populated <code>Ptsv2paymentsTravelInformationAutoRentalRentalAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
    }
    return obj;
  }

  /**
   * City in which the auto was rented.  For authorizations, this field is supported for Visa, MasterCard, and American Express.  For captures, this field is supported only for American Express.  For all other card types, this field is ignored. 
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * State in which the auto was rented. Use the [State, Province, and Territory Codes for the United States and Canada](https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf). 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Country where the auto was rented. Use the [ISO Standard Country Codes.](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf) This field is supported only for American Express. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The agency code, address, phone number, etc., used to identify the location where the vehicle was rented. 
   * @member {String} locationId
   */
  exports.prototype['locationId'] = undefined;
  /**
   * Address from where the vehicle was rented. 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Address from where the vehicle was rented. 
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * When merchant wants to send the rental address's postal code. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * This field contains the location where a taxi passenger was picked up or where an auto rental vehicle was picked up. In most cases, this is the rental agency's business name that appears on the storefront and/or customer receipts, commonly referred to as the DBA (Doing Business As) name. However, if the vehicle was picked up at another location (e.g., a hotel,auto dealership, repair shop, etc.), the name of that location should be used. This entry must be easily recognized by the Cardmember to avoid unnecessary inquiries. If the name is more than 38  characters, use proper and meaningful abbreviation, when possible. 
   * @member {String} location
   */
  exports.prototype['location'] = undefined;



  return exports;
}));


