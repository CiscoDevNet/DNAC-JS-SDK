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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.NetworkDeviceNIOListResultResponse = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NetworkDeviceNIOListResultResponse model module.
   * @module model/NetworkDeviceNIOListResultResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NetworkDeviceNIOListResultResponse</code>.
   * @alias module:model/NetworkDeviceNIOListResultResponse
   * @class
   */
  var exports = function() {
    var _this = this;















































  };

  /**
   * Constructs a <code>NetworkDeviceNIOListResultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkDeviceNIOListResultResponse} obj Optional instance to populate.
   * @return {module:model/NetworkDeviceNIOListResultResponse} The populated <code>NetworkDeviceNIOListResultResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('anchorWlcForAp')) {
        obj['anchorWlcForAp'] = ApiClient.convertToType(data['anchorWlcForAp'], 'String');
      }
      if (data.hasOwnProperty('authModelId')) {
        obj['authModelId'] = ApiClient.convertToType(data['authModelId'], 'String');
      }
      if (data.hasOwnProperty('avgUpdateFrequency')) {
        obj['avgUpdateFrequency'] = ApiClient.convertToType(data['avgUpdateFrequency'], 'Number');
      }
      if (data.hasOwnProperty('bootDateTime')) {
        obj['bootDateTime'] = ApiClient.convertToType(data['bootDateTime'], 'String');
      }
      if (data.hasOwnProperty('cliStatus')) {
        obj['cliStatus'] = ApiClient.convertToType(data['cliStatus'], 'String');
      }
      if (data.hasOwnProperty('duplicateDeviceId')) {
        obj['duplicateDeviceId'] = ApiClient.convertToType(data['duplicateDeviceId'], 'String');
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('errorDescription')) {
        obj['errorDescription'] = ApiClient.convertToType(data['errorDescription'], 'String');
      }
      if (data.hasOwnProperty('family')) {
        obj['family'] = ApiClient.convertToType(data['family'], 'String');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('httpStatus')) {
        obj['httpStatus'] = ApiClient.convertToType(data['httpStatus'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('imageName')) {
        obj['imageName'] = ApiClient.convertToType(data['imageName'], 'String');
      }
      if (data.hasOwnProperty('ingressQueueConfig')) {
        obj['ingressQueueConfig'] = ApiClient.convertToType(data['ingressQueueConfig'], 'String');
      }
      if (data.hasOwnProperty('interfaceCount')) {
        obj['interfaceCount'] = ApiClient.convertToType(data['interfaceCount'], 'String');
      }
      if (data.hasOwnProperty('inventoryCollectionStatus')) {
        obj['inventoryCollectionStatus'] = ApiClient.convertToType(data['inventoryCollectionStatus'], 'String');
      }
      if (data.hasOwnProperty('inventoryReachabilityStatus')) {
        obj['inventoryReachabilityStatus'] = ApiClient.convertToType(data['inventoryReachabilityStatus'], 'String');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'String');
      }
      if (data.hasOwnProperty('lineCardCount')) {
        obj['lineCardCount'] = ApiClient.convertToType(data['lineCardCount'], 'String');
      }
      if (data.hasOwnProperty('lineCardId')) {
        obj['lineCardId'] = ApiClient.convertToType(data['lineCardId'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('locationName')) {
        obj['locationName'] = ApiClient.convertToType(data['locationName'], 'String');
      }
      if (data.hasOwnProperty('macAddress')) {
        obj['macAddress'] = ApiClient.convertToType(data['macAddress'], 'String');
      }
      if (data.hasOwnProperty('managementIpAddress')) {
        obj['managementIpAddress'] = ApiClient.convertToType(data['managementIpAddress'], 'String');
      }
      if (data.hasOwnProperty('memorySize')) {
        obj['memorySize'] = ApiClient.convertToType(data['memorySize'], 'String');
      }
      if (data.hasOwnProperty('netconfStatus')) {
        obj['netconfStatus'] = ApiClient.convertToType(data['netconfStatus'], 'String');
      }
      if (data.hasOwnProperty('numUpdates')) {
        obj['numUpdates'] = ApiClient.convertToType(data['numUpdates'], 'Number');
      }
      if (data.hasOwnProperty('pingStatus')) {
        obj['pingStatus'] = ApiClient.convertToType(data['pingStatus'], 'String');
      }
      if (data.hasOwnProperty('platformId')) {
        obj['platformId'] = ApiClient.convertToType(data['platformId'], 'String');
      }
      if (data.hasOwnProperty('portRange')) {
        obj['portRange'] = ApiClient.convertToType(data['portRange'], 'String');
      }
      if (data.hasOwnProperty('qosStatus')) {
        obj['qosStatus'] = ApiClient.convertToType(data['qosStatus'], 'String');
      }
      if (data.hasOwnProperty('reachabilityFailureReason')) {
        obj['reachabilityFailureReason'] = ApiClient.convertToType(data['reachabilityFailureReason'], 'String');
      }
      if (data.hasOwnProperty('reachabilityStatus')) {
        obj['reachabilityStatus'] = ApiClient.convertToType(data['reachabilityStatus'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('roleSource')) {
        obj['roleSource'] = ApiClient.convertToType(data['roleSource'], 'String');
      }
      if (data.hasOwnProperty('serialNumber')) {
        obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
      }
      if (data.hasOwnProperty('snmpContact')) {
        obj['snmpContact'] = ApiClient.convertToType(data['snmpContact'], 'String');
      }
      if (data.hasOwnProperty('snmpLocation')) {
        obj['snmpLocation'] = ApiClient.convertToType(data['snmpLocation'], 'String');
      }
      if (data.hasOwnProperty('snmpStatus')) {
        obj['snmpStatus'] = ApiClient.convertToType(data['snmpStatus'], 'String');
      }
      if (data.hasOwnProperty('softwareVersion')) {
        obj['softwareVersion'] = ApiClient.convertToType(data['softwareVersion'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('tagCount')) {
        obj['tagCount'] = ApiClient.convertToType(data['tagCount'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('upTime')) {
        obj['upTime'] = ApiClient.convertToType(data['upTime'], 'String');
      }
      if (data.hasOwnProperty('vendor')) {
        obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
      }
      if (data.hasOwnProperty('wlcApDeviceStatus')) {
        obj['wlcApDeviceStatus'] = ApiClient.convertToType(data['wlcApDeviceStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} anchorWlcForAp
   */
  exports.prototype['anchorWlcForAp'] = undefined;
  /**
   * @member {String} authModelId
   */
  exports.prototype['authModelId'] = undefined;
  /**
   * @member {Number} avgUpdateFrequency
   */
  exports.prototype['avgUpdateFrequency'] = undefined;
  /**
   * @member {String} bootDateTime
   */
  exports.prototype['bootDateTime'] = undefined;
  /**
   * @member {String} cliStatus
   */
  exports.prototype['cliStatus'] = undefined;
  /**
   * @member {String} duplicateDeviceId
   */
  exports.prototype['duplicateDeviceId'] = undefined;
  /**
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * @member {String} errorDescription
   */
  exports.prototype['errorDescription'] = undefined;
  /**
   * @member {String} family
   */
  exports.prototype['family'] = undefined;
  /**
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * @member {String} httpStatus
   */
  exports.prototype['httpStatus'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} imageName
   */
  exports.prototype['imageName'] = undefined;
  /**
   * @member {String} ingressQueueConfig
   */
  exports.prototype['ingressQueueConfig'] = undefined;
  /**
   * @member {String} interfaceCount
   */
  exports.prototype['interfaceCount'] = undefined;
  /**
   * @member {String} inventoryCollectionStatus
   */
  exports.prototype['inventoryCollectionStatus'] = undefined;
  /**
   * @member {String} inventoryReachabilityStatus
   */
  exports.prototype['inventoryReachabilityStatus'] = undefined;
  /**
   * @member {String} lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;
  /**
   * @member {String} lineCardCount
   */
  exports.prototype['lineCardCount'] = undefined;
  /**
   * @member {String} lineCardId
   */
  exports.prototype['lineCardId'] = undefined;
  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {String} locationName
   */
  exports.prototype['locationName'] = undefined;
  /**
   * @member {String} macAddress
   */
  exports.prototype['macAddress'] = undefined;
  /**
   * @member {String} managementIpAddress
   */
  exports.prototype['managementIpAddress'] = undefined;
  /**
   * @member {String} memorySize
   */
  exports.prototype['memorySize'] = undefined;
  /**
   * @member {String} netconfStatus
   */
  exports.prototype['netconfStatus'] = undefined;
  /**
   * @member {Number} numUpdates
   */
  exports.prototype['numUpdates'] = undefined;
  /**
   * @member {String} pingStatus
   */
  exports.prototype['pingStatus'] = undefined;
  /**
   * @member {String} platformId
   */
  exports.prototype['platformId'] = undefined;
  /**
   * @member {String} portRange
   */
  exports.prototype['portRange'] = undefined;
  /**
   * @member {String} qosStatus
   */
  exports.prototype['qosStatus'] = undefined;
  /**
   * @member {String} reachabilityFailureReason
   */
  exports.prototype['reachabilityFailureReason'] = undefined;
  /**
   * @member {String} reachabilityStatus
   */
  exports.prototype['reachabilityStatus'] = undefined;
  /**
   * @member {String} role
   */
  exports.prototype['role'] = undefined;
  /**
   * @member {String} roleSource
   */
  exports.prototype['roleSource'] = undefined;
  /**
   * @member {String} serialNumber
   */
  exports.prototype['serialNumber'] = undefined;
  /**
   * @member {String} snmpContact
   */
  exports.prototype['snmpContact'] = undefined;
  /**
   * @member {String} snmpLocation
   */
  exports.prototype['snmpLocation'] = undefined;
  /**
   * @member {String} snmpStatus
   */
  exports.prototype['snmpStatus'] = undefined;
  /**
   * @member {String} softwareVersion
   */
  exports.prototype['softwareVersion'] = undefined;
  /**
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {Number} tagCount
   */
  exports.prototype['tagCount'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} upTime
   */
  exports.prototype['upTime'] = undefined;
  /**
   * @member {String} vendor
   */
  exports.prototype['vendor'] = undefined;
  /**
   * @member {String} wlcApDeviceStatus
   */
  exports.prototype['wlcApDeviceStatus'] = undefined;



  return exports;
}));


