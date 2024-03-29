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
    define(['ApiClient', 'model/DeviceInnerDeviceInfoStackInfoStackMemberList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceInnerDeviceInfoStackInfoStackMemberList'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.DeviceInnerDeviceInfoStackInfo = factory(root.Swagger.ApiClient, root.Swagger.DeviceInnerDeviceInfoStackInfoStackMemberList);
  }
}(this, function(ApiClient, DeviceInnerDeviceInfoStackInfoStackMemberList) {
  'use strict';




  /**
   * The DeviceInnerDeviceInfoStackInfo model module.
   * @module model/DeviceInnerDeviceInfoStackInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceInnerDeviceInfoStackInfo</code>.
   * @alias module:model/DeviceInnerDeviceInfoStackInfo
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DeviceInnerDeviceInfoStackInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceInnerDeviceInfoStackInfo} obj Optional instance to populate.
   * @return {module:model/DeviceInnerDeviceInfoStackInfo} The populated <code>DeviceInnerDeviceInfoStackInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isFullRing')) {
        obj['isFullRing'] = ApiClient.convertToType(data['isFullRing'], 'Boolean');
      }
      if (data.hasOwnProperty('stackMemberList')) {
        obj['stackMemberList'] = ApiClient.convertToType(data['stackMemberList'], [DeviceInnerDeviceInfoStackInfoStackMemberList]);
      }
      if (data.hasOwnProperty('stackRingProtocol')) {
        obj['stackRingProtocol'] = ApiClient.convertToType(data['stackRingProtocol'], 'String');
      }
      if (data.hasOwnProperty('supportsStackWorkflows')) {
        obj['supportsStackWorkflows'] = ApiClient.convertToType(data['supportsStackWorkflows'], 'Boolean');
      }
      if (data.hasOwnProperty('totalMemberCount')) {
        obj['totalMemberCount'] = ApiClient.convertToType(data['totalMemberCount'], 'Number');
      }
      if (data.hasOwnProperty('validLicenseLevels')) {
        obj['validLicenseLevels'] = ApiClient.convertToType(data['validLicenseLevels'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} isFullRing
   */
  exports.prototype['isFullRing'] = undefined;
  /**
   * @member {Array.<module:model/DeviceInnerDeviceInfoStackInfoStackMemberList>} stackMemberList
   */
  exports.prototype['stackMemberList'] = undefined;
  /**
   * @member {String} stackRingProtocol
   */
  exports.prototype['stackRingProtocol'] = undefined;
  /**
   * @member {Boolean} supportsStackWorkflows
   */
  exports.prototype['supportsStackWorkflows'] = undefined;
  /**
   * @member {Number} totalMemberCount
   */
  exports.prototype['totalMemberCount'] = undefined;
  /**
   * @member {Array.<String>} validLicenseLevels
   */
  exports.prototype['validLicenseLevels'] = undefined;



  return exports;
}));


