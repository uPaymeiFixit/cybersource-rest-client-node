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
    define(['ApiClient', 'model/PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201Response1PaymentInformationPaymentType = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201Response1PaymentInformationPaymentType model module.
   * @module model/PtsV2PaymentsPost201Response1PaymentInformationPaymentType
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201Response1PaymentInformationPaymentType</code>.
   * @alias module:model/PtsV2PaymentsPost201Response1PaymentInformationPaymentType
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201Response1PaymentInformationPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201Response1PaymentInformationPaymentType} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201Response1PaymentInformationPaymentType} The populated <code>PtsV2PaymentsPost201Response1PaymentInformationPaymentType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('method')) {
        obj['method'] = PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod.constructFromObject(data['method']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));


