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
    define(['ApiClient', 'model/Ptsv2paymentsBuyerInformationPersonalIdentification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsBuyerInformationPersonalIdentification'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseBuyerInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsBuyerInformationPersonalIdentification);
  }
}(this, function(ApiClient, Ptsv2paymentsBuyerInformationPersonalIdentification) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseBuyerInformation model module.
   * @module model/PtsV2PaymentsPost201ResponseBuyerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseBuyerInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseBuyerInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseBuyerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseBuyerInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseBuyerInformation} The populated <code>PtsV2PaymentsPost201ResponseBuyerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantCustomerId')) {
        obj['merchantCustomerId'] = ApiClient.convertToType(data['merchantCustomerId'], 'String');
      }
      if (data.hasOwnProperty('dateOfBirth')) {
        obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'String');
      }
      if (data.hasOwnProperty('vatRegistrationNumber')) {
        obj['vatRegistrationNumber'] = ApiClient.convertToType(data['vatRegistrationNumber'], 'String');
      }
      if (data.hasOwnProperty('personalIdentification')) {
        obj['personalIdentification'] = ApiClient.convertToType(data['personalIdentification'], [Ptsv2paymentsBuyerInformationPersonalIdentification]);
      }
      if (data.hasOwnProperty('taxId')) {
        obj['taxId'] = ApiClient.convertToType(data['taxId'], 'String');
      }
      if (data.hasOwnProperty('loginId')) {
        obj['loginId'] = ApiClient.convertToType(data['loginId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Your identifier for the customer.  When a subscription or customer profile is being created, the maximum length for this field for most processors is 30. Otherwise, the maximum length is 100.  #### Comercio Latino For recurring payments in Mexico, the value is the customer's contract number. Note Before you request the authorization, you must inform the issuer of the customer contract numbers that will be used for recurring transactions.  #### Worldpay VAP For a follow-on credit with Worldpay VAP, CyberSource checks the following locations, in the order given, for a customer account ID value and uses the first value it finds: 1. `customer_account_id` value in the follow-on credit request 2. Customer account ID value that was used for the capture that is being credited 3. Customer account ID value that was used for the original authorization If a customer account ID value cannot be found in any of these locations, then no value is used.  For processor-specific information, see the `customer_account_id` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} merchantCustomerId
   */
  exports.prototype['merchantCustomerId'] = undefined;
  /**
   * Recipient's date of birth. **Format**: `YYYYMMDD`.  This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For more details, see `recipient_date_of_birth` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} dateOfBirth
   */
  exports.prototype['dateOfBirth'] = undefined;
  /**
   * Customer's government-assigned tax identification number.  #### Tax Calculation Optional for international and value added taxes only. Not applicable to U.S. and Canadian taxes.  For processor-specific information, see the purchaser_vat_registration_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} vatRegistrationNumber
   */
  exports.prototype['vatRegistrationNumber'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsBuyerInformationPersonalIdentification>} personalIdentification
   */
  exports.prototype['personalIdentification'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} taxId
   */
  exports.prototype['taxId'] = undefined;
  /**
   * The buyer's Alipay login Id, the id might be an email or mobile number. The id is partially masked for privacy. cao***@126.com  or 186***22156 
   * @member {String} loginId
   */
  exports.prototype['loginId'] = undefined;



  return exports;
}));


