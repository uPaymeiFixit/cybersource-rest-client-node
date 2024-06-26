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
    define(['ApiClient', 'model/Accountupdaterv1batchesIncluded'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Accountupdaterv1batchesIncluded'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Body = factory(root.CyberSource.ApiClient, root.CyberSource.Accountupdaterv1batchesIncluded);
  }
}(this, function(ApiClient, Accountupdaterv1batchesIncluded) {
  'use strict';




  /**
   * The Body model module.
   * @module model/Body
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Body</code>.
   * @alias module:model/Body
   * @class
   * @param included {module:model/Accountupdaterv1batchesIncluded} 
   * @param notificationEmail {String} Email used to notify the batch status.
   */
  var exports = function(included, notificationEmail) {
    var _this = this;


    _this['included'] = included;

    _this['notificationEmail'] = notificationEmail;
  };

  /**
   * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body} obj Optional instance to populate.
   * @return {module:model/Body} The populated <code>Body</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('included')) {
        obj['included'] = Accountupdaterv1batchesIncluded.constructFromObject(data['included']);
      }
      if (data.hasOwnProperty('merchantReference')) {
        obj['merchantReference'] = ApiClient.convertToType(data['merchantReference'], 'String');
      }
      if (data.hasOwnProperty('notificationEmail')) {
        obj['notificationEmail'] = ApiClient.convertToType(data['notificationEmail'], 'String');
      }
    }
    return obj;
  }

  /**
   * Valid Values:   * oneOff   * amexRegistration 
   * @member {String} type
   * @default 'oneOff'
   */
  exports.prototype['type'] = 'oneOff';
  /**
   * @member {module:model/Accountupdaterv1batchesIncluded} included
   */
  exports.prototype['included'] = undefined;
  /**
   * Reference used by merchant to identify batch.
   * @member {String} merchantReference
   */
  exports.prototype['merchantReference'] = undefined;
  /**
   * Email used to notify the batch status.
   * @member {String} notificationEmail
   */
  exports.prototype['notificationEmail'] = undefined;



  return exports;
}));


