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
    root.CyberSource.Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService model module.
   * @module model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService</code>.
   * @alias module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService} The populated <code>Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('categoryCode')) {
        obj['categoryCode'] = ApiClient.convertToType(data['categoryCode'], 'String');
      }
      if (data.hasOwnProperty('subCategoryCode')) {
        obj['subCategoryCode'] = ApiClient.convertToType(data['subCategoryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Category code for the ancillary service that is provided. Obtain the codes from the International Air Transport Association (IATA). **Note** `#` is either 0, 1, 2, or 3. **Important** This field is required in the U.S. in order for you to qualify for either the custom payment service (CPS) or the electronic interchange reimbursement fee (EIRF)program. Format: English characters only. Optional request field for ancillary services. 
   * @member {String} categoryCode
   */
  exports.prototype['categoryCode'] = undefined;
  /**
   * Subcategory code for the ancillary service category. Obtain the codes from the International Air Transport Association (IATA). **Note** `#` is either 0, 1, 2, or 3. Format  English characters only. Optional request field for ancillary services. 
   * @member {String} subCategoryCode
   */
  exports.prototype['subCategoryCode'] = undefined;



  return exports;
}));


