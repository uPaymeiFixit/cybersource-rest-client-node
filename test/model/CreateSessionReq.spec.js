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
    instance = new CyberSource.CreateSessionReq();
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

  describe('CreateSessionReq', function() {
    it('should create an instance of CreateSessionReq', function() {
      // uncomment below and update the code to test CreateSessionReq
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be.a(CyberSource.CreateSessionReq);
    });

    it('should have the property clientReferenceInformation (base name: "clientReferenceInformation")', function() {
      // uncomment below and update the code to test the property clientReferenceInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property processingInformation (base name: "processingInformation")', function() {
      // uncomment below and update the code to test the property processingInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property paymentInformation (base name: "paymentInformation")', function() {
      // uncomment below and update the code to test the property paymentInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property orderInformation (base name: "orderInformation")', function() {
      // uncomment below and update the code to test the property orderInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property buyerInformation (base name: "buyerInformation")', function() {
      // uncomment below and update the code to test the property buyerInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property deviceInformation (base name: "deviceInformation")', function() {
      // uncomment below and update the code to test the property deviceInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property merchantInformation (base name: "merchantInformation")', function() {
      // uncomment below and update the code to test the property merchantInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property userInterface (base name: "userInterface")', function() {
      // uncomment below and update the code to test the property userInterface
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedInformation (base name: "merchantDefinedInformation")', function() {
      // uncomment below and update the code to test the property merchantDefinedInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property agreementInformation (base name: "agreementInformation")', function() {
      // uncomment below and update the code to test the property agreementInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

    it('should have the property travelInformation (base name: "travelInformation")', function() {
      // uncomment below and update the code to test the property travelInformation
      //var instane = new CyberSource.CreateSessionReq();
      //expect(instance).to.be();
    });

  });

}));
