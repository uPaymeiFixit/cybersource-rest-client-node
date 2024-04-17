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
    define(['ApiClient', 'model/ReportingV3NetFundingsGet200ResponseNetFundingSummaries', 'model/ReportingV3NetFundingsGet200ResponseTotalPurchases'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3NetFundingsGet200ResponseNetFundingSummaries'), require('./ReportingV3NetFundingsGet200ResponseTotalPurchases'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3NetFundingsGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries, root.CyberSource.ReportingV3NetFundingsGet200ResponseTotalPurchases);
  }
}(this, function(ApiClient, ReportingV3NetFundingsGet200ResponseNetFundingSummaries, ReportingV3NetFundingsGet200ResponseTotalPurchases) {
  'use strict';




  /**
   * The ReportingV3NetFundingsGet200Response model module.
   * @module model/ReportingV3NetFundingsGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3NetFundingsGet200Response</code>.
   * @alias module:model/ReportingV3NetFundingsGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ReportingV3NetFundingsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3NetFundingsGet200Response} obj Optional instance to populate.
   * @return {module:model/ReportingV3NetFundingsGet200Response} The populated <code>ReportingV3NetFundingsGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
      }
      if (data.hasOwnProperty('netFundingSummaries')) {
        obj['netFundingSummaries'] = ApiClient.convertToType(data['netFundingSummaries'], [ReportingV3NetFundingsGet200ResponseNetFundingSummaries]);
      }
      if (data.hasOwnProperty('totalPurchases')) {
        obj['totalPurchases'] = ApiClient.convertToType(data['totalPurchases'], [ReportingV3NetFundingsGet200ResponseTotalPurchases]);
      }
      if (data.hasOwnProperty('totalRefunds')) {
        obj['totalRefunds'] = ApiClient.convertToType(data['totalRefunds'], [ReportingV3NetFundingsGet200ResponseTotalPurchases]);
      }
      if (data.hasOwnProperty('totalFees')) {
        obj['totalFees'] = ApiClient.convertToType(data['totalFees'], [ReportingV3NetFundingsGet200ResponseTotalPurchases]);
      }
      if (data.hasOwnProperty('totalChargebacks')) {
        obj['totalChargebacks'] = ApiClient.convertToType(data['totalChargebacks'], [ReportingV3NetFundingsGet200ResponseTotalPurchases]);
      }
      if (data.hasOwnProperty('netTotal')) {
        obj['netTotal'] = ApiClient.convertToType(data['netTotal'], [ReportingV3NetFundingsGet200ResponseTotalPurchases]);
      }
    }
    return obj;
  }

  /**
   * Valid report Start Date in **ISO 8601 format**. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example:** - yyyy-MM-dd'T'HH:mm:ss.SSSZZ 
   * @member {Date} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * Valid report End Date in **ISO 8601 format** **Example date format:** - yyyy-MM-dd'T'HH:mm:ss.SSSZZ 
   * @member {Date} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * List of Netfunding summary objects
   * @member {Array.<module:model/ReportingV3NetFundingsGet200ResponseNetFundingSummaries>} netFundingSummaries
   */
  exports.prototype['netFundingSummaries'] = undefined;
  /**
   * List of total purchases currency wise
   * @member {Array.<module:model/ReportingV3NetFundingsGet200ResponseTotalPurchases>} totalPurchases
   */
  exports.prototype['totalPurchases'] = undefined;
  /**
   * List of total refunds currency wise
   * @member {Array.<module:model/ReportingV3NetFundingsGet200ResponseTotalPurchases>} totalRefunds
   */
  exports.prototype['totalRefunds'] = undefined;
  /**
   * List of total fees currency wise
   * @member {Array.<module:model/ReportingV3NetFundingsGet200ResponseTotalPurchases>} totalFees
   */
  exports.prototype['totalFees'] = undefined;
  /**
   * List of total chargebacks currency wise
   * @member {Array.<module:model/ReportingV3NetFundingsGet200ResponseTotalPurchases>} totalChargebacks
   */
  exports.prototype['totalChargebacks'] = undefined;
  /**
   * List of new total currency wise
   * @member {Array.<module:model/ReportingV3NetFundingsGet200ResponseTotalPurchases>} netTotal
   */
  exports.prototype['netTotal'] = undefined;



  return exports;
}));


