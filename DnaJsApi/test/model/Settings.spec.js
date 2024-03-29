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
    instance = new Swagger.Settings();
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

  describe('Settings', function() {
    it('should create an instance of Settings', function() {
      // uncomment below and update the code to test Settings
      //var instane = new Swagger.Settings();
      //expect(instance).to.be.a(Swagger.Settings);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

    it('should have the property aaaCredentials (base name: "aaaCredentials")', function() {
      // uncomment below and update the code to test the property aaaCredentials
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

    it('should have the property acceptEula (base name: "acceptEula")', function() {
      // uncomment below and update the code to test the property acceptEula
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

    it('should have the property defaultProfile (base name: "defaultProfile")', function() {
      // uncomment below and update the code to test the property defaultProfile
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

    it('should have the property savaMappingList (base name: "savaMappingList")', function() {
      // uncomment below and update the code to test the property savaMappingList
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

    it('should have the property taskTimeOuts (base name: "taskTimeOuts")', function() {
      // uncomment below and update the code to test the property taskTimeOuts
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Swagger.Settings();
      //expect(instance).to.be();
    });

  });

}));
