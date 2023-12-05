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
    define(['ApiClient', 'model/PaymentsProductsPayerAuthenticationSubscriptionInformation', 'model/RiskProductsDecisionManagerConfigurationInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsPayerAuthenticationSubscriptionInformation'), require('./RiskProductsDecisionManagerConfigurationInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RiskProductsDecisionManager = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsPayerAuthenticationSubscriptionInformation, root.CyberSource.RiskProductsDecisionManagerConfigurationInformation);
  }
}(this, function(ApiClient, PaymentsProductsPayerAuthenticationSubscriptionInformation, RiskProductsDecisionManagerConfigurationInformation) {
  'use strict';




  /**
   * The RiskProductsDecisionManager model module.
   * @module model/RiskProductsDecisionManager
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskProductsDecisionManager</code>.
   * @alias module:model/RiskProductsDecisionManager
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RiskProductsDecisionManager</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskProductsDecisionManager} obj Optional instance to populate.
   * @return {module:model/RiskProductsDecisionManager} The populated <code>RiskProductsDecisionManager</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionInformation')) {
        obj['subscriptionInformation'] = PaymentsProductsPayerAuthenticationSubscriptionInformation.constructFromObject(data['subscriptionInformation']);
      }
      if (data.hasOwnProperty('configurationInformation')) {
        obj['configurationInformation'] = RiskProductsDecisionManagerConfigurationInformation.constructFromObject(data['configurationInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationSubscriptionInformation} subscriptionInformation
   */
  exports.prototype['subscriptionInformation'] = undefined;
  /**
   * @member {module:model/RiskProductsDecisionManagerConfigurationInformation} configurationInformation
   */
  exports.prototype['configurationInformation'] = undefined;



  return exports;
}));


