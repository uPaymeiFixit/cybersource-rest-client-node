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
    define(['ApiClient', 'model/DmConfigThirdpartyProviderAccurintCredentials'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DmConfigThirdpartyProviderAccurintCredentials'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.DmConfigThirdpartyProviderAccurint = factory(root.CyberSource.ApiClient, root.CyberSource.DmConfigThirdpartyProviderAccurintCredentials);
  }
}(this, function(ApiClient, DmConfigThirdpartyProviderAccurintCredentials) {
  'use strict';




  /**
   * The DmConfigThirdpartyProviderAccurint model module.
   * @module model/DmConfigThirdpartyProviderAccurint
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>DmConfigThirdpartyProviderAccurint</code>.
   * @alias module:model/DmConfigThirdpartyProviderAccurint
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DmConfigThirdpartyProviderAccurint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmConfigThirdpartyProviderAccurint} obj Optional instance to populate.
   * @return {module:model/DmConfigThirdpartyProviderAccurint} The populated <code>DmConfigThirdpartyProviderAccurint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('credentials')) {
        obj['credentials'] = DmConfigThirdpartyProviderAccurintCredentials.constructFromObject(data['credentials']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {module:model/DmConfigThirdpartyProviderAccurintCredentials} credentials
   */
  exports.prototype['credentials'] = undefined;



  return exports;
}));


