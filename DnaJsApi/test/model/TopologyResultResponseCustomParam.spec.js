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
    instance = new Swagger.TopologyResultResponseCustomParam();
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

  describe('TopologyResultResponseCustomParam', function() {
    it('should create an instance of TopologyResultResponseCustomParam', function() {
      // uncomment below and update the code to test TopologyResultResponseCustomParam
      //var instane = new Swagger.TopologyResultResponseCustomParam();
      //expect(instance).to.be.a(Swagger.TopologyResultResponseCustomParam);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.TopologyResultResponseCustomParam();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new Swagger.TopologyResultResponseCustomParam();
      //expect(instance).to.be();
    });

    it('should have the property parentNodeId (base name: "parentNodeId")', function() {
      // uncomment below and update the code to test the property parentNodeId
      //var instane = new Swagger.TopologyResultResponseCustomParam();
      //expect(instance).to.be();
    });

    it('should have the property x (base name: "x")', function() {
      // uncomment below and update the code to test the property x
      //var instane = new Swagger.TopologyResultResponseCustomParam();
      //expect(instance).to.be();
    });

    it('should have the property y (base name: "y")', function() {
      // uncomment below and update the code to test the property y
      //var instane = new Swagger.TopologyResultResponseCustomParam();
      //expect(instance).to.be();
    });

  });

}));
