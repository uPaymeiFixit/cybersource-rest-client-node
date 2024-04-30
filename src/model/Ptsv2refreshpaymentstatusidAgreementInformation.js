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
    root.CyberSource.Ptsv2refreshpaymentstatusidAgreementInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2refreshpaymentstatusidAgreementInformation model module.
   * @module model/Ptsv2refreshpaymentstatusidAgreementInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2refreshpaymentstatusidAgreementInformation</code>.
   * @alias module:model/Ptsv2refreshpaymentstatusidAgreementInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2refreshpaymentstatusidAgreementInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2refreshpaymentstatusidAgreementInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2refreshpaymentstatusidAgreementInformation} The populated <code>Ptsv2refreshpaymentstatusidAgreementInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agreementId')) {
        obj['agreementId'] = ApiClient.convertToType(data['agreementId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The identifier for the billing agreement. 
   * @member {String} agreementId
   */
  exports.prototype['agreementId'] = undefined;



  return exports;
}));


