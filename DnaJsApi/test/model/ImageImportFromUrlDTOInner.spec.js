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
    instance = new Swagger.ImageImportFromUrlDTOInner();
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

  describe('ImageImportFromUrlDTOInner', function() {
    it('should create an instance of ImageImportFromUrlDTOInner', function() {
      // uncomment below and update the code to test ImageImportFromUrlDTOInner
      //var instane = new Swagger.ImageImportFromUrlDTOInner();
      //expect(instance).to.be.a(Swagger.ImageImportFromUrlDTOInner);
    });

    it('should have the property applicationType (base name: "applicationType")', function() {
      // uncomment below and update the code to test the property applicationType
      //var instane = new Swagger.ImageImportFromUrlDTOInner();
      //expect(instance).to.be();
    });

    it('should have the property imageFamily (base name: "imageFamily")', function() {
      // uncomment below and update the code to test the property imageFamily
      //var instane = new Swagger.ImageImportFromUrlDTOInner();
      //expect(instance).to.be();
    });

    it('should have the property sourceURL (base name: "sourceURL")', function() {
      // uncomment below and update the code to test the property sourceURL
      //var instane = new Swagger.ImageImportFromUrlDTOInner();
      //expect(instance).to.be();
    });

    it('should have the property thirdParty (base name: "thirdParty")', function() {
      // uncomment below and update the code to test the property thirdParty
      //var instane = new Swagger.ImageImportFromUrlDTOInner();
      //expect(instance).to.be();
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instane = new Swagger.ImageImportFromUrlDTOInner();
      //expect(instance).to.be();
    });

  });

}));
