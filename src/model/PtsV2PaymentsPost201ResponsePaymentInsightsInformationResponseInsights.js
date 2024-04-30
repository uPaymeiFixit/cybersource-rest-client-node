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
    root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights model module.
   * @module model/PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights} The populated <code>PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('categoryCode')) {
        obj['categoryCode'] = ApiClient.convertToType(data['categoryCode'], 'String');
      }
      if (data.hasOwnProperty('processorRawName')) {
        obj['processorRawName'] = ApiClient.convertToType(data['processorRawName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Categorization of response message from processor  Possible Values: - `APPROVED` - `ISSUER_WILL_NEVER_APPROVE` - `ISSUER_CANT_APPROVE_AT_THIS_TIME` - `ISSUER_CANT_APPROVE_WITH_THESE_DETAILS` - `GENERIC_ERROR` - `OTHERS` - `MATCH_NOT_FOUND` 
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Categorization Code of response message from processor  Possible Values: - `01` : Issuer Will Never Approve - `02` : Issuer Can't Approve at this Time - `03` : Issuer Can't Approve with these Details - `04` : Generic Error - `98` : Others - `99` : Payment Insights Response Category Match Not Found 
   * @member {String} categoryCode
   */
  exports.prototype['categoryCode'] = undefined;
  /**
   * Raw name of the processor used for the transaction processing, especially useful during acquirer swing to see which processor transaction settled with 
   * @member {String} processorRawName
   */
  exports.prototype['processorRawName'] = undefined;



  return exports;
}));


