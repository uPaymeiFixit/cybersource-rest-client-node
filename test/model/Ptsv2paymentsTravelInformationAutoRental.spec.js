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
    instance = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
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

  describe('Ptsv2paymentsTravelInformationAutoRental', function() {
    it('should create an instance of Ptsv2paymentsTravelInformationAutoRental', function() {
      // uncomment below and update the code to test Ptsv2paymentsTravelInformationAutoRental
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsTravelInformationAutoRental);
    });

    it('should have the property noShowIndicator (base name: "noShowIndicator")', function() {
      // uncomment below and update the code to test the property noShowIndicator
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property customerName (base name: "customerName")', function() {
      // uncomment below and update the code to test the property customerName
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property vehicleClass (base name: "vehicleClass")', function() {
      // uncomment below and update the code to test the property vehicleClass
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property distanceTravelled (base name: "distanceTravelled")', function() {
      // uncomment below and update the code to test the property distanceTravelled
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property distanceUnit (base name: "distanceUnit")', function() {
      // uncomment below and update the code to test the property distanceUnit
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property returnDateTime (base name: "returnDateTime")', function() {
      // uncomment below and update the code to test the property returnDateTime
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property rentalDateTime (base name: "rentalDateTime")', function() {
      // uncomment below and update the code to test the property rentalDateTime
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property maxFreeDistance (base name: "maxFreeDistance")', function() {
      // uncomment below and update the code to test the property maxFreeDistance
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property insuranceIndicator (base name: "insuranceIndicator")', function() {
      // uncomment below and update the code to test the property insuranceIndicator
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property programCode (base name: "programCode")', function() {
      // uncomment below and update the code to test the property programCode
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property returnAddress (base name: "returnAddress")', function() {
      // uncomment below and update the code to test the property returnAddress
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property rentalAddress (base name: "rentalAddress")', function() {
      // uncomment below and update the code to test the property rentalAddress
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property agreementNumber (base name: "agreementNumber")', function() {
      // uncomment below and update the code to test the property agreementNumber
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property odometerReading (base name: "odometerReading")', function() {
      // uncomment below and update the code to test the property odometerReading
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property vehicleIdentificationNumber (base name: "vehicleIdentificationNumber")', function() {
      // uncomment below and update the code to test the property vehicleIdentificationNumber
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "companyId")', function() {
      // uncomment below and update the code to test the property companyId
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property numberOfAdditionalDrivers (base name: "numberOfAdditionalDrivers")', function() {
      // uncomment below and update the code to test the property numberOfAdditionalDrivers
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property driverAge (base name: "driverAge")', function() {
      // uncomment below and update the code to test the property driverAge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property specialProgramCode (base name: "specialProgramCode")', function() {
      // uncomment below and update the code to test the property specialProgramCode
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property vehicleMake (base name: "vehicleMake")', function() {
      // uncomment below and update the code to test the property vehicleMake
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property vehicleModel (base name: "vehicleModel")', function() {
      // uncomment below and update the code to test the property vehicleModel
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property timePeriod (base name: "timePeriod")', function() {
      // uncomment below and update the code to test the property timePeriod
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property commodityCode (base name: "commodityCode")', function() {
      // uncomment below and update the code to test the property commodityCode
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property customerServicePhoneNumber (base name: "customerServicePhoneNumber")', function() {
      // uncomment below and update the code to test the property customerServicePhoneNumber
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property taxDetails (base name: "taxDetails")', function() {
      // uncomment below and update the code to test the property taxDetails
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property insuranceAmount (base name: "insuranceAmount")', function() {
      // uncomment below and update the code to test the property insuranceAmount
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property oneWayDropOffAmount (base name: "oneWayDropOffAmount")', function() {
      // uncomment below and update the code to test the property oneWayDropOffAmount
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property adjustedAmountIndicator (base name: "adjustedAmountIndicator")', function() {
      // uncomment below and update the code to test the property adjustedAmountIndicator
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property adjustedAmount (base name: "adjustedAmount")', function() {
      // uncomment below and update the code to test the property adjustedAmount
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property fuelCharges (base name: "fuelCharges")', function() {
      // uncomment below and update the code to test the property fuelCharges
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property weeklyRentalRate (base name: "weeklyRentalRate")', function() {
      // uncomment below and update the code to test the property weeklyRentalRate
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property dailyRentalRate (base name: "dailyRentalRate")', function() {
      // uncomment below and update the code to test the property dailyRentalRate
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property ratePerMile (base name: "ratePerMile")', function() {
      // uncomment below and update the code to test the property ratePerMile
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property mileageCharge (base name: "mileageCharge")', function() {
      // uncomment below and update the code to test the property mileageCharge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property extraMileageCharge (base name: "extraMileageCharge")', function() {
      // uncomment below and update the code to test the property extraMileageCharge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property lateFeeAmount (base name: "lateFeeAmount")', function() {
      // uncomment below and update the code to test the property lateFeeAmount
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property towingCharge (base name: "towingCharge")', function() {
      // uncomment below and update the code to test the property towingCharge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property extraCharge (base name: "extraCharge")', function() {
      // uncomment below and update the code to test the property extraCharge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property gpsCharge (base name: "gpsCharge")', function() {
      // uncomment below and update the code to test the property gpsCharge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property phoneCharge (base name: "phoneCharge")', function() {
      // uncomment below and update the code to test the property phoneCharge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property parkingViolationCharge (base name: "parkingViolationCharge")', function() {
      // uncomment below and update the code to test the property parkingViolationCharge
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property otherCharges (base name: "otherCharges")', function() {
      // uncomment below and update the code to test the property otherCharges
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

    it('should have the property affiliateName (base name: "affiliateName")', function() {
      // uncomment below and update the code to test the property affiliateName
      //var instane = new CyberSource.Ptsv2paymentsTravelInformationAutoRental();
      //expect(instance).to.be();
    });

  });

}));
