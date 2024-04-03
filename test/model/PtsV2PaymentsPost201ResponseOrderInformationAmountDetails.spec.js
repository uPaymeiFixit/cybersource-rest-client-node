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
    instance = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
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

  describe('PtsV2PaymentsPost201ResponseOrderInformationAmountDetails', function() {
    it('should create an instance of PtsV2PaymentsPost201ResponseOrderInformationAmountDetails', function() {
      // uncomment below and update the code to test PtsV2PaymentsPost201ResponseOrderInformationAmountDetails
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be.a(CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails);
    });

    it('should have the property totalAmount (base name: "totalAmount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property authorizedAmount (base name: "authorizedAmount")', function() {
      // uncomment below and update the code to test the property authorizedAmount
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property processorTransactionFee (base name: "processorTransactionFee")', function() {
      // uncomment below and update the code to test the property processorTransactionFee
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property exchangeRate (base name: "exchangeRate")', function() {
      // uncomment below and update the code to test the property exchangeRate
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property foreignCurrency (base name: "foreignCurrency")', function() {
      // uncomment below and update the code to test the property foreignCurrency
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property foreignAmount (base name: "foreignAmount")', function() {
      // uncomment below and update the code to test the property foreignAmount
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails();
      //expect(instance).to.be();
    });

  });

}));
