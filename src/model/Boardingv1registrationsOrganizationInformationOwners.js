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
    define(['ApiClient', 'model/Boardingv1registrationsOrganizationInformationBusinessInformationAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Boardingv1registrationsOrganizationInformationBusinessInformationAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Boardingv1registrationsOrganizationInformationOwners = factory(root.CyberSource.ApiClient, root.CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationAddress);
  }
}(this, function(ApiClient, Boardingv1registrationsOrganizationInformationBusinessInformationAddress) {
  'use strict';




  /**
   * The Boardingv1registrationsOrganizationInformationOwners model module.
   * @module model/Boardingv1registrationsOrganizationInformationOwners
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Boardingv1registrationsOrganizationInformationOwners</code>.
   * @alias module:model/Boardingv1registrationsOrganizationInformationOwners
   * @class
   * @param firstName {String} 
   * @param lastName {String} 
   * @param birthDate {Date} `Format: YYYY-MM-DD` Example 2016-08-11 equals August 11, 2016 
   * @param isPrimary {Boolean} Determines whether the owner is the Primary owner of the organization
   * @param jobTitle {String} 
   * @param hasSignificantResponsability {Boolean} Determines whether owner has significant responsibility to control, manage or direct the company
   * @param ownershipPercentage {Number} Determines the percentage of ownership this owner has. For the primary owner the percentage can be from 0-100; for other owners the percentage can be from 25-100 and the sum of ownership accross owners cannot exceed 100
   * @param phoneNumber {String} 
   * @param email {String} 
   * @param address {module:model/Boardingv1registrationsOrganizationInformationBusinessInformationAddress} 
   */
  var exports = function(firstName, lastName, birthDate, isPrimary, jobTitle, hasSignificantResponsability, ownershipPercentage, phoneNumber, email, address) {
    var _this = this;

    _this['firstName'] = firstName;

    _this['lastName'] = lastName;
    _this['birthDate'] = birthDate;
    _this['isPrimary'] = isPrimary;



    _this['jobTitle'] = jobTitle;
    _this['hasSignificantResponsability'] = hasSignificantResponsability;
    _this['ownershipPercentage'] = ownershipPercentage;
    _this['phoneNumber'] = phoneNumber;
    _this['email'] = email;
    _this['address'] = address;
  };

  /**
   * Constructs a <code>Boardingv1registrationsOrganizationInformationOwners</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Boardingv1registrationsOrganizationInformationOwners} obj Optional instance to populate.
   * @return {module:model/Boardingv1registrationsOrganizationInformationOwners} The populated <code>Boardingv1registrationsOrganizationInformationOwners</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('middleName')) {
        obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('birthDate')) {
        obj['birthDate'] = ApiClient.convertToType(data['birthDate'], 'Date');
      }
      if (data.hasOwnProperty('isPrimary')) {
        obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
      }
      if (data.hasOwnProperty('ssn')) {
        obj['ssn'] = ApiClient.convertToType(data['ssn'], 'String');
      }
      if (data.hasOwnProperty('passportNumber')) {
        obj['passportNumber'] = ApiClient.convertToType(data['passportNumber'], 'String');
      }
      if (data.hasOwnProperty('passportCountry')) {
        obj['passportCountry'] = ApiClient.convertToType(data['passportCountry'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('hasSignificantResponsability')) {
        obj['hasSignificantResponsability'] = ApiClient.convertToType(data['hasSignificantResponsability'], 'Boolean');
      }
      if (data.hasOwnProperty('ownershipPercentage')) {
        obj['ownershipPercentage'] = ApiClient.convertToType(data['ownershipPercentage'], 'Number');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = Boardingv1registrationsOrganizationInformationBusinessInformationAddress.constructFromObject(data['address']);
      }
    }
    return obj;
  }

  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} middleName
   */
  exports.prototype['middleName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * `Format: YYYY-MM-DD` Example 2016-08-11 equals August 11, 2016 
   * @member {Date} birthDate
   */
  exports.prototype['birthDate'] = undefined;
  /**
   * Determines whether the owner is the Primary owner of the organization
   * @member {Boolean} isPrimary
   */
  exports.prototype['isPrimary'] = undefined;
  /**
   * Social Security Number
   * @member {String} ssn
   */
  exports.prototype['ssn'] = undefined;
  /**
   * Passport number
   * @member {String} passportNumber
   */
  exports.prototype['passportNumber'] = undefined;
  /**
   * @member {String} passportCountry
   */
  exports.prototype['passportCountry'] = undefined;
  /**
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;
  /**
   * Determines whether owner has significant responsibility to control, manage or direct the company
   * @member {Boolean} hasSignificantResponsability
   */
  exports.prototype['hasSignificantResponsability'] = undefined;
  /**
   * Determines the percentage of ownership this owner has. For the primary owner the percentage can be from 0-100; for other owners the percentage can be from 25-100 and the sum of ownership accross owners cannot exceed 100
   * @member {Number} ownershipPercentage
   */
  exports.prototype['ownershipPercentage'] = undefined;
  /**
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/Boardingv1registrationsOrganizationInformationBusinessInformationAddress} address
   */
  exports.prototype['address'] = undefined;



  return exports;
}));


