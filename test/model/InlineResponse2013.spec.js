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
    instance = new CyberSource.InlineResponse2013();
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

  describe('InlineResponse2013', function() {
    it('should create an instance of InlineResponse2013', function() {
      // uncomment below and update the code to test InlineResponse2013
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be.a(CyberSource.InlineResponse2013);
    });

    it('should have the property webhookId (base name: "webhookId")', function() {
      // uncomment below and update the code to test the property webhookId
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property eventTypes (base name: "eventTypes")', function() {
      // uncomment below and update the code to test the property eventTypes
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property webhookUrl (base name: "webhookUrl")', function() {
      // uncomment below and update the code to test the property webhookUrl
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property healthCheckUrl (base name: "healthCheckUrl")', function() {
      // uncomment below and update the code to test the property healthCheckUrl
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property notificationScope (base name: "notificationScope")', function() {
      // uncomment below and update the code to test the property notificationScope
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property retryPolicy (base name: "retryPolicy")', function() {
      // uncomment below and update the code to test the property retryPolicy
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property securityPolicy (base name: "securityPolicy")', function() {
      // uncomment below and update the code to test the property securityPolicy
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updatedOn")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instane = new CyberSource.InlineResponse2013();
      //expect(instance).to.be();
    });

  });

}));
