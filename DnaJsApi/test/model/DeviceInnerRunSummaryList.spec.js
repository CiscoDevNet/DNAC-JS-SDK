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
    instance = new Swagger.DeviceInnerRunSummaryList();
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

  describe('DeviceInnerRunSummaryList', function() {
    it('should create an instance of DeviceInnerRunSummaryList', function() {
      // uncomment below and update the code to test DeviceInnerRunSummaryList
      //var instane = new Swagger.DeviceInnerRunSummaryList();
      //expect(instance).to.be.a(Swagger.DeviceInnerRunSummaryList);
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new Swagger.DeviceInnerRunSummaryList();
      //expect(instance).to.be();
    });

    it('should have the property errorFlag (base name: "errorFlag")', function() {
      // uncomment below and update the code to test the property errorFlag
      //var instane = new Swagger.DeviceInnerRunSummaryList();
      //expect(instance).to.be();
    });

    it('should have the property historyTaskInfo (base name: "historyTaskInfo")', function() {
      // uncomment below and update the code to test the property historyTaskInfo
      //var instane = new Swagger.DeviceInnerRunSummaryList();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new Swagger.DeviceInnerRunSummaryList();
      //expect(instance).to.be();
    });

  });

}));
