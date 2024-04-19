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
    instance = new CyberSource.Ptsv2paymentsPaymentInformation();
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

  describe('Ptsv2paymentsPaymentInformation', function() {
    it('should create an instance of Ptsv2paymentsPaymentInformation', function() {
      // uncomment below and update the code to test Ptsv2paymentsPaymentInformation
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsPaymentInformation);
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property tokenizedCard (base name: "tokenizedCard")', function() {
      // uncomment below and update the code to test the property tokenizedCard
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property directDebit (base name: "directDebit")', function() {
      // uncomment below and update the code to test the property directDebit
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property fluidData (base name: "fluidData")', function() {
      // uncomment below and update the code to test the property fluidData
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentInstrument (base name: "paymentInstrument")', function() {
      // uncomment below and update the code to test the property paymentInstrument
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property instrumentIdentifier (base name: "instrumentIdentifier")', function() {
      // uncomment below and update the code to test the property instrumentIdentifier
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shippingAddress")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property legacyToken (base name: "legacyToken")', function() {
      // uncomment below and update the code to test the property legacyToken
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property bank (base name: "bank")', function() {
      // uncomment below and update the code to test the property bank
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentType (base name: "paymentType")', function() {
      // uncomment below and update the code to test the property paymentType
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property initiationChannel (base name: "initiationChannel")', function() {
      // uncomment below and update the code to test the property initiationChannel
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property sepa (base name: "sepa")', function() {
      // uncomment below and update the code to test the property sepa
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property eWallet (base name: "eWallet")', function() {
      // uncomment below and update the code to test the property eWallet
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformation();
      //expect(instance).to.be();
    });

  });

}));
