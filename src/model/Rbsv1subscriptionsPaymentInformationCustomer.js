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
    root.CyberSource.Rbsv1subscriptionsPaymentInformationCustomer = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Rbsv1subscriptionsPaymentInformationCustomer model module.
   * @module model/Rbsv1subscriptionsPaymentInformationCustomer
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Rbsv1subscriptionsPaymentInformationCustomer</code>.
   * @alias module:model/Rbsv1subscriptionsPaymentInformationCustomer
   * @class
   * @param id {String} Unique identifier for the Customer token used in the transaction. When you include this value in your request, many of the fields that are normally required for an authorization or credit become optional. 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>Rbsv1subscriptionsPaymentInformationCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rbsv1subscriptionsPaymentInformationCustomer} obj Optional instance to populate.
   * @return {module:model/Rbsv1subscriptionsPaymentInformationCustomer} The populated <code>Rbsv1subscriptionsPaymentInformationCustomer</code> instance.
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
   * Unique identifier for the Customer token used in the transaction. When you include this value in your request, many of the fields that are normally required for an authorization or credit become optional. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


