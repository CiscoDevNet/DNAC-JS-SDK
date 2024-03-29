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
    root.Swagger.DeviceIfListResultResponse = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceIfListResultResponse model module.
   * @module model/DeviceIfListResultResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceIfListResultResponse</code>.
   * @alias module:model/DeviceIfListResultResponse
   * @class
   */
  var exports = function() {
    var _this = this;































  };

  /**
   * Constructs a <code>DeviceIfListResultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceIfListResultResponse} obj Optional instance to populate.
   * @return {module:model/DeviceIfListResultResponse} The populated <code>DeviceIfListResultResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('adminStatus')) {
        obj['adminStatus'] = ApiClient.convertToType(data['adminStatus'], 'String');
      }
      if (data.hasOwnProperty('className')) {
        obj['className'] = ApiClient.convertToType(data['className'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('duplex')) {
        obj['duplex'] = ApiClient.convertToType(data['duplex'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ifIndex')) {
        obj['ifIndex'] = ApiClient.convertToType(data['ifIndex'], 'String');
      }
      if (data.hasOwnProperty('instanceTenantId')) {
        obj['instanceTenantId'] = ApiClient.convertToType(data['instanceTenantId'], 'String');
      }
      if (data.hasOwnProperty('instanceUuid')) {
        obj['instanceUuid'] = ApiClient.convertToType(data['instanceUuid'], 'String');
      }
      if (data.hasOwnProperty('interfaceType')) {
        obj['interfaceType'] = ApiClient.convertToType(data['interfaceType'], 'String');
      }
      if (data.hasOwnProperty('ipv4Address')) {
        obj['ipv4Address'] = ApiClient.convertToType(data['ipv4Address'], 'String');
      }
      if (data.hasOwnProperty('ipv4Mask')) {
        obj['ipv4Mask'] = ApiClient.convertToType(data['ipv4Mask'], 'String');
      }
      if (data.hasOwnProperty('isisSupport')) {
        obj['isisSupport'] = ApiClient.convertToType(data['isisSupport'], 'String');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'String');
      }
      if (data.hasOwnProperty('macAddress')) {
        obj['macAddress'] = ApiClient.convertToType(data['macAddress'], 'String');
      }
      if (data.hasOwnProperty('mappedPhysicalInterfaceId')) {
        obj['mappedPhysicalInterfaceId'] = ApiClient.convertToType(data['mappedPhysicalInterfaceId'], 'String');
      }
      if (data.hasOwnProperty('mappedPhysicalInterfaceName')) {
        obj['mappedPhysicalInterfaceName'] = ApiClient.convertToType(data['mappedPhysicalInterfaceName'], 'String');
      }
      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
      }
      if (data.hasOwnProperty('nativeVlanId')) {
        obj['nativeVlanId'] = ApiClient.convertToType(data['nativeVlanId'], 'String');
      }
      if (data.hasOwnProperty('ospfSupport')) {
        obj['ospfSupport'] = ApiClient.convertToType(data['ospfSupport'], 'String');
      }
      if (data.hasOwnProperty('pid')) {
        obj['pid'] = ApiClient.convertToType(data['pid'], 'String');
      }
      if (data.hasOwnProperty('portMode')) {
        obj['portMode'] = ApiClient.convertToType(data['portMode'], 'String');
      }
      if (data.hasOwnProperty('portName')) {
        obj['portName'] = ApiClient.convertToType(data['portName'], 'String');
      }
      if (data.hasOwnProperty('portType')) {
        obj['portType'] = ApiClient.convertToType(data['portType'], 'String');
      }
      if (data.hasOwnProperty('serialNo')) {
        obj['serialNo'] = ApiClient.convertToType(data['serialNo'], 'String');
      }
      if (data.hasOwnProperty('series')) {
        obj['series'] = ApiClient.convertToType(data['series'], 'String');
      }
      if (data.hasOwnProperty('speed')) {
        obj['speed'] = ApiClient.convertToType(data['speed'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('vlanId')) {
        obj['vlanId'] = ApiClient.convertToType(data['vlanId'], 'String');
      }
      if (data.hasOwnProperty('voiceVlan')) {
        obj['voiceVlan'] = ApiClient.convertToType(data['voiceVlan'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} adminStatus
   */
  exports.prototype['adminStatus'] = undefined;
  /**
   * @member {String} className
   */
  exports.prototype['className'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * @member {String} duplex
   */
  exports.prototype['duplex'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} ifIndex
   */
  exports.prototype['ifIndex'] = undefined;
  /**
   * @member {String} instanceTenantId
   */
  exports.prototype['instanceTenantId'] = undefined;
  /**
   * @member {String} instanceUuid
   */
  exports.prototype['instanceUuid'] = undefined;
  /**
   * @member {String} interfaceType
   */
  exports.prototype['interfaceType'] = undefined;
  /**
   * @member {String} ipv4Address
   */
  exports.prototype['ipv4Address'] = undefined;
  /**
   * @member {String} ipv4Mask
   */
  exports.prototype['ipv4Mask'] = undefined;
  /**
   * @member {String} isisSupport
   */
  exports.prototype['isisSupport'] = undefined;
  /**
   * @member {String} lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;
  /**
   * @member {String} macAddress
   */
  exports.prototype['macAddress'] = undefined;
  /**
   * @member {String} mappedPhysicalInterfaceId
   */
  exports.prototype['mappedPhysicalInterfaceId'] = undefined;
  /**
   * @member {String} mappedPhysicalInterfaceName
   */
  exports.prototype['mappedPhysicalInterfaceName'] = undefined;
  /**
   * @member {String} mediaType
   */
  exports.prototype['mediaType'] = undefined;
  /**
   * @member {String} nativeVlanId
   */
  exports.prototype['nativeVlanId'] = undefined;
  /**
   * @member {String} ospfSupport
   */
  exports.prototype['ospfSupport'] = undefined;
  /**
   * @member {String} pid
   */
  exports.prototype['pid'] = undefined;
  /**
   * @member {String} portMode
   */
  exports.prototype['portMode'] = undefined;
  /**
   * @member {String} portName
   */
  exports.prototype['portName'] = undefined;
  /**
   * @member {String} portType
   */
  exports.prototype['portType'] = undefined;
  /**
   * @member {String} serialNo
   */
  exports.prototype['serialNo'] = undefined;
  /**
   * @member {String} series
   */
  exports.prototype['series'] = undefined;
  /**
   * @member {String} speed
   */
  exports.prototype['speed'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} vlanId
   */
  exports.prototype['vlanId'] = undefined;
  /**
   * @member {String} voiceVlan
   */
  exports.prototype['voiceVlan'] = undefined;



  return exports;
}));


