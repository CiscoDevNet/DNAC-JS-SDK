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
    instance = new Swagger.TopologyApi();
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

  describe('TopologyApi', function() {
    describe('getTopologyL2ByVlanId', function() {
      it('should call getTopologyL2ByVlanId successfully', function(done) {
        //uncomment below and update the code to test getTopologyL2ByVlanId
        //instance.getTopologyL2ByVlanId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopologyL3ByTopologyType', function() {
      it('should call getTopologyL3ByTopologyType successfully', function(done) {
        //uncomment below and update the code to test getTopologyL3ByTopologyType
        //instance.getTopologyL3ByTopologyType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopologyPhysicalTopology', function() {
      it('should call getTopologyPhysicalTopology successfully', function(done) {
        //uncomment below and update the code to test getTopologyPhysicalTopology
        //instance.getTopologyPhysicalTopology(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopologySiteTopology', function() {
      it('should call getTopologySiteTopology successfully', function(done) {
        //uncomment below and update the code to test getTopologySiteTopology
        //instance.getTopologySiteTopology(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopologyVlanVlanNames', function() {
      it('should call getTopologyVlanVlanNames successfully', function(done) {
        //uncomment below and update the code to test getTopologyVlanVlanNames
        //instance.getTopologyVlanVlanNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
