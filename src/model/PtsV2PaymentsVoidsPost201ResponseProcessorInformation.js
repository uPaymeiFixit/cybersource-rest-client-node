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
    root.CyberSource.PtsV2PaymentsVoidsPost201ResponseProcessorInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsVoidsPost201ResponseProcessorInformation model module.
   * @module model/PtsV2PaymentsVoidsPost201ResponseProcessorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsVoidsPost201ResponseProcessorInformation</code>.
   * @alias module:model/PtsV2PaymentsVoidsPost201ResponseProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2PaymentsVoidsPost201ResponseProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsVoidsPost201ResponseProcessorInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsVoidsPost201ResponseProcessorInformation} The populated <code>PtsV2PaymentsVoidsPost201ResponseProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization.  #### AIBMS If this value is `08`, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: `aa,bb` with the two values separated by a comma and where: - `aa` is the two-digit error message from Atos. - `bb` is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example `2:R06`  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the `responseCategoryCode` field. 
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;



  return exports;
}));

