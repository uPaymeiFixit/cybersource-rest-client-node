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
    define(['ApiClient', 'model/Ptsv2paymentsidreversalsClientReferenceInformation', 'model/Ptsv2paymentsidvoidsAgreementInformation', 'model/Ptsv2paymentsidvoidsMerchantInformation', 'model/Ptsv2paymentsidvoidsOrderInformation', 'model/Ptsv2paymentsidvoidsPaymentInformation', 'model/Ptsv2paymentsidvoidsProcessingInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidreversalsClientReferenceInformation'), require('./Ptsv2paymentsidvoidsAgreementInformation'), require('./Ptsv2paymentsidvoidsMerchantInformation'), require('./Ptsv2paymentsidvoidsOrderInformation'), require('./Ptsv2paymentsidvoidsPaymentInformation'), require('./Ptsv2paymentsidvoidsProcessingInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VoidRefundRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidreversalsClientReferenceInformation, root.CyberSource.Ptsv2paymentsidvoidsAgreementInformation, root.CyberSource.Ptsv2paymentsidvoidsMerchantInformation, root.CyberSource.Ptsv2paymentsidvoidsOrderInformation, root.CyberSource.Ptsv2paymentsidvoidsPaymentInformation, root.CyberSource.Ptsv2paymentsidvoidsProcessingInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsidreversalsClientReferenceInformation, Ptsv2paymentsidvoidsAgreementInformation, Ptsv2paymentsidvoidsMerchantInformation, Ptsv2paymentsidvoidsOrderInformation, Ptsv2paymentsidvoidsPaymentInformation, Ptsv2paymentsidvoidsProcessingInformation) {
  'use strict';




  /**
   * The VoidRefundRequest model module.
   * @module model/VoidRefundRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VoidRefundRequest</code>.
   * @alias module:model/VoidRefundRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>VoidRefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoidRefundRequest} obj Optional instance to populate.
   * @return {module:model/VoidRefundRequest} The populated <code>VoidRefundRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsidreversalsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentsidvoidsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsidvoidsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('agreementInformation')) {
        obj['agreementInformation'] = Ptsv2paymentsidvoidsAgreementInformation.constructFromObject(data['agreementInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2paymentsidvoidsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2paymentsidvoidsProcessingInformation.constructFromObject(data['processingInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsidreversalsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidvoidsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidvoidsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidvoidsAgreementInformation} agreementInformation
   */
  exports.prototype['agreementInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidvoidsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidvoidsProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;



  return exports;
}));


