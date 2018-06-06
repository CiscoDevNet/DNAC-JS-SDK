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
    instance = new Swagger.SAVAMapping();
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

  describe('SAVAMapping', function() {
    it('should create an instance of SAVAMapping', function() {
      // uncomment below and update the code to test SAVAMapping
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be.a(Swagger.SAVAMapping);
    });

    it('should have the property autoSyncPeriod (base name: "autoSyncPeriod")', function() {
      // uncomment below and update the code to test the property autoSyncPeriod
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property ccoUser (base name: "ccoUser")', function() {
      // uncomment below and update the code to test the property ccoUser
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property lastSync (base name: "lastSync")', function() {
      // uncomment below and update the code to test the property lastSync
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property smartAccountId (base name: "smartAccountId")', function() {
      // uncomment below and update the code to test the property smartAccountId
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property syncResult (base name: "syncResult")', function() {
      // uncomment below and update the code to test the property syncResult
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property syncResultStr (base name: "syncResultStr")', function() {
      // uncomment below and update the code to test the property syncResultStr
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property syncStartTime (base name: "syncStartTime")', function() {
      // uncomment below and update the code to test the property syncStartTime
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property syncStatus (base name: "syncStatus")', function() {
      // uncomment below and update the code to test the property syncStatus
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

    it('should have the property virtualAccountId (base name: "virtualAccountId")', function() {
      // uncomment below and update the code to test the property virtualAccountId
      //var instane = new Swagger.SAVAMapping();
      //expect(instance).to.be();
    });

  });

}));