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
    instance = new CyberSource.DmConfigThirdpartyProvider();
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

  describe('DmConfigThirdpartyProvider', function() {
    it('should create an instance of DmConfigThirdpartyProvider', function() {
      // uncomment below and update the code to test DmConfigThirdpartyProvider
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be.a(CyberSource.DmConfigThirdpartyProvider);
    });

    it('should have the property accurint (base name: "accurint")', function() {
      // uncomment below and update the code to test the property accurint
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be();
    });

    it('should have the property credilink (base name: "credilink")', function() {
      // uncomment below and update the code to test the property credilink
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be();
    });

    it('should have the property ekata (base name: "ekata")', function() {
      // uncomment below and update the code to test the property ekata
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be();
    });

    it('should have the property emailage (base name: "emailage")', function() {
      // uncomment below and update the code to test the property emailage
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be();
    });

    it('should have the property perseuss (base name: "perseuss")', function() {
      // uncomment below and update the code to test the property perseuss
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be();
    });

    it('should have the property signifyd (base name: "signifyd")', function() {
      // uncomment below and update the code to test the property signifyd
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be();
    });

    it('should have the property targus (base name: "targus")', function() {
      // uncomment below and update the code to test the property targus
      //var instane = new CyberSource.DmConfigThirdpartyProvider();
      //expect(instance).to.be();
    });

  });

}));
