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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidrefundsOrderInformationLineItems = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsTaxDetails);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationAmountDetailsTaxDetails) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsOrderInformationLineItems model module.
   * @module model/Ptsv2paymentsidrefundsOrderInformationLineItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsOrderInformationLineItems</code>.
   * @alias module:model/Ptsv2paymentsidrefundsOrderInformationLineItems
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsOrderInformationLineItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsOrderInformationLineItems} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsOrderInformationLineItems} The populated <code>Ptsv2paymentsidrefundsOrderInformationLineItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('productName')) {
        obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
      }
      if (data.hasOwnProperty('productSku')) {
        obj['productSku'] = ApiClient.convertToType(data['productSku'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
      if (data.hasOwnProperty('unitOfMeasure')) {
        obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
      }
      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
      if (data.hasOwnProperty('taxRate')) {
        obj['taxRate'] = ApiClient.convertToType(data['taxRate'], 'String');
      }
      if (data.hasOwnProperty('taxAppliedAfterDiscount')) {
        obj['taxAppliedAfterDiscount'] = ApiClient.convertToType(data['taxAppliedAfterDiscount'], 'String');
      }
      if (data.hasOwnProperty('taxStatusIndicator')) {
        obj['taxStatusIndicator'] = ApiClient.convertToType(data['taxStatusIndicator'], 'String');
      }
      if (data.hasOwnProperty('taxTypeCode')) {
        obj['taxTypeCode'] = ApiClient.convertToType(data['taxTypeCode'], 'String');
      }
      if (data.hasOwnProperty('amountIncludesTax')) {
        obj['amountIncludesTax'] = ApiClient.convertToType(data['amountIncludesTax'], 'Boolean');
      }
      if (data.hasOwnProperty('typeOfSupply')) {
        obj['typeOfSupply'] = ApiClient.convertToType(data['typeOfSupply'], 'String');
      }
      if (data.hasOwnProperty('commodityCode')) {
        obj['commodityCode'] = ApiClient.convertToType(data['commodityCode'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'String');
      }
      if (data.hasOwnProperty('discountApplied')) {
        obj['discountApplied'] = ApiClient.convertToType(data['discountApplied'], 'Boolean');
      }
      if (data.hasOwnProperty('discountRate')) {
        obj['discountRate'] = ApiClient.convertToType(data['discountRate'], 'String');
      }
      if (data.hasOwnProperty('invoiceNumber')) {
        obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
      }
      if (data.hasOwnProperty('taxDetails')) {
        obj['taxDetails'] = ApiClient.convertToType(data['taxDetails'], [Ptsv2paymentsOrderInformationAmountDetailsTaxDetails]);
      }
    }
    return obj;
  }

  /**
   * Type of product. The value for this field is used to identify the product category (electronic, handling, physical, service, or shipping). The default value is `default`.  If you are performing an authorization transaction (`processingOptions.capture` is set to `false`), and you set this field to a value other than `default` or one of the values related to shipping and/or handling, then `orderInformation.lineItems[].quantity`, `orderInformation.lineItems[].productName`, and `orderInformation.lineItems[].productSku` fields are required.  Optional field.  For details, see the `product_code` field description in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/).  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  The Product Codes for the tax service are located in the Cybersource Tax Codes guide. Contact Customer Support to request the guide. If you don't send a tax service Product Code in your tax request, product-based rules or exemptions will not be applied and the transaction will default to fully taxable in the locations where you've indicated you need to collect tax [by way of nexus, no nexus, or seller registration number fields]. 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * For an authorization or capture transaction (`processingOptions.capture` is `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} productName
   */
  exports.prototype['productName'] = undefined;
  /**
   * Product identifier code. Also known as the Stock Keeping Unit (SKU) code for the product.  For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not set to **default** or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S. and Canadian taxes. Not applicable to international and value added taxes. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the values related to shipping and/or handling. 
   * @member {String} productSku
   */
  exports.prototype['productSku'] = undefined;
  /**
   * Number of units for this order. Must be a non-negative integer.  The default is `1`. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Per-item price of the product. This value for this field cannot be negative.  You must include either this field or the request-level field `orderInformation.amountDetails.totalAmount` in your request.  You can include a decimal point (.), but you cannot include any other special characters. The value is truncated to the correct number of decimal places.  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either the 1st line item in the order and this field, or the request-level field `orderInformation.amountDetails.totalAmount` in your request.  #### FDMS South If you accept IDR or CLP currencies, see the entry for FDMS South in the [Merchant Descriptors Using the SCMP API Guide.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### Tax Calculation Required field for U.S., Canadian, international and value added taxes.  #### Zero Amount Authorizations If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen.  #### Maximum Field Lengths For GPN and JCN Gateway: Decimal (10) All other processors: Decimal (15) 
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * Unit of measure, or unit of measure code, for the item. 
   * @member {String} unitOfMeasure
   */
  exports.prototype['unitOfMeasure'] = undefined;
  /**
   * Total amount for the item. Normally calculated as the unit price times quantity.  When `orderInformation.lineItems[].productCode` is \"gift_card\", this is the purchase amount total for prepaid gift cards in major units.  Example: 123.45 USD = 123 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Total tax to apply to the product. This value cannot be negative. The tax amount and the offer amount must be in the same currency. The tax amount field is additive.  The following example uses a two-exponent currency such as USD:   1. You include each line item in your request.  ..- 1st line item has amount=10.00, quantity=1, and taxAmount=0.80  ..- 2nd line item has amount=20.00, quantity=1, and taxAmount=1.60  2. The total amount authorized will be 32.40, not 30.00 with 2.40 of tax included.  Optional field.  #### Airlines processing Tax portion of the order amount. This value cannot exceed 99999999999999 (fourteen 9s). Format: English characters only. Optional request field for a line item.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  Note if you send this field in your tax request, the value in the field will override the tax engine 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * Tax rate applied to the item.  For details, see `tax_rate` field description in the [Level II and Level III Processing Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/)  **Visa**: Valid range is 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated).  **Mastercard**: Valid range is 0.00001 to 0.99999 (0.001% to 99.999%). 
   * @member {String} taxRate
   */
  exports.prototype['taxRate'] = undefined;
  /**
   * Flag to indicate how you handle discount at the line item level.   - 0: no line level discount provided  - 1: tax was calculated on the post-discount line item total  - 2: tax was calculated on the pre-discount line item total  `Note` Visa will inset 0 (zero) if an invalid value is included in this field.  This field relates to the value in the _lineItems[].discountAmount_ field. 
   * @member {String} taxAppliedAfterDiscount
   */
  exports.prototype['taxAppliedAfterDiscount'] = undefined;
  /**
   * Flag to indicate whether tax is exempted or not included.   - 0: tax not included  - 1: tax included  - 2: transaction is not subject to tax 
   * @member {String} taxStatusIndicator
   */
  exports.prototype['taxStatusIndicator'] = undefined;
  /**
   * Type of tax being applied to the item.  For possible values, see the processor-specific field descriptions in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/):  #### FDC Nashville Global - `alternate_tax_type_applied` - `alternate_tax_type_identifier`  #### Worldpay VAP - `alternate_tax_type_identifier`  #### RBS WorldPay Atlanta - `tax_type_applied`  #### TSYS Acquiring Solutions - `tax_type_applied` - `local_tax_indicator`  #### Chase Paymentech Solutions - `tax_type_applied`  #### Elavon Americas - `local_tax_indicator`  #### FDC Compass - `tax_type_applied`  #### OmniPay Direct - `local_tax_indicator` 
   * @member {String} taxTypeCode
   */
  exports.prototype['taxTypeCode'] = undefined;
  /**
   * Flag that indicates whether the tax amount is included in the Line Item Total.  Possible values:  - **true**  - **false** 
   * @member {Boolean} amountIncludesTax
   */
  exports.prototype['amountIncludesTax'] = undefined;
  /**
   * Flag to indicate whether the purchase is categorized as goods or services. Possible values:   - 00: goods  - 01: services 
   * @member {String} typeOfSupply
   */
  exports.prototype['typeOfSupply'] = undefined;
  /**
   * Commodity code or International description code used to classify the item. Contact your acquirer for a list of codes. 
   * @member {String} commodityCode
   */
  exports.prototype['commodityCode'] = undefined;
  /**
   * Discount applied to the item.
   * @member {String} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Flag that indicates whether the amount is discounted.  If you do not provide a value but you set Discount Amount to a value greater than zero, then CyberSource sets this field to **true**.  Possible values:  - **true**  - **false** 
   * @member {Boolean} discountApplied
   */
  exports.prototype['discountApplied'] = undefined;
  /**
   * Rate the item is discounted. Maximum of 2 decimal places.  Example 5.25 (=5.25%) 
   * @member {String} discountRate
   */
  exports.prototype['discountRate'] = undefined;
  /**
   * Field to support an invoice number for a transaction. You must specify the number of line items that will include an invoice number. By default, the first line item will include an invoice number field. The invoice number field can be included for up to 10 line items. 
   * @member {String} invoiceNumber
   */
  exports.prototype['invoiceNumber'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>} taxDetails
   */
  exports.prototype['taxDetails'] = undefined;



  return exports;
}));


