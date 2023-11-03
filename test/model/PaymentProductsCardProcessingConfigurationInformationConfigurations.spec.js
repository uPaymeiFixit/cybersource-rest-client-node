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
    instance = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurations();
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

  describe('PaymentProductsCardProcessingConfigurationInformationConfigurations', function() {
    it('should create an instance of PaymentProductsCardProcessingConfigurationInformationConfigurations', function() {
      // uncomment below and update the code to test PaymentProductsCardProcessingConfigurationInformationConfigurations
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurations();
      //expect(instance).to.be.a(CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurations);
    });

    it('should have the property common (base name: "common")', function() {
      // uncomment below and update the code to test the property common
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurations();
      //expect(instance).to.be();
    });

  });

}));
