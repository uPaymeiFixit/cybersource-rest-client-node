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
    define(['ApiClient', 'model/Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv1pushfundstransferProcessingOptionsFundingOptions = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator);
  }
}(this, function(ApiClient, Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferProcessingOptionsFundingOptions model module.
   * @module model/Ptsv1pushfundstransferProcessingOptionsFundingOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferProcessingOptionsFundingOptions</code>.
   * @alias module:model/Ptsv1pushfundstransferProcessingOptionsFundingOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferProcessingOptionsFundingOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferProcessingOptionsFundingOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferProcessingOptionsFundingOptions} The populated <code>Ptsv1pushfundstransferProcessingOptionsFundingOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('initiator')) {
        obj['initiator'] = Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator.constructFromObject(data['initiator']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator} initiator
   */
  exports.prototype['initiator'] = undefined;



  return exports;
}));


