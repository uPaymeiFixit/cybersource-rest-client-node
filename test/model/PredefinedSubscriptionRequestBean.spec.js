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
    instance = new CyberSource.PredefinedSubscriptionRequestBean();
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

  describe('PredefinedSubscriptionRequestBean', function() {
    it('should create an instance of PredefinedSubscriptionRequestBean', function() {
      // uncomment below and update the code to test PredefinedSubscriptionRequestBean
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be.a(CyberSource.PredefinedSubscriptionRequestBean);
    });

    it('should have the property reportDefinitionName (base name: "reportDefinitionName")', function() {
      // uncomment below and update the code to test the property reportDefinitionName
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionType (base name: "subscriptionType")', function() {
      // uncomment below and update the code to test the property subscriptionType
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property reportName (base name: "reportName")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property reportMimeType (base name: "reportMimeType")', function() {
      // uncomment below and update the code to test the property reportMimeType
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property reportFrequency (base name: "reportFrequency")', function() {
      // uncomment below and update the code to test the property reportFrequency
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property reportInterval (base name: "reportInterval")', function() {
      // uncomment below and update the code to test the property reportInterval
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property startDay (base name: "startDay")', function() {
      // uncomment below and update the code to test the property startDay
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionStatus (base name: "subscriptionStatus")', function() {
      // uncomment below and update the code to test the property subscriptionStatus
      //var instane = new CyberSource.PredefinedSubscriptionRequestBean();
      //expect(instance).to.be();
    });

  });

}));
