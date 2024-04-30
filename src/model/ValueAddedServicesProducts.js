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
    define(['ApiClient', 'model/PaymentsProductsTax'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsTax'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ValueAddedServicesProducts = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsTax);
  }
}(this, function(ApiClient, PaymentsProductsTax) {
  'use strict';




  /**
   * The ValueAddedServicesProducts model module.
   * @module model/ValueAddedServicesProducts
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ValueAddedServicesProducts</code>.
   * @alias module:model/ValueAddedServicesProducts
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ValueAddedServicesProducts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValueAddedServicesProducts} obj Optional instance to populate.
   * @return {module:model/ValueAddedServicesProducts} The populated <code>ValueAddedServicesProducts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reporting')) {
        obj['reporting'] = PaymentsProductsTax.constructFromObject(data['reporting']);
      }
      if (data.hasOwnProperty('transactionSearch')) {
        obj['transactionSearch'] = PaymentsProductsTax.constructFromObject(data['transactionSearch']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsProductsTax} reporting
   */
  exports.prototype['reporting'] = undefined;
  /**
   * @member {module:model/PaymentsProductsTax} transactionSearch
   */
  exports.prototype['transactionSearch'] = undefined;



  return exports;
}));


