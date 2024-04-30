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
    define(['ApiClient', 'model/InlineResponse412Errors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse412Errors'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse412 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse412Errors);
  }
}(this, function(ApiClient, InlineResponse412Errors) {
  'use strict';




  /**
   * The InlineResponse412 model module.
   * @module model/InlineResponse412
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse412</code>.
   * @alias module:model/InlineResponse412
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse412</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse412} obj Optional instance to populate.
   * @return {module:model/InlineResponse412} The populated <code>InlineResponse412</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [InlineResponse412Errors]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse412Errors>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));


