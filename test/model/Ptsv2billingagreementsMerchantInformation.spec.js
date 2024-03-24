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
    instance = new CyberSource.Ptsv2billingagreementsMerchantInformation();
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

  describe('Ptsv2billingagreementsMerchantInformation', function() {
    it('should create an instance of Ptsv2billingagreementsMerchantInformation', function() {
      // uncomment below and update the code to test Ptsv2billingagreementsMerchantInformation
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2billingagreementsMerchantInformation);
    });

    it('should have the property merchantDescriptor (base name: "merchantDescriptor")', function() {
      // uncomment below and update the code to test the property merchantDescriptor
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property categoryCode (base name: "categoryCode")', function() {
      // uncomment below and update the code to test the property categoryCode
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property administrativeArea (base name: "administrativeArea")', function() {
      // uncomment below and update the code to test the property administrativeArea
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property transactionLocalDateTime (base name: "transactionLocalDateTime")', function() {
      // uncomment below and update the code to test the property transactionLocalDateTime
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property cancelUrl (base name: "cancelUrl")', function() {
      // uncomment below and update the code to test the property cancelUrl
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property successUrl (base name: "successUrl")', function() {
      // uncomment below and update the code to test the property successUrl
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property failureUrl (base name: "failureUrl")', function() {
      // uncomment below and update the code to test the property failureUrl
      //var instane = new CyberSource.Ptsv2billingagreementsMerchantInformation();
      //expect(instance).to.be();
    });

  });

}));
