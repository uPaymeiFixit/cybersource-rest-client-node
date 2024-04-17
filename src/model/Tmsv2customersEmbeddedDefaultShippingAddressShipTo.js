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
    root.CyberSource.Tmsv2customersEmbeddedDefaultShippingAddressShipTo = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tmsv2customersEmbeddedDefaultShippingAddressShipTo model module.
   * @module model/Tmsv2customersEmbeddedDefaultShippingAddressShipTo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersEmbeddedDefaultShippingAddressShipTo</code>.
   * @alias module:model/Tmsv2customersEmbeddedDefaultShippingAddressShipTo
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Tmsv2customersEmbeddedDefaultShippingAddressShipTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersEmbeddedDefaultShippingAddressShipTo} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersEmbeddedDefaultShippingAddressShipTo} The populated <code>Tmsv2customersEmbeddedDefaultShippingAddressShipTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
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
    }
    return obj;
  }

  /**
   * First name of the recipient. 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name of the recipient. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Company associated with the shipping address. 
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * First line of the shipping address. 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Second line of the shipping address. 
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * City of the shipping address. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * State or province of the shipping address. Use 2 character the State, Province, and Territory Codes for the United States and Canada. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Postal code for the shipping address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  Example A1B 2C3  **American Express Direct**\\ Before sending the postal code to the processor, all nonalphanumeric characters are removed and, if the remaining value is longer than nine characters, truncates the value starting from the right side. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Country of the shipping address. Use the two-character ISO Standard Country Codes. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Email associated with the shipping address. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Phone number associated with the shipping address. 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


