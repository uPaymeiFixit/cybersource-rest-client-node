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
    define(['ApiClient', 'model/Boardingv1registrationsIntegrationInformationTenantInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Boardingv1registrationsIntegrationInformationTenantInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Boardingv1registrationsIntegrationInformationTenantConfigurations = factory(root.CyberSource.ApiClient, root.CyberSource.Boardingv1registrationsIntegrationInformationTenantInformation);
  }
}(this, function(ApiClient, Boardingv1registrationsIntegrationInformationTenantInformation) {
  'use strict';




  /**
   * The Boardingv1registrationsIntegrationInformationTenantConfigurations model module.
   * @module model/Boardingv1registrationsIntegrationInformationTenantConfigurations
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Boardingv1registrationsIntegrationInformationTenantConfigurations</code>.
   * @alias module:model/Boardingv1registrationsIntegrationInformationTenantConfigurations
   * @class
   * @param solutionId {String} The solutionId is the unique identifier for this system resource. Partner can use it to reference the specific solution through out the system. 
   */
  var exports = function(solutionId) {
    var _this = this;

    _this['solutionId'] = solutionId;

  };

  /**
   * Constructs a <code>Boardingv1registrationsIntegrationInformationTenantConfigurations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Boardingv1registrationsIntegrationInformationTenantConfigurations} obj Optional instance to populate.
   * @return {module:model/Boardingv1registrationsIntegrationInformationTenantConfigurations} The populated <code>Boardingv1registrationsIntegrationInformationTenantConfigurations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('solutionId')) {
        obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
      }
      if (data.hasOwnProperty('tenantInformation')) {
        obj['tenantInformation'] = Boardingv1registrationsIntegrationInformationTenantInformation.constructFromObject(data['tenantInformation']);
      }
    }
    return obj;
  }

  /**
   * The solutionId is the unique identifier for this system resource. Partner can use it to reference the specific solution through out the system. 
   * @member {String} solutionId
   */
  exports.prototype['solutionId'] = undefined;
  /**
   * @member {module:model/Boardingv1registrationsIntegrationInformationTenantInformation} tenantInformation
   */
  exports.prototype['tenantInformation'] = undefined;



  return exports;
}));


