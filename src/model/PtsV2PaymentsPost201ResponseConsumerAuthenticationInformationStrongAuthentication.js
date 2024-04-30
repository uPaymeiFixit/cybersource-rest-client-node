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
    define(['ApiClient', 'model/PaymentsStrongAuthIssuerInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsStrongAuthIssuerInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsStrongAuthIssuerInformation);
  }
}(this, function(ApiClient, PaymentsStrongAuthIssuerInformation) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication model module.
   * @module model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication} The populated <code>PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('issuerInformation')) {
        obj['issuerInformation'] = PaymentsStrongAuthIssuerInformation.constructFromObject(data['issuerInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsStrongAuthIssuerInformation} issuerInformation
   */
  exports.prototype['issuerInformation'] = undefined;



  return exports;
}));


