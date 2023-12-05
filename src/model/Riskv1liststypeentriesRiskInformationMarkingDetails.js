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
    root.CyberSource.Riskv1liststypeentriesRiskInformationMarkingDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1liststypeentriesRiskInformationMarkingDetails model module.
   * @module model/Riskv1liststypeentriesRiskInformationMarkingDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1liststypeentriesRiskInformationMarkingDetails</code>.
   * Details for marking the transaction as either positive or negative.
   * @alias module:model/Riskv1liststypeentriesRiskInformationMarkingDetails
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Riskv1liststypeentriesRiskInformationMarkingDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1liststypeentriesRiskInformationMarkingDetails} obj Optional instance to populate.
   * @return {module:model/Riskv1liststypeentriesRiskInformationMarkingDetails} The populated <code>Riskv1liststypeentriesRiskInformationMarkingDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('recordName')) {
        obj['recordName'] = ApiClient.convertToType(data['recordName'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
    }
    return obj;
  }

  /**
   * Notes or details that explain the reasons for adding the transaction to either the positive or negative list.
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * Reason for adding the transaction to the negative list. This field can contain one of the following values: - `fraud_chargeback:` You have received a fraud-related chargeback for the transaction. - `non_fraud_chargeback:` You have received a non-fraudulent chargeback for the transaction. - `suspected:` You believe that you will probably receive a chargeback for the transaction. - `creditback:` You issued a refund to the customer to avoid a chargeback for the transaction. 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Name of the customer's record entered in the list. For the positive list, it is required if `action_ code`=`add_positive`. If absent from the request, `ics_risk_update` creates the value for this field by concatenating the customer's first and last names. For the negative and the review lists, `record_name`, `customer_firstname`, and `customer_lastname` are optional. 
   * @member {String} recordName
   */
  exports.prototype['recordName'] = undefined;
  /**
   * Indicates whether to add to or remove a customer's identity from the negative or positive list. This field can contain one of the following values: - add: Add information to the list. - convert: moves the data. - delete: deletes the data from the list. 
   * @member {String} action
   */
  exports.prototype['action'] = undefined;



  return exports;
}));


