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
    instance = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
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

  describe('PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields', function() {
    it('should create an instance of PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields', function() {
      // uncomment below and update the code to test PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be.a(CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields);
    });

    it('should have the property displayMerchantDefinedData1 (base name: "displayMerchantDefinedData1")', function() {
      // uncomment below and update the code to test the property displayMerchantDefinedData1
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property displayMerchantDefinedData2 (base name: "displayMerchantDefinedData2")', function() {
      // uncomment below and update the code to test the property displayMerchantDefinedData2
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property displayMerchantDefinedData3 (base name: "displayMerchantDefinedData3")', function() {
      // uncomment below and update the code to test the property displayMerchantDefinedData3
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property displayMerchantDefinedData4 (base name: "displayMerchantDefinedData4")', function() {
      // uncomment below and update the code to test the property displayMerchantDefinedData4
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property displayMerchantDefinedData5 (base name: "displayMerchantDefinedData5")', function() {
      // uncomment below and update the code to test the property displayMerchantDefinedData5
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData1DefaultValue (base name: "merchantDefinedData1DefaultValue")', function() {
      // uncomment below and update the code to test the property merchantDefinedData1DefaultValue
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData1Label (base name: "merchantDefinedData1Label")', function() {
      // uncomment below and update the code to test the property merchantDefinedData1Label
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property requireMerchantDefinedData1 (base name: "requireMerchantDefinedData1")', function() {
      // uncomment below and update the code to test the property requireMerchantDefinedData1
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData2DefaultValue (base name: "merchantDefinedData2DefaultValue")', function() {
      // uncomment below and update the code to test the property merchantDefinedData2DefaultValue
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData2Label (base name: "merchantDefinedData2Label")', function() {
      // uncomment below and update the code to test the property merchantDefinedData2Label
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property requireMerchantDefinedData2 (base name: "requireMerchantDefinedData2")', function() {
      // uncomment below and update the code to test the property requireMerchantDefinedData2
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData3DefaultValue (base name: "merchantDefinedData3DefaultValue")', function() {
      // uncomment below and update the code to test the property merchantDefinedData3DefaultValue
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData3Label (base name: "merchantDefinedData3Label")', function() {
      // uncomment below and update the code to test the property merchantDefinedData3Label
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property requireMerchantDefinedData3 (base name: "requireMerchantDefinedData3")', function() {
      // uncomment below and update the code to test the property requireMerchantDefinedData3
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData4DefaultValue (base name: "merchantDefinedData4DefaultValue")', function() {
      // uncomment below and update the code to test the property merchantDefinedData4DefaultValue
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData4Label (base name: "merchantDefinedData4Label")', function() {
      // uncomment below and update the code to test the property merchantDefinedData4Label
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property requireMerchantDefinedData4 (base name: "requireMerchantDefinedData4")', function() {
      // uncomment below and update the code to test the property requireMerchantDefinedData4
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData5DefaultValue (base name: "merchantDefinedData5DefaultValue")', function() {
      // uncomment below and update the code to test the property merchantDefinedData5DefaultValue
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData5Label (base name: "merchantDefinedData5Label")', function() {
      // uncomment below and update the code to test the property merchantDefinedData5Label
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property requireMerchantDefinedData5 (base name: "requireMerchantDefinedData5")', function() {
      // uncomment below and update the code to test the property requireMerchantDefinedData5
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData1DisplayOnReceipt (base name: "merchantDefinedData1DisplayOnReceipt")', function() {
      // uncomment below and update the code to test the property merchantDefinedData1DisplayOnReceipt
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData2DisplayOnReceipt (base name: "merchantDefinedData2DisplayOnReceipt")', function() {
      // uncomment below and update the code to test the property merchantDefinedData2DisplayOnReceipt
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData3DisplayOnReceipt (base name: "merchantDefinedData3DisplayOnReceipt")', function() {
      // uncomment below and update the code to test the property merchantDefinedData3DisplayOnReceipt
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData4DisplayOnReceipt (base name: "merchantDefinedData4DisplayOnReceipt")', function() {
      // uncomment below and update the code to test the property merchantDefinedData4DisplayOnReceipt
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedData5DisplayOnReceipt (base name: "merchantDefinedData5DisplayOnReceipt")', function() {
      // uncomment below and update the code to test the property merchantDefinedData5DisplayOnReceipt
      //var instane = new CyberSource.PaymentProductsVirtualTerminalConfigurationInformationConfigurationsCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields();
      //expect(instance).to.be();
    });

  });

}));
