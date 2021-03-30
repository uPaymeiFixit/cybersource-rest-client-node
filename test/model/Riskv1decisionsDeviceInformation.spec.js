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
    instance = new CyberSource.Riskv1decisionsDeviceInformation();
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

  describe('Riskv1decisionsDeviceInformation', function() {
    it('should create an instance of Riskv1decisionsDeviceInformation', function() {
      // uncomment below and update the code to test Riskv1decisionsDeviceInformation
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be.a(CyberSource.Riskv1decisionsDeviceInformation);
    });

    it('should have the property cookiesAccepted (base name: "cookiesAccepted")', function() {
      // uncomment below and update the code to test the property cookiesAccepted
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ipAddress")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property hostName (base name: "hostName")', function() {
      // uncomment below and update the code to test the property hostName
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property fingerprintSessionId (base name: "fingerprintSessionId")', function() {
      // uncomment below and update the code to test the property fingerprintSessionId
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property useRawFingerprintSessionId (base name: "useRawFingerprintSessionId")', function() {
      // uncomment below and update the code to test the property useRawFingerprintSessionId
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserEmail (base name: "httpBrowserEmail")', function() {
      // uncomment below and update the code to test the property httpBrowserEmail
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property userAgent (base name: "userAgent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property rawData (base name: "rawData")', function() {
      // uncomment below and update the code to test the property rawData
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpAcceptBrowserValue (base name: "httpAcceptBrowserValue")', function() {
      // uncomment below and update the code to test the property httpAcceptBrowserValue
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpAcceptContent (base name: "httpAcceptContent")', function() {
      // uncomment below and update the code to test the property httpAcceptContent
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserLanguage (base name: "httpBrowserLanguage")', function() {
      // uncomment below and update the code to test the property httpBrowserLanguage
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserJavaEnabled (base name: "httpBrowserJavaEnabled")', function() {
      // uncomment below and update the code to test the property httpBrowserJavaEnabled
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserJavaScriptEnabled (base name: "httpBrowserJavaScriptEnabled")', function() {
      // uncomment below and update the code to test the property httpBrowserJavaScriptEnabled
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserColorDepth (base name: "httpBrowserColorDepth")', function() {
      // uncomment below and update the code to test the property httpBrowserColorDepth
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserScreenHeight (base name: "httpBrowserScreenHeight")', function() {
      // uncomment below and update the code to test the property httpBrowserScreenHeight
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserScreenWidth (base name: "httpBrowserScreenWidth")', function() {
      // uncomment below and update the code to test the property httpBrowserScreenWidth
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property httpBrowserTimeDifference (base name: "httpBrowserTimeDifference")', function() {
      // uncomment below and update the code to test the property httpBrowserTimeDifference
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

    it('should have the property userAgentBrowserValue (base name: "userAgentBrowserValue")', function() {
      // uncomment below and update the code to test the property userAgentBrowserValue
      //var instane = new CyberSource.Riskv1decisionsDeviceInformation();
      //expect(instance).to.be();
    });

  });

}));
