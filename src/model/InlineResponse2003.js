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
    define(['ApiClient', 'model/InlineResponse2003KeyInformation', 'model/Kmsv2keyssymClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2003KeyInformation'), require('./Kmsv2keyssymClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2003 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2003KeyInformation, root.CyberSource.Kmsv2keyssymClientReferenceInformation);
  }
}(this, function(ApiClient, InlineResponse2003KeyInformation, Kmsv2keyssymClientReferenceInformation) {
  'use strict';




  /**
   * The InlineResponse2003 model module.
   * @module model/InlineResponse2003
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * @alias module:model/InlineResponse2003
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Kmsv2keyssymClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('keyInformation')) {
        obj['keyInformation'] = ApiClient.convertToType(data['keyInformation'], [InlineResponse2003KeyInformation]);
      }
    }
    return obj;
  }

  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by authorization service.  #### PIN debit Time when the PIN debit credit, PIN debit purchase or PIN debit reversal was requested.  Returned by PIN debit credit, PIN debit purchase or PIN debit reversal. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * @member {module:model/Kmsv2keyssymClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse2003KeyInformation>} keyInformation
   */
  exports.prototype['keyInformation'] = undefined;



  return exports;
}));


