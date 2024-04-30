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
    instance = new CyberSource.SAConfigNotificationsMerchantNotifications();
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

  describe('SAConfigNotificationsMerchantNotifications', function() {
    it('should create an instance of SAConfigNotificationsMerchantNotifications', function() {
      // uncomment below and update the code to test SAConfigNotificationsMerchantNotifications
      //var instane = new CyberSource.SAConfigNotificationsMerchantNotifications();
      //expect(instance).to.be.a(CyberSource.SAConfigNotificationsMerchantNotifications);
    });

    it('should have the property backofficePostEnabled (base name: "backofficePostEnabled")', function() {
      // uncomment below and update the code to test the property backofficePostEnabled
      //var instane = new CyberSource.SAConfigNotificationsMerchantNotifications();
      //expect(instance).to.be();
    });

    it('should have the property backofficeEmailAddress (base name: "backofficeEmailAddress")', function() {
      // uncomment below and update the code to test the property backofficeEmailAddress
      //var instane = new CyberSource.SAConfigNotificationsMerchantNotifications();
      //expect(instance).to.be();
    });

    it('should have the property backofficeEmailEnabled (base name: "backofficeEmailEnabled")', function() {
      // uncomment below and update the code to test the property backofficeEmailEnabled
      //var instane = new CyberSource.SAConfigNotificationsMerchantNotifications();
      //expect(instance).to.be();
    });

    it('should have the property backofficePostUrl (base name: "backofficePostUrl")', function() {
      // uncomment below and update the code to test the property backofficePostUrl
      //var instane = new CyberSource.SAConfigNotificationsMerchantNotifications();
      //expect(instance).to.be();
    });

    it('should have the property cardNumberFormat (base name: "cardNumberFormat")', function() {
      // uncomment below and update the code to test the property cardNumberFormat
      //var instane = new CyberSource.SAConfigNotificationsMerchantNotifications();
      //expect(instance).to.be();
    });

  });

}));
