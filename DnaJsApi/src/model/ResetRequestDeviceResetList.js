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
    define(['ApiClient', 'model/ResetRequestConfigList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResetRequestConfigList'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.ResetRequestDeviceResetList = factory(root.Swagger.ApiClient, root.Swagger.ResetRequestConfigList);
  }
}(this, function(ApiClient, ResetRequestConfigList) {
  'use strict';




  /**
   * The ResetRequestDeviceResetList model module.
   * @module model/ResetRequestDeviceResetList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ResetRequestDeviceResetList</code>.
   * @alias module:model/ResetRequestDeviceResetList
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ResetRequestDeviceResetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResetRequestDeviceResetList} obj Optional instance to populate.
   * @return {module:model/ResetRequestDeviceResetList} The populated <code>ResetRequestDeviceResetList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configList')) {
        obj['configList'] = ApiClient.convertToType(data['configList'], [ResetRequestConfigList]);
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('licenseLevel')) {
        obj['licenseLevel'] = ApiClient.convertToType(data['licenseLevel'], 'String');
      }
      if (data.hasOwnProperty('licenseType')) {
        obj['licenseType'] = ApiClient.convertToType(data['licenseType'], 'String');
      }
      if (data.hasOwnProperty('topOfStackSerialNumber')) {
        obj['topOfStackSerialNumber'] = ApiClient.convertToType(data['topOfStackSerialNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ResetRequestConfigList>} configList
   */
  exports.prototype['configList'] = undefined;
  /**
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * @member {String} licenseLevel
   */
  exports.prototype['licenseLevel'] = undefined;
  /**
   * @member {String} licenseType
   */
  exports.prototype['licenseType'] = undefined;
  /**
   * @member {String} topOfStackSerialNumber
   */
  exports.prototype['topOfStackSerialNumber'] = undefined;



  return exports;
}));

