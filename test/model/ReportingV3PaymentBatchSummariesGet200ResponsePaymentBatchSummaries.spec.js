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
    instance = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
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

  describe('ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries', function() {
    it('should create an instance of ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries', function() {
      // uncomment below and update the code to test ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be.a(CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries);
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property paymentSubTypeDescription (base name: "paymentSubTypeDescription")', function() {
      // uncomment below and update the code to test the property paymentSubTypeDescription
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property salesCount (base name: "salesCount")', function() {
      // uncomment below and update the code to test the property salesCount
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property salesAmount (base name: "salesAmount")', function() {
      // uncomment below and update the code to test the property salesAmount
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property creditCount (base name: "creditCount")', function() {
      // uncomment below and update the code to test the property creditCount
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property creditAmount (base name: "creditAmount")', function() {
      // uncomment below and update the code to test the property creditAmount
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "accountName")', function() {
      // uncomment below and update the code to test the property accountName
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchantId")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

    it('should have the property merchantName (base name: "merchantName")', function() {
      // uncomment below and update the code to test the property merchantName
      //var instane = new CyberSource.ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries();
      //expect(instance).to.be();
    });

  });

}));
