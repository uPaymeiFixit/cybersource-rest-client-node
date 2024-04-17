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
    define(['ApiClient', 'model/Ptsv2paymentsTravelInformationAutoRentalRentalAddress', 'model/Ptsv2paymentsTravelInformationAutoRentalReturnAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsTravelInformationAutoRentalRentalAddress'), require('./Ptsv2paymentsTravelInformationAutoRentalReturnAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentreferencesTravelInformationAutoRental = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsTravelInformationAutoRentalRentalAddress, root.CyberSource.Ptsv2paymentsTravelInformationAutoRentalReturnAddress);
  }
}(this, function(ApiClient, Ptsv2paymentsTravelInformationAutoRentalRentalAddress, Ptsv2paymentsTravelInformationAutoRentalReturnAddress) {
  'use strict';




  /**
   * The Ptsv2paymentreferencesTravelInformationAutoRental model module.
   * @module model/Ptsv2paymentreferencesTravelInformationAutoRental
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentreferencesTravelInformationAutoRental</code>.
   * @alias module:model/Ptsv2paymentreferencesTravelInformationAutoRental
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Ptsv2paymentreferencesTravelInformationAutoRental</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentreferencesTravelInformationAutoRental} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentreferencesTravelInformationAutoRental} The populated <code>Ptsv2paymentreferencesTravelInformationAutoRental</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('affiliateName')) {
        obj['affiliateName'] = ApiClient.convertToType(data['affiliateName'], 'String');
      }
      if (data.hasOwnProperty('rentalAddress')) {
        obj['rentalAddress'] = Ptsv2paymentsTravelInformationAutoRentalRentalAddress.constructFromObject(data['rentalAddress']);
      }
      if (data.hasOwnProperty('returnAddress')) {
        obj['returnAddress'] = Ptsv2paymentsTravelInformationAutoRentalReturnAddress.constructFromObject(data['returnAddress']);
      }
      if (data.hasOwnProperty('returnDateTime')) {
        obj['returnDateTime'] = ApiClient.convertToType(data['returnDateTime'], 'String');
      }
      if (data.hasOwnProperty('rentalDateTime')) {
        obj['rentalDateTime'] = ApiClient.convertToType(data['rentalDateTime'], 'String');
      }
      if (data.hasOwnProperty('customerName')) {
        obj['customerName'] = ApiClient.convertToType(data['customerName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Merchant to send their auto rental company name 
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * When merchant wants to send the affiliate name. 
   * @member {String} affiliateName
   */
  exports.prototype['affiliateName'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTravelInformationAutoRentalRentalAddress} rentalAddress
   */
  exports.prototype['rentalAddress'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTravelInformationAutoRentalReturnAddress} returnAddress
   */
  exports.prototype['returnAddress'] = undefined;
  /**
   * Date/time the auto was returned to the rental agency. Format: ``yyyy-MM-dd HH-mm-ss z`` This field is supported for Visa, MasterCard, and American Express. 
   * @member {String} returnDateTime
   */
  exports.prototype['returnDateTime'] = undefined;
  /**
   * Date/time the auto was picked up from the rental agency. Format: `yyyy-MM-dd HH-mm-ss z` This field is supported for Visa, MasterCard, and American Express. 
   * @member {String} rentalDateTime
   */
  exports.prototype['rentalDateTime'] = undefined;
  /**
   * Name of the individual making the rental agreement.  Valid data lengths by card:  |Card Specific Validation|VISA|MasterCard|Discover|AMEX| |--- |--- |--- |--- | | Filed Length| 40| 40| 29| 26| | Field Type| AN| ANS| AN| AN| | M/O/C| O| M| M| M| 
   * @member {String} customerName
   */
  exports.prototype['customerName'] = undefined;



  return exports;
}));


