/**
 * Swagger
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    factory(root.expect, root.Swagger);
  }
}(this, function(expect, Swagger) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Swagger.NetworkDeviceNIOListResultResponse();
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

  describe('NetworkDeviceNIOListResultResponse', function() {
    it('should create an instance of NetworkDeviceNIOListResultResponse', function() {
      // uncomment below and update the code to test NetworkDeviceNIOListResultResponse
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be.a(Swagger.NetworkDeviceNIOListResultResponse);
    });

    it('should have the property anchorWlcForAp (base name: "anchorWlcForAp")', function() {
      // uncomment below and update the code to test the property anchorWlcForAp
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property authModelId (base name: "authModelId")', function() {
      // uncomment below and update the code to test the property authModelId
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property avgUpdateFrequency (base name: "avgUpdateFrequency")', function() {
      // uncomment below and update the code to test the property avgUpdateFrequency
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property bootDateTime (base name: "bootDateTime")', function() {
      // uncomment below and update the code to test the property bootDateTime
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property cliStatus (base name: "cliStatus")', function() {
      // uncomment below and update the code to test the property cliStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property duplicateDeviceId (base name: "duplicateDeviceId")', function() {
      // uncomment below and update the code to test the property duplicateDeviceId
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorDescription (base name: "errorDescription")', function() {
      // uncomment below and update the code to test the property errorDescription
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property family (base name: "family")', function() {
      // uncomment below and update the code to test the property family
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property httpStatus (base name: "httpStatus")', function() {
      // uncomment below and update the code to test the property httpStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property imageName (base name: "imageName")', function() {
      // uncomment below and update the code to test the property imageName
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property ingressQueueConfig (base name: "ingressQueueConfig")', function() {
      // uncomment below and update the code to test the property ingressQueueConfig
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property interfaceCount (base name: "interfaceCount")', function() {
      // uncomment below and update the code to test the property interfaceCount
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property inventoryCollectionStatus (base name: "inventoryCollectionStatus")', function() {
      // uncomment below and update the code to test the property inventoryCollectionStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property inventoryReachabilityStatus (base name: "inventoryReachabilityStatus")', function() {
      // uncomment below and update the code to test the property inventoryReachabilityStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "lastUpdated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property lineCardCount (base name: "lineCardCount")', function() {
      // uncomment below and update the code to test the property lineCardCount
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property lineCardId (base name: "lineCardId")', function() {
      // uncomment below and update the code to test the property lineCardId
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property locationName (base name: "locationName")', function() {
      // uncomment below and update the code to test the property locationName
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "macAddress")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property managementIpAddress (base name: "managementIpAddress")', function() {
      // uncomment below and update the code to test the property managementIpAddress
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property memorySize (base name: "memorySize")', function() {
      // uncomment below and update the code to test the property memorySize
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property netconfStatus (base name: "netconfStatus")', function() {
      // uncomment below and update the code to test the property netconfStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property numUpdates (base name: "numUpdates")', function() {
      // uncomment below and update the code to test the property numUpdates
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property pingStatus (base name: "pingStatus")', function() {
      // uncomment below and update the code to test the property pingStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property platformId (base name: "platformId")', function() {
      // uncomment below and update the code to test the property platformId
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property portRange (base name: "portRange")', function() {
      // uncomment below and update the code to test the property portRange
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property qosStatus (base name: "qosStatus")', function() {
      // uncomment below and update the code to test the property qosStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property reachabilityFailureReason (base name: "reachabilityFailureReason")', function() {
      // uncomment below and update the code to test the property reachabilityFailureReason
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property reachabilityStatus (base name: "reachabilityStatus")', function() {
      // uncomment below and update the code to test the property reachabilityStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property roleSource (base name: "roleSource")', function() {
      // uncomment below and update the code to test the property roleSource
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serialNumber")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property snmpContact (base name: "snmpContact")', function() {
      // uncomment below and update the code to test the property snmpContact
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property snmpLocation (base name: "snmpLocation")', function() {
      // uncomment below and update the code to test the property snmpLocation
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property snmpStatus (base name: "snmpStatus")', function() {
      // uncomment below and update the code to test the property snmpStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property softwareVersion (base name: "softwareVersion")', function() {
      // uncomment below and update the code to test the property softwareVersion
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property tagCount (base name: "tagCount")', function() {
      // uncomment below and update the code to test the property tagCount
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property upTime (base name: "upTime")', function() {
      // uncomment below and update the code to test the property upTime
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property wlcApDeviceStatus (base name: "wlcApDeviceStatus")', function() {
      // uncomment below and update the code to test the property wlcApDeviceStatus
      //var instane = new Swagger.NetworkDeviceNIOListResultResponse();
      //expect(instance).to.be();
    });

  });

}));