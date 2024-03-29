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
    instance = new Swagger.ClientDetailResponseResponseConnectionInfo();
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

  describe('ClientDetailResponseResponseConnectionInfo', function() {
    it('should create an instance of ClientDetailResponseResponseConnectionInfo', function() {
      // uncomment below and update the code to test ClientDetailResponseResponseConnectionInfo
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be.a(Swagger.ClientDetailResponseResponseConnectionInfo);
    });

    it('should have the property hostType (base name: "hostType")', function() {
      // uncomment below and update the code to test the property hostType
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property nwDeviceName (base name: "nwDeviceName")', function() {
      // uncomment below and update the code to test the property nwDeviceName
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property nwDeviceMac (base name: "nwDeviceMac")', function() {
      // uncomment below and update the code to test the property nwDeviceMac
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property band (base name: "band")', function() {
      // uncomment below and update the code to test the property band
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property spatialStream (base name: "spatialStream")', function() {
      // uncomment below and update the code to test the property spatialStream
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property channelWidth (base name: "channelWidth")', function() {
      // uncomment below and update the code to test the property channelWidth
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property wmm (base name: "wmm")', function() {
      // uncomment below and update the code to test the property wmm
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property uapsd (base name: "uapsd")', function() {
      // uncomment below and update the code to test the property uapsd
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new Swagger.ClientDetailResponseResponseConnectionInfo();
      //expect(instance).to.be();
    });

  });

}));
