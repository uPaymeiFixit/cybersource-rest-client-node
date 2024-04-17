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
    root.CyberSource.TmsEmbeddedInstrumentIdentifierTokenizedCardCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TmsEmbeddedInstrumentIdentifierTokenizedCardCard model module.
   * @module model/TmsEmbeddedInstrumentIdentifierTokenizedCardCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsEmbeddedInstrumentIdentifierTokenizedCardCard</code>.
   * The latest card details associated with the network token
   * @alias module:model/TmsEmbeddedInstrumentIdentifierTokenizedCardCard
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TmsEmbeddedInstrumentIdentifierTokenizedCardCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsEmbeddedInstrumentIdentifierTokenizedCardCard} obj Optional instance to populate.
   * @return {module:model/TmsEmbeddedInstrumentIdentifierTokenizedCardCard} The populated <code>TmsEmbeddedInstrumentIdentifierTokenizedCardCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('suffix')) {
        obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
    }
    return obj;
  }

  /**
   * The customer's latest payment card number suffix 
   * @member {String} suffix
   */
  exports.prototype['suffix'] = undefined;
  /**
   *  Two-digit month in which the customer's latest payment card expires.  Format: `MM`.  Possible Values: `01` through `12`. 
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the customer's latest payment card expires.  Format: `YYYY`. 
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;



  return exports;
}));


