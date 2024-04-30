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
    root.CyberSource.PayerAuthConfigCardTypesVerifiedByVisaCurrencies = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PayerAuthConfigCardTypesVerifiedByVisaCurrencies model module.
   * @module model/PayerAuthConfigCardTypesVerifiedByVisaCurrencies
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PayerAuthConfigCardTypesVerifiedByVisaCurrencies</code>.
   * @alias module:model/PayerAuthConfigCardTypesVerifiedByVisaCurrencies
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PayerAuthConfigCardTypesVerifiedByVisaCurrencies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayerAuthConfigCardTypesVerifiedByVisaCurrencies} obj Optional instance to populate.
   * @return {module:model/PayerAuthConfigCardTypesVerifiedByVisaCurrencies} The populated <code>PayerAuthConfigCardTypesVerifiedByVisaCurrencies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencyCodes')) {
        obj['currencyCodes'] = ApiClient.convertToType(data['currencyCodes'], ['String']);
      }
      if (data.hasOwnProperty('acquirerId')) {
        obj['acquirerId'] = ApiClient.convertToType(data['acquirerId'], 'String');
      }
      if (data.hasOwnProperty('processorMerchantId')) {
        obj['processorMerchantId'] = ApiClient.convertToType(data['processorMerchantId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} currencyCodes
   */
  exports.prototype['currencyCodes'] = undefined;
  /**
   * The Acquirer ID value, often referred to as the Acquirer BIN, is specific to an Acquirer. The value is created by Cardinal in their system and the Acquirer may not know that the Acquirer ID is different from their Acquiring BIN. It is most often the Acquiring BIN + \"-1000\" but the trailing character can be different. **Note** We will need to double check with Cardinal before setting up the Portfolio Template in production. 
   * @member {String} acquirerId
   */
  exports.prototype['acquirerId'] = undefined;
  /**
   * Processor Merchant ID is the Merchant ID assigned by your acquiring bank. This Merchant ID should also be used by your bank to register your account to the card scheme Directory Server for processing Payer Authentication services. 
   * @member {String} processorMerchantId
   */
  exports.prototype['processorMerchantId'] = undefined;



  return exports;
}));


