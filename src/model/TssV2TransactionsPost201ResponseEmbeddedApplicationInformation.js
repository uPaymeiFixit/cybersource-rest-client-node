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
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponseApplicationInformationApplications'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponseApplicationInformationApplications'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedApplicationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponseApplicationInformationApplications);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponseApplicationInformationApplications) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedApplicationInformation model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedApplicationInformation</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedApplicationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation} The populated <code>TssV2TransactionsPost201ResponseEmbeddedApplicationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reasonCode')) {
        obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
      }
      if (data.hasOwnProperty('rCode')) {
        obj['rCode'] = ApiClient.convertToType(data['rCode'], 'String');
      }
      if (data.hasOwnProperty('rFlag')) {
        obj['rFlag'] = ApiClient.convertToType(data['rFlag'], 'String');
      }
      if (data.hasOwnProperty('applications')) {
        obj['applications'] = ApiClient.convertToType(data['applications'], [TssV2TransactionsGet200ResponseApplicationInformationApplications]);
      }
      if (data.hasOwnProperty('returnCode')) {
        obj['returnCode'] = ApiClient.convertToType(data['returnCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * The status of the submitted transaction.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Indicates the reason why a request succeeded or failed and possible action to take if a request fails.  For details, see the appendix of reason codes in the documentation for the relevant payment method. 
   * @member {String} reasonCode
   */
  exports.prototype['reasonCode'] = undefined;
  /**
   * Indicates whether the service request was successful. Possible values:  - `-1`: An error occurred. - `0`: The request was declined. - `1`: The request was successful.  For details, see `auth_rcode` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} rCode
   */
  exports.prototype['rCode'] = undefined;
  /**
   * One-word description of the result of the application.  For details, see `auth_rflag` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} rFlag
   */
  exports.prototype['rFlag'] = undefined;
  /**
   * @member {Array.<module:model/TssV2TransactionsGet200ResponseApplicationInformationApplications>} applications
   */
  exports.prototype['applications'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} returnCode
   */
  exports.prototype['returnCode'] = undefined;



  return exports;
}));

