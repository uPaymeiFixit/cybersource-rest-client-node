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
    instance = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
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

  describe('PtsV2PaymentsPost201ResponseRiskInformationInfoCodes', function() {
    it('should create an instance of PtsV2PaymentsPost201ResponseRiskInformationInfoCodes', function() {
      // uncomment below and update the code to test PtsV2PaymentsPost201ResponseRiskInformationInfoCodes
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be.a(CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes);
    });

    it('should have the property velocity (base name: "velocity")', function() {
      // uncomment below and update the code to test the property velocity
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property customerList (base name: "customerList")', function() {
      // uncomment below and update the code to test the property customerList
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property deviceBehavior (base name: "deviceBehavior")', function() {
      // uncomment below and update the code to test the property deviceBehavior
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property identityChange (base name: "identityChange")', function() {
      // uncomment below and update the code to test the property identityChange
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property internet (base name: "internet")', function() {
      // uncomment below and update the code to test the property internet
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property suspicious (base name: "suspicious")', function() {
      // uncomment below and update the code to test the property suspicious
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

    it('should have the property globalVelocity (base name: "globalVelocity")', function() {
      // uncomment below and update the code to test the property globalVelocity
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes();
      //expect(instance).to.be();
    });

  });

}));
