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
    root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions model module.
   * @module model/TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions} The populated <code>TssV2TransactionsGet200ResponseProcessingInformationCaptureOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalCaptureCount')) {
        obj['totalCaptureCount'] = ApiClient.convertToType(data['totalCaptureCount'], 'Number');
      }
      if (data.hasOwnProperty('captureSequenceNumber')) {
        obj['captureSequenceNumber'] = ApiClient.convertToType(data['captureSequenceNumber'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Total number of captures when requesting multiple partial captures for one payment. Used along with `captureSequenceNumber` field to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - `captureSequenceNumber = 2`, and   - `totalCaptureCount = 5` 
   * @member {Number} totalCaptureCount
   */
  exports.prototype['totalCaptureCount'] = undefined;
  /**
   * Capture number when requesting multiple partial captures for one authorization. Used along with `totalCaptureCount` to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - `captureSequenceNumber_ = 2`, and   - `totalCaptureCount = 5` 
   * @member {Number} captureSequenceNumber
   */
  exports.prototype['captureSequenceNumber'] = undefined;



  return exports;
}));


