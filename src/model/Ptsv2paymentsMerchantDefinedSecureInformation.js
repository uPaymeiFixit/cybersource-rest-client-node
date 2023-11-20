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
    root.CyberSource.Ptsv2paymentsMerchantDefinedSecureInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsMerchantDefinedSecureInformation model module.
   * @module model/Ptsv2paymentsMerchantDefinedSecureInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsMerchantDefinedSecureInformation</code>.
   * The object containing the secure data that the merchant defines. 
   * @alias module:model/Ptsv2paymentsMerchantDefinedSecureInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Ptsv2paymentsMerchantDefinedSecureInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsMerchantDefinedSecureInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsMerchantDefinedSecureInformation} The populated <code>Ptsv2paymentsMerchantDefinedSecureInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('secure1')) {
        obj['secure1'] = ApiClient.convertToType(data['secure1'], 'String');
      }
      if (data.hasOwnProperty('secure2')) {
        obj['secure2'] = ApiClient.convertToType(data['secure2'], 'String');
      }
      if (data.hasOwnProperty('secure3')) {
        obj['secure3'] = ApiClient.convertToType(data['secure3'], 'String');
      }
      if (data.hasOwnProperty('secure4')) {
        obj['secure4'] = ApiClient.convertToType(data['secure4'], 'String');
      }
    }
    return obj;
  }

  /**
   * The value you assign for your merchant-secure data field 1. 
   * @member {String} secure1
   */
  exports.prototype['secure1'] = undefined;
  /**
   * The value you assign for your merchant-secure data field 2. 
   * @member {String} secure2
   */
  exports.prototype['secure2'] = undefined;
  /**
   * The value you assign for your merchant-secure data field 3. 
   * @member {String} secure3
   */
  exports.prototype['secure3'] = undefined;
  /**
   * The value you assign for your merchant-secure data field 4. 
   * @member {String} secure4
   */
  exports.prototype['secure4'] = undefined;



  return exports;
}));

