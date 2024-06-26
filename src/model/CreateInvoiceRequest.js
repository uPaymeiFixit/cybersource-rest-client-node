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
    define(['ApiClient', 'model/Invoicingv2invoicesCustomerInformation', 'model/Invoicingv2invoicesInvoiceInformation', 'model/Invoicingv2invoicesOrderInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Invoicingv2invoicesCustomerInformation'), require('./Invoicingv2invoicesInvoiceInformation'), require('./Invoicingv2invoicesOrderInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreateInvoiceRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Invoicingv2invoicesCustomerInformation, root.CyberSource.Invoicingv2invoicesInvoiceInformation, root.CyberSource.Invoicingv2invoicesOrderInformation);
  }
}(this, function(ApiClient, Invoicingv2invoicesCustomerInformation, Invoicingv2invoicesInvoiceInformation, Invoicingv2invoicesOrderInformation) {
  'use strict';




  /**
   * The CreateInvoiceRequest model module.
   * @module model/CreateInvoiceRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateInvoiceRequest</code>.
   * @alias module:model/CreateInvoiceRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreateInvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateInvoiceRequest} obj Optional instance to populate.
   * @return {module:model/CreateInvoiceRequest} The populated <code>CreateInvoiceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customerInformation')) {
        obj['customerInformation'] = Invoicingv2invoicesCustomerInformation.constructFromObject(data['customerInformation']);
      }
      if (data.hasOwnProperty('invoiceInformation')) {
        obj['invoiceInformation'] = Invoicingv2invoicesInvoiceInformation.constructFromObject(data['invoiceInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Invoicingv2invoicesOrderInformation.constructFromObject(data['orderInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Invoicingv2invoicesCustomerInformation} customerInformation
   */
  exports.prototype['customerInformation'] = undefined;
  /**
   * @member {module:model/Invoicingv2invoicesInvoiceInformation} invoiceInformation
   */
  exports.prototype['invoiceInformation'] = undefined;
  /**
   * @member {module:model/Invoicingv2invoicesOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;



  return exports;
}));


