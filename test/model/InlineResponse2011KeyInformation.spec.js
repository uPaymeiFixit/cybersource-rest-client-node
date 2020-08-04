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
    instance = new CyberSource.InlineResponse2011KeyInformation();
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

  describe('InlineResponse2011KeyInformation', function() {
    it('should create an instance of InlineResponse2011KeyInformation', function() {
      // uncomment below and update the code to test InlineResponse2011KeyInformation
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be.a(CyberSource.InlineResponse2011KeyInformation);
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property keyId (base name: "keyId")', function() {
      // uncomment below and update the code to test the property keyId
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property alias (base name: "alias")', function() {
      // uncomment below and update the code to test the property alias
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

    it('should have the property errorInformation (base name: "errorInformation")', function() {
      // uncomment below and update the code to test the property errorInformation
      //var instane = new CyberSource.InlineResponse2011KeyInformation();
      //expect(instance).to.be();
    });

  });

}));
