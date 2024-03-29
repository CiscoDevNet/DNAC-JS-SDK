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
    instance = new Swagger.DeviceInnerDeviceInfoPnpProfileList();
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

  describe('DeviceInnerDeviceInfoPnpProfileList', function() {
    it('should create an instance of DeviceInnerDeviceInfoPnpProfileList', function() {
      // uncomment below and update the code to test DeviceInnerDeviceInfoPnpProfileList
      //var instane = new Swagger.DeviceInnerDeviceInfoPnpProfileList();
      //expect(instance).to.be.a(Swagger.DeviceInnerDeviceInfoPnpProfileList);
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new Swagger.DeviceInnerDeviceInfoPnpProfileList();
      //expect(instance).to.be();
    });

    it('should have the property discoveryCreated (base name: "discoveryCreated")', function() {
      // uncomment below and update the code to test the property discoveryCreated
      //var instane = new Swagger.DeviceInnerDeviceInfoPnpProfileList();
      //expect(instance).to.be();
    });

    it('should have the property primaryEndpoint (base name: "primaryEndpoint")', function() {
      // uncomment below and update the code to test the property primaryEndpoint
      //var instane = new Swagger.DeviceInnerDeviceInfoPnpProfileList();
      //expect(instance).to.be();
    });

    it('should have the property profileName (base name: "profileName")', function() {
      // uncomment below and update the code to test the property profileName
      //var instane = new Swagger.DeviceInnerDeviceInfoPnpProfileList();
      //expect(instance).to.be();
    });

    it('should have the property secondaryEndpoint (base name: "secondaryEndpoint")', function() {
      // uncomment below and update the code to test the property secondaryEndpoint
      //var instane = new Swagger.DeviceInnerDeviceInfoPnpProfileList();
      //expect(instance).to.be();
    });

  });

}));
