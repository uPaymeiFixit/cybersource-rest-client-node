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
    instance = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
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

  describe('Ptsv1pushfundstransferRecipientInformationPaymentInformationCard', function() {
    it('should create an instance of Ptsv1pushfundstransferRecipientInformationPaymentInformationCard', function() {
      // uncomment below and update the code to test Ptsv1pushfundstransferRecipientInformationPaymentInformationCard
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be.a(CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property securityCode (base name: "securityCode")', function() {
      // uncomment below and update the code to test the property securityCode
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationMonth (base name: "expirationMonth")', function() {
      // uncomment below and update the code to test the property expirationMonth
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationYear (base name: "expirationYear")', function() {
      // uncomment below and update the code to test the property expirationYear
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property paymentInstrument (base name: "paymentInstrument")', function() {
      // uncomment below and update the code to test the property paymentInstrument
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property instrumentIdentifier (base name: "instrumentIdentifier")', function() {
      // uncomment below and update the code to test the property instrumentIdentifier
      //var instane = new CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard();
      //expect(instance).to.be();
    });

  });

}));
