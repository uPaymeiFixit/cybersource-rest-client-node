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
    root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationCustomer = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseProcessorInformationCustomer model module.
   * @module model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseProcessorInformationCustomer</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseProcessorInformationCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer} The populated <code>PtsV2PaymentsPost201ResponseProcessorInformationCustomer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('personalIdResult')) {
        obj['personalIdResult'] = ApiClient.convertToType(data['personalIdResult'], 'String');
      }
    }
    return obj;
  }

  /**
   * Personal identifier result. This field is supported only for Redecard in Brazil for CyberSource Latin American Processing. If you included `buyerInformation.personalIdentification[].ID` in the request, this value indicates whether or not `buyerInformation.personalIdentification[].ID` matched a value in a record on file. Returned only when the personal ID result is returned by the processor.  Possible values:   - `Y`: Match  - `N`: No match  - `K`: Not supported  - `U`: Unknown  - `Z`: No response returned **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America.The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports. 
   * @member {String} personalIdResult
   */
  exports.prototype['personalIdResult'] = undefined;



  return exports;
}));


