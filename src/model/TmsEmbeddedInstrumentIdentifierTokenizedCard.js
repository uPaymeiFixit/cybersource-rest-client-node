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
    define(['ApiClient', 'model/TmsEmbeddedInstrumentIdentifierTokenizedCardCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsEmbeddedInstrumentIdentifierTokenizedCardCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TmsEmbeddedInstrumentIdentifierTokenizedCard = factory(root.CyberSource.ApiClient, root.CyberSource.TmsEmbeddedInstrumentIdentifierTokenizedCardCard);
  }
}(this, function(ApiClient, TmsEmbeddedInstrumentIdentifierTokenizedCardCard) {
  'use strict';




  /**
   * The TmsEmbeddedInstrumentIdentifierTokenizedCard model module.
   * @module model/TmsEmbeddedInstrumentIdentifierTokenizedCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsEmbeddedInstrumentIdentifierTokenizedCard</code>.
   * @alias module:model/TmsEmbeddedInstrumentIdentifierTokenizedCard
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>TmsEmbeddedInstrumentIdentifierTokenizedCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsEmbeddedInstrumentIdentifierTokenizedCard} obj Optional instance to populate.
   * @return {module:model/TmsEmbeddedInstrumentIdentifierTokenizedCard} The populated <code>TmsEmbeddedInstrumentIdentifierTokenizedCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('enrollmentId')) {
        obj['enrollmentId'] = ApiClient.convertToType(data['enrollmentId'], 'String');
      }
      if (data.hasOwnProperty('tokenReferenceId')) {
        obj['tokenReferenceId'] = ApiClient.convertToType(data['tokenReferenceId'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('cryptogram')) {
        obj['cryptogram'] = ApiClient.convertToType(data['cryptogram'], 'String');
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = TmsEmbeddedInstrumentIdentifierTokenizedCardCard.constructFromObject(data['card']);
      }
    }
    return obj;
  }

  /**
   * The network token card association brand Possible Values: - visa - mastercard - americanexpress 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * State of the network token or network token provision Possible Values: - ACTIVE : Network token is active. - SUSPENDED : Network token is suspended. This state can change back to ACTIVE. - DELETED : This is a final state for a network token instance. - UNPROVISIONED : A previous network token provision was unsuccessful. 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Unique Identifier for the enrolled PAN. This Id is provided by the card association when a network token is provisioned successfully. 
   * @member {String} enrollmentId
   */
  exports.prototype['enrollmentId'] = undefined;
  /**
   * Unique Identifier for the network token. This Id is provided by the card association when a network token is provisioned successfully. 
   * @member {String} tokenReferenceId
   */
  exports.prototype['tokenReferenceId'] = undefined;
  /**
   * Issuers state for the network token Possible Values: - INVALID_REQUEST : The network token provision request contained invalid data. - CARD_VERIFICATION_FAILED : The network token provision request contained data that could not be verified. - CARD_NOT_ELIGIBLE : Card can currently not be used with issuer for tokenization. - CARD_NOT_ALLOWED : Card can currently not be used with card association for tokenization. - DECLINED : Card can currently not be used with issuer for tokenization. - SERVICE_UNAVAILABLE : The network token service was unavailable or timed out. - SYSTEM_ERROR : An unexpected error occurred with network token service, check configuration. 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The token requestors network token 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Two-digit month in which the network token expires.  Format: `MM`.  Possible Values: `01` through `12`. 
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the network token expires.  Format: `YYYY`. 
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * Generated value used in conjunction with the network token for making a payment. 
   * @member {String} cryptogram
   */
  exports.prototype['cryptogram'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierTokenizedCardCard} card
   */
  exports.prototype['card'] = undefined;



  return exports;
}));


