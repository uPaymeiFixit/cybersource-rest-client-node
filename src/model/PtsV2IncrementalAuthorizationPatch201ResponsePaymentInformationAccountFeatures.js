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
    root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures model module.
   * @module model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures</code>.
   * @alias module:model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures} obj Optional instance to populate.
   * @return {module:model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures} The populated <code>PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
    }
    return obj;
  }

  /**
   * #### GPX Mastercard product ID associated with the primary account number (PAN). Returned by authorization service.  #### CyberSource through VisaNet Visa or Mastercard product ID that is associated with the primary account number (PAN). For descriptions of the Visa product IDs, see the Product ID table on the [Visa Request & Response Codes web page.](https://developer.visa.com/guides/request_response_codes)  Data Length: String (3)  #### GPN Visa or Mastercard product ID that is associated with the primary account number (PAN). For descriptions of the Visa product IDs, see the Product ID table on the [Visa Request & Response Codes web page.](https://developer.visa.com/guides/request_response_codes)  Data Length: String (3)  #### Worldpay VAP **Important** Before using this field on Worldpay VAP, you must contact CyberSource Customer Support to have your account configured for this feature.  Type of card used in the transaction. The only possible value is: - `PREPAID`: Prepaid Card  Data Length: String (7)  #### RBS WorldPay Atlanta Type of card used in the transaction. Possible values: - `B`: Business Card - `O`: Noncommercial Card - `R`: Corporate Card - `S`: Purchase Card - `Blank`: Purchase card not supported  Data Length: String (1) 
   * @member {String} category
   */
  exports.prototype['category'] = undefined;



  return exports;
}));


