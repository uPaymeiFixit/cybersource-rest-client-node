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
    instance = new CyberSource.Upv1capturecontextsCaptureMandate();
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

  describe('Upv1capturecontextsCaptureMandate', function() {
    it('should create an instance of Upv1capturecontextsCaptureMandate', function() {
      // uncomment below and update the code to test Upv1capturecontextsCaptureMandate
      //var instane = new CyberSource.Upv1capturecontextsCaptureMandate();
      //expect(instance).to.be.a(CyberSource.Upv1capturecontextsCaptureMandate);
    });

    it('should have the property billingType (base name: "billingType")', function() {
      // uncomment below and update the code to test the property billingType
      //var instane = new CyberSource.Upv1capturecontextsCaptureMandate();
      //expect(instance).to.be();
    });

    it('should have the property requestEmail (base name: "requestEmail")', function() {
      // uncomment below and update the code to test the property requestEmail
      //var instane = new CyberSource.Upv1capturecontextsCaptureMandate();
      //expect(instance).to.be();
    });

    it('should have the property requestPhone (base name: "requestPhone")', function() {
      // uncomment below and update the code to test the property requestPhone
      //var instane = new CyberSource.Upv1capturecontextsCaptureMandate();
      //expect(instance).to.be();
    });

    it('should have the property requestShipping (base name: "requestShipping")', function() {
      // uncomment below and update the code to test the property requestShipping
      //var instane = new CyberSource.Upv1capturecontextsCaptureMandate();
      //expect(instance).to.be();
    });

    it('should have the property shipToCountries (base name: "shipToCountries")', function() {
      // uncomment below and update the code to test the property shipToCountries
      //var instane = new CyberSource.Upv1capturecontextsCaptureMandate();
      //expect(instance).to.be();
    });

    it('should have the property showAcceptedNetworkIcons (base name: "showAcceptedNetworkIcons")', function() {
      // uncomment below and update the code to test the property showAcceptedNetworkIcons
      //var instane = new CyberSource.Upv1capturecontextsCaptureMandate();
      //expect(instance).to.be();
    });

  });

}));
