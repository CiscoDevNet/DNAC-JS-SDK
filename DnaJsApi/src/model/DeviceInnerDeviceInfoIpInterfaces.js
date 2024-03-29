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
    root.Swagger.DeviceInnerDeviceInfoIpInterfaces = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceInnerDeviceInfoIpInterfaces model module.
   * @module model/DeviceInnerDeviceInfoIpInterfaces
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceInnerDeviceInfoIpInterfaces</code>.
   * @alias module:model/DeviceInnerDeviceInfoIpInterfaces
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DeviceInnerDeviceInfoIpInterfaces</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceInnerDeviceInfoIpInterfaces} obj Optional instance to populate.
   * @return {module:model/DeviceInnerDeviceInfoIpInterfaces} The populated <code>DeviceInnerDeviceInfoIpInterfaces</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ipv4Address')) {
        obj['ipv4Address'] = ApiClient.convertToType(data['ipv4Address'], Object);
      }
      if (data.hasOwnProperty('ipv6AddressList')) {
        obj['ipv6AddressList'] = ApiClient.convertToType(data['ipv6AddressList'], [Object]);
      }
      if (data.hasOwnProperty('macAddress')) {
        obj['macAddress'] = ApiClient.convertToType(data['macAddress'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} ipv4Address
   */
  exports.prototype['ipv4Address'] = undefined;
  /**
   * @member {Array.<Object>} ipv6AddressList
   */
  exports.prototype['ipv6AddressList'] = undefined;
  /**
   * @member {String} macAddress
   */
  exports.prototype['macAddress'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


