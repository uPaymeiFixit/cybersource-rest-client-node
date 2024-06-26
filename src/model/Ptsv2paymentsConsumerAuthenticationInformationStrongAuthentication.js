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
    define(['ApiClient', 'model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthenticationIssuerInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsConsumerAuthenticationInformationStrongAuthenticationIssuerInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthenticationIssuerInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsConsumerAuthenticationInformationStrongAuthenticationIssuerInformation) {
  'use strict';




  /**
   * The Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication model module.
   * @module model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication</code>.
   * @alias module:model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication} The populated <code>Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('issuerInformation')) {
        obj['issuerInformation'] = Ptsv2paymentsConsumerAuthenticationInformationStrongAuthenticationIssuerInformation.constructFromObject(data['issuerInformation']);
      }
      if (data.hasOwnProperty('lowValueExemptionIndicator')) {
        obj['lowValueExemptionIndicator'] = ApiClient.convertToType(data['lowValueExemptionIndicator'], 'String');
      }
      if (data.hasOwnProperty('riskAnalysisExemptionIndicator')) {
        obj['riskAnalysisExemptionIndicator'] = ApiClient.convertToType(data['riskAnalysisExemptionIndicator'], 'String');
      }
      if (data.hasOwnProperty('trustedMerchantExemptionIndicator')) {
        obj['trustedMerchantExemptionIndicator'] = ApiClient.convertToType(data['trustedMerchantExemptionIndicator'], 'String');
      }
      if (data.hasOwnProperty('secureCorporatePaymentIndicator')) {
        obj['secureCorporatePaymentIndicator'] = ApiClient.convertToType(data['secureCorporatePaymentIndicator'], 'String');
      }
      if (data.hasOwnProperty('delegatedAuthenticationExemptionIndicator')) {
        obj['delegatedAuthenticationExemptionIndicator'] = ApiClient.convertToType(data['delegatedAuthenticationExemptionIndicator'], 'String');
      }
      if (data.hasOwnProperty('outageExemptionIndicator')) {
        obj['outageExemptionIndicator'] = ApiClient.convertToType(data['outageExemptionIndicator'], 'String');
      }
      if (data.hasOwnProperty('authenticationIndicator')) {
        obj['authenticationIndicator'] = ApiClient.convertToType(data['authenticationIndicator'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthenticationIssuerInformation} issuerInformation
   */
  exports.prototype['issuerInformation'] = undefined;
  /**
   * This field will contain the low value exemption indicator with one of the following values: Possible values: - `0`  ( low value exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as the merchant/acquirer has determined it to be a low value payment) 
   * @member {String} lowValueExemptionIndicator
   */
  exports.prototype['lowValueExemptionIndicator'] = undefined;
  /**
   * This field will contain the transaction risk analysis exemption indicator with one of the following values: Possible values: - `0`  (TRA exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as the merchant/acquirer has determined it to be low risk in accordance with the criteria defined by PSD2/RTS) 
   * @member {String} riskAnalysisExemptionIndicator
   */
  exports.prototype['riskAnalysisExemptionIndicator'] = undefined;
  /**
   * Possible values: - `0`  (Trusted merchant exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as it originated at a merchant trusted by the cardholder) 
   * @member {String} trustedMerchantExemptionIndicator
   */
  exports.prototype['trustedMerchantExemptionIndicator'] = undefined;
  /**
   * This field will contain the secure corporate payment exemption indicator with one of the following values: Possible values: - `0`  (SCA exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as the merchant/acquirer has determined it as a secure corporate payment) 
   * @member {String} secureCorporatePaymentIndicator
   */
  exports.prototype['secureCorporatePaymentIndicator'] = undefined;
  /**
   * This field will contain the delegated authentication exemption indicator with one of the following values: Possible values: - `0`  (delegated Authentication exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as authentication has been delegated to other provider (PSP,Acquirer)) 
   * @member {String} delegatedAuthenticationExemptionIndicator
   */
  exports.prototype['delegatedAuthenticationExemptionIndicator'] = undefined;
  /**
   * This field will contain the outage exemption indicator with one of the following values: Possible values: - `0`  (Outage Authentication exemption does not apply to the transaction) - `1` (Outage exempt from SCA as authentication could not be done due to outage) 
   * @member {String} outageExemptionIndicator
   */
  exports.prototype['outageExemptionIndicator'] = undefined;
  /**
   * Indicates the type of Authentication request  01 - Payment transaction  02 - Recurring transaction  03 - Installment transaction  04 - Add card  05 - Maintain card  06 - Cardholder verification as part of EMV token ID and V 
   * @member {String} authenticationIndicator
   */
  exports.prototype['authenticationIndicator'] = undefined;



  return exports;
}));


