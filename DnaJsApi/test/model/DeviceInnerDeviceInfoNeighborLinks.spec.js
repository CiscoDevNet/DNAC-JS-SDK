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
    instance = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
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

  describe('DeviceInnerDeviceInfoNeighborLinks', function() {
    it('should create an instance of DeviceInnerDeviceInfoNeighborLinks', function() {
      // uncomment below and update the code to test DeviceInnerDeviceInfoNeighborLinks
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be.a(Swagger.DeviceInnerDeviceInfoNeighborLinks);
    });

    it('should have the property localInterfaceName (base name: "localInterfaceName")', function() {
      // uncomment below and update the code to test the property localInterfaceName
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property localMacAddress (base name: "localMacAddress")', function() {
      // uncomment below and update the code to test the property localMacAddress
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property localShortInterfaceName (base name: "localShortInterfaceName")', function() {
      // uncomment below and update the code to test the property localShortInterfaceName
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property remoteDeviceName (base name: "remoteDeviceName")', function() {
      // uncomment below and update the code to test the property remoteDeviceName
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property remoteInterfaceName (base name: "remoteInterfaceName")', function() {
      // uncomment below and update the code to test the property remoteInterfaceName
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property remoteMacAddress (base name: "remoteMacAddress")', function() {
      // uncomment below and update the code to test the property remoteMacAddress
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property remotePlatform (base name: "remotePlatform")', function() {
      // uncomment below and update the code to test the property remotePlatform
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property remoteShortInterfaceName (base name: "remoteShortInterfaceName")', function() {
      // uncomment below and update the code to test the property remoteShortInterfaceName
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

    it('should have the property remoteVersion (base name: "remoteVersion")', function() {
      // uncomment below and update the code to test the property remoteVersion
      //var instane = new Swagger.DeviceInnerDeviceInfoNeighborLinks();
      //expect(instance).to.be();
    });

  });

}));