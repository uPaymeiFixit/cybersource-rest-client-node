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
    define(['ApiClient', 'model/ReportingV3ReportsGet200ResponseLinkReportDownload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ReportsGet200ResponseLinkReportDownload'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ReportsGet200ResponseLink = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ReportsGet200ResponseLinkReportDownload);
  }
}(this, function(ApiClient, ReportingV3ReportsGet200ResponseLinkReportDownload) {
  'use strict';




  /**
   * The ReportingV3ReportsGet200ResponseLink model module.
   * @module model/ReportingV3ReportsGet200ResponseLink
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ReportsGet200ResponseLink</code>.
   * @alias module:model/ReportingV3ReportsGet200ResponseLink
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportingV3ReportsGet200ResponseLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ReportsGet200ResponseLink} obj Optional instance to populate.
   * @return {module:model/ReportingV3ReportsGet200ResponseLink} The populated <code>ReportingV3ReportsGet200ResponseLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reportDownload')) {
        obj['reportDownload'] = ReportingV3ReportsGet200ResponseLinkReportDownload.constructFromObject(data['reportDownload']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ReportingV3ReportsGet200ResponseLinkReportDownload} reportDownload
   */
  exports.prototype['reportDownload'] = undefined;



  return exports;
}));


