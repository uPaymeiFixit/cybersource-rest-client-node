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
    define(['ApiClient', 'model/Riskv1decisionsClientReferenceInformationPartner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsClientReferenceInformationPartner'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Rbsv1plansClientReferenceInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsClientReferenceInformationPartner);
  }
}(this, function(ApiClient, Riskv1decisionsClientReferenceInformationPartner) {
  'use strict';




  /**
   * The Rbsv1plansClientReferenceInformation model module.
   * @module model/Rbsv1plansClientReferenceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Rbsv1plansClientReferenceInformation</code>.
   * @alias module:model/Rbsv1plansClientReferenceInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Rbsv1plansClientReferenceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rbsv1plansClientReferenceInformation} obj Optional instance to populate.
   * @return {module:model/Rbsv1plansClientReferenceInformation} The populated <code>Rbsv1plansClientReferenceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('partner')) {
        obj['partner'] = Riskv1decisionsClientReferenceInformationPartner.constructFromObject(data['partner']);
      }
      if (data.hasOwnProperty('applicationName')) {
        obj['applicationName'] = ApiClient.convertToType(data['applicationName'], 'String');
      }
      if (data.hasOwnProperty('applicationVersion')) {
        obj['applicationVersion'] = ApiClient.convertToType(data['applicationVersion'], 'String');
      }
      if (data.hasOwnProperty('applicationUser')) {
        obj['applicationUser'] = ApiClient.convertToType(data['applicationUser'], 'String');
      }
    }
    return obj;
  }

  /**
   * Brief description of the order or any comment you wish to add to the order. 
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsClientReferenceInformationPartner} partner
   */
  exports.prototype['partner'] = undefined;
  /**
   * The name of the Connection Method client (such as Virtual Terminal or SOAP Toolkit API) that the merchant uses to send a transaction request to CyberSource. 
   * @member {String} applicationName
   */
  exports.prototype['applicationName'] = undefined;
  /**
   * Version of the CyberSource application or integration used for a transaction. 
   * @member {String} applicationVersion
   */
  exports.prototype['applicationVersion'] = undefined;
  /**
   * The entity that is responsible for running the transaction and submitting the processing request to CyberSource. This could be a person, a system, or a connection method. 
   * @member {String} applicationUser
   */
  exports.prototype['applicationUser'] = undefined;



  return exports;
}));


