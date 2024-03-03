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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions', function() {
    it('should create an instance of TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions', function() {
      // uncomment below and update the code to test TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions();
      //expect(instance).to.be.a(CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions);
    });

    it('should have the property authType (base name: "authType")', function() {
      // uncomment below and update the code to test the property authType
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions();
      //expect(instance).to.be();
    });

    it('should have the property authIndicator (base name: "authIndicator")', function() {
      // uncomment below and update the code to test the property authIndicator
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions();
      //expect(instance).to.be();
    });

    it('should have the property extendAuthIndicator (base name: "extendAuthIndicator")', function() {
      // uncomment below and update the code to test the property extendAuthIndicator
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions();
      //expect(instance).to.be();
    });

    it('should have the property cardVerificationIndicator (base name: "cardVerificationIndicator")', function() {
      // uncomment below and update the code to test the property cardVerificationIndicator
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions();
      //expect(instance).to.be();
    });

  });

}));
