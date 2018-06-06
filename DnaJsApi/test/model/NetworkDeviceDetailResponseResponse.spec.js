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
    instance = new Swagger.NetworkDeviceDetailResponseResponse();
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

  describe('NetworkDeviceDetailResponseResponse', function() {
    it('should create an instance of NetworkDeviceDetailResponseResponse', function() {
      // uncomment below and update the code to test NetworkDeviceDetailResponseResponse
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be.a(Swagger.NetworkDeviceDetailResponseResponse);
    });

    it('should have the property managementIpAddr (base name: "managementIpAddr")', function() {
      // uncomment below and update the code to test the property managementIpAddr
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serialNumber")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property nwDeviceName (base name: "nwDeviceName")', function() {
      // uncomment below and update the code to test the property nwDeviceName
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property opState (base name: "opState")', function() {
      // uncomment below and update the code to test the property opState
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property platformId (base name: "platformId")', function() {
      // uncomment below and update the code to test the property platformId
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property nwDeviceId (base name: "nwDeviceId")', function() {
      // uncomment below and update the code to test the property nwDeviceId
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property sysUptime (base name: "sysUptime")', function() {
      // uncomment below and update the code to test the property sysUptime
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property resetReason (base name: "resetReason")', function() {
      // uncomment below and update the code to test the property resetReason
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property nwDeviceRole (base name: "nwDeviceRole")', function() {
      // uncomment below and update the code to test the property nwDeviceRole
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property upTime (base name: "upTime")', function() {
      // uncomment below and update the code to test the property upTime
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property nwDeviceFamily (base name: "nwDeviceFamily")', function() {
      // uncomment below and update the code to test the property nwDeviceFamily
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "macAddress")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property connectedTime (base name: "connectedTime")', function() {
      // uncomment below and update the code to test the property connectedTime
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property softwareVersion (base name: "softwareVersion")', function() {
      // uncomment below and update the code to test the property softwareVersion
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property subMode (base name: "subMode")', function() {
      // uncomment below and update the code to test the property subMode
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property nwDeviceType (base name: "nwDeviceType")', function() {
      // uncomment below and update the code to test the property nwDeviceType
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property overallHealth (base name: "overallHealth")', function() {
      // uncomment below and update the code to test the property overallHealth
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property memoryScore (base name: "memoryScore")', function() {
      // uncomment below and update the code to test the property memoryScore
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

    it('should have the property cpuScore (base name: "cpuScore")', function() {
      // uncomment below and update the code to test the property cpuScore
      //var instane = new Swagger.NetworkDeviceDetailResponseResponse();
      //expect(instance).to.be();
    });

  });

}));
