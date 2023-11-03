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
    define(['ApiClient', 'model/PaymentProductsCardProcessingSubscriptionInformationFeatures'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentProductsCardProcessingSubscriptionInformationFeatures'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentProductsDifferentialFeeSubscriptionInformationFeatures = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentProductsCardProcessingSubscriptionInformationFeatures);
  }
}(this, function(ApiClient, PaymentProductsCardProcessingSubscriptionInformationFeatures) {
  'use strict';




  /**
   * The PaymentProductsDifferentialFeeSubscriptionInformationFeatures model module.
   * @module model/PaymentProductsDifferentialFeeSubscriptionInformationFeatures
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentProductsDifferentialFeeSubscriptionInformationFeatures</code>.
   * @alias module:model/PaymentProductsDifferentialFeeSubscriptionInformationFeatures
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentProductsDifferentialFeeSubscriptionInformationFeatures</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProductsDifferentialFeeSubscriptionInformationFeatures} obj Optional instance to populate.
   * @return {module:model/PaymentProductsDifferentialFeeSubscriptionInformationFeatures} The populated <code>PaymentProductsDifferentialFeeSubscriptionInformationFeatures</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('surcharge')) {
        obj['surcharge'] = PaymentProductsCardProcessingSubscriptionInformationFeatures.constructFromObject(data['surcharge']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentProductsCardProcessingSubscriptionInformationFeatures} surcharge
   */
  exports.prototype['surcharge'] = undefined;



  return exports;
}));


