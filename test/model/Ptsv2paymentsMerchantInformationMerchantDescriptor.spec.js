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
    instance = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
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

  describe('Ptsv2paymentsMerchantInformationMerchantDescriptor', function() {
    it('should create an instance of Ptsv2paymentsMerchantInformationMerchantDescriptor', function() {
      // uncomment below and update the code to test Ptsv2paymentsMerchantInformationMerchantDescriptor
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property alternateName (base name: "alternateName")', function() {
      // uncomment below and update the code to test the property alternateName
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property administrativeArea (base name: "administrativeArea")', function() {
      // uncomment below and update the code to test the property administrativeArea
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property countryOfOrigin (base name: "countryOfOrigin")', function() {
      // uncomment below and update the code to test the property countryOfOrigin
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "storeId")', function() {
      // uncomment below and update the code to test the property storeId
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property storeName (base name: "storeName")', function() {
      // uncomment below and update the code to test the property storeName
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property customerServicePhoneNumber (base name: "customerServicePhoneNumber")', function() {
      // uncomment below and update the code to test the property customerServicePhoneNumber
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor();
      //expect(instance).to.be();
    });

  });

}));
