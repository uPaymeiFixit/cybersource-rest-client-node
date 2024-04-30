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
    root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationFeatures = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePaymentInformationFeatures model module.
   * @module model/TssV2TransactionsGet200ResponsePaymentInformationFeatures
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePaymentInformationFeatures</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePaymentInformationFeatures
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePaymentInformationFeatures</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePaymentInformationFeatures} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePaymentInformationFeatures} The populated <code>TssV2TransactionsGet200ResponsePaymentInformationFeatures</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountFundingSource')) {
        obj['accountFundingSource'] = ApiClient.convertToType(data['accountFundingSource'], 'String');
      }
      if (data.hasOwnProperty('accountFundingSourceSubType')) {
        obj['accountFundingSourceSubType'] = ApiClient.convertToType(data['accountFundingSourceSubType'], 'String');
      }
      if (data.hasOwnProperty('cardProduct')) {
        obj['cardProduct'] = ApiClient.convertToType(data['cardProduct'], 'String');
      }
      if (data.hasOwnProperty('messageType')) {
        obj['messageType'] = ApiClient.convertToType(data['messageType'], 'String');
      }
      if (data.hasOwnProperty('acceptanceLevel')) {
        obj['acceptanceLevel'] = ApiClient.convertToType(data['acceptanceLevel'], 'String');
      }
      if (data.hasOwnProperty('cardPlatform')) {
        obj['cardPlatform'] = ApiClient.convertToType(data['cardPlatform'], 'String');
      }
      if (data.hasOwnProperty('comboCard')) {
        obj['comboCard'] = ApiClient.convertToType(data['comboCard'], 'String');
      }
    }
    return obj;
  }

  /**
   * This field contains the account funding source. Possible values:   - `CREDIT`   - `DEBIT`   - `PREPAID`   - `DEFERRED DEBIT`   - `CHARGE` 
   * @member {String} accountFundingSource
   */
  exports.prototype['accountFundingSource'] = undefined;
  /**
   * This field contains the type of prepaid card. Possible values:   - `Reloadable`   - `Non-reloadable` 
   * @member {String} accountFundingSourceSubType
   */
  exports.prototype['accountFundingSourceSubType'] = undefined;
  /**
   * This field contains the type of issuer product. Example values:   - Visa Classic   - Visa Signature   - Visa Infinite 
   * @member {String} cardProduct
   */
  exports.prototype['cardProduct'] = undefined;
  /**
   * This field contains the type of BIN based authentication. Possible values:   - `S`: Single Message   - `D`: Dual Message 
   * @member {String} messageType
   */
  exports.prototype['messageType'] = undefined;
  /**
   * This field contains the acceptance level of the PAN. Possible values:   - `0` : Normal   - `1` : Monitor   - `2` : Refuse   - `3` : Not Allowed   - `4` : Private   - `5` : Test 
   * @member {String} acceptanceLevel
   */
  exports.prototype['acceptanceLevel'] = undefined;
  /**
   * This field contains the type of card platform. Possible values:   - `BUSINESS`   - `CONSUMER`   - `COMMERCIAL`   - `GOVERNMENT` 
   * @member {String} cardPlatform
   */
  exports.prototype['cardPlatform'] = undefined;
  /**
   * This field indicates the type of combo card. Possible values:   - 0 (Not a combo card)   - 1 (Credit and Prepaid Combo card)   - 2 (Credit and Debit Combo card) 
   * @member {String} comboCard
   */
  exports.prototype['comboCard'] = undefined;



  return exports;
}));


