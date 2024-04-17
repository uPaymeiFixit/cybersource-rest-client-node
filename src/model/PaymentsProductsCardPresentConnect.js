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
    define(['ApiClient', 'model/PaymentsProductsCardPresentConnectConfigurationInformation', 'model/PaymentsProductsCardPresentConnectSubscriptionInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsCardPresentConnectConfigurationInformation'), require('./PaymentsProductsCardPresentConnectSubscriptionInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentsProductsCardPresentConnect = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsCardPresentConnectConfigurationInformation, root.CyberSource.PaymentsProductsCardPresentConnectSubscriptionInformation);
  }
}(this, function(ApiClient, PaymentsProductsCardPresentConnectConfigurationInformation, PaymentsProductsCardPresentConnectSubscriptionInformation) {
  'use strict';




  /**
   * The PaymentsProductsCardPresentConnect model module.
   * @module model/PaymentsProductsCardPresentConnect
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsCardPresentConnect</code>.
   * @alias module:model/PaymentsProductsCardPresentConnect
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentsProductsCardPresentConnect</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsCardPresentConnect} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsCardPresentConnect} The populated <code>PaymentsProductsCardPresentConnect</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionInformation')) {
        obj['subscriptionInformation'] = PaymentsProductsCardPresentConnectSubscriptionInformation.constructFromObject(data['subscriptionInformation']);
      }
      if (data.hasOwnProperty('configurationInformation')) {
        obj['configurationInformation'] = PaymentsProductsCardPresentConnectConfigurationInformation.constructFromObject(data['configurationInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsProductsCardPresentConnectSubscriptionInformation} subscriptionInformation
   */
  exports.prototype['subscriptionInformation'] = undefined;
  /**
   * @member {module:model/PaymentsProductsCardPresentConnectConfigurationInformation} configurationInformation
   */
  exports.prototype['configurationInformation'] = undefined;



  return exports;
}));


