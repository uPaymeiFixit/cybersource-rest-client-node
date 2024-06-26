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
    root.CyberSource.Ptsv2paymentsidcapturesOrderInformationShippingDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesOrderInformationShippingDetails model module.
   * @module model/Ptsv2paymentsidcapturesOrderInformationShippingDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesOrderInformationShippingDetails</code>.
   * @alias module:model/Ptsv2paymentsidcapturesOrderInformationShippingDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesOrderInformationShippingDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesOrderInformationShippingDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesOrderInformationShippingDetails} The populated <code>Ptsv2paymentsidcapturesOrderInformationShippingDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('shipFromPostalCode')) {
        obj['shipFromPostalCode'] = ApiClient.convertToType(data['shipFromPostalCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Postal code for the address from which the goods are shipped, which is used to establish nexus. The default is the postal code associated with your CyberSource account.  The postal code must consist of 5 to 9 digits. When the billing country is the U.S., the 9-digit postal code must follow this format:  `[5 digits][dash][4 digits]`  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format:  `[alpha][numeric][alpha][space] [numeric][alpha][numeric]`  Example A1B 2C3  This field is frequently used for Level II and Level III transactions. 
   * @member {String} shipFromPostalCode
   */
  exports.prototype['shipFromPostalCode'] = undefined;



  return exports;
}));


