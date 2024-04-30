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
    root.CyberSource.PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation model module.
   * @module model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation</code>.
   * @alias module:model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation} The populated <code>PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('approvalCode')) {
        obj['approvalCode'] = ApiClient.convertToType(data['approvalCode'], 'String');
      }
      if (data.hasOwnProperty('reasonCode')) {
        obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
      }
      if (data.hasOwnProperty('reversalSubmitted')) {
        obj['reversalSubmitted'] = ApiClient.convertToType(data['reversalSubmitted'], 'String');
      }
    }
    return obj;
  }

  /**
   * The authorization code returned by the processor.
   * @member {String} approvalCode
   */
  exports.prototype['approvalCode'] = undefined;
  /**
   * Reply flag for the original transaction.
   * @member {String} reasonCode
   */
  exports.prototype['reasonCode'] = undefined;
  /**
   * Flag indicating whether a full authorization reversal was successfully submitted.  Possible values: - Y: The authorization reversal was successfully submitted. - N: The authorization reversal was not successfully submitted. You must send a credit request for a refund.  This field is supported only for **FDC Nashville Global**. 
   * @member {String} reversalSubmitted
   */
  exports.prototype['reversalSubmitted'] = undefined;



  return exports;
}));


