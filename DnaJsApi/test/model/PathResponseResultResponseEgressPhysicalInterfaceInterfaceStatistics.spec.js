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
    instance = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
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

  describe('PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics', function() {
    it('should create an instance of PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics', function() {
      // uncomment below and update the code to test PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be.a(Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics);
    });

    it('should have the property adminStatus (base name: "adminStatus")', function() {
      // uncomment below and update the code to test the property adminStatus
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property inputPackets (base name: "inputPackets")', function() {
      // uncomment below and update the code to test the property inputPackets
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property inputQueueCount (base name: "inputQueueCount")', function() {
      // uncomment below and update the code to test the property inputQueueCount
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property inputQueueDrops (base name: "inputQueueDrops")', function() {
      // uncomment below and update the code to test the property inputQueueDrops
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property inputQueueFlushes (base name: "inputQueueFlushes")', function() {
      // uncomment below and update the code to test the property inputQueueFlushes
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property inputQueueMaxDepth (base name: "inputQueueMaxDepth")', function() {
      // uncomment below and update the code to test the property inputQueueMaxDepth
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property inputRatebps (base name: "inputRatebps")', function() {
      // uncomment below and update the code to test the property inputRatebps
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property operationalStatus (base name: "operationalStatus")', function() {
      // uncomment below and update the code to test the property operationalStatus
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property outputDrop (base name: "outputDrop")', function() {
      // uncomment below and update the code to test the property outputDrop
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property outputPackets (base name: "outputPackets")', function() {
      // uncomment below and update the code to test the property outputPackets
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property outputQueueCount (base name: "outputQueueCount")', function() {
      // uncomment below and update the code to test the property outputQueueCount
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property outputQueueDepth (base name: "outputQueueDepth")', function() {
      // uncomment below and update the code to test the property outputQueueDepth
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property outputRatebps (base name: "outputRatebps")', function() {
      // uncomment below and update the code to test the property outputRatebps
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

    it('should have the property refreshedAt (base name: "refreshedAt")', function() {
      // uncomment below and update the code to test the property refreshedAt
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics();
      //expect(instance).to.be();
    });

  });

}));
