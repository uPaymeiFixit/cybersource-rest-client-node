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
    define(['ApiClient', 'model/PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypesCardTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypesCardTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypesCardTypes);
  }
}(this, function(ApiClient, PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypesCardTypes) {
  'use strict';




  /**
   * The PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes model module.
   * @module model/PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes</code>.
   * Object containing Payment Types supported
   * @alias module:model/PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes} obj Optional instance to populate.
   * @return {module:model/PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes} The populated <code>PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cardTypes')) {
        obj['cardTypes'] = PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypesCardTypes.constructFromObject(data['cardTypes']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsPaymentTypesCardTypes} cardTypes
   */
  exports.prototype['cardTypes'] = undefined;



  return exports;
}));

