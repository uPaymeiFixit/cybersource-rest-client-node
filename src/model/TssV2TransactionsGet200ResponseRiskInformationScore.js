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
    root.CyberSource.TssV2TransactionsGet200ResponseRiskInformationScore = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseRiskInformationScore model module.
   * @module model/TssV2TransactionsGet200ResponseRiskInformationScore
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseRiskInformationScore</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseRiskInformationScore
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseRiskInformationScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseRiskInformationScore} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseRiskInformationScore} The populated <code>TssV2TransactionsGet200ResponseRiskInformationScore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('factorCodes')) {
        obj['factorCodes'] = ApiClient.convertToType(data['factorCodes'], ['String']);
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Array of factor codes.
   * @member {Array.<String>} factorCodes
   */
  exports.prototype['factorCodes'] = undefined;
  /**
   * The description for this field is not available. 
   * @member {Number} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


