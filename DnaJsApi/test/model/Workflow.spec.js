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
    instance = new Swagger.Workflow();
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

  describe('Workflow', function() {
    it('should create an instance of Workflow', function() {
      // uncomment below and update the code to test Workflow
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be.a(Swagger.Workflow);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property addToInventory (base name: "addToInventory")', function() {
      // uncomment below and update the code to test the property addToInventory
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property addedOn (base name: "addedOn")', function() {
      // uncomment below and update the code to test the property addedOn
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property configId (base name: "configId")', function() {
      // uncomment below and update the code to test the property configId
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property currTaskIdx (base name: "currTaskIdx")', function() {
      // uncomment below and update the code to test the property currTaskIdx
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property execTime (base name: "execTime")', function() {
      // uncomment below and update the code to test the property execTime
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property imageId (base name: "imageId")', function() {
      // uncomment below and update the code to test the property imageId
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property lastupdateOn (base name: "lastupdateOn")', function() {
      // uncomment below and update the code to test the property lastupdateOn
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property tasks (base name: "tasks")', function() {
      // uncomment below and update the code to test the property tasks
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property useState (base name: "useState")', function() {
      // uncomment below and update the code to test the property useState
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Swagger.Workflow();
      //expect(instance).to.be();
    });

  });

}));