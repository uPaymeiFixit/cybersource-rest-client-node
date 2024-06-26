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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseRiskInformationInfoCodes', 'model/PtsV2PaymentsPost201ResponseRiskInformationIpAddress', 'model/PtsV2PaymentsPost201ResponseRiskInformationProcessorResults', 'model/PtsV2PaymentsPost201ResponseRiskInformationProfile', 'model/PtsV2PaymentsPost201ResponseRiskInformationRules', 'model/PtsV2PaymentsPost201ResponseRiskInformationScore', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravel', 'model/PtsV2PaymentsPost201ResponseRiskInformationVelocity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseRiskInformationInfoCodes'), require('./PtsV2PaymentsPost201ResponseRiskInformationIpAddress'), require('./PtsV2PaymentsPost201ResponseRiskInformationProcessorResults'), require('./PtsV2PaymentsPost201ResponseRiskInformationProfile'), require('./PtsV2PaymentsPost201ResponseRiskInformationRules'), require('./PtsV2PaymentsPost201ResponseRiskInformationScore'), require('./PtsV2PaymentsPost201ResponseRiskInformationTravel'), require('./PtsV2PaymentsPost201ResponseRiskInformationVelocity'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationIpAddress, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationProcessorResults, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationProfile, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationRules, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationScore, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationTravel, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationVelocity);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseRiskInformationInfoCodes, PtsV2PaymentsPost201ResponseRiskInformationIpAddress, PtsV2PaymentsPost201ResponseRiskInformationProcessorResults, PtsV2PaymentsPost201ResponseRiskInformationProfile, PtsV2PaymentsPost201ResponseRiskInformationRules, PtsV2PaymentsPost201ResponseRiskInformationScore, PtsV2PaymentsPost201ResponseRiskInformationTravel, PtsV2PaymentsPost201ResponseRiskInformationVelocity) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseRiskInformation model module.
   * @module model/PtsV2PaymentsPost201ResponseRiskInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseRiskInformation</code>.
   * Contains the result of risk assessment.
   * @alias module:model/PtsV2PaymentsPost201ResponseRiskInformation
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseRiskInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseRiskInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseRiskInformation} The populated <code>PtsV2PaymentsPost201ResponseRiskInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profile')) {
        obj['profile'] = PtsV2PaymentsPost201ResponseRiskInformationProfile.constructFromObject(data['profile']);
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [PtsV2PaymentsPost201ResponseRiskInformationRules]);
      }
      if (data.hasOwnProperty('infoCodes')) {
        obj['infoCodes'] = PtsV2PaymentsPost201ResponseRiskInformationInfoCodes.constructFromObject(data['infoCodes']);
      }
      if (data.hasOwnProperty('velocity')) {
        obj['velocity'] = PtsV2PaymentsPost201ResponseRiskInformationVelocity.constructFromObject(data['velocity']);
      }
      if (data.hasOwnProperty('casePriority')) {
        obj['casePriority'] = ApiClient.convertToType(data['casePriority'], 'Number');
      }
      if (data.hasOwnProperty('localTime')) {
        obj['localTime'] = ApiClient.convertToType(data['localTime'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = PtsV2PaymentsPost201ResponseRiskInformationScore.constructFromObject(data['score']);
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = PtsV2PaymentsPost201ResponseRiskInformationIpAddress.constructFromObject(data['ipAddress']);
      }
      if (data.hasOwnProperty('providers')) {
        obj['providers'] = ApiClient.convertToType(data['providers'], {'String': {'String': 'String'}});
      }
      if (data.hasOwnProperty('travel')) {
        obj['travel'] = PtsV2PaymentsPost201ResponseRiskInformationTravel.constructFromObject(data['travel']);
      }
      if (data.hasOwnProperty('processorResults')) {
        obj['processorResults'] = PtsV2PaymentsPost201ResponseRiskInformationProcessorResults.constructFromObject(data['processorResults']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationProfile} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * @member {Array.<module:model/PtsV2PaymentsPost201ResponseRiskInformationRules>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationInfoCodes} infoCodes
   */
  exports.prototype['infoCodes'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationVelocity} velocity
   */
  exports.prototype['velocity'] = undefined;
  /**
   * You receive this field only if you subscribe to the Enhanced Case Management service. The priority level ranges from 1 (highest) to 5 (lowest); the default value is 3. If you do not assign a priority to your rules or to your profiles, the default value is given to the order.  For all possible values, see the `decision_case_priority` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {Number} casePriority
   */
  exports.prototype['casePriority'] = undefined;
  /**
   * The customer's local time (`hh:mm:ss`), which is calculated from the transaction request time and the customer's billing address.  For details, see the `score_time_local` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) 
   * @member {String} localTime
   */
  exports.prototype['localTime'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationScore} score
   */
  exports.prototype['score'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationIpAddress} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * Name of the 3rd party provider, for example, Emailage. For all possible values, see the `decision_provider_#_name` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link).
   * @member {Object.<String, Object.<String, String>>} providers
   */
  exports.prototype['providers'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravel} travel
   */
  exports.prototype['travel'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseRiskInformationProcessorResults} processorResults
   */
  exports.prototype['processorResults'] = undefined;



  return exports;
}));


