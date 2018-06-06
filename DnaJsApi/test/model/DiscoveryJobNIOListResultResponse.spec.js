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
    instance = new Swagger.DiscoveryJobNIOListResultResponse();
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

  describe('DiscoveryJobNIOListResultResponse', function() {
    it('should create an instance of DiscoveryJobNIOListResultResponse', function() {
      // uncomment below and update the code to test DiscoveryJobNIOListResultResponse
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be.a(Swagger.DiscoveryJobNIOListResultResponse);
    });

    it('should have the property attributeInfo (base name: "attributeInfo")', function() {
      // uncomment below and update the code to test the property attributeInfo
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property cliStatus (base name: "cliStatus")', function() {
      // uncomment below and update the code to test the property cliStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property discoveryStatus (base name: "discoveryStatus")', function() {
      // uncomment below and update the code to test the property discoveryStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property httpStatus (base name: "httpStatus")', function() {
      // uncomment below and update the code to test the property httpStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property inventoryCollectionStatus (base name: "inventoryCollectionStatus")', function() {
      // uncomment below and update the code to test the property inventoryCollectionStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property inventoryReachabilityStatus (base name: "inventoryReachabilityStatus")', function() {
      // uncomment below and update the code to test the property inventoryReachabilityStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ipAddress")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property jobStatus (base name: "jobStatus")', function() {
      // uncomment below and update the code to test the property jobStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property netconfStatus (base name: "netconfStatus")', function() {
      // uncomment below and update the code to test the property netconfStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property pingStatus (base name: "pingStatus")', function() {
      // uncomment below and update the code to test the property pingStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property snmpStatus (base name: "snmpStatus")', function() {
      // uncomment below and update the code to test the property snmpStatus
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

    it('should have the property taskId (base name: "taskId")', function() {
      // uncomment below and update the code to test the property taskId
      //var instane = new Swagger.DiscoveryJobNIOListResultResponse();
      //expect(instance).to.be();
    });

  });

}));
