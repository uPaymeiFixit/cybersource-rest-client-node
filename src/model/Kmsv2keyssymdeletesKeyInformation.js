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
    root.CyberSource.Kmsv2keyssymdeletesKeyInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Kmsv2keyssymdeletesKeyInformation model module.
   * @module model/Kmsv2keyssymdeletesKeyInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Kmsv2keyssymdeletesKeyInformation</code>.
   * key information 
   * @alias module:model/Kmsv2keyssymdeletesKeyInformation
   * @class
   * @param organizationId {String} Merchant Id 
   * @param keyId {String} Key Serial Number
   */
  var exports = function(organizationId, keyId) {
    var _this = this;

    _this['organizationId'] = organizationId;

    _this['keyId'] = keyId;
  };

  /**
   * Constructs a <code>Kmsv2keyssymdeletesKeyInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Kmsv2keyssymdeletesKeyInformation} obj Optional instance to populate.
   * @return {module:model/Kmsv2keyssymdeletesKeyInformation} The populated <code>Kmsv2keyssymdeletesKeyInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('referenceNumber')) {
        obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
      }
      if (data.hasOwnProperty('keyId')) {
        obj['keyId'] = ApiClient.convertToType(data['keyId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Merchant Id 
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Reference number is a unique identifier provided by the client along with the organization Id. This is an optional field provided solely for the client's convenience. If client specifies value for this field in the request, it is expected to be available in the response. 
   * @member {String} referenceNumber
   */
  exports.prototype['referenceNumber'] = undefined;
  /**
   * Key Serial Number
   * @member {String} keyId
   */
  exports.prototype['keyId'] = undefined;



  return exports;
}));


