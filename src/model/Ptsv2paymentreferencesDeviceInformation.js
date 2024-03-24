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
    root.CyberSource.Ptsv2paymentreferencesDeviceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentreferencesDeviceInformation model module.
   * @module model/Ptsv2paymentreferencesDeviceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentreferencesDeviceInformation</code>.
   * @alias module:model/Ptsv2paymentreferencesDeviceInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Ptsv2paymentreferencesDeviceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentreferencesDeviceInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentreferencesDeviceInformation} The populated <code>Ptsv2paymentreferencesDeviceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('userAgent')) {
        obj['userAgent'] = ApiClient.convertToType(data['userAgent'], 'String');
      }
    }
    return obj;
  }

  /**
   * IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field. 
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * The device type at the client side.
   * @member {String} deviceType
   */
  exports.prototype['deviceType'] = undefined;
  /**
   * ../../../commons/definitions/device.yaml#/properties/id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Customer's browser as identified from the HTTP header data. For example, `Mozilla` is the value that identifies the Netscape browser. 
   * @member {String} userAgent
   */
  exports.prototype['userAgent'] = undefined;



  return exports;
}));


