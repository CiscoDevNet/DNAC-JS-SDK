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
    instance = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
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

  describe('PathResponseResultResponseEgressPhysicalInterfaceQosStatistics', function() {
    it('should create an instance of PathResponseResultResponseEgressPhysicalInterfaceQosStatistics', function() {
      // uncomment below and update the code to test PathResponseResultResponseEgressPhysicalInterfaceQosStatistics
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be.a(Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics);
    });

    it('should have the property classMapName (base name: "classMapName")', function() {
      // uncomment below and update the code to test the property classMapName
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property dropRate (base name: "dropRate")', function() {
      // uncomment below and update the code to test the property dropRate
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property numBytes (base name: "numBytes")', function() {
      // uncomment below and update the code to test the property numBytes
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property numPackets (base name: "numPackets")', function() {
      // uncomment below and update the code to test the property numPackets
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property offeredRate (base name: "offeredRate")', function() {
      // uncomment below and update the code to test the property offeredRate
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property queueBandwidthbps (base name: "queueBandwidthbps")', function() {
      // uncomment below and update the code to test the property queueBandwidthbps
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property queueDepth (base name: "queueDepth")', function() {
      // uncomment below and update the code to test the property queueDepth
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property queueNoBufferDrops (base name: "queueNoBufferDrops")', function() {
      // uncomment below and update the code to test the property queueNoBufferDrops
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property queueTotalDrops (base name: "queueTotalDrops")', function() {
      // uncomment below and update the code to test the property queueTotalDrops
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

    it('should have the property refreshedAt (base name: "refreshedAt")', function() {
      // uncomment below and update the code to test the property refreshedAt
      //var instane = new Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics();
      //expect(instance).to.be();
    });

  });

}));
