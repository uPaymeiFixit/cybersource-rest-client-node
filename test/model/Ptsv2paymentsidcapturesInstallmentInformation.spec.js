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
    instance = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
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

  describe('Ptsv2paymentsidcapturesInstallmentInformation', function() {
    it('should create an instance of Ptsv2paymentsidcapturesInstallmentInformation', function() {
      // uncomment below and update the code to test Ptsv2paymentsidcapturesInstallmentInformation
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsidcapturesInstallmentInformation);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property planType (base name: "planType")', function() {
      // uncomment below and update the code to test the property planType
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "totalAmount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "totalCount")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property firstInstallmentDate (base name: "firstInstallmentDate")', function() {
      // uncomment below and update the code to test the property firstInstallmentDate
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property firstInstallmentAmount (base name: "firstInstallmentAmount")', function() {
      // uncomment below and update the code to test the property firstInstallmentAmount
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property invoiceData (base name: "invoiceData")', function() {
      // uncomment below and update the code to test the property invoiceData
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentType (base name: "paymentType")', function() {
      // uncomment below and update the code to test the property paymentType
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property additionalCosts (base name: "additionalCosts")', function() {
      // uncomment below and update the code to test the property additionalCosts
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property additionalCostsPercentage (base name: "additionalCostsPercentage")', function() {
      // uncomment below and update the code to test the property additionalCostsPercentage
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property amountFunded (base name: "amountFunded")', function() {
      // uncomment below and update the code to test the property amountFunded
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property amountRequestedPercentage (base name: "amountRequestedPercentage")', function() {
      // uncomment below and update the code to test the property amountRequestedPercentage
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property annualFinancingCost (base name: "annualFinancingCost")', function() {
      // uncomment below and update the code to test the property annualFinancingCost
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property annualInterestRate (base name: "annualInterestRate")', function() {
      // uncomment below and update the code to test the property annualInterestRate
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property expenses (base name: "expenses")', function() {
      // uncomment below and update the code to test the property expenses
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property expensesPercentage (base name: "expensesPercentage")', function() {
      // uncomment below and update the code to test the property expensesPercentage
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property fees (base name: "fees")', function() {
      // uncomment below and update the code to test the property fees
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property feesPercentage (base name: "feesPercentage")', function() {
      // uncomment below and update the code to test the property feesPercentage
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property insurance (base name: "insurance")', function() {
      // uncomment below and update the code to test the property insurance
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property insurancePercentage (base name: "insurancePercentage")', function() {
      // uncomment below and update the code to test the property insurancePercentage
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property monthlyInterestRate (base name: "monthlyInterestRate")', function() {
      // uncomment below and update the code to test the property monthlyInterestRate
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property taxes (base name: "taxes")', function() {
      // uncomment below and update the code to test the property taxes
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

    it('should have the property taxesPercentage (base name: "taxesPercentage")', function() {
      // uncomment below and update the code to test the property taxesPercentage
      //var instane = new CyberSource.Ptsv2paymentsidcapturesInstallmentInformation();
      //expect(instance).to.be();
    });

  });

}));
