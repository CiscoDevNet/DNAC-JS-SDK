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
    instance = new Swagger.TopologyResultResponseNodes();
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

  describe('TopologyResultResponseNodes', function() {
    it('should create an instance of TopologyResultResponseNodes', function() {
      // uncomment below and update the code to test TopologyResultResponseNodes
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be.a(Swagger.TopologyResultResponseNodes);
    });

    it('should have the property aclApplied (base name: "aclApplied")', function() {
      // uncomment below and update the code to test the property aclApplied
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property additionalInfo (base name: "additionalInfo")', function() {
      // uncomment below and update the code to test the property additionalInfo
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property customParam (base name: "customParam")', function() {
      // uncomment below and update the code to test the property customParam
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property dataPathId (base name: "dataPathId")', function() {
      // uncomment below and update the code to test the property dataPathId
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property family (base name: "family")', function() {
      // uncomment below and update the code to test the property family
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property fixed (base name: "fixed")', function() {
      // uncomment below and update the code to test the property fixed
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property greyOut (base name: "greyOut")', function() {
      // uncomment below and update the code to test the property greyOut
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property networkType (base name: "networkType")', function() {
      // uncomment below and update the code to test the property networkType
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property nodeType (base name: "nodeType")', function() {
      // uncomment below and update the code to test the property nodeType
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property osType (base name: "osType")', function() {
      // uncomment below and update the code to test the property osType
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property platformId (base name: "platformId")', function() {
      // uncomment below and update the code to test the property platformId
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property roleSource (base name: "roleSource")', function() {
      // uncomment below and update the code to test the property roleSource
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property softwareVersion (base name: "softwareVersion")', function() {
      // uncomment below and update the code to test the property softwareVersion
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property upperNode (base name: "upperNode")', function() {
      // uncomment below and update the code to test the property upperNode
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property vlanId (base name: "vlanId")', function() {
      // uncomment below and update the code to test the property vlanId
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property x (base name: "x")', function() {
      // uncomment below and update the code to test the property x
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

    it('should have the property y (base name: "y")', function() {
      // uncomment below and update the code to test the property y
      //var instane = new Swagger.TopologyResultResponseNodes();
      //expect(instance).to.be();
    });

  });

}));
