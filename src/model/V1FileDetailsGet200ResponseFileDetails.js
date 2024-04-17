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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.V1FileDetailsGet200ResponseFileDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1FileDetailsGet200ResponseFileDetails model module.
   * @module model/V1FileDetailsGet200ResponseFileDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V1FileDetailsGet200ResponseFileDetails</code>.
   * @alias module:model/V1FileDetailsGet200ResponseFileDetails
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>V1FileDetailsGet200ResponseFileDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1FileDetailsGet200ResponseFileDetails} obj Optional instance to populate.
   * @return {module:model/V1FileDetailsGet200ResponseFileDetails} The populated <code>V1FileDetailsGet200ResponseFileDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fileId')) {
        obj['fileId'] = ApiClient.convertToType(data['fileId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
      }
      if (data.hasOwnProperty('lastModifiedTime')) {
        obj['lastModifiedTime'] = ApiClient.convertToType(data['lastModifiedTime'], 'Date');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique identifier of a file
   * @member {String} fileId
   */
  exports.prototype['fileId'] = undefined;
  /**
   * Name of the file
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Date and time for the file in PST
   * @member {Date} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * Date and time for the file in PST
   * @member {Date} lastModifiedTime
   */
  exports.prototype['lastModifiedTime'] = undefined;
  /**
   * Date and time for the file in PST
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * 'File extension'  Valid values: - 'application/xml' - 'text/csv' - 'application/pdf' - 'application/octet-stream' 
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;
  /**
   * Size of the file in bytes
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;



  return exports;
}));


