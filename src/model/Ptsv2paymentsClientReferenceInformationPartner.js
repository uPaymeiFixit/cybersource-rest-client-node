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
    root.CyberSource.Ptsv2paymentsClientReferenceInformationPartner = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsClientReferenceInformationPartner model module.
   * @module model/Ptsv2paymentsClientReferenceInformationPartner
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsClientReferenceInformationPartner</code>.
   * @alias module:model/Ptsv2paymentsClientReferenceInformationPartner
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Ptsv2paymentsClientReferenceInformationPartner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsClientReferenceInformationPartner} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsClientReferenceInformationPartner} The populated <code>Ptsv2paymentsClientReferenceInformationPartner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('originalTransactionId')) {
        obj['originalTransactionId'] = ApiClient.convertToType(data['originalTransactionId'], 'String');
      }
      if (data.hasOwnProperty('developerId')) {
        obj['developerId'] = ApiClient.convertToType(data['developerId'], 'String');
      }
      if (data.hasOwnProperty('solutionId')) {
        obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyCertificationNumber')) {
        obj['thirdPartyCertificationNumber'] = ApiClient.convertToType(data['thirdPartyCertificationNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Value that links the previous transaction to the current follow-on request. This value is assigned by the client software that is installed on the POS terminal, which makes it available to the terminal's software and to CyberSource. Therefore, you can use this value to reconcile transactions between CyberSource and the terminal's software.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on these processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX  Optional field. 
   * @member {String} originalTransactionId
   */
  exports.prototype['originalTransactionId'] = undefined;
  /**
   * Identifier for the developer that helped integrate a partner solution to CyberSource.  Send this value in all requests that are sent through the partner solutions built by that developer. CyberSource assigns the ID to the developer.  **Note** When you see a developer ID of 999 in reports, the developer ID that was submitted is incorrect. 
   * @member {String} developerId
   */
  exports.prototype['developerId'] = undefined;
  /**
   * Identifier for the partner that is integrated to CyberSource.  Send this value in all requests that are sent through the partner solution. CyberSource assigns the ID to the partner.  **Note** When you see a solutionId of 999 in reports, the solutionId that was submitted is incorrect. 
   * @member {String} solutionId
   */
  exports.prototype['solutionId'] = undefined;
  /**
   * Value that identifies the application vendor and application version for a third party gateway. CyberSource provides you with this value during testing and validation. This field is supported only on CyberSource through VisaNet.  #### Used by **Authorization, Authorization Reversal, Capture, Credit, Incremental Authorization, and Void** Optional field.  #### PIN debit Required field for PIN debit credit, PIN debit purchase, or PIN debit reversal request. 
   * @member {String} thirdPartyCertificationNumber
   */
  exports.prototype['thirdPartyCertificationNumber'] = undefined;



  return exports;
}));


