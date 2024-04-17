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
    instance = new CyberSource.Ptsv2paymentsProcessingInformation();
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

  describe('Ptsv2paymentsProcessingInformation', function() {
    it('should create an instance of Ptsv2paymentsProcessingInformation', function() {
      // uncomment below and update the code to test Ptsv2paymentsProcessingInformation
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsProcessingInformation);
    });

    it('should have the property actionList (base name: "actionList")', function() {
      // uncomment below and update the code to test the property actionList
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property enableEscrowOption (base name: "enableEscrowOption")', function() {
      // uncomment below and update the code to test the property enableEscrowOption
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property actionTokenTypes (base name: "actionTokenTypes")', function() {
      // uncomment below and update the code to test the property actionTokenTypes
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property binSource (base name: "binSource")', function() {
      // uncomment below and update the code to test the property binSource
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property capture (base name: "capture")', function() {
      // uncomment below and update the code to test the property capture
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property processorId (base name: "processorId")', function() {
      // uncomment below and update the code to test the property processorId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property businessApplicationId (base name: "businessApplicationId")', function() {
      // uncomment below and update the code to test the property businessApplicationId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property commerceIndicator (base name: "commerceIndicator")', function() {
      // uncomment below and update the code to test the property commerceIndicator
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property commerceIndicatorLabel (base name: "commerceIndicatorLabel")', function() {
      // uncomment below and update the code to test the property commerceIndicatorLabel
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentSolution (base name: "paymentSolution")', function() {
      // uncomment below and update the code to test the property paymentSolution
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property reconciliationId (base name: "reconciliationId")', function() {
      // uncomment below and update the code to test the property reconciliationId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property linkId (base name: "linkId")', function() {
      // uncomment below and update the code to test the property linkId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property purchaseLevel (base name: "purchaseLevel")', function() {
      // uncomment below and update the code to test the property purchaseLevel
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property transactionTimeout (base name: "transactionTimeout")', function() {
      // uncomment below and update the code to test the property transactionTimeout
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property intentsId (base name: "intentsId")', function() {
      // uncomment below and update the code to test the property intentsId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentId (base name: "paymentId")', function() {
      // uncomment below and update the code to test the property paymentId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property reportGroup (base name: "reportGroup")', function() {
      // uncomment below and update the code to test the property reportGroup
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property visaCheckoutId (base name: "visaCheckoutId")', function() {
      // uncomment below and update the code to test the property visaCheckoutId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property industryDataType (base name: "industryDataType")', function() {
      // uncomment below and update the code to test the property industryDataType
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property authorizationOptions (base name: "authorizationOptions")', function() {
      // uncomment below and update the code to test the property authorizationOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property captureOptions (base name: "captureOptions")', function() {
      // uncomment below and update the code to test the property captureOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property recurringOptions (base name: "recurringOptions")', function() {
      // uncomment below and update the code to test the property recurringOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property bankTransferOptions (base name: "bankTransferOptions")', function() {
      // uncomment below and update the code to test the property bankTransferOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOptions (base name: "purchaseOptions")', function() {
      // uncomment below and update the code to test the property purchaseOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property electronicBenefitsTransfer (base name: "electronicBenefitsTransfer")', function() {
      // uncomment below and update the code to test the property electronicBenefitsTransfer
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property loanOptions (base name: "loanOptions")', function() {
      // uncomment below and update the code to test the property loanOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property walletType (base name: "walletType")', function() {
      // uncomment below and update the code to test the property walletType
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property nationalNetDomesticData (base name: "nationalNetDomesticData")', function() {
      // uncomment below and update the code to test the property nationalNetDomesticData
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property japanPaymentOptions (base name: "japanPaymentOptions")', function() {
      // uncomment below and update the code to test the property japanPaymentOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property mobileRemotePaymentType (base name: "mobileRemotePaymentType")', function() {
      // uncomment below and update the code to test the property mobileRemotePaymentType
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property extendedCreditTotalCount (base name: "extendedCreditTotalCount")', function() {
      // uncomment below and update the code to test the property extendedCreditTotalCount
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property networkRoutingOrder (base name: "networkRoutingOrder")', function() {
      // uncomment below and update the code to test the property networkRoutingOrder
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property payByPointsIndicator (base name: "payByPointsIndicator")', function() {
      // uncomment below and update the code to test the property payByPointsIndicator
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property isReturnAuthRecordEnabled (base name: "isReturnAuthRecordEnabled")', function() {
      // uncomment below and update the code to test the property isReturnAuthRecordEnabled
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property networkPartnerId (base name: "networkPartnerId")', function() {
      // uncomment below and update the code to test the property networkPartnerId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentType (base name: "paymentType")', function() {
      // uncomment below and update the code to test the property paymentType
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformation();
      //expect(instance).to.be();
    });

  });

}));
