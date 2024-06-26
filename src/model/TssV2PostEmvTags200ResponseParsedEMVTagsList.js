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
    define(['ApiClient', 'model/TssV2PostEmvTags200ResponseEmvTagBreakdownList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2PostEmvTags200ResponseEmvTagBreakdownList'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2PostEmvTags200ResponseParsedEMVTagsList = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2PostEmvTags200ResponseEmvTagBreakdownList);
  }
}(this, function(ApiClient, TssV2PostEmvTags200ResponseEmvTagBreakdownList) {
  'use strict';




  /**
   * The TssV2PostEmvTags200ResponseParsedEMVTagsList model module.
   * @module model/TssV2PostEmvTags200ResponseParsedEMVTagsList
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2PostEmvTags200ResponseParsedEMVTagsList</code>.
   * @alias module:model/TssV2PostEmvTags200ResponseParsedEMVTagsList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TssV2PostEmvTags200ResponseParsedEMVTagsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2PostEmvTags200ResponseParsedEMVTagsList} obj Optional instance to populate.
   * @return {module:model/TssV2PostEmvTags200ResponseParsedEMVTagsList} The populated <code>TssV2PostEmvTags200ResponseParsedEMVTagsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('totalTags')) {
        obj['totalTags'] = ApiClient.convertToType(data['totalTags'], 'Number');
      }
      if (data.hasOwnProperty('emvTagBreakdownList')) {
        obj['emvTagBreakdownList'] = ApiClient.convertToType(data['emvTagBreakdownList'], [TssV2PostEmvTags200ResponseEmvTagBreakdownList]);
      }
    }
    return obj;
  }

  /**
   * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * Number of tags parsed 
   * @member {Number} totalTags
   */
  exports.prototype['totalTags'] = undefined;
  /**
   * An array of objects, where each object contains one parsed tag from the relevant EMV string. 
   * @member {Array.<module:model/TssV2PostEmvTags200ResponseEmvTagBreakdownList>} emvTagBreakdownList
   */
  exports.prototype['emvTagBreakdownList'] = undefined;



  return exports;
}));


