/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    root.CyberSource.InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus model module.
   * @module model/InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus</code>.
   * @alias module:model/InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus} obj Optional instance to populate.
   * @return {module:model/InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus} The populated <code>InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configurationId')) {
        obj['configurationId'] = ApiClient.convertToType(data['configurationId'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [{'String': 'String'}]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * This is NOT for MVP
   * @member {String} configurationId
   */
  exports.prototype['configurationId'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * @member {module:model/InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * @member {Array.<Object.<String, String>>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",
    /**
     * value: "PARTIAL"
     * @const
     */
    "PARTIAL": "PARTIAL",
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "NOT_SETUP"
     * @const
     */
    "NOT_SETUP": "NOT_SETUP"  };

  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "PENDING_PROVISIONING_PROCESS"
     * @const
     */
    "PENDING_PROVISIONING_PROCESS": "PENDING_PROVISIONING_PROCESS",
    /**
     * value: "MISSING_DATA"
     * @const
     */
    "MISSING_DATA": "MISSING_DATA",
    /**
     * value: "INVALID_DATA"
     * @const
     */
    "INVALID_DATA": "INVALID_DATA",
    /**
     * value: "DUPLICATE_FIELD"
     * @const
     */
    "DUPLICATE_FIELD": "DUPLICATE_FIELD",
    /**
     * value: "NOT_APPLICABLE"
     * @const
     */
    "NOT_APPLICABLE": "NOT_APPLICABLE"  };


  return exports;
}));


