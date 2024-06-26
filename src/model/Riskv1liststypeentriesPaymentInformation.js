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
    define(['ApiClient', 'model/Riskv1liststypeentriesPaymentInformationBank', 'model/Riskv1liststypeentriesPaymentInformationCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1liststypeentriesPaymentInformationBank'), require('./Riskv1liststypeentriesPaymentInformationCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1liststypeentriesPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1liststypeentriesPaymentInformationBank, root.CyberSource.Riskv1liststypeentriesPaymentInformationCard);
  }
}(this, function(ApiClient, Riskv1liststypeentriesPaymentInformationBank, Riskv1liststypeentriesPaymentInformationCard) {
  'use strict';




  /**
   * The Riskv1liststypeentriesPaymentInformation model module.
   * @module model/Riskv1liststypeentriesPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1liststypeentriesPaymentInformation</code>.
   * Contains the payment data for updating in List Management.
   * @alias module:model/Riskv1liststypeentriesPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Riskv1liststypeentriesPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1liststypeentriesPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1liststypeentriesPaymentInformation} The populated <code>Riskv1liststypeentriesPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Riskv1liststypeentriesPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = Riskv1liststypeentriesPaymentInformationBank.constructFromObject(data['bank']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1liststypeentriesPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Riskv1liststypeentriesPaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;



  return exports;
}));


