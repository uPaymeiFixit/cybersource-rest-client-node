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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Vasv2taxOrderInformationInvoiceDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Vasv2taxOrderInformationInvoiceDetails model module.
   * @module model/Vasv2taxOrderInformationInvoiceDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Vasv2taxOrderInformationInvoiceDetails</code>.
   * @alias module:model/Vasv2taxOrderInformationInvoiceDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Vasv2taxOrderInformationInvoiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2taxOrderInformationInvoiceDetails} obj Optional instance to populate.
   * @return {module:model/Vasv2taxOrderInformationInvoiceDetails} The populated <code>Vasv2taxOrderInformationInvoiceDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoiceDate')) {
        obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date of the tax calculation. Use format YYYYMMDD. You can provide a date in the past if you are calculating tax for a refund and want to know what the tax was on the date the order was placed. You can provide a date in the future if you are calculating the tax for a future date, such as an upcoming tax holiday.  The default is the date, in Pacific time, that the bank receives the request. Keep this in mind if you are in a different time zone and want the tax calculated with the rates that are applicable on a specific date.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} invoiceDate
   */
  exports.prototype['invoiceDate'] = undefined;



  return exports;
}));

