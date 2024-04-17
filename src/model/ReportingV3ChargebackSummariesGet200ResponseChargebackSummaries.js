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
    root.CyberSource.ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries model module.
   * @module model/ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries</code>.
   * @alias module:model/ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries} obj Optional instance to populate.
   * @return {module:model/ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries} The populated <code>ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Chargeback summary list count
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Summary Date
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Account Id
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;



  return exports;
}));


