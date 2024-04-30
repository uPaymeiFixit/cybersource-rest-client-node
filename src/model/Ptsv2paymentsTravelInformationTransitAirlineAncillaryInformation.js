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
    define(['ApiClient', 'model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService);
  }
}(this, function(ApiClient, Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService) {
  'use strict';




  /**
   * The Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation model module.
   * @module model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation</code>.
   * @alias module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation} The populated <code>Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ticketNumber')) {
        obj['ticketNumber'] = ApiClient.convertToType(data['ticketNumber'], 'String');
      }
      if (data.hasOwnProperty('passengerName')) {
        obj['passengerName'] = ApiClient.convertToType(data['passengerName'], 'String');
      }
      if (data.hasOwnProperty('connectedTicketNumber')) {
        obj['connectedTicketNumber'] = ApiClient.convertToType(data['connectedTicketNumber'], 'String');
      }
      if (data.hasOwnProperty('creditReasonIndicator')) {
        obj['creditReasonIndicator'] = ApiClient.convertToType(data['creditReasonIndicator'], 'String');
      }
      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], [Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService]);
      }
    }
    return obj;
  }

  /**
   * Ticket number, which consists of the carrier code, form, and serial number, without the check digit. **Important** This field is required in the U.S. in order for you to qualify for either the custom payment service (CPS) or the electronic interchange reimbursement fee (EIRF) program. Format: English characters only. Optional field for ancillary services. 
   * @member {String} ticketNumber
   */
  exports.prototype['ticketNumber'] = undefined;
  /**
   * Name of the passenger. If the passenger's name is not available, this value is the cardholder's name. If neither the passenger's name nor the cardholder's name is available, this value is a description of the ancillary purchase. **Important** This field is required in the U.S. in order for you to qualify for either the custom payment service (CPS) or the electronic interchange reimbursement fee (EIRF) program. Format: English characters only. Optional field for ancillary service. 
   * @member {String} passengerName
   */
  exports.prototype['passengerName'] = undefined;
  /**
   * Number for the airline ticket to which the ancillary purchase is connected.  If this purchase has a connection or relationship to another purchase such as a baggage fee for a passenger transport ticket, this field must contain the ticket number for the other purchase.  For a stand-alone purchase, the value for this field must be the same as the value for the `travelInformation.transit.airline.ancillaryInformation.ticketNumber` field. **Important** This field is required in the U.S. in order for you to qualify for either the custom payment service (CPS) or the electronic interchange reimbursement fee (EIRF) program. Format: English characters only. Optional request field for ancillary services. 
   * @member {String} connectedTicketNumber
   */
  exports.prototype['connectedTicketNumber'] = undefined;
  /**
   * Reason for the credit. Possible values: - `A`: Cancellation of the ancillary passenger transport purchase. - `B`: Cancellation of the airline ticket and the passenger transport ancillary purchase. - `C`: Cancellation of the airline ticket. - `O`: Other. - `P`: Partial refund of the airline ticket. Format: English characters only. Optional field for ancillary services. 
   * @member {String} creditReasonIndicator
   */
  exports.prototype['creditReasonIndicator'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService>} service
   */
  exports.prototype['service'] = undefined;



  return exports;
}));


