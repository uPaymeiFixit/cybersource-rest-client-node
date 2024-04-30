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
    instance = new CyberSource.Ptsv2payoutsSenderInformation();
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

  describe('Ptsv2payoutsSenderInformation', function() {
    it('should create an instance of Ptsv2payoutsSenderInformation', function() {
      // uncomment below and update the code to test Ptsv2payoutsSenderInformation
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2payoutsSenderInformation);
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property middleInitial (base name: "middleInitial")', function() {
      // uncomment below and update the code to test the property middleInitial
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property administrativeArea (base name: "administrativeArea")', function() {
      // uncomment below and update the code to test the property administrativeArea
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "dateOfBirth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property vatRegistrationNumber (base name: "vatRegistrationNumber")', function() {
      // uncomment below and update the code to test the property vatRegistrationNumber
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property personalIdType (base name: "personalIdType")', function() {
      // uncomment below and update the code to test the property personalIdType
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

    it('should have the property identificationNumber (base name: "identificationNumber")', function() {
      // uncomment below and update the code to test the property identificationNumber
      //var instane = new CyberSource.Ptsv2payoutsSenderInformation();
      //expect(instance).to.be();
    });

  });

}));
