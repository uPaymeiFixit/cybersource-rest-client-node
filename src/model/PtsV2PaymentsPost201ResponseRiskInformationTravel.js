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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination'), require('./PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture'), require('./PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination'), require('./PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationTravel = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination, PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture, PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination, PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseRiskInformationTravel model module.
   * @module model/PtsV2PaymentsPost201ResponseRiskInformationTravel
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseRiskInformationTravel</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseRiskInformationTravel
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseRiskInformationTravel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravel} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravel} The populated <code>PtsV2PaymentsPost201ResponseRiskInformationTravel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actualFinalDestination')) {
        obj['actualFinalDestination'] = PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination.constructFromObject(data['actualFinalDestination']);
      }
      if (data.hasOwnProperty('firstDeparture')) {
        obj['firstDeparture'] = PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture.constructFromObject(data['firstDeparture']);
      }
      if (data.hasOwnProperty('firstDestination')) {
        obj['firstDestination'] = PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination.constructFromObject(data['firstDestination']);
      }
      if (data.hasOwnProperty('lastDestination')) {
        obj['lastDestination'] = PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination.constructFromObject(data['lastDestination']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination} actualFinalDestination
   */
  exports.prototype['actualFinalDestination'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture} firstDeparture
   */
  exports.prototype['firstDeparture'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination} firstDestination
   */
  exports.prototype['firstDestination'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination} lastDestination
   */
  exports.prototype['lastDestination'] = undefined;



  return exports;
}));


