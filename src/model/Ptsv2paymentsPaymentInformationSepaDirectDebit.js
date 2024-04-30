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
    root.CyberSource.Ptsv2paymentsPaymentInformationSepaDirectDebit = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsPaymentInformationSepaDirectDebit model module.
   * @module model/Ptsv2paymentsPaymentInformationSepaDirectDebit
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPaymentInformationSepaDirectDebit</code>.
   * @alias module:model/Ptsv2paymentsPaymentInformationSepaDirectDebit
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Ptsv2paymentsPaymentInformationSepaDirectDebit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPaymentInformationSepaDirectDebit} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPaymentInformationSepaDirectDebit} The populated <code>Ptsv2paymentsPaymentInformationSepaDirectDebit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('signatureDate')) {
        obj['signatureDate'] = ApiClient.convertToType(data['signatureDate'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Mandate reference as returned on the first transaction in the sequence 
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * Date of the initial transaction, format is YYYY-MM-DD. Date can be taken from the finaltimestamp of the SUCCEEDED notification for the first transaction in the sequence. 
   * @member {String} signatureDate
   */
  exports.prototype['signatureDate'] = undefined;
  /**
   * Valid URL pointing to the SEPA mandate, needs to be accessible by our risk and compliance department. 
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Sequence type of the direct debit, defaults to \"oneOff\". Valid values: oneOff The direct debit is executed once. first First direct debit in a series of recurring ones. 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


