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
    root.CyberSource.Notificationsubscriptionsv1webhooksRetryPolicy = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Notificationsubscriptionsv1webhooksRetryPolicy model module.
   * @module model/Notificationsubscriptionsv1webhooksRetryPolicy
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Notificationsubscriptionsv1webhooksRetryPolicy</code>.
   * Retry policy for the individual webhooks that are a part of your subscription. If a message fails to deliver, it will execute through this retry policy.  Automatic suspend and resume:  If you experience downtime and have &#x60;deactivateFlag &#x3D; true&#x60; any new messages will be held in a \&quot;SUSPENDED\&quot; status. When your healthCheckUrl returns healthy again, the subscription will automatically be re-enabled and your messages will be sent. We will ping your healthCheckUrl routinely using a POST call with an empty payload to check availability. If your endpoint returns an unhealthy status of !&#x3D; 200, we will check the healthCheckUrl at a more frequent rate until it is healthy again.  If you experience downtime and have &#x60;deactivateFlag &#x3D; false&#x60; and your message exhausts all retry attempts the message will go to a \&quot;FAILED\&quot; status. Support will be notified and will reach out to suggest you execute the \&quot;REPLAY\&quot; endpoint at a later date when your server is healthy.   Reference the below values for formulas and calculations related to the frequency of retries depending on algorithm and configuration. 
   * @alias module:model/Notificationsubscriptionsv1webhooksRetryPolicy
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Notificationsubscriptionsv1webhooksRetryPolicy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notificationsubscriptionsv1webhooksRetryPolicy} obj Optional instance to populate.
   * @return {module:model/Notificationsubscriptionsv1webhooksRetryPolicy} The populated <code>Notificationsubscriptionsv1webhooksRetryPolicy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('algorithm')) {
        obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
      }
      if (data.hasOwnProperty('firstRetry')) {
        obj['firstRetry'] = ApiClient.convertToType(data['firstRetry'], 'Number');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
      }
      if (data.hasOwnProperty('numberOfRetries')) {
        obj['numberOfRetries'] = ApiClient.convertToType(data['numberOfRetries'], 'Number');
      }
      if (data.hasOwnProperty('deactivateFlag')) {
        obj['deactivateFlag'] = ApiClient.convertToType(data['deactivateFlag'], 'String');
      }
      if (data.hasOwnProperty('repeatSequenceCount')) {
        obj['repeatSequenceCount'] = ApiClient.convertToType(data['repeatSequenceCount'], 'Number');
      }
      if (data.hasOwnProperty('repeatSequenceWaitTime')) {
        obj['repeatSequenceWaitTime'] = ApiClient.convertToType(data['repeatSequenceWaitTime'], 'Number');
      }
      if (data.hasOwnProperty('additionalAttributes')) {
        obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [{'String': 'String'}]);
      }
    }
    return obj;
  }

  /**
   * This is used to calculate the Retry Sequence.  Sample calculations using firstRetry=10, interval=30, maxNumberOfRetries=3 Arithmetic = a+r(n-1) Retry 1 - 10 minutes Retry 2 - 10+30x1 = 40 minutes Retry 3 - 10+30x2 = 70 minutes  Geometric = ar^(n-1) Retry 1 - 10 minutes Retry 2 - 10x30^1 = 300 minutes Retry 3 - 10x30^2 = 9,000 minutes 
   * @member {String} algorithm
   */
  exports.prototype['algorithm'] = undefined;
  /**
   * When to initiate first retry, after the initial call failed. (in mins).
   * @member {Number} firstRetry
   */
  exports.prototype['firstRetry'] = undefined;
  /**
   * The interval between retries (in mins).
   * @member {Number} interval
   */
  exports.prototype['interval'] = undefined;
  /**
   * The number of retries per sequence.
   * @member {Number} numberOfRetries
   */
  exports.prototype['numberOfRetries'] = undefined;
  /**
   * Deactivate the subscription if your retries fail to deliver.  If this is set to `true`, the automatic suspend and resume feature will occur. This would prevent new webhooks from attempting to deliver and to queue up until your healthCheckUrl returns 200 again, then all messages will be sent.  If this is set to `false`, new individual messages will continue to retry and exhaust all failures, but the subscription will stay active. 
   * @member {String} deactivateFlag
   */
  exports.prototype['deactivateFlag'] = undefined;
  /**
   * The number of times to repeat the complete retry sequence. 0 => don't repeat the retry sequence 1 => repeat the retry sequence once (R1, R2, R3)+ (R1, R2, R3) 2 => repeat the retry sequence twice (R1, R2, R3) + (R1, R2, R3) + (R1, R2, R3) 
   * @member {Number} repeatSequenceCount
   */
  exports.prototype['repeatSequenceCount'] = undefined;
  /**
   * The time to wait to before repeating the complete retry sequence. Amount of time to wait between each sequence. Sample calculation using repeatSequenceWaitTime=10 (R1, R2, R3) + (10) + (R1, R2, R3) + (10) + (R1, R2, R3) 
   * @member {Number} repeatSequenceWaitTime
   */
  exports.prototype['repeatSequenceWaitTime'] = undefined;
  /**
   * Additional data, if any.
   * @member {Array.<Object.<String, String>>} additionalAttributes
   */
  exports.prototype['additionalAttributes'] = undefined;



  return exports;
}));

