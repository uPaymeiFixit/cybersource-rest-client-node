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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationAmountDetails', 'model/Ptsv2paymentsOrderInformationBillTo', 'model/Ptsv2paymentsOrderInformationInvoiceDetails', 'model/Ptsv2paymentsOrderInformationLineItems', 'model/Ptsv2paymentsOrderInformationShipTo', 'model/Ptsv2paymentsOrderInformationShippingDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationAmountDetails'), require('./Ptsv2paymentsOrderInformationBillTo'), require('./Ptsv2paymentsOrderInformationInvoiceDetails'), require('./Ptsv2paymentsOrderInformationLineItems'), require('./Ptsv2paymentsOrderInformationShipTo'), require('./Ptsv2paymentsOrderInformationShippingDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetails, root.CyberSource.Ptsv2paymentsOrderInformationBillTo, root.CyberSource.Ptsv2paymentsOrderInformationInvoiceDetails, root.CyberSource.Ptsv2paymentsOrderInformationLineItems, root.CyberSource.Ptsv2paymentsOrderInformationShipTo, root.CyberSource.Ptsv2paymentsOrderInformationShippingDetails);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationAmountDetails, Ptsv2paymentsOrderInformationBillTo, Ptsv2paymentsOrderInformationInvoiceDetails, Ptsv2paymentsOrderInformationLineItems, Ptsv2paymentsOrderInformationShipTo, Ptsv2paymentsOrderInformationShippingDetails) {
  'use strict';




  /**
   * The Ptsv2paymentsOrderInformation model module.
   * @module model/Ptsv2paymentsOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsOrderInformation</code>.
   * @alias module:model/Ptsv2paymentsOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Ptsv2paymentsOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsOrderInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsOrderInformation} The populated <code>Ptsv2paymentsOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = Ptsv2paymentsOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = Ptsv2paymentsOrderInformationBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('shipTo')) {
        obj['shipTo'] = Ptsv2paymentsOrderInformationShipTo.constructFromObject(data['shipTo']);
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [Ptsv2paymentsOrderInformationLineItems]);
      }
      if (data.hasOwnProperty('invoiceDetails')) {
        obj['invoiceDetails'] = Ptsv2paymentsOrderInformationInvoiceDetails.constructFromObject(data['invoiceDetails']);
      }
      if (data.hasOwnProperty('shippingDetails')) {
        obj['shippingDetails'] = Ptsv2paymentsOrderInformationShippingDetails.constructFromObject(data['shippingDetails']);
      }
      if (data.hasOwnProperty('returnsAccepted')) {
        obj['returnsAccepted'] = ApiClient.convertToType(data['returnsAccepted'], 'Boolean');
      }
      if (data.hasOwnProperty('isCryptocurrencyPurchase')) {
        obj['isCryptocurrencyPurchase'] = ApiClient.convertToType(data['isCryptocurrencyPurchase'], 'String');
      }
      if (data.hasOwnProperty('cutoffDateTime')) {
        obj['cutoffDateTime'] = ApiClient.convertToType(data['cutoffDateTime'], 'String');
      }
      if (data.hasOwnProperty('preOrder')) {
        obj['preOrder'] = ApiClient.convertToType(data['preOrder'], 'String');
      }
      if (data.hasOwnProperty('preOrderDate')) {
        obj['preOrderDate'] = ApiClient.convertToType(data['preOrderDate'], 'String');
      }
      if (data.hasOwnProperty('reordered')) {
        obj['reordered'] = ApiClient.convertToType(data['reordered'], 'Boolean');
      }
      if (data.hasOwnProperty('totalOffersCount')) {
        obj['totalOffersCount'] = ApiClient.convertToType(data['totalOffersCount'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationShipTo} shipTo
   */
  exports.prototype['shipTo'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationLineItems>} lineItems
   */
  exports.prototype['lineItems'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationInvoiceDetails} invoiceDetails
   */
  exports.prototype['invoiceDetails'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationShippingDetails} shippingDetails
   */
  exports.prototype['shippingDetails'] = undefined;
  /**
   * This is only needed when you are requesting both payment and DM service at same time.  Boolean that indicates whether returns are accepted for this order. This field can contain one of the following values: - true: Returns are accepted for this order. - false: Returns are not accepted for this order. 
   * @member {Boolean} returnsAccepted
   */
  exports.prototype['returnsAccepted'] = undefined;
  /**
   * #### Visa Platform Connect : This API will contain the Flag that specifies whether the payment is for the purchase of cryptocurrency. Additional values to add : This API will contain the Flag that specifies whether the payment is for the purchase of cryptocurrency. valid values are - Y/y, true - N/n, false 
   * @member {String} isCryptocurrencyPurchase
   */
  exports.prototype['isCryptocurrencyPurchase'] = undefined;
  /**
   * Starting date and time for an event or a journey that is independent of which transportation mechanism, in UTC. The cutoffDateTime will supersede travelInformation.transit.airline.legs[].departureDate and travelInformation.transit.airline.legs[].departureTime if these fields are supplied in the request. Format: YYYY-MM-DDThh:mm:ssZ. Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} cutoffDateTime
   */
  exports.prototype['cutoffDateTime'] = undefined;
  /**
   * Indicates whether cardholder is placing an order with a future availability or release date. This field can contain one of these values: - MERCHANDISE_AVAILABLE: Merchandise available - FUTURE_AVAILABILITY: Future availability 
   * @member {String} preOrder
   */
  exports.prototype['preOrder'] = undefined;
  /**
   * Expected date that a pre-ordered purchase will be available. Format: YYYYMMDD 
   * @member {String} preOrderDate
   */
  exports.prototype['preOrderDate'] = undefined;
  /**
   * Indicates whether the cardholder is reordering previously purchased merchandise. This field can contain one of these values: - false: First time ordered - true: Reordered 
   * @member {Boolean} reordered
   */
  exports.prototype['reordered'] = undefined;
  /**
   * Total number of articles/items in the order as a numeric decimal count. Possible values: 00 - 99 
   * @member {String} totalOffersCount
   */
  exports.prototype['totalOffersCount'] = undefined;



  return exports;
}));


