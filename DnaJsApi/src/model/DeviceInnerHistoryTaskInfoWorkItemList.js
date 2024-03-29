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
    root.Swagger.DeviceInnerHistoryTaskInfoWorkItemList = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceInnerHistoryTaskInfoWorkItemList model module.
   * @module model/DeviceInnerHistoryTaskInfoWorkItemList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceInnerHistoryTaskInfoWorkItemList</code>.
   * @alias module:model/DeviceInnerHistoryTaskInfoWorkItemList
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DeviceInnerHistoryTaskInfoWorkItemList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceInnerHistoryTaskInfoWorkItemList} obj Optional instance to populate.
   * @return {module:model/DeviceInnerHistoryTaskInfoWorkItemList} The populated <code>DeviceInnerHistoryTaskInfoWorkItemList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], 'String');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Number');
      }
      if (data.hasOwnProperty('outputStr')) {
        obj['outputStr'] = ApiClient.convertToType(data['outputStr'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('timeTaken')) {
        obj['timeTaken'] = ApiClient.convertToType(data['timeTaken'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} command
   */
  exports.prototype['command'] = undefined;
  /**
   * @member {Number} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * @member {String} outputStr
   */
  exports.prototype['outputStr'] = undefined;
  /**
   * @member {Number} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Number} timeTaken
   */
  exports.prototype['timeTaken'] = undefined;



  return exports;
}));


