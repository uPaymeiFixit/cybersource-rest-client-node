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
    define(['ApiClient', 'model/Kmsv2keyssymClientReferenceInformation', 'model/Kmsv2keyssymKeyInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kmsv2keyssymClientReferenceInformation'), require('./Kmsv2keyssymKeyInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreateSharedSecretKeysRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Kmsv2keyssymClientReferenceInformation, root.CyberSource.Kmsv2keyssymKeyInformation);
  }
}(this, function(ApiClient, Kmsv2keyssymClientReferenceInformation, Kmsv2keyssymKeyInformation) {
  'use strict';




  /**
   * The CreateSharedSecretKeysRequest model module.
   * @module model/CreateSharedSecretKeysRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateSharedSecretKeysRequest</code>.
   * @alias module:model/CreateSharedSecretKeysRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreateSharedSecretKeysRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSharedSecretKeysRequest} obj Optional instance to populate.
   * @return {module:model/CreateSharedSecretKeysRequest} The populated <code>CreateSharedSecretKeysRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Kmsv2keyssymClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('keyInformation')) {
        obj['keyInformation'] = ApiClient.convertToType(data['keyInformation'], [Kmsv2keyssymKeyInformation]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Kmsv2keyssymClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {Array.<module:model/Kmsv2keyssymKeyInformation>} keyInformation
   */
  exports.prototype['keyInformation'] = undefined;



  return exports;
}));


