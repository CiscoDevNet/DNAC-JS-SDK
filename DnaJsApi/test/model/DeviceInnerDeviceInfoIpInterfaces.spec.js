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
    instance = new Swagger.DeviceInnerDeviceInfoIpInterfaces();
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

  describe('DeviceInnerDeviceInfoIpInterfaces', function() {
    it('should create an instance of DeviceInnerDeviceInfoIpInterfaces', function() {
      // uncomment below and update the code to test DeviceInnerDeviceInfoIpInterfaces
      //var instane = new Swagger.DeviceInnerDeviceInfoIpInterfaces();
      //expect(instance).to.be.a(Swagger.DeviceInnerDeviceInfoIpInterfaces);
    });

    it('should have the property ipv4Address (base name: "ipv4Address")', function() {
      // uncomment below and update the code to test the property ipv4Address
      //var instane = new Swagger.DeviceInnerDeviceInfoIpInterfaces();
      //expect(instance).to.be();
    });

    it('should have the property ipv6AddressList (base name: "ipv6AddressList")', function() {
      // uncomment below and update the code to test the property ipv6AddressList
      //var instane = new Swagger.DeviceInnerDeviceInfoIpInterfaces();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "macAddress")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instane = new Swagger.DeviceInnerDeviceInfoIpInterfaces();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Swagger.DeviceInnerDeviceInfoIpInterfaces();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Swagger.DeviceInnerDeviceInfoIpInterfaces();
      //expect(instance).to.be();
    });

  });

}));
