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
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponseProcessorInformationProcessor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponseProcessorInformationProcessor'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedProcessorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponseProcessorInformationProcessor);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponseProcessorInformationProcessor) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedProcessorInformation model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedProcessorInformation</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation} The populated <code>TssV2TransactionsPost201ResponseEmbeddedProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('processor')) {
        obj['processor'] = TssV2TransactionsGet200ResponseProcessorInformationProcessor.constructFromObject(data['processor']);
      }
      if (data.hasOwnProperty('approvalCode')) {
        obj['approvalCode'] = ApiClient.convertToType(data['approvalCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessorInformationProcessor} processor
   */
  exports.prototype['processor'] = undefined;
  /**
   * Authorization code. Returned only when the processor returns this value.  The length of this value depends on your processor.  Returned by authorization service.  #### PIN debit Authorization code that is returned by the processor.  Returned by PIN debit credit.  #### Elavon Encrypted Account Number Program The returned value is OFFLINE.  #### TSYS Acquiring Solutions The returned value for a successful zero amount authorization is 000000. 
   * @member {String} approvalCode
   */
  exports.prototype['approvalCode'] = undefined;



  return exports;
}));


