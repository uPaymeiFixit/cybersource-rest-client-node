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
    instance = new CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses();
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

  describe('ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses', function() {
    it('should create an instance of ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses', function() {
      // uncomment below and update the code to test ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses
      //var instane = new CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses();
      //expect(instance).to.be.a(CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses);
    });

    it('should have the property requestId (base name: "requestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses();
      //expect(instance).to.be();
    });

    it('should have the property settlementTime (base name: "settlementTime")', function() {
      // uncomment below and update the code to test the property settlementTime
      //var instane = new CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses();
      //expect(instance).to.be();
    });

    it('should have the property reasonCode (base name: "reasonCode")', function() {
      // uncomment below and update the code to test the property reasonCode
      //var instane = new CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses();
      //expect(instance).to.be();
    });

    it('should have the property errorText (base name: "errorText")', function() {
      // uncomment below and update the code to test the property errorText
      //var instane = new CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses();
      //expect(instance).to.be();
    });

  });

}));
