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
    define(['ApiClient', 'model/ResetRequestDeviceResetList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResetRequestDeviceResetList'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.ClaimDeviceRequest = factory(root.Swagger.ApiClient, root.Swagger.ResetRequestDeviceResetList);
  }
}(this, function(ApiClient, ResetRequestDeviceResetList) {
  'use strict';




  /**
   * The ClaimDeviceRequest model module.
   * @module model/ClaimDeviceRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClaimDeviceRequest</code>.
   * @alias module:model/ClaimDeviceRequest
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ClaimDeviceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClaimDeviceRequest} obj Optional instance to populate.
   * @return {module:model/ClaimDeviceRequest} The populated <code>ClaimDeviceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configFileUrl')) {
        obj['configFileUrl'] = ApiClient.convertToType(data['configFileUrl'], 'String');
      }
      if (data.hasOwnProperty('configId')) {
        obj['configId'] = ApiClient.convertToType(data['configId'], 'String');
      }
      if (data.hasOwnProperty('deviceClaimList')) {
        obj['deviceClaimList'] = ApiClient.convertToType(data['deviceClaimList'], [ResetRequestDeviceResetList]);
      }
      if (data.hasOwnProperty('fileServiceId')) {
        obj['fileServiceId'] = ApiClient.convertToType(data['fileServiceId'], 'String');
      }
      if (data.hasOwnProperty('imageId')) {
        obj['imageId'] = ApiClient.convertToType(data['imageId'], 'String');
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
      }
      if (data.hasOwnProperty('projectId')) {
        obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
      }
      if (data.hasOwnProperty('workflowId')) {
        obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} configFileUrl
   */
  exports.prototype['configFileUrl'] = undefined;
  /**
   * @member {String} configId
   */
  exports.prototype['configId'] = undefined;
  /**
   * @member {Array.<module:model/ResetRequestDeviceResetList>} deviceClaimList
   */
  exports.prototype['deviceClaimList'] = undefined;
  /**
   * @member {String} fileServiceId
   */
  exports.prototype['fileServiceId'] = undefined;
  /**
   * @member {String} imageId
   */
  exports.prototype['imageId'] = undefined;
  /**
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;
  /**
   * @member {String} projectId
   */
  exports.prototype['projectId'] = undefined;
  /**
   * @member {String} workflowId
   */
  exports.prototype['workflowId'] = undefined;



  return exports;
}));

