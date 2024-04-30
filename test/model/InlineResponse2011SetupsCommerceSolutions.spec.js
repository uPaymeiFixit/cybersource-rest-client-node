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
    instance = new CyberSource.InlineResponse2011SetupsCommerceSolutions();
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

  describe('InlineResponse2011SetupsCommerceSolutions', function() {
    it('should create an instance of InlineResponse2011SetupsCommerceSolutions', function() {
      // uncomment below and update the code to test InlineResponse2011SetupsCommerceSolutions
      //var instane = new CyberSource.InlineResponse2011SetupsCommerceSolutions();
      //expect(instance).to.be.a(CyberSource.InlineResponse2011SetupsCommerceSolutions);
    });

    it('should have the property tokenManagement (base name: "tokenManagement")', function() {
      // uncomment below and update the code to test the property tokenManagement
      //var instane = new CyberSource.InlineResponse2011SetupsCommerceSolutions();
      //expect(instance).to.be();
    });

    it('should have the property accountUpdater (base name: "accountUpdater")', function() {
      // uncomment below and update the code to test the property accountUpdater
      //var instane = new CyberSource.InlineResponse2011SetupsCommerceSolutions();
      //expect(instance).to.be();
    });

    it('should have the property binLookup (base name: "binLookup")', function() {
      // uncomment below and update the code to test the property binLookup
      //var instane = new CyberSource.InlineResponse2011SetupsCommerceSolutions();
      //expect(instance).to.be();
    });

  });

}));
