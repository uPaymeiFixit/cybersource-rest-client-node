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
    define(['ApiClient', 'model/Vasv2taxidClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Vasv2taxidClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VoidTaxRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Vasv2taxidClientReferenceInformation);
  }
}(this, function(ApiClient, Vasv2taxidClientReferenceInformation) {
  'use strict';




  /**
   * The VoidTaxRequest model module.
   * @module model/VoidTaxRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VoidTaxRequest</code>.
   * @alias module:model/VoidTaxRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>VoidTaxRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoidTaxRequest} obj Optional instance to populate.
   * @return {module:model/VoidTaxRequest} The populated <code>VoidTaxRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Vasv2taxidClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Vasv2taxidClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;



  return exports;
}));


