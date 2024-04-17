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
    root.CyberSource.PtsV1TransactionBatchesIdGet200ResponseLinksTransactions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV1TransactionBatchesIdGet200ResponseLinksTransactions model module.
   * @module model/PtsV1TransactionBatchesIdGet200ResponseLinksTransactions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV1TransactionBatchesIdGet200ResponseLinksTransactions</code>.
   * @alias module:model/PtsV1TransactionBatchesIdGet200ResponseLinksTransactions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PtsV1TransactionBatchesIdGet200ResponseLinksTransactions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV1TransactionBatchesIdGet200ResponseLinksTransactions} obj Optional instance to populate.
   * @return {module:model/PtsV1TransactionBatchesIdGet200ResponseLinksTransactions} The populated <code>PtsV1TransactionBatchesIdGet200ResponseLinksTransactions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
    }
    return obj;
  }

  /**
   * Self link for this request
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {String} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));


