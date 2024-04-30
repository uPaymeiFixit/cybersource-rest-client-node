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
    define(['ApiClient', 'model/Riskv1liststypeentriesBuyerInformation', 'model/Riskv1liststypeentriesClientReferenceInformation', 'model/Riskv1liststypeentriesDeviceInformation', 'model/Riskv1liststypeentriesOrderInformation', 'model/Riskv1liststypeentriesPaymentInformation', 'model/Riskv1liststypeentriesRiskInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1liststypeentriesBuyerInformation'), require('./Riskv1liststypeentriesClientReferenceInformation'), require('./Riskv1liststypeentriesDeviceInformation'), require('./Riskv1liststypeentriesOrderInformation'), require('./Riskv1liststypeentriesPaymentInformation'), require('./Riskv1liststypeentriesRiskInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.AddNegativeListRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1liststypeentriesBuyerInformation, root.CyberSource.Riskv1liststypeentriesClientReferenceInformation, root.CyberSource.Riskv1liststypeentriesDeviceInformation, root.CyberSource.Riskv1liststypeentriesOrderInformation, root.CyberSource.Riskv1liststypeentriesPaymentInformation, root.CyberSource.Riskv1liststypeentriesRiskInformation);
  }
}(this, function(ApiClient, Riskv1liststypeentriesBuyerInformation, Riskv1liststypeentriesClientReferenceInformation, Riskv1liststypeentriesDeviceInformation, Riskv1liststypeentriesOrderInformation, Riskv1liststypeentriesPaymentInformation, Riskv1liststypeentriesRiskInformation) {
  'use strict';




  /**
   * The AddNegativeListRequest model module.
   * @module model/AddNegativeListRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>AddNegativeListRequest</code>.
   * @alias module:model/AddNegativeListRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AddNegativeListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddNegativeListRequest} obj Optional instance to populate.
   * @return {module:model/AddNegativeListRequest} The populated <code>AddNegativeListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Riskv1liststypeentriesOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Riskv1liststypeentriesPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Riskv1liststypeentriesClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Riskv1liststypeentriesDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('riskInformation')) {
        obj['riskInformation'] = Riskv1liststypeentriesRiskInformation.constructFromObject(data['riskInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Riskv1liststypeentriesBuyerInformation.constructFromObject(data['buyerInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1liststypeentriesOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Riskv1liststypeentriesPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Riskv1liststypeentriesClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1liststypeentriesDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1liststypeentriesRiskInformation} riskInformation
   */
  exports.prototype['riskInformation'] = undefined;
  /**
   * @member {module:model/Riskv1liststypeentriesBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;



  return exports;
}));


