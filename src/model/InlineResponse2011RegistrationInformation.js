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
    root.CyberSource.InlineResponse2011RegistrationInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2011RegistrationInformation model module.
   * @module model/InlineResponse2011RegistrationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2011RegistrationInformation</code>.
   * @alias module:model/InlineResponse2011RegistrationInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2011RegistrationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2011RegistrationInformation} obj Optional instance to populate.
   * @return {module:model/InlineResponse2011RegistrationInformation} The populated <code>InlineResponse2011RegistrationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('boardingPackageId')) {
        obj['boardingPackageId'] = ApiClient.convertToType(data['boardingPackageId'], 'String');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('salesRepId')) {
        obj['salesRepId'] = ApiClient.convertToType(data['salesRepId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} boardingPackageId
   */
  exports.prototype['boardingPackageId'] = undefined;
  /**
   * In case mode is not provided the API will use COMPLETE as default Possible Values:   - 'COMPLETE'   - 'PARTIAL' 
   * @member {module:model/InlineResponse2011RegistrationInformation.ModeEnum} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * @member {String} salesRepId
   */
  exports.prototype['salesRepId'] = undefined;


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "COMPLETE"
     * @const
     */
    "COMPLETE": "COMPLETE",
    /**
     * value: "PARTIAL"
     * @const
     */
    "PARTIAL": "PARTIAL"  };


  return exports;
}));


