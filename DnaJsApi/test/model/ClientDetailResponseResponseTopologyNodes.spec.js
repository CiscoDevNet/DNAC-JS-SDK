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
    instance = new Swagger.ClientDetailResponseResponseTopologyNodes();
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

  describe('ClientDetailResponseResponseTopologyNodes', function() {
    it('should create an instance of ClientDetailResponseResponseTopologyNodes', function() {
      // uncomment below and update the code to test ClientDetailResponseResponseTopologyNodes
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be.a(Swagger.ClientDetailResponseResponseTopologyNodes);
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property platformId (base name: "platformId")', function() {
      // uncomment below and update the code to test the property platformId
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property family (base name: "family")', function() {
      // uncomment below and update the code to test the property family
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property softwareVersion (base name: "softwareVersion")', function() {
      // uncomment below and update the code to test the property softwareVersion
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property nodeType (base name: "nodeType")', function() {
      // uncomment below and update the code to test the property nodeType
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property radioFrequency (base name: "radioFrequency")', function() {
      // uncomment below and update the code to test the property radioFrequency
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property clients (base name: "clients")', function() {
      // uncomment below and update the code to test the property clients
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property healthScore (base name: "healthScore")', function() {
      // uncomment below and update the code to test the property healthScore
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property fabricGroup (base name: "fabricGroup")', function() {
      // uncomment below and update the code to test the property fabricGroup
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

    it('should have the property connectedDevice (base name: "connectedDevice")', function() {
      // uncomment below and update the code to test the property connectedDevice
      //var instane = new Swagger.ClientDetailResponseResponseTopologyNodes();
      //expect(instance).to.be();
    });

  });

}));
