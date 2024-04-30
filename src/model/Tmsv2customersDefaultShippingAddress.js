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
    root.CyberSource.Tmsv2customersDefaultShippingAddress = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tmsv2customersDefaultShippingAddress model module.
   * @module model/Tmsv2customersDefaultShippingAddress
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersDefaultShippingAddress</code>.
   * @alias module:model/Tmsv2customersDefaultShippingAddress
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Tmsv2customersDefaultShippingAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersDefaultShippingAddress} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersDefaultShippingAddress} The populated <code>Tmsv2customersDefaultShippingAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Id of the Customers default Shipping Address 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


