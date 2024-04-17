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
    instance = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
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

  describe('TssV2TransactionsGet200ResponsePaymentInformationBankAccount', function() {
    it('should create an instance of TssV2TransactionsGet200ResponsePaymentInformationBankAccount', function() {
      // uncomment below and update the code to test TssV2TransactionsGet200ResponsePaymentInformationBankAccount
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be.a(CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount);
    });

    it('should have the property suffix (base name: "suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be();
    });

    it('should have the property checkNumber (base name: "checkNumber")', function() {
      // uncomment below and update the code to test the property checkNumber
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be();
    });

    it('should have the property checkDigit (base name: "checkDigit")', function() {
      // uncomment below and update the code to test the property checkDigit
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be();
    });

    it('should have the property encoderId (base name: "encoderId")', function() {
      // uncomment below and update the code to test the property encoderId
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount();
      //expect(instance).to.be();
    });

  });

}));
