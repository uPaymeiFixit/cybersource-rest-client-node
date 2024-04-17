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
    define(['ApiClient', 'model/Ptsv2paymentsidreversalsReversalInformationAmountDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidreversalsReversalInformationAmountDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidreversalsReversalInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidreversalsReversalInformationAmountDetails);
  }
}(this, function(ApiClient, Ptsv2paymentsidreversalsReversalInformationAmountDetails) {
  'use strict';




  /**
   * The Ptsv2paymentsidreversalsReversalInformation model module.
   * @module model/Ptsv2paymentsidreversalsReversalInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidreversalsReversalInformation</code>.
   * @alias module:model/Ptsv2paymentsidreversalsReversalInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsidreversalsReversalInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidreversalsReversalInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidreversalsReversalInformation} The populated <code>Ptsv2paymentsidreversalsReversalInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = Ptsv2paymentsidreversalsReversalInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsidreversalsReversalInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * Reason for the authorization reversal. Possible value:   - `34`: Suspected fraud  This field is ignored for processors that do not support this value.  Returned by authorization reversal. 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;



  return exports;
}));


