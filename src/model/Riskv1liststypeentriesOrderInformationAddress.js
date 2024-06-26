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
    root.CyberSource.Riskv1liststypeentriesOrderInformationAddress = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1liststypeentriesOrderInformationAddress model module.
   * @module model/Riskv1liststypeentriesOrderInformationAddress
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1liststypeentriesOrderInformationAddress</code>.
   * Contains address information related to the order
   * @alias module:model/Riskv1liststypeentriesOrderInformationAddress
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Riskv1liststypeentriesOrderInformationAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1liststypeentriesOrderInformationAddress} obj Optional instance to populate.
   * @return {module:model/Riskv1liststypeentriesOrderInformationAddress} The populated <code>Riskv1liststypeentriesOrderInformationAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * First line of the street address
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Second line of the street address
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * City of the street address. Required when adding the address to a list. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Country of the street address. Use the two-character codes located in the Support Center. Required if address1 is present. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * State, province, or territory of the street address. Use the two-character codes located in the Support Center.
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Postal code of the street address. Required when adding the address to a list.
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;



  return exports;
}));


