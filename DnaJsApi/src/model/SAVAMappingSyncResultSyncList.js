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
    root.Swagger.SAVAMappingSyncResultSyncList = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SAVAMappingSyncResultSyncList model module.
   * @module model/SAVAMappingSyncResultSyncList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SAVAMappingSyncResultSyncList</code>.
   * @alias module:model/SAVAMappingSyncResultSyncList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SAVAMappingSyncResultSyncList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SAVAMappingSyncResultSyncList} obj Optional instance to populate.
   * @return {module:model/SAVAMappingSyncResultSyncList} The populated <code>SAVAMappingSyncResultSyncList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceSnList')) {
        obj['deviceSnList'] = ApiClient.convertToType(data['deviceSnList'], ['String']);
      }
      if (data.hasOwnProperty('syncType')) {
        obj['syncType'] = ApiClient.convertToType(data['syncType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} deviceSnList
   */
  exports.prototype['deviceSnList'] = undefined;
  /**
   * @member {module:model/SAVAMappingSyncResultSyncList.SyncTypeEnum} syncType
   */
  exports.prototype['syncType'] = undefined;


  /**
   * Allowed values for the <code>syncType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SyncTypeEnum = {
    /**
     * value: "Add"
     * @const
     */
    "Add": "Add",
    /**
     * value: "Update"
     * @const
     */
    "Update": "Update",
    /**
     * value: "Delete"
     * @const
     */
    "Delete": "Delete",
    /**
     * value: "MismatchError"
     * @const
     */
    "MismatchError": "MismatchError"  };


  return exports;
}));

