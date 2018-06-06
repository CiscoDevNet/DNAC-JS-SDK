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
    instance = new Swagger.ImageApi();
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

  describe('ImageApi', function() {
    describe('getImageImportation', function() {
      it('should call getImageImportation successfully', function(done) {
        //uncomment below and update the code to test getImageImportation
        //instance.getImageImportation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postImageActivationDevice', function() {
      it('should call postImageActivationDevice successfully', function(done) {
        //uncomment below and update the code to test postImageActivationDevice
        //instance.postImageActivationDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postImageDistribution', function() {
      it('should call postImageDistribution successfully', function(done) {
        //uncomment below and update the code to test postImageDistribution
        //instance.postImageDistribution(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postImageImportationSourceFile', function() {
      it('should call postImageImportationSourceFile successfully', function(done) {
        //uncomment below and update the code to test postImageImportationSourceFile
        //instance.postImageImportationSourceFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postImageImportationSourceUrl', function() {
      it('should call postImageImportationSourceUrl successfully', function(done) {
        //uncomment below and update the code to test postImageImportationSourceUrl
        //instance.postImageImportationSourceUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));