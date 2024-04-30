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
    instance = new CyberSource.Body();
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

  describe('Body', function() {
    it('should create an instance of Body', function() {
      // uncomment below and update the code to test Body
      //var instane = new CyberSource.Body();
      //expect(instance).to.be.a(CyberSource.Body);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.Body();
      //expect(instance).to.be();
    });

    it('should have the property included (base name: "included")', function() {
      // uncomment below and update the code to test the property included
      //var instane = new CyberSource.Body();
      //expect(instance).to.be();
    });

    it('should have the property merchantReference (base name: "merchantReference")', function() {
      // uncomment below and update the code to test the property merchantReference
      //var instane = new CyberSource.Body();
      //expect(instance).to.be();
    });

    it('should have the property notificationEmail (base name: "notificationEmail")', function() {
      // uncomment below and update the code to test the property notificationEmail
      //var instane = new CyberSource.Body();
      //expect(instance).to.be();
    });

  });

}));
