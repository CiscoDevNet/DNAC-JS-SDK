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
    define(['ApiClient', 'model/SAVAMappingSyncResultSyncList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SAVAMappingSyncResultSyncList'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.SAVAMappingSyncResult = factory(root.Swagger.ApiClient, root.Swagger.SAVAMappingSyncResultSyncList);
  }
}(this, function(ApiClient, SAVAMappingSyncResultSyncList) {
  'use strict';




  /**
   * The SAVAMappingSyncResult model module.
   * @module model/SAVAMappingSyncResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SAVAMappingSyncResult</code>.
   * @alias module:model/SAVAMappingSyncResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SAVAMappingSyncResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SAVAMappingSyncResult} obj Optional instance to populate.
   * @return {module:model/SAVAMappingSyncResult} The populated <code>SAVAMappingSyncResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('syncList')) {
        obj['syncList'] = ApiClient.convertToType(data['syncList'], [SAVAMappingSyncResultSyncList]);
      }
      if (data.hasOwnProperty('syncMsg')) {
        obj['syncMsg'] = ApiClient.convertToType(data['syncMsg'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SAVAMappingSyncResultSyncList>} syncList
   */
  exports.prototype['syncList'] = undefined;
  /**
   * @member {String} syncMsg
   */
  exports.prototype['syncMsg'] = undefined;



  return exports;
}));

