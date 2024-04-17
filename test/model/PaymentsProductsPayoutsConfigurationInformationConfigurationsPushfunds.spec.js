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
    instance = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
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

  describe('PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds', function() {
    it('should create an instance of PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds', function() {
      // uncomment below and update the code to test PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be.a(CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds);
    });

    it('should have the property acquirerCountryCode (base name: "acquirerCountryCode")', function() {
      // uncomment below and update the code to test the property acquirerCountryCode
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property acquiringBIN (base name: "acquiringBIN")', function() {
      // uncomment below and update the code to test the property acquiringBIN
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property allowCryptoCurrencyPurchase (base name: "allowCryptoCurrencyPurchase")', function() {
      // uncomment below and update the code to test the property allowCryptoCurrencyPurchase
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property financialInstitutionId (base name: "financialInstitutionId")', function() {
      // uncomment below and update the code to test the property financialInstitutionId
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property networkOrder (base name: "networkOrder")', function() {
      // uncomment below and update the code to test the property networkOrder
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property nationalReimbursementFee (base name: "nationalReimbursementFee")', function() {
      // uncomment below and update the code to test the property nationalReimbursementFee
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property originatorBusinessApplicationId (base name: "originatorBusinessApplicationId")', function() {
      // uncomment below and update the code to test the property originatorBusinessApplicationId
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property originatorPseudoAbaNumber (base name: "originatorPseudoAbaNumber")', function() {
      // uncomment below and update the code to test the property originatorPseudoAbaNumber
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

    it('should have the property processorAccount (base name: "processorAccount")', function() {
      // uncomment below and update the code to test the property processorAccount
      //var instane = new CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds();
      //expect(instance).to.be();
    });

  });

}));
