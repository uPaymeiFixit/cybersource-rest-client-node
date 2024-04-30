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
    instance = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
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

  describe('PtsV2PaymentsPost201Response1ProcessorInformation', function() {
    it('should create an instance of PtsV2PaymentsPost201Response1ProcessorInformation', function() {
      // uncomment below and update the code to test PtsV2PaymentsPost201Response1ProcessorInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
      //expect(instance).to.be.a(CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation);
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property tradeNumber (base name: "tradeNumber")', function() {
      // uncomment below and update the code to test the property tradeNumber
      //var instane = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property rawResponse (base name: "rawResponse")', function() {
      // uncomment below and update the code to test the property rawResponse
      //var instane = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property responseCode (base name: "responseCode")', function() {
      // uncomment below and update the code to test the property responseCode
      //var instane = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property sellerProtection (base name: "sellerProtection")', function() {
      // uncomment below and update the code to test the property sellerProtection
      //var instane = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property avs (base name: "avs")', function() {
      // uncomment below and update the code to test the property avs
      //var instane = new CyberSource.PtsV2PaymentsPost201Response1ProcessorInformation();
      //expect(instance).to.be();
    });

  });

}));
