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
    define(['ApiClient', 'model/SAVAMappingProfile', 'model/SAVAMappingSyncResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SAVAMappingProfile'), require('./SAVAMappingSyncResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.SAVAMapping = factory(root.Swagger.ApiClient, root.Swagger.SAVAMappingProfile, root.Swagger.SAVAMappingSyncResult);
  }
}(this, function(ApiClient, SAVAMappingProfile, SAVAMappingSyncResult) {
  'use strict';




  /**
   * The SAVAMapping model module.
   * @module model/SAVAMapping
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SAVAMapping</code>.
   * @alias module:model/SAVAMapping
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>SAVAMapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SAVAMapping} obj Optional instance to populate.
   * @return {module:model/SAVAMapping} The populated <code>SAVAMapping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('autoSyncPeriod')) {
        obj['autoSyncPeriod'] = ApiClient.convertToType(data['autoSyncPeriod'], 'Number');
      }
      if (data.hasOwnProperty('ccoUser')) {
        obj['ccoUser'] = ApiClient.convertToType(data['ccoUser'], 'String');
      }
      if (data.hasOwnProperty('expiry')) {
        obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Number');
      }
      if (data.hasOwnProperty('lastSync')) {
        obj['lastSync'] = ApiClient.convertToType(data['lastSync'], 'Number');
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = SAVAMappingProfile.constructFromObject(data['profile']);
      }
      if (data.hasOwnProperty('smartAccountId')) {
        obj['smartAccountId'] = ApiClient.convertToType(data['smartAccountId'], 'String');
      }
      if (data.hasOwnProperty('syncResult')) {
        obj['syncResult'] = SAVAMappingSyncResult.constructFromObject(data['syncResult']);
      }
      if (data.hasOwnProperty('syncResultStr')) {
        obj['syncResultStr'] = ApiClient.convertToType(data['syncResultStr'], 'String');
      }
      if (data.hasOwnProperty('syncStartTime')) {
        obj['syncStartTime'] = ApiClient.convertToType(data['syncStartTime'], 'Number');
      }
      if (data.hasOwnProperty('syncStatus')) {
        obj['syncStatus'] = ApiClient.convertToType(data['syncStatus'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('virtualAccountId')) {
        obj['virtualAccountId'] = ApiClient.convertToType(data['virtualAccountId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} autoSyncPeriod
   */
  exports.prototype['autoSyncPeriod'] = undefined;
  /**
   * @member {String} ccoUser
   */
  exports.prototype['ccoUser'] = undefined;
  /**
   * @member {Number} expiry
   */
  exports.prototype['expiry'] = undefined;
  /**
   * @member {Number} lastSync
   */
  exports.prototype['lastSync'] = undefined;
  /**
   * @member {module:model/SAVAMappingProfile} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * @member {String} smartAccountId
   */
  exports.prototype['smartAccountId'] = undefined;
  /**
   * @member {module:model/SAVAMappingSyncResult} syncResult
   */
  exports.prototype['syncResult'] = undefined;
  /**
   * @member {String} syncResultStr
   */
  exports.prototype['syncResultStr'] = undefined;
  /**
   * @member {Number} syncStartTime
   */
  exports.prototype['syncStartTime'] = undefined;
  /**
   * @member {module:model/SAVAMapping.SyncStatusEnum} syncStatus
   */
  exports.prototype['syncStatus'] = undefined;
  /**
   * @member {String} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {String} virtualAccountId
   */
  exports.prototype['virtualAccountId'] = undefined;


  /**
   * Allowed values for the <code>syncStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SyncStatusEnum = {
    /**
     * value: "NOT_SYNCED"
     * @const
     */
    "NOT_SYNCED": "NOT_SYNCED",
    /**
     * value: "SYNCING"
     * @const
     */
    "SYNCING": "SYNCING",
    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",
    /**
     * value: "FAILURE"
     * @const
     */
    "FAILURE": "FAILURE"  };


  return exports;
}));


