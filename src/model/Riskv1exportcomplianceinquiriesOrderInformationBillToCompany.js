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
    root.CyberSource.Riskv1exportcomplianceinquiriesOrderInformationBillToCompany = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1exportcomplianceinquiriesOrderInformationBillToCompany model module.
   * @module model/Riskv1exportcomplianceinquiriesOrderInformationBillToCompany
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1exportcomplianceinquiriesOrderInformationBillToCompany</code>.
   * @alias module:model/Riskv1exportcomplianceinquiriesOrderInformationBillToCompany
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Riskv1exportcomplianceinquiriesOrderInformationBillToCompany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1exportcomplianceinquiriesOrderInformationBillToCompany} obj Optional instance to populate.
   * @return {module:model/Riskv1exportcomplianceinquiriesOrderInformationBillToCompany} The populated <code>Riskv1exportcomplianceinquiriesOrderInformationBillToCompany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Company name of person buying the product. Important: This field or billTo.firstName and billTo.lastName must be present. Else, your request will fail. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


