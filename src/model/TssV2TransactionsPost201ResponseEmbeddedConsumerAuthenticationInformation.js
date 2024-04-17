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
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation} The populated <code>TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('xid')) {
        obj['xid'] = ApiClient.convertToType(data['xid'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
      if (data.hasOwnProperty('eciRaw')) {
        obj['eciRaw'] = ApiClient.convertToType(data['eciRaw'], 'String');
      }
    }
    return obj;
  }

  /**
   * Transaction identifier.  For details, see `xid` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} xid
   */
  exports.prototype['xid'] = undefined;
  /**
   * Payer auth Transaction identifier.
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * Raw electronic commerce indicator (ECI).  For details, see `eci_raw` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} eciRaw
   */
  exports.prototype['eciRaw'] = undefined;



  return exports;
}));


