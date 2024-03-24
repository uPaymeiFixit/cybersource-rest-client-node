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
    root.CyberSource.PtsV2CreateBillingAgreementPost201ResponseAgreementInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2CreateBillingAgreementPost201ResponseAgreementInformation model module.
   * @module model/PtsV2CreateBillingAgreementPost201ResponseAgreementInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2CreateBillingAgreementPost201ResponseAgreementInformation</code>.
   * @alias module:model/PtsV2CreateBillingAgreementPost201ResponseAgreementInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>PtsV2CreateBillingAgreementPost201ResponseAgreementInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2CreateBillingAgreementPost201ResponseAgreementInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2CreateBillingAgreementPost201ResponseAgreementInformation} The populated <code>PtsV2CreateBillingAgreementPost201ResponseAgreementInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dateSigned')) {
        obj['dateSigned'] = ApiClient.convertToType(data['dateSigned'], 'String');
      }
      if (data.hasOwnProperty('dateCreated')) {
        obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'String');
      }
      if (data.hasOwnProperty('encodedHtml')) {
        obj['encodedHtml'] = ApiClient.convertToType(data['encodedHtml'], 'String');
      }
      if (data.hasOwnProperty('encodedHtmlPopup')) {
        obj['encodedHtmlPopup'] = ApiClient.convertToType(data['encodedHtmlPopup'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifier for the mandate. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date the mandate has been signed.  Format YYYYMMdd
   * @member {String} dateSigned
   */
  exports.prototype['dateSigned'] = undefined;
  /**
   * Date the mandate has been created.  Format YYYYMMdd
   * @member {String} dateCreated
   */
  exports.prototype['dateCreated'] = undefined;
  /**
   * Base64 encoded html string
   * @member {String} encodedHtml
   */
  exports.prototype['encodedHtml'] = undefined;
  /**
   * Base64 encoded popup html string
   * @member {String} encodedHtmlPopup
   */
  exports.prototype['encodedHtmlPopup'] = undefined;
  /**
   * URL for redirecting the customer for creating the mandate. 
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


