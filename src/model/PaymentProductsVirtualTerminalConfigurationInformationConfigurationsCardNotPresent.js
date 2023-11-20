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
    define(['ApiClient', 'model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformation', 'model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentReceiptInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformation'), require('./PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentReceiptInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformation, root.CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentReceiptInformation);
  }
}(this, function(ApiClient, PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformation, PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentReceiptInformation) {
  'use strict';




  /**
   * The PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent model module.
   * @module model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent</code>.
   * @alias module:model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent} obj Optional instance to populate.
   * @return {module:model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent} The populated <code>PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('globalPaymentInformation')) {
        obj['globalPaymentInformation'] = PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformation.constructFromObject(data['globalPaymentInformation']);
      }
      if (data.hasOwnProperty('receiptInformation')) {
        obj['receiptInformation'] = PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentReceiptInformation.constructFromObject(data['receiptInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformation} globalPaymentInformation
   */
  exports.prototype['globalPaymentInformation'] = undefined;
  /**
   * @member {module:model/PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentReceiptInformation} receiptInformation
   */
  exports.prototype['receiptInformation'] = undefined;



  return exports;
}));

