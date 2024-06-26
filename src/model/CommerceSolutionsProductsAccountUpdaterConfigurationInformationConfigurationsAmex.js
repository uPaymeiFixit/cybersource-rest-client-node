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
    root.CyberSource.CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex model module.
   * @module model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex</code>.
   * @alias module:model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex} obj Optional instance to populate.
   * @return {module:model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex} The populated <code>CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsAmex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('seNumber')) {
        obj['seNumber'] = ApiClient.convertToType(data['seNumber'], 'String');
      }
      if (data.hasOwnProperty('subscriberId')) {
        obj['subscriberId'] = ApiClient.convertToType(data['subscriberId'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Type of mode. Valid values are `tokenApi` or `dailyHarvest`.
   * @member {String} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * @member {String} seNumber
   */
  exports.prototype['seNumber'] = undefined;
  /**
   * @member {String} subscriberId
   */
  exports.prototype['subscriberId'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


