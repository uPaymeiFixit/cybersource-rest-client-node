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
    instance = new CyberSource.CardProcessingConfigCommonCurrencies();
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

  describe('CardProcessingConfigCommonCurrencies', function() {
    it('should create an instance of CardProcessingConfigCommonCurrencies', function() {
      // uncomment below and update the code to test CardProcessingConfigCommonCurrencies
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be.a(CyberSource.CardProcessingConfigCommonCurrencies);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be();
    });

    it('should have the property enabledCardPresent (base name: "enabledCardPresent")', function() {
      // uncomment below and update the code to test the property enabledCardPresent
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be();
    });

    it('should have the property enabledCardNotPresent (base name: "enabledCardNotPresent")', function() {
      // uncomment below and update the code to test the property enabledCardNotPresent
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchantId")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be();
    });

    it('should have the property terminalId (base name: "terminalId")', function() {
      // uncomment below and update the code to test the property terminalId
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be();
    });

    it('should have the property terminalIds (base name: "terminalIds")', function() {
      // uncomment below and update the code to test the property terminalIds
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be();
    });

    it('should have the property serviceEnablementNumber (base name: "serviceEnablementNumber")', function() {
      // uncomment below and update the code to test the property serviceEnablementNumber
      //var instane = new CyberSource.CardProcessingConfigCommonCurrencies();
      //expect(instance).to.be();
    });

  });

}));
