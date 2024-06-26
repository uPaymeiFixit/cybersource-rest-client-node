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
    root.CyberSource.CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard model module.
   * @module model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard</code>.
   * @alias module:model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard
   * @class
   * @param merchantId {String} MasterCard merchant identified number
   * @param interbankCardAssociationNumber {String} Number assigned by MasterCard to a financial institution, third-party processor or other member to identify the member in transaction.
   */
  var exports = function(merchantId, interbankCardAssociationNumber) {
    var _this = this;

    _this['merchantId'] = merchantId;
    _this['interbankCardAssociationNumber'] = interbankCardAssociationNumber;

  };

  /**
   * Constructs a <code>CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard} obj Optional instance to populate.
   * @return {module:model/CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard} The populated <code>CommerceSolutionsProductsAccountUpdaterConfigurationInformationConfigurationsMasterCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
      if (data.hasOwnProperty('interbankCardAssociationNumber')) {
        obj['interbankCardAssociationNumber'] = ApiClient.convertToType(data['interbankCardAssociationNumber'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * MasterCard merchant identified number
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;
  /**
   * Number assigned by MasterCard to a financial institution, third-party processor or other member to identify the member in transaction.
   * @member {String} interbankCardAssociationNumber
   */
  exports.prototype['interbankCardAssociationNumber'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


