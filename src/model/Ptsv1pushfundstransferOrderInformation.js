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
    define(['ApiClient', 'model/Ptsv1pushfundstransferOrderInformationAmountDetails', 'model/Ptsv1pushfundstransferOrderInformationSurcharge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv1pushfundstransferOrderInformationAmountDetails'), require('./Ptsv1pushfundstransferOrderInformationSurcharge'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv1pushfundstransferOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv1pushfundstransferOrderInformationAmountDetails, root.CyberSource.Ptsv1pushfundstransferOrderInformationSurcharge);
  }
}(this, function(ApiClient, Ptsv1pushfundstransferOrderInformationAmountDetails, Ptsv1pushfundstransferOrderInformationSurcharge) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferOrderInformation model module.
   * @module model/Ptsv1pushfundstransferOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferOrderInformation</code>.
   * @alias module:model/Ptsv1pushfundstransferOrderInformation
   * @class
   * @param amountDetails {module:model/Ptsv1pushfundstransferOrderInformationAmountDetails} 
   */
  var exports = function(amountDetails) {
    var _this = this;

    _this['amountDetails'] = amountDetails;


  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferOrderInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferOrderInformation} The populated <code>Ptsv1pushfundstransferOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = Ptsv1pushfundstransferOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('isCryptocurrencyPurchase')) {
        obj['isCryptocurrencyPurchase'] = ApiClient.convertToType(data['isCryptocurrencyPurchase'], 'String');
      }
      if (data.hasOwnProperty('surcharge')) {
        obj['surcharge'] = Ptsv1pushfundstransferOrderInformationSurcharge.constructFromObject(data['surcharge']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv1pushfundstransferOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * This indicates that the funds transfer is for a crypto currency transaction. Optional Y/y, true N/n, false 
   * @member {String} isCryptocurrencyPurchase
   */
  exports.prototype['isCryptocurrencyPurchase'] = undefined;
  /**
   * @member {module:model/Ptsv1pushfundstransferOrderInformationSurcharge} surcharge
   */
  exports.prototype['surcharge'] = undefined;



  return exports;
}));


