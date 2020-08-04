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
    instance = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
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

  describe('VasV2PaymentsPost201ResponseOrderInformation', function() {
    it('should create an instance of VasV2PaymentsPost201ResponseOrderInformation', function() {
      // uncomment below and update the code to test VasV2PaymentsPost201ResponseOrderInformation
      //var instane = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
      //expect(instance).to.be.a(CyberSource.VasV2PaymentsPost201ResponseOrderInformation);
    });

    it('should have the property exemptAmount (base name: "exemptAmount")', function() {
      // uncomment below and update the code to test the property exemptAmount
      //var instane = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property taxableAmount (base name: "taxableAmount")', function() {
      // uncomment below and update the code to test the property taxableAmount
      //var instane = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "taxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instane = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property lineItems (base name: "lineItems")', function() {
      // uncomment below and update the code to test the property lineItems
      //var instane = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property taxDetails (base name: "taxDetails")', function() {
      // uncomment below and update the code to test the property taxDetails
      //var instane = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property amountDetails (base name: "amountDetails")', function() {
      // uncomment below and update the code to test the property amountDetails
      //var instane = new CyberSource.VasV2PaymentsPost201ResponseOrderInformation();
      //expect(instance).to.be();
    });

  });

}));
