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
    instance = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
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

  describe('ReportingV3NetFundingsGet200ResponseNetFundingSummaries', function() {
    it('should create an instance of ReportingV3NetFundingsGet200ResponseNetFundingSummaries', function() {
      // uncomment below and update the code to test ReportingV3NetFundingsGet200ResponseNetFundingSummaries
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be.a(CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

    it('should have the property paymentSubType (base name: "paymentSubType")', function() {
      // uncomment below and update the code to test the property paymentSubType
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

    it('should have the property conveyedCount (base name: "conveyedCount")', function() {
      // uncomment below and update the code to test the property conveyedCount
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

    it('should have the property conveyedAmount (base name: "conveyedAmount")', function() {
      // uncomment below and update the code to test the property conveyedAmount
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

    it('should have the property settledCount (base name: "settledCount")', function() {
      // uncomment below and update the code to test the property settledCount
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

    it('should have the property fundedCount (base name: "fundedCount")', function() {
      // uncomment below and update the code to test the property fundedCount
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

    it('should have the property fundedAmount (base name: "fundedAmount")', function() {
      // uncomment below and update the code to test the property fundedAmount
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new CyberSource.ReportingV3NetFundingsGet200ResponseNetFundingSummaries();
      //expect(instance).to.be();
    });

  });

}));
