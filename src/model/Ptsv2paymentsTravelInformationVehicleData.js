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
    root.CyberSource.Ptsv2paymentsTravelInformationVehicleData = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsTravelInformationVehicleData model module.
   * @module model/Ptsv2paymentsTravelInformationVehicleData
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTravelInformationVehicleData</code>.
   * @alias module:model/Ptsv2paymentsTravelInformationVehicleData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsTravelInformationVehicleData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTravelInformationVehicleData} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTravelInformationVehicleData} The populated <code>Ptsv2paymentsTravelInformationVehicleData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connectorType')) {
        obj['connectorType'] = ApiClient.convertToType(data['connectorType'], 'String');
      }
      if (data.hasOwnProperty('chargingReasonCode')) {
        obj['chargingReasonCode'] = ApiClient.convertToType(data['chargingReasonCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * This field will contain connector type values for electric vehicle transactions.  Possible Values: 001 (AC - J1772 Type 1) 002 (AC - Mennekes - Type 2) 003 (AC - GB/T) 100 (DC - CCS1) 101 (DC - CHAdeMO) 102 (DC - CCS2) 103 (DC - GB/T) 200 (NACS – Tesla) 
   * @member {String} connectorType
   */
  exports.prototype['connectorType'] = undefined;
  /**
   * This field will contain charging reason code values for electric vehicle transactions.  Possible Values: 010 (Other Error) 011 (Connector Lock Failure) 012 (EV Communication Error) 013 (Ground Failure) 014 (High Temperature) 015 (Internal Error) 016 (Over Current Failure) 017 (Over Voltage) 018 (Power Meter Failure) 019 (Power Switch Failure) 020 (Reader Failure) 021 (Reset Failure) 022 (Under Voltage) 023 (Weak Signal) 100 (No Error) 200 (Payment Related Error) 
   * @member {String} chargingReasonCode
   */
  exports.prototype['chargingReasonCode'] = undefined;



  return exports;
}));


