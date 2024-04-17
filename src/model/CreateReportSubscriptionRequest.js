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
    define(['ApiClient', 'model/Reportingv3reportsReportPreferences'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Reportingv3reportsReportPreferences'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreateReportSubscriptionRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Reportingv3reportsReportPreferences);
  }
}(this, function(ApiClient, Reportingv3reportsReportPreferences) {
  'use strict';




  /**
   * The CreateReportSubscriptionRequest model module.
   * @module model/CreateReportSubscriptionRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateReportSubscriptionRequest</code>.
   * @alias module:model/CreateReportSubscriptionRequest
   * @class
   * @param reportDefinitionName {String} Valid Report Definition Name
   * @param reportFields {Array.<String>} 
   * @param reportMimeType {String} Valid values: - application/xml - text/csv 
   * @param reportFrequency {String} 'The frequency for which subscription is created.' **NOTE: Do not document USER_DEFINED Frequency field in developer center** Valid Values:   - 'DAILY'   - 'WEEKLY'   - 'MONTHLY'   - 'USER_DEFINED' 
   * @param reportName {String} 
   * @param timezone {String} 
   * @param startTime {String} The hour at which the report generation should start. It should be in hhmm format.
   */
  var exports = function(reportDefinitionName, reportFields, reportMimeType, reportFrequency, reportName, timezone, startTime) {
    var _this = this;


    _this['reportDefinitionName'] = reportDefinitionName;
    _this['reportFields'] = reportFields;
    _this['reportMimeType'] = reportMimeType;
    _this['reportFrequency'] = reportFrequency;

    _this['reportName'] = reportName;
    _this['timezone'] = timezone;
    _this['startTime'] = startTime;




  };

  /**
   * Constructs a <code>CreateReportSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateReportSubscriptionRequest} obj Optional instance to populate.
   * @return {module:model/CreateReportSubscriptionRequest} The populated <code>CreateReportSubscriptionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('reportDefinitionName')) {
        obj['reportDefinitionName'] = ApiClient.convertToType(data['reportDefinitionName'], 'String');
      }
      if (data.hasOwnProperty('reportFields')) {
        obj['reportFields'] = ApiClient.convertToType(data['reportFields'], ['String']);
      }
      if (data.hasOwnProperty('reportMimeType')) {
        obj['reportMimeType'] = ApiClient.convertToType(data['reportMimeType'], 'String');
      }
      if (data.hasOwnProperty('reportFrequency')) {
        obj['reportFrequency'] = ApiClient.convertToType(data['reportFrequency'], 'String');
      }
      if (data.hasOwnProperty('reportInterval')) {
        obj['reportInterval'] = ApiClient.convertToType(data['reportInterval'], 'String');
      }
      if (data.hasOwnProperty('reportName')) {
        obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
      }
      if (data.hasOwnProperty('startDay')) {
        obj['startDay'] = ApiClient.convertToType(data['startDay'], 'Number');
      }
      if (data.hasOwnProperty('reportFilters')) {
        obj['reportFilters'] = ApiClient.convertToType(data['reportFilters'], {'String': ['String']});
      }
      if (data.hasOwnProperty('reportPreferences')) {
        obj['reportPreferences'] = Reportingv3reportsReportPreferences.constructFromObject(data['reportPreferences']);
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Valid CyberSource organizationId
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Valid Report Definition Name
   * @member {String} reportDefinitionName
   */
  exports.prototype['reportDefinitionName'] = undefined;
  /**
   * @member {Array.<String>} reportFields
   */
  exports.prototype['reportFields'] = undefined;
  /**
   * Valid values: - application/xml - text/csv 
   * @member {String} reportMimeType
   */
  exports.prototype['reportMimeType'] = undefined;
  /**
   * 'The frequency for which subscription is created.' **NOTE: Do not document USER_DEFINED Frequency field in developer center** Valid Values:   - 'DAILY'   - 'WEEKLY'   - 'MONTHLY'   - 'USER_DEFINED' 
   * @member {String} reportFrequency
   */
  exports.prototype['reportFrequency'] = undefined;
  /**
   * If the reportFrequency is User-defined, reportInterval should be in **ISO 8601 time format** Please refer the following link to know more about ISO 8601 format.[Rfc Time Format](https://en.wikipedia.org/wiki/ISO_8601#Durations)  **Example time format for 2 hours and 30 Mins:**   - PT2H30M **NOTE: Do not document reportInterval field in developer center** 
   * @member {String} reportInterval
   */
  exports.prototype['reportInterval'] = undefined;
  /**
   * @member {String} reportName
   */
  exports.prototype['reportName'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * The hour at which the report generation should start. It should be in hhmm format.
   * @member {String} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * This is the start day if the frequency is WEEKLY or MONTHLY. The value varies from 1-7 for WEEKLY and 1-31 for MONTHLY. For WEEKLY 1 means Sunday and 7 means Saturday. By default the value is 1.
   * @member {Number} startDay
   */
  exports.prototype['startDay'] = undefined;
  /**
   * List of filters to apply
   * @member {Object.<String, Array.<String>>} reportFilters
   */
  exports.prototype['reportFilters'] = undefined;
  /**
   * @member {module:model/Reportingv3reportsReportPreferences} reportPreferences
   */
  exports.prototype['reportPreferences'] = undefined;
  /**
   * Valid GroupName
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;



  return exports;
}));


