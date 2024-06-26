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
    root.CyberSource.UpdatePGPKeysRequest1 = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdatePGPKeysRequest1 model module.
   * @module model/UpdatePGPKeysRequest1
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UpdatePGPKeysRequest1</code>.
   * @alias module:model/UpdatePGPKeysRequest1
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UpdatePGPKeysRequest1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatePGPKeysRequest1} obj Optional instance to populate.
   * @return {module:model/UpdatePGPKeysRequest1} The populated <code>UpdatePGPKeysRequest1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
    }
    return obj;
  }

  /**
   * Organization Id
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Only inactive status is applicable for SCMP_API. Only status as inactive needs to be provided to deactivate scmp.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Expiration Date. Required field to update the SCMP_API key
   * @member {String} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * Version. Required field to update the SCMP_API key
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * Comment. Optional field. Can be provided along with Expiration Date and Version
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;



  return exports;
}));


