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
    define(['ApiClient', 'model/ECheckConfigCommonInternalOnly', 'model/ECheckConfigCommonProcessors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ECheckConfigCommonInternalOnly'), require('./ECheckConfigCommonProcessors'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ECheckConfigCommon = factory(root.CyberSource.ApiClient, root.CyberSource.ECheckConfigCommonInternalOnly, root.CyberSource.ECheckConfigCommonProcessors);
  }
}(this, function(ApiClient, ECheckConfigCommonInternalOnly, ECheckConfigCommonProcessors) {
  'use strict';




  /**
   * The ECheckConfigCommon model module.
   * @module model/ECheckConfigCommon
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ECheckConfigCommon</code>.
   * @alias module:model/ECheckConfigCommon
   * @class
   * @param accountHolderName {String} Mandatory  Name on Merchant's Bank Account Only ASCII (Hex 20 to Hex 7E) 
   * @param accountType {String} Mandatory  Type of account for Merchant's Bank Account Possible values: - checking - savings - corporatechecking - corporatesavings 
   * @param accountRoutingNumber {String} Mandatory  Routing number for Merchant's Bank Account US Account Routing Number 
   * @param accountNumber {String} Mandatory  Account number for Merchant's Bank Account 
   */
  var exports = function(accountHolderName, accountType, accountRoutingNumber, accountNumber) {
    var _this = this;



    _this['accountHolderName'] = accountHolderName;
    _this['accountType'] = accountType;
    _this['accountRoutingNumber'] = accountRoutingNumber;
    _this['accountNumber'] = accountNumber;
  };

  /**
   * Constructs a <code>ECheckConfigCommon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ECheckConfigCommon} obj Optional instance to populate.
   * @return {module:model/ECheckConfigCommon} The populated <code>ECheckConfigCommon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('processors')) {
        obj['processors'] = ApiClient.convertToType(data['processors'], {'String': ECheckConfigCommonProcessors});
      }
      if (data.hasOwnProperty('internalOnly')) {
        obj['internalOnly'] = ECheckConfigCommonInternalOnly.constructFromObject(data['internalOnly']);
      }
      if (data.hasOwnProperty('accountHolderName')) {
        obj['accountHolderName'] = ApiClient.convertToType(data['accountHolderName'], 'String');
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('accountRoutingNumber')) {
        obj['accountRoutingNumber'] = ApiClient.convertToType(data['accountRoutingNumber'], 'String');
      }
      if (data.hasOwnProperty('accountNumber')) {
        obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, module:model/ECheckConfigCommonProcessors>} processors
   */
  exports.prototype['processors'] = undefined;
  /**
   * @member {module:model/ECheckConfigCommonInternalOnly} internalOnly
   */
  exports.prototype['internalOnly'] = undefined;
  /**
   * Mandatory  Name on Merchant's Bank Account Only ASCII (Hex 20 to Hex 7E) 
   * @member {String} accountHolderName
   */
  exports.prototype['accountHolderName'] = undefined;
  /**
   * Mandatory  Type of account for Merchant's Bank Account Possible values: - checking - savings - corporatechecking - corporatesavings 
   * @member {String} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * Mandatory  Routing number for Merchant's Bank Account US Account Routing Number 
   * @member {String} accountRoutingNumber
   */
  exports.prototype['accountRoutingNumber'] = undefined;
  /**
   * Mandatory  Account number for Merchant's Bank Account 
   * @member {String} accountNumber
   */
  exports.prototype['accountNumber'] = undefined;



  return exports;
}));


