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
    define(['ApiClient', 'model/ReportingV3ConversionDetailsGet200ResponseConversionDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ConversionDetailsGet200ResponseConversionDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ConversionDetailsGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails);
  }
}(this, function(ApiClient, ReportingV3ConversionDetailsGet200ResponseConversionDetails) {
  'use strict';




  /**
   * The ReportingV3ConversionDetailsGet200Response model module.
   * @module model/ReportingV3ConversionDetailsGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ConversionDetailsGet200Response</code>.
   * @alias module:model/ReportingV3ConversionDetailsGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ReportingV3ConversionDetailsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ConversionDetailsGet200Response} obj Optional instance to populate.
   * @return {module:model/ReportingV3ConversionDetailsGet200Response} The populated <code>ReportingV3ConversionDetailsGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
      }
      if (data.hasOwnProperty('conversionDetails')) {
        obj['conversionDetails'] = ApiClient.convertToType(data['conversionDetails'], [ReportingV3ConversionDetailsGet200ResponseConversionDetails]);
      }
    }
    return obj;
  }

  /**
   * Merchant Id
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {Date} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * @member {Date} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * @member {Array.<module:model/ReportingV3ConversionDetailsGet200ResponseConversionDetails>} conversionDetails
   */
  exports.prototype['conversionDetails'] = undefined;



  return exports;
}));


