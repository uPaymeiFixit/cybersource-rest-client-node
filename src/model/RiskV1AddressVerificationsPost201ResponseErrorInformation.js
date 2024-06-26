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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseErrorInformationDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseErrorInformationDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RiskV1AddressVerificationsPost201ResponseErrorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformationDetails);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseErrorInformationDetails) {
  'use strict';




  /**
   * The RiskV1AddressVerificationsPost201ResponseErrorInformation model module.
   * @module model/RiskV1AddressVerificationsPost201ResponseErrorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1AddressVerificationsPost201ResponseErrorInformation</code>.
   * @alias module:model/RiskV1AddressVerificationsPost201ResponseErrorInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RiskV1AddressVerificationsPost201ResponseErrorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1AddressVerificationsPost201ResponseErrorInformation} obj Optional instance to populate.
   * @return {module:model/RiskV1AddressVerificationsPost201ResponseErrorInformation} The populated <code>RiskV1AddressVerificationsPost201ResponseErrorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [PtsV2PaymentsPost201ResponseErrorInformationDetails]);
      }
    }
    return obj;
  }

  /**
   * The reason of the status. Value can be   - `APARTMENT_NUMBER_NOT_FOUND`   - `INSUFFICIENT_ADDRESS_INFORMATION`   - `HOUSE_OR_BOX_NUMBER_NOT_FOUND`   - `MULTIPLE_ADDRESS_MATCHES`   - `BOX_NUMBER_NOT_FOUND`   - `ROUTE_SERVICE_NOT_FOUND`   - `STREET_NAME_NOT_FOUND`   - `POSTAL_CODE_NOT_FOUND`   - `UNVERIFIABLE_ADDRESS`   - `MULTIPLE_ADDRESS_MATCHES_INTERNATIONAL`   - `ADDRESS_MATCH_NOT_FOUND`   - `UNSUPPORTED_CHARACTER_SET`   - `INVALID_MERCHANT_CONFIGURATION` 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The detail message related to the status and reason listed above.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Array.<module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));


