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
    instance = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
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

  describe('ReportingV3ConversionDetailsGet200ResponseConversionDetails', function() {
    it('should create an instance of ReportingV3ConversionDetailsGet200ResponseConversionDetails', function() {
      // uncomment below and update the code to test ReportingV3ConversionDetailsGet200ResponseConversionDetails
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be.a(CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails);
    });

    it('should have the property merchantReferenceNumber (base name: "merchantReferenceNumber")', function() {
      // uncomment below and update the code to test the property merchantReferenceNumber
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property conversionTime (base name: "conversionTime")', function() {
      // uncomment below and update the code to test the property conversionTime
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property requestId (base name: "requestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property originalDecision (base name: "originalDecision")', function() {
      // uncomment below and update the code to test the property originalDecision
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property newDecision (base name: "newDecision")', function() {
      // uncomment below and update the code to test the property newDecision
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property reviewer (base name: "reviewer")', function() {
      // uncomment below and update the code to test the property reviewer
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property reviewerComments (base name: "reviewerComments")', function() {
      // uncomment below and update the code to test the property reviewerComments
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails();
      //expect(instance).to.be();
    });

  });

}));
