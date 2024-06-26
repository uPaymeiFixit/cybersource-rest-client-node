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
    define(['ApiClient', 'model/InlineResponse2006EmbeddedLinksReports'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2006EmbeddedLinksReports'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2006EmbeddedLinks = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2006EmbeddedLinksReports);
  }
}(this, function(ApiClient, InlineResponse2006EmbeddedLinksReports) {
  'use strict';




  /**
   * The InlineResponse2006EmbeddedLinks model module.
   * @module model/InlineResponse2006EmbeddedLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2006EmbeddedLinks</code>.
   * @alias module:model/InlineResponse2006EmbeddedLinks
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2006EmbeddedLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006EmbeddedLinks} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006EmbeddedLinks} The populated <code>InlineResponse2006EmbeddedLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reports')) {
        obj['reports'] = ApiClient.convertToType(data['reports'], [InlineResponse2006EmbeddedLinksReports]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse2006EmbeddedLinksReports>} reports
   */
  exports.prototype['reports'] = undefined;



  return exports;
}));


