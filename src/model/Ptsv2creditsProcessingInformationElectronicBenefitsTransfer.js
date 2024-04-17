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
    root.CyberSource.Ptsv2creditsProcessingInformationElectronicBenefitsTransfer = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2creditsProcessingInformationElectronicBenefitsTransfer model module.
   * @module model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2creditsProcessingInformationElectronicBenefitsTransfer</code>.
   * @alias module:model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2creditsProcessingInformationElectronicBenefitsTransfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer} obj Optional instance to populate.
   * @return {module:model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer} The populated <code>Ptsv2creditsProcessingInformationElectronicBenefitsTransfer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
    }
    return obj;
  }

  /**
   * Flag that specifies the category for the EBT transaction.  Possible values: - `CASH`: Cash benefits, which can be used to purchase any item at a participating retailer, as well as to obtain cash-back or make a cash withdrawal from a participating ATM. - `FOOD`: Food stamp benefits, which can be used only to purchase food items authorized by the USDA SNAP program.  #### PIN debit Required field for EBT transactions that use PIN debit credit or PIN debit purchase; otherwise, not used. 
   * @member {String} category
   */
  exports.prototype['category'] = undefined;



  return exports;
}));


