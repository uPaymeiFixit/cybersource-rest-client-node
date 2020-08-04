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
    define(['ApiClient', 'model/PaymentInstrumentListForCustomerEmbedded', 'model/PaymentInstrumentListForCustomerLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentInstrumentListForCustomerEmbedded'), require('./PaymentInstrumentListForCustomerLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentInstrumentPaginated = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentInstrumentListForCustomerEmbedded, root.CyberSource.PaymentInstrumentListForCustomerLinks);
  }
}(this, function(ApiClient, PaymentInstrumentListForCustomerEmbedded, PaymentInstrumentListForCustomerLinks) {
  'use strict';




  /**
   * The PaymentInstrumentPaginated model module.
   * @module model/PaymentInstrumentPaginated
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentInstrumentPaginated</code>.
   * @alias module:model/PaymentInstrumentPaginated
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>PaymentInstrumentPaginated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentInstrumentPaginated} obj Optional instance to populate.
   * @return {module:model/PaymentInstrumentPaginated} The populated <code>PaymentInstrumentPaginated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PaymentInstrumentListForCustomerLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('_embedded')) {
        obj['_embedded'] = PaymentInstrumentListForCustomerEmbedded.constructFromObject(data['_embedded']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentInstrumentListForCustomerLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * The offset parameter supplied in the request.
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * The limit parameter supplied in the request.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * The number of Payment Instruments returned in the array.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The total number of Payment Instruments associated with the Customer or Instrument Identifier.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {module:model/PaymentInstrumentListForCustomerEmbedded} _embedded
   */
  exports.prototype['_embedded'] = undefined;



  return exports;
}));


