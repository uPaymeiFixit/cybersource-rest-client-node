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
    root.CyberSource.Riskv1authenticationsetupsPaymentInformationFluidData = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1authenticationsetupsPaymentInformationFluidData model module.
   * @module model/Riskv1authenticationsetupsPaymentInformationFluidData
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsetupsPaymentInformationFluidData</code>.
   * @alias module:model/Riskv1authenticationsetupsPaymentInformationFluidData
   * @class
   * @param value {String} Represents the encrypted payment data BLOB. The entry for this field is dependent on the payment solution used by the merchant. Used by Authorization and Standalone Credits. Required for authorizations and standalone credits that use a Cybersource suppored Point-to-Point encryption method. Card Present processing This field represents the encrypted payment data generated by the payment terminal/device. 
   */
  var exports = function(value) {
    var _this = this;

    _this['value'] = value;



  };

  /**
   * Constructs a <code>Riskv1authenticationsetupsPaymentInformationFluidData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsetupsPaymentInformationFluidData} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsetupsPaymentInformationFluidData} The populated <code>Riskv1authenticationsetupsPaymentInformationFluidData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('keySerialNumber')) {
        obj['keySerialNumber'] = ApiClient.convertToType(data['keySerialNumber'], 'String');
      }
      if (data.hasOwnProperty('descriptor')) {
        obj['descriptor'] = ApiClient.convertToType(data['descriptor'], 'String');
      }
      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
    }
    return obj;
  }

  /**
   * Represents the encrypted payment data BLOB. The entry for this field is dependent on the payment solution used by the merchant. Used by Authorization and Standalone Credits. Required for authorizations and standalone credits that use a Cybersource suppored Point-to-Point encryption method. Card Present processing This field represents the encrypted payment data generated by the payment terminal/device. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The encoded or encrypted value that a payment solution returns for an authorization request. For details about the valid values for a key, see [Creating an Online Authorization](https://developer.cybersource.com/api/developer-guides/dita-payments/CreatingOnlineAuth.html) 
   * @member {String} keySerialNumber
   */
  exports.prototype['keySerialNumber'] = undefined;
  /**
   * The identifier for a payment solution, which is sending the encrypted payment data for decryption. Valid values: Samsung Pay: RklEPUNPTU1PTi5TQU1TVU5HLklOQVBQLlBBWU1FTlQ= Note: For other payment solutions, the value may be specific to the terminal or device initiatinf the payment. For example, the descriptor for a Bluefin payment encryption would be a device-generated descriptor. Used by Authorization and Standalone Credits. Required for authorizations and standalone credits.  Card Present processing: Format of the encrypted payment data. The value for Bluefin PCI P2PE is `Ymx1ZWZpbg==`. paymentInformation.fluidData.encoding must be `Base64`. The value for Cybersource P2PE decryption depends on the encoding method used and identified in encoding field. If paymentInformation.fluidData.encoding is `Base64`, the value is: `RklEPUVNVi5QQVlNRU5ULkFQSQ==` If paymentInformation.fluidData.encoding is `HEX`, the value is: `4649443D454D562E5041594D454E542E41504` 
   * @member {String} descriptor
   */
  exports.prototype['descriptor'] = undefined;
  /**
   * Encoding method used to encrypt the payment data. Valid values: `Base64`, `HEX` If no value is provided, `Base64` is taken as the default value. And the `Base64` descriptor is used for paymentInformation.fluidData.encoding 
   * @member {String} encoding
   */
  exports.prototype['encoding'] = undefined;



  return exports;
}));


