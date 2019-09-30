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
    define(['ApiClient', 'model/RiskV1DecisionsPost201ResponseRiskInformationTravelActualFinalDestination', 'model/RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDeparture', 'model/RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDestination', 'model/RiskV1DecisionsPost201ResponseRiskInformationTravelLastDestination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RiskV1DecisionsPost201ResponseRiskInformationTravelActualFinalDestination'), require('./RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDeparture'), require('./RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDestination'), require('./RiskV1DecisionsPost201ResponseRiskInformationTravelLastDestination'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RiskV1DecisionsPost201ResponseRiskInformationTravel = factory(root.CyberSource.ApiClient, root.CyberSource.RiskV1DecisionsPost201ResponseRiskInformationTravelActualFinalDestination, root.CyberSource.RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDeparture, root.CyberSource.RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDestination, root.CyberSource.RiskV1DecisionsPost201ResponseRiskInformationTravelLastDestination);
  }
}(this, function(ApiClient, RiskV1DecisionsPost201ResponseRiskInformationTravelActualFinalDestination, RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDeparture, RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDestination, RiskV1DecisionsPost201ResponseRiskInformationTravelLastDestination) {
  'use strict';




  /**
   * The RiskV1DecisionsPost201ResponseRiskInformationTravel model module.
   * @module model/RiskV1DecisionsPost201ResponseRiskInformationTravel
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1DecisionsPost201ResponseRiskInformationTravel</code>.
   * @alias module:model/RiskV1DecisionsPost201ResponseRiskInformationTravel
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RiskV1DecisionsPost201ResponseRiskInformationTravel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1DecisionsPost201ResponseRiskInformationTravel} obj Optional instance to populate.
   * @return {module:model/RiskV1DecisionsPost201ResponseRiskInformationTravel} The populated <code>RiskV1DecisionsPost201ResponseRiskInformationTravel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actualFinalDestination')) {
        obj['actualFinalDestination'] = RiskV1DecisionsPost201ResponseRiskInformationTravelActualFinalDestination.constructFromObject(data['actualFinalDestination']);
      }
      if (data.hasOwnProperty('firstDeparture')) {
        obj['firstDeparture'] = RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDeparture.constructFromObject(data['firstDeparture']);
      }
      if (data.hasOwnProperty('firstDestination')) {
        obj['firstDestination'] = RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDestination.constructFromObject(data['firstDestination']);
      }
      if (data.hasOwnProperty('lastDestination')) {
        obj['lastDestination'] = RiskV1DecisionsPost201ResponseRiskInformationTravelLastDestination.constructFromObject(data['lastDestination']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RiskV1DecisionsPost201ResponseRiskInformationTravelActualFinalDestination} actualFinalDestination
   */
  exports.prototype['actualFinalDestination'] = undefined;
  /**
   * @member {module:model/RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDeparture} firstDeparture
   */
  exports.prototype['firstDeparture'] = undefined;
  /**
   * @member {module:model/RiskV1DecisionsPost201ResponseRiskInformationTravelFirstDestination} firstDestination
   */
  exports.prototype['firstDestination'] = undefined;
  /**
   * @member {module:model/RiskV1DecisionsPost201ResponseRiskInformationTravelLastDestination} lastDestination
   */
  exports.prototype['lastDestination'] = undefined;



  return exports;
}));

