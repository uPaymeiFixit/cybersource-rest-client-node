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
    define(['ApiClient', 'model/GetAllPlansResponsePlanInformationBillingPeriod', 'model/GetAllSubscriptionsResponsePlanInformationBillingCycles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAllPlansResponsePlanInformationBillingPeriod'), require('./GetAllSubscriptionsResponsePlanInformationBillingCycles'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.GetAllSubscriptionsResponsePlanInformation = factory(root.CyberSource.ApiClient, root.CyberSource.GetAllPlansResponsePlanInformationBillingPeriod, root.CyberSource.GetAllSubscriptionsResponsePlanInformationBillingCycles);
  }
}(this, function(ApiClient, GetAllPlansResponsePlanInformationBillingPeriod, GetAllSubscriptionsResponsePlanInformationBillingCycles) {
  'use strict';




  /**
   * The GetAllSubscriptionsResponsePlanInformation model module.
   * @module model/GetAllSubscriptionsResponsePlanInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GetAllSubscriptionsResponsePlanInformation</code>.
   * @alias module:model/GetAllSubscriptionsResponsePlanInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetAllSubscriptionsResponsePlanInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllSubscriptionsResponsePlanInformation} obj Optional instance to populate.
   * @return {module:model/GetAllSubscriptionsResponsePlanInformation} The populated <code>GetAllSubscriptionsResponsePlanInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('billingPeriod')) {
        obj['billingPeriod'] = GetAllPlansResponsePlanInformationBillingPeriod.constructFromObject(data['billingPeriod']);
      }
      if (data.hasOwnProperty('billingCycles')) {
        obj['billingCycles'] = GetAllSubscriptionsResponsePlanInformationBillingCycles.constructFromObject(data['billingCycles']);
      }
    }
    return obj;
  }

  /**
   * Plan code 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Plan name 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/GetAllPlansResponsePlanInformationBillingPeriod} billingPeriod
   */
  exports.prototype['billingPeriod'] = undefined;
  /**
   * @member {module:model/GetAllSubscriptionsResponsePlanInformationBillingCycles} billingCycles
   */
  exports.prototype['billingCycles'] = undefined;



  return exports;
}));


