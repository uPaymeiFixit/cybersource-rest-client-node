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
    define(['ApiClient', 'model/Microformv2sessionsCheckoutApiInitialization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Microformv2sessionsCheckoutApiInitialization'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.GenerateCaptureContextRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Microformv2sessionsCheckoutApiInitialization);
  }
}(this, function(ApiClient, Microformv2sessionsCheckoutApiInitialization) {
  'use strict';




  /**
   * The GenerateCaptureContextRequest model module.
   * @module model/GenerateCaptureContextRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GenerateCaptureContextRequest</code>.
   * This is a server-to-server API request to generate the capture context that can be used to initiate instance of microform on a acceptance page.   The capture context is a digitally signed JWT that provides authentication, one-time keys, and the target origin to the Microform Integration application. 
   * @alias module:model/GenerateCaptureContextRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GenerateCaptureContextRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenerateCaptureContextRequest} obj Optional instance to populate.
   * @return {module:model/GenerateCaptureContextRequest} The populated <code>GenerateCaptureContextRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetOrigins')) {
        obj['targetOrigins'] = ApiClient.convertToType(data['targetOrigins'], ['String']);
      }
      if (data.hasOwnProperty('allowedCardNetworks')) {
        obj['allowedCardNetworks'] = ApiClient.convertToType(data['allowedCardNetworks'], ['String']);
      }
      if (data.hasOwnProperty('clientVersion')) {
        obj['clientVersion'] = ApiClient.convertToType(data['clientVersion'], 'String');
      }
      if (data.hasOwnProperty('checkoutApiInitialization')) {
        obj['checkoutApiInitialization'] = Microformv2sessionsCheckoutApiInitialization.constructFromObject(data['checkoutApiInitialization']);
      }
    }
    return obj;
  }

  /**
   * The merchant origin domain (e.g. https://example.com) used to initiate microform Integration. Required to comply with CORS and CSP standards.
   * @member {Array.<String>} targetOrigins
   */
  exports.prototype['targetOrigins'] = undefined;
  /**
   * @member {Array.<String>} allowedCardNetworks
   */
  exports.prototype['allowedCardNetworks'] = undefined;
  /**
   * @member {String} clientVersion
   */
  exports.prototype['clientVersion'] = undefined;
  /**
   * @member {module:model/Microformv2sessionsCheckoutApiInitialization} checkoutApiInitialization
   */
  exports.prototype['checkoutApiInitialization'] = undefined;



  return exports;
}));


