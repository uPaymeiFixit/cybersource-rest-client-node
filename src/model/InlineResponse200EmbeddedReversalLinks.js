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
    define(['ApiClient', 'model/InlineResponse200EmbeddedReversalLinksSelf'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse200EmbeddedReversalLinksSelf'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse200EmbeddedReversalLinks = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse200EmbeddedReversalLinksSelf);
  }
}(this, function(ApiClient, InlineResponse200EmbeddedReversalLinksSelf) {
  'use strict';




  /**
   * The InlineResponse200EmbeddedReversalLinks model module.
   * @module model/InlineResponse200EmbeddedReversalLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse200EmbeddedReversalLinks</code>.
   * The link to the GET method to the reversal transaction if the auth reversal is called. 
   * @alias module:model/InlineResponse200EmbeddedReversalLinks
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse200EmbeddedReversalLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200EmbeddedReversalLinks} obj Optional instance to populate.
   * @return {module:model/InlineResponse200EmbeddedReversalLinks} The populated <code>InlineResponse200EmbeddedReversalLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = InlineResponse200EmbeddedReversalLinksSelf.constructFromObject(data['self']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse200EmbeddedReversalLinksSelf} self
   */
  exports.prototype['self'] = undefined;



  return exports;
}));


