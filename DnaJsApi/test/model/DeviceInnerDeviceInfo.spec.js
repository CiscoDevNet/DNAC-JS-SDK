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
    instance = new Swagger.DeviceInnerDeviceInfo();
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

  describe('DeviceInnerDeviceInfo', function() {
    it('should create an instance of DeviceInnerDeviceInfo', function() {
      // uncomment below and update the code to test DeviceInnerDeviceInfo
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be.a(Swagger.DeviceInnerDeviceInfo);
    });

    it('should have the property aaaCredentials (base name: "aaaCredentials")', function() {
      // uncomment below and update the code to test the property aaaCredentials
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property addedOn (base name: "addedOn")', function() {
      // uncomment below and update the code to test the property addedOn
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property addnMacAddrs (base name: "addnMacAddrs")', function() {
      // uncomment below and update the code to test the property addnMacAddrs
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property agentType (base name: "agentType")', function() {
      // uncomment below and update the code to test the property agentType
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property authStatus (base name: "authStatus")', function() {
      // uncomment below and update the code to test the property authStatus
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property authenticatedSudiSerialNo (base name: "authenticatedSudiSerialNo")', function() {
      // uncomment below and update the code to test the property authenticatedSudiSerialNo
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property capabilitiesSupported (base name: "capabilitiesSupported")', function() {
      // uncomment below and update the code to test the property capabilitiesSupported
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property cmState (base name: "cmState")', function() {
      // uncomment below and update the code to test the property cmState
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property deviceSudiSerialNos (base name: "deviceSudiSerialNos")', function() {
      // uncomment below and update the code to test the property deviceSudiSerialNos
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property featuresSupported (base name: "featuresSupported")', function() {
      // uncomment below and update the code to test the property featuresSupported
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property fileSystemList (base name: "fileSystemList")', function() {
      // uncomment below and update the code to test the property fileSystemList
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property firstContact (base name: "firstContact")', function() {
      // uncomment below and update the code to test the property firstContact
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property httpHeaders (base name: "httpHeaders")', function() {
      // uncomment below and update the code to test the property httpHeaders
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property imageFile (base name: "imageFile")', function() {
      // uncomment below and update the code to test the property imageFile
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property imageVersion (base name: "imageVersion")', function() {
      // uncomment below and update the code to test the property imageVersion
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property ipInterfaces (base name: "ipInterfaces")', function() {
      // uncomment below and update the code to test the property ipInterfaces
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastContact (base name: "lastContact")', function() {
      // uncomment below and update the code to test the property lastContact
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastSyncTime (base name: "lastSyncTime")', function() {
      // uncomment below and update the code to test the property lastSyncTime
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdateOn (base name: "lastUpdateOn")', function() {
      // uncomment below and update the code to test the property lastUpdateOn
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "macAddress")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property neighborLinks (base name: "neighborLinks")', function() {
      // uncomment below and update the code to test the property neighborLinks
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property onbState (base name: "onbState")', function() {
      // uncomment below and update the code to test the property onbState
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property pid (base name: "pid")', function() {
      // uncomment below and update the code to test the property pid
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property pnpProfileList (base name: "pnpProfileList")', function() {
      // uncomment below and update the code to test the property pnpProfileList
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property preWorkflowCliOuputs (base name: "preWorkflowCliOuputs")', function() {
      // uncomment below and update the code to test the property preWorkflowCliOuputs
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property projectName (base name: "projectName")', function() {
      // uncomment below and update the code to test the property projectName
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property reloadRequested (base name: "reloadRequested")', function() {
      // uncomment below and update the code to test the property reloadRequested
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serialNumber")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property smartAccountId (base name: "smartAccountId")', function() {
      // uncomment below and update the code to test the property smartAccountId
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property stack (base name: "stack")', function() {
      // uncomment below and update the code to test the property stack
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property stackInfo (base name: "stackInfo")', function() {
      // uncomment below and update the code to test the property stackInfo
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property sudiRequired (base name: "sudiRequired")', function() {
      // uncomment below and update the code to test the property sudiRequired
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property userSudiSerialNos (base name: "userSudiSerialNos")', function() {
      // uncomment below and update the code to test the property userSudiSerialNos
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property virtualAccountId (base name: "virtualAccountId")', function() {
      // uncomment below and update the code to test the property virtualAccountId
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property workflowId (base name: "workflowId")', function() {
      // uncomment below and update the code to test the property workflowId
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property workflowName (base name: "workflowName")', function() {
      // uncomment below and update the code to test the property workflowName
      //var instane = new Swagger.DeviceInnerDeviceInfo();
      //expect(instance).to.be();
    });

  });

}));
