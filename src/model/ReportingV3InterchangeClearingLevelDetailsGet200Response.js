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
    define(['ApiClient', 'model/ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails);
  }
}(this, function(ApiClient, ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails) {
  'use strict';




  /**
   * The ReportingV3InterchangeClearingLevelDetailsGet200Response model module.
   * @module model/ReportingV3InterchangeClearingLevelDetailsGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3InterchangeClearingLevelDetailsGet200Response</code>.
   * @alias module:model/ReportingV3InterchangeClearingLevelDetailsGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ReportingV3InterchangeClearingLevelDetailsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3InterchangeClearingLevelDetailsGet200Response} obj Optional instance to populate.
   * @return {module:model/ReportingV3InterchangeClearingLevelDetailsGet200Response} The populated <code>ReportingV3InterchangeClearingLevelDetailsGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('interchangeClearingLevelDetails')) {
        obj['interchangeClearingLevelDetails'] = ApiClient.convertToType(data['interchangeClearingLevelDetails'], [ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails]);
      }
    }
    return obj;
  }

  /**
   * Valid report Start Date in **ISO 8601 format**. Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14  **Example:** - yyyy-MM-dd'T'HH:mm:ss.SSSZZ 
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Valid report Start Date in **ISO 8601 format**. 
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * List of InterchangeClearingLevelDetail
   * @member {Array.<module:model/ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails>} interchangeClearingLevelDetails
   */
  exports.prototype['interchangeClearingLevelDetails'] = undefined;



  return exports;
}));


