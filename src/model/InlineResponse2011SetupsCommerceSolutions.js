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
    define(['ApiClient', 'model/InlineResponse2011SetupsPaymentsCardProcessing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2011SetupsPaymentsCardProcessing'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2011SetupsCommerceSolutions = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2011SetupsPaymentsCardProcessing);
  }
}(this, function(ApiClient, InlineResponse2011SetupsPaymentsCardProcessing) {
  'use strict';




  /**
   * The InlineResponse2011SetupsCommerceSolutions model module.
   * @module model/InlineResponse2011SetupsCommerceSolutions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2011SetupsCommerceSolutions</code>.
   * @alias module:model/InlineResponse2011SetupsCommerceSolutions
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2011SetupsCommerceSolutions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2011SetupsCommerceSolutions} obj Optional instance to populate.
   * @return {module:model/InlineResponse2011SetupsCommerceSolutions} The populated <code>InlineResponse2011SetupsCommerceSolutions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tokenManagement')) {
        obj['tokenManagement'] = InlineResponse2011SetupsPaymentsCardProcessing.constructFromObject(data['tokenManagement']);
      }
      if (data.hasOwnProperty('accountUpdater')) {
        obj['accountUpdater'] = InlineResponse2011SetupsPaymentsCardProcessing.constructFromObject(data['accountUpdater']);
      }
      if (data.hasOwnProperty('binLookup')) {
        obj['binLookup'] = InlineResponse2011SetupsPaymentsCardProcessing.constructFromObject(data['binLookup']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2011SetupsPaymentsCardProcessing} tokenManagement
   */
  exports.prototype['tokenManagement'] = undefined;
  /**
   * @member {module:model/InlineResponse2011SetupsPaymentsCardProcessing} accountUpdater
   */
  exports.prototype['accountUpdater'] = undefined;
  /**
   * @member {module:model/InlineResponse2011SetupsPaymentsCardProcessing} binLookup
   */
  exports.prototype['binLookup'] = undefined;



  return exports;
}));


