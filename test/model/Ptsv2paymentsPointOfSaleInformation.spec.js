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
    instance = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
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

  describe('Ptsv2paymentsPointOfSaleInformation', function() {
    it('should create an instance of Ptsv2paymentsPointOfSaleInformation', function() {
      // uncomment below and update the code to test Ptsv2paymentsPointOfSaleInformation
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsPointOfSaleInformation);
    });

    it('should have the property terminalId (base name: "terminalId")', function() {
      // uncomment below and update the code to test the property terminalId
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalSerialNumber (base name: "terminalSerialNumber")', function() {
      // uncomment below and update the code to test the property terminalSerialNumber
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property laneNumber (base name: "laneNumber")', function() {
      // uncomment below and update the code to test the property laneNumber
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property catLevel (base name: "catLevel")', function() {
      // uncomment below and update the code to test the property catLevel
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property entryMode (base name: "entryMode")', function() {
      // uncomment below and update the code to test the property entryMode
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalCapability (base name: "terminalCapability")', function() {
      // uncomment below and update the code to test the property terminalCapability
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property operatingEnvironment (base name: "operatingEnvironment")', function() {
      // uncomment below and update the code to test the property operatingEnvironment
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property emv (base name: "emv")', function() {
      // uncomment below and update the code to test the property emv
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property amexCapnData (base name: "amexCapnData")', function() {
      // uncomment below and update the code to test the property amexCapnData
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property trackData (base name: "trackData")', function() {
      // uncomment below and update the code to test the property trackData
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property storeAndForwardIndicator (base name: "storeAndForwardIndicator")', function() {
      // uncomment below and update the code to test the property storeAndForwardIndicator
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property cardholderVerificationMethod (base name: "cardholderVerificationMethod")', function() {
      // uncomment below and update the code to test the property cardholderVerificationMethod
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalInputCapability (base name: "terminalInputCapability")', function() {
      // uncomment below and update the code to test the property terminalInputCapability
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalCardCaptureCapability (base name: "terminalCardCaptureCapability")', function() {
      // uncomment below and update the code to test the property terminalCardCaptureCapability
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalOutputCapability (base name: "terminalOutputCapability")', function() {
      // uncomment below and update the code to test the property terminalOutputCapability
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalPinCapability (base name: "terminalPinCapability")', function() {
      // uncomment below and update the code to test the property terminalPinCapability
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property pinBlockEncodingFormat (base name: "pinBlockEncodingFormat")', function() {
      // uncomment below and update the code to test the property pinBlockEncodingFormat
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property encryptedPin (base name: "encryptedPin")', function() {
      // uncomment below and update the code to test the property encryptedPin
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property encryptedKeySerialNumber (base name: "encryptedKeySerialNumber")', function() {
      // uncomment below and update the code to test the property encryptedKeySerialNumber
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property partnerSdkVersion (base name: "partnerSdkVersion")', function() {
      // uncomment below and update the code to test the property partnerSdkVersion
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property emvApplicationIdentifierAndDedicatedFileName (base name: "emvApplicationIdentifierAndDedicatedFileName")', function() {
      // uncomment below and update the code to test the property emvApplicationIdentifierAndDedicatedFileName
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalCompliance (base name: "terminalCompliance")', function() {
      // uncomment below and update the code to test the property terminalCompliance
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property isDedicatedHardwareTerminal (base name: "isDedicatedHardwareTerminal")', function() {
      // uncomment below and update the code to test the property isDedicatedHardwareTerminal
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalModel (base name: "terminalModel")', function() {
      // uncomment below and update the code to test the property terminalModel
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalMake (base name: "terminalMake")', function() {
      // uncomment below and update the code to test the property terminalMake
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property serviceCode (base name: "serviceCode")', function() {
      // uncomment below and update the code to test the property serviceCode
      //var instane = new CyberSource.Ptsv2paymentsPointOfSaleInformation();
      //expect(instance).to.be();
    });

  });

}));
