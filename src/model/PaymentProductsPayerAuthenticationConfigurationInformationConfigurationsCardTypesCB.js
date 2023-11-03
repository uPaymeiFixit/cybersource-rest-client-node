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
    define(['ApiClient', 'model/PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisaCurrencies'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisaCurrencies'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisaCurrencies);
  }
}(this, function(ApiClient, PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisaCurrencies) {
  'use strict';




  /**
   * The PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB model module.
   * @module model/PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB</code>.
   * @alias module:model/PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB} obj Optional instance to populate.
   * @return {module:model/PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB} The populated <code>PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestorId')) {
        obj['requestorId'] = ApiClient.convertToType(data['requestorId'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('currencies')) {
        obj['currencies'] = ApiClient.convertToType(data['currencies'], [PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisaCurrencies]);
      }
    }
    return obj;
  }

  /**
   * The value is for 3DS2.0 and is a Directory Server assigned 3DS Requestor ID value. If this field is passed in request, it will override Requestor Id value that is configured on the Merchant's profile.
   * @member {String} requestorId
   */
  exports.prototype['requestorId'] = undefined;
  /**
   * @member {Boolean} enabled
   * @default true
   */
  exports.prototype['enabled'] = true;
  /**
   * @member {Array.<module:model/PaymentProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisaCurrencies>} currencies
   */
  exports.prototype['currencies'] = undefined;



  return exports;
}));


