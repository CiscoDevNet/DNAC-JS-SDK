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
    instance = new Swagger.ImageInfoListResponseApplicableDevicesForImage();
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

  describe('ImageInfoListResponseApplicableDevicesForImage', function() {
    it('should create an instance of ImageInfoListResponseApplicableDevicesForImage', function() {
      // uncomment below and update the code to test ImageInfoListResponseApplicableDevicesForImage
      //var instane = new Swagger.ImageInfoListResponseApplicableDevicesForImage();
      //expect(instance).to.be.a(Swagger.ImageInfoListResponseApplicableDevicesForImage);
    });

    it('should have the property mdfId (base name: "mdfId")', function() {
      // uncomment below and update the code to test the property mdfId
      //var instane = new Swagger.ImageInfoListResponseApplicableDevicesForImage();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new Swagger.ImageInfoListResponseApplicableDevicesForImage();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "productName")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new Swagger.ImageInfoListResponseApplicableDevicesForImage();
      //expect(instance).to.be();
    });

  });

}));
