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
    define(['ApiClient', 'model/KmsV2KeysSymPost201ResponseErrorInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KmsV2KeysSymPost201ResponseErrorInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.KmsV2KeysAsymGet200ResponseKeyInformation = factory(root.CyberSource.ApiClient, root.CyberSource.KmsV2KeysSymPost201ResponseErrorInformation);
  }
}(this, function(ApiClient, KmsV2KeysSymPost201ResponseErrorInformation) {
  'use strict';




  /**
   * The KmsV2KeysAsymGet200ResponseKeyInformation model module.
   * @module model/KmsV2KeysAsymGet200ResponseKeyInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>KmsV2KeysAsymGet200ResponseKeyInformation</code>.
   * key information 
   * @alias module:model/KmsV2KeysAsymGet200ResponseKeyInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>KmsV2KeysAsymGet200ResponseKeyInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KmsV2KeysAsymGet200ResponseKeyInformation} obj Optional instance to populate.
   * @return {module:model/KmsV2KeysAsymGet200ResponseKeyInformation} The populated <code>KmsV2KeysAsymGet200ResponseKeyInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('referenceNumber')) {
        obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
      }
      if (data.hasOwnProperty('keyId')) {
        obj['keyId'] = ApiClient.convertToType(data['keyId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('alias')) {
        obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
      }
      if (data.hasOwnProperty('errorInformation')) {
        obj['errorInformation'] = KmsV2KeysSymPost201ResponseErrorInformation.constructFromObject(data['errorInformation']);
      }
    }
    return obj;
  }

  /**
   * Merchant Id 
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Reference number is a unique identifier provided by the client along with the organization Id. This is an optional field provided solely for the client's convenience. If client specifies value for this field in the request, it is expected to be available in the response. 
   * @member {String} referenceNumber
   */
  exports.prototype['referenceNumber'] = undefined;
  /**
   * Key Serial Number 
   * @member {String} keyId
   */
  exports.prototype['keyId'] = undefined;
  /**
   * The status of the key.  Possible values:  - FAILED  - ACTIVE  - INACTIVE  - EXPIRED 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The expiration time in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * message in case of failed key
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Key alias
   * @member {String} alias
   */
  exports.prototype['alias'] = undefined;
  /**
   * @member {module:model/KmsV2KeysSymPost201ResponseErrorInformation} errorInformation
   */
  exports.prototype['errorInformation'] = undefined;



  return exports;
}));


