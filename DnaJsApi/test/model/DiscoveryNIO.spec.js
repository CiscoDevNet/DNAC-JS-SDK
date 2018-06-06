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
    instance = new Swagger.DiscoveryNIO();
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

  describe('DiscoveryNIO', function() {
    it('should create an instance of DiscoveryNIO', function() {
      // uncomment below and update the code to test DiscoveryNIO
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be.a(Swagger.DiscoveryNIO);
    });

    it('should have the property attributeInfo (base name: "attributeInfo")', function() {
      // uncomment below and update the code to test the property attributeInfo
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property cdpLevel (base name: "cdpLevel")', function() {
      // uncomment below and update the code to test the property cdpLevel
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property deviceIds (base name: "deviceIds")', function() {
      // uncomment below and update the code to test the property deviceIds
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property discoveryCondition (base name: "discoveryCondition")', function() {
      // uncomment below and update the code to test the property discoveryCondition
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property discoveryStatus (base name: "discoveryStatus")', function() {
      // uncomment below and update the code to test the property discoveryStatus
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property discoveryType (base name: "discoveryType")', function() {
      // uncomment below and update the code to test the property discoveryType
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property enablePasswordList (base name: "enablePasswordList")', function() {
      // uncomment below and update the code to test the property enablePasswordList
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property globalCredentialIdList (base name: "globalCredentialIdList")', function() {
      // uncomment below and update the code to test the property globalCredentialIdList
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property httpReadCredential (base name: "httpReadCredential")', function() {
      // uncomment below and update the code to test the property httpReadCredential
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property httpWriteCredential (base name: "httpWriteCredential")', function() {
      // uncomment below and update the code to test the property httpWriteCredential
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property ipAddressList (base name: "ipAddressList")', function() {
      // uncomment below and update the code to test the property ipAddressList
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property ipFilterList (base name: "ipFilterList")', function() {
      // uncomment below and update the code to test the property ipFilterList
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property isAutoCdp (base name: "isAutoCdp")', function() {
      // uncomment below and update the code to test the property isAutoCdp
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property lldpLevel (base name: "lldpLevel")', function() {
      // uncomment below and update the code to test the property lldpLevel
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property netconfPort (base name: "netconfPort")', function() {
      // uncomment below and update the code to test the property netconfPort
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property numDevices (base name: "numDevices")', function() {
      // uncomment below and update the code to test the property numDevices
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property parentDiscoveryId (base name: "parentDiscoveryId")', function() {
      // uncomment below and update the code to test the property parentDiscoveryId
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property passwordList (base name: "passwordList")', function() {
      // uncomment below and update the code to test the property passwordList
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property preferredMgmtIPMethod (base name: "preferredMgmtIPMethod")', function() {
      // uncomment below and update the code to test the property preferredMgmtIPMethod
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property protocolOrder (base name: "protocolOrder")', function() {
      // uncomment below and update the code to test the property protocolOrder
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property retryCount (base name: "retryCount")', function() {
      // uncomment below and update the code to test the property retryCount
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpAuthPassphrase (base name: "snmpAuthPassphrase")', function() {
      // uncomment below and update the code to test the property snmpAuthPassphrase
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpAuthProtocol (base name: "snmpAuthProtocol")', function() {
      // uncomment below and update the code to test the property snmpAuthProtocol
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpMode (base name: "snmpMode")', function() {
      // uncomment below and update the code to test the property snmpMode
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpPrivPassphrase (base name: "snmpPrivPassphrase")', function() {
      // uncomment below and update the code to test the property snmpPrivPassphrase
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpPrivProtocol (base name: "snmpPrivProtocol")', function() {
      // uncomment below and update the code to test the property snmpPrivProtocol
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpRoCommunity (base name: "snmpRoCommunity")', function() {
      // uncomment below and update the code to test the property snmpRoCommunity
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpRoCommunityDesc (base name: "snmpRoCommunityDesc")', function() {
      // uncomment below and update the code to test the property snmpRoCommunityDesc
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpRwCommunity (base name: "snmpRwCommunity")', function() {
      // uncomment below and update the code to test the property snmpRwCommunity
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpRwCommunityDesc (base name: "snmpRwCommunityDesc")', function() {
      // uncomment below and update the code to test the property snmpRwCommunityDesc
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property snmpUserName (base name: "snmpUserName")', function() {
      // uncomment below and update the code to test the property snmpUserName
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property timeOut (base name: "timeOut")', function() {
      // uncomment below and update the code to test the property timeOut
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property updateMgmtIp (base name: "updateMgmtIp")', function() {
      // uncomment below and update the code to test the property updateMgmtIp
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

    it('should have the property userNameList (base name: "userNameList")', function() {
      // uncomment below and update the code to test the property userNameList
      //var instane = new Swagger.DiscoveryNIO();
      //expect(instance).to.be();
    });

  });

}));
