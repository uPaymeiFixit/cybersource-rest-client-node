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
    instance = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
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

  describe('ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails', function() {
    it('should create an instance of ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails', function() {
      // uncomment below and update the code to test ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be.a(CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails);
    });

    it('should have the property requestId (base name: "requestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property processorMerchantId (base name: "processorMerchantId")', function() {
      // uncomment below and update the code to test the property processorMerchantId
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property transactionReferenceNumber (base name: "transactionReferenceNumber")', function() {
      // uncomment below and update the code to test the property transactionReferenceNumber
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property merchantReferenceNumber (base name: "merchantReferenceNumber")', function() {
      // uncomment below and update the code to test the property merchantReferenceNumber
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property accountSuffix (base name: "accountSuffix")', function() {
      // uncomment below and update the code to test the property accountSuffix
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property paymentSubType (base name: "paymentSubType")', function() {
      // uncomment below and update the code to test the property paymentSubType
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property paymentSubTypeDescription (base name: "paymentSubTypeDescription")', function() {
      // uncomment below and update the code to test the property paymentSubTypeDescription
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property transactionTime (base name: "transactionTime")', function() {
      // uncomment below and update the code to test the property transactionTime
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property processedTime (base name: "processedTime")', function() {
      // uncomment below and update the code to test the property processedTime
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property priceType (base name: "priceType")', function() {
      // uncomment below and update the code to test the property priceType
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property priceAmountOne (base name: "priceAmountOne")', function() {
      // uncomment below and update the code to test the property priceAmountOne
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property priceAmountTwo (base name: "priceAmountTwo")', function() {
      // uncomment below and update the code to test the property priceAmountTwo
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property reClass (base name: "reClass")', function() {
      // uncomment below and update the code to test the property reClass
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property settlementTime (base name: "settlementTime")', function() {
      // uncomment below and update the code to test the property settlementTime
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property settlementProcessor (base name: "settlementProcessor")', function() {
      // uncomment below and update the code to test the property settlementProcessor
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property merchantBatchNumber (base name: "merchantBatchNumber")', function() {
      // uncomment below and update the code to test the property merchantBatchNumber
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property clearedLevel (base name: "clearedLevel")', function() {
      // uncomment below and update the code to test the property clearedLevel
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property billbackReasonCode (base name: "billbackReasonCode")', function() {
      // uncomment below and update the code to test the property billbackReasonCode
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property billbackReasonDescription (base name: "billbackReasonDescription")', function() {
      // uncomment below and update the code to test the property billbackReasonDescription
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property merchantPricedLevel (base name: "merchantPricedLevel")', function() {
      // uncomment below and update the code to test the property merchantPricedLevel
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property discountRate (base name: "discountRate")', function() {
      // uncomment below and update the code to test the property discountRate
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property clearingRateAmountOne (base name: "clearingRateAmountOne")', function() {
      // uncomment below and update the code to test the property clearingRateAmountOne
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property clearingRateAmountTwo (base name: "clearingRateAmountTwo")', function() {
      // uncomment below and update the code to test the property clearingRateAmountTwo
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property clearingRateAmountThree (base name: "clearingRateAmountThree")', function() {
      // uncomment below and update the code to test the property clearingRateAmountThree
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property clearingRateCurrencyCode (base name: "clearingRateCurrencyCode")', function() {
      // uncomment below and update the code to test the property clearingRateCurrencyCode
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property interchangeAmount (base name: "interchangeAmount")', function() {
      // uncomment below and update the code to test the property interchangeAmount
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property billbackAmount (base name: "billbackAmount")', function() {
      // uncomment below and update the code to test the property billbackAmount
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property settlementAmount (base name: "settlementAmount")', function() {
      // uncomment below and update the code to test the property settlementAmount
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property settlementCurrencyCode (base name: "settlementCurrencyCode")', function() {
      // uncomment below and update the code to test the property settlementCurrencyCode
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property conversionRate (base name: "conversionRate")', function() {
      // uncomment below and update the code to test the property conversionRate
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property deltaCost (base name: "deltaCost")', function() {
      // uncomment below and update the code to test the property deltaCost
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property surchargeAmount (base name: "surchargeAmount")', function() {
      // uncomment below and update the code to test the property surchargeAmount
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property percentRateCharged (base name: "percentRateCharged")', function() {
      // uncomment below and update the code to test the property percentRateCharged
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property perTransactionCharged (base name: "perTransactionCharged")', function() {
      // uncomment below and update the code to test the property perTransactionCharged
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property downgradeReasonCode (base name: "downgradeReasonCode")', function() {
      // uncomment below and update the code to test the property downgradeReasonCode
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property processTime (base name: "processTime")', function() {
      // uncomment below and update the code to test the property processTime
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property authCode (base name: "authCode")', function() {
      // uncomment below and update the code to test the property authCode
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property batchTime (base name: "batchTime")', function() {
      // uncomment below and update the code to test the property batchTime
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property processorBatchNumber (base name: "processorBatchNumber")', function() {
      // uncomment below and update the code to test the property processorBatchNumber
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property cardIndicator (base name: "cardIndicator")', function() {
      // uncomment below and update the code to test the property cardIndicator
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property minimumUnit (base name: "minimumUnit")', function() {
      // uncomment below and update the code to test the property minimumUnit
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property minimumUnitCurrencyCode (base name: "minimumUnitCurrencyCode")', function() {
      // uncomment below and update the code to test the property minimumUnitCurrencyCode
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property creditDeltaIndicator (base name: "creditDeltaIndicator")', function() {
      // uncomment below and update the code to test the property creditDeltaIndicator
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property feeCategory (base name: "feeCategory")', function() {
      // uncomment below and update the code to test the property feeCategory
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

    it('should have the property applicationName (base name: "applicationName")', function() {
      // uncomment below and update the code to test the property applicationName
      //var instane = new CyberSource.ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails();
      //expect(instance).to.be();
    });

  });

}));
