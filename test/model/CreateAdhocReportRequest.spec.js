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
    instance = new CyberSource.CreateAdhocReportRequest();
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

  describe('CreateAdhocReportRequest', function() {
    it('should create an instance of CreateAdhocReportRequest', function() {
      // uncomment below and update the code to test CreateAdhocReportRequest
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be.a(CyberSource.CreateAdhocReportRequest);
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportDefinitionName (base name: "reportDefinitionName")', function() {
      // uncomment below and update the code to test the property reportDefinitionName
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportFields (base name: "reportFields")', function() {
      // uncomment below and update the code to test the property reportFields
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportMimeType (base name: "reportMimeType")', function() {
      // uncomment below and update the code to test the property reportMimeType
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportName (base name: "reportName")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportStartTime (base name: "reportStartTime")', function() {
      // uncomment below and update the code to test the property reportStartTime
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportEndTime (base name: "reportEndTime")', function() {
      // uncomment below and update the code to test the property reportEndTime
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportFilters (base name: "reportFilters")', function() {
      // uncomment below and update the code to test the property reportFilters
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportPreferences (base name: "reportPreferences")', function() {
      // uncomment below and update the code to test the property reportPreferences
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "groupName")', function() {
      // uncomment below and update the code to test the property groupName
      //var instane = new CyberSource.CreateAdhocReportRequest();
      //expect(instance).to.be();
    });

  });

}));
