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
    root.CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicyConfig = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Notificationsubscriptionsv1webhooksSecurityPolicyConfig model module.
   * @module model/Notificationsubscriptionsv1webhooksSecurityPolicyConfig
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Notificationsubscriptionsv1webhooksSecurityPolicyConfig</code>.
   * Optional configuration object for if your API or server requires oAuth for an incoming webhook.
   * @alias module:model/Notificationsubscriptionsv1webhooksSecurityPolicyConfig
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Notificationsubscriptionsv1webhooksSecurityPolicyConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notificationsubscriptionsv1webhooksSecurityPolicyConfig} obj Optional instance to populate.
   * @return {module:model/Notificationsubscriptionsv1webhooksSecurityPolicyConfig} The populated <code>Notificationsubscriptionsv1webhooksSecurityPolicyConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oAuthTokenExpiry')) {
        obj['oAuthTokenExpiry'] = ApiClient.convertToType(data['oAuthTokenExpiry'], 'String');
      }
      if (data.hasOwnProperty('oAuthURL')) {
        obj['oAuthURL'] = ApiClient.convertToType(data['oAuthURL'], 'String');
      }
      if (data.hasOwnProperty('oAuthTokenType')) {
        obj['oAuthTokenType'] = ApiClient.convertToType(data['oAuthTokenType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Token expiration for the oAuth server.
   * @member {String} oAuthTokenExpiry
   */
  exports.prototype['oAuthTokenExpiry'] = undefined;
  /**
   * Client direct endpoint to the oAuth server.
   * @member {String} oAuthURL
   */
  exports.prototype['oAuthURL'] = undefined;
  /**
   * Token type for the oAuth config.
   * @member {String} oAuthTokenType
   */
  exports.prototype['oAuthTokenType'] = undefined;



  return exports;
}));


