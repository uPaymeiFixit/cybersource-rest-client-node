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
    define(['ApiClient', 'model/Ptsv2billingagreementsPaymentInformationCard', 'model/Ptsv2billingagreementsPaymentInformationTokenizedCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2billingagreementsPaymentInformationCard'), require('./Ptsv2billingagreementsPaymentInformationTokenizedCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2billingagreementsPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2billingagreementsPaymentInformationCard, root.CyberSource.Ptsv2billingagreementsPaymentInformationTokenizedCard);
  }
}(this, function(ApiClient, Ptsv2billingagreementsPaymentInformationCard, Ptsv2billingagreementsPaymentInformationTokenizedCard) {
  'use strict';




  /**
   * The Ptsv2billingagreementsPaymentInformation model module.
   * @module model/Ptsv2billingagreementsPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2billingagreementsPaymentInformation</code>.
   * @alias module:model/Ptsv2billingagreementsPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2billingagreementsPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2billingagreementsPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2billingagreementsPaymentInformation} The populated <code>Ptsv2billingagreementsPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Ptsv2billingagreementsPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = Ptsv2billingagreementsPaymentInformationTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2billingagreementsPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Ptsv2billingagreementsPaymentInformationTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;



  return exports;
}));

