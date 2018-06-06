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
    instance = new Swagger.ImageInfoListResponseProfileInfo();
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

  describe('ImageInfoListResponseProfileInfo', function() {
    it('should create an instance of ImageInfoListResponseProfileInfo', function() {
      // uncomment below and update the code to test ImageInfoListResponseProfileInfo
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be.a(Swagger.ImageInfoListResponseProfileInfo);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be();
    });

    it('should have the property extendedAttributes (base name: "extendedAttributes")', function() {
      // uncomment below and update the code to test the property extendedAttributes
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "productType")', function() {
      // uncomment below and update the code to test the property productType
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be();
    });

    it('should have the property profileName (base name: "profileName")', function() {
      // uncomment below and update the code to test the property profileName
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be();
    });

    it('should have the property shares (base name: "shares")', function() {
      // uncomment below and update the code to test the property shares
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be();
    });

    it('should have the property vCpu (base name: "vCpu")', function() {
      // uncomment below and update the code to test the property vCpu
      //var instane = new Swagger.ImageInfoListResponseProfileInfo();
      //expect(instance).to.be();
    });

  });

}));