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
    instance = new CyberSource.TmsEmbeddedInstrumentIdentifierBankAccount();
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

  describe('TmsEmbeddedInstrumentIdentifierBankAccount', function() {
    it('should create an instance of TmsEmbeddedInstrumentIdentifierBankAccount', function() {
      // uncomment below and update the code to test TmsEmbeddedInstrumentIdentifierBankAccount
      //var instane = new CyberSource.TmsEmbeddedInstrumentIdentifierBankAccount();
      //expect(instance).to.be.a(CyberSource.TmsEmbeddedInstrumentIdentifierBankAccount);
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new CyberSource.TmsEmbeddedInstrumentIdentifierBankAccount();
      //expect(instance).to.be();
    });

    it('should have the property routingNumber (base name: "routingNumber")', function() {
      // uncomment below and update the code to test the property routingNumber
      //var instane = new CyberSource.TmsEmbeddedInstrumentIdentifierBankAccount();
      //expect(instance).to.be();
    });

  });

}));
