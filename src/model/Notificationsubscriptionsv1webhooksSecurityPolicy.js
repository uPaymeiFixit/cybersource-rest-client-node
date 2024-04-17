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
    define(['ApiClient', 'model/Notificationsubscriptionsv1webhooksSecurityPolicyConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Notificationsubscriptionsv1webhooksSecurityPolicyConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy = factory(root.CyberSource.ApiClient, root.CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicyConfig);
  }
}(this, function(ApiClient, Notificationsubscriptionsv1webhooksSecurityPolicyConfig) {
  'use strict';




  /**
   * The Notificationsubscriptionsv1webhooksSecurityPolicy model module.
   * @module model/Notificationsubscriptionsv1webhooksSecurityPolicy
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Notificationsubscriptionsv1webhooksSecurityPolicy</code>.
   * The security option to authenticate with your API or client server.
   * @alias module:model/Notificationsubscriptionsv1webhooksSecurityPolicy
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Notificationsubscriptionsv1webhooksSecurityPolicy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notificationsubscriptionsv1webhooksSecurityPolicy} obj Optional instance to populate.
   * @return {module:model/Notificationsubscriptionsv1webhooksSecurityPolicy} The populated <code>Notificationsubscriptionsv1webhooksSecurityPolicy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('securityType')) {
        obj['securityType'] = ApiClient.convertToType(data['securityType'], 'String');
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = Notificationsubscriptionsv1webhooksSecurityPolicyConfig.constructFromObject(data['config']);
      }
    }
    return obj;
  }

  /**
   * Security Policy of the client server.
   * @member {String} securityType
   */
  exports.prototype['securityType'] = undefined;
  /**
   * @member {module:model/Notificationsubscriptionsv1webhooksSecurityPolicyConfig} config
   */
  exports.prototype['config'] = undefined;



  return exports;
}));


