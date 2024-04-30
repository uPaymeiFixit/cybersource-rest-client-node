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
    root.CyberSource.Vasv2taxTaxInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Vasv2taxTaxInformation model module.
   * @module model/Vasv2taxTaxInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Vasv2taxTaxInformation</code>.
   * @alias module:model/Vasv2taxTaxInformation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Vasv2taxTaxInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2taxTaxInformation} obj Optional instance to populate.
   * @return {module:model/Vasv2taxTaxInformation} The populated <code>Vasv2taxTaxInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reportingDate')) {
        obj['reportingDate'] = ApiClient.convertToType(data['reportingDate'], 'String');
      }
      if (data.hasOwnProperty('dateOverrideReason')) {
        obj['dateOverrideReason'] = ApiClient.convertToType(data['dateOverrideReason'], 'String');
      }
      if (data.hasOwnProperty('nexus')) {
        obj['nexus'] = ApiClient.convertToType(data['nexus'], ['String']);
      }
      if (data.hasOwnProperty('noNexus')) {
        obj['noNexus'] = ApiClient.convertToType(data['noNexus'], ['String']);
      }
      if (data.hasOwnProperty('showTaxPerLineItem')) {
        obj['showTaxPerLineItem'] = ApiClient.convertToType(data['showTaxPerLineItem'], 'String');
      }
      if (data.hasOwnProperty('commitIndicator')) {
        obj['commitIndicator'] = ApiClient.convertToType(data['commitIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('refundIndicator')) {
        obj['refundIndicator'] = ApiClient.convertToType(data['refundIndicator'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Reporting date of transaction. Format: YYYYMMDD. Defaults to current date if not specified. Optional for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} reportingDate
   */
  exports.prototype['reportingDate'] = undefined;
  /**
   * If a past or future date is specified in `orderInformation.invoiceDetails.invoiceDate`, then provide the reason for that for audit purposes. Typical reasons include: 'Return', 'Layaway', 'Imported'.  Optional for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} dateOverrideReason
   */
  exports.prototype['dateOverrideReason'] = undefined;
  /**
   * Comma-separated list of states or provinces in which merchandise is taxable. Note merchandise may be still be non-taxable or tax exempt depending on the product taxability. Indicate the type of product you are selling in the product code field for product-level taxability rules to be applied. Do not use both the `taxInformation.nexus` and `taxInformation.noNexus` fields in your request. If you do not include this field in a tax calculation service request, the tax system makes its calculations as if you have nexus in every US state or Canadian province. Use the [State, Province, and Territory Codes for the United States and Canada](https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf).  If you indicate you do not have nexus in the destination state, jurisdiction level fields are left blank in the Tax Detail Report.  Optional field for U.S. and Canadian taxes only. Either this field or `taxInformation.noNexus` is required if you do not have nexus in every state or province.  Not applicable for international and value added taxes. 
   * @member {Array.<String>} nexus
   */
  exports.prototype['nexus'] = undefined;
  /**
   * Comma-separated list of states or provinces where you do not have nexus. Check with a tax advisor to determine where your business has nexus. Do not use both the `taxInformation.nexus` and `taxInformation.noNexus` fields in your request. If you do not include this field in a tax calculation service request, the tax system makes its calculations as if you have nexus in every US state or Canadian province. Use the [State, Province, and Territory Codes for the United States and Canada](https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf).  If you indicate you do not have nexus in the destination state, jurisdiction level fields are left blank in the Tax Detail Report.  Optional field for U.S. and Canadian taxes only. Either this field or `taxInformation.nexus` is required if you do not have nexus in every state or province.  Not applicable for international and value added taxes. 
   * @member {Array.<String>} noNexus
   */
  exports.prototype['noNexus'] = undefined;
  /**
   * Whether or not to display tax amounts for each line item. This field can contain one of the following values: - `Yes` - Display tax amounts for each line item - `No` (default) - Do not display tax amounts for each line item  Optional for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} showTaxPerLineItem
   */
  exports.prototype['showTaxPerLineItem'] = undefined;
  /**
   * Indicates whether this is a committed tax transaction. For a committed tax transaction, the status in the Tax Detail Report is \"Committed.\" For an uncommitted tax transaction, the status in the Tax Detail Report is \"Uncommitted.\" Possible values: - `true`: This is a committed tax transaction. - `false` (default): This is not a committed tax transaction.  A committed tax request is a tax service request that sets the status field in the Tax Detail Report to committed. The committed status indicates that the amount calculated by the tax service is included in the amount of a capture or credit.  Use a void service request to cancel a committed tax request or a committed refund tax request. The void transaction is included as a separate entry in the Tax Detail Report. The value of the status field is cancelled. The value of the link ID is the request ID of the committed tax request or refund tax request that was voided. You can use the value of the link ID to reconcile your orders.  Optional for U.S., Canadian, international tax, and value added taxes. For more information on Tax Detail Report features refer the [Tax Service Guide](https://developer.cybersource.com/docs/cybs/en-us/tax-calculation/developer/all/rest/tax-calculation/tax-overview.html). 
   * @member {Boolean} commitIndicator
   */
  exports.prototype['commitIndicator'] = undefined;
  /**
   * Indicates whether this is a refund tax transaction. For a refund tax transaction, amounts in the Tax Detail Report will be negative. Possible values: - `true`: This is a refund tax transaction. - `false` (default): This is not a refund tax transaction.  A refund tax request is a tax service request that sets the transaction type field in the Tax Detail Report to refunded and makes the reported amount negative. Tax amounts are returned as positive amounts in reply messages, but they are saved in reports as negative amounts which enables the reporting software to accurately calculate the aggregate amounts.  Optional for U.S., Canadian, international tax, and value added taxes. For more information on Tax Detail Report features refer the [Tax Service Guide](https://developer.cybersource.com/docs/cybs/en-us/tax-calculation/developer/all/rest/tax-calculation/tax-overview.html). 
   * @member {Boolean} refundIndicator
   */
  exports.prototype['refundIndicator'] = undefined;



  return exports;
}));


