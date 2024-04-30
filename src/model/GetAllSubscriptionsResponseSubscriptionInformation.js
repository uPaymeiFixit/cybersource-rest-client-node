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
    root.CyberSource.GetAllSubscriptionsResponseSubscriptionInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAllSubscriptionsResponseSubscriptionInformation model module.
   * @module model/GetAllSubscriptionsResponseSubscriptionInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GetAllSubscriptionsResponseSubscriptionInformation</code>.
   * @alias module:model/GetAllSubscriptionsResponseSubscriptionInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>GetAllSubscriptionsResponseSubscriptionInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllSubscriptionsResponseSubscriptionInformation} obj Optional instance to populate.
   * @return {module:model/GetAllSubscriptionsResponseSubscriptionInformation} The populated <code>GetAllSubscriptionsResponseSubscriptionInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Subscription code. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Plan Id. 
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * Subscription Name 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Start date of the Subscription  Start date will be in UTC. Format: YYYY-MM-DDThh:mm:ssZ The T separates the date and the time. The Z indicates UTC.  **Example** 2022-08-11T22:47:57Z equals August 11, 2022, at 22:47:57 (10:47:57 p.m.). 
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Subscription Status: - `PENDING` - `ACTIVE` - `FAILED` - `COMPLETED` - `DELINQUENT` - `SUSPENDED` - `CANCELLED` 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


