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
    root.CyberSource.Ptsv2paymentsRecipientInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsRecipientInformation model module.
   * @module model/Ptsv2paymentsRecipientInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsRecipientInformation</code>.
   * @alias module:model/Ptsv2paymentsRecipientInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Ptsv2paymentsRecipientInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsRecipientInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsRecipientInformation} The populated <code>Ptsv2paymentsRecipientInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('middleName')) {
        obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('dateOfBirth')) {
        obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'String');
      }
      if (data.hasOwnProperty('beneficiaryId')) {
        obj['beneficiaryId'] = ApiClient.convertToType(data['beneficiaryId'], 'String');
      }
      if (data.hasOwnProperty('beneficiaryName')) {
        obj['beneficiaryName'] = ApiClient.convertToType(data['beneficiaryName'], 'String');
      }
      if (data.hasOwnProperty('beneficiaryAddress')) {
        obj['beneficiaryAddress'] = ApiClient.convertToType(data['beneficiaryAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifier for the recipient's account. Use the first six digits and last four digits of the recipient's account number. This field is a _pass-through_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For details, see the `recipient_account_id` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * Recipient's last name. This field is a _passthrough_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For details, see the `recipient_lastname` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Recipient's middle name. This field is a _passthrough_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For details, see the `recipient_middlename` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} middleName
   */
  exports.prototype['middleName'] = undefined;
  /**
   * Partial postal code for the recipient's address. For example, if the postal code is **NN5 7SG**, the value for this field should be the first part of the postal code: **NN5**. This field is a _pass-through_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For details, see the `recipient_postal_code` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Recipient's date of birth. **Format**: `YYYYMMDD`.  This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For more details, see `recipient_date_of_birth` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} dateOfBirth
   */
  exports.prototype['dateOfBirth'] = undefined;
  /**
   * Only for e-wallets: ID, username, hash or anything uniquely identifying the ultimate beneficiary. 
   * @member {String} beneficiaryId
   */
  exports.prototype['beneficiaryId'] = undefined;
  /**
   * Only for e-wallets: The ultimate beneficiary's full name. 
   * @member {String} beneficiaryName
   */
  exports.prototype['beneficiaryName'] = undefined;
  /**
   * Only for e-wallets: The ultimate beneficiary's street address (street, zip code, city), excluding the country. Example: \"Main street 1, 12345, Barcelona 
   * @member {String} beneficiaryAddress
   */
  exports.prototype['beneficiaryAddress'] = undefined;



  return exports;
}));


