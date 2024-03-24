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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo model module.
   * @module model/PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo</code>.
   * @alias module:model/PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo} The populated <code>PtsV2PaymentsOrderPost201ResponseOrderInformationShipTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * shipping method for the product. Possible values are: - `sameday` - `oneday` - `twoday` - `threeday` - `lowcost` - `pickup` - `other` - `none` 
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * First name of the recipient. 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name of the recipient. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * First line of the shipping address. 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Second line of the shipping address 
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * City of the shipping address. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Postal code of shipping address. Consists of 5 to 9 digits. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * State or province of shipping address. This is a State, Province, and Territory Codes for the United States and Canada. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Country of shipping address. This is a two-character ISO Standard Country Codes. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Phone number of shipping address. 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


